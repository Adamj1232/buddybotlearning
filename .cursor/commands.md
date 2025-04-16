# Essential Cursor Commands

## Project Setup
```bash
# Create project directory
mkdir robolearn-website
cd robolearn-website

# Initialize Yarn
yarn init -y

# Set up SvelteKit
yarn create svelte@latest .
# Select skeleton project, TypeScript, ESLint, Prettier

# Install dependencies
yarn install

# Add Tailwind CSS
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Add additional dependencies
yarn add -D @sveltejs/adapter-static
yarn add gsap
yarn add svelte-intersection-observer
yarn add @tailwindcss/forms @tailwindcss/typography

File Configuration Commands
bash# Configure tailwind.config.js with custom colors
echo "module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#171923',
          secondary: '#1E2130',
        },
        accent: {
          primary: '#00D1FF',
          secondary: '#73CBFF',
          tertiary: '#FF71CE',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#E5E7EB',
          muted: '#9CA3AF',
        }
      },
      boxShadow: {
        'glow': '0 0 10px rgba(0, 209, 255, 0.5)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.25)',
      },
      borderRadius: {
        'card': '12px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}" > tailwind.config.js

# Configure postcss.config.js
echo "module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}" > postcss.config.js

# Set up Tailwind directives in app.css
echo "@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply scroll-smooth bg-background-primary text-text-primary;
  }
  body {
    @apply min-h-screen;
  }
  h1 {
    @apply text-4xl font-bold md:text-5xl;
  }
  h2 {
    @apply text-3xl font-bold md:text-4xl;
  }
  h3 {
    @apply text-2xl font-bold md:text-3xl;
  }
}

@layer components {
  .btn-primary {
    @apply bg-accent-primary text-background-primary px-6 py-3 rounded-lg font-medium transition-all hover:brightness-110 shadow-glow;
  }
  .btn-secondary {
    @apply border border-accent-primary text-accent-primary px-6 py-3 rounded-lg font-medium transition-all hover:bg-accent-primary/10;
  }
  .card {
    @apply bg-background-secondary rounded-card border border-white/10 p-6 shadow-card;
  }
  .input-field {
    @apply bg-background-primary border border-white/10 rounded-lg p-3 text-text-primary focus:border-accent-primary focus:ring-1 focus:ring-accent-primary focus:shadow-glow outline-none;
  }
}" > src/app.css
```