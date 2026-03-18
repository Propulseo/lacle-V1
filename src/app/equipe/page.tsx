"use client";

import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";

const team = [
  {
    initials: "CF",
    name: "Claire Fontaine",
    role: "Directrice p\u00E9dagogique",
    certifications: "Ma\u00EEtre Praticien PNL, Formatrice certifi\u00E9e",
    bio: "Vingt ann\u00E9es de pratique et de transmission en PNL et en accompagnement. Claire a fond\u00E9 l\u2019Institut La Cl\u00E9 avec la conviction que la formation m\u00E9rite un cadre \u00E0 la hauteur de ses ambitions.",
  },
  {
    initials: "MD",
    name: "Marc-Antoine Duval",
    role: "Formateur senior PNL",
    certifications: "Ma\u00EEtre Praticien PNL, Enseignant certifi\u00E9",
    bio: "Sp\u00E9cialiste des protocoles de changement et de la mod\u00E9lisation. Marc-Antoine apporte une rigueur m\u00E9thodologique et une approche structur\u00E9e de la transmission.",
  },
  {
    initials: "SL",
    name: "Sophie Laurent",
    role: "Formatrice en Hypnose Ericksonienne",
    certifications: "Praticienne en Hypnose, Ma\u00EEtre Praticien PNL",
    bio: "Sophie enseigne l\u2019hypnose conversationnelle avec une attention particuli\u00E8re port\u00E9e \u00E0 la posture et \u00E0 l\u2019\u00E9thique. Son approche allie pr\u00E9cision technique et sensibilit\u00E9 relationnelle.",
  },
  {
    initials: "TB",
    name: "Thomas Beaumont",
    role: "Formateur en Coaching professionnel",
    certifications: "Coach certifi\u00E9, Praticien PNL",
    bio: "Thomas forme des coachs avec une exigence de cadre et de d\u00E9ontologie. Sa p\u00E9dagogie repose sur la pratique supervis\u00E9e et le d\u00E9veloppement de la posture professionnelle.",
  },
];

export default function EquipePage() {
  return (
    <>
      <PageHero
        label="L'\u00E9quipe"
        title="L'\u00E9quipe p\u00E9dagogique"
        description="Des formateurs exp\u00E9riment\u00E9s, engag\u00E9s dans la qualit\u00E9 de la transmission et l'accompagnement de chaque apprenant."
      />

      <section className="relative bg-ivory py-24 lg:py-36 overflow-hidden">
        {/* Background watermark */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -right-8 font-display text-[16rem] lg:text-[22rem] font-bold text-plum/[0.015] leading-none select-none pointer-events-none"
          aria-hidden="true"
        >
          IV
        </div>
        <div
          className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[radial-gradient(ellipse,rgba(176,144,88,0.03)_0%,transparent_70%)] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {team.map((member, i) => (
              <Reveal
                key={member.initials}
                delay={i * 150}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <article className="group relative h-full p-8 lg:p-10 bg-cream border border-stone/80 overflow-hidden transition-all duration-500 hover:border-gold/25 hover:shadow-[0_12px_40px_rgba(61,28,51,0.06)]">
                  {/* Top accent line on hover */}
                  <div
                    className="absolute top-0 left-0 w-0 h-[2px] bg-gold/40 group-hover:w-full transition-all duration-700"
                    aria-hidden="true"
                  />

                  {/* Background initials */}
                  <span className="absolute -bottom-4 -right-2 font-display text-[8rem] font-bold text-plum/[0.02] group-hover:text-plum/[0.04] transition-colors duration-500 select-none leading-none">
                    {member.initials}
                  </span>

                  <div className="relative">
                    <div className="flex items-center gap-5 mb-6">
                      {/* Diamond initials */}
                      <div className="relative w-16 h-16 shrink-0">
                        <div className="absolute inset-0 border border-gold/20 rotate-45 group-hover:border-gold/40 group-hover:rotate-[50deg] transition-all duration-700" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-display text-xl font-semibold text-plum group-hover:text-bordeaux transition-colors duration-300">
                            {member.initials}
                          </span>
                        </div>
                      </div>
                      <div>
                        <h2 className="font-display text-xl font-semibold text-plum">
                          {member.name}
                        </h2>
                        <p className="text-sm text-muted">{member.role}</p>
                      </div>
                    </div>

                    <p className="text-[11px] text-gold font-semibold tracking-[0.3em] uppercase mb-4">
                      {member.certifications}
                    </p>

                    <p className="text-[0.9rem] text-muted leading-relaxed">
                      {member.bio}
                    </p>

                    <div
                      className="mt-6 w-0 h-[1px] bg-gold group-hover:w-12 transition-all duration-700"
                      aria-hidden="true"
                    />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="relative bg-plum py-20 lg:py-28 overflow-hidden" aria-label="Philosophie">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-[radial-gradient(ellipse,rgba(176,144,88,0.06)_0%,transparent_70%)]" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[radial-gradient(ellipse,rgba(23,32,56,0.3)_0%,transparent_70%)]" />
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

        <div className="relative mx-auto max-w-4xl px-6 lg:px-12 text-center">
          <Reveal direction="scale">
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
              La qualit&eacute; d&apos;une formation se mesure &agrave; la qualit&eacute;
              de ceux qui la transmettent.
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-4" aria-hidden="true">
              <div className="w-8 h-[1px] bg-gold/30" />
              <div className="w-2 h-2 border border-gold/25 rotate-45" />
              <div className="w-8 h-[1px] bg-gold/30" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
