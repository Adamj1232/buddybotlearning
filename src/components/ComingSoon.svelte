<script lang="ts">
  import WaitlistForm from './WaitlistForm.svelte';
  
  export let pageName: string;
  export let description: string = "We're working hard to bring you something amazing.";
  export let features: string[] = [];
  export let launchDate: string = '';
</script>

<div class="min-h-screen bg-background flex items-center justify-center py-16 px-4">
  <div class="max-w-4xl mx-auto text-center">
    <div class="mb-12">
      <div class="relative inline-block mb-8">
        <div class="absolute inset-0 bg-cyan-400 blur-xl opacity-20 animate-pulse"></div>
        <h1 class="relative text-4xl md:text-6xl font-bold mb-6">
          <span class="gradient-text">{pageName}</span>
          <span class="text-text-primary"> Coming Soon</span>
        </h1>
      </div>
      
      <p class="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">{description}</p>
      
      {#if features.length > 0}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
          {#each features as feature}
            <div class="flex items-start space-x-3 text-left bg-background-lighter p-4 rounded-xl border border-border-primary">
              <svg class="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-text-secondary">{feature}</span>
            </div>
          {/each}
        </div>
      {/if}

      {#if launchDate}
        <div class="inline-flex items-center space-x-2 px-4 py-2 bg-background-lighter rounded-full border border-border-primary text-text-secondary text-sm mb-12">
          <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Estimated Launch: {launchDate}</span>
        </div>
      {/if}
    </div>
    
    <div class="max-w-md mx-auto">
      <div class="bg-background-lighter rounded-xl border border-border-primary p-6">
        <h2 class="text-xl font-bold mb-4">Be the First to Know</h2>
        <p class="text-text-secondary mb-6">Join our waitlist to get early access and exclusive benefits when we launch.</p>
        
        <WaitlistForm
          variant="inline"
          showProgress={true}
          showSocialProof={true}
          showScarcity={false}
          autoFocus={true}
        />
      </div>
      
      <div class="mt-8 flex justify-center space-x-4">
        <a href="/" class="btn-secondary inline-flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </a>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .gradient-text {
    @apply bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent;
  }

  @keyframes bounce {
    0%, 80%, 100% { 
      transform: scale(0);
    }
    40% { 
      transform: scale(1);
    }
  }
</style> 