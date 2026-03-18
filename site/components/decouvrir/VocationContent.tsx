'use client';

import { SectionBlock } from '../ui/SectionBlock';
import { VideoAtmosphere } from '../ui/VideoAtmosphere';
import { Button } from '../ui/Button';
import { ROUTES } from '../../lib/constants';

export function VocationContent() {
  return (
    <article>
      {/* Section 1 — Intention (Hero) */}
      <SectionBlock>
        <h1 className="font-heading text-[length:var(--text-h1)] font-light leading-[var(--leading-h1)] mb-8">
          Notre vocation
        </h1>
        <p className="max-w-[680px] text-[length:var(--text-body)] text-graphite leading-[var(--leading-body)]">
          Avant de former, nous avons voulu comprendre. Comprendre ce qui structure
          la pensée, ce qui oriente les comportements, ce qui fonde les décisions.
          L&apos;institut La Clé est né de cette exigence.
        </p>
        <div className="mt-10">
          <VideoAtmosphere alt="Vidéo d'atmosphère — intention" />
        </div>
      </SectionBlock>

      {/* Section 2 — L'excellence n'est pas un slogan */}
      <SectionBlock separator>
        <h2 className="font-heading text-[length:var(--text-h2)] font-normal leading-[var(--leading-h2)] mb-8">
          L&apos;excellence n&apos;est pas un slogan
        </h2>
        <div className="max-w-[680px] space-y-5 text-[length:var(--text-body)] text-graphite leading-[var(--leading-body)]">
          <p>
            L&apos;excellence, ici, ne désigne pas une promesse marketing. Elle désigne
            un engagement structurel : celui de ne rien simplifier à l&apos;excès, de ne
            rien réduire à une formule, de ne rien promettre qui ne puisse être tenu.
          </p>
          <p>
            Chaque module, chaque séquence, chaque interaction pédagogique est conçue
            pour construire une compréhension réelle —{' '}
            <em className="accent">pas une impression de savoir</em>.
          </p>
        </div>
        <div className="mt-10">
          <VideoAtmosphere alt="Vidéo d'atmosphère — excellence" />
        </div>
      </SectionBlock>

      {/* Section 3 — Aller au cœur des mécanismes */}
      <SectionBlock separator>
        <h2 className="font-heading text-[length:var(--text-h2)] font-normal leading-[var(--leading-h2)] mb-8">
          Aller au cœur des mécanismes
        </h2>
        <div className="max-w-[680px] space-y-5 text-[length:var(--text-body)] text-graphite leading-[var(--leading-body)]">
          <p>
            Nous ne formons pas à des techniques isolées. Nous formons à la
            compréhension des mécanismes qui les sous-tendent. C&apos;est cette
            profondeur qui permet ensuite l&apos;application juste et durable.
          </p>
          <p>
            Le savoir, ici, n&apos;est pas un produit à consommer.{' '}
            <em className="accent">C&apos;est une compétence à construire.</em>
          </p>
        </div>
        <div className="mt-10">
          <VideoAtmosphere alt="Vidéo d'atmosphère — mécanismes" />
        </div>
      </SectionBlock>

      {/* Section 4 — L'humain comme horizon */}
      <SectionBlock separator>
        <h2 className="font-heading text-[length:var(--text-h2)] font-normal leading-[var(--leading-h2)] mb-8">
          L&apos;humain comme horizon
        </h2>
        <div className="max-w-[680px] space-y-5 text-[length:var(--text-body)] text-graphite leading-[var(--leading-body)]">
          <p>
            La compréhension des mécanismes humains n&apos;est pas une fin en soi. Elle
            est un levier. Un point d&apos;ancrage pour ceux qui veulent agir avec
            lucidité, construire avec justesse, et avancer avec profondeur.
          </p>
        </div>
        <blockquote className="pull-quote">
          L&apos;institut La Clé existe pour offrir ce cadre. Structuré, exigeant, et
          profondément humain.
        </blockquote>
        <div className="mt-10">
          <VideoAtmosphere alt="Vidéo d'atmosphère — humain" />
        </div>
      </SectionBlock>

      {/* Section 5 — Conclusion + CTA */}
      <SectionBlock separator>
        <div className="max-w-[680px] text-[length:var(--text-body)] text-graphite leading-[var(--leading-body)] mb-12">
          <p>
            Ce cadre ne se décrète pas. Il se construit. Et il repose sur des
            personnes qui l&apos;incarnent au quotidien.
          </p>
        </div>
        <Button href={ROUTES.equipe}>Découvrir l&apos;équipe fondatrice</Button>
      </SectionBlock>
    </article>
  );
}
