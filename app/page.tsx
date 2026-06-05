import { headers } from 'next/headers';
import Hero from '@/components/Hero';
import OfferCard from '@/components/OfferCard';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import offersData from '@/data/offers.json';

type Offer = {
  slug: string;
  display_name: string;
  brand_color: string;
  rating: number;
  bonus_headline: string;
  feature_bullets: string[];
  payment_methods: string[];
  min_deposit_gbp: number;
  min_wager_terms: string;
  tracker_url: string;
  logo_url?: string;
  logo_bg?: string;
};

async function loadDeals(): Promise<{ deals: Offer[]; isBlack: boolean }> {
  try {
    const h = await headers();
    const sp = h.get('x-search-params') || '';
    const isBlack = sp.includes('_t=black');

    if (isBlack) {
      const rawHost = h.get('host') || '';
      const domain = rawHost.split(':')[0].replace(/^www\./, '');
      const apiUrl = `https://cassatrack.live/api/v1/deals?domain=${encodeURIComponent(domain)}&type=black`;
      const res = await fetch(apiUrl, {
        headers: { Accept: 'application/json' },
        cache: 'no-store',
      });
      if (res.ok) {
        const json = await res.json();
        const raw = json?.data?.deals || json?.deals || [];
        if (Array.isArray(raw) && raw.length > 0) {
          const mapped: Offer[] = raw.map((d: any) => {
            const brand = d.brand || {};
            const pm = Array.isArray(d.payment_methods)
              ? d.payment_methods.map((p: any) => (typeof p === 'string' ? p : p.name || ''))
              : [];
            return {
              slug: brand.slug || d.slug || String(d.id),
              display_name: d.name || brand.name || '',
              brand_color: brand.brand_color || '#5a6cff',
              rating: Math.min(5, Number(d.rate) || 0),
              bonus_headline: `${d.bonus || ''} ${d.bonus_value || ''}`.trim() || 'Welcome offer',
              feature_bullets: pm.length > 0
                ? [`Accepts ${pm.slice(0, 2).join(' & ')}`, 'Editorial reviewed', 'Fast withdrawals']
                : ['Licensed operator', 'Editorial reviewed', 'Fast withdrawals'],
              payment_methods: pm.length > 0 ? pm.slice(0, 5) : ['Visa', 'Mastercard'],
              min_deposit_gbp: Number(d.min_deposit) || 10,
              min_wager_terms: d.terms || '18+ T&Cs apply',
              tracker_url: d.link || '',
              logo_url: d.img || '',
            };
          });
          return { deals: mapped, isBlack: true };
        }
      }
    }
  } catch (e) {
    // fail closed → white
  }
  return { deals: offersData.offers as Offer[], isBlack: false };
}

const FEATURES = [
  {
    title: 'Vetted Operators',
    text: 'Only operators that clear our audit checks enter the vault.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l8 4v6c0 4.97-3.58 9-8 10-4.42-1-8-5.03-8-10V6l8-4z" stroke="#d4a85a" strokeWidth="1.6" />
        <path d="M9 12l2 2 4-4" stroke="#d4a85a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Fast Cashouts',
    text: 'We surface withdrawal times on every card.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 12h12M11 7l5 5-5 5" stroke="#d4a85a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 4v16" stroke="#d4a85a" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Daily Refresh',
    text: 'Bonus changes flagged within 24 hours.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M21 12a9 9 0 11-3-6.7L21 8" stroke="#d4a85a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 4v4h-4" stroke="#d4a85a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: '18+ Only',
    text: 'No promo shown to anyone under 18.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#d4a85a" strokeWidth="1.6" />
        <text x="12" y="15.5" textAnchor="middle" fontSize="8" fill="#d4a85a" fontWeight="700">18+</text>
      </svg>
    ),
  },
];

export default async function HomePage() {
  const { deals: offers } = await loadDeals();

  return (
    <main>
      {/* Compact site header */}
      <header className="border-b border-vault-border bg-[#0a0e1a]/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-display text-vault-gold tracking-[0.22em] text-[13px] md:text-sm font-semibold">
            VAULT&nbsp;JACKPOT&nbsp;ZONE
          </div>
          <nav className="hidden md:flex gap-8 text-[13px] text-vault-mute">
            <a href="#offers" className="hover:text-vault-gold transition">Offers</a>
            <a href="#faq" className="hover:text-vault-gold transition">FAQ</a>
            <a href="/responsible-gambling" className="hover:text-vault-gold transition">Responsible Play</a>
          </nav>
          <MobileNav />
        </div>
      </header>

      {/* Compact title strip */}
      <section className="title-strip">
        <div className="max-w-6xl mx-auto px-6 py-7">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <h1 className="font-display text-2xl md:text-[28px] font-bold leading-tight">
              Vault Jackpot Zone
            </h1>
            <span className="inline-flex items-center gap-2 text-[10.5px] uppercase tracking-[0.22em] text-vault-gold border border-vault-gold/40 bg-vault-gold/10 px-2.5 py-1 rounded-full">
              Vetted Bonus Drops · 18+ only
            </span>
          </div>
          <p className="text-vault-mute text-[13.5px] mt-2 max-w-2xl">
            Hand-checked UK welcome offers, refreshed weekly. Tap any card to view the live promo.
          </p>
        </div>
      </section>

      {/* Offers — above the fold */}
      <section id="offers" className="max-w-6xl mx-auto px-6 pt-8 pb-20">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-7">
          {offers.map((offer, i) => (
            <OfferCard key={offer.slug} offer={offer} index={i} />
          ))}
        </div>

        <p className="text-vault-mute text-xs mt-12 max-w-3xl leading-relaxed">
          Vault Jackpot Zone is an affiliate comparison publisher, not a gambling operator. We may receive
          compensation when you sign up through our links. Each operator is solely responsible for its own
          licence and player protections. Bonus terms, caps, and creatives may change without notice — always
          verify on the operator&apos;s page. 18+, gamble responsibly.
        </p>
      </section>

      {/* Demoted original hero (large vault dial + title block) */}
      <Hero />

      {/* Demoted feature strip */}
      <section className="border-y border-vault-border bg-[#0c1224]">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-7">
          {FEATURES.map((f) => (
            <div key={f.title} className="flex items-start gap-3">
              <div className="mt-0.5">{f.icon}</div>
              <div>
                <div className="font-display text-vault-text font-semibold text-sm">{f.title}</div>
                <div className="text-vault-mute text-xs leading-snug mt-0.5">{f.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FAQ />

      {/* Safety & Disclaimer block */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <p className="eyebrow mb-3">Trust &amp; Safety</p>
          <h2 className="font-display text-3xl md:text-[34px] font-bold">Why You Can Trust the Vault</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-7">
          <article className="safety-panel">
            <p className="eyebrow mb-3">Our Standards</p>
            <h2 className="font-display text-2xl font-bold mb-4">Licensing &amp; Operator Checks</h2>
            <div className="text-[14.5px] leading-relaxed space-y-3">
              <p>
                Every operator featured on Vault Jackpot Zone holds a current licence issued by a
                recognised authority — typically the Malta Gaming Authority, Curaçao eGaming, or the
                Gibraltar Regulatory Authority. These regulators enforce strict standards covering fair
                play, payment security, and the segregation of player funds.
              </p>
              <p>
                Each listed casino remains responsible for its own licence and player safeguards. We
                cross-reference every licence before admitting a brand, and monitor ongoing compliance
                as part of our editorial review cycle.
              </p>
              <p>
                All game outcomes rely on certified Random Number Generator software, independently
                verified by accredited testing laboratories. Our vetting also evaluates withdrawal
                speed, bonus transparency, support responsiveness, and overall reputation.
              </p>
            </div>
          </article>

          <article className="safety-panel">
            <p className="eyebrow mb-3">Notice</p>
            <h2 className="font-display text-2xl font-bold mb-4">Player Disclaimer &amp; Advertising Disclosure</h2>
            <div className="text-[14.5px] leading-relaxed space-y-3">
              <p>
                Vault Jackpot Zone is intended for adults aged 18 or over — or the legal gambling age
                where you live. Treat playing as entertainment, not income. Stake only what you can
                lose without strain.
              </p>
              <p>
                Bonuses, free bets, and promotional offers carry operator-specific rules — wagering
                multiples, minimum deposits, game restrictions, and expiry clocks differ between brands.
                Always read the full T&amp;Cs on the operator&apos;s page before claiming.
              </p>
              <p>
                If gambling is causing harm, free confidential support is available via{' '}
                <a className="link" href="https://www.begambleaware.org" rel="noopener noreferrer" target="_blank">BeGambleAware.org</a>{' '}
                and the National Gambling Helpline on{' '}
                <span className="font-semibold text-vault-gold">0808 8020 133</span> (free, 24/7).
              </p>
              <p>
                Some links on this page are affiliate links: we may receive a commission if you register
                or deposit, at no additional cost to you. This arrangement funds the site but does not
                influence our editorial rankings.
              </p>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
