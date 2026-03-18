import Link from "next/link";

const navLinks = [
  { href: "/decouvrir", label: "Nous d\u00E9couvrir" },
  { href: "/formations", label: "Formations" },
  { href: "/equipe", label: "\u00C9quipe" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-deep text-light-text/40 overflow-hidden" role="contentinfo">
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-light-text/[0.06] to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 pt-16 pb-8 lg:pt-20 lg:pb-10">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-20 mb-14">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="font-display text-2xl font-semibold text-light-text">
              Institut La Cl&eacute;
            </Link>
            <p className="mt-3 text-sm text-light-text/25 leading-relaxed">
              Centre de formation d&eacute;di&eacute; au d&eacute;veloppement humain
              et &agrave; l&apos;accompagnement professionnel.
            </p>
            <div className="mt-5 w-8 h-[1px] bg-gold/20" aria-hidden="true" />
          </div>

          {/* Navigation + Contact */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
            <div>
              <h3 className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-light-text/15 mb-5">
                Navigation
              </h3>
              <nav aria-label="Navigation footer">
                <ul className="space-y-3">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-light-text/30 hover:text-light-text/60 transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/espace-apprenant"
                      className="text-sm text-gold/25 hover:text-gold/50 transition-colors duration-300"
                    >
                      Espace apprenant
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <h3 className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-light-text/15 mb-5">
                Contact
              </h3>
              <address className="not-italic space-y-3 text-sm text-light-text/30">
                <p>12 rue de la Formation<br />75008 Paris</p>
                <p>+33 (0)1 23 45 67 89</p>
                <p>
                  <a
                    href="mailto:contact@institut-la-cle.fr"
                    className="hover:text-light-text/50 transition-colors duration-300"
                  >
                    contact@institut-la-cle.fr
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-light-text/[0.04] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-light-text/15">
            <span>&copy; {new Date().getFullYear()} Institut La Cl&eacute;</span>
            <Link href="/mentions-legales" className="hover:text-light-text/30 transition-colors duration-300">
              Mentions l&eacute;gales
            </Link>
            <Link href="/cgv" className="hover:text-light-text/30 transition-colors duration-300">
              CGV
            </Link>
          </div>
          <p className="text-xs text-light-text/12">
            Fait avec passion par{" "}
            <a
              href="https://propulseo-site.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/30 hover:text-gold/60 transition-colors duration-300"
            >
              Propul&apos;SEO
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
