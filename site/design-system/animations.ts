/**
 * Institut La Clé — Design System
 * Animation Tokens
 */

export const easing = {
  default: [0.25, 0.46, 0.45, 0.94] as const,
  smooth: [0.4, 0, 0.2, 1] as const,
};

export const duration = {
  fast: 0.3,
  medium: 0.4,
  slow: 0.6,
  reveal: 0.8,
  section: 1.0,
  splash: 1.8,
};

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: duration.reveal, ease: easing.default },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: duration.slow, ease: easing.default },
};

export const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export const staggerItem = fadeInUp;

export const revealConfig = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px',
};
