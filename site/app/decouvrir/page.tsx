import type { Metadata } from 'next';
import { PageContainer } from '@/components/ui/PageContainer';
import { HubContent } from '@/components/decouvrir/HubContent';

export const metadata: Metadata = {
  title: 'Nous découvrir',
  description: 'Découvrez l\'institut La Clé : sa vocation, son concept et son équipe.',
};

export default function DecouvrirPage() {
  return (
    <PageContainer>
      <HubContent />
    </PageContainer>
  );
}
