import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#050713',
          900: '#0a1025'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        neon: '0 0 30px rgba(92, 210, 255, 0.35)',
        violet: '0 0 35px rgba(149, 76, 233, 0.35)'
      },
      backgroundImage: {
        'neon-grid':
          'linear-gradient(rgba(83,180,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(149,76,233,.07) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};

export default config;
