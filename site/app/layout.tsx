import type { Metadata } from 'next';
import { Cormorant_Garamond, Hanken_Grotesk } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/layout/Footer';

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const hanken = Hanken_Grotesk({
  variable: '--font-hanken',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'La Clé — Institut de compréhension des mécanismes humains',
    template: '%s — La Clé',
  },
  description:
    'Institut de formation dédié à la compréhension des mécanismes humains. Un cadre structuré, rigoureux et profondément humain.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${cormorant.variable} ${hanken.variable} antialiased`}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
