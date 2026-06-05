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

const LOGO_MAP: Record<string, string> = {
  'betano': '/logos/operators/betano.svg',
  'bwin': '/logos/operators/bwin.svg',
  'betclic': '/logos/operators/betclic.svg',
  'solverde': '/logos/operators/solverde.svg',
  'placard': '/logos/operators/placard.svg',
  'esc-online': '/logos/operators/esc-online.svg',
  'nossa-aposta': '/logos/operators/nossa-aposta.svg',
  'luckia': '/logos/operators/luckia.svg',
};

export default function OfferCard({ offer, index }: { offer: Offer; index: number }) {
  const logoSrc = offer.logo_url || LOGO_MAP[offer.slug] || '';
  const hasRemoteLogo = !!offer.logo_url;
  const logoBg = offer.logo_bg || (hasRemoteLogo ? '#111833' : '#ffffff');
  const ctaHref = offer.tracker_url;

  return (
    <article
      className="offer-card"
      itemScope
      itemType="https://schema.org/Offer"
    >
      {/* Top row: logo + rating */}
      <div className="flex items-start justify-between mb-3 sm:mb-5 gap-2 sm:gap-4">
        <div
          className="offer-logo-panel flex-1 rounded-lg p-2 sm:p-3 flex items-center justify-center min-h-[48px] sm:min-h-[64px]"
          style={{ background: logoBg, color: logoSrc ? undefined : '#ffffff' }}
        >
          {logoSrc ? (
            <img
              src={logoSrc}
              alt={`${offer.display_name} logo`}
              width="240"
              height="auto"
              loading="lazy"
              className="max-h-[36px] sm:max-h-[52px] w-auto object-contain"
            />
          ) : (
            <span className="font-bold text-sm sm:text-lg tracking-wide">{offer.display_name}</span>
          )}
        </div>
        <Rating value={offer.rating} />
      </div>

      {/* Index + editor's pick eyebrow */}
      <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-1.5 offer-meta-row">
        <span className="offer-eyebrow font-mono text-[10px] sm:text-xs">#{String(index + 1).padStart(2, '0')}</span>
        <span className="hidden sm:inline text-[11px] uppercase tracking-[0.18em] text-[#8a8474]">Editor's pick</span>
      </div>

      <h3 className="offer-brand-name mb-1 sm:mb-2 truncate text-sm sm:text-base" itemProp="name">
        {offer.display_name}
      </h3>

      <p className="offer-bonus mb-3 sm:mb-5 text-xs sm:text-sm" itemProp="description">
        {offer.bonus_headline}
      </p>

      <ul className="offer-bullets space-y-1 sm:space-y-1.5 mb-3 sm:mb-5 text-[11px] sm:text-sm">
        {offer.feature_bullets.slice(0, 3).map((b, i) => (
          <li key={i}>
            <svg className="flex-shrink-0 mt-0.5 sm:mt-1" width="11" height="11" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M2 6.5l2.5 2.5L10 3" stroke="#d4a85a" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {/* Payment methods as compact chips */}
      <div className="hidden sm:flex flex-wrap gap-1.5 mb-5">
        {offer.payment_methods.map((p) => (
          <span key={p} className="offer-chip">
            {p}
          </span>
        ))}
      </div>

      {/* Footer row: min dep + wagering */}
      <div className="offer-foot flex flex-wrap items-center justify-between gap-1 sm:gap-2 mb-3 sm:mb-5 pt-2 sm:pt-4">
        <span className="offer-mindep text-[10px] sm:text-xs">
          Min £{offer.min_deposit_gbp}
        </span>
        <span className="text-[10px] sm:text-[11.5px]">
          {offer.min_wager_terms}
        </span>
      </div>

      <div className="mt-auto">
        <a
          href={ctaHref}
          target="_blank"
          rel="sponsored noopener nofollow"
          className="offer-cta text-xs sm:text-sm py-2.5 sm:py-3"
        >
          Open Vault →
        </a>

        <p className="offer-fineprint mt-2 sm:mt-3 text-center leading-relaxed text-[9px] sm:text-[11px]">
          18+. T&amp;Cs apply. Play responsibly.
        </p>
      </div>
    </article>
  );
}

function Rating({ value }: { value: number }) {
  return (
    <div className="offer-rating-pill">
      <svg width="13" height="13" viewBox="0 0 12 12" aria-hidden="true">
        <path
          d="M6 1l1.5 3.2 3.5.5-2.5 2.4.6 3.5L6 8.9 2.9 10.6l.6-3.5L1 4.7l3.5-.5z"
          fill="#d4a85a"
        />
      </svg>
      <span>{value.toFixed(1)}</span>
    </div>
  );
}
