"use client";

import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";

const values = [
  {
    number: "01",
    title: "\u00C9coute",
    text: "Chaque apprenant est accueilli dans sa singularit\u00E9. L\u2019\u00E9coute est le point de d\u00E9part de tout accompagnement.",
  },
  {
    number: "02",
    title: "Exigence",
    text: "La qualit\u00E9 de la formation repose sur des standards \u00E9lev\u00E9s, appliqu\u00E9s \u00E0 chaque module, chaque intervention.",
  },
  {
    number: "03",
    title: "Int\u00E9grit\u00E9",
    text: "La posture du formateur est aussi importante que le contenu. Nous formons par l\u2019exemple autant que par la m\u00E9thode.",
  },
];

const team = [
  { initials: "CF", name: "Claire Fontaine", role: "Directrice p\u00E9dagogique" },
  { initials: "MD", name: "Marc-Antoine Duval", role: "Formateur senior PNL" },
  { initials: "SL", name: "Sophie Laurent", role: "Praticienne Hypnose" },
];

export default function DecouvrirPage() {
  return (
    <>
      <PageHero
        label="L'institut"
        title="Nous d\u00E9couvrir"
        description="Un centre de formation construit autour d'une exigence : former avec profondeur, accompagner avec rigueur."
      />

      {/* Vocation */}
      <section
        className="relative bg-ivory py-24 lg:py-36 overflow-hidden"
        aria-labelledby="vocation-heading"
      >
        {/* Decorative background */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -left-12 font-display text-[16rem] lg:text-[22rem] font-bold text-plum/[0.015] leading-none select-none pointer-events-none"
          aria-hidden="true"
        >
          V
        </div>
        <div
          className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(ellipse,rgba(176,144,88,0.04)_0%,transparent_70%)] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="font-body text-[11px] font-semibold tracking-[0.4em] uppercase text-gold">
                  Notre vocation
                </p>
                <h2
                  id="vocation-heading"
                  className="mt-3 font-display text-3xl lg:text-4xl font-semibold text-plum"
                >
                  Pourquoi nous existons
                </h2>
                <div className="mt-5 w-16 h-[2px] bg-gold/40" aria-hidden="true" />
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={200} direction="right">
                <div className="lg:pt-2">
                  <p className="text-[0.95rem] text-muted leading-relaxed">
                    L&apos;Institut La Cl&eacute; est n&eacute; d&apos;une conviction :
                    la formation en d&eacute;veloppement humain m&eacute;rite un cadre
                    &agrave; la hauteur de ses ambitions. Pas un cadre rigide, mais un
                    cadre structurant &mdash; qui donne aux apprenants les rep&egrave;res
                    n&eacute;cessaires pour d&eacute;velopper une pratique solide et
                    &eacute;thique.
                  </p>
                  <p className="mt-5 text-[0.95rem] text-muted leading-relaxed">
                    Nous ne formons pas pour transformer. Nous formons pour outiller,
                    structurer et accompagner ceux qui choisissent de s&apos;engager dans
                    une d&eacute;marche d&apos;apprentissage exigeante.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section
        className="relative bg-plum py-20 lg:py-28 overflow-hidden"
        aria-label="Citation"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-[radial-gradient(ellipse,rgba(176,144,88,0.06)_0%,transparent_70%)]" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[radial-gradient(ellipse,rgba(23,32,56,0.3)_0%,transparent_70%)]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 lg:px-12 text-center">
          <Reveal direction="scale">
            {/* Decorative quote marks */}
            <div className="flex justify-center mb-8" aria-hidden="true">
              <svg
                width="48"
                height="36"
                viewBox="0 0 48 36"
                fill="none"
                className="text-gold/15"
              >
                <path
                  d="M0 36V20.4C0 14.4 1.6 9.6 4.8 6C8 2 12.4 0 18 0v8.4c-3.6.4-6.2 1.8-7.8 4.2-1.2 1.6-1.8 3.4-1.8 5.4H18V36H0zm30 0V20.4c0-6 1.6-10.8 4.8-14.4C38 2 42.4 0 48 0v8.4c-3.6.4-6.2 1.8-7.8 4.2-1.2 1.6-1.8 3.4-1.8 5.4H48V36H30z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <blockquote className="font-display text-2xl lg:text-4xl text-light-text/90 italic leading-relaxed">
              Former, c&apos;est transmettre un cadre dans lequel l&apos;autre peut
              construire sa propre ma&icirc;trise.
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-4" aria-hidden="true">
              <div className="w-8 h-[1px] bg-gold/30" />
              <div className="w-2 h-2 border border-gold/25 rotate-45" />
              <div className="w-8 h-[1px] bg-gold/30" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Concept / Values */}
      <section
        className="relative bg-stone py-24 lg:py-36 overflow-hidden"
        aria-labelledby="concept-heading"
      >
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse,rgba(61,28,51,0.03)_0%,transparent_70%)] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal>
            <p className="font-body text-[11px] font-semibold tracking-[0.4em] uppercase text-gold">
              Le concept
            </p>
            <h2
              id="concept-heading"
              className="mt-3 font-display text-3xl lg:text-4xl font-semibold text-plum"
            >
              Nos engagements p&eacute;dagogiques
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {values.map((v, i) => (
              <Reveal key={v.number} delay={i * 150} direction="up">
                <article className="group relative p-8 lg:p-10 bg-cream/80 border-l-2 border-gold/20 hover:border-gold/60 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(61,28,51,0.06)]">
                  <span className="absolute top-4 right-6 font-display text-6xl lg:text-7xl font-bold text-plum/[0.04] group-hover:text-plum/[0.08] transition-colors duration-500 select-none">
                    {v.number}
                  </span>
                  <h3 className="relative font-display text-2xl font-semibold text-plum">
                    {v.title}
                  </h3>
                  <p className="relative mt-4 font-body text-[0.9rem] text-muted leading-relaxed">
                    {v.text}
                  </p>
                  <div
                    className="mt-6 w-0 h-[1px] bg-gold group-hover:w-12 transition-all duration-700"
                    aria-hidden="true"
                  />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* \u00C9quipe Preview */}
      <section
        className="relative bg-cream py-24 lg:py-36 overflow-hidden"
        aria-labelledby="equipe-preview-heading"
      >
        <div
          className="absolute top-20 right-0 font-display text-[12rem] lg:text-[18rem] font-bold text-plum/[0.015] leading-none select-none pointer-events-none"
          aria-hidden="true"
        >
          \u00C9Q
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal>
            <p className="font-body text-[11px] font-semibold tracking-[0.4em] uppercase text-gold">
              L&apos;\u00E9quipe
            </p>
            <h2
              id="equipe-preview-heading"
              className="mt-3 font-display text-3xl lg:text-4xl font-semibold text-plum"
            >
              Ceux qui transmettent
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {team.map((member, i) => (
              <Reveal key={member.initials} delay={i * 150} direction="up">
                <div className="group text-center">
                  <div className="relative w-28 h-28 mx-auto mb-6">
                    <div className="absolute inset-0 border border-gold/15 rotate-45 group-hover:rotate-[50deg] transition-transform duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-2xl font-semibold text-plum group-hover:text-bordeaux transition-colors duration-300">
                        {member.initials}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-plum">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{member.role}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={500}>
            <div className="mt-14 flex items-center justify-center gap-4">
              <div className="w-12 h-[1px] bg-gold/30" aria-hidden="true" />
              <Link
                href="/equipe"
                className="group inline-flex items-center gap-3 font-body text-sm font-medium text-plum hover:text-bordeaux transition-colors duration-300"
              >
                D&eacute;couvrir l&apos;&eacute;quipe compl&egrave;te
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

      {/* CTA */}
      <section
        className="relative bg-night py-20 lg:py-28 overflow-hidden"
        aria-label="Vers les formations"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse,rgba(176,144,88,0.04)_0%,transparent_70%)]" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(240,235,227,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(240,235,227,.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
              <div>
                <p className="font-display text-2xl lg:text-3xl text-light-text">
                  Consulter le catalogue des formations
                </p>
                <p className="mt-2 text-light-text/40 text-[0.9rem]">
                  Des programmes structur&eacute;s, certifiants et accompagn&eacute;s.
                </p>
              </div>
              <Link
                href="/formations"
                className="group relative inline-flex items-center justify-center px-10 py-4 border border-light-text/15 text-light-text font-body text-sm font-medium tracking-wider uppercase overflow-hidden transition-all duration-300 hover:border-gold/30 hover:shadow-[0_0_30px_rgba(176,144,88,0.08)] shrink-0"
              >
                <span className="relative z-10">Nos formations</span>
                <span
                  className="absolute inset-y-0 left-0 w-0 bg-light-text/[0.06] transition-all duration-500 ease-out group-hover:w-full"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
