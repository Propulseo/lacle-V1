'use client';

import { SectionBlock } from '../ui/SectionBlock';
import { Button } from '../ui/Button';
import { EXTERNAL } from '../../lib/constants';

export function AccesContent() {
  return (
    <article>
      <SectionBlock>
        <h1 className="font-heading text-[length:var(--text-h1)] font-light leading-[var(--leading-h1)] mb-8">
          Accès à l&apos;espace apprenant
        </h1>
        <div className="max-w-[680px] space-y-5 text-[length:var(--text-body)] text-graphite leading-[var(--leading-body)] mb-6">
          <p>
            Vous avez pris le temps de comprendre notre cadre, notre vision et
            notre pédagogie. Si cette approche vous correspond, l&apos;espace
            apprenant est votre prochaine étape.
          </p>
        </div>
        <blockquote className="pull-quote mb-12">
          Ce n&apos;est pas un acte d&apos;achat. C&apos;est un engagement envers votre
          propre compréhension.
        </blockquote>
        <Button href={EXTERNAL.lms} variant="bronze">
          Entrer dans l&apos;espace apprenant
        </Button>
      </SectionBlock>
    </article>
  );
}
