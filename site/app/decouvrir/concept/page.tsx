import type { Metadata } from 'next';
import { PageContainer } from '@/components/ui/PageContainer';
import { ConceptContent } from '@/components/decouvrir/ConceptContent';

export const metadata: Metadata = {
  title: 'Le concept',
  description: 'Le cadre méthodologique et la philosophie pédagogique de l\'institut La Clé.',
};

export default function ConceptPage() {
  return (
    <PageContainer>
      <ConceptContent />
    </PageContainer>
  );
}
