import type { Metadata } from 'next';
import { Instrument_Sans, Rubik } from 'next/font/google';
import './globals.css';

const instrument = Instrument_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-instrument' });
const rubik = Rubik({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-rubik' });

export const metadata: Metadata = {
  metadataBase: new URL('https://jogosdeconfianca.live'),
  title: 'Jogos de Confiança — Ofertas de Casino Verificadas em Portugal',
  description: 'Ofertas de casino verificadas com licença SRIJ em Portugal. Comparação editorial independente para adultos 18+.',
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${instrument.variable} ${rubik.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'Organization',
          name: 'Jogos de Confiança Unipessoal Lda', url: 'https://jogosdeconfianca.live',
          email: 'geral@jogosdeconfianca.live',
          address: { '@type': 'PostalAddress', streetAddress: 'Praça do Comércio 10', addressLocality: 'Lisboa', postalCode: '1100-148', addressCountry: 'PT' },
        })}} />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
