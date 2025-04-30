import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    port: 3000,
    strictPort: false,
  },
  preview: {
    port: 3000,
    strictPort: false,
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['svelte', '@sveltejs/kit'],
          'ui': [
            '$lib/components/layout/Container.svelte',
            '$lib/components/layout/Section.svelte',
            '$lib/components/layout/PageLayout.svelte'
          ],
          'status': [
            '$lib/components/status/StatusBadge.svelte',
            '$lib/components/status/DevelopmentTimeline.svelte',
            '$lib/components/status/PreviewIndicator.svelte'
          ],
          'forms': ['src/components/WaitlistForm.svelte']
        }
      }
    },
    cssCodeSplit: true,
    sourcemap: true,
    chunkSizeWarningLimit: 1000
  },
  optimizeDeps: {
    include: ['svelte', '@sveltejs/kit']
  },
  ssr: {
    noExternal: ['@sveltejs/kit']
  }
}); 