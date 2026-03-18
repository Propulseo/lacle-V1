"use client";

import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/ui/ContactForm";
import Reveal from "@/components/ui/Reveal";

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Nous contacter"
        description="Une question, une demande d'information ou un projet de formation ? Nous sommes \u00E0 votre \u00E9coute."
      />

      <section className="relative bg-ivory py-24 lg:py-36 overflow-hidden">
        {/* Background decorative */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -right-8 font-display text-[14rem] lg:text-[20rem] font-bold text-plum/[0.015] leading-none select-none pointer-events-none"
          aria-hidden="true"
        >
          @
        </div>
        <div
          className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[radial-gradient(ellipse,rgba(176,144,88,0.03)_0%,transparent_70%)] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-10 h-[1px] bg-gold/40" aria-hidden="true" />
                  <h2 className="font-display text-2xl font-semibold text-plum">
                    Formulaire de contact
                  </h2>
                </div>
              </Reveal>
              <Reveal delay={150}>
                <ContactForm />
              </Reveal>
            </div>

            {/* Coordinates */}
            <div className="lg:col-span-5">
              <Reveal delay={300} direction="right">
                <div className="relative bg-stone/50 border border-stone p-8 lg:p-10 lg:sticky lg:top-28 overflow-hidden hover:shadow-[0_12px_40px_rgba(61,28,51,0.06)] transition-shadow duration-500">
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

                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-3 h-3 border border-gold/30 rotate-45" aria-hidden="true" />
                    <h3 className="font-display text-lg font-semibold text-plum">
                      Coordonn&eacute;es
                    </h3>
                  </div>

                  <dl className="space-y-6 text-sm">
                    {[
                      {
                        label: "Adresse",
                        content: (
                          <>
                            Institut La Cl&eacute;
                            <br />
                            12 rue de la Formation
                            <br />
                            75008 Paris
                          </>
                        ),
                      },
                      {
                        label: "T\u00E9l\u00E9phone",
                        content: "+33 (0)1 23 45 67 89",
                      },
                      {
                        label: "E-mail",
                        content: "contact@institut-la-cle.fr",
                      },
                      {
                        label: "Horaires",
                        content: (
                          <>
                            Lundi &ndash; Vendredi
                            <br />
                            9h00 &ndash; 18h00
                          </>
                        ),
                      },
                    ].map((item, i) => (
                      <div
                        key={typeof item.label === "string" ? item.label : i}
                        className={i > 0 ? "border-t border-stone pt-6" : ""}
                      >
                        <dt className="text-muted text-xs tracking-wide uppercase mb-1.5">
                          {item.label}
                        </dt>
                        <dd className="text-ink font-medium">{item.content}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
