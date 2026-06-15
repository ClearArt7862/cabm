/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#33483E',
          light: '#4A6557',
          dark: '#26352D',
        },
        brown: {
          DEFAULT: '#6B4A36',
          light: '#8A6248',
        },
        beige: {
          DEFAULT: '#E8DCCB',
          light: '#F0E8DB',
          dark: '#DACBB2',
        },
        cream: '#F7F3ED',
        ink: {
          DEFAULT: '#26302C',
          muted: '#6B7570',
          soft: '#8C948F',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '1.75rem',
        '3xl': '2.25rem',
      },
      boxShadow: {
        soft: '0 4px 24px rgba(51, 72, 62, 0.08)',
        card: '0 8px 30px rgba(51, 72, 62, 0.07)',
        hover: '0 16px 48px rgba(51, 72, 62, 0.16)',
        lift: '0 20px 60px rgba(38, 48, 44, 0.18)',
      },
      backgroundImage: {
        'beige-fade': 'linear-gradient(135deg, #F7F3ED 0%, #EFE6D8 50%, #E8DCCB 100%)',
        'soft-radial': 'radial-gradient(circle at 30% 20%, rgba(232,220,203,0.5), transparent 60%)',
      },
      letterSpacing: {
        widest2: '0.22em',
      },
      maxWidth: {
        '8xl': '1400px',
      },
    },
  },
  plugins: [],
}