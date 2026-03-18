/**
 * Institut La Clé — Design System
 * Color Tokens
 */

export const colors = {
  ivory: '#F7F5F0',
  ivoryWarm: '#EDE9E0',
  white: '#FEFDFB',

  noir: '#1A1A1A',
  graphite: '#4A4A4A',
  graphiteLight: '#7A7A7A',

  bronze: '#9B8A6E',
  bronzeHover: '#887758',
  bronzeSubtle: 'rgba(155, 138, 110, 0.08)',

  border: '#E0DCD4',
  borderLight: '#EDEBE6',
} as const;

export type ColorToken = keyof typeof colors;
