<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';
  import StatusBadge from '$lib/components/status/StatusBadge.svelte';

  export let variant: 'full' | 'sidebar' | 'modal' | 'inline' = 'full';
  export let showStatus = true;
  export let autoFocus = false;

  let email = '';
  let role: 'parent' | 'educator' | '' = '';
  let isSubmitting = false;
  let isSuccess = false;
  let errors: Record<string, string> = {};
  let formElement: HTMLFormElement;

  const dispatch = createEventDispatcher();

  onMount(() => {
    if (autoFocus) {
      const emailInput = formElement?.querySelector('input[type="email"]') as HTMLInputElement | null;
      if (emailInput) {
        emailInput.focus();
      }
    }
  });

  function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    if (isSubmitting) return;

    errors = {};

    if (!email) {
      errors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (Object.keys(errors).length > 0) {
      return;
    }

    isSubmitting = true;

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, role })
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      isSuccess = true;
      dispatch('success', { email, role });
      
      // Store submission in localStorage
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('waitlistSubmitted', 'true');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      errors.submit = 'An unexpected error occurred. Please try again later.';
      dispatch('error', error);
    } finally {
      isSubmitting = false;
    }
  }
</script>

<form
  bind:this={formElement}
  on:submit={handleSubmit}
  class="w-full max-w-md mx-auto space-y-6 {variant === 'modal' ? 'p-6' : 'p-0'}"
>
  {#if showStatus}
    <div class="flex justify-center">
      <StatusBadge type="coming-soon" />
    </div>
  {/if}

  <div class="space-y-4">
    <h2 class="text-2xl font-semibold text-center">Join Early Access</h2>
    <p class="text-text-secondary text-center">
      Be among the first to experience BuddyBot and help shape its development.
    </p>
  </div>

  {#if isSuccess}
    <div 
      class="bg-success/10 border border-success/30 rounded-lg p-4 text-center space-y-2"
      in:fade
    >
      <p class="text-success font-medium">Thanks for joining! 🎉</p>
      <p class="text-text-secondary text-sm">We'll keep you updated on our progress.</p>
    </div>
  {:else}
    <div class="space-y-4">
      <div>
        <label for="email" class="sr-only">Email address</label>
        <input
          type="email"
          id="email"
          name="email"
          bind:value={email}
          placeholder="Enter your email"
          class="input-field w-full"
          class:error={errors.email}
          disabled={isSubmitting}
        />
        {#if errors.email}
          <p class="text-error text-sm mt-1">{errors.email}</p>
        {/if}
      </div>

      <div>
        <label for="role" class="sr-only">I am a...</label>
        <select
          id="role"
          name="role"
          bind:value={role}
          class="input-field w-full"
          disabled={isSubmitting}
        >
          <option value="">I am a... (optional)</option>
          <option value="parent">Parent/Guardian</option>
          <option value="educator">Educator</option>
        </select>
      </div>

      <button
        type="submit"
        class="btn-primary w-full"
        disabled={isSubmitting}
      >
        {#if isSubmitting}
          <span class="inline-flex items-center">
            <svg class="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Joining...
          </span>
        {:else}
          Get Early Access
        {/if}
      </button>

      {#if errors.submit}
        <p class="text-error text-sm text-center">{errors.submit}</p>
      {/if}

      <p class="text-text-tertiary text-xs text-center">
        No credit card required. By joining, you agree to our
        <a href="/terms" class="text-accent hover:underline">Terms</a> and
        <a href="/privacy" class="text-accent hover:underline">Privacy Policy</a>.
      </p>
    </div>
  {/if}
</form>

<style lang="postcss">
  .input-field {
    @apply bg-background-lighter border border-border rounded-lg px-4 py-3 text-text-primary placeholder-text-tertiary;
    @apply focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50;
    @apply disabled:opacity-50 disabled:cursor-not-allowed;
  }

  .input-field.error {
    @apply border-red-500 focus:ring-red-500/50 focus:border-red-500/50;
  }

  .btn-primary {
    @apply bg-accent text-background font-semibold py-3 px-6 rounded-lg;
    @apply transition duration-300 ease-in-out transform;
    @apply hover:bg-accent-hover hover:scale-[1.02];
    @apply disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none;
  }
</style> 