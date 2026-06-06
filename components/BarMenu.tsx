'use client';
import { useState } from 'react';

export default function BarMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="jc-burger" onClick={() => setOpen(!open)} aria-label="Menu">
        <span className={open ? 'jc-burger-x' : ''} />
      </button>
      {open && (
        <>
          <div className="jc-mobile-overlay" onClick={() => setOpen(false)} />
          <nav className="jc-mobile-menu">
            <a href="#ofertas" onClick={() => setOpen(false)}>Ofertas</a>
            <a href="#seguranca" onClick={() => setOpen(false)}>Segurança</a>
            <a href="/responsible-gambling" onClick={() => setOpen(false)}>Jogo Responsável</a>
          </nav>
        </>
      )}
    </>
  );
}
