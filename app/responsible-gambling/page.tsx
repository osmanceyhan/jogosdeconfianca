import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Responsible Gambling — Vault Jackpot Zone',
  description: 'Tools, signs and free UK support if gambling stops being fun.',
};

export default function ResponsibleGambling() {
  return (
    <>
      <main className="max-w-3xl mx-auto px-5 pt-16 pb-20">
        <a href="/" className="text-vault-gold text-sm mb-6 inline-block">← Back to the vault</a>
        <h1 className="font-display text-4xl font-bold mb-2">Responsible Gambling</h1>
        <p className="text-vault-mute text-sm mb-10">Last reviewed: 1 May 2026</p>

        <div className="space-y-6 text-vault-text leading-relaxed">
          <p className="text-lg text-vault-gold italic">When the fun stops, stop.</p>

          <p>
            Vault Jackpot Zone exists to make UK casino bonus offers easier to compare. We list real
            money gambling products, and real money gambling can become a problem. This page is here
            to set out the warning signs, the free tools available to UK residents, and the people you
            can talk to in confidence — at any hour, from anywhere in the country.
          </p>

          <h2 className="font-display text-2xl text-vault-gold pt-4">Setting limits before you start</h2>
          <p>
            Every UKGC-licensed operator listed on this site is legally required to provide
            deposit, loss, wager and session limits. Set them before you place your first stake of
            the day, not afterwards. Treat the limit as a hard rule and walk away if you hit it.
            Reality-check pop-ups, available in-account on every UK operator, are not annoyances —
            they are a chance to look at how much time and money has actually passed.
          </p>

          <h2 className="font-display text-2xl text-vault-gold pt-4">Warning signs</h2>
          <ul className="list-disc pl-6 space-y-2 text-vault-mute">
            <li>Spending more time or money than you planned, repeatedly.</li>
            <li>Chasing losses with bigger stakes or new deposits.</li>
            <li>Borrowing money, selling possessions or skipping bills to gamble.</li>
            <li>Lying to friends, family or partners about how much you play.</li>
            <li>Feeling restless, irritable or low when you cannot gamble.</li>
            <li>Gambling to escape stress, boredom, grief or low mood rather than for entertainment.</li>
          </ul>
          <p>
            If two or more of those resonate, please pause and reach out to one of the services below.
            None of them are gambling operators and none receive any commission from us.
          </p>

          <h2 className="font-display text-2xl text-vault-gold pt-4">Free UK support</h2>
          <div className="space-y-3 text-vault-mute">
            <p>
              <strong className="text-vault-text">GAMSTOP</strong> — free national self-exclusion
              scheme. Register once and every UKGC-licensed online operator must block you for the
              term you choose (six months, one year or five years). gamstop.co.uk
            </p>
            <p>
              <strong className="text-vault-text">GamCare</strong> — free, confidential helpline
              0808 8020 133, open 24/7, plus NetLine chat and face-to-face counselling across the UK.
              gamcare.org.uk
            </p>
            <p>
              <strong className="text-vault-text">BeGambleAware</strong> — free, independent
              treatment via the National Gambling Helpline 0808 8020 133. begambleaware.org
            </p>
            <p>
              <strong className="text-vault-text">Gordon Moody</strong> — residential treatment
              programmes for severe gambling harm. gordonmoody.org.uk
            </p>
            <p>
              <strong className="text-vault-text">Citizens Advice</strong> — for the money side: debt
              advice, budgeting, dealing with creditors. citizensadvice.org.uk
            </p>
          </div>

          <h2 className="font-display text-2xl text-vault-gold pt-4">Blocking software</h2>
          <p>
            If you would like to remove the temptation at device level, Gamban and BetBlocker are two
            well-known providers of blocking software that covers desktop and mobile. Both are free or
            low cost and complement, rather than replace, GAMSTOP.
          </p>

          <h2 className="font-display text-2xl text-vault-gold pt-4">For parents and guardians</h2>
          <p>
            Real-money gambling in Great Britain is restricted to over-18s. If a young person in your
            household may have accessed a gambling site, the UKGC publishes a free guide for parents
            at gamblingcommission.gov.uk, and software such as Net Nanny or Microsoft Family Safety
            can prevent access from shared devices.
          </p>

          <p className="italic text-vault-mute">
            We will always carry these links — they do not move and they do not become paid placements.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
