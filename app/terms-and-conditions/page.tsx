import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions — Vault Jackpot Zone',
  description: 'Terms of use for the vaultjackpotzone.com editorial bonus comparison site.',
};

export default function Terms() {
  return (
    <>
      <main className="max-w-3xl mx-auto px-5 pt-16 pb-20">
        <a href="/" className="text-vault-gold text-sm mb-6 inline-block">← Back to the vault</a>
        <h1 className="font-display text-4xl font-bold mb-2">Terms &amp; Conditions</h1>
        <p className="text-vault-mute text-sm mb-10">Last updated: 1 May 2026</p>

        <div className="space-y-6 text-vault-text leading-relaxed">
          <h2 className="font-display text-2xl text-vault-gold">1. Who we are</h2>
          <p>
            vaultjackpotzone.com is operated by Vault Jackpot Zone Editorial Ltd, a private company
            limited by shares registered in England and Wales (company number 14998822), with its
            registered office at 22 Carthusian Street, London EC1M 6EB. Throughout these terms "we",
            "us" and "our" refer to that company; "you" refers to any person accessing the site.
          </p>

          <h2 className="font-display text-2xl text-vault-gold pt-4">2. What we are and what we are not</h2>
          <p>
            We are an independent editorial bonus comparison site. We are not a gambling operator. We
            do not accept stakes, hold player funds, run games or pay out winnings. Anywhere you see a
            "Open Vault" link on this site, you are being directed to a third-party operator who is
            independently regulated. Your contractual relationship for any gambling activity is with
            that operator, not with us.
          </p>

          <h2 className="font-display text-2xl text-vault-gold pt-4">3. Eligibility</h2>
          <p>
            You may only use this site if you are eighteen years of age or older. By browsing the
            site, you confirm that you are. We may withdraw access from any visitor we reasonably
            believe to be under eighteen or to be accessing the site from a jurisdiction where the
            promoted offers are unlawful. If you are reading from outside Great Britain the offers
            shown may not be available to you.
          </p>

          <h2 className="font-display text-2xl text-vault-gold pt-4">4. Editorial independence and affiliate disclosure</h2>
          <p>
            We may receive a commission from operators when you sign up via our links. This commission
            does not change the bonus value or the terms you see on the operator’s landing page.
            Editorial rankings are decided by our internal vault score; commission rates do not move
            an operator up or down the list. Where an operator changes its public offer between our
            weekly refreshes the figures displayed may differ from the live offer — always check the
            operator’s own promotion page before depositing.
          </p>

          <h2 className="font-display text-2xl text-vault-gold pt-4">5. Accuracy</h2>
          <p>
            We take reasonable care to ensure the information on this site is accurate at the time of
            publication. Bonus headlines, wagering rules, minimum deposits, payment methods and
            licence statuses are checked weekly. Despite this we cannot guarantee that every figure on
            the site is correct at every moment you read it. To the maximum extent permitted by
            English law, we exclude liability for any loss caused by reliance on information that has
            since become out of date.
          </p>

          <h2 className="font-display text-2xl text-vault-gold pt-4">6. Acceptable use</h2>
          <p>
            You agree not to use the site in any way that is unlawful, that infringes the rights of
            others or that disrupts the site’s operation. Automated scraping of the site for commercial
            republication is prohibited without our written consent. We retain all copyright and
            database rights in the editorial content and the underlying ranking methodology.
          </p>

          <h2 className="font-display text-2xl text-vault-gold pt-4">7. Third-party content</h2>
          <p>
            Where we link to operators or to support services such as GAMSTOP, GamCare or
            BeGambleAware, we do not control the content of those external sites and accept no
            liability for them. Their inclusion is not an endorsement of any specific product they
            promote.
          </p>

          <h2 className="font-display text-2xl text-vault-gold pt-4">8. Changes</h2>
          <p>
            We may amend these terms from time to time. The "last updated" date at the top of this
            page indicates when the current version came into effect. Continued use of the site after
            an amendment constitutes acceptance of the revised terms.
          </p>

          <h2 className="font-display text-2xl text-vault-gold pt-4">9. Governing law</h2>
          <p>
            These terms are governed by the laws of England and Wales. The courts of England and Wales
            have exclusive jurisdiction over any dispute arising in connection with them, save that
            consumers resident elsewhere in the United Kingdom retain the benefit of any mandatory
            local consumer-protection law.
          </p>

          <h2 className="font-display text-2xl text-vault-gold pt-4">10. Contact</h2>
          <p>
            For any question about these terms please write to contact@vaultjackpotzone.com or by
            post to the registered address shown above.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
