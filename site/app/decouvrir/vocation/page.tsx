import type { Metadata } from 'next';
import { PageContainer } from '../../../components/ui/PageContainer';
import { VocationContent } from '../../../components/decouvrir/VocationContent';

export const metadata: Metadata = {
  title: 'Notre vocation',
  description: 'La vocation de l\'institut La Clé : comprendre les mécanismes humains avec rigueur et profondeur.',
};

export default function VocationPage() {
  return (
    <PageContainer>
      <VocationContent />
    </PageContainer>
  );
}
