"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="relative bg-cream border border-stone p-10 lg:p-14 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(176,144,88,0.04)_0%,transparent_70%)]" />
        <div className="relative">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-10 h-[1px] bg-gold/40" />
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="text-gold/40"
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
            <div className="w-10 h-[1px] bg-gold/40" />
          </div>
          <h3 className="font-display text-2xl lg:text-3xl font-semibold text-plum">
            Message envoyé
          </h3>
          <p className="mt-4 text-muted text-[0.95rem] leading-relaxed">
            Nous reviendrons vers vous dans les meilleurs délais.
          </p>
        </div>
      </div>
    );
  }

  const inputBase =
    "w-full px-5 py-3.5 bg-cream/80 border text-ink text-sm transition-all duration-300 focus:ring-0 focus:outline-none placeholder:text-muted/40";
  const inputIdle = "border-stone";
  const inputFocus = "border-gold/50 shadow-[0_0_20px_rgba(176,144,88,0.06)]";

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div>
        <label
          htmlFor="name"
          className={`block text-xs font-medium tracking-wide uppercase mb-2.5 transition-colors duration-300 ${focused === "name" ? "text-gold" : "text-ink/60"}`}
        >
          Nom complet
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          onFocus={() => setFocused("name")}
          onBlur={() => setFocused(null)}
          className={`${inputBase} ${focused === "name" ? inputFocus : inputIdle}`}
          placeholder="Votre nom"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className={`block text-xs font-medium tracking-wide uppercase mb-2.5 transition-colors duration-300 ${focused === "email" ? "text-gold" : "text-ink/60"}`}
        >
          Adresse e-mail
        </label>
        <input
          type="email"
          id="email"
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
          htmlFor="subject"
          className={`block text-xs font-medium tracking-wide uppercase mb-2.5 transition-colors duration-300 ${focused === "subject" ? "text-gold" : "text-ink/60"}`}
        >
          Objet
        </label>
        <select
          id="subject"
          name="subject"
          required
          onFocus={() => setFocused("subject")}
          onBlur={() => setFocused(null)}
          className={`${inputBase} ${focused === "subject" ? inputFocus : inputIdle}`}
        >
          <option value="">Sélectionnez un objet</option>
          <option value="information">Demande d&apos;information</option>
          <option value="inscription">Inscription à une formation</option>
          <option value="partenariat">Partenariat</option>
          <option value="autre">Autre</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="message"
          className={`block text-xs font-medium tracking-wide uppercase mb-2.5 transition-colors duration-300 ${focused === "message" ? "text-gold" : "text-ink/60"}`}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
          className={`${inputBase} resize-none ${focused === "message" ? inputFocus : inputIdle}`}
          placeholder="Votre message"
        />
      </div>
      <button
        type="submit"
        className="group relative inline-flex items-center justify-center px-10 py-4 bg-plum text-light-text font-body text-sm font-medium tracking-wider uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_4px_24px_rgba(61,28,51,0.35)]"
      >
        <span className="relative z-10">Envoyer le message</span>
        <span
          className="absolute inset-y-0 left-0 w-0 bg-plum-mid transition-all duration-500 ease-out group-hover:w-full"
          aria-hidden="true"
        />
      </button>
    </form>
  );
}
