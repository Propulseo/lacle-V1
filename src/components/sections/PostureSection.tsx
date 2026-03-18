"use client";

import Reveal from "@/components/ui/Reveal";

const principles = [
  {
    number: "01",
    title: "Rigueur",
    text: "Un cadre pédagogique structuré, conçu pour garantir la qualité et la profondeur de chaque apprentissage.",
  },
  {
    number: "02",
    title: "Posture",
    text: "Une approche qui place la maîtrise de soi et l\u2019intégrité au cœur de la pratique professionnelle.",
  },
  {
    number: "03",
    title: "Transmission",
    text: "Des enseignements ancrés dans l\u2019expérience, transmis avec exigence et engagement.",
  },
];

export default function PostureSection() {
  return (
    <section
      className="relative bg-abyss py-32 lg:py-44 overflow-hidden"
      aria-labelledby="posture-heading"
    >
      {/* Atmospheric glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          style={{ background: "radial-gradient(ellipse, rgba(45,27,61,0.12) 0%, transparent 60%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header — centered */}
        <Reveal>
          <div className="text-center">
            <p className="font-body text-[11px] font-semibold tracking-[0.5em] uppercase text-gold/50">
              Nos fondements
            </p>
            <h2
              id="posture-heading"
              className="mt-4 font-display text-4xl lg:text-5xl font-semibold text-light-text leading-tight"
            >
              Ce qui nous structure
            </h2>
          </div>
        </Reveal>

        {/* Triptych — 3 columns */}
        <div className="mt-24 lg:mt-32 grid grid-cols-1 lg:grid-cols-3 gap-0">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 180}>
              <div
                className={`group relative px-6 lg:px-10 py-12 lg:py-0 ${
                  i < principles.length - 1
                    ? "border-b lg:border-b-0 lg:border-r border-light-text/[0.06]"
                    : ""
                }`}
              >
                {/* Top accent — gold line that expands on hover */}
                <div
                  className="w-8 h-[1px] bg-gold/30 group-hover:w-16 group-hover:bg-gold/60 transition-all duration-700 ease-out mb-8"
                  aria-hidden="true"
                />

                {/* Number */}
                <span className="font-body text-[11px] font-semibold tracking-[0.35em] text-gold/40 group-hover:text-gold/70 transition-colors duration-500">
                  {p.number}.
                </span>

                {/* Title */}
                <h3 className="mt-5 font-display text-3xl lg:text-[2.1rem] font-semibold text-light-text leading-tight">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="mt-5 font-body text-[0.9rem] text-light-text/35 group-hover:text-light-text/50 leading-relaxed transition-colors duration-500">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
