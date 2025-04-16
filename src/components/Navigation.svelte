<script lang="ts">
  let isMenuOpen = false;
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<nav class="fixed w-full z-50 bg-background/95 backdrop-blur-sm border-b border-gray-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <div class="flex items-center">
        <a href="/" class="flex items-center space-x-2">
          <span class="text-2xl font-bold bg-gradient-to-r from-accent-primary to-blue-500 bg-clip-text text-transparent">
            RoboLearn
          </span>
        </a>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex md:items-center md:space-x-8">
        <a href="/features" class="text-gray-300 hover:text-white transition-colors">Features</a>
        <a href="/curriculum" class="text-gray-300 hover:text-white transition-colors">Curriculum</a>
        <a href="/pricing" class="text-gray-300 hover:text-white transition-colors">Pricing</a>
        <a href="/about" class="text-gray-300 hover:text-white transition-colors">About</a>
        <a href="/waitlist" class="btn-primary">Join Waitlist</a>
      </div>

      <!-- Mobile menu button -->
      <div class="flex items-center md:hidden">
        <button 
          on:click={toggleMenu}
          class="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent-primary"
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
    <div class="md:hidden bg-background-light border-t border-gray-800">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a href="/features" class="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Features</a>
        <a href="/curriculum" class="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Curriculum</a>
        <a href="/pricing" class="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Pricing</a>
        <a href="/about" class="block px-3 py-2 text-gray-300 hover:text-white transition-colors">About</a>
        <a href="/waitlist" class="block px-3 py-2 btn-primary w-full text-center">Join Waitlist</a>
      </div>
    </div>
  {/if}
</nav> 