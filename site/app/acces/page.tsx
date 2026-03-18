import type { Metadata } from 'next';
import { PageContainer } from '../../components/ui/PageContainer';
import { AccesContent } from '../../components/acces/AccesContent';

export const metadata: Metadata = {
  title: 'Accès à l\'espace apprenant',
  description: 'Accédez à votre espace de formation La Clé.',
};

export default function AccesPage() {
  return (
    <PageContainer>
      <AccesContent />
    </PageContainer>
  );
}
