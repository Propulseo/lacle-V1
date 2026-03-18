"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/decouvrir", label: "Nous d\u00E9couvrir" },
  { href: "/formations", label: "Formations" },
  { href: "/equipe", label: "\u00C9quipe" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>

      <header className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 pt-5" role="banner">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo — left */}
          <Link
            href="/"
            className="font-display text-lg font-semibold text-light-text/80 hover:text-light-text transition-colors duration-300 shrink-0"
            aria-label="Institut La Cl&eacute; — Accueil"
          >
            La Cl&eacute;
          </Link>

          {/* Nav pill — center */}
          <nav
            className={`relative flex items-center w-auto px-8 lg:px-10 py-2.5 rounded-full backdrop-blur-2xl border transition-all duration-500 ${
              scrolled
                ? "bg-deep/90 border-light-text/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
                : "bg-deep/70 border-light-text/[0.05] shadow-[0_4px_30px_rgba(0,0,0,0.25)]"
            }`}
            aria-label="Navigation principale"
          >
            {/* Desktop nav — centered */}
            <div className="hidden lg:flex items-center justify-center gap-8 w-full">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-light-text/40 hover:text-light-text/80 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden ml-auto p-1.5 text-light-text/50"
              onClick={() => setMenuOpen(true)}
              aria-label="Ouvrir le menu"
              aria-expanded={menuOpen}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            </button>
          </nav>

          {/* Espace apprenant — right */}
          <Link
            href="/espace-apprenant"
            className="hidden lg:inline-flex items-center gap-2 text-[13px] text-gold/35 hover:text-gold/70 transition-colors duration-300 shrink-0"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-50">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21v-1a6 6 0 0 1 12 0v1" />
            </svg>
            Espace apprenant
          </Link>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-deep/98 backdrop-blur-xl flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
        >
          <div className="flex items-center justify-end px-6 pt-6 pb-4">
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 text-light-text/50"
              aria-label="Fermer le menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center px-10 gap-1" aria-label="Navigation principale">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-4 font-display text-3xl font-medium text-light-text/70 border-b border-light-text/[0.04] hover:text-gold-light transition-colors duration-300"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
