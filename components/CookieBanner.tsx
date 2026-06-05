'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'vault_cookie_ack_v1';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {}
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-vault-gold/40 bg-[#0a0e1a]/95 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-5 py-3 flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
        <p className="text-sm text-vault-text flex-1">
          We use cookies for site function and to remember your bonus-card preferences.
        </p>
        <div className="flex gap-2">
          <a
            href="/cookie-policy"
            className="text-sm text-vault-mute hover:text-vault-gold underline underline-offset-4"
          >
            Read policy
          </a>
          <button
            onClick={dismiss}
            className="bg-vault-gold text-vault-bg text-sm font-semibold px-4 py-2 rounded-md hover:brightness-110 transition"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
