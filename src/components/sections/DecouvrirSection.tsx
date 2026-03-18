"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function DecouvrirSection() {
  return (
    <section
      className="relative bg-surface py-32 lg:py-44 overflow-hidden"
      aria-labelledby="decouvrir-heading"
    >
      {/* Transition gradient from previous section (deep → surface) */}
      <div
        className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-deep to-transparent pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* Atmospheric layers */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 left-1/4 w-[500px] h-[500px]"
          style={{ background: "radial-gradient(ellipse, rgba(45,27,61,0.15) 0%, transparent 65%)" }}
        />
        <div
          className="absolute bottom-0 right-1/3 w-[400px] h-[400px]"
          style={{ background: "radial-gradient(ellipse, rgba(176,144,88,0.04) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <p className="font-body text-[11px] font-semibold tracking-[0.5em] uppercase text-gold/50">
            L&apos;institut
          </p>
          <h2
            id="decouvrir-heading"
            className="mt-4 font-display text-4xl lg:text-5xl font-semibold text-light-text leading-tight"
          >
            Entrer dans l&apos;univers
          </h2>
          <p className="mt-5 text-[0.95rem] text-light-text/35 leading-relaxed max-w-lg">
            Une vision claire de la formation au service de l&apos;humain.
            Comprendre pourquoi nous existons.
          </p>
        </Reveal>

        {/* Block 1 — Shifted right */}
        <Reveal delay={200}>
          <Link href="/decouvrir" className="group block mt-16 lg:mt-24 lg:ml-auto lg:max-w-[55%]">
            <div className="relative pl-8 lg:pl-10">
              {/* Colored vertical band */}
              <div
                className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-plum-mid/50 to-transparent group-hover:from-plum-mid/80 transition-colors duration-500"
                aria-hidden="true"
              />
              <h3 className="font-display text-2xl lg:text-3xl font-semibold text-light-text">
                Le concept
              </h3>
              <p className="mt-4 text-[0.9rem] text-light-text/35 leading-relaxed">
                Une m&eacute;thodologie p&eacute;dagogique construite autour de la pratique,
                de la rigueur et de l&apos;accompagnement.
              </p>
              <div className="mt-6 flex items-center gap-2 text-gold/30 group-hover:text-gold/60 transition-colors duration-300">
                <span className="text-xs font-medium tracking-wide">Explorer</span>
                <svg
                  className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </div>
            </div>
          </Link>
        </Reveal>

        {/* Block 2 — Back left, with gold accent */}
        <Reveal delay={350}>
          <Link href="/equipe" className="group block mt-16 lg:mt-20 lg:max-w-[50%]">
            <div className="relative">
              {/* Giant decorative ampersand */}
              <span
                className="absolute -top-8 -left-4 lg:-left-8 font-display text-[7rem] lg:text-[9rem] font-bold text-light-text/[0.03] group-hover:text-light-text/[0.06] transition-colors duration-700 select-none leading-none"
                aria-hidden="true"
              >
                &amp;
              </span>
              <div className="relative">
                <h3 className="font-display text-2xl lg:text-3xl font-semibold text-light-text">
                  L&apos;&eacute;quipe
                </h3>
                <p className="mt-4 text-[0.9rem] text-light-text/35 leading-relaxed">
                  Des formateurs exp&eacute;riment&eacute;s, engag&eacute;s dans la transmission
                  et la qualit&eacute; de chaque intervention.
                </p>
                <div className="mt-6 flex items-center gap-2 text-gold/30 group-hover:text-gold/60 transition-colors duration-300">
                  <span className="text-xs font-medium tracking-wide">Explorer</span>
                  <svg
                    className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </Reveal>

        {/* Bottom link */}
        <Reveal delay={500}>
          <div className="mt-20 flex items-center gap-4">
            <div className="w-12 h-[1px] bg-gold/20" aria-hidden="true" />
            <Link
              href="/decouvrir"
              className="group inline-flex items-center gap-3 font-body text-sm font-medium text-gold/40 hover:text-gold/70 transition-colors duration-300"
            >
              Nous d&eacute;couvrir
              <span
                aria-hidden="true"
                className="group-hover:translate-x-1 transition-transform duration-300"
              >
                &rarr;
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
