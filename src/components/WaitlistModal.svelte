<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import WaitlistForm from './WaitlistForm.svelte';

  export let showOnExit = true;
  export let showOnScroll = true;
  export let scrollDepth = 70; // Updated default: Percentage of page height
  export let delayInSeconds = 30; // Show after 30 seconds
  // export let showAfterPageViews = 2; // TODO: Requires page view tracking integration

  let isVisible = false;
  let hasInteracted = false; // User closed or submitted
  // Remove hasShown, use session counter instead
  // let hasShown = false;
  let sessionDisplayCount = 0;
  const MAX_DISPLAYS_PER_SESSION = 2;
  const SESSION_COUNT_KEY = 'buddybot_modal_session_count';

  function checkAndShowModal(trigger: 'exit_intent' | 'scroll_depth' | 'time_delay'): boolean {
    if (isVisible || hasInteracted || sessionDisplayCount >= MAX_DISPLAYS_PER_SESSION) {
      return false;
    }

    // Check if already submitted in this browser
    if (typeof localStorage !== 'undefined' && localStorage.getItem('waitlistSubmitted') === 'true') {
        hasInteracted = true; // Treat as interacted if already submitted
        return false;
    }

    // Increment count and update localStorage
    sessionDisplayCount++;
    if (typeof sessionStorage !== 'undefined') { // Use sessionStorage for session-only counting
        sessionStorage.setItem(SESSION_COUNT_KEY, sessionDisplayCount.toString());
    }

    isVisible = true;
    trackImpression(trigger);
    return true;
  }

  function handleMouseLeave(event: MouseEvent) {
    if (!showOnExit || event.clientY > 0) { // Check basic conditions first
      return;
    }
    checkAndShowModal('exit_intent');
  }

  function handleScroll() {
    if (!showOnScroll) {
      return;
    }

    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    if (scrollPercentage >= scrollDepth) {
      checkAndShowModal('scroll_depth');
    }
  }

  function handleClose() {
    isVisible = false;
    hasInteracted = true;
    trackEvent('modal_close');
  }

  function handleSuccess() {
    // Form handles tracking success event
    hasInteracted = true;
    // Don't close immediately, let the form's success state show
    setTimeout(() => {
      isVisible = false;
    }, 5000); // Keep modal open longer to show success message
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
    // Allow closing with Escape key
    if (event.key === 'Escape') {
      handleClose();
    }
    // Keep Enter/Space for overlay click simulation if needed, but Escape is more standard
    if (event.key === 'Enter' || event.key === 'Space') {
      // Check if the event target is the overlay itself
      if (event.target === event.currentTarget) {
         handleClose();
      }
    }
  }

  onMount(() => {
    // Initialize session count from sessionStorage
    if (typeof sessionStorage !== 'undefined') {
      const storedCount = sessionStorage.getItem(SESSION_COUNT_KEY);
      sessionDisplayCount = storedCount ? parseInt(storedCount, 10) : 0;
      // Prevent showing if count already exceeded (e.g., page reload)
      if (sessionDisplayCount >= MAX_DISPLAYS_PER_SESSION) {
          return; // Don't attach listeners if already shown max times
      }
    }
    // Check if already submitted
     if (typeof localStorage !== 'undefined' && localStorage.getItem('waitlistSubmitted') === 'true') {
        hasInteracted = true;
        return; // Don't show modal if user already submitted
    }

    // Add event listeners
    // Use passive for scroll for performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Mouseleave detection needs to be on document.body or a wrapper, not document itself
    document.body.addEventListener('mouseleave', handleMouseLeave);

    // Show after delay timer
    const timerId = setTimeout(() => {
      checkAndShowModal('time_delay');
    }, delayInSeconds * 1000);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timerId);
    };
  });
</script>

{#if isVisible}
  <div
    class="modal-overlay"
    role="dialog"
    tabindex="-1"
    aria-labelledby="modal-title"
    on:click={handleClose}
    on:keydown={e => e.key === 'Escape' && handleClose()}
  >
    <button
      type="button"
      class="modal-content"
      on:click|stopPropagation={() => {}}
      on:keydown|stopPropagation={e => e.key === 'Escape' && handleClose()}
    >
      <div role="document" class="p-6">
        <WaitlistForm variant="modal" />
      </div>
    </button>
  </div>
{/if}

<style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(23, 25, 35, 0.95); /* Slightly darker overlay */
    backdrop-filter: blur(5px); /* Slightly more blur */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    z-index: 1000;
  }

  .modal-content {
    position: relative;
    width: 100%; /* Allow WaitlistForm to control width */
    max-width: 520px; /* Increase max width slightly */
    max-height: 95vh; /* Allow slightly more height */
    overflow-y: auto;
    border-radius: 1rem; /* Add border radius to content itself */
    /* Prevent background flash during transition */
    background-color: var(--surface, #1E2130);
  }

  /* Hide scrollbar but keep functionality */
  .modal-content {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .modal-content::-webkit-scrollbar {
    display: none;
  }

  /* Helper for screen readers */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
</style> 