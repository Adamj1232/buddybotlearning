<script lang="ts">
  import { page } from '$app/stores';
  let isMenuOpen = false;

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' }
  ];
</script>

<nav class="fixed w-full bg-background/95 backdrop-blur-sm border-b border-gray-800 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <div class="flex items-center">
        <a href="/" class="flex items-center">
          <span class="text-2xl font-bold bg-gradient-to-r from-accent-primary to-blue-500 bg-clip-text text-transparent">
            RoboLearn
          </span>
        </a>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex md:items-center md:space-x-8">
        {#each navItems as item}
          <a
            href={item.href}
            class="text-gray-300 hover:text-accent-primary transition-colors duration-200 {$page.url.pathname === item.href ? 'text-accent-primary' : ''}"
          >
            {item.label}
          </a>
        {/each}
        <a href="/get-started" class="btn-primary">
          Get Started
        </a>
      </div>

      <!-- Mobile menu button -->
      <div class="flex items-center md:hidden">
        <button
          on:click={() => isMenuOpen = !isMenuOpen}
          class="text-gray-300 hover:text-accent-primary"
          aria-label="Toggle menu"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {#if isMenuOpen}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            {:else}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            {/if}
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Navigation -->
  {#if isMenuOpen}
    <div class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 bg-background-light border-t border-gray-800">
        {#each navItems as item}
          <a
            href={item.href}
            class="block px-3 py-2 rounded-md text-gray-300 hover:text-accent-primary transition-colors duration-200 {$page.url.pathname === item.href ? 'text-accent-primary bg-background' : ''}"
          >
            {item.label}
          </a>
        {/each}
        <a href="/get-started" class="block px-3 py-2">
          <span class="btn-primary inline-block w-full text-center">Get Started</span>
        </a>
      </div>
    </div>
  {/if}
</nav>

<!-- Spacer to prevent content from being hidden under fixed nav -->
<div class="h-16"></div> 