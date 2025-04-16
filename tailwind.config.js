/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#171923',
          light: '#1A202C',
          lighter: '#2D3748'
        },
        accent: {
          primary: '#00D1FF',
          hover: '#33DAFF',
          muted: '#0099CC'
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A0AEC0',
          muted: '#718096'
        },
        border: {
          primary: '#2D3748',
          accent: '#00D1FF'
        },
        success: {
          DEFAULT: '#48BB78',
          light: '#68D391'
        },
        error: {
          DEFAULT: '#F56565',
          light: '#FC8181'
        }
      },
      boxShadow: {
        'glow': '0 0 15px rgba(0, 209, 255, 0.3)',
        'glow-hover': '0 0 20px rgba(0, 209, 255, 0.5)',
        'glow-strong': '0 0 30px rgba(0, 209, 255, 0.4)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        'xs': '2px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
} 