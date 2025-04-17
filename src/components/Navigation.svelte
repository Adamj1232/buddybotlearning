<script lang="ts">
  let isMenuOpen = false;
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<nav class="fixed w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border-primary">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="flex justify-between h-16">
      <div class="flex items-center">
        <a href="/" class="flex items-center space-x-2">
          <span class="text-xl sm:text-2xl font-bold gradient-text">
            RoboLearn
          </span>
        </a>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex md:items-center md:space-x-6">
        <a href="/how-it-works" class="text-text-secondary hover:text-text-primary transition-colors">How It Works</a>
        <a href="/for-parents" class="text-text-secondary hover:text-text-primary transition-colors">For Parents</a>
        <a href="/safety" class="text-text-secondary hover:text-text-primary transition-colors">Safety</a>
        <a href="/about" class="text-text-secondary hover:text-text-primary transition-colors">About</a>
        <a href="/demo" class="btn-primary">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
          Try Voice Demo
        </a>
      </div>

      <!-- Mobile menu button -->
      <div class="flex items-center md:hidden">
        <button 
          on:click={toggleMenu}
          class="text-text-secondary hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary p-2"
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

  <!-- Mobile menu -->
  {#if isMenuOpen}
    <div class="md:hidden bg-background-light/90 backdrop-blur-sm border-t border-border-primary">
      <div class="px-4 pt-2 pb-3 space-y-2">
        <a href="/how-it-works" class="block px-3 py-2 text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-background-lighter">How It Works</a>
        <a href="/about" class="block px-3 py-2 text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-background-lighter">About</a>
        <a href="/for-parents" class="block px-3 py-2 text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-background-lighter">For Parents</a>
        <a href="/safety" class="block px-3 py-2 text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-background-lighter">Safety</a>
        <a href="/demo" class="flex items-center px-3 py-2 btn-primary w-full">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
          Try Voice Demo
        </a>
      </div>
    </div>
  {/if}
</nav> 