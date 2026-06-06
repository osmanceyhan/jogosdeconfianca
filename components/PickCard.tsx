type Offer = {
  slug: string; display_name: string; brand_color: string; rating: number;
  bonus_headline: string; feature_bullets: string[]; payment_methods: string[];
  min_deposit_eur: number; min_wager_terms: string; tracker_url: string;
  logo_url?: string; logo_bg?: string;
};

const LOGO_MAP: Record<string, string> = {
  'bwin': '/logos/operators/bwin.jpg',
  'betclic': '/logos/operators/betclic.png',
  'solverde': '/logos/operators/solverde.png',
  'casino-portugal': '/logos/operators/casino-portugal.png',
};

export default function PickCard({ offer }: { offer: Offer }) {
  const logoSrc = offer.logo_url || LOGO_MAP[offer.slug] || '';

  return (
    <article className="jc-pick">
      <div className="jc-pick-logo">
        {logoSrc ? <img src={logoSrc} alt={offer.display_name} loading="lazy" />
        : <span className="jc-pick-logo-text">{offer.display_name}</span>}
      </div>
      <div className="jc-pick-row">
        <h3 className="jc-pick-name">{offer.display_name}</h3>
        <span className="jc-pick-tag">★ {offer.rating.toFixed(1)}</span>
      </div>
      <p className="jc-pick-bonus">{offer.bonus_headline}</p>
      <ul className="jc-pick-list">
        {offer.feature_bullets.slice(0, 3).map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      <div className="jc-pick-pays">
        {offer.payment_methods.map(p => <span key={p}>{p}</span>)}
      </div>
      <p className="jc-pick-meta">Mín. {offer.min_deposit_eur}€ · {offer.min_wager_terms}</p>
      <a className="jc-pick-cta" href={offer.tracker_url} target="_blank" rel="nofollow sponsored noopener">Obter Bónus</a>
      <p className="jc-pick-tc">18+ · Aplicam-se T&amp;C</p>
    </article>
  );
}
