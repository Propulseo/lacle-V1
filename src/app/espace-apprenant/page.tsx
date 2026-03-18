"use client";

import PageHero from "@/components/ui/PageHero";
import LoginForm from "@/components/ui/LoginForm";
import Reveal from "@/components/ui/Reveal";

export default function EspaceApprenantPage() {
  return (
    <>
      <PageHero
        label="Espace r\u00E9serv\u00E9"
        title="Espace apprenant"
        description="Connectez-vous pour acc\u00E9der \u00E0 vos modules, ressources et suivi de progression."
        variant="dark"
      />

      <section className="relative bg-night py-20 lg:py-28 overflow-hidden">
        {/* Atmospheric layers */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse,rgba(176,144,88,0.04)_0%,transparent_70%)]" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(240,235,227,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(240,235,227,.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-lg px-6">
          <Reveal>
            {/* Diamond separator */}
            <div className="flex items-center justify-center gap-6 mb-10" aria-hidden="true">
              <div className="w-12 h-[1px] bg-gold/20" />
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="text-gold/20"
              >
                <rect
                  x="7"
                  y="0"
                  width="9.9"
                  height="9.9"
                  transform="rotate(45 7 0)"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
              <div className="w-12 h-[1px] bg-gold/20" />
            </div>

            <LoginForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
