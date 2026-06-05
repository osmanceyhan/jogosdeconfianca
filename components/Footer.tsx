export default function Footer() {
  return (
    <footer className="border-t border-vault-border bg-[#070a14]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="font-display text-vault-gold tracking-[0.22em] text-sm font-semibold mb-4">
              VAULT JACKPOT ZONE
            </div>
            <p className="text-vault-mute text-sm leading-relaxed mb-4">
              Vault Jackpot Zone is an editorial comparison publisher — we are not an operator and do not
              hold gambling licences. Each listed casino is independently responsible for its own regulatory
              compliance and player safeguards.
            </p>
          </div>

          <div>
            <h4 className="text-vault-text font-semibold text-[11px] mb-4 uppercase tracking-[0.22em]">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-vault-mute">
              <li><a href="/" className="hover:text-vault-gold transition">Home</a></li>
              <li><a href="#offers" className="hover:text-vault-gold transition">Offers</a></li>
              <li><a href="#faq" className="hover:text-vault-gold transition">FAQ</a></li>
              <li><a href="/responsible-gambling" className="hover:text-vault-gold transition">Responsible Gaming</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-vault-text font-semibold text-[11px] mb-4 uppercase tracking-[0.22em]">Legal</h4>
            <ul className="space-y-2.5 text-sm text-vault-mute">
              <li><a href="/privacy-policy" className="hover:text-vault-gold transition">Privacy Policy</a></li>
              <li><a href="/cookie-policy" className="hover:text-vault-gold transition">Cookie Policy</a></li>
              <li><a href="/terms-and-conditions" className="hover:text-vault-gold transition">Terms &amp; Conditions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-vault-text font-semibold text-[11px] mb-4 uppercase tracking-[0.22em]">Support</h4>
            <ul className="space-y-2.5 text-sm text-vault-mute">
              <li>
                <a href="mailto:contact@vaultjackpotzone.com" className="hover:text-vault-gold transition">
                  contact@vaultjackpotzone.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Responsible Gambling Resources */}
        <div className="border-t border-vault-border pt-8 mb-8">
          <h4 className="text-vault-text font-semibold text-[11px] mb-5 uppercase tracking-[0.22em]">Responsible Gambling Resources</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <a href="https://www.gamcare.org.uk/" target="_blank" rel="noopener nofollow" className="flex items-center justify-center bg-white/5 border border-vault-border rounded-lg p-3 hover:border-vault-gold/40 transition">
              <img src="/logos/safety/gamcare.svg" alt="GamCare" className="h-8 w-auto object-contain" loading="lazy" />
            </a>
            <a href="https://www.gamblingtherapy.org/" target="_blank" rel="noopener nofollow" className="flex items-center justify-center bg-white/5 border border-vault-border rounded-lg p-3 hover:border-vault-gold/40 transition">
              <img src="/logos/safety/gamblingtherapy.svg" alt="Gambling Therapy" className="h-8 w-auto object-contain" loading="lazy" />
            </a>
            <a href="https://www.gamstop.co.uk/" target="_blank" rel="noopener nofollow" className="flex items-center justify-center bg-white/5 border border-vault-border rounded-lg p-3 hover:border-vault-gold/40 transition">
              <img src="/logos/safety/gamstop.svg" alt="GamStop" className="h-8 w-auto object-contain" loading="lazy" />
            </a>
            <a href="https://www.begambleaware.org/" target="_blank" rel="noopener nofollow" className="flex items-center justify-center bg-white/5 border border-vault-border rounded-lg p-3 hover:border-vault-gold/40 transition">
              <img src="/logos/safety/gambleaware.svg" alt="BeGambleAware" className="h-8 w-auto object-contain" loading="lazy" />
            </a>
          </div>
          <div className="text-vault-mute text-xs space-y-1.5">
            <p><strong className="text-vault-text">GamCare:</strong> 0808 8020 133 (free, 24/7)</p>
            <p><strong className="text-vault-text">BeGambleAware:</strong> www.begambleaware.org</p>
            <p><strong className="text-vault-text">GamStop:</strong> www.gamstop.co.uk</p>
            <p><strong className="text-vault-text">National Gambling Helpline:</strong> 0808 8020 133</p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-vault-border pt-8 mb-8">
          <div className="text-vault-mute text-xs leading-relaxed space-y-2.5">
            <p>
              Vault Jackpot Zone is intended for adults aged 18 or over — or the legal gambling age applicable
              in your jurisdiction. Treat gambling as entertainment, not as a source of income. Only stake what
              you can comfortably afford to lose.
            </p>
            <p>
              Laws governing online gambling differ by region. Please confirm that remote casino gaming is
              permitted where you reside before registering with any operator listed on this site.
            </p>
            <p>
              Bonuses, free spins, and promotional offers carry operator-specific conditions — including
              wagering requirements, minimum deposits, game eligibility, and expiry periods. Always review
              the full terms on the operator&apos;s page before claiming.
            </p>
            <p>
              While we update our listings regularly, offers, limits, and creative assets may change without
              prior notice. We accept no liability for discrepancies between our listings and live operator pages.
            </p>
            <p>
              Some links on this site are affiliate links. If you register or deposit through them, we may
              receive a commission at no extra cost to you. This commercial arrangement does not influence
              our editorial rankings or recommendations.
            </p>
          </div>
        </div>

        <div className="gold-rule opacity-40 mb-6" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-vault-mute">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-2 px-2.5 py-1 border border-vault-gold/50 text-vault-gold rounded-full font-semibold">
              <svg width="12" height="12" viewBox="0 0 12 12"><circle cx="6" cy="6" r="5.4" fill="none" stroke="currentColor" strokeWidth="1.2"/><text x="6" y="8.5" textAnchor="middle" fontSize="6" fill="currentColor" fontWeight="700">18+</text></svg>
              18+ Only
            </span>
            <span className="text-vault-gold font-medium">BeGambleAware™</span>
            <span className="italic">When the fun stops, stop.</span>
          </div>
          <p>© {new Date().getFullYear()} Vault Jackpot Zone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
