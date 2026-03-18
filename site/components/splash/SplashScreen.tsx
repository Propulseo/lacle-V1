'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SPLASH_DURATION = 1800; // ms
const STORAGE_KEY = 'lacle-splash-seen';

export function SplashScreen({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState<boolean | null>(null);

  useEffect(() => {
    const seen = sessionStorage.getItem(STORAGE_KEY);
    if (seen) {
      setShowSplash(false);
    } else {
      setShowSplash(true);
      sessionStorage.setItem(STORAGE_KEY, '1');
      const timer = setTimeout(() => setShowSplash(false), SPLASH_DURATION);
      return () => clearTimeout(timer);
    }
  }, []);

  // Avoid flash: render nothing until we know
  if (showSplash === null) {
    return (
      <div className="fixed inset-0 z-50 bg-noir" aria-hidden="true" />
    );
  }

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-noir"
            aria-label="Institut La Clé"
            role="status"
          >
            <KeySymbol />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-heading text-[length:var(--text-h5)] font-light tracking-[0.05em] text-ivory"
            >
              Comprendre avant d&apos;agir
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={showSplash === false ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {children}
      </motion.div>
    </>
  );
}

function KeySymbol() {
  return (
    <motion.svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className="mb-10 h-[72px] w-[72px]"
      aria-hidden="true"
    >
      <motion.path
        d="M32 6 C32 6 22 6 22 18 C22 25 27 27 27 34 L27 42 L37 42 L37 34 C37 27 42 25 42 18 C42 6 32 6 32 6 Z M25 44 L39 44 L39 48 L25 48 Z M27 50 L37 50 L37 52.5 L27 52.5 Z M29 54.5 L35 54.5 L35 56.5 L29 56.5 Z"
        stroke="#F7F5F0"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] },
          opacity: { duration: 0.3 },
        }}
      />
    </motion.svg>
  );
}
