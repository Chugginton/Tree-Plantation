/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#060B08',
          900: '#0A120D',
          850: '#111E16',
          800: '#172B1F',
          700: '#22402E',
          600: '#2D573F',
          500: '#387352',
          400: '#489A6E',
          300: '#65C592',
          200: '#9CE3BC',
          100: '#D1F4E2',
          50: '#F0FAF5',
        },
        emerald: {
          accent: '#10B981',
          bright: '#34D399',
          glow: '#A7F3D0',
        },
        earth: {
          dark: '#1C1917',
          warm: '#292524',
          sand: '#E7E5E4',
          bark: '#44403C',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Space Mono', 'Consolas', 'monospace'],
        display: ['Syne', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', filter: 'blur(20px)' },
          '50%': { opacity: '0.8', filter: 'blur(30px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
