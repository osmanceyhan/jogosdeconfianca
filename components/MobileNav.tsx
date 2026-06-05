'use client';

import { useState } from 'react';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="text-vault-mute hover:text-vault-gold transition p-1"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {open ? (
            <>
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </>
          ) : (
            <>
              <path d="M3 7h18" />
              <path d="M3 12h18" />
              <path d="M3 17h18" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <nav className="absolute top-full left-0 right-0 bg-[#0a0e1a]/98 backdrop-blur border-b border-vault-border px-6 py-4 flex flex-col gap-3 text-sm text-vault-mute z-50">
          <a href="#offers" onClick={() => setOpen(false)} className="hover:text-vault-gold transition py-1">Offers</a>
          <a href="#faq" onClick={() => setOpen(false)} className="hover:text-vault-gold transition py-1">FAQ</a>
          <a href="/responsible-gambling" onClick={() => setOpen(false)} className="hover:text-vault-gold transition py-1">Responsible Play</a>
          <a href="mailto:contact@vaultjackpotzone.com" onClick={() => setOpen(false)} className="hover:text-vault-gold transition py-1">Contact</a>
        </nav>
      )}
    </div>
  );
}
