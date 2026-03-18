'use client';

import { SectionBlock } from '@/components/ui/SectionBlock';
import { Button } from '@/components/ui/Button';
import { ROUTES } from '@/lib/constants';

export function ConceptContent() {
  return (
    <article>
      {/* Hero */}
      <SectionBlock>
        <h1 className="font-heading text-[length:var(--text-h1)] font-light leading-[var(--leading-h1)] mb-8">
          Le concept
        </h1>
        <p className="max-w-[680px] text-[length:var(--text-body)] text-graphite leading-[var(--leading-body)]">
          La Clé n&apos;est pas une école de plus. C&apos;est un cadre pédagogique pensé
          pour structurer la compréhension —{' '}
          <em className="accent">pas pour accélérer la consommation de contenu</em>.
        </p>
      </SectionBlock>

      {/* Le cadre */}
      <SectionBlock separator>
        <h2 className="font-heading text-[length:var(--text-h2)] font-normal leading-[var(--leading-h2)] mb-8">
          Le cadre
        </h2>
        <div className="max-w-[680px] space-y-5 text-[length:var(--text-body)] text-graphite leading-[var(--leading-body)]">
          <p>
            Chaque formation repose sur une architecture pédagogique précise.
            Les séquences sont ordonnées, les prérequis sont respectés, la
            progression est construite — pas suggérée.
          </p>
          <p>
            Ce cadre garantit que chaque apprenant construit sur des bases solides
            avant d&apos;avancer. Il n&apos;y a pas de raccourci.
          </p>
        </div>
      </SectionBlock>

      {/* La logique de progression */}
      <SectionBlock separator>
        <h2 className="font-heading text-[length:var(--text-h2)] font-normal leading-[var(--leading-h2)] mb-8">
          La logique de progression
        </h2>
        <div className="max-w-[680px] space-y-5 text-[length:var(--text-body)] text-graphite leading-[var(--leading-body)]">
          <p>
            La progression n&apos;est pas linéaire par commodité. Elle l&apos;est par
            nécessité. Chaque module s&apos;appuie sur le précédent. Chaque concept
            est ancré avant d&apos;être étendu.
          </p>
          <p>
            Le parcours distanciel prépare. Le présentiel approfondit. La
            certification valide une maîtrise réelle, pas une simple présence.
          </p>
        </div>
      </SectionBlock>

      {/* Positionnement */}
      <SectionBlock separator>
        <h2 className="font-heading text-[length:var(--text-h2)] font-normal leading-[var(--leading-h2)] mb-8">
          Un positionnement clair
        </h2>
        <div className="max-w-[680px] space-y-5 text-[length:var(--text-body)] text-graphite leading-[var(--leading-body)]">
          <p>
            La Clé ne fait aucune promesse de transformation personnelle. Elle ne
            se positionne ni comme un espace thérapeutique, ni comme un programme
            de développement personnel.
          </p>
        </div>
        <blockquote className="pull-quote">
          La compréhension peut mener à des changements profonds. Mais ce sont{' '}
          <em className="accent">des conséquences, jamais des promesses</em>.
        </blockquote>
      </SectionBlock>

      {/* Conclusion + CTA */}
      <SectionBlock separator>
        <div className="max-w-[680px] text-[length:var(--text-body)] text-graphite leading-[var(--leading-body)] mb-12">
          <p>
            Ce concept prend forme à travers les personnes qui le portent.
          </p>
        </div>
        <Button href={ROUTES.equipe}>Découvrir l&apos;équipe</Button>
      </SectionBlock>
    </article>
  );
}
