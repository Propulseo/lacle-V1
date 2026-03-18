'use client';

import { SectionBlock } from '../ui/SectionBlock';
import { Button } from '../ui/Button';
import { ROUTES, EXTERNAL } from '../../lib/constants';

export function CatalogueContent() {
  return (
    <article>
      {/* Hero */}
      <SectionBlock>
        <h1 className="font-heading text-[length:var(--text-h1)] font-light leading-[var(--leading-h1)] mb-8">
          Catalogue des formations
        </h1>
        <p className="max-w-[680px] text-[length:var(--text-body)] text-graphite leading-[var(--leading-body)]">
          Chaque formation La Clé suit une logique de progression maîtrisée.
          Le parcours est construit, pas improvisé.{' '}
          <em className="accent">La compréhension précède toujours l&apos;application.</em>
        </p>
      </SectionBlock>

      {/* Progression pédagogique */}
      <SectionBlock separator>
        <h2 className="font-heading text-[length:var(--text-h2)] font-normal leading-[var(--leading-h2)] mb-8">
          Progression pédagogique
        </h2>
        <div className="max-w-[680px] text-[length:var(--text-body)] text-graphite leading-[var(--leading-body)]">
          <p>
            Les formations sont conçues comme des niveaux successifs. Chaque niveau
            consolide les acquis du précédent et ouvre la voie au suivant. Il n&apos;y a
            pas de saut possible.
          </p>
        </div>
      </SectionBlock>

      {/* Formations disponibles */}
      <SectionBlock separator>
        <h2 className="font-heading text-[length:var(--text-h2)] font-normal leading-[var(--leading-h2)] mb-10">
          Formations
        </h2>

        {/* PNL Praticien — active */}
        <a
          href={ROUTES.pnlPraticien}
          className="card-accent group block border border-border-light bg-white p-8 md:p-12 transition-colors duration-500 ease-[var(--ease-default)] hover:border-bronze mb-6"
        >
          <p className="text-[length:var(--text-overline)] font-medium uppercase tracking-[0.1em] text-bronze mb-3">
            Disponible
          </p>
          <h3 className="font-heading text-[length:var(--text-h3)] font-normal leading-[var(--leading-h3)] mb-4">
            PNL — Praticien
          </h3>
          <p className="max-w-[600px] text-[length:var(--text-body-sm)] text-graphite leading-[var(--leading-body-sm)]">
            Le premier niveau de formation. Comprendre la PNL par ses mécanismes
            fondamentaux, dans un cadre distanciel puis présentiel.
          </p>
        </a>

        {/* Formations à venir — grisées */}
        <div className="space-y-4">
          {['PNL — Maître Praticien', 'Hypnose Ericksonienne', 'Coaching Systémique'].map(
            (title) => (
              <div
                key={title}
                className="border border-border-light bg-ivory-warm p-8 md:p-12 opacity-40"
                aria-disabled="true"
              >
                <p className="text-[length:var(--text-overline)] font-medium uppercase tracking-[0.1em] text-graphite-light mb-3">
                  À venir
                </p>
                <h3 className="font-heading text-[length:var(--text-h3)] font-normal leading-[var(--leading-h3)] text-graphite-light">
                  {title}
                </h3>
              </div>
            )
          )}
        </div>
      </SectionBlock>

      {/* Accès */}
      <SectionBlock separator>
        <div className="max-w-[680px] text-[length:var(--text-body)] text-graphite leading-[var(--leading-body)] mb-12">
          <p>
            L&apos;inscription et l&apos;accès aux contenus se font via l&apos;espace apprenant.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button href={ROUTES.pnlPraticien}>Découvrir PNL Praticien</Button>
          <Button href={EXTERNAL.lms} variant="bronze">
            Accéder à l&apos;espace apprenant
          </Button>
        </div>
      </SectionBlock>
    </article>
  );
}
