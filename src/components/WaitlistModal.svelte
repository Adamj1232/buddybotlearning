<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import WaitlistForm from './WaitlistForm.svelte';

  export let showOnExit = true;
  export let showOnScroll = true;
  export let scrollDepth = 50; // Percentage of page height
  export let delayInSeconds = 30; // Show after 30 seconds

  let isVisible = false;
  let hasInteracted = false;
  let hasShown = false;

  function handleMouseLeave(event: MouseEvent) {
    if (!showOnExit || hasInteracted || hasShown || event.clientY > 0) {
      return;
    }
    
    isVisible = true;
    hasShown = true;
    trackImpression('exit_intent');
  }

  function handleScroll() {
    if (!showOnScroll || hasInteracted || hasShown) {
      return;
    }

    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    if (scrollPercentage >= scrollDepth) {
      isVisible = true;
      hasShown = true;
      trackImpression('scroll_depth');
    }
  }

  function handleClose() {
    isVisible = false;
    hasInteracted = true;
    trackEvent('modal_close');
  }

  function handleSuccess() {
    hasInteracted = true;
    trackEvent('signup_success');
    // Close after a delay to show success state
    setTimeout(() => {
      isVisible = false;
    }, 3000);
  }

  function trackImpression(trigger: 'exit_intent' | 'scroll_depth' | 'time_delay') {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'waitlist_modal_shown', {
        trigger_type: trigger
      });
    }
  }

  function trackEvent(action: 'modal_close' | 'signup_success') {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', action);
    }
  }

  function handleKeyPress(event: KeyboardEvent) {
    // Check if the key pressed is 'Enter' or 'Space'
    if (event.key === 'Enter' || event.key === 'Space') {
      handleClose();
    }
  }

  onMount(() => {
    // Add event listeners
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);

    // Show after delay
    setTimeout(() => {
      if (!hasInteracted && !hasShown) {
        isVisible = true;
        hasShown = true;
        trackImpression('time_delay');
      }
    }, delayInSeconds * 1000);

    // Cleanup
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

{#if isVisible}
  <div
    class="modal-overlay"
    role="button"
    tabindex="0"
    on:click={handleClose}
    on:keypress={handleKeyPress}
    aria-label="Close modal"
    transition:fade={{ duration: 200 }}
  >
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="modal-content"
      transition:fly={{ y: 20, duration: 300 }}
      on:click|stopPropagation
    >
      <button
        class="close-button"
        on:click={handleClose}
        aria-label="Close modal"
      >
        ×
      </button>
      
      <WaitlistForm
        variant="modal"
        showProgress={true}
        showSocialProof={true}
        showScarcity={true}
        autoFocus={true}
        on:success={handleSuccess}
      />
    </div>
  </div>
{/if}

<style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(23, 25, 35, 0.9);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    z-index: 1000;
  }

  .modal-content {
    position: relative;
    max-width: 100%;
    max-height: 90vh;
    overflow-y: auto;
  }

  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 1;
  }

  .close-button:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  /* Hide scrollbar but keep functionality */
  .modal-content {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .modal-content::-webkit-scrollbar {
    display: none;
  }
</style> 