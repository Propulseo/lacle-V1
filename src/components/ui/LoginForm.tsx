"use client";

import { useState, type FormEvent } from "react";

export default function LoginForm() {
  const [error, setError] = useState("");
  const [focused, setFocused] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("L\u2019espace apprenant sera bient\u00f4t disponible.");
  }

  const inputBase =
    "w-full px-5 py-3.5 bg-night-mid/80 border text-light-text text-sm transition-all duration-300 focus:ring-0 focus:outline-none placeholder:text-light-text/20";
  const inputIdle = "border-light-text/8";
  const inputFocus =
    "border-gold/40 shadow-[0_0_25px_rgba(176,144,88,0.06)]";

  return (
    <div className="relative bg-night-mid/50 border border-light-text/[0.06] p-8 lg:p-12 backdrop-blur-sm overflow-hidden">
      {/* Corner ornament */}
      <div className="absolute top-6 right-6" aria-hidden="true">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          className="text-gold/10"
        >
          <rect x="0" y="0" width="28" height="1" fill="currentColor" />
          <rect x="27" y="0" width="1" height="28" fill="currentColor" />
        </svg>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <div className="w-8 h-[1px] bg-gold/30" aria-hidden="true" />
        <h2 className="font-display text-xl font-semibold text-light-text">
          Connexion
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="login-email"
            className={`block text-xs font-medium tracking-wide uppercase mb-2.5 transition-colors duration-300 ${focused === "email" ? "text-gold-light" : "text-light-text/40"}`}
          >
            Adresse e-mail
          </label>
          <input
            type="email"
            id="login-email"
            name="email"
            required
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
            className={`${inputBase} ${focused === "email" ? inputFocus : inputIdle}`}
            placeholder="votre@email.com"
          />
        </div>
        <div>
          <label
            htmlFor="login-password"
            className={`block text-xs font-medium tracking-wide uppercase mb-2.5 transition-colors duration-300 ${focused === "password" ? "text-gold-light" : "text-light-text/40"}`}
          >
            Mot de passe
          </label>
          <input
            type="password"
            id="login-password"
            name="password"
            required
            onFocus={() => setFocused("password")}
            onBlur={() => setFocused(null)}
            className={`${inputBase} ${focused === "password" ? inputFocus : inputIdle}`}
            placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
          />
        </div>
        {error && (
          <div className="flex items-center gap-3 p-3 border border-gold/15 bg-gold/[0.04]">
            <div className="w-1.5 h-1.5 bg-gold/50 rotate-45 shrink-0" />
            <p className="text-sm text-gold-light/80">{error}</p>
          </div>
        )}
        <button
          type="submit"
          className="group relative w-full inline-flex items-center justify-center px-8 py-4 border border-light-text/15 text-light-text font-body text-sm font-medium tracking-wider uppercase overflow-hidden transition-all duration-300 hover:border-gold/30 hover:shadow-[0_0_30px_rgba(176,144,88,0.08)]"
        >
          <span className="relative z-10">Acc&eacute;der &agrave; mon espace</span>
          <span
            className="absolute inset-y-0 left-0 w-0 bg-light-text/[0.06] transition-all duration-500 ease-out group-hover:w-full"
            aria-hidden="true"
          />
        </button>
      </form>

      <p className="text-xs text-light-text/20 text-center mt-8">
        Acc&egrave;s r&eacute;serv&eacute; aux apprenants inscrits
      </p>
    </div>
  );
}
