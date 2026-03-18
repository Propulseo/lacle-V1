/**
 * Institut La Clé — Design System
 * Typography Tokens
 */

export const fontFamily = {
  heading: '"Cormorant Garamond", Georgia, "Times New Roman", serif',
  body: '"Hanken Grotesk", system-ui, -apple-system, sans-serif',
} as const;

export const typeScale = {
  h1: { fontSize: '3.5rem', mobileFontSize: '2.25rem', fontWeight: 300, lineHeight: 1.15, fontFamily: 'heading' as const },
  h2: { fontSize: '2.625rem', mobileFontSize: '1.75rem', fontWeight: 400, lineHeight: 1.2, fontFamily: 'heading' as const },
  h3: { fontSize: '2rem', mobileFontSize: '1.5rem', fontWeight: 400, lineHeight: 1.25, fontFamily: 'heading' as const },
  h4: { fontSize: '1.5rem', mobileFontSize: '1.25rem', fontWeight: 500, lineHeight: 1.3, fontFamily: 'heading' as const },
  h5: { fontSize: '1.25rem', mobileFontSize: '1.125rem', fontWeight: 500, lineHeight: 1.35, fontFamily: 'heading' as const },
  h6: { fontSize: '1.125rem', mobileFontSize: '1rem', fontWeight: 600, lineHeight: 1.4, fontFamily: 'heading' as const },
  body: { fontSize: '1.125rem', mobileFontSize: '1rem', fontWeight: 400, lineHeight: 1.7, fontFamily: 'body' as const },
  bodySmall: { fontSize: '1rem', mobileFontSize: '0.875rem', fontWeight: 400, lineHeight: 1.6, fontFamily: 'body' as const },
  caption: { fontSize: '0.875rem', mobileFontSize: '0.75rem', fontWeight: 400, lineHeight: 1.5, fontFamily: 'body' as const },
  overline: { fontSize: '0.75rem', mobileFontSize: '0.6875rem', fontWeight: 500, lineHeight: 1.4, letterSpacing: '0.1em', textTransform: 'uppercase' as const, fontFamily: 'body' as const },
} as const;

export type TypeToken = keyof typeof typeScale;
