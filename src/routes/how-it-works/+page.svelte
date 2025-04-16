<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { inview } from 'svelte-inview';
  import RobotPreview from '../../components/RobotPreview.svelte';

  interface ProcessStep {
    title: string;
    description: string;
    icon: string;
    mobilePreview: {
      screen: string;
      action: string;
    };
  }

  interface QAPair {
    question: string;
    answers: {
      young: string;  // Ages 4-6
      middle: string; // Ages 7-9
      older: string;  // Ages 10-12
    };
    subject: 'science' | 'math' | 'technology' | 'nature';
    concepts: string[];
  }

  const processSteps: ProcessStep[] = [
    {
      title: "Build Your Robot",
      description: "Create your personal AI learning companion by customizing its appearance and personality.",
      icon: "🤖",
      mobilePreview: {
        screen: "robot-builder",
        action: "Customize your robot's features"
      }
    },
    {
      title: "First Conversation",
      description: "Start talking with your robot using simple voice commands - it's as easy as having a chat!",
      icon: "🗣️",
      mobilePreview: {
        screen: "chat-intro",
        action: "Say hello to your robot"
      }
    },
    {
      title: "Ask & Learn",
      description: "Ask any question about the world - your robot will explain in a way that's perfect for your age.",
      icon: "💡",
      mobilePreview: {
        screen: "qa-interaction",
        action: "Ask educational questions"
      }
    },
    {
      title: "Grow Together",
      description: "As you learn and grow, your robot adapts its explanations to match your understanding.",
      icon: "📈",
      mobilePreview: {
        screen: "progress-view",
        action: "Track learning progress"
      }
    }
  ];

  const sampleQAs: QAPair[] = [
    {
      question: "Why do planes fly?",
      answers: {
        young: "Planes have special wings that work like bird wings - they push against the air to lift the plane up!",
        middle: "Planes fly because their wings are shaped to create lift. As they move forward, air moving over and under the wings helps push the plane up into the sky.",
        older: "Aircraft achieve flight through the principle of lift, created by their wing design (airfoils). The shape causes air to move faster over the top of the wing than underneath, creating a pressure difference that generates upward force."
      },
      subject: "science",
      concepts: ["Aerodynamics", "Physics", "Engineering"]
    },
    {
      question: "How do plants make their own food?",
      answers: {
        young: "Plants use sunlight, water, and air to make their food - it's like they have tiny kitchens in their leaves!",
        middle: "Plants use a process called photosynthesis to turn sunlight, water, and carbon dioxide into sugar and oxygen.",
        older: "Through photosynthesis, plants convert light energy into chemical energy. Chlorophyll captures sunlight, which powers the conversion of CO2 and H2O into glucose and O2."
      },
      subject: "nature",
      concepts: ["Photosynthesis", "Biology", "Energy Conversion"]
    },
    {
      question: "What is multiplication?",
      answers: {
        young: "Multiplication is like adding the same number many times - like counting groups of toys!",
        middle: "Multiplication helps us find the total when we have equal groups of things, like 4 groups of 3 equals 12.",
        older: "Multiplication is a mathematical operation that combines groups of equal size to find their sum, forming the basis for concepts like area, scaling, and rates."
      },
      subject: "math",
      concepts: ["Arithmetic", "Groups", "Patterns"]
    },
    {
      question: "How does a computer think?",
      answers: {
        young: "Computers follow instructions like a recipe, using special codes to know what to do!",
        middle: "Computers process information using binary code (1s and 0s) and follow step-by-step instructions called programs.",
        older: "Computers process data through binary operations in their CPU, executing complex algorithms through logical gates and mathematical operations stored in programs."
      },
      subject: "technology",
      concepts: ["Computing", "Programming", "Logic"]
    }
  ];

  let activeStep = 0;
  let selectedAgeGroup: 'young' | 'middle' | 'older' = 'middle';
  let activeSubject: 'all' | 'science' | 'math' | 'technology' | 'nature' = 'all';

  function handleStepInView(step: number) {
    activeStep = step;
  }
</script>

<svelte:head>
  <title>How It Works - RoboLearn AI Learning Companion</title>
  <meta name="description" content="Discover how RoboLearn's voice-controlled AI companion makes learning fun and engaging for children through natural conversations and age-appropriate explanations." />
</svelte:head>

<div class="min-h-screen bg-background">
  <!-- Hero Section -->
  <section class="relative py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center" in:fade={{ duration: 800 }}>
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          <span class="gradient-text">Learning Made Natural</span>
        </h1>
        <p class="text-xl text-text-secondary max-w-2xl mx-auto">
          Experience education through conversation with an AI companion that grows with your child.
        </p>
      </div>
    </div>
  </section>

  <!-- Process Flow Section -->
  <section class="relative py-16 bg-background-light">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Steps Navigation -->
        <div class="space-y-8">
          {#each processSteps as step, i}
            <div
              class="process-step"
              class:active={activeStep === i}
              use:inview={{
                unobserveOnEnter: false,
                rootMargin: '-50% 0px -50% 0px'
              }}
              on:inview_enter={() => handleStepInView(i)}
            >
              <div class="flex items-start space-x-4 p-6 rounded-lg bg-background transition-all duration-300 hover:bg-background-lighter">
                <div class="text-4xl">{step.icon}</div>
                <div>
                  <h3 class="text-xl font-bold text-cyan-400 mb-2">{step.title}</h3>
                  <p class="text-text-secondary">{step.description}</p>
                </div>
              </div>
            </div>
          {/each}
        </div>

        <!-- Mobile Preview -->
        <div class="sticky top-24 hidden lg:block">
          <div class="mobile-frame">
            <RobotPreview
              step={activeStep === 0 ? 'builder' : 
                   activeStep === 1 ? 'chat' :
                   activeStep === 2 ? 'qa' : 'progress'}
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Voice Interaction Demo -->
  <section class="relative py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">
        <span class="gradient-text">Natural Learning Through Conversation</span>
      </h2>

      <!-- Subject Filters -->
      <div class="flex justify-center space-x-4 mb-8">
        <button
          class="btn-secondary {activeSubject === 'all' ? 'bg-cyan-400/20' : ''}"
          on:click={() => activeSubject = 'all'}
        >
          All Topics
        </button>
        <button
          class="btn-secondary {activeSubject === 'science' ? 'bg-cyan-400/20' : ''}"
          on:click={() => activeSubject = 'science'}
        >
          Science
        </button>
        <button
          class="btn-secondary {activeSubject === 'math' ? 'bg-cyan-400/20' : ''}"
          on:click={() => activeSubject = 'math'}
        >
          Math
        </button>
        <button
          class="btn-secondary {activeSubject === 'technology' ? 'bg-cyan-400/20' : ''}"
          on:click={() => activeSubject = 'technology'}
        >
          Technology
        </button>
        <button
          class="btn-secondary {activeSubject === 'nature' ? 'bg-cyan-400/20' : ''}"
          on:click={() => activeSubject = 'nature'}
        >
          Nature
        </button>
      </div>

      <!-- Age Group Selector -->
      <div class="flex justify-center space-x-4 mb-12">
        <button
          class="btn-secondary {selectedAgeGroup === 'young' ? 'bg-cyan-400/20' : ''}"
          on:click={() => selectedAgeGroup = 'young'}
        >
          Ages 4-6
        </button>
        <button
          class="btn-secondary {selectedAgeGroup === 'middle' ? 'bg-cyan-400/20' : ''}"
          on:click={() => selectedAgeGroup = 'middle'}
        >
          Ages 7-9
        </button>
        <button
          class="btn-secondary {selectedAgeGroup === 'older' ? 'bg-cyan-400/20' : ''}"
          on:click={() => selectedAgeGroup = 'older'}
        >
          Ages 10-12
        </button>
      </div>

      <!-- Q&A Examples -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {#each sampleQAs.filter(qa => activeSubject === 'all' || qa.subject === activeSubject) as qa (qa.question)}
          <div 
            class="qa-card bg-background-light p-6 rounded-lg transform transition-all duration-300 hover:scale-105"
            in:fly={{ y: 20, duration: 400 }}
            out:fade
          >
            <div class="subject-indicator mb-2">
              <span class="text-sm font-medium text-cyan-400 uppercase">{qa.subject}</span>
            </div>
            <h4 class="text-lg font-bold text-cyan-400 mb-4">{qa.question}</h4>
            <p class="text-text-secondary mb-4">{qa.answers[selectedAgeGroup]}</p>
            <div class="flex flex-wrap gap-2">
              {#each qa.concepts as concept}
                <span class="concept-tag">{concept}</span>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Safety Section -->
  <section class="relative py-16 bg-background-light">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">
        <span class="gradient-text">Safe and Private Learning</span>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="safety-card">
          <div class="text-4xl mb-4">🔒</div>
          <h3 class="text-xl font-bold text-cyan-400 mb-2">Age-Appropriate Content</h3>
          <p class="text-text-secondary">All responses are tailored to your child's age and development stage.</p>
        </div>
        <div class="safety-card">
          <div class="text-4xl mb-4">👁️</div>
          <h3 class="text-xl font-bold text-cyan-400 mb-2">Parental Oversight</h3>
          <p class="text-text-secondary">Monitor your child's learning journey and customize safety settings.</p>
        </div>
        <div class="safety-card">
          <div class="text-4xl mb-4">🛡️</div>
          <h3 class="text-xl font-bold text-cyan-400 mb-2">Privacy Protected</h3>
          <p class="text-text-secondary">Your child's data is encrypted and never shared with third parties.</p>
        </div>
      </div>
    </div>
  </section>
</div>

<style lang="postcss">
  .process-step {
    @apply transition-all duration-300;
  }

  .process-step.active {
    @apply scale-105;
  }

  .concept-tag {
    @apply bg-background px-3 py-1 rounded-full text-sm text-cyan-400;
  }

  .safety-card {
    @apply bg-background p-6 rounded-lg text-center transition-transform hover:scale-105;
  }

  .gradient-text {
    @apply bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent;
  }

  .mobile-frame {
    @apply transform transition-all duration-500;
  }

  :global(.inview-section-active) .mobile-frame {
    @apply scale-105;
  }
</style> 