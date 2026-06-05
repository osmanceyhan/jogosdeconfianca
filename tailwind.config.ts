import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        vault: {
          bg: '#0a0e1a',
          card: '#131a2e',
          gold: '#d4a85a',
          'gold-dim': '#a98443',
          text: '#e6e9f2',
          mute: '#8b96aa',
          border: '#1f2942',
        },
      },
      fontFamily: {
        display: ['var(--font-cinzel)', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        vault: '0 10px 30px rgba(0,0,0,0.45)',
        'gold-ring': '0 0 0 1px rgba(212,168,90,0.4), 0 6px 22px rgba(212,168,90,0.15)',
      },
    },
  },
  plugins: [],
};

export default config;
