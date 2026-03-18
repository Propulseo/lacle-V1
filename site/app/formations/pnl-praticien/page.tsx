import type { Metadata } from 'next';
import { PageContainer } from '@/components/ui/PageContainer';
import { PnlPraticienContent } from '@/components/formations/PnlPraticienContent';

export const metadata: Metadata = {
  title: 'PNL Praticien',
  description: 'Formation PNL Praticien — Comprendre la PNL, la pédagogie La Clé, et le parcours distanciel vers présentiel.',
};

export default function PnlPraticienPage() {
  return (
    <PageContainer>
      <PnlPraticienContent />
    </PageContainer>
  );
}
