'use client';
import { useState, useEffect } from 'react';

export default function CookieNotice() {
  const [show, setShow] = useState(false);
  useEffect(() => { if (!localStorage.getItem('jc_ack_v1')) setShow(true); }, []);
  if (!show) return null;
  return (
    <div className="jc-notice">
      <p>Utilizamos cookies essenciais. <a href="/cookie-policy" style={{ color: '#d97706' }}>Saber mais</a></p>
      <button onClick={() => { localStorage.setItem('jc_ack_v1', '1'); setShow(false); }}>OK</button>
    </div>
  );
}
