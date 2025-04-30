<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import Container from '$lib/components/layout/Container.svelte';
  import Section from '$lib/components/layout/Section.svelte';

  interface ProcessStep {
    title: string;
    description: string;
    icon: string;
  }

  const processSteps: ProcessStep[] = [
    {
      title: "Build Your Robot",
      description: "Create your personal AI learning companion by customizing its appearance and personality.",
      icon: "🤖"
    },
    {
      title: "First Conversation",
      description: "Start talking with your robot using simple voice commands - it's as easy as having a chat!",
      icon: "🗣️"
    },
    {
      title: "Ask & Learn",
      description: "Ask any question about the world - your robot will explain in a way that's perfect for your age.",
      icon: "💡"
    },
    {
      title: "Grow Together",
      description: "As you learn and grow, your robot adapts its explanations to match your understanding.",
      icon: "📈"
    }
  ];

  let activeStep = 0;
</script>

<svelte:head>
  <title>How It Works - BuddyBot AI Learning Companion</title>
  <meta 
    name="description" 
    content="Discover how BuddyBot's voice-controlled AI companion makes learning fun and engaging for children through natural conversations and age-appropriate explanations."
  />
</svelte:head>

<!-- Hero Section -->
<Section spacing="xl">
  <Container>
    <div class="text-center" in:fade={{ duration: 800 }}>
      <h1 class="text-display font-semibold mb-6">
        <span class="gradient-text">Learning Made Natural</span>
      </h1>
      <p class="text-body-lg max-w-2xl mx-auto">
        Experience education through conversation with an AI companion that grows with your child.
      </p>
    </div>
  </Container>
</Section>

<!-- Process Flow Section -->
<Section spacing="xl" class_name="bg-surface">
  <Container>
    <div class="space-y-12">
      <div class="text-center">
        <h2 class="text-h2 mb-4">How BuddyBot Works</h2>
        <p class="text-body-lg max-w-2xl mx-auto">
          A simple, natural way for children to learn through conversation.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each processSteps as step, i}
          <div
            class="process-step"
            class:active={activeStep === i}
          >
            <div class="card space-y-4 text-center">
              <div class="text-4xl">{step.icon}</div>
              <div>
                <h3 class="text-h3 mb-2">{step.title}</h3>
                <p class="text-text-secondary">{step.description}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </Container>
</Section>

<!-- Features Section -->
<Section spacing="xl">
  <Container>
    <div class="space-y-12">
      <div class="text-center">
        <h2 class="text-h2 mb-4">Key Features</h2>
        <p class="text-body-lg max-w-2xl mx-auto">
          Designed to make learning engaging, safe, and effective.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="card space-y-4">
          <span class="text-4xl">🎯</span>
          <h3 class="text-h3">Age-Appropriate</h3>
          <p class="text-text-secondary">
            Content and explanations tailored to your child's age and understanding.
          </p>
        </div>

        <div class="card space-y-4">
          <span class="text-4xl">��</span>
          <h3 class="text-h3">Safe & Secure</h3>
          <p class="text-text-secondary">
            Built with child safety as our top priority, with parental controls and monitoring.
          </p>
        </div>

        <div class="card space-y-4">
          <span class="text-4xl">🌟</span>
          <h3 class="text-h3">Always Learning</h3>
          <p class="text-text-secondary">
            Our AI adapts to your child's interests and progress, providing personalized learning paths.
          </p>
        </div>
      </div>
    </div>
  </Container>
</Section>

<!-- Join Early Access -->
<Section spacing="xl" class_name="bg-surface">
  <Container max_width="lg">
    <div class="space-y-8 text-center">
      <h2 class="text-h2">Ready to Start?</h2>
      <p class="text-body-lg max-w-2xl mx-auto">
        Join our early access program to be among the first to experience BuddyBot.
      </p>
      <div class="flex justify-center">
        <a href="/waitlist" class="btn-primary">
          Join Early Access
        </a>
      </div>
    </div>
  </Container>
</Section>

<style lang="postcss">
  .gradient-text {
    @apply bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent;
  }

  .card {
    @apply bg-background-lighter rounded-xl p-6 border border-border shadow-lg transition-all duration-300;
  }

  .card:hover {
    @apply border-accent/50 shadow-accent/20;
  }

  .process-step {
    @apply transition-all duration-300;
  }

  .process-step.active .card {
    @apply border-accent/50 shadow-accent/20;
  }
</style> 