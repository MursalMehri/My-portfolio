/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#080B18',
          900: '#0D1226',
          800: '#11152B',
          700: '#1A2038',
          600: '#232B4A',
        },
        lavender: {
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B72E8',
          600: '#7C6EE6',
          700: '#6455C7',
        },
        electric: {
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
        },
        snow: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
        display: ['Sora', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        glow: '0 0 24px rgba(124, 110, 230, 0.35)',
        'glow-lg': '0 0 48px rgba(124, 110, 230, 0.45)',
        'glow-blue': '0 0 24px rgba(96, 165, 250, 0.35)',
        card: '0 10px 40px -12px rgba(3, 6, 20, 0.8)',
        'card-hover': '0 24px 60px -16px rgba(124, 110, 230, 0.35)',
      },
      keyframes: {
        'angle-spin': {
          to: { '--angle': '360deg' },
        },
      },
    },
  },
  plugins: [],
}
