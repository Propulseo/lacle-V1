import Link from 'next/link';
import { ROUTES } from '../../lib/constants';

export function Footer() {
  return (
    <footer className="border-t border-border-light py-12 md:py-16">
      <div className="mx-auto max-w-[var(--max-width)] px-6 md:px-12 lg:px-20">
        <div className="flex flex-wrap gap-8 text-[length:var(--text-caption)] text-graphite-light">
          <Link
            href={ROUTES.mentionsLegales}
            className="transition-colors duration-[var(--duration-medium)] hover:text-noir"
          >
            Mentions légales
          </Link>
          <Link
            href={ROUTES.cgv}
            className="transition-colors duration-[var(--duration-medium)] hover:text-noir"
          >
            CGV
          </Link>
          <Link
            href={ROUTES.contact}
            className="transition-colors duration-[var(--duration-medium)] hover:text-noir"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
