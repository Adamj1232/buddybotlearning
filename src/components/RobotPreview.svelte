<script lang="ts">
  export let step: 'builder' | 'chat' | 'qa' | 'progress' = 'builder';
  export let eyeStyle: 'Round' | 'Square' | 'Visor' | 'Scanner' | 'Alien' | 'Optical' = 'Scanner';
  export let eyeColor: string = '#00D1FF';
  export let mouthStyle: 'Smile' | 'Grid' | 'Line' | 'Speaker' | 'Vent' | 'Mask' = 'Vent';
  export let robotColor: string = '#4ade80'; // Default green color from screenshots

  let currentStep = 1;
  const totalSteps = 7;

  function getStepDots() {
    return Array(totalSteps).fill(null);
  }
</script>

<div class="mobile-device">
  <div class="mobile-frame bg-background-dark rounded-3xl p-4 border-2 border-border-primary overflow-hidden">
    <!-- Header -->
    <div class="text-center mb-6">
      <h3 class="text-xl font-bold text-amber-400">
        {#if step === 'builder'}
          Build Your Robot Assistant
        {:else if step === 'chat'}
          Chat with Estes
        {:else if step === 'qa'}
          Ask Anything
        {:else}
          Learning Progress
        {/if}
      </h3>
    </div>

    <!-- Robot Preview -->
    <div class="relative aspect-square mb-6 bg-background rounded-lg p-4">
      <div class="robot-face" style="--robot-color: {robotColor}">
        <!-- Robot Face -->
        <div class="robot-head">
          <!-- Eyes -->
          <div class="eyes" style="--eye-color: {eyeColor}">
            {#if eyeStyle === 'Scanner'}
              <div class="scanner-eye"></div>
            {:else if eyeStyle === 'Round'}
              <div class="round-eyes"></div>
            {:else if eyeStyle === 'Square'}
              <div class="square-eyes"></div>
            {/if}
          </div>

          <!-- Mouth -->
          <div class="mouth">
            {#if mouthStyle === 'Vent'}
              <div class="vent-mouth"></div>
            {:else if mouthStyle === 'Grid'}
              <div class="grid-mouth"></div>
            {:else if mouthStyle === 'Line'}
              <div class="line-mouth"></div>
            {/if}
          </div>
        </div>
      </div>
    </div>

    <!-- Step Dots -->
    {#if step === 'builder'}
      <div class="flex justify-center space-x-2 mb-6">
        {#each getStepDots() as _, i}
          <div class="w-2 h-2 rounded-full {i + 1 === currentStep ? 'bg-cyan-400' : 'bg-gray-600'}"></div>
        {/each}
      </div>

      <!-- Customization Options -->
      <div class="space-y-6">
        {#if currentStep === 1}
          <div>
            <h4 class="text-cyan-400 mb-2">Eyes</h4>
            <p class="text-text-secondary text-sm mb-4">Choose eye style and color</p>
            <div class="grid grid-cols-3 gap-2">
              <button class="option-btn {eyeStyle === 'Round' ? 'active' : ''}">Round</button>
              <button class="option-btn {eyeStyle === 'Square' ? 'active' : ''}">Square</button>
              <button class="option-btn {eyeStyle === 'Scanner' ? 'active' : ''}">Scanner</button>
            </div>
          </div>
        {:else if currentStep === 2}
          <div>
            <h4 class="text-cyan-400 mb-2">Mouth</h4>
            <p class="text-text-secondary text-sm mb-4">Pick a mouth style and animation</p>
            <div class="grid grid-cols-3 gap-2">
              <button class="option-btn {mouthStyle === 'Grid' ? 'active' : ''}">Grid</button>
              <button class="option-btn {mouthStyle === 'Vent' ? 'active' : ''}">Vent</button>
              <button class="option-btn {mouthStyle === 'Line' ? 'active' : ''}">Line</button>
            </div>
          </div>
        {/if}
      </div>

      <!-- Navigation -->
      <div class="flex justify-between mt-6">
        <button class="btn-secondary px-6" disabled={currentStep === 1}>Back</button>
        <button class="btn-primary px-6">Next</button>
      </div>
    {:else if step === 'chat'}
      <div class="chat-interface space-y-4">
        <div class="message bot-message">
          Hi! I'm Estes. Ask me any educational question!
        </div>
        <div class="input-area flex space-x-2">
          <input type="text" class="flex-1 bg-background rounded-lg px-4 py-2" placeholder="Type your question...">
          <button class="btn-primary p-2" aria-label="Start voice input">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </button>
        </div>
      </div>
    {/if}
  </div>
</div>

<style lang="postcss">
  .mobile-device {
    @apply w-full max-w-sm mx-auto;
  }

  .mobile-frame {
    @apply aspect-[9/19];
  }

  .robot-face {
    @apply w-full h-full bg-current rounded-lg grid place-items-center;
    color: var(--robot-color);
  }

  .robot-head {
    @apply w-4/5 h-4/5 relative;
  }

  .eyes {
    @apply absolute top-1/4 w-full flex justify-center space-x-4;
  }

  .scanner-eye {
    @apply w-24 h-8 bg-current rounded-full relative overflow-hidden;
    background: var(--eye-color);
  }

  .scanner-eye::after {
    content: '';
    @apply absolute w-4 h-full bg-purple-500 left-0;
    animation: scan 2s infinite;
  }

  .round-eyes {
    @apply w-8 h-8 bg-current rounded-full;
    background: var(--eye-color);
  }

  .square-eyes {
    @apply w-8 h-8 bg-current;
    background: var(--eye-color);
  }

  .mouth {
    @apply absolute bottom-1/4 w-full flex justify-center;
  }

  .vent-mouth {
    @apply w-16 h-6 bg-gray-800 rounded-sm grid grid-cols-3 gap-1 p-1;
  }

  .grid-mouth {
    @apply w-16 h-6 bg-gray-800 rounded-sm grid grid-cols-4 gap-px p-px;
  }

  .line-mouth {
    @apply w-16 h-2 bg-gray-800 rounded-full;
  }

  .option-btn {
    @apply px-4 py-2 rounded-lg bg-background text-text-secondary transition-colors hover:bg-background-lighter;
  }

  .option-btn.active {
    @apply bg-cyan-400 text-background;
  }

  .chat-interface {
    @apply h-full flex flex-col;
  }

  .message {
    @apply px-4 py-2 rounded-lg max-w-[80%];
  }

  .bot-message {
    @apply bg-background text-text-secondary self-start;
  }

  @keyframes scan {
    0% { left: 0; }
    100% { left: 100%; }
  }
</style> 