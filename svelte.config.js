import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      precompress: false,
      strict: true
    }),
    alias: {
      $lib: './src/lib'
    },
    prerender: {
      handleMissingId: 'ignore',
      handleHttpError: ({ path, referrer, message }) => {
        // Ignore missing favicon during build
        if (path === '/favicon.png') return;
        
        // Otherwise, fail the build
        throw new Error(message);
      }
    }
  },
  preprocess: vitePreprocess()
};

export default config; 