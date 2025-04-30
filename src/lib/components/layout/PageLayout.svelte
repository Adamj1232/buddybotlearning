<!-- PageLayout.svelte -->
<script lang="ts">
  import { writable } from 'svelte/store';
  import StatusBadge from '$lib/components/status/StatusBadge.svelte';
  import MobileNav from './MobileNav.svelte';
  
  export let title: string = '';
  export let description: string = '';
  export let showStatus: boolean = true;

  const currentPath = writable(window?.location?.pathname || '/');
  let isMobileMenuOpen = false;

  // Update path when navigation occurs
  if (typeof window !== 'undefined') {
    window.addEventListener('popstate', () => {
      currentPath.set(window.location.pathname);
    });
  }

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }
</script>

<svelte:head>
  {#if title}
    <title>{title} | BuddyBotLearning</title>
  {/if}
  {#if description}
    <meta name="description" content={description} />
  {/if}
</svelte:head>

<div class="min-h-screen flex flex-col">
  <header class="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
    <div class="container mx-auto px-4 h-16 flex items-center justify-between">
      <a href="/" class="flex items-center space-x-2">
        <span class="text-2xl">🤖</span>
        <span class="font-semibold text-text-primary">BuddyBotLearning</span>
      </a>

      {#if showStatus}
        <StatusBadge type="coming-soon" />
      {/if}

      <nav class="hidden md:flex items-center space-x-6">
        <a 
          href="/how-it-works"
          class="text-sm text-text-secondary hover:text-text-primary transition-colors"
          class:text-accent={$currentPath === '/how-it-works'}
        >
          How It Works
        </a>
        <a 
          href="/features"
          class="text-sm text-text-secondary hover:text-text-primary transition-colors"
          class:text-accent={$currentPath === '/features'}
        >
          Features
        </a>
        <a 
          href="/for-parents"
          class="text-sm text-text-secondary hover:text-text-primary transition-colors"
          class:text-accent={$currentPath === '/for-parents'}
        >
          For Parents
        </a>
        <a 
          href="/safety"
          class="text-sm text-text-secondary hover:text-text-primary transition-colors"
          class:text-accent={$currentPath === '/safety'}
        >
          Safety
        </a>
        <a 
          href="/about"
          class="text-sm text-text-secondary hover:text-text-primary transition-colors"
          class:text-accent={$currentPath === '/about'}
        >
          About
        </a>
        <a href="/waitlist" class="btn-primary btn-compact">
          Join Early Access
        </a>
      </nav>

      <button 
        class="md:hidden text-text-primary" 
        aria-label="Toggle navigation menu"
        on:click={toggleMobileMenu}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
  </header>

  <MobileNav 
    isOpen={isMobileMenuOpen} 
    on:close={() => isMobileMenuOpen = false} 
  />

  <main id="main-content" class="flex-grow">
    <slot />
  </main>

  <footer class="bg-background-surface border-t border-border py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <span class="text-2xl">🤖</span>
            <span class="font-semibold text-text-primary">BuddyBotLearning</span>
          </div>
          <p class="text-text-secondary text-sm">
            Voice-controlled AI learning companions for curious kids.
          </p>
        </div>

        <div>
          <h4 class="font-medium text-text-primary mb-4">Product</h4>
          <ul class="space-y-2">
            <li><a href="/how-it-works" class="text-sm text-text-secondary hover:text-text-primary">How It Works</a></li>
            <li><a href="/features" class="text-sm text-text-secondary hover:text-text-primary">Features</a></li>
            <li><a href="/for-parents" class="text-sm text-text-secondary hover:text-text-primary">For Parents</a></li>
            <li><a href="/safety" class="text-sm text-text-secondary hover:text-text-primary">Safety</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-medium text-text-primary mb-4">Company</h4>
          <ul class="space-y-2">
            <li><a href="/about" class="text-sm text-text-secondary hover:text-text-primary">About</a></li>
            <li><a href="/blog" class="text-sm text-text-secondary hover:text-text-primary">Blog</a></li>
            <li><a href="/support" class="text-sm text-text-secondary hover:text-text-primary">Support</a></li>
            <li><a href="/contact" class="text-sm text-text-secondary hover:text-text-primary">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-medium text-text-primary mb-4">Legal</h4>
          <ul class="space-y-2">
            <li><a href="/privacy" class="text-sm text-text-secondary hover:text-text-primary">Privacy Policy</a></li>
            <li><a href="/terms" class="text-sm text-text-secondary hover:text-text-primary">Terms of Service</a></li>
            <li><a href="/safety" class="text-sm text-text-secondary hover:text-text-primary">Safety</a></li>
          </ul>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-border">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-sm text-text-tertiary">
            © {new Date().getFullYear()} BuddyBotLearning. All rights reserved.
          </p>
          <div class="flex items-center space-x-6">
            <a href="https://twitter.com/BuddyBot" class="text-text-secondary hover:text-text-primary">
              Twitter
            </a>
            <a href="https://linkedin.com/company/BuddyBotLearning" class="text-text-secondary hover:text-text-primary">
              LinkedIn
            </a>
            <a href="https://instagram.com/BuddyBot" class="text-text-secondary hover:text-text-primary">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div> 