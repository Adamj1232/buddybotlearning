<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';

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
  let showOptionalFields = false;

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

  const dispatch = createEventDispatcher();

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

  function selectRole(selectedRole: string) {
    role = selectedRole;
    showOptionalFields = true;
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
      const firstErrorKey = Object.keys(errors)[0];
      const errorInput = formElement?.querySelector(`[name="${firstErrorKey}"], #${firstErrorKey}`);
      if (errorInput instanceof HTMLElement) {
        errorInput.focus();
      }
      return;
    }

    isSubmitting = true;

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      localStorage.setItem('waitlistSubmitted', 'true');
      
      isSuccess = true;
      dispatch('success');
      
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', 'waitlist_signup', {
          variant,
          role,
          age_ranges: ageRanges.join(','),
          interests: interests.join(',')
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      errors.submit = 'An unexpected error occurred. Please try again later.';
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
      <div class="success-icon-wrapper">
        <span class="success-icon">🎉</span>
        <span class="mascot-placeholder">[Friendly Robot Mascot]</span>
      </div>
      <h3>Welcome to the RoboLearn Family!</h3>
      <p>You're officially on the waitlist for exclusive early access.</p>

      <div class="next-steps">
        <h4>What's Next?</h4>
        <ol>
          <li>✓ Confirmation email sent (check spam!)</li>
          <li>Spread the word! Share with friends to climb the waitlist.</li>
          <li><a href="/free-activity-pack.pdf" download class="link">Download Your Free STEM Activity Pack</a></li>
          <li>Expect early access details within 4-6 weeks.</li>
        </ol>
      </div>

      <div class="share-buttons">
         <button class="share-button twitter" on:click={shareOnTwitter}>
           T Share on Twitter
         </button>
      </div>
    </div>
  {:else}
    <form
      bind:this={formElement}
      on:submit|preventDefault={handleSubmit}
      class="form {variant}"
      novalidate
    >
      <div class="form-header">
        <span class="mascot-placeholder-small">[M]</span>
        <h2>Join the RoboLearn Early Access Family</h2>
        <p class="subtitle">Be among the first to experience the future of playful learning.</p>
      </div>

      {#if showProgress}
        <div class="progress-section">
           <div class="progress-bar-dynamic">
             <div class="progress-fill-dynamic" style="width: {progressPercentage}%"></div>
           </div>
           <span class="progress-text">
             {currentMembers.toLocaleString()} / {totalSpots.toLocaleString()} spots claimed
           </span>
        </div>
      {/if}

      {#if showScarcity}
        <div class="scarcity-indicator-enhanced">
          <span class="countdown-animation">⏰</span>
          Only <strong>{spotsRemaining}</strong> early access spots remaining!
        </div>
      {/if}

      <fieldset class="form-step">
        <legend class="sr-only">Step 1: Your Information</legend>
        <div class="form-group">
          <label for="email">Email Address *</label>
          <div class="input-wrapper">
             <span class="input-icon">🔒</span>
            <input
              type="email"
              id="email"
              name="email"
              bind:value={email}
              class:error={errors.email}
              placeholder="you@example.com"
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              required
            />
          </div>
          {#if errors.email}
            <span class="error-message" id="email-error">{errors.email}</span>
          {/if}
          <p class="input-hint">No credit card required. Ever.</p>
        </div>

        <div class="form-group">
           <!-- svelte-ignore a11y_label_has_associated_control - Ignore: Label associated via aria-labelledby on radiogroup -->
           <label id="role-label">I am primarily joining as a... *</label>
           <div class="role-buttons" role="radiogroup" aria-labelledby="role-label">
             {#each roles as r}
               <button
                 type="button"
                 class="role-button"
                 class:selected={role === r}
                 on:click={() => selectRole(r)}
                 role="radio"
                 aria-checked={role === r}
               >
                 {r}
               </button>
             {/each}
           </div>
           {#if errors.role}
             <span class="error-message" id="role-error">{errors.role}</span>
           {/if}
         </div>
      </fieldset>

      {#if showOptionalFields}
       <fieldset class="form-step optional-step" transition:fade>
         <legend>Tell us a bit more (Optional)</legend>

         <div class="form-group">
          <label for="age-range">Child's Age Range</label>
          <div class="checkbox-group" id="age-range">
            {#each ageRangeOptions as age}
              <label class="checkbox">
                <input type="checkbox" bind:group={ageRanges} value={age} id="age-{age}" />
                <span>{age}</span>
              </label>
            {/each}
          </div>
        </div>

        <div class="form-group">
          <label for="interests">Key Areas of Interest</label>
          <div class="checkbox-group" id="interests">
            {#each interestOptions as interest}
              <label class="checkbox">
                <input type="checkbox" bind:group={interests} value={interest} id="interest-{interest}" />
                <span>{interest}</span>
              </label>
            {/each}
          </div>
        </div>
       </fieldset>
       {/if}

      <div class="trust-signals">
         <div class="mini-testimonial">"My kids are already asking smarter questions!" - Sarah P.</div>
         <div class="partner-logos">[Partner Logo 1] [Partner Logo 2]</div>
      </div>

      <fieldset class="form-step">
         <legend class="sr-only">Step 3: Consent and Submit</legend>
         <div class="form-group">
           <label class="checkbox consent">
             <input
               type="checkbox"
               id="consent"
               name="consent"
               bind:checked={marketingConsent}
               class:error={errors.consent}
               aria-required="true"
               aria-describedby={errors.consent ? 'consent-error' : undefined}
             />
             <span>
               I agree to receive updates about RoboLearn.
             </span>
           </label>
           {#if errors.consent}
             <span class="error-message" id="consent-error">{errors.consent}</span>
           {/if}
            <p class="privacy-notice">We respect your privacy. Read our <a href="/privacy-policy" target="_blank" class="link">Privacy Policy</a>.</p>
         </div>

         {#if showSocialProof}
           <div class="social-proof">
             Join {currentMembers.toLocaleString()} forward-thinking parents & educators!
           </div>
         {/if}

         <button
           type="submit"
           class="submit-button enhanced-cta"
           disabled={isSubmitting}
         >
           {#if isSubmitting}
             <span class="loading"></span>
             <span>Processing...</span>
           {:else}
             <span>Secure Your Child's Early Access Spot</span>
             <span class="cta-icon">→</span>
           {/if}
         </button>
         <p class="cta-benefit">Early members help shape the future of learning!</p>

         {#if errors.submit}
           <div class="submit-error">
             {errors.submit}
           </div>
         {/if}
      </fieldset>
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
    padding: clamp(1.5rem, 5vw, 2.5rem);
    border: 1px solid color-mix(in srgb, var(--primary) 20%, transparent);
    transition: all 0.3s ease;
    --glow-color: color-mix(in srgb, var(--primary) 30%, transparent);
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

  .form-header {
     text-align: center;
     margin-bottom: 1.5rem;
     display: flex;
     flex-direction: column;
     align-items: center;
     gap: 0.5rem;
  }

  .mascot-placeholder-small {
     font-size: 1.5rem;
     background-color: var(--primary);
     color: var(--background);
     border-radius: 50%;
     width: 32px;
     height: 32px;
     display: inline-flex;
     align-items: center;
     justify-content: center;
     font-weight: bold;
  }

  .form-header h2 {
    font-size: clamp(1.25rem, 4vw, 1.75rem);
    color: var(--text);
    margin: 0;
    font-weight: 600;
  }

  .form-header .subtitle {
    color: var(--text-secondary);
    font-size: clamp(0.875rem, 2.5vw, 1rem);
    margin: 0;
  }

  .progress-section {
    margin-bottom: 1rem;
  }

  .progress-bar-dynamic {
    height: 8px;
    background: color-mix(in srgb, var(--primary) 15%, transparent);
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    margin-bottom: 0.25rem;
  }

  .progress-fill-dynamic {
    height: 100%;
    background: linear-gradient(90deg, color-mix(in srgb, var(--primary) 70%, transparent), var(--primary));
    transition: width 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    border-radius: 4px;
    animation: pulse-glow 2s infinite alternate;
  }

  @keyframes pulse-glow {
    from { box-shadow: 0 0 5px color-mix(in srgb, var(--primary) 20%, transparent); }
    to { box-shadow: 0 0 15px color-mix(in srgb, var(--primary) 40%, transparent); }
  }

  .progress-text {
    display: block;
    text-align: center;
    font-size: 0.8rem;
    color: var(--text-secondary);
    font-weight: 500;
  }

  .scarcity-indicator-enhanced {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: var(--primary);
    margin-bottom: 1.5rem;
    background-color: color-mix(in srgb, var(--primary) 10%, transparent);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid color-mix(in srgb, var(--primary) 20%, transparent);
  }

  .scarcity-indicator-enhanced strong {
     font-weight: 700;
     color: white;
  }

  .countdown-animation {
     animation: tick-tock 1.5s infinite ease-in-out;
     display: inline-block;
  }

  @keyframes tick-tock {
     0%, 100% { transform: rotate(-10deg); }
     50% { transform: rotate(10deg); }
  }

  .form-step {
    border: none;
    padding: 0;
    margin: 0 0 1.5rem 0;
  }

  .form-step legend {
     font-weight: 600;
     margin-bottom: 1rem;
     color: var(--text);
     font-size: 1.1rem;
  }

   .optional-step legend {
      font-size: 1rem;
      color: var(--text-secondary);
   }

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

  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  .input-icon {
    position: absolute;
    left: 0.75rem;
    color: var(--text-secondary);
    pointer-events: none;
  }

  input[type="email"],
  select {
    padding: 0.75rem;
    border-radius: 0.5rem;
    background: var(--background);
    /* Adjusted border for subtle look */
    border: 1px solid color-mix(in srgb, var(--text-secondary) 25%, transparent);
    color: var(--text);
    transition: all 0.3s ease;
    width: 100%; /* Ensure full width is default */
    box-sizing: border-box; /* Include padding and border in element's total width */
  }

  input[type="email"]:focus,
  select:focus {
    outline: none;
    /* Subtle focus ring matching screenshot */
    border-color: color-mix(in srgb, var(--text-secondary) 40%, transparent);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary) 10%, transparent);
    background-color: color-mix(in srgb, var(--surface) 50%, var(--background) 50%); /* Slightly lighter background on focus */
  }

  input[type="email"].error,
  select.error {
      border-color: var(--error) !important; 
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--error) 15%, transparent); /* Subtle red shadow for error */
  }

  input[type="email"] {
    padding-left: 2.5rem;
    /* width: 100%; -- Already set above */
    /* border: none; -- Use adjusted border from above */
    /* background: transparent; -- Use adjusted background from above */
  }

  .input-hint {
     font-size: 0.75rem;
     color: var(--text-secondary);
     margin-top: 0.25rem;
  }

  .role-buttons {
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
     gap: 0.75rem;
  }

  .role-button {
     padding: 0.75rem;
     border-radius: 0.5rem;
     background: var(--background);
     border: 1px solid color-mix(in srgb, var(--primary) 30%, transparent);
     color: var(--text-secondary);
     cursor: pointer;
     transition: all 0.2s ease-out;
     text-align: center;
     font-weight: 500;
  }

  .role-button:hover {
     background-color: color-mix(in srgb, var(--primary) 10%, var(--background));
     border-color: color-mix(in srgb, var(--primary) 50%, transparent);
     color: var(--text);
  }

  .role-button.selected {
     background-color: var(--primary);
     color: var(--background);
     border-color: var(--primary);
     font-weight: 600;
     box-shadow: 0 0 10px var(--glow-color);
  }

  .trust-signals {
     display: flex;
     flex-direction: column;
     align-items: center;
     gap: 0.75rem;
     margin: 1.5rem 0;
     padding: 1rem;
     background-color: color-mix(in srgb, var(--background) 50%, transparent);
     border-radius: 0.5rem;
  }

  .mini-testimonial {
     font-style: italic;
     font-size: 0.8rem;
     color: var(--text-secondary);
     text-align: center;
  }

  .partner-logos {
     font-size: 0.75rem;
     color: var(--text-secondary);
     opacity: 0.7;
     filter: grayscale(80%);
  }

  .privacy-notice {
     font-size: 0.75rem;
     color: var(--text-secondary);
     margin-top: 0.5rem;
  }

   .link {
      color: var(--primary);
      text-decoration: none;
      transition: opacity 0.2s;
   }
   .link:hover {
      opacity: 0.8;
      text-decoration: underline;
   }

  .checkbox.consent span {
    font-size: 0.8rem;
    color: var(--text-secondary);
  }
  .checkbox.consent input {
     margin-top: 2px;
  }

  .enhanced-cta {
    background: linear-gradient(90deg, color-mix(in srgb, var(--primary) 80%, #000), var(--primary));
    box-shadow: 0 0 20px var(--glow-color);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    position: relative;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  .enhanced-cta:hover:not(:disabled) {
    filter: brightness(1.15);
    box-shadow: 0 0 30px color-mix(in srgb, var(--primary) 50%, transparent);
    transform: translateY(-2px);
  }

  .cta-icon {
    font-weight: bold;
    transition: transform 0.3s ease;
  }

  .enhanced-cta:hover:not(:disabled) .cta-icon {
     transform: translateX(3px);
  }

   .cta-benefit {
      font-size: 0.75rem;
      text-align: center;
      color: var(--text-secondary);
      margin-top: 0.5rem;
   }

  .success-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem 1rem;
  }

  .success-icon-wrapper {
    position: relative;
    margin-bottom: 1rem;
  }

  .success-icon {
    font-size: 4rem;
    animation: pop 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    display: inline-block;
  }

  .mascot-placeholder {
      font-size: 1.2rem;
      background-color: var(--primary);
      color: var(--background);
      border-radius: 50%;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      position: absolute;
      bottom: -10px;
      right: -20px;
      border: 3px solid var(--surface);
      transform: rotate(15deg);
  }

  .success-state h3 {
     font-size: 1.5rem;
     color: var(--primary);
     margin-bottom: 0.25rem;
  }

  .success-state p {
    color: var(--text-secondary);
    max-width: 400px;
    margin-bottom: 1.5rem;
  }

  .next-steps {
    width: 100%;
    text-align: left;
    margin: 1rem 0;
    padding: 1.25rem;
    background: color-mix(in srgb, var(--background) 50%, transparent);
    border-radius: 0.75rem;
    border: 1px solid color-mix(in srgb, var(--primary) 15%, transparent);
  }

  .next-steps h4 {
    color: var(--primary);
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  .next-steps ol {
    padding-left: 1.25rem;
    color: var(--text);
    list-style: none;
    counter-reset: step-counter;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .next-steps li {
    position: relative;
    padding-left: 2rem;
    counter-increment: step-counter;
    font-size: 0.9rem;
  }

  .next-steps li::before {
     content: counter(step-counter);
     position: absolute;
     left: 0;
     top: 0;
     width: 1.5rem;
     height: 1.5rem;
     background-color: var(--primary);
     color: var(--background);
     border-radius: 50%;
     display: flex;
     align-items: center;
     justify-content: center;
     font-weight: bold;
     font-size: 0.8rem;
     line-height: 1;
  }

  .share-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }

  .share-button {
    padding: 0.75rem 1.25rem;
    border-radius: 0.5rem;
    font-weight: 600;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
  }

  .share-button.twitter {
     background: #1DA1F2;
     color: white;
  }

  .share-button:hover {
    filter: brightness(110%);
    transform: translateY(-1px);
  }

  .checkbox-group {
    gap: 0.75rem;
  }
  .checkbox span, .checkbox input {
    font-size: 0.9rem;
  }

  .error-message {
    color: var(--error);
    font-size: 0.8rem;
    margin-top: 0.25rem;
  }

  input:focus-visible, select:focus-visible, button:focus-visible, .checkbox input:focus-visible + span {
     /* Use browser default focus outline or custom styles above */
     /* outline: 2px solid var(--primary); */ 
     /* outline-offset: 2px; */
     box-shadow: none; /* Remove default browser focus shadow if using custom */
  }
  .role-button:focus-visible {
      outline: 2px solid var(--primary);
      outline-offset: 2px;
  }
</style> 