/**
 * Institut La Clé — Constants
 */

export const SITE = {
  name: 'La Clé',
  tagline: 'Institut de compréhension des mécanismes humains',
  baseline: 'Comprendre avant d\'agir',
} as const;

export const ROUTES = {
  home: '/',
  decouvrir: '/decouvrir',
  vocation: '/decouvrir/vocation',
  concept: '/decouvrir/concept',
  equipe: '/decouvrir/equipe',
  formations: '/formations',
  pnlPraticien: '/formations/pnl-praticien',
  acces: '/acces',
  mentionsLegales: '/mentions-legales',
  cgv: '/cgv',
  contact: '/contact',
} as const;

export const EXTERNAL = {
  lms: process.env.NEXT_PUBLIC_LMS_URL || '/acces',
} as const;
