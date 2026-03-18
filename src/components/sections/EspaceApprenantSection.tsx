"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function EspaceApprenantSection() {
  return (
    <section
      className="relative bg-surface py-28 lg:py-40 overflow-hidden"
      aria-labelledby="espace-heading"
    >
      {/* Transition gradient from previous section (abyss → surface) */}
      <div
        className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-abyss to-transparent pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* Atmospheric glow — plum centered */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]"
          style={{ background: "radial-gradient(ellipse, rgba(45,27,61,0.18) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px]"
          style={{ background: "radial-gradient(ellipse, rgba(176,144,88,0.04) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Label */}
        <Reveal>
          <p className="font-body text-[11px] font-semibold tracking-[0.5em] uppercase text-gold/50 text-center">
            Espace d&eacute;di&eacute;
          </p>
        </Reveal>

        {/* Giant centered title */}
        <Reveal delay={100}>
          <h2
            id="espace-heading"
            className="mt-6 font-display text-5xl lg:text-7xl xl:text-8xl font-semibold text-light-text text-center leading-[0.9] tracking-[-0.02em]"
          >
            Votre espace<br />
            de formation
          </h2>
        </Reveal>

        {/* Gold accent line — centered */}
        <Reveal delay={200}>
          <div className="mt-8 flex justify-center" aria-hidden="true">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          </div>
        </Reveal>

        {/* Description */}
        <Reveal delay={300}>
          <p className="mt-8 text-[0.95rem] text-light-text/35 leading-relaxed text-center max-w-md mx-auto">
            Retrouvez vos modules, vos ressources et votre progression.
            Un espace con&ccedil;u pour accompagner chaque &eacute;tape de votre parcours.
          </p>
        </Reveal>

        {/* CTA — split layout */}
        <Reveal delay={400}>
          <div className="mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
            {/* Left — key visual hint */}
            <div className="hidden lg:block lg:col-span-4 relative" aria-hidden="true">
              <div className="flex items-center gap-4 justify-end pr-12">
                <div className="w-24 h-[1px] bg-gradient-to-r from-transparent to-light-text/[0.06]" />
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold/25">
                  <circle cx="12" cy="8" r="5" />
                  <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
                </svg>
              </div>
            </div>

            {/* Center — action */}
            <div className="lg:col-span-4 text-center">
              <Link
                href="/espace-apprenant"
                className="group relative inline-flex items-center justify-center px-10 py-4 text-light-text font-body text-sm font-medium tracking-wider uppercase overflow-hidden transition-all duration-500 border border-gold/20 hover:border-gold/40 hover:shadow-[var(--glow-gold-sm)]"
              >
                <span className="relative z-10">Espace apprenant</span>
                <span
                  className="absolute inset-y-0 left-0 w-0 bg-gold/[0.04] transition-all duration-500 ease-out group-hover:w-full"
                  aria-hidden="true"
                />
              </Link>
            </div>

            {/* Right — decorative line */}
            <div className="hidden lg:block lg:col-span-4 relative" aria-hidden="true">
              <div className="flex items-center gap-4 pl-12">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold/25">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
                <div className="w-24 h-[1px] bg-gradient-to-r from-light-text/[0.06] to-transparent" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Bottom gradient fade → deep (footer) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-deep to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
