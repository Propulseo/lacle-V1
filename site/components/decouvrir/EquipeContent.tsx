'use client';

import { SectionBlock } from '../ui/SectionBlock';
import { VideoAtmosphere } from '../ui/VideoAtmosphere';
import { Expandable } from '../ui/Expandable';
import { Button } from '../ui/Button';
import { ROUTES } from '../../lib/constants';

export function EquipeContent() {
  return (
    <article>
      {/* Hero vidéo */}
      <SectionBlock>
        <h1 className="font-heading text-[length:var(--text-h1)] font-light leading-[var(--leading-h1)] mb-10">
          L&apos;équipe
        </h1>
        <VideoAtmosphere alt="Vidéo d'atmosphère — équipe" />
      </SectionBlock>

      {/* Marien */}
      <SectionBlock separator>
        <h2 className="font-heading text-[length:var(--text-h2)] font-normal leading-[var(--leading-h2)] mb-3">
          Marien
        </h2>
        <p className="text-[length:var(--text-overline)] font-medium uppercase tracking-[0.1em] text-bronze mb-8">
          Garant pédagogique
        </p>
        <div className="max-w-[680px] text-[length:var(--text-body)] text-graphite leading-[var(--leading-body)]">
          <p>
            Marien porte la responsabilité du cadre pédagogique. C&apos;est lui qui
            structure les parcours, définit les exigences et veille à la cohérence
            de chaque module avec la vision globale de l&apos;institut.
          </p>
        </div>
      </SectionBlock>

      {/* Titi */}
      <SectionBlock separator>
        <h2 className="font-heading text-[length:var(--text-h2)] font-normal leading-[var(--leading-h2)] mb-3">
          Titi
        </h2>
        <p className="text-[length:var(--text-overline)] font-medium uppercase tracking-[0.1em] text-bronze mb-8">
          Co-garant symbolique
        </p>
        <div className="max-w-[680px] text-[length:var(--text-body)] text-graphite leading-[var(--leading-body)]">
          <p>
            Titi incarne la dimension humaine et symbolique de La Clé. Sa présence
            garantit que le cadre reste ancré dans une réalité relationnelle, pas
            uniquement structurelle.
          </p>
        </div>
      </SectionBlock>

      {/* Équipe évolutive */}
      <SectionBlock separator>
        <h2 className="font-heading text-[length:var(--text-h2)] font-normal leading-[var(--leading-h2)] mb-8">
          Une équipe appelée à évoluer
        </h2>
        <div className="max-w-[680px] text-[length:var(--text-body)] text-graphite leading-[var(--leading-body)]">
          <p>
            L&apos;institut La Clé est un cadre vivant. L&apos;équipe est amenée à
            s&apos;élargir au rythme de la croissance pédagogique, toujours dans le
            respect des exigences fondatrices.
          </p>
        </div>
      </SectionBlock>

      {/* Origine + parcours fondateur */}
      <SectionBlock separator>
        <h2 className="font-heading text-[length:var(--text-h2)] font-normal leading-[var(--leading-h2)] mb-8">
          L&apos;origine de La Clé
        </h2>
        <div className="max-w-[680px] space-y-5 text-[length:var(--text-body)] text-graphite leading-[var(--leading-body)]">
          <p>
            La Clé est née d&apos;un constat simple : la plupart des formations
            survolent les mécanismes au lieu de les enseigner. Il manquait un
            cadre qui prenne le temps de la profondeur.
          </p>
        </div>

        <div className="mt-10 max-w-[680px]">
          <h3 className="font-heading text-[length:var(--text-h3)] font-normal leading-[var(--leading-h3)] mb-6">
            Parcours du fondateur
          </h3>
          <div className="space-y-5 text-[length:var(--text-body)] text-graphite leading-[var(--leading-body)] mb-8">
            <p>
              Un parcours construit sur l&apos;exigence, la curiosité et la volonté de
              comprendre ce qui structure réellement les comportements humains.
            </p>
          </div>

          <Expandable trigger="Lire le parcours complet">
            <div className="space-y-5 text-[length:var(--text-body-sm)] text-graphite leading-[var(--leading-body-sm)]">
              <p>
                Le parcours du fondateur s&apos;est construit à travers des années
                d&apos;étude, de pratique et d&apos;observation. Chaque étape a contribué
                à forger la vision qui anime aujourd&apos;hui l&apos;institut :{' '}
                <em className="accent">celle d&apos;une formation qui ne transige pas
                sur la profondeur</em>.
              </p>
              <p>
                Des premières formations en PNL aux recherches approfondies sur les
                mécanismes cognitifs, en passant par l&apos;accompagnement de
                professionnels exigeants, chaque expérience a nourri le cadre
                pédagogique de La Clé.
              </p>
            </div>
          </Expandable>
        </div>
      </SectionBlock>

      {/* Conclusion + CTA */}
      <SectionBlock separator>
        <div className="max-w-[680px] text-[length:var(--text-body)] text-graphite leading-[var(--leading-body)] mb-12">
          <p>
            Le cadre humain est posé. Découvrez maintenant les formations qui
            l&apos;incarnent.
          </p>
        </div>
        <Button href={ROUTES.formations}>Découvrir les formations</Button>
      </SectionBlock>
    </article>
  );
}
