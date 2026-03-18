"use client";

import Reveal from "@/components/ui/Reveal";

interface PageHeroProps {
  label: string;
  title: string;
  description?: string;
  variant?: "light" | "dark" | "plum";
}

const config = {
  light: {
    bg: "bg-stone",
    text: "text-plum",
    label: "text-gold",
    desc: "text-muted",
    line: "bg-gold/50",
    halo: "rgba(176,144,88,0.05)",
    halo2: "rgba(61,28,51,0.03)",
    grid: "rgba(61,28,51,.04)",
    watermark: "text-plum/[0.02]",
  },
  dark: {
    bg: "bg-night",
    text: "text-light-text",
    label: "text-gold-light",
    desc: "text-light-text/50",
    line: "bg-gold/40",
    halo: "rgba(176,144,88,0.06)",
    halo2: "rgba(23,32,56,0.3)",
    grid: "rgba(240,235,227,.06)",
    watermark: "text-light-text/[0.02]",
  },
  plum: {
    bg: "bg-plum",
    text: "text-light-text",
    label: "text-gold-light",
    desc: "text-light-text/50",
    line: "bg-gold/40",
    halo: "rgba(176,144,88,0.07)",
    halo2: "rgba(23,32,56,0.2)",
    grid: "rgba(240,235,227,.04)",
    watermark: "text-light-text/[0.02]",
  },
};

export default function PageHero({
  label,
  title,
  description,
  variant = "plum",
}: PageHeroProps) {
  const c = config[variant];

  return (
    <section
      className={`relative ${c.bg} ${c.text} pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden`}
    >
      {/* Atmospheric halos */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 left-1/4 w-[500px] h-[500px]"
          style={{
            background: `radial-gradient(ellipse, ${c.halo} 0%, transparent 70%)`,
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px]"
          style={{
            background: `radial-gradient(ellipse, ${c.halo2} 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.5]"
        style={{
          backgroundImage: `linear-gradient(${c.grid} 1px, transparent 1px), linear-gradient(90deg, ${c.grid} 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      {/* Background watermark */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 -right-8 font-display text-[14rem] lg:text-[20rem] font-bold ${c.watermark} leading-none select-none pointer-events-none`}
        aria-hidden="true"
      >
        LC
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <p
            className={`font-body text-[11px] font-semibold tracking-[0.4em] uppercase ${c.label}`}
          >
            {label}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-4 font-display text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight">
            {title}
          </h1>
        </Reveal>

        {description && (
          <Reveal delay={200}>
            <p className={`mt-5 text-lg max-w-2xl leading-relaxed ${c.desc}`}>
              {description}
            </p>
          </Reveal>
        )}

        <Reveal delay={300}>
          <div className="mt-8 flex items-center gap-5" aria-hidden="true">
            <div className={`w-16 h-[2px] ${c.line}`} />
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className={c.label}
            >
              <rect
                x="6"
                y="0"
                width="8.5"
                height="8.5"
                transform="rotate(45 6 0)"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
