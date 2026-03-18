/**
 * Institut La Clé — Design System
 * Spacing Tokens (base 8px)
 */

export const spacing = {
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.5rem',
  6: '2rem',
  7: '3rem',
  8: '4rem',
  9: '5rem',
  10: '6rem',
  11: '7.5rem',
  12: '10rem',
} as const;

export const sectionSpacing = {
  desktop: '7.5rem',
  mobile: '5rem',
} as const;

export const layout = {
  maxWidth: '1200px',
  gutter: { mobile: '1.5rem', desktop: '2rem' },
  margin: { mobile: '1.5rem', tablet: '3rem', desktop: '5rem', large: 'auto' },
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1440px',
} as const;

export type SpacingToken = keyof typeof spacing;
