import type { Metadata } from 'next';
import { PageContainer } from '@/components/ui/PageContainer';
import { CatalogueContent } from '@/components/formations/CatalogueContent';

export const metadata: Metadata = {
  title: 'Catalogue des formations',
  description: 'Les formations proposées par l\'institut La Clé. Un parcours structuré vers la maîtrise.',
};

export default function FormationsPage() {
  return (
    <PageContainer>
      <CatalogueContent />
    </PageContainer>
  );
}
