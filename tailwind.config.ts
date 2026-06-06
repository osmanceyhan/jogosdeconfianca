import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        warm: {
          bg: '#1c1714',
          card: '#252019',
          amber: '#d97706',
          'amber-dim': '#b45309',
          ink: '#f2ebe0',
          mute: '#8a7e6e',
          border: '#332b22',
        },
      },
      fontFamily: {
        heading: ['var(--font-instrument)', 'system-ui', 'sans-serif'],
        body: ['var(--font-rubik)', 'system-ui', 'sans-serif'],
      },
      borderRadius: { card: '20px' },
      boxShadow: {
        warm: '0 4px 16px rgba(0,0,0,0.25)',
        'amber-glow': '0 0 18px rgba(217,119,6,0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
