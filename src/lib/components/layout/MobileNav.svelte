<!-- MobileNav.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import { fade, fly } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';

  export let isOpen = false;
  const dispatch = createEventDispatcher();

  function close() {
    dispatch('close');
  }
</script>

{#if isOpen}
  <div class="fixed inset-0 z-50" transition:fade={{ duration: 200 }}>
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-background/80 backdrop-blur-sm" on:click={close}></div>

    <!-- Menu -->
    <div 
      class="absolute inset-y-0 right-0 w-64 bg-background-surface border-l border-border"
      transition:fly={{ x: 300, duration: 300 }}
    >
      <div class="p-4 flex flex-col h-full">
        <div class="flex items-center justify-between mb-8">
          <span class="font-semibold text-text-primary">Menu</span>
          <button class="text-text-primary" on:click={close}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav class="flex-grow">
          <ul class="space-y-4">
            <li>
              <a 
                href="/how-it-works"
                class="block py-2 text-text-secondary hover:text-text-primary transition-colors"
                class:text-accent={$page.url.pathname === '/how-it-works'}
                on:click={close}
              >
                How It Works
              </a>
            </li>
            <li>
              <a 
                href="/features"
                class="block py-2 text-text-secondary hover:text-text-primary transition-colors"
                class:text-accent={$page.url.pathname === '/features'}
                on:click={close}
              >
                Features
              </a>
            </li>
            <li>
              <a 
                href="/for-parents"
                class="block py-2 text-text-secondary hover:text-text-primary transition-colors"
                class:text-accent={$page.url.pathname === '/for-parents'}
                on:click={close}
              >
                For Parents
              </a>
            </li>
            <li>
              <a 
                href="/safety"
                class="block py-2 text-text-secondary hover:text-text-primary transition-colors"
                class:text-accent={$page.url.pathname === '/safety'}
                on:click={close}
              >
                Safety
              </a>
            </li>
            <li>
              <a 
                href="/about"
                class="block py-2 text-text-secondary hover:text-text-primary transition-colors"
                class:text-accent={$page.url.pathname === '/about'}
                on:click={close}
              >
                About
              </a>
            </li>
          </ul>
        </nav>

        <div class="pt-4 border-t border-border">
          <a 
            href="/waitlist" 
            class="btn-primary w-full justify-center"
            on:click={close}
          >
            Join Early Access
          </a>
        </div>
      </div>
    </div>
  </div>
{/if} 