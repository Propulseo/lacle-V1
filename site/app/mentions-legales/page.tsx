import type { Metadata } from 'next';
import { PageContainer } from '../../components/ui/PageContainer';

export const metadata: Metadata = {
  title: 'Mentions légales',
};

export default function MentionsLegalesPage() {
  return (
    <PageContainer>
      <article className="py-[var(--space-section)]">
        <h1 className="font-heading text-[length:var(--text-h1)] font-light leading-[var(--leading-h1)] mb-12">
          Mentions légales
        </h1>
        <div className="max-w-[680px] space-y-8 text-[length:var(--text-body)] text-graphite leading-[var(--leading-body)]">
          <section>
            <h2 className="font-heading text-[length:var(--text-h3)] font-normal leading-[var(--leading-h3)] mb-4 text-noir">
              Éditeur du site
            </h2>
            <p>Institut La Clé<br />Adresse à compléter<br />SIRET : à compléter</p>
          </section>
          <section>
            <h2 className="font-heading text-[length:var(--text-h3)] font-normal leading-[var(--leading-h3)] mb-4 text-noir">
              Hébergement
            </h2>
            <p>Vercel Inc.<br />340 S Lemon Ave #4133<br />Walnut, CA 91789, USA</p>
          </section>
          <section>
            <h2 className="font-heading text-[length:var(--text-h3)] font-normal leading-[var(--leading-h3)] mb-4 text-noir">
              Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site est protégé par le droit d&apos;auteur.
              Toute reproduction, même partielle, est soumise à autorisation préalable.
            </p>
          </section>
        </div>
      </article>
    </PageContainer>
  );
}
