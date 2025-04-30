/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#171923',
          surface: '#1E2130',
          light: '#1E2130',
          lighter: '#252A3D'
        },
        accent: {
          DEFAULT: '#00D1FF',
          hover: '#33DAFF',
          muted: '#0099CC'
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#E5E7EB',
          tertiary: '#9CA3AF'
        },
        status: {
          success: '#4ADE80',
          warning: '#FACC15',
          error: '#F87171'
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.1)',
          accent: '#00D1FF'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      fontSize: {
        'display': ['3rem', { lineHeight: '1.2' }],
        'h1': ['2rem', { lineHeight: '1.25' }],
        'h2': ['1.5rem', { lineHeight: '1.3' }],
        'h3': ['1.25rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.5' }],
        'body': ['1rem', { lineHeight: '1.5' }],
        'small': ['0.875rem', { lineHeight: '1.4' }],
        'micro': ['0.75rem', { lineHeight: '1.3' }]
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px'
      },
      boxShadow: {
        'card': '0 4px 16px rgba(0, 0, 0, 0.2)',
        'glow': '0 0 15px rgba(0, 209, 255, 0.3)',
        'glow-hover': '0 0 20px rgba(0, 209, 255, 0.5)'
      },
      borderRadius: {
        'DEFAULT': '6px',
        'card': '8px'
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px'
        }
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