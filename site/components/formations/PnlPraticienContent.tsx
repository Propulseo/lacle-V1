'use client';

import { SectionBlock } from '@/components/ui/SectionBlock';
import { Button } from '@/components/ui/Button';
import { EXTERNAL } from '@/lib/constants';

const modules = [
  { number: 1, title: 'Les fondements de la PNL', description: 'Origines, principes fondateurs et cadre épistémologique.' },
  { number: 2, title: 'La communication structurée', description: 'Les mécanismes de la communication verbale et non-verbale.' },
  { number: 3, title: 'Les systèmes de représentation', description: 'Comprendre comment chacun construit sa perception du réel.' },
  { number: 4, title: 'Les stratégies mentales', description: 'Identifier et modéliser les séquences cognitives efficaces.' },
  { number: 5, title: 'Les ancrages', description: 'Mécanismes d\'association et techniques d\'ancrage structuré.' },
  { number: 6, title: 'Le recadrage', description: 'Transformer le cadre de référence pour ouvrir de nouvelles perspectives.' },
  { number: 7, title: 'L\'intégration', description: 'Synthèse, mise en pratique et préparation au présentiel.' },
];

const faqItems = [
  {
    question: 'Faut-il des prérequis pour cette formation ?',
    answer: 'Aucun prérequis formel. La formation est conçue pour construire la compréhension depuis les fondements.',
  },
  {
    question: 'Combien de temps dure le parcours distanciel ?',
    answer: 'Le rythme est individuel. Le parcours est structuré pour être suivi de manière progressive, sans contrainte de temps stricte.',
  },
  {
    question: 'Le présentiel est-il obligatoire ?',
    answer: 'Oui. Le présentiel fait partie intégrante de la certification. Il permet l\'ancrage pratique des apprentissages distanciels.',
  },
  {
    question: 'Comment se passe la certification ?',
    answer: 'La certification valide une maîtrise réelle. Elle repose sur l\'évaluation continue du distanciel et sur la démonstration en présentiel.',
  },
];

export function PnlPraticienContent() {
  return (
    <article>
      {/* Hero */}
      <SectionBlock>
        <h1 className="font-heading text-[length:var(--text-h1)] font-light leading-[var(--leading-h1)] mb-8">
          PNL — Praticien
        </h1>
        <p className="max-w-[680px] text-[length:var(--text-body)] text-graphite leading-[var(--leading-body)]">
          Le premier niveau de formation de l&apos;institut La Clé. Un parcours
          construit pour comprendre la PNL par ses mécanismes,{' '}
          <em className="accent">pas par ses recettes</em>.
        </p>
      </SectionBlock>

      {/* Qu'est-ce que la PNL ? */}
      <SectionBlock separator>
        <h2 className="font-heading text-[length:var(--text-h2)] font-normal leading-[var(--leading-h2)] mb-8">
          Qu&apos;est-ce que la PNL ?
        </h2>
        <div className="max-w-[680px] space-y-5 text-[length:var(--text-body)] text-graphite leading-[var(--leading-body)]">
          <p>
            La Programmation Neuro-Linguistique est une approche de la
            communication et du changement. Elle s&apos;intéresse aux structures de
            l&apos;expérience subjective : comment nous percevons, organisons et
            utilisons l&apos;information.
          </p>
          <p>
            Au-delà des techniques, la PNL propose un cadre de compréhension des
            mécanismes qui sous-tendent nos comportements, nos décisions et nos
            interactions.
          </p>
        </div>
      </SectionBlock>

      {/* Pourquoi La Clé */}
      <SectionBlock separator>
        <h2 className="font-heading text-[length:var(--text-h2)] font-normal leading-[var(--leading-h2)] mb-8">
          Pourquoi La Clé
        </h2>
        <div className="max-w-[680px] space-y-5 text-[length:var(--text-body)] text-graphite leading-[var(--leading-body)]">
          <p>
            La plupart des formations en PNL enseignent des techniques. La Clé
            enseigne les mécanismes. La différence est fondamentale :{' '}
            <em className="accent">comprendre le pourquoi permet d&apos;adapter le
            comment</em>.
          </p>
          <p>
            Notre pédagogie est structurée, progressive et exigeante. Elle ne
            promet pas de résultats miracles. Elle construit une compétence
            réelle.
          </p>
        </div>
      </SectionBlock>

      {/* Parcours */}
      <SectionBlock separator>
        <h2 className="font-heading text-[length:var(--text-h2)] font-normal leading-[var(--leading-h2)] mb-10">
          Le parcours
        </h2>

        {/* Distanciel */}
        <div className="mb-16">
          <h3 className="font-heading text-[length:var(--text-h3)] font-normal leading-[var(--leading-h3)] mb-4">
            Phase distancielle
          </h3>
          <p className="max-w-[680px] text-[length:var(--text-body)] text-graphite leading-[var(--leading-body)] mb-10">
            7 modules structurés, accessibles à votre rythme. Chaque module
            construit sur le précédent.
          </p>

          {/* Modules */}
          <div className="space-y-4">
            {modules.map((mod) => (
              <div
                key={mod.number}
                className="card-accent border border-border-light bg-white p-6 md:p-8"
              >
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-[length:var(--text-overline)] font-medium uppercase tracking-[0.1em] text-bronze">
                    Module {mod.number}
                  </span>
                  <h4 className="font-heading text-[length:var(--text-h5)] font-medium leading-[1.3]">
                    {mod.title}
                  </h4>
                </div>
                <p className="text-[length:var(--text-body-sm)] text-graphite leading-[var(--leading-body-sm)]">
                  {mod.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Présentiel */}
        <div className="mb-16">
          <h3 className="font-heading text-[length:var(--text-h3)] font-normal leading-[var(--leading-h3)] mb-4">
            Phase présentielle
          </h3>
          <div className="max-w-[680px] text-[length:var(--text-body)] text-graphite leading-[var(--leading-body)]">
            <p>
              Le présentiel est le prolongement naturel du distanciel. Il permet
              la mise en pratique encadrée, l&apos;ajustement personnalisé et
              l&apos;ancrage corporel des apprentissages.
            </p>
          </div>
        </div>

        {/* Certification */}
        <div>
          <h3 className="font-heading text-[length:var(--text-h3)] font-normal leading-[var(--leading-h3)] mb-4">
            Certification
          </h3>
          <div className="max-w-[680px] text-[length:var(--text-body)] text-graphite leading-[var(--leading-body)]">
            <p>
              La certification La Clé valide une maîtrise réelle. Elle repose
              sur l&apos;évaluation continue tout au long du parcours et sur une
              démonstration en présentiel.{' '}
              <em className="accent">Ce n&apos;est pas un document de complaisance.</em>
            </p>
          </div>
        </div>
      </SectionBlock>

      {/* Décider */}
      <SectionBlock separator>
        <blockquote className="pull-quote">
          Vous avez maintenant une vision claire de ce que cette formation
          propose et de ce qu&apos;elle exige. La décision vous appartient.
        </blockquote>
      </SectionBlock>

      {/* FAQ */}
      <SectionBlock separator>
        <h2 className="font-heading text-[length:var(--text-h2)] font-normal leading-[var(--leading-h2)] mb-10">
          Questions fréquentes
        </h2>
        <div className="max-w-[680px]">
          {faqItems.map((item, i) => (
            <details
              key={i}
              className="border-b border-border-light py-6"
            >
              <summary className="list-none font-body text-[length:var(--text-body)] font-medium leading-[var(--leading-body)] transition-colors duration-500 hover:text-bronze">
                {item.question}
              </summary>
              <p className="mt-4 text-[length:var(--text-body-sm)] text-graphite leading-[var(--leading-body-sm)]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </SectionBlock>

      {/* CTA final */}
      <SectionBlock separator>
        <Button href={EXTERNAL.lms} variant="bronze">
          Accéder à l&apos;espace de formation
        </Button>
      </SectionBlock>
    </article>
  );
}
