import Link from 'next/link';

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'default' | 'bronze';
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = 'default',
  external,
  className = '',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-body text-[0.9375rem] font-medium tracking-[0.04em] px-12 py-3.5 border rounded-[2px] transition-all duration-500 ease-[var(--ease-default)]';

  const variants = {
    default:
      'border-graphite text-noir bg-transparent hover:bg-noir hover:text-ivory hover:border-noir',
    bronze:
      'border-bronze text-bronze bg-transparent hover:bg-bronze hover:text-ivory',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
