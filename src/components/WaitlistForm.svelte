<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  export let variant: 'full' | 'sidebar' | 'modal' | 'inline' = 'full';
  export let showProgress = true;
  export let showSocialProof = true;
  export let showScarcity = true;
  export let darkMode = true;
  export let autoFocus = false;

  let email = '';
  let role = '';
  let ageRanges: string[] = [];
  let interests: string[] = [];
  let marketingConsent = false;
  let isSubmitting = false;
  let isSuccess = false;
  let errors: Record<string, string> = {};
  let formElement: HTMLFormElement;

  const roles = ['Parent', 'Educator', 'Other'];
  const ageRangeOptions = ['4-6 years', '7-9 years', '10-12 years'];
  const interestOptions = [
    'Science & Space',
    'Animals & Nature',
    'Math & Logic',
    'Technology',
    'Arts & Creativity'
  ];

  // Psychological triggers
  const totalSpots = 1000;
  const spotsRemaining = 247;
  const currentMembers = totalSpots - spotsRemaining;
  const progressPercentage = Math.round((currentMembers / totalSpots) * 100);

  let formWidth = '100%';
  $: {
    switch (variant) {
      case 'sidebar':
        formWidth = '320px';
        break;
      case 'modal':
        formWidth = '480px';
        break;
      case 'inline':
        formWidth = '100%';
        break;
      default:
        formWidth = '640px';
    }
  }

  onMount(() => {
    if (autoFocus) {
      const emailInput = formElement?.querySelector('input[type="email"]') as HTMLInputElement | null;
      if (emailInput) {
        emailInput.focus();
      }
    }
  });

  function validateEmail(email: string) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  async function handleSubmit() {
    errors = {};

    // Validation
    if (!email) {
      errors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!marketingConsent) {
      errors.consent = 'Please accept the terms to continue';
    }

    if (Object.keys(errors).length > 0) {
      return;
    }

    isSubmitting = true;

    try {
      // In a real implementation, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Store in localStorage to prevent multiple submissions
      localStorage.setItem('waitlistSubmitted', 'true');
      
      isSuccess = true;
      
      // Track conversion
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', 'waitlist_signup', {
          variant,
          role,
          age_ranges: ageRanges.join(','),
          interests: interests.join(',')
        });
      }
    } catch (error) {
      errors.submit = 'Something went wrong. Please try again.';
    } finally {
      isSubmitting = false;
    }
  }

  function shareOnTwitter() {
    const text = encodeURIComponent(
      "I just joined the waitlist for @RoboLearn - an AI-powered learning companion for children that makes education fun and engaging! 🚀 Join me at"
    );
    const url = encodeURIComponent("https://robolearn.ai");
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  }
</script>

<div
  class="waitlist-form {darkMode ? 'dark' : ''}"
  style="width: {formWidth}"
>
  {#if isSuccess}
    <div
      class="success-state"
      in:fly={{ y: 20, duration: 400 }}
    >
      <div class="success-icon">🎉</div>
      <h3>Welcome Aboard!</h3>
      <p>You're now on the exclusive waitlist for RoboLearn's early access.</p>
      
      <div class="next-steps">
        <h4>Next Steps:</h4>
        <ol>
          <li>Check your email for confirmation</li>
          <li>Share with other parents to move up the waitlist</li>
          <li>Download our free STEM activity pack</li>
        </ol>
      </div>

      <button
        class="share-button"
        on:click={shareOnTwitter}
      >
        Share on Twitter
      </button>
    </div>
  {:else}
    <form
      bind:this={formElement}
      on:submit|preventDefault={handleSubmit}
      class="form {variant}"
    >
      {#if showProgress}
        <div class="progress-bar">
          <div
            class="progress-fill"
            style="width: {progressPercentage}%"
          ></div>
          <span class="progress-text">
            Early access {progressPercentage}% filled
          </span>
        </div>
      {/if}

      {#if showScarcity}
        <div class="scarcity-indicator">
          <span class="pulse"></span>
          Only {spotsRemaining} early access spots remaining
        </div>
      {/if}

      <div class="form-group">
        <label for="email">Email Address *</label>
        <input
          type="email"
          id="email"
          bind:value={email}
          class:error={errors.email}
          placeholder="you@example.com"
        />
        {#if errors.email}
          <span class="error-message">{errors.email}</span>
        {/if}
      </div>

      <div class="form-group">
        <label for="role">I am a</label>
        <select id="role" bind:value={role}>
          <option value="">Select role (optional)</option>
          {#each roles as r}
            <option value={r}>{r}</option>
          {/each}
        </select>
      </div>

      <div class="form-group">
        <label for="age-range">Child's Age Range (optional)</label>
        <div class="checkbox-group" id="age-range">
          {#each ageRangeOptions as age}
            <label class="checkbox">
              <input
                type="checkbox"
                bind:group={ageRanges}
                value={age}
                id="age-{age}"
              />
              <span>{age}</span>
            </label>
          {/each}
        </div>
      </div>

      <div class="form-group">
        <label for="interests">Areas of Interest (optional)</label>
        <div class="checkbox-group" id="interests">
          {#each interestOptions as interest}
            <label class="checkbox">
              <input
                type="checkbox"
                bind:group={interests}
                value={interest}
                id="interest-{interest}"
              />
              <span>{interest}</span>
            </label>
          {/each}
        </div>
      </div>

      <div class="form-group">
        <label class="checkbox consent">
          <input
            type="checkbox"
            bind:checked={marketingConsent}
            class:error={errors.consent}
          />
          <span>
            I agree to receive updates about RoboLearn. You can unsubscribe at any time.
          </span>
        </label>
        {#if errors.consent}
          <span class="error-message">{errors.consent}</span>
        {/if}
      </div>

      {#if showSocialProof}
        <div class="social-proof">
          Join {currentMembers.toLocaleString()} other parents preparing for their child's future
        </div>
      {/if}

      <button
        type="submit"
        class="submit-button"
        disabled={isSubmitting}
      >
        {#if isSubmitting}
          <span class="loading"></span>
        {:else}
          Reserve Your Early Access Spot
        {/if}
      </button>

      {#if errors.submit}
        <div class="submit-error">
          {errors.submit}
        </div>
      {/if}
    </form>
  {/if}
</div>

<style>
  .waitlist-form {
    --primary: #00D1FF;
    --background: #171923;
    --surface: #1E2130;
    --text: #FFFFFF;
    --text-secondary: #A0AEC0;
    --error: #FF5757;
    
    background: var(--surface);
    border-radius: 1rem;
    padding: 2rem;
    border: 1px solid color-mix(in srgb, var(--primary) 20%, transparent);
    transition: all 0.3s ease;
  }

  .waitlist-form:hover {
    border-color: var(--primary);
    box-shadow: 0 0 30px color-mix(in srgb, var(--primary) 10%, transparent);
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .progress-bar {
    position: relative;
    height: 4px;
    background: color-mix(in srgb, var(--primary) 20%, transparent);
    border-radius: 2px;
    overflow: hidden;
    margin-bottom: 1rem;
  }

  .progress-fill {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: var(--primary);
    transition: width 1s ease;
  }

  .progress-text {
    position: absolute;
    top: 8px;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 0.875rem;
    color: var(--text-secondary);
  }

  .scarcity-indicator {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: var(--primary);
    margin-bottom: 1rem;
  }

  .pulse {
    width: 8px;
    height: 8px;
    background: var(--primary);
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.5); opacity: 0.5; }
    100% { transform: scale(1); opacity: 1; }
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  label {
    font-size: 0.875rem;
    color: var(--text);
  }

  input[type="email"],
  select {
    padding: 0.75rem;
    border-radius: 0.5rem;
    background: var(--background);
    border: 1px solid color-mix(in srgb, var(--primary) 20%, transparent);
    color: var(--text);
    transition: all 0.3s ease;
  }

  input[type="email"]:focus,
  select:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--primary) 20%, transparent);
  }

  .checkbox-group {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .checkbox {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }

  .checkbox input {
    width: 1rem;
    height: 1rem;
    border-radius: 0.25rem;
    border: 1px solid var(--primary);
    appearance: none;
    cursor: pointer;
  }

  .checkbox input:checked {
    background: var(--primary);
    position: relative;
  }

  .checkbox input:checked::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--background);
    font-size: 0.75rem;
  }

  .social-proof {
    text-align: center;
    color: var(--text-secondary);
    font-size: 0.875rem;
  }

  .submit-button {
    background: var(--primary);
    color: var(--background);
    padding: 1rem;
    border-radius: 0.5rem;
    font-weight: 600;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .submit-button:hover {
    filter: brightness(110%);
  }

  .submit-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .loading {
    width: 1.5rem;
    height: 1.5rem;
    border: 2px solid var(--background);
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto;
    display: block;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .error {
    border-color: var(--error) !important;
  }

  .error-message {
    color: var(--error);
    font-size: 0.75rem;
  }

  .success-state {
    text-align: center;
    padding: 2rem;
  }

  .success-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    animation: pop 0.5s ease-out;
  }

  @keyframes pop {
    0% { transform: scale(0); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }

  .next-steps {
    text-align: left;
    margin: 2rem 0;
    padding: 1rem;
    background: var(--background);
    border-radius: 0.5rem;
  }

  .next-steps h4 {
    color: var(--primary);
    margin-bottom: 0.5rem;
  }

  .next-steps ol {
    padding-left: 1.5rem;
    color: var(--text-secondary);
  }

  .share-button {
    background: #1DA1F2;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .share-button:hover {
    filter: brightness(110%);
  }

  /* Variant-specific styles */
  .form.sidebar {
    padding: 1rem;
  }

  .form.modal {
    padding: 1.5rem;
  }

  .form.inline {
    padding: 0;
    border: none;
    background: transparent;
  }
</style> 