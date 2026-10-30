/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        carbon: {
          900: '#070a0e',
          800: '#0d1117', // Primary matte carbon background
          700: '#161b22',
          600: '#21262d',
          500: '#30363d',
        },
        emerald: {
          neon: '#10b981',
          glow: '#059669',
          bright: '#34d399',
          dim: 'rgba(16, 185, 129, 0.15)',
        },
        lime: {
          neon: '#a3e635',
          electric: '#bef264',
          accent: '#84cc16',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'emerald-glow': '0 0 25px rgba(16, 185, 129, 0.45)',
        'emerald-glow-lg': '0 0 45px rgba(16, 185, 129, 0.65)',
        'lime-glow': '0 0 20px rgba(163, 230, 53, 0.4)',
        'cyber-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'radar-ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'subtle-pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}

