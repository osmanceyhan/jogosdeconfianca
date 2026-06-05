export default function VaultDial({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 220"
      className={className}
      role="img"
      aria-label="Vault dial illustration"
      xmlns="https://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="vd-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1b2340" />
          <stop offset="70%" stopColor="#0f1426" />
          <stop offset="100%" stopColor="#070a14" />
        </radialGradient>
        <linearGradient id="vd-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0cf85" />
          <stop offset="60%" stopColor="#d4a85a" />
          <stop offset="100%" stopColor="#8a6730" />
        </linearGradient>
      </defs>

      {/* outer ring */}
      <circle cx="110" cy="110" r="104" fill="url(#vd-core)" stroke="url(#vd-gold)" strokeWidth="2" />
      <circle cx="110" cy="110" r="96" fill="none" stroke="#1f2942" strokeWidth="1" />

      {/* tick marks */}
      {Array.from({ length: 48 }).map((_, i) => {
        const a = (i * 360) / 48;
        const isMajor = i % 4 === 0;
        return (
          <line
            key={i}
            x1="110"
            y1="20"
            x2="110"
            y2={isMajor ? 30 : 26}
            stroke={isMajor ? '#d4a85a' : '#5a6478'}
            strokeWidth={isMajor ? 1.6 : 1}
            transform={`rotate(${a} 110 110)`}
          />
        );
      })}

      {/* numbers */}
      {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90].map((n, i) => {
        const a = (i * 360) / 10 - 90;
        const r = 78;
        const x = 110 + r * Math.cos((a * Math.PI) / 180);
        const y = 110 + r * Math.sin((a * Math.PI) / 180);
        return (
          <text
            key={n}
            x={x}
            y={y + 4}
            textAnchor="middle"
            fontSize="10"
            fill="#d4a85a"
            fontFamily="serif"
          >
            {n}
          </text>
        );
      })}

      {/* central hub */}
      <circle cx="110" cy="110" r="46" fill="#0a0e1a" stroke="url(#vd-gold)" strokeWidth="1.5" />
      <circle cx="110" cy="110" r="38" fill="none" stroke="#2a3556" strokeWidth="1" />

      {/* spokes */}
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <g key={a} transform={`rotate(${a} 110 110)`}>
          <path d="M110 72 L116 110 L110 148 L104 110 Z" fill="url(#vd-gold)" opacity="0.85" />
        </g>
      ))}

      {/* center cap */}
      <circle cx="110" cy="110" r="12" fill="url(#vd-gold)" />
      <circle cx="110" cy="110" r="4" fill="#0a0e1a" />

      {/* indicator arrow at top */}
      <path d="M110 6 L116 20 L104 20 Z" fill="url(#vd-gold)" />
    </svg>
  );
}
