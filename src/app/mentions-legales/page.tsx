"use client";

import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";

const sections = [
  {
    title: "\u00C9diteur du site",
    content: (
      <>
        Institut La Cl&eacute;
        <br />
        Soci&eacute;t&eacute; par actions simplifi&eacute;e au capital de
        10&nbsp;000&nbsp;&euro;
        <br />
        Si&egrave;ge social : 12 rue de la Formation, 75008 Paris
        <br />
        RCS Paris XXX XXX XXX
        <br />
        SIRET : XXX XXX XXX XXXXX
        <br />
        N&deg; de d&eacute;claration d&apos;activit&eacute; : XXXXXXXXXXX
      </>
    ),
  },
  {
    title: "Direction de la publication",
    content: "Claire Fontaine, Directrice p\u00E9dagogique",
  },
  {
    title: "H\u00E9bergement",
    content: (
      <>
        Vercel Inc.
        <br />
        440 N Barranca Ave #4133
        <br />
        Covina, CA 91723, \u00C9tats-Unis
      </>
    ),
  },
  {
    title: "Propri\u00E9t\u00E9 intellectuelle",
    content:
      "L\u2019ensemble du contenu de ce site (textes, images, graphismes, logo, ic\u00F4nes, structure) est la propri\u00E9t\u00E9 exclusive de l\u2019Institut La Cl\u00E9, sauf mention contraire. Toute reproduction, distribution, modification ou utilisation de ce contenu sans autorisation pr\u00E9alable \u00E9crite est strictement interdite.",
  },
  {
    title: "Protection des donn\u00E9es personnelles",
    content:
      "Conform\u00E9ment au R\u00E8glement G\u00E9n\u00E9ral sur la Protection des Donn\u00E9es (RGPD) et \u00E0 la loi Informatique et Libert\u00E9s, vous disposez d\u2019un droit d\u2019acc\u00E8s, de rectification, de suppression et de portabilit\u00E9 de vos donn\u00E9es personnelles. Pour exercer ces droits, contactez-nous \u00E0 l\u2019adresse : contact@institut-la-cle.fr",
  },
  {
    title: "Cookies",
    content:
      "Ce site utilise des cookies strictement n\u00E9cessaires \u00E0 son fonctionnement. Aucun cookie publicitaire ou de tra\u00E7age n\u2019est utilis\u00E9.",
  },
];

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero label="Informations l\u00E9gales" title="Mentions l\u00E9gales" variant="light" />

      <section className="relative bg-ivory py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute top-1/2 -translate-y-1/2 -right-8 font-display text-[14rem] lg:text-[20rem] font-bold text-plum/[0.015] leading-none select-none pointer-events-none"
          aria-hidden="true"
        >
          ML
        </div>

        <div className="relative mx-auto max-w-3xl px-6 lg:px-12">
          <div className="space-y-0">
            {sections.map((section, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className={`group py-8 ${i > 0 ? "border-t border-stone/60" : ""}`}>
                  <div className="flex items-start gap-5">
                    <span
                      className="flex-shrink-0 w-6 h-6 flex items-center justify-center border border-gold/15 text-gold/40 font-display text-[10px] font-semibold mt-0.5 group-hover:border-gold/30 transition-colors duration-300"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h2 className="font-display text-xl font-semibold text-plum mb-3">
                        {section.title}
                      </h2>
                      <p className="text-[0.9rem] text-muted leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
