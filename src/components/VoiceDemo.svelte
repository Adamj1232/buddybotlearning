<script lang="ts">
  import { onMount } from 'svelte';
  import type { VoiceState, QAExample } from '$lib/types/voice';
  
  let voiceState: VoiceState = 'idle';
  let pulseSize = 'scale-100';
  let currentQuestion = '';
  let currentAnswer = '';
  let animationFrame: number;
  
  const sampleQA: QAExample[] = [
    {
      id: '1',
      question: "Why is the sky blue?",
      answer: "The sky looks blue because of the way sunlight bounces off tiny particles in the air. This is called 'scattering' - blue light scatters more than other colors!",
      category: 'physics',
      ageRange: '7-9'
    },
    {
      id: '2',
      question: "How do planes stay in the air?",
      answer: "Planes stay up because of something called 'lift'. Their special wing shape makes air move faster over the top than the bottom, pushing the plane upward!",
      category: 'physics',
      ageRange: '4-6'
    },
    {
      id: '3',
      question: "Why do stars twinkle?",
      answer: "Stars appear to twinkle because their light travels through Earth's moving atmosphere. It's like looking at a light through rippling water!",
      category: 'space',
      ageRange: '7-9'
    }
  ];

  let audioContext: AudioContext;
  let analyser: AnalyserNode;
  let dataArray: Uint8Array;
  let isSimulating = false;

  onMount(() => {
    audioContext = new AudioContext();
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 32;
    dataArray = new Uint8Array(analyser.frequencyBinCount);
  });

  function simulateAudioInput() {
    if (!isSimulating) return;
    analyser.getByteFrequencyData(dataArray);
    
    // Simulate audio input levels
    const level = (Math.sin(Date.now() / 200) + 1) / 2;
    pulseSize = `scale-${100 + Math.floor(level * 20)}`;
    
    animationFrame = requestAnimationFrame(simulateAudioInput);
  }

  async function handleVoiceInteraction() {
    if (voiceState !== 'idle') {
      voiceState = 'idle';
      isSimulating = false;
      cancelAnimationFrame(animationFrame);
      currentQuestion = '';
      currentAnswer = '';
      return;
    }

    // Start listening simulation
    voiceState = 'listening';
    isSimulating = true;
    simulateAudioInput();

    // After 2 seconds, show a random question
    await new Promise(resolve => setTimeout(resolve, 2000));
    const randomQA = sampleQA[Math.floor(Math.random() * sampleQA.length)];
    currentQuestion = randomQA.question;
    voiceState = 'processing';
    isSimulating = false;
    cancelAnimationFrame(animationFrame);

    // After 1 second, show the answer
    await new Promise(resolve => setTimeout(resolve, 1000));
    voiceState = 'responding';
    currentAnswer = randomQA.answer;

    // Reset after 5 seconds
    setTimeout(() => {
      if (voiceState === 'responding') {
        voiceState = 'idle';
        currentQuestion = '';
        currentAnswer = '';
      }
    }, 5000);
  }
</script>

<div class="card overflow-hidden">
  <div class="text-center mb-8">
    <h3 class="text-xl font-bold mb-2">Try Voice Interaction</h3>
    <p class="text-text-secondary">Ask any question about the world</p>
  </div>

  <!-- Voice Interface -->
  <div class="relative flex flex-col items-center justify-center p-8">
    <button
      on:click={handleVoiceInteraction}
      class="relative group"
      aria-label="Toggle voice recording"
      aria-pressed={voiceState !== 'idle'}
    >
      <!-- Outer Ring -->
      <div class="absolute inset-0 rounded-full bg-accent-primary/20 group-hover:bg-accent-primary/30 transition-all duration-300 {voiceState === 'listening' ? 'animate-ping' : ''}"></div>
      
      <!-- Middle Ring -->
      <div class="absolute inset-1 rounded-full bg-accent-primary/10 transition-all duration-300 {voiceState === 'processing' ? 'animate-pulse' : ''}"></div>
      
      <!-- Inner Circle -->
      <div class="relative p-6 rounded-full bg-accent-primary shadow-glow transition-all duration-300 {pulseSize} hover:shadow-glow-hover
        {voiceState === 'processing' ? 'animate-pulse' : ''}
        {voiceState === 'responding' ? 'bg-success' : ''}"
      >
        <svg class="w-8 h-8 text-white transition-transform duration-300 {voiceState === 'listening' ? 'scale-110' : ''}" 
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          {#if voiceState === 'processing'}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          {:else if voiceState === 'responding'}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          {/if}
        </svg>
      </div>
    </button>

    <!-- Interaction Display -->
    <div class="mt-8 w-full max-w-md space-y-4">
      {#if currentQuestion}
        <div class="bg-background p-4 rounded-lg border border-border-primary transform transition-all duration-300 {voiceState === 'processing' ? 'scale-102 border-accent-primary' : ''}"
          role="status" aria-live="polite"
        >
          <p class="text-text-primary text-center">{currentQuestion}</p>
        </div>
      {/if}

      {#if currentAnswer}
        <div class="bg-background-lighter p-4 rounded-lg border border-border-primary transform transition-all duration-300 animate-fade-in"
          role="status" aria-live="polite"
        >
          <p class="text-text-primary text-center">{currentAnswer}</p>
        </div>
      {/if}

      {#if voiceState === 'listening'}
        <p class="text-text-secondary animate-pulse text-center" aria-live="polite">
          Listening... Speak your question
        </p>
      {:else if voiceState === 'processing'}
        <p class="text-text-secondary animate-pulse text-center" aria-live="polite">
          Processing your question...
        </p>
      {:else if voiceState === 'idle' && !currentQuestion}
        <p class="text-text-secondary text-center">
          Tap the microphone to ask a question
        </p>
      {/if}
    </div>
  </div>
</div>

<style>
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .animate-fade-in {
    animation: fade-in 0.3s ease-out forwards;
  }

  .scale-102 {
    transform: scale(1.02);
  }
</style> 