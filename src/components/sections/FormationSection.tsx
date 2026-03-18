"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const modules = [
  "Fondamentaux de la PNL",
  "Techniques de communication",
  "Protocoles de changement",
  "Pratique supervis\u00E9e",
  "Int\u00E9gration et certification",
];

export default function FormationSection() {
  return (
    <section
      className="relative bg-abyss py-32 lg:py-44 overflow-hidden"
      aria-labelledby="formation-heading"
    >
      {/* Transition gradient from previous section (surface → abyss) */}
      <div
        className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-surface to-transparent pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/3 right-1/4 w-[600px] h-[600px]"
          style={{ background: "radial-gradient(ellipse, rgba(45,27,61,0.12) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-[400px] h-[400px]"
          style={{ background: "radial-gradient(ellipse, rgba(176,144,88,0.04) 0%, transparent 70%)" }}
        />
      </div>

      {/* Background watermark */}
      <div
        className="absolute top-16 -left-4 font-display text-[14rem] lg:text-[22rem] font-bold text-light-text/[0.02] leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        PNL
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-start">
          {/* Content — left */}
          <div className="lg:col-span-6">
            <Reveal>
              <p className="font-body text-[11px] font-semibold tracking-[0.5em] uppercase text-gold/50">
                Formation &agrave; la une
              </p>
              <h2
                id="formation-heading"
                className="mt-4 font-display text-4xl lg:text-5xl font-semibold text-light-text leading-tight"
              >
                PNL &mdash; Praticien
              </h2>
              <div className="mt-5 w-20 h-[1px] bg-gradient-to-r from-gold/50 via-gold/25 to-transparent" aria-hidden="true" />
              <p className="mt-6 text-[0.95rem] text-light-text/35 leading-relaxed max-w-lg">
                Une formation structur&eacute;e en Programmation Neuro-Linguistique,
                con&ccedil;ue pour d&eacute;velopper une pratique solide et une posture
                professionnelle ma&icirc;tris&eacute;e.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10">
                <Link
                  href="/formations/pnl-praticien"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-light-text font-body text-sm font-medium tracking-wider uppercase overflow-hidden transition-all duration-500 glass hover:shadow-[var(--glow-plum-sm)]"
                >
                  <span className="relative z-10">Voir la formation</span>
                  <span
                    className="absolute inset-y-0 left-0 w-0 bg-light-text/[0.04] transition-all duration-500 ease-out group-hover:w-full"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Vertical separator */}
          <div className="hidden lg:flex lg:col-span-1 justify-center" aria-hidden="true">
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-light-text/[0.06] to-transparent" />
          </div>

          {/* Programme — right, no box */}
          <div className="lg:col-span-5">
            <Reveal delay={300} direction="right">
              <h3 className="font-body text-[11px] font-semibold tracking-[0.5em] uppercase text-gold/50 mb-10">
                Programme
              </h3>
              <ol className="space-y-0">
                {modules.map((mod, i) => (
                  <li key={i} className="group/item relative">
                    <div className="flex items-baseline gap-6 py-5 border-b border-light-text/[0.04] group-hover/item:border-light-text/[0.08] transition-colors duration-500">
                      <span className="font-display text-3xl lg:text-4xl font-bold text-light-text/[0.06] group-hover/item:text-gold/20 transition-colors duration-500 select-none shrink-0 w-12 text-right">
                        {i + 1}
                      </span>
                      <span className="text-[0.95rem] text-light-text/45 font-medium group-hover/item:text-light-text/70 transition-colors duration-300">
                        {mod}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
