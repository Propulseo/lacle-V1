import type { Metadata } from 'next';
import { PageContainer } from '@/components/ui/PageContainer';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <PageContainer>
      <article className="py-[var(--space-section)]">
        <h1 className="font-heading text-[length:var(--text-h1)] font-light leading-[var(--leading-h1)] mb-12">
          Contact
        </h1>
        <div className="max-w-[680px] space-y-5 text-[length:var(--text-body)] text-graphite leading-[var(--leading-body)]">
          <p>
            Pour toute question relative à l&apos;institut ou aux formations,
            vous pouvez nous écrire à l&apos;adresse suivante :
          </p>
          <p className="font-medium text-noir">
            contact@institut-lacle.fr
          </p>
        </div>
      </article>
    </PageContainer>
  );
}
