/**
 * Institut La Clé — Design System
 * Spacing Tokens (base 8px)
 */

export const spacing = {
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.5rem',    // 24px
  6: '2rem',      // 32px
  7: '3rem',      // 48px
  8: '4rem',      // 64px
  9: '5rem',      // 80px
  10: '6rem',     // 96px
  11: '7.5rem',   // 120px
  12: '10rem',    // 160px
} as const;

export const sectionSpacing = {
  desktop: '7.5rem',  // 120px
  mobile: '5rem',     // 80px
} as const;

export const layout = {
  maxWidth: '1200px',
  gutter: {
    mobile: '1.5rem',   // 24px
    desktop: '2rem',     // 32px
  },
  margin: {
    mobile: '1.5rem',   // 24px
    tablet: '3rem',      // 48px
    desktop: '5rem',     // 80px
    large: 'auto',
  },
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1440px',
} as const;

export type SpacingToken = keyof typeof spacing;
