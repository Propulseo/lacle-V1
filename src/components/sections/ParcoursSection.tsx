"use client";

import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    title: "Comprendre le cadre",
    text: "D\u00E9couvrez notre vocation, notre approche p\u00E9dagogique et les fondements qui structurent chaque formation.",
  },
  {
    number: "02",
    title: "Explorer les concepts",
    text: "Acc\u00E9dez au catalogue des formations et identifiez le parcours qui correspond \u00E0 votre d\u00E9marche.",
  },
  {
    number: "03",
    title: "Entrer dans la formation",
    text: "Int\u00E9grez un programme structur\u00E9, accompagn\u00E9 par des formateurs exp\u00E9riment\u00E9s et engag\u00E9s.",
  },
  {
    number: "04",
    title: "Acc\u00E9der \u00E0 l\u2019espace",
    text: "Retrouvez vos modules, ressources et progression dans votre espace de formation personnalis\u00E9.",
  },
];

export default function ParcoursSection() {
  return (
    <section
      className="relative bg-deep py-32 lg:py-44 overflow-hidden"
      aria-labelledby="parcours-heading"
    >
      {/* Transition gradient from previous section (abyss → deep) */}
      <div
        className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-abyss to-transparent pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute bottom-0 left-1/3 w-[600px] h-[600px]"
          style={{ background: "radial-gradient(ellipse, rgba(45,27,61,0.1) 0%, transparent 65%)" }}
        />
        <div
          className="absolute top-0 right-1/4 w-[400px] h-[400px]"
          style={{ background: "radial-gradient(ellipse, rgba(176,144,88,0.03) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header — right-aligned on desktop for asymmetry */}
        <Reveal>
          <div>
            <p className="font-body text-[11px] font-semibold tracking-[0.5em] uppercase text-gold/50">
              Votre chemin
            </p>
            <h2
              id="parcours-heading"
              className="mt-4 font-display text-4xl lg:text-5xl font-semibold text-light-text leading-tight"
            >
              Un parcours s&eacute;quenc&eacute;
            </h2>
          </div>
        </Reveal>

        {/* Vertical timeline */}
        <div className="mt-24 lg:mt-32 relative">
          {/* Continuous vertical line */}
          <div
            className="absolute left-4 lg:left-[120px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold/40 via-light-text/[0.08] to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-20 lg:space-y-24">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 120}>
                <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-0">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-4 lg:left-[120px] top-2 lg:top-3 -translate-x-1/2 z-10"
                    aria-hidden="true"
                  >
                    <div className="w-3 h-3 border border-gold/40 group-hover:border-gold group-hover:bg-gold/20 transition-all duration-500 rotate-45" />
                  </div>

                  {/* Giant number watermark */}
                  <div className="lg:col-span-2 relative pl-10 lg:pl-0" aria-hidden="true">
                    <span className="font-display text-[6rem] lg:text-[8rem] font-bold leading-none text-light-text/[0.04] group-hover:text-light-text/[0.08] transition-colors duration-700 select-none lg:text-right lg:block">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-7 lg:col-start-4 pl-10 lg:pl-16">
                    <h3 className="font-display text-2xl lg:text-3xl font-semibold text-light-text">
                      {step.title}
                    </h3>
                    <p className="mt-4 font-body text-[0.9rem] text-light-text/35 leading-relaxed max-w-md">
                      {step.text}
                    </p>

                    {/* Expanding line on hover */}
                    <div
                      className="mt-6 w-0 h-[1px] bg-gradient-to-r from-gold/50 to-transparent group-hover:w-16 transition-all duration-700"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
