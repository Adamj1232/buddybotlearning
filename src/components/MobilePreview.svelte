<script lang="ts">
  import { onMount } from 'svelte';
  import type { VoiceState, RobotExpression } from '$lib/types/voice';
  
  export let robotName = "Astro";
  export let question = "Why do planes fly?";
  export let answer = "Planes stay up because of something called 'lift'. Their special wing shape makes air move faster over the top than the bottom, pushing the plane upward!";
  export let voiceState: VoiceState = 'idle';

  let currentExpression: RobotExpression = {
    type: 'listening',
    animation: 'pulse'
  };

  let typingText = '';
  let typingInterval: number;

  $: {
    // Update robot expression based on voice state
    if (voiceState === 'listening') {
      currentExpression = { type: 'listening', animation: 'pulse' };
    } else if (voiceState === 'processing') {
      currentExpression = { type: 'thinking', animation: 'bounce' };
    } else if (voiceState === 'responding') {
      currentExpression = { type: 'explaining', animation: 'wave' };
      startTyping();
    } else {
      currentExpression = { type: 'listening', animation: 'idle' };
      stopTyping();
    }
  }

  function startTyping() {
    let index = 0;
    typingText = '';
    clearInterval(typingInterval);
    
    typingInterval = setInterval(() => {
      if (index < answer.length) {
        typingText += answer[index];
        index++;
      } else {
        stopTyping();
      }
    }, 50);
  }

  function stopTyping() {
    clearInterval(typingInterval);
    typingText = answer;
  }

  onMount(() => {
    return () => clearInterval(typingInterval);
  });

  function toggleVoiceInput() {
    // Dispatch a custom event that parent components can listen to
    const event = new CustomEvent('voiceInputToggle');
    window.dispatchEvent(event);
  }
</script>

<div class="relative mx-auto w-[320px] h-[640px]">
  <!-- Phone Frame -->
  <div class="absolute inset-0 bg-background-lighter rounded-[3rem] shadow-xl border-8 border-border-primary overflow-hidden">
    <!-- Status Bar -->
    <div class="bg-background h-6 flex items-center justify-between px-6">
      <span class="text-xs text-text-secondary">9:41</span>
      <div class="flex space-x-2">
        <svg class="w-4 h-4 text-text-secondary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
        </svg>
        <svg class="w-4 h-4 text-text-secondary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2 9.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5.5"></path>
        </svg>
      </div>
    </div>

    <!-- Content -->
    <div class="h-full pt-6 px-4 pb-8 bg-background">
      <!-- Robot Avatar -->
      <div class="flex justify-center mb-6">
        <div class="relative">
          <div class="w-24 h-24 rounded-full bg-accent-primary shadow-glow flex items-center justify-center transition-all duration-300
            {currentExpression.animation === 'pulse' ? 'animate-pulse' : ''}
            {currentExpression.animation === 'bounce' ? 'animate-bounce' : ''}
            {currentExpression.animation === 'wave' ? 'animate-wave' : ''}"
          >
            <svg class="w-12 h-12 text-white transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {#if currentExpression.type === 'thinking'}
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              {:else if currentExpression.type === 'explaining'}
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              {:else}
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              {/if}
            </svg>
          </div>
          <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
            <div class="px-3 py-1 rounded-full bg-background-lighter border border-border-primary">
              <span class="text-sm text-text-primary">{robotName}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Chat Interface -->
      <div class="space-y-4">
        <!-- Question -->
        <div class="flex justify-end">
          <div class="bg-accent-primary rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%] transform transition-all duration-300 hover:scale-102">
            <p class="text-white">{question}</p>
          </div>
        </div>

        <!-- Answer -->
        {#if voiceState === 'responding' || typingText}
          <div class="flex justify-start">
            <div class="bg-background-lighter rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%] transform transition-all duration-300 animate-fade-in">
              <p class="text-text-primary whitespace-pre-line">{typingText}</p>
            </div>
          </div>
        {:else if voiceState === 'processing'}
          <div class="flex justify-start">
            <div class="bg-background-lighter rounded-2xl rounded-tl-sm px-4 py-2">
              <div class="flex space-x-2 animate-pulse">
                <span class="text-text-secondary">•</span>
                <span class="text-text-secondary">•</span>
                <span class="text-text-secondary">•</span>
              </div>
            </div>
          </div>
        {/if}
      </div>

      <!-- Voice Input -->
      <div class="absolute bottom-12 left-0 right-0 flex justify-center">
        <button 
          class="p-4 rounded-full bg-accent-primary shadow-glow hover:shadow-glow-hover transition-all duration-300
            {voiceState === 'listening' ? 'animate-pulse' : ''}
            {voiceState === 'processing' ? 'animate-bounce' : ''}"
          aria-label="Toggle voice input"
          on:click={toggleVoiceInput}
        >
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes wave {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-10deg); }
    75% { transform: rotate(10deg); }
  }

  .animate-fade-in {
    animation: fade-in 0.3s ease-out forwards;
  }

  .animate-wave {
    animation: wave 2s ease-in-out infinite;
  }

  .scale-102 {
    transform: scale(1.02);
  }

  .mobile-device {
    @apply w-full max-w-sm mx-auto;
  }

  .voice-input-btn {
    @apply p-3 rounded-full bg-accent-primary shadow-glow;
    transition: all 0.3s ease;
  }

  .voice-input-btn:hover {
    @apply shadow-glow-hover;
  }

  .voice-input-btn.active {
    transform: scale(1.02);
  }
</style> 