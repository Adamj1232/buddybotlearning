<!-- Voice interaction component with robot expressions and chat interface -->
<script lang="ts">
  import { onMount } from 'svelte';
  import type { VoiceState, RobotExpression } from '$lib/types/voice';

  interface SpeechRecognitionResult {
    transcript: string;
    confidence: number;
  }

  interface SpeechRecognitionResultList {
    readonly length: number;
    item(index: number): SpeechRecognitionResult[];
    [index: number]: SpeechRecognitionResult[];
  }

  interface SpeechRecognitionEvent extends Event {
    readonly results: SpeechRecognitionResultList;
  }

  interface SpeechRecognition extends EventTarget {
    continuous: boolean;
    interimResults: boolean;
    onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null;
    onstart: ((this: SpeechRecognition, ev: Event) => any) | null;
    onend: ((this: SpeechRecognition, ev: Event) => any) | null;
    start(): void;
    stop(): void;
  }

  type SpeechRecognitionCtor = new () => SpeechRecognition;

  // Declare these as variables instead of using declare global
  const globalSpeechRecognition = (typeof window !== 'undefined' ? 
    (window as any).SpeechRecognition as SpeechRecognitionCtor : undefined);
  const globalWebkitSpeechRecognition = (typeof window !== 'undefined' ? 
    (window as any).webkitSpeechRecognition as SpeechRecognitionCtor : undefined);

  let recognition: SpeechRecognition | null = null;
  const SpeechRecognitionImpl = globalSpeechRecognition || globalWebkitSpeechRecognition;
  
  if (typeof window !== 'undefined' && SpeechRecognitionImpl) {
    recognition = new SpeechRecognitionImpl();
    if (recognition) {
      recognition.continuous = false;
      recognition.interimResults = false;
    }
  }

  let voiceState: 'idle' | 'listening' | 'processing' | 'responding' = 'idle';
  let utterance: SpeechSynthesisUtterance;
  let userQuestion = '';
  let robotAnswer = '';
  let robotExpression = {
    type: 'idle' as 'idle' | 'listening' | 'thinking' | 'explaining',
    animation: 'idle' as 'idle' | 'bounce' | 'pulse' | 'wave'
  };

  onMount(() => {
    utterance = new SpeechSynthesisUtterance();
    utterance.onend = () => {
      voiceState = 'idle';
      robotExpression = { type: 'listening', animation: 'idle' };
    };
  });

  function startListening() {
    if (!recognition) return;
    recognition.start();
    voiceState = 'listening';
    robotExpression = { type: 'listening', animation: 'bounce' };
  }

  function stopListening() {
    if (!recognition) return;
    recognition.stop();
    voiceState = 'processing';
    robotExpression = { type: 'thinking', animation: 'pulse' };
  }

  if (recognition) {
    recognition.onstart = () => {
      voiceState = 'listening';
      robotExpression = { type: 'listening', animation: 'bounce' };
    };

    recognition.onend = () => {
      if (voiceState === 'listening') {
        voiceState = 'idle';
        robotExpression = { type: 'idle', animation: 'idle' };
      }
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const last = event.results.length - 1;
      userQuestion = event.results[last][0].transcript;
      stopListening();
    };
  }

  async function processUserInput(input: string) {
    robotAnswer = `I heard you say: ${input}`;
    voiceState = 'responding';
    robotExpression = { type: 'explaining', animation: 'wave' };
    utterance.text = robotAnswer;
    window.speechSynthesis.speak(utterance);
  }
</script>

<div class="voice-interaction">
  <button
    class="voice-button"
    on:click={startListening}
    disabled={voiceState !== 'idle'}
  >
    <div class="robot-face" class:listening={voiceState === 'listening'}>
      <div class="robot-expression {robotExpression.type}" class:animate={robotExpression.animation !== 'idle'}>
        {#if robotExpression.type === 'listening'}
          🎧
        {:else if robotExpression.type === 'thinking'}
          🤔
        {:else if robotExpression.type === 'explaining'}
          🗣️
        {/if}
      </div>
    </div>
  </button>

  {#if userQuestion}
    <div class="conversation">
      <p class="user-question">{userQuestion}</p>
      {#if robotAnswer}
        <p class="robot-answer">{robotAnswer}</p>
      {/if}
    </div>
  {/if}
</div>

<style>
  .voice-interaction {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .voice-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  .voice-button:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  .robot-face {
    font-size: 3rem;
    transition: transform 0.3s ease;
  }

  .robot-face.listening {
    animation: pulse 1.5s infinite;
  }

  .robot-expression {
    transition: transform 0.3s ease;
  }

  .robot-expression.animate {
    animation: bounce 1s infinite;
  }

  .conversation {
    max-width: 400px;
    text-align: center;
  }

  .user-question {
    color: #666;
    font-style: italic;
  }

  .robot-answer {
    color: #333;
    font-weight: 500;
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
</style> 