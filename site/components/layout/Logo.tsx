import Link from 'next/link';
import { ROUTES } from '../../lib/constants';

export function Logo() {
  return (
    <Link
      href={ROUTES.home}
      className="font-heading text-[length:var(--text-caption)] font-normal tracking-[0.15em] text-graphite-light transition-colors duration-[var(--duration-medium)] hover:text-noir"
      aria-label="Retour à l'accueil — La Clé"
    >
      La Clé
    </Link>
  );
}
