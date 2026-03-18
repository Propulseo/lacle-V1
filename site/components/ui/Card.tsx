import Link from 'next/link';

type CardProps = {
  href: string;
  title: string;
  description: string;
};

export function Card({ href, title, description }: CardProps) {
  return (
    <Link
      href={href}
      className="card-accent group block border border-border-light bg-white p-8 md:p-12 transition-colors duration-500 ease-[var(--ease-default)] hover:border-bronze"
    >
      <h3 className="font-heading text-[length:var(--text-h4)] font-normal leading-[var(--leading-h4)] mb-4">
        {title}
      </h3>
      <p className="text-[length:var(--text-body-sm)] text-graphite leading-[var(--leading-body-sm)]">
        {description}
      </p>
    </Link>
  );
}
