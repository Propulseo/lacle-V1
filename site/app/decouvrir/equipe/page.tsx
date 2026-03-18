import type { Metadata } from 'next';
import { PageContainer } from '../../../components/ui/PageContainer';
import { EquipeContent } from '../../../components/decouvrir/EquipeContent';

export const metadata: Metadata = {
  title: 'L\'équipe',
  description: 'L\'équipe fondatrice de l\'institut La Clé : garants du cadre humain et pédagogique.',
};

export default function EquipePage() {
  return (
    <PageContainer>
      <EquipeContent />
    </PageContainer>
  );
}
