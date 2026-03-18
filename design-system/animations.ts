/**
 * Institut La Clé — Design System
 * Animation Tokens
 *
 * Règles :
 * - Minimales, lentes, signifiantes
 * - Pas de bounce, pas de spring agressif
 * - Déclenchées au scroll (IntersectionObserver, threshold 0.15)
 */

export const easing = {
  default: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

export const duration = {
  fast: 300,       // ms — micro-interactions rapides
  medium: 400,     // ms — hover boutons, cartes
  slow: 600,       // ms — fade-in simple
  reveal: 800,     // ms — apparition section au scroll
  section: 1000,   // ms — transition de section longue
  splash: 1800,    // ms — animation splash totale
} as const;

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: duration.reveal / 1000,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
} as const;

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    duration: duration.slow / 1000,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
} as const;

export const stagger = {
  container: {
    animate: {
      transition: {
        staggerChildren: 0.1, // 100ms entre éléments
      },
    },
  },
  item: fadeInUp,
} as const;

/**
 * IntersectionObserver config pour les reveal au scroll
 */
export const revealConfig = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px',
} as const;
