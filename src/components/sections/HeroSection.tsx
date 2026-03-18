import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex overflow-hidden bg-deep" aria-label="Accueil">
      {/* ─── Atmospheric layers ─── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/3 left-1/3 w-[700px] h-[700px] animate-pulse-glow"
          style={{ background: "radial-gradient(ellipse, rgba(45,27,61,0.25) 0%, transparent 65%)" }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px]"
          style={{ background: "radial-gradient(ellipse, rgba(176,144,88,0.06) 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px]"
          style={{ background: "radial-gradient(ellipse, rgba(14,18,37,0.8) 0%, transparent 70%)" }}
        />
      </div>

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(240,235,227,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(240,235,227,.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* ─── Content ─── */}
      <div className="relative z-20 flex flex-col justify-center w-full pt-32 pb-20 lg:py-0">
        <div className="mx-auto max-w-7xl w-full px-6 lg:px-12">
          <div className="max-w-xl">
            <p className="font-body text-[11px] font-semibold tracking-[0.5em] uppercase text-gold/50 animate-fade-in-up">
              Institut
            </p>

            <h1
              className="mt-5 font-display font-semibold text-light-text leading-[0.85] tracking-[-0.02em] animate-clip-reveal"
              style={{ animationDelay: "200ms" }}
            >
              <span className="block text-7xl sm:text-8xl lg:text-[9rem] xl:text-[11rem]">
                La Cl&eacute;
              </span>
            </h1>

            <div
              className="mt-8 h-[1px] bg-gradient-to-r from-gold/50 via-gold/25 to-transparent animate-draw-line"
              style={{ animationDelay: "600ms", width: "100px" }}
              aria-hidden="true"
            />

            <p
              className="mt-8 font-body text-lg lg:text-[1.15rem] text-light-text/35 leading-relaxed max-w-md animate-fade-in-up"
              style={{ animationDelay: "800ms" }}
            >
              Centre de formation d&eacute;di&eacute; au d&eacute;veloppement humain
              et&nbsp;&agrave;&nbsp;l&apos;accompagnement professionnel
            </p>

            <div
              className="mt-12 flex flex-col sm:flex-row gap-4 animate-fade-in-up"
              style={{ animationDelay: "1000ms" }}
            >
              <Link
                href="/decouvrir"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-light-text font-body text-sm font-medium tracking-wider uppercase overflow-hidden transition-all duration-500 glass hover:shadow-[var(--glow-plum-sm)]"
              >
                <span className="relative z-10">Nous d&eacute;couvrir</span>
                <span
                  className="absolute inset-y-0 left-0 w-0 bg-light-text/[0.04] transition-all duration-500 ease-out group-hover:w-full"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/formations"
                className="group inline-flex items-center gap-2 px-6 py-4 text-light-text/35 font-body text-sm font-medium tracking-wider uppercase hover:text-light-text/60 transition-colors duration-300"
              >
                Formations
                <svg
                  className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Abstract Portal Element ─── */}
      <div
        className="hidden lg:flex absolute top-0 right-0 w-[48%] h-full items-center justify-center"
        aria-hidden="true"
      >
        <div
          className="absolute w-[500px] h-[500px] animate-pulse-glow"
          style={{ background: "radial-gradient(circle, rgba(45,27,61,0.5) 0%, rgba(45,27,61,0.15) 40%, transparent 70%)" }}
        />

        <svg
          viewBox="0 0 500 500"
          className="relative w-[420px] h-[420px] text-light-text"
          fill="none"
        >
          <g className="animate-slow-rotate" style={{ transformOrigin: "250px 250px" }}>
            <circle cx="250" cy="250" r="230" stroke="currentColor" strokeWidth="0.8" opacity="0.2" />
            <path d="M 250 20 A 230 230 0 0 1 480 250" stroke="url(#goldGrad)" strokeWidth="1.5" opacity="0.35" />
            <path d="M 20 250 A 230 230 0 0 1 250 480" stroke="currentColor" strokeWidth="0.8" opacity="0.15" />
          </g>

          <g style={{ transformOrigin: "250px 250px", animation: "slowRotate 90s linear infinite reverse" }}>
            <circle cx="250" cy="250" r="170" stroke="currentColor" strokeWidth="0.6" opacity="0.2" strokeDasharray="8 12" />
          </g>

          <circle cx="250" cy="250" r="110" stroke="url(#goldGrad)" strokeWidth="1.5" opacity="0.45" />

          <g opacity="0.4" className="animate-float" style={{ filter: "drop-shadow(0 0 8px rgba(176,144,88,0.15))" }}>
            <circle cx="250" cy="195" r="50" stroke="url(#goldGrad)" strokeWidth="2" fill="none" />
            <circle cx="250" cy="195" r="30" stroke="currentColor" strokeWidth="1.2" fill="none" />
            <circle cx="250" cy="195" r="12" stroke="url(#goldGrad)" strokeWidth="0.8" fill="none" opacity="0.6" />
            <rect x="247.5" y="245" width="5" height="120" fill="currentColor" rx="2" />
            <rect x="252.5" y="315" width="22" height="4" fill="currentColor" rx="1" />
            <rect x="252.5" y="335" width="15" height="4" fill="currentColor" rx="1" />
            <rect x="252.5" y="355" width="22" height="4" fill="currentColor" rx="1" />
            <rect x="225.5" y="325" width="22" height="3.5" fill="currentColor" rx="1" opacity="0.7" />
          </g>

          <circle cx="250" cy="80" r="2.5" fill="url(#goldGrad)" opacity="0.4" />
          <circle cx="420" cy="250" r="2" fill="currentColor" opacity="0.25" />
          <circle cx="250" cy="420" r="2.5" fill="url(#goldGrad)" opacity="0.3" />
          <circle cx="80" cy="250" r="2" fill="currentColor" opacity="0.2" />

          <g style={{ transformOrigin: "250px 250px", animation: "slowRotate 40s linear infinite" }}>
            <circle cx="250" cy="55" r="1.5" fill="url(#goldGrad)" opacity="0.5" />
            <circle cx="445" cy="250" r="1" fill="currentColor" opacity="0.3" />
          </g>

          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(176,144,88,1)" />
              <stop offset="100%" stopColor="rgba(240,235,227,0.4)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bottom gradient fade → abyss */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-abyss to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
