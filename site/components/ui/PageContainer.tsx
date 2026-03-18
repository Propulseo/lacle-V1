import { Logo } from '@/components/layout/Logo';

type PageContainerProps = {
  children: React.ReactNode;
  showLogo?: boolean;
};

export function PageContainer({ children, showLogo = true }: PageContainerProps) {
  return (
    <div className="mx-auto max-w-[var(--max-width)] px-6 md:px-12 lg:px-20">
      {showLogo && (
        <header className="pt-8 pb-16 md:pt-12 md:pb-24">
          <Logo />
        </header>
      )}
      {children}
    </div>
  );
}
