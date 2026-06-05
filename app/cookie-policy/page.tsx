import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy — Vault Jackpot Zone',
  description: 'What cookies and storage Vault Jackpot Zone uses, and how to control them.',
};

export default function CookiePolicy() {
  return (
    <>
      <main className="max-w-3xl mx-auto px-5 pt-16 pb-20">
        <a href="/" className="text-vault-gold text-sm mb-6 inline-block">← Back to the vault</a>
        <h1 className="font-display text-4xl font-bold mb-2">Cookie Policy</h1>
        <p className="text-vault-mute text-sm mb-10">Last updated: 1 May 2026</p>

        <div className="space-y-6 text-vault-text leading-relaxed">
          <p>
            This page sets out the cookies and equivalent client-side storage used on
            vaultjackpotzone.com. It should be read alongside our <a className="text-vault-gold underline" href="/privacy-policy">Privacy Policy</a>.
            We have written it in plain English so you can make an informed choice; if anything is
            unclear, drop a line to contact@vaultjackpotzone.com.
          </p>

          <h2 className="font-display text-2xl text-vault-gold pt-4">A short note on terminology</h2>
          <p>
            "Cookie" is the catch-all phrase used in UK law (specifically the Privacy and Electronic
            Communications Regulations 2003, or PECR) for any technology that stores or accesses
            information on a visitor’s device. That includes traditional HTTP cookies, localStorage,
            sessionStorage and pixels. This policy covers each technique even when no actual cookie
            file is set.
          </p>

          <h2 className="font-display text-2xl text-vault-gold pt-4">Strictly necessary storage</h2>
          <p>
            We set one first-party flag in your browser’s localStorage called
            <code className="bg-vault-card px-1.5 py-0.5 rounded text-vault-gold mx-1">vault_cookie_ack_v1</code>
            once you dismiss the cookie banner. Its only purpose is to stop the banner reappearing on
            every page view. It contains a single character ("1") and no personal data. Because it is
            strictly necessary for a feature you explicitly requested (dismissing the banner) we rely
            on the PECR strictly-necessary exemption rather than consent.
          </p>

          <h2 className="font-display text-2xl text-vault-gold pt-4">Analytics &amp; measurement</h2>
          <p>
            We use the Meta (Facebook) Pixel to measure aggregate page-view traffic and understand
            which content resonates with visitors. The pixel fires a single PageView event on each
            page load. We do not build remarketing audiences, serve retargeted ads, or share data with
            third parties for their own advertising purposes. No Google Analytics, TikTok Pixel, Hotjar,
            Clarity, or Segment trackers are loaded. We do not load third-party fonts from a CDN —
            fonts are bundled with the page.
          </p>

          <h2 className="font-display text-2xl text-vault-gold pt-4">Third-party redirects</h2>
          <p>
            When you click an "Open Vault" link the destination operator may set their own cookies
            once you land on their site — that is governed by their cookie policy, not ours. Our
            redirect itself sets no cookie on your device. The click ID embedded in the redirect URL
            is a random opaque string used solely to credit the referral.
          </p>

          <h2 className="font-display text-2xl text-vault-gold pt-4">How to clear our storage</h2>
          <p>
            You can clear the cookie-acknowledgement flag at any time through your browser’s site
            settings — under Chrome and Edge: Settings → Privacy and security → Site settings →
            View permissions and data stored across sites → vaultjackpotzone.com → Clear data.
            Equivalent options are available in Firefox, Safari and other major browsers. Clearing it
            simply makes the banner appear again on your next visit.
          </p>

          <h2 className="font-display text-2xl text-vault-gold pt-4">Changes</h2>
          <p>
            If we ever introduce a new storage technology we will update this page and the cookie
            banner before the new technology goes live, so you have an opportunity to review and, if
            applicable, decline.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
