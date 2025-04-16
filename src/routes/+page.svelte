<script lang="ts">
  import { onMount } from 'svelte';

  let currentStep = 1;
  const totalSteps = 3;

  const steps = [
    {
      title: 'Choose Your Robot',
      description: 'Select from a variety of friendly robot personalities designed for different learning styles.'
    },
    {
      title: 'Customize Learning',
      description: 'Tailor the educational content and difficulty level to match your child\'s needs.'
    },
    {
      title: 'Start Learning',
      description: 'Watch your child engage with STEM subjects through interactive, AI-powered lessons.'
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
  <title>RoboLearn - AI-Powered Educational Robots for Kids</title>
  <meta name="description" content="Create personalized AI robot companions that make learning STEM subjects fun and engaging for children ages 4-12." />
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
            Learning Reimagined
          </span>
          <br />
          <span class="text-text-primary">
            with AI Robot Companions
          </span>
        </h1>
        <p class="text-xl text-text-secondary max-w-2xl mx-auto">
          Create personalized AI tutors that make STEM education engaging and fun for children ages 4-12.
        </p>
        <div class="mt-8 flex justify-center space-x-4">
          <a href="/waitlist" class="btn-primary">
            Join Waitlist
          </a>
          <a href="/demo" class="btn-secondary">
            Watch Demo
          </a>
        </div>
      </div>

      <!-- Robot Customization UI -->
      <div class="max-w-4xl mx-auto">
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
  </section>
</div> 