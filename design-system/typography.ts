/**
 * Institut La Clé — Design System
 * Typography Tokens
 */

export const fontFamily = {
  heading: '"Cormorant Garamond", Georgia, "Times New Roman", serif',
  body: '"Hanken Grotesk", system-ui, -apple-system, sans-serif',
} as const;

export const typeScale = {
  h1: {
    fontSize: '3.5rem',       // 56px
    mobileFontSize: '2.25rem', // 36px
    fontWeight: 300,           // Light
    lineHeight: 1.15,
    fontFamily: 'heading' as const,
  },
  h2: {
    fontSize: '2.625rem',      // 42px
    mobileFontSize: '1.75rem', // 28px
    fontWeight: 400,           // Regular
    lineHeight: 1.2,
    fontFamily: 'heading' as const,
  },
  h3: {
    fontSize: '2rem',          // 32px
    mobileFontSize: '1.5rem',  // 24px
    fontWeight: 400,
    lineHeight: 1.25,
    fontFamily: 'heading' as const,
  },
  h4: {
    fontSize: '1.5rem',        // 24px
    mobileFontSize: '1.25rem', // 20px
    fontWeight: 500,           // Medium
    lineHeight: 1.3,
    fontFamily: 'heading' as const,
  },
  h5: {
    fontSize: '1.25rem',       // 20px
    mobileFontSize: '1.125rem',// 18px
    fontWeight: 500,
    lineHeight: 1.35,
    fontFamily: 'heading' as const,
  },
  h6: {
    fontSize: '1.125rem',      // 18px
    mobileFontSize: '1rem',    // 16px
    fontWeight: 600,           // SemiBold
    lineHeight: 1.4,
    fontFamily: 'heading' as const,
  },
  body: {
    fontSize: '1.125rem',      // 18px
    mobileFontSize: '1rem',    // 16px
    fontWeight: 400,
    lineHeight: 1.7,
    fontFamily: 'body' as const,
  },
  bodySmall: {
    fontSize: '1rem',          // 16px
    mobileFontSize: '0.875rem',// 14px
    fontWeight: 400,
    lineHeight: 1.6,
    fontFamily: 'body' as const,
  },
  caption: {
    fontSize: '0.875rem',      // 14px
    mobileFontSize: '0.75rem', // 12px
    fontWeight: 400,
    lineHeight: 1.5,
    fontFamily: 'body' as const,
  },
  overline: {
    fontSize: '0.75rem',       // 12px
    mobileFontSize: '0.6875rem',// 11px
    fontWeight: 500,
    lineHeight: 1.4,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    fontFamily: 'body' as const,
  },
} as const;

export type TypeToken = keyof typeof typeScale;
