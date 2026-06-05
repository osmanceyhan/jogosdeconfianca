import type { Metadata } from 'next';
import { Cinzel, Inter } from 'next/font/google';
import './globals.css';
import CookieBanner from '@/components/CookieBanner';

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-cinzel',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vault Jackpot Zone — Hand-Picked UK Casino Bonus Drops',
  description:
    'Vault Jackpot Zone is an editorial bonus-vault comparison site listing hand-picked UK casino welcome offers, refreshed weekly. 18+, please play responsibly.',
  metadataBase: new URL('https://vaultjackpotzone.com'),
  alternates: { canonical: 'https://vaultjackpotzone.com/' },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Vault Jackpot Zone Editorial Ltd',
  url: 'https://vaultjackpotzone.com',
  logo: 'https://vaultjackpotzone.com/logo.svg',
  email: 'contact@vaultjackpotzone.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '22 Carthusian Street',
    addressLocality: 'London',
    postalCode: 'EC1M 6EB',
    addressCountry: 'GB',
  },
  sameAs: [
    'https://www.gamblingcommission.gov.uk/',
    'https://www.gamcare.org.uk/',
    'https://www.begambleaware.org/',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${cinzel.variable} ${inter.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0e1a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {/* Facebook Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '718294653201847');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=718294653201847&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className="font-body bg-vault-bg text-vault-text antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
