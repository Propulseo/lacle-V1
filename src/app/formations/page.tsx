"use client";

import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";

const formations = [
  {
    slug: "pnl-praticien",
    title: "PNL \u2014 Praticien",
    duration: "21 jours",
    tag: "Certifiante",
    description:
      "Formation fondamentale en Programmation Neuro-Linguistique. D\u00E9veloppez une pratique solide et une posture professionnelle ma\u00EEtris\u00E9e.",
  },
  {
    slug: "pnl-maitre-praticien",
    title: "PNL \u2014 Ma\u00EEtre Praticien",
    duration: "16 jours",
    tag: "Approfondissement",
    description:
      "Approfondissez votre ma\u00EEtrise de la PNL. Techniques avanc\u00E9es, mod\u00E9lisation et supervision de pratique.",
  },
  {
    slug: "hypnose-ericksonienne",
    title: "Hypnose Ericksonienne",
    duration: "12 jours",
    tag: "Praticien",
    description:
      "Formation en hypnose conversationnelle et ericksonienne. Approche permissive, respectueuse et structur\u00E9e.",
  },
  {
    slug: "coaching-professionnel",
    title: "Coaching professionnel",
    duration: "18 jours",
    tag: "Certification",
    description:
      "D\u00E9veloppez une posture de coach structur\u00E9e. Outils, cadre d\u00E9ontologique et pratique supervis\u00E9e.",
  },
];

export default function FormationsPage() {
  return (
    <>
      <PageHero
        label="Formations"
        title="Catalogue des formations"
        description="Des programmes structur\u00E9s, certifiants et accompagn\u00E9s. Chaque formation est con\u00E7ue pour d\u00E9velopper une pratique solide."
      />

      <section className="relative bg-ivory py-24 lg:py-36 overflow-hidden">
        {/* Background watermark */}
        <div
          className="absolute top-20 -right-8 font-display text-[14rem] lg:text-[20rem] font-bold text-plum/[0.015] leading-none select-none pointer-events-none"
          aria-hidden="true"
        >
          F
        </div>
        <div
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(ellipse,rgba(176,144,88,0.03)_0%,transparent_70%)] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {formations.map((f, i) => (
              <Reveal key={f.slug} delay={i * 120} direction={i % 2 === 0 ? "left" : "right"}>
                <article className="group relative h-full p-8 lg:p-10 bg-cream border border-stone/80 overflow-hidden transition-all duration-500 hover:border-gold/25 hover:shadow-[0_12px_40px_rgba(61,28,51,0.06)]">
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 w-0 h-[2px] bg-gold/40 group-hover:w-full transition-all duration-700"
                    aria-hidden="true"
                  />

                  {/* Background number */}
                  <span className="absolute -bottom-4 -right-2 font-display text-[8rem] font-bold text-plum/[0.02] group-hover:text-plum/[0.04] transition-colors duration-500 select-none leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase text-gold bg-gold/8 border border-gold/15">
                        {f.tag}
                      </span>
                      <span className="text-xs text-muted/60 font-medium">{f.duration}</span>
                    </div>

                    <h2 className="font-display text-2xl lg:text-3xl font-semibold text-plum">
                      {f.title}
                    </h2>

                    <p className="mt-4 text-[0.9rem] text-muted leading-relaxed">
                      {f.description}
                    </p>

                    <div className="mt-8 flex items-center gap-3">
                      <Link
                        href={`/formations/${f.slug}`}
                        className="group/link inline-flex items-center gap-2 font-body text-sm font-medium text-plum hover:text-bordeaux transition-colors duration-300"
                      >
                        <span>Voir le programme</span>
                        <svg
                          className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-300"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M3 8h10M9 4l4 4-4 4" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-stone py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(ellipse,rgba(61,28,51,0.03)_0%,transparent_70%)] pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-[0.95rem] text-muted leading-relaxed">
                Vous avez des questions sur nos formations ou souhaitez un
                accompagnement dans votre choix ?
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="w-10 h-[1px] bg-gold/30" aria-hidden="true" />
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 font-body text-sm font-medium text-plum hover:text-bordeaux transition-colors duration-300"
                >
                  Nous contacter
                  <span
                    aria-hidden="true"
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  >
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
