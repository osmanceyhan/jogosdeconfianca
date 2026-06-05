import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Vault Jackpot Zone',
  description: 'How Vault Jackpot Zone Editorial Ltd handles personal data under UK GDPR.',
};

export default function PrivacyPolicy() {
  return (
    <>
      <main className="max-w-3xl mx-auto px-5 pt-16 pb-20">
        <a href="/" className="text-vault-gold text-sm mb-6 inline-block">← Back to the vault</a>
        <h1 className="font-display text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-vault-mute text-sm mb-10">Last updated: 1 May 2026</p>

        <div className="prose-vault space-y-6 text-vault-text leading-relaxed">
          <p>
            Vault Jackpot Zone Editorial Ltd ("we", "us", "our") is the data controller for personal
            information collected via vaultjackpotzone.com. We are registered in England and Wales
            under company number 14998822, with our registered office at 22 Carthusian Street,
            London EC1M 6EB. This policy explains what data we hold about visitors, why we hold it,
            and the rights you have under the UK General Data Protection Regulation (UK GDPR) and the
            Data Protection Act 2018.
          </p>

          <h2 className="font-display text-2xl text-vault-gold pt-4">What we collect</h2>
          <p>
            We deliberately operate a minimal data footprint. When you browse the public listing pages
            we do not require an account and we do not run third-party advertising trackers. We use
            the Meta (Facebook) Pixel solely to measure aggregate page-view traffic — no remarketing
            audiences are built and no data is shared with third parties for their own advertising.
            Our server logs (held by our hosting provider) record standard request metadata — IP
            address, user agent, request path and timestamp — which is retained for up to thirty days
            for security and abuse-prevention purposes only.
          </p>

          <h2 className="font-display text-2xl text-vault-gold pt-4">Affiliate redirects</h2>
          <p>
            When you click an "Open Vault" button you leave our site and are forwarded to the
            operator’s landing page via a tracking URL. The tracking URL contains a non-identifying
            click ID that lets the operator credit your sign-up to our editorial property. We do not
            receive your name, email, payment details, deposit history or gameplay data from any
            operator. Once you leave vaultjackpotzone.com the operator’s own privacy policy applies.
          </p>

          <h2 className="font-display text-2xl text-vault-gold pt-4">Cookies</h2>
          <p>
            We set one first-party functional cookie (or, where supported, a localStorage flag) to
            remember that you have dismissed the cookie notice. We do not set advertising cookies. A
            fuller explanation lives in our <a className="text-vault-gold underline" href="/cookie-policy">Cookie Policy</a>.
          </p>

          <h2 className="font-display text-2xl text-vault-gold pt-4">Lawful basis</h2>
          <p>
            We rely on the legitimate interest basis under Article 6(1)(f) UK GDPR for the minimal
            security logging described above, and on the strictly-necessary basis under PECR for the
            cookie-dismissal flag. We do not rely on consent because we do not run profiling or
            advertising technologies that would require it.
          </p>

          <h2 className="font-display text-2xl text-vault-gold pt-4">Your rights</h2>
          <p>
            You may ask us to confirm what information we hold about you, request a copy, ask us to
            correct anything inaccurate, request erasure where we have no overriding lawful reason to
            keep it, and lodge a complaint with the Information Commissioner’s Office (ico.org.uk).
            Email such requests to contact@vaultjackpotzone.com — we aim to respond within thirty
            calendar days.
          </p>

          <h2 className="font-display text-2xl text-vault-gold pt-4">International transfers</h2>
          <p>
            Our hosting is provided by a vendor with data-processing facilities in the United Kingdom
            and the European Economic Area. Where any transfer outside the UK or EEA occurs, it is
            covered by an adequacy decision or by the UK International Data Transfer Addendum to the
            EU Standard Contractual Clauses.
          </p>

          <h2 className="font-display text-2xl text-vault-gold pt-4">Changes</h2>
          <p>
            We may revise this notice as the site evolves. Material changes will be flagged on the
            home page for a reasonable period. The "last updated" date at the top of this page always
            reflects the current version.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
