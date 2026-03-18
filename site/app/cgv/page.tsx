import type { Metadata } from 'next';
import { PageContainer } from '@/components/ui/PageContainer';

export const metadata: Metadata = {
  title: 'Conditions générales de vente',
};

export default function CgvPage() {
  return (
    <PageContainer>
      <article className="py-[var(--space-section)]">
        <h1 className="font-heading text-[length:var(--text-h1)] font-light leading-[var(--leading-h1)] mb-12">
          Conditions générales de vente
        </h1>
        <div className="max-w-[680px] space-y-8 text-[length:var(--text-body)] text-graphite leading-[var(--leading-body)]">
          <p>Les conditions générales de vente seront publiées avant l&apos;ouverture de l&apos;espace apprenant.</p>
        </div>
      </article>
    </PageContainer>
  );
}
