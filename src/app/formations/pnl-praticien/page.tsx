"use client";

import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";

const objectives = [
  "Ma\u00EEtriser les fondamentaux de la Programmation Neuro-Linguistique",
  "D\u00E9velopper une \u00E9coute structur\u00E9e et une communication pr\u00E9cise",
  "Acqu\u00E9rir les protocoles de changement essentiels",
  "Construire une posture de praticien \u00E9thique et rigoureuse",
  "Int\u00E9grer les outils dans un cadre professionnel d\u00E9fini",
];

const modules = [
  {
    number: "01",
    title: "Fondamentaux de la PNL",
    duration: "4 jours",
    content:
      "Pr\u00E9suppos\u00E9s de la PNL, syst\u00E8mes de repr\u00E9sentation, calibration, synchronisation. Construction du rapport.",
  },
  {
    number: "02",
    title: "Techniques de communication",
    duration: "4 jours",
    content:
      "M\u00E9ta-mod\u00E8le, Milton-mod\u00E8le, recadrage. Pr\u00E9cision linguistique et influence \u00E9thique.",
  },
  {
    number: "03",
    title: "Protocoles de changement",
    duration: "5 jours",
    content:
      "Ancrage, dissociation, ligne du temps, strat\u00E9gies. Protocoles structur\u00E9s de transformation.",
  },
  {
    number: "04",
    title: "Pratique supervis\u00E9e",
    duration: "5 jours",
    content:
      "Mise en pratique accompagn\u00E9e. Supervision individuelle et retours structur\u00E9s sur la posture.",
  },
  {
    number: "05",
    title: "Int\u00E9gration et certification",
    duration: "3 jours",
    content:
      "\u00C9valuation des acquis, d\u00E9monstration de pratique, remise de la certification Praticien PNL.",
  },
];

export default function PnlPraticienPage() {
  return (
    <>
      <PageHero
        label="Formation certifiante"
        title="PNL \u2014 Praticien"
        description="21 jours de formation structur\u00E9e pour d\u00E9velopper une pratique solide en Programmation Neuro-Linguistique."
      />

      {/* Overview */}
      <section
        className="relative bg-ivory py-24 lg:py-36 overflow-hidden"
        aria-labelledby="overview-heading"
      >
        <div
          className="absolute top-1/2 -translate-y-1/2 -right-10 font-display text-[16rem] lg:text-[22rem] font-bold text-plum/[0.015] leading-none select-none pointer-events-none"
          aria-hidden="true"
        >
          PNL
        </div>
        <div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(ellipse,rgba(176,144,88,0.03)_0%,transparent_70%)] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <h2
                  id="overview-heading"
                  className="font-display text-3xl lg:text-4xl font-semibold text-plum"
                >
                  Pr&eacute;sentation
                </h2>
                <div className="mt-5 w-16 h-[2px] bg-gold/40" aria-hidden="true" />
              </Reveal>
              <Reveal delay={150}>
                <p className="mt-7 text-[0.95rem] text-muted leading-relaxed">
                  La formation Praticien PNL de l&apos;Institut La Cl&eacute; est
                  con&ccedil;ue pour transmettre les fondamentaux de la Programmation
                  Neuro-Linguistique dans un cadre rigoureux et accompagn&eacute;. Chaque
                  module est structur&eacute; pour permettre une int&eacute;gration
                  progressive des outils et des postures.
                </p>
                <p className="mt-5 text-[0.95rem] text-muted leading-relaxed">
                  Cette formation s&apos;adresse aux professionnels de
                  l&apos;accompagnement, aux managers et &agrave; toute personne souhaitant
                  d&eacute;velopper une pratique structur&eacute;e de la communication et du
                  changement.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={300} direction="right">
                <div className="relative bg-stone/50 border border-stone p-8 lg:p-10 hover:shadow-[0_12px_40px_rgba(61,28,51,0.06)] transition-shadow duration-500">
                  {/* Corner ornament */}
                  <div className="absolute top-5 right-5" aria-hidden="true">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-gold/15"
                    >
                      <rect x="0" y="0" width="24" height="1" fill="currentColor" />
                      <rect x="23" y="0" width="1" height="24" fill="currentColor" />
                    </svg>
                  </div>

                  <h3 className="font-display text-lg font-semibold text-plum mb-6">
                    Informations
                  </h3>
                  <dl className="space-y-5 text-sm">
                    {[
                      { label: "Dur\u00E9e", value: "21 jours \u2014 147 heures" },
                      { label: "Format", value: "Pr\u00E9sentiel \u2014 groupes restreints" },
                      { label: "Certification", value: "Praticien PNL certifi\u00E9" },
                      { label: "Pr\u00E9requis", value: "Aucun pr\u00E9requis technique" },
                    ].map((item, i) => (
                      <div
                        key={item.label}
                        className={i > 0 ? "border-t border-stone pt-5" : ""}
                      >
                        <dt className="text-muted text-xs tracking-wide uppercase">
                          {item.label}
                        </dt>
                        <dd className="mt-1.5 text-ink font-medium">{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section
        className="relative bg-stone py-24 lg:py-36 overflow-hidden"
        aria-labelledby="objectives-heading"
      >
        <div
          className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-[radial-gradient(ellipse,rgba(61,28,51,0.03)_0%,transparent_70%)] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl">
            <Reveal>
              <p className="font-body text-[11px] font-semibold tracking-[0.4em] uppercase text-gold">
                Objectifs
              </p>
              <h2
                id="objectives-heading"
                className="mt-3 font-display text-3xl lg:text-4xl font-semibold text-plum"
              >
                Ce que vous d&eacute;velopperez
              </h2>
            </Reveal>

            <div className="mt-12 space-y-6">
              {objectives.map((obj, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="group flex items-start gap-5 p-4 hover:bg-cream/60 transition-colors duration-300">
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center border border-gold/20 text-gold font-display text-sm font-semibold group-hover:bg-gold/10 group-hover:border-gold/40 transition-all duration-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[0.95rem] text-ink/80 leading-relaxed pt-1">
                      {obj}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section
        className="relative bg-cream py-24 lg:py-36 overflow-hidden"
        aria-labelledby="modules-heading"
      >
        <div
          className="absolute top-20 -left-8 font-display text-[12rem] lg:text-[18rem] font-bold text-plum/[0.015] leading-none select-none pointer-events-none"
          aria-hidden="true"
        >
          05
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal>
            <p className="font-body text-[11px] font-semibold tracking-[0.4em] uppercase text-gold">
              Programme d&eacute;taill&eacute;
            </p>
            <h2
              id="modules-heading"
              className="mt-3 font-display text-3xl lg:text-4xl font-semibold text-plum"
            >
              Les modules
            </h2>
          </Reveal>

          <div className="mt-16 space-y-0">
            {modules.map((mod, i) => (
              <Reveal key={mod.number} delay={i * 120}>
                <div className="group relative grid grid-cols-1 lg:grid-cols-[100px_1fr] gap-6 lg:gap-10">
                  {/* Timeline connector */}
                  {i < modules.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-16 left-[50px] w-[1px] h-full bg-gold/10"
                      aria-hidden="true"
                    />
                  )}

                  {/* Number */}
                  <div className="flex items-start justify-center pt-8 lg:pt-10">
                    <span className="relative font-display text-4xl font-bold text-gold/20 group-hover:text-gold/40 transition-colors duration-500">
                      {mod.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-10 bg-ivory border-l-2 border-gold/15 group-hover:border-gold/40 transition-all duration-500 group-hover:shadow-[0_8px_30px_rgba(61,28,51,0.04)] mb-4">
                    <div className="flex flex-wrap items-baseline gap-4">
                      <h3 className="font-display text-xl lg:text-2xl font-semibold text-plum">
                        {mod.title}
                      </h3>
                      <span className="text-xs text-muted/60 font-medium px-2 py-1 border border-stone">
                        {mod.duration}
                      </span>
                    </div>
                    <p className="mt-4 text-[0.9rem] text-muted leading-relaxed">
                      {mod.content}
                    </p>
                    <div
                      className="mt-5 w-0 h-[1px] bg-gold group-hover:w-10 transition-all duration-700"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pedagogy */}
      <section
        className="relative bg-plum py-24 lg:py-36 overflow-hidden"
        aria-labelledby="approach-heading"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-[radial-gradient(ellipse,rgba(176,144,88,0.06)_0%,transparent_70%)]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(ellipse,rgba(23,32,56,0.3)_0%,transparent_70%)]" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(240,235,227,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(240,235,227,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="font-body text-[11px] font-semibold tracking-[0.4em] uppercase text-gold-light">
                  P&eacute;dagogie
                </p>
                <h2
                  id="approach-heading"
                  className="mt-3 font-display text-3xl lg:text-4xl font-semibold text-light-text"
                >
                  Notre approche
                </h2>
                <div className="mt-5 w-16 h-[2px] bg-gold/30" aria-hidden="true" />
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-7 text-[0.95rem] text-light-text/55 leading-relaxed">
                  La p&eacute;dagogie de l&apos;Institut La Cl&eacute; repose sur un
                  &eacute;quilibre entre apports th&eacute;oriques, d&eacute;monstrations et
                  pratique supervis&eacute;e. Chaque concept enseign&eacute; est
                  imm&eacute;diatement mis en application dans un cadre accompagn&eacute;.
                </p>
                <p className="mt-5 text-[0.95rem] text-light-text/55 leading-relaxed">
                  Les groupes sont volontairement restreints pour garantir un accompagnement
                  individualis&eacute; et des retours pr&eacute;cis sur la posture de chaque
                  apprenant.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5 flex items-center">
              <Reveal delay={400} direction="right">
                <div className="relative p-8 border border-light-text/[0.06] bg-light-text/[0.03] backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-3 h-3 border border-gold/30 rotate-45" aria-hidden="true" />
                    <span className="font-display text-lg font-semibold text-light-text">
                      M&eacute;thode
                    </span>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Apports th\u00E9oriques structur\u00E9s",
                      "D\u00E9monstrations en direct",
                      "Pratique supervis\u00E9e",
                      "Retours individualis\u00E9s",
                      "Groupes restreints",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-gold/40" aria-hidden="true" />
                        <span className="text-sm text-light-text/50">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-night py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse,rgba(176,144,88,0.04)_0%,transparent_70%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
              <div>
                <p className="font-display text-2xl lg:text-3xl text-light-text">
                  Vous souhaitez en savoir plus ?
                </p>
                <p className="mt-2 text-light-text/40 text-[0.9rem]">
                  Contactez-nous pour toute question sur cette formation.
                </p>
              </div>
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-10 py-4 border border-light-text/15 text-light-text font-body text-sm font-medium tracking-wider uppercase overflow-hidden transition-all duration-300 hover:border-gold/30 hover:shadow-[0_0_30px_rgba(176,144,88,0.08)] shrink-0"
              >
                <span className="relative z-10">Nous contacter</span>
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
