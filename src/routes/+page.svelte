<script lang="ts">
  import { onMount } from 'svelte';
  import VoiceDemo from '../components/VoiceDemo.svelte';
  import MobilePreview from '../components/MobilePreview.svelte';

  let currentStep = 1;
  const totalSteps = 3;

  const steps = [
    {
      title: 'Ask Anything',
      description: 'Your child can ask any question about the world, from science to history to "why is the sky blue?"'
    },
    {
      title: 'Voice-First Learning',
      description: 'Natural conversations with a friendly AI companion who adapts to your child\'s interests and pace.'
    },
    {
      title: 'Safe & Private',
      description: 'Built with children\'s safety in mind, featuring age-appropriate content and privacy controls.'
    }
  ];

  function nextStep() {
    if (currentStep < totalSteps) {
      currentStep++;
    }
  }

  function prevStep() {
    if (currentStep > 1) {
      currentStep--;
    }
  }
</script>

<svelte:head>
  <title>RoboLearn - Voice-Controlled AI Learning Companion for Kids</title>
  <meta name="description" content="Let your child explore the world through natural conversations with a safe, engaging AI companion. Perfect for ages 4-12." />
</svelte:head>

<div class="relative overflow-hidden">
  <!-- Hero Section -->
  <section class="relative pt-24 pb-32">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-b from-background via-background to-background-light opacity-90"></div>
    
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          <span class="gradient-text">
            Learning Through
          </span>
          <br />
          <span class="text-text-primary">
            Natural Conversation
          </span>
        </h1>
        <p class="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
          An AI companion that answers your child's questions about the world through engaging voice conversations.
        </p>
        
        <!-- Enhanced CTA Section -->
        <div class="max-w-xl mx-auto mb-8">
          <div class="bg-background-lighter/50 backdrop-blur-sm rounded-xl p-6 border border-border-primary">
            <p class="text-cyan-400 font-semibold mb-4">🚀 Early Access Program</p>
            <div class="flex justify-center space-x-2 mb-4">
              <div class="flex items-center space-x-2 text-text-secondary">
                <span class="inline-block w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                <span class="text-sm">247 spots remaining</span>
              </div>
              <span class="text-text-secondary">•</span>
              <div class="text-text-secondary text-sm">
                1,753 parents joined
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="/waitlist" class="btn-primary group relative overflow-hidden">
            <div class="absolute inset-0 bg-cyan-400/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <span class="relative flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Reserve Early Access
            </span>
          </a>
          <a href="/how-it-works" class="btn-secondary">
            See How It Works
          </a>
        </div>

        <!-- Benefits -->
        <div class="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-sm">
          <div class="flex items-center justify-center space-x-2 text-text-secondary">
            <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>3 months free access</span>
          </div>
          <div class="flex items-center justify-center space-x-2 text-text-secondary">
            <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span>Priority features access</span>
          </div>
          <div class="flex items-center justify-center space-x-2 text-text-secondary">
            <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span>Exclusive STEM activities</span>
          </div>
        </div>
      </div>

      <!-- App Preview -->
      <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Mobile Preview -->
        <div class="order-2 lg:order-1">
          <MobilePreview robotName="Astro" question="Why do planes fly?" isAnswering={true} />
        </div>

        <!-- Feature Steps -->
        <div class="order-1 lg:order-2">
          <div class="card">
            <!-- Progress indicator -->
            <div class="flex justify-center mb-8">
              {#each Array(totalSteps) as _, i}
                <div class="flex items-center">
                  <div class="progress-dot {i + 1 <= currentStep ? 'progress-dot-active' : 'progress-dot-inactive'}"></div>
                  {#if i < totalSteps - 1}
                    <div class="progress-line {i + 1 < currentStep ? 'progress-line-active' : 'progress-line-inactive'}"></div>
                  {/if}
                </div>
              {/each}
            </div>

            <!-- Step content -->
            <div class="text-center mb-8">
              <h2 class="text-2xl font-bold mb-4">
                {steps[currentStep - 1].title}
              </h2>
              <p class="text-text-secondary">
                {steps[currentStep - 1].description}
              </p>
            </div>

            <!-- Navigation buttons -->
            <div class="flex justify-between">
              <button
                class="btn-secondary {currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''}"
                on:click={prevStep}
                disabled={currentStep === 1}
              >
                Back
              </button>
              <button
                class="btn-primary {currentStep === totalSteps ? 'opacity-50 cursor-not-allowed' : ''}"
                on:click={nextStep}
                disabled={currentStep === totalSteps}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Voice Demo Section -->
      <div class="mt-24 max-w-2xl mx-auto">
        <VoiceDemo />
      </div>
    </div>
  </section>
</div> 