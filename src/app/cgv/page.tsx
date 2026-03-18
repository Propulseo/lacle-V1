"use client";

import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";

const articles = [
  {
    title: "Article 1 \u2014 Objet",
    content:
      "Les pr\u00E9sentes conditions g\u00E9n\u00E9rales de vente r\u00E9gissent les relations contractuelles entre l\u2019Institut La Cl\u00E9 et toute personne physique ou morale souhaitant b\u00E9n\u00E9ficier de ses prestations de formation.",
  },
  {
    title: "Article 2 \u2014 Inscription",
    content:
      "Toute inscription \u00E0 une formation est soumise \u00E0 la r\u00E9ception d\u2019un dossier d\u2019inscription complet et au r\u00E8glement de l\u2019acompte correspondant. L\u2019inscription est consid\u00E9r\u00E9e comme d\u00E9finitive \u00E0 r\u00E9ception du paiement.",
  },
  {
    title: "Article 3 \u2014 Tarifs et paiement",
    content:
      "Les tarifs des formations sont indiqu\u00E9s en euros, toutes taxes comprises. Le r\u00E8glement peut \u00EAtre effectu\u00E9 par virement bancaire ou par ch\u00E8que. Des facilit\u00E9s de paiement peuvent \u00EAtre accord\u00E9es sur demande.",
  },
  {
    title: "Article 4 \u2014 Annulation et report",
    content:
      "Toute annulation doit \u00EAtre notifi\u00E9e par \u00E9crit. En cas d\u2019annulation plus de 30 jours avant le d\u00E9but de la formation, l\u2019acompte est int\u00E9gralement rembours\u00E9. Entre 15 et 30 jours, 50\u00A0% de l\u2019acompte est retenu. En de\u00E7\u00E0 de 15 jours, l\u2019acompte est int\u00E9gralement acquis \u00E0 l\u2019Institut.",
  },
  {
    title: "Article 5 \u2014 D\u00E9roulement des formations",
    content:
      "L\u2019Institut La Cl\u00E9 se r\u00E9serve le droit de modifier le programme, les dates ou les intervenants d\u2019une formation si les circonstances l\u2019exigent. Les participants en seront inform\u00E9s dans les meilleurs d\u00E9lais. L\u2019Institut ne pourra \u00EAtre tenu responsable en cas de force majeure.",
  },
  {
    title: "Article 6 \u2014 Responsabilit\u00E9",
    content:
      "L\u2019Institut La Cl\u00E9 s\u2019engage \u00E0 fournir les moyens n\u00E9cessaires \u00E0 la bonne r\u00E9alisation des formations. Sa responsabilit\u00E9 est limit\u00E9e au montant de la prestation. L\u2019Institut ne saurait \u00EAtre tenu responsable de l\u2019utilisation faite par les participants des enseignements re\u00E7us.",
  },
  {
    title: "Article 7 \u2014 Certification",
    content:
      "La d\u00E9livrance d\u2019une certification est conditionn\u00E9e \u00E0 l\u2019assiduit\u00E9, \u00E0 la participation active et \u00E0 la validation des acquis selon les crit\u00E8res d\u00E9finis pour chaque formation.",
  },
  {
    title: "Article 8 \u2014 Droit applicable",
    content:
      "Les pr\u00E9sentes conditions g\u00E9n\u00E9rales de vente sont soumises au droit fran\u00E7ais. En cas de litige, les parties s\u2019engagent \u00E0 rechercher une solution amiable. \u00C0 d\u00E9faut, les tribunaux de Paris seront seuls comp\u00E9tents.",
  },
];

export default function CgvPage() {
  return (
    <>
      <PageHero
        label="Conditions"
        title="Conditions g\u00E9n\u00E9rales de vente"
        variant="light"
      />

      <section className="relative bg-ivory py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute top-1/2 -translate-y-1/2 -right-8 font-display text-[14rem] lg:text-[20rem] font-bold text-plum/[0.015] leading-none select-none pointer-events-none"
          aria-hidden="true"
        >
          CGV
        </div>

        <div className="relative mx-auto max-w-3xl px-6 lg:px-12">
          <div className="space-y-0">
            {articles.map((article, i) => (
              <Reveal key={i} delay={i * 60}>
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
                        {article.title}
                      </h2>
                      <p className="text-[0.9rem] text-muted leading-relaxed">
                        {article.content}
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
