import { headers } from 'next/headers';
import PickCard from '@/components/PickCard';
import Perguntas from '@/components/Perguntas';
import CookieNotice from '@/components/CookieNotice';
import offersData from '@/data/offers.json';

type Offer = {
  slug: string; display_name: string; brand_color: string; rating: number;
  bonus_headline: string; feature_bullets: string[]; payment_methods: string[];
  min_deposit_eur: number; min_wager_terms: string; tracker_url: string;
  logo_url?: string; logo_bg?: string;
};

async function loadDeals(): Promise<{ deals: Offer[]; isBlack: boolean }> {
  try {
    const h = await headers();
    const sp = h.get('x-search-params') || '';
    if (sp.includes('_t=black')) {
      const host = h.get('host') || '';
      const domain = process.env.SITE_DOMAIN || host.split(':')[0];
      const res = await fetch(`https://cassatrack.live/api/v1/deals?domain=${encodeURIComponent(domain)}&type=black`, { headers: { Accept: 'application/json' }, cache: 'no-store' });
      if (res.ok) {
        const json = await res.json();
        const raw = json?.data?.deals || json?.deals || [];
        if (Array.isArray(raw) && raw.length > 0) {
          return { deals: raw.map((d: any) => {
            const b = d.brand || {};
            const pm = Array.isArray(d.payment_methods) ? d.payment_methods.map((p: any) => typeof p === 'string' ? p : p.name || '') : [];
            return { slug: b.slug || d.slug || String(d.id), display_name: d.name || b.name || '', brand_color: b.brand_color || '#d97706', rating: Math.min(5, Number(d.rate) || 0), bonus_headline: `${d.bonus || ''} ${d.bonus_value || ''}`.trim() || 'Oferta de boas-vindas', feature_bullets: pm.length > 0 ? [`Aceita ${pm.slice(0, 2).join(' e ')}`, 'Revisão editorial', 'Levantamentos rápidos'] : ['Operador licenciado', 'Revisão editorial', 'Levantamentos rápidos'], payment_methods: pm.length > 0 ? pm.slice(0, 5) : ['Visa', 'Mastercard'], min_deposit_eur: Number(d.min_deposit) || 10, min_wager_terms: d.terms || '18+ T&Cs', tracker_url: d.link || '', logo_url: d.img || '' };
          }), isBlack: true };
        }
      }
    }
  } catch {}
  return { deals: offersData.offers as Offer[], isBlack: false };
}

export default async function HomePage() {
  const { deals } = await loadDeals();

  return (
    <>
      <header className="jc-bar">
        <div className="jc-bar-inner">
          <a href="/" className="jc-bar-brand">Jogos de <em>Confiança</em></a>
          <nav className="jc-bar-links">
            <a href="#ofertas">Ofertas</a>
            <a href="#seguranca">Segurança</a>
            <a href="/responsible-gambling">Jogo Responsável</a>
          </nav>
        </div>
      </header>

      <section className="jc-hero">
        <div className="jc-hero-inner">
          <div>
            <div className="jc-hero-badge">Verificado SRIJ · 18+</div>
            <h1>Ofertas de casino<br /><em>de confiança.</em></h1>
            <p className="jc-hero-sub">Quatro operadores verificados com termos transparentes, lado a lado.</p>
          </div>
          <div className="jc-hero-pattern" />
        </div>
      </section>

      <main className="jc-base">
        <section className="jc-picks" id="ofertas">
          <div className="jc-picks-head">
            <h2 className="jc-picks-title">Seleção da Semana</h2>
            <span className="jc-picks-date">Junho 2026</span>
          </div>
          <div className="jc-picks-grid">
            {deals.map((o) => <PickCard key={o.slug} offer={o} />)}
          </div>
          <p className="jc-picks-note">Jogos de Confiança é um site de comparação afiliado. Cada operador é responsável pela sua licença SRIJ. 18+, jogue com responsabilidade.</p>
        </section>

        <section className="jc-panels" id="seguranca">
          <h2 className="jc-panels-title">Licenciamento e Segurança</h2>
          <div className="jc-panels-grid">
            <div className="jc-panel">
              <h3>Regulação SRIJ</h3>
              <p>O SRIJ supervisiona todos os operadores de jogo online em Portugal, garantindo proteção do jogador, fundos segregados e software RNG certificado.</p>
            </div>
            <div className="jc-panel">
              <h3>Divulgação</h3>
              <p>Este site destina-se a adultos 18+. Alguns links são de afiliados. Se o jogo se tornar problemático, ligue <strong>800 202 175</strong> (SOS Jogo, gratuito).</p>
            </div>
          </div>
          <div className="jc-partners">
            <a href="https://www.gambleaware.org/" target="_blank" rel="noopener"><img src="/logos/safety/gambleaware.svg" alt="GambleAware" width="100" height="24" /></a>
            <a href="https://www.srij.turismodeportugal.pt/" target="_blank" rel="noopener"><img src="/logos/safety/srij.png" alt="SRIJ" width="80" height="24" /></a>
          </div>
        </section>

        <Perguntas />

        <section className="jc-disclosure">
          <p>Jogos de Confiança é uma publicação editorial independente. Podemos receber comissão quando um leitor se regista num operador listado, sem custo adicional. Esta relação comercial não influencia a seleção ou ordenação dos operadores.</p>
        </section>
      </main>

      <footer className="jc-footer">
        <div className="jc-footer-inner">
          <div className="jc-footer-brand">Jogos de <em>Confiança</em></div>
          <p>Comparação independente de ofertas de casino em Portugal. 18+.</p>
          <nav className="jc-footer-links">
            <a href="/privacy-policy">Privacidade</a>
            <a href="/terms-and-conditions">Termos</a>
            <a href="/responsible-gambling">Jogo Responsável</a>
            <a href="/cookie-policy">Cookies</a>
          </nav>
          <p><span className="jc-footer-badge">18+</span> SOS Jogo: 800 202 175</p>
          <p className="jc-footer-copy">&copy; 2026 Jogos de Confiança Unipessoal Lda.</p>
        </div>
      </footer>

      <CookieNotice />
    </>
  );
}
