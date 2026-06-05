import VaultDial from './VaultDial';

export default function Hero() {
  return (
    <section className="relative vault-gradient overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-20 md:pb-24">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div className="relative">
            {/* 18+ corner ring badge */}
            <div className="absolute -top-2 right-0 md:right-auto md:-right-2 flex md:hidden">
              <Badge18 />
            </div>

            <div className="hidden md:block absolute -top-4 -right-4">
              <Badge18 />
            </div>

            <p className="text-vault-gold uppercase tracking-[0.3em] text-xs mb-4 font-medium">
              Editorial Bonus Vault · UK 2026
            </p>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.05] font-bold mb-5">
              Find Your <span className="text-vault-gold">Jackpot Vault</span>
            </h1>
            <p className="text-vault-mute text-lg md:text-xl max-w-xl mb-8">
              10 Hand-Picked Bonus Drops — Updated Weekly. Hand-checked welcome offers from operators we
              think are worth the click.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#offers" className="btn-primary">
                Open the Vault
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 8h8M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#faq" className="btn-secondary">
                How We Pick
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3 text-xs text-vault-mute">
              <span className="inline-block w-2 h-2 rounded-full bg-vault-gold animate-pulse" />
              Refreshed {formatToday()} · UKGC-licensed operators only
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[360px]">
            <div className="absolute inset-0 rounded-full blur-3xl bg-vault-gold/10" />
            <VaultDial className="relative w-full h-auto drop-shadow-[0_20px_40px_rgba(212,168,90,0.25)]" />
          </div>
        </div>
      </div>

      {/* gold rule */}
      <div className="gold-rule opacity-50" />
    </section>
  );
}

function Badge18() {
  return (
    <div className="relative" aria-label="18 plus only">
      <svg width="64" height="64" viewBox="0 0 64 64">
        <defs>
          <linearGradient id="badge-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f0cf85" />
            <stop offset="100%" stopColor="#a98443" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="29" fill="#0a0e1a" stroke="url(#badge-gold)" strokeWidth="2.5" />
        <circle cx="32" cy="32" r="24" fill="none" stroke="#d4a85a" strokeOpacity="0.35" strokeWidth="1" />
        <text x="32" y="38" textAnchor="middle" fontSize="18" fontWeight="700" fill="#d4a85a" fontFamily="serif">18+</text>
      </svg>
    </div>
  );
}

function formatToday() {
  // Static build date label
  return 'May 2026';
}
