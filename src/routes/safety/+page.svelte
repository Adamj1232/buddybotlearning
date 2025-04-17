<script lang="ts">
  import { inview } from 'svelte-inview';
  import { onMount } from 'svelte';
  import MobilePreview from '../../components/MobilePreview.svelte';
  import { fade, fly } from 'svelte/transition';

  let activeSection = 'content-safety';
  let activeFaq = '';
  let showPledge = false;
  let feedbackRating = 0;

  const safetyPillars = [
    {
      id: 'content-safety',
      title: 'Content Safety',
      icon: '🛡️',
      description: 'Multi-layer content filtering and age-appropriate responses'
    },
    {
      id: 'privacy',
      title: 'Privacy Protection',
      icon: '🔒',
      description: 'COPPA-compliant data handling with zero personal data collection'
    },
    {
      id: 'parental-controls',
      title: 'Parental Controls',
      icon: '👥',
      description: 'Complete oversight and customization of learning experience'
    },
    {
      id: 'technical-safety',
      title: 'Technical Security',
      icon: '🔐',
      description: 'End-to-end encryption and secure infrastructure'
    }
  ] as const;

  const contentFilters = [
    {
      level: 'Age Appropriateness',
      description: 'Content automatically adjusted to child\'s age and comprehension level',
      example: {
        before: "Black holes are regions where gravity is so strong that nothing can escape, not even light. They form when massive stars die and collapse.",
        after: "A black hole is like a super strong vacuum in space that pulls everything nearby into it - even light can't get away!"
      }
    },
    {
      level: 'Topic Filtering',
      description: 'Automatic detection and filtering of inappropriate or sensitive topics',
      example: {
        input: "Why do people fight in wars?",
        response: "Let's talk about how people work together to solve problems peacefully instead. Did you know there are amazing organizations that help people around the world?"
      }
    },
    {
      level: 'Language Safety',
      description: 'Ensures all responses use appropriate, child-friendly language',
      example: {
        before: "The chemical reaction creates an explosive force...",
        after: "When we mix these ingredients, they create lots of tiny bubbles..."
      }
    }
  ];

  const privacyFeatures = [
    {
      title: 'No Personal Data Collection',
      description: 'We never collect or store personal information about children',
      icon: '📝'
    },
    {
      title: 'Local Processing',
      description: 'Voice recognition happens directly on device when possible',
      icon: '📱'
    },
    {
      title: 'Secure Communication',
      description: 'All data transmission is encrypted end-to-end',
      icon: '🔒'
    },
    {
      title: 'Data Minimization',
      description: 'We only store what\'s necessary for learning progress',
      icon: '📊'
    }
  ];

  const parentalControls = [
    {
      title: 'Activity Monitoring',
      description: 'View your child\'s learning journey and interests',
      features: ['Real-time activity feed', 'Topic exploration history', 'Time spent learning']
    },
    {
      title: 'Content Controls',
      description: 'Customize what your child can explore',
      features: ['Topic restrictions', 'Difficulty levels', 'Language settings']
    },
    {
      title: 'Time Management',
      description: 'Set healthy boundaries for learning sessions',
      features: ['Daily time limits', 'Break reminders', 'Schedule settings']
    }
  ];

  const safetyFaqs = [
    {
      id: 'data-collection',
      question: 'What data do you collect about my child?',
      answer: 'We maintain a strict minimal data collection policy. We only store learning progress, interests, and customization preferences. No personal information, location data, or unnecessary details are ever collected or stored.'
    },
    {
      id: 'content-filtering',
      question: 'How do you ensure content is age-appropriate?',
      answer: 'Our multi-layer content filtering system uses advanced AI to adapt explanations to your child\'s age and understanding level. All responses are filtered for inappropriate content and simplified to match their comprehension ability.'
    },
    {
      id: 'parental-access',
      question: 'How can I monitor my child\'s learning?',
      answer: 'Parents have access to a comprehensive dashboard showing learning activities, topics explored, and time spent learning. You can review conversations, set boundaries, and customize the learning experience.'
    }
  ];

  // Add trust badges
  const trustBadges = [
    {
      title: 'COPPA Certified',
      icon: '✓',
      description: 'Fully compliant with children\'s privacy protection standards'
    },
    {
      title: 'SSL Secured',
      icon: '🔒',
      description: 'Bank-level encryption for all data transmission'
    },
    {
      title: 'AI Ethics Certified',
      icon: '🤖',
      description: 'Adheres to strict AI safety and ethics guidelines'
    },
    {
      title: 'Parent Approved',
      icon: '👨‍👩‍👧‍👦',
      description: '95% parent satisfaction rating in beta testing'
    }
  ];

  // Safety pledge items
  const safetyPledge = [
    "We will never collect personal information about children without explicit parental consent",
    "All content will be age-appropriate and educational",
    "Parents have complete control and oversight of their child's learning journey",
    "We maintain the highest standards of data security and privacy",
    "Our AI is designed to be child-safe and ethically responsible"
  ];

  function handleIntersect(e: CustomEvent<{ inView: boolean; entry: IntersectionObserverEntry }>) {
    if (e.detail.inView) {
      const target = e.detail.entry.target as HTMLElement;
      target.classList.add('is-visible');
    }
  }

  onMount(() => {
    setTimeout(() => {
      showPledge = true;
    }, 1500);
  });

  function handleFeedback(rating: number) {
    feedbackRating = rating;
    // In a real implementation, this would send the feedback to your backend
  }

  function downloadSafetyInfo() {
    // In a real implementation, this would trigger a PDF download
    alert('Safety information sheet download starting...');
  }
</script>

<div class="min-h-screen bg-[#171923] text-white">
  <!-- Hero Section -->
  <section class="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <!-- Main Hero Content -->
      <div class="text-center mb-16" use:inview on:inview_change={handleIntersect}>
        <h1 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00D1FF] to-[#73CBFF] bg-clip-text text-transparent">
          Safety First, Always
        </h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          Your child's safety is our top priority. Discover our comprehensive approach to creating a secure, nurturing learning environment.
        </p>
        
        <!-- Trust Badges -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {#each trustBadges as badge}
            <div 
              class="bg-[#1E2130] p-4 rounded-xl border border-[#00D1FF]/20 transform hover:scale-105 transition-all duration-300"
              use:inview
              on:inview_change={handleIntersect}
            >
              <span class="text-2xl text-[#00D1FF] mb-2 block">{badge.icon}</span>
              <h3 class="font-semibold text-[#00D1FF] text-sm mb-1">{badge.title}</h3>
              <p class="text-xs text-gray-300">{badge.description}</p>
            </div>
          {/each}
        </div>
      </div>

      <!-- Safety Pledge Animation -->
      {#if showPledge}
        <div class="absolute inset-0 pointer-events-none">
          <div class="relative h-full max-w-2xl mx-auto">
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
              {#each safetyPledge as pledge, i}
                <div
                  in:fly={{ y: 20, delay: i * 200 }}
                  out:fade
                  class="mb-4 text-sm md:text-base text-[#00D1FF] opacity-0 transform translate-y-4"
                  style="animation: fadeInUp 0.6s {i * 0.2}s forwards"
                >
                  <span class="inline-block w-6 h-6 rounded-full border-2 border-[#00D1FF] text-[#00D1FF] mr-2 text-center leading-5">
                    ✓
                  </span>
                  {pledge}
                </div>
              {/each}
            </div>
          </div>
        </div>
      {/if}
    </div>
  </section>

  <!-- Safety Pillars -->
  <section class="py-16 px-4 md:px-8 lg:px-16 bg-[#1E2130]">
    <div class="max-w-7xl mx-auto">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each safetyPillars as pillar}
          <button
            class="bg-[#171923] p-6 rounded-xl border border-[#00D1FF]/20 hover:border-[#00D1FF] transition-all duration-300
                   {activeSection === pillar.id ? 'border-[#00D1FF] shadow-glow' : ''}"
            on:click={() => activeSection = pillar.id}
          >
            <span class="text-3xl mb-4 block">{pillar.icon}</span>
            <h3 class="text-lg font-semibold text-[#00D1FF] mb-2">{pillar.title}</h3>
            <p class="text-gray-300 text-sm">{pillar.description}</p>
          </button>
        {/each}
      </div>
    </div>
  </section>

  <!-- Content Safety Section -->
  <section class="py-16 px-4 md:px-8 lg:px-16" class:hidden={activeSection !== 'content-safety'}>
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold mb-8">Content Safety & Filtering</h2>
      <div class="space-y-8">
        {#each contentFilters as filter}
          <div class="bg-[#1E2130] rounded-xl p-6 border border-[#00D1FF]/20">
            <h3 class="text-xl font-semibold text-[#00D1FF] mb-4">{filter.level}</h3>
            <p class="text-gray-300 mb-6">{filter.description}</p>
            <div class="bg-[#171923] rounded-lg p-4">
              {#if filter.example.before}
                <div class="mb-4">
                  <p class="text-sm text-gray-400 mb-2">Original Content:</p>
                  <p class="text-gray-300">{filter.example.before}</p>
                </div>
                <div class="relative py-4">
                  <div class="absolute left-1/2 transform -translate-x-1/2 text-[#00D1FF]">↓</div>
                </div>
                <div>
                  <p class="text-sm text-gray-400 mb-2">Age-Appropriate Version:</p>
                  <p class="text-[#00D1FF]">{filter.example.after}</p>
                </div>
              {:else}
                <div class="mb-4">
                  <p class="text-sm text-gray-400 mb-2">Child's Question:</p>
                  <p class="text-gray-300">{filter.example.input}</p>
                </div>
                <div class="relative py-4">
                  <div class="absolute left-1/2 transform -translate-x-1/2 text-[#00D1FF]">↓</div>
                </div>
                <div>
                  <p class="text-sm text-gray-400 mb-2">Safe Response:</p>
                  <p class="text-[#00D1FF]">{filter.example.response}</p>
                </div>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Privacy Protection Section -->
  <section class="py-16 px-4 md:px-8 lg:px-16" class:hidden={activeSection !== 'privacy'}>
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold mb-8">Privacy Protection</h2>
      <div class="grid md:grid-cols-2 gap-6">
        {#each privacyFeatures as feature}
          <div class="bg-[#1E2130] rounded-xl p-6 border border-[#00D1FF]/20">
            <span class="text-3xl mb-4 block">{feature.icon}</span>
            <h3 class="text-xl font-semibold text-[#00D1FF] mb-2">{feature.title}</h3>
            <p class="text-gray-300">{feature.description}</p>
          </div>
        {/each}
      </div>
      <div class="mt-8 p-6 bg-[#171923] rounded-xl border border-[#00D1FF]/20">
        <h3 class="text-xl font-semibold text-[#00D1FF] mb-4">COPPA Compliance</h3>
        <p class="text-gray-300 mb-4">
          RoboLearn is fully compliant with the Children's Online Privacy Protection Act (COPPA),
          ensuring the highest standards of privacy protection for children under 13.
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2">
          <li>No collection of personal information without parental consent</li>
          <li>Strict data minimization and retention policies</li>
          <li>Regular privacy audits and updates</li>
          <li>Clear privacy policies written in plain language</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Parental Controls Section -->
  <section class="py-16 px-4 md:px-8 lg:px-16" class:hidden={activeSection !== 'parental-controls'}>
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold mb-8">Parental Controls & Oversight</h2>
      <div class="grid lg:grid-cols-3 gap-6">
        {#each parentalControls as control}
          <div class="bg-[#1E2130] rounded-xl p-6 border border-[#00D1FF]/20">
            <h3 class="text-xl font-semibold text-[#00D1FF] mb-4">{control.title}</h3>
            <p class="text-gray-300 mb-4">{control.description}</p>
            <ul class="space-y-2">
              {#each control.features as feature}
                <li class="flex items-center text-sm">
                  <span class="text-[#00D1FF] mr-2">✓</span>
                  <span class="text-gray-300">{feature}</span>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
      <div class="mt-8">
        <MobilePreview 
          robotName="Astro"
          question="Show me the parent dashboard"
          answer="Here's a preview of our comprehensive parental controls dashboard."
          voiceState="responding"
          isAnswering={false}
        />
      </div>
    </div>
  </section>

  <!-- Technical Security Section -->
  <section class="py-16 px-4 md:px-8 lg:px-16" class:hidden={activeSection !== 'technical-safety'}>
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold mb-8">Technical Security Measures</h2>
      <div class="grid gap-6">
        <div class="bg-[#1E2130] rounded-xl p-6 border border-[#00D1FF]/20">
          <h3 class="text-xl font-semibold text-[#00D1FF] mb-4">Security Infrastructure</h3>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="p-4 bg-[#171923] rounded-lg">
              <h4 class="font-semibold text-[#00D1FF] mb-2">Encryption</h4>
              <p class="text-sm text-gray-300">End-to-end encryption for all data transmission and storage</p>
            </div>
            <div class="p-4 bg-[#171923] rounded-lg">
              <h4 class="font-semibold text-[#00D1FF] mb-2">Authentication</h4>
              <p class="text-sm text-gray-300">Multi-factor authentication for parent accounts</p>
            </div>
            <div class="p-4 bg-[#171923] rounded-lg">
              <h4 class="font-semibold text-[#00D1FF] mb-2">Monitoring</h4>
              <p class="text-sm text-gray-300">24/7 security monitoring and threat detection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Add Download Section before FAQ -->
  <section class="py-16 px-4 md:px-8 lg:px-16">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-2xl font-bold mb-6">Want to Learn More?</h2>
      <p class="text-gray-300 mb-8">
        Download our comprehensive safety guide for parents. Learn about our security measures,
        privacy policies, and how we keep your child safe while learning.
      </p>
      <button
        class="bg-[#1E2130] text-[#00D1FF] px-8 py-3 rounded-lg font-semibold border border-[#00D1FF]/20 hover:border-[#00D1FF] transition-all duration-300"
        on:click={downloadSafetyInfo}
      >
        <span class="flex items-center justify-center">
          <span class="mr-2">📥</span>
          Download Safety Guide
        </span>
      </button>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="py-16 px-4 md:px-8 lg:px-16 bg-[#1E2130]">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <div class="space-y-4">
        {#each safetyFaqs as faq}
          <div class="bg-[#171923] rounded-xl border border-[#00D1FF]/20">
            <button
              class="w-full px-6 py-4 text-left flex justify-between items-center"
              on:click={() => activeFaq = activeFaq === faq.id ? '' : faq.id}
            >
              <span class="font-semibold text-[#00D1FF]">{faq.question}</span>
              <span class="text-[#00D1FF] transform transition-transform duration-300" 
                    class:rotate-180={activeFaq === faq.id}>
                ↓
              </span>
            </button>
            {#if activeFaq === faq.id}
              <div class="px-6 py-4 border-t border-[#00D1FF]/20">
                <p class="text-gray-300">{faq.answer}</p>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Add Feedback Section before CTA -->
  <section class="py-16 px-4 md:px-8 lg:px-16">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-2xl font-bold mb-6">How Important is Safety to You?</h2>
      <p class="text-gray-300 mb-8">
        Help us understand what safety features matter most to parents like you.
      </p>
      <div class="flex justify-center gap-4 mb-8">
        {#each Array(5) as _, i}
          <button
            class="w-12 h-12 rounded-full border-2 transition-all duration-300 flex items-center justify-center text-lg
                   {feedbackRating > i ? 'border-[#00D1FF] text-[#00D1FF]' : 'border-gray-600 text-gray-600'}"
            on:click={() => handleFeedback(i + 1)}
          >
            {i + 1}
          </button>
        {/each}
      </div>
      {#if feedbackRating > 0}
        <p class="text-[#00D1FF] text-sm" transition:fade>
          Thank you for your feedback! We'll use this to continue improving our safety features.
        </p>
      {/if}
    </div>
  </section>

  <!-- Call to Action -->
  <section class="py-20 px-4 md:px-8 lg:px-16">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-6">Ready to Start Safe Learning?</h2>
      <p class="text-xl text-gray-300 mb-8">
        Join our waitlist to experience worry-free educational exploration for your child.
      </p>
      <button 
        class="bg-[#00D1FF] text-[#171923] px-8 py-3 rounded-lg font-semibold hover:brightness-110 transition-all duration-300"
        aria-label="Join the RoboLearn waitlist"
      >
        Join the Waitlist
      </button>
    </div>
  </section>
</div>

<style>
  .hidden {
    display: none;
  }

  :global(.is-visible) {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }

  .shadow-glow {
    box-shadow: 0 0 20px rgba(0, 209, 255, 0.1);
  }

  /* Remove the button opacity and transform styles that were causing the issue */
  button {
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }

  @keyframes checkmark {
    0% { transform: scale(0); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 0.8;
      transform: translateY(0);
    }
  }

  /* Ensure pledge items don't interfere with other content */
  .absolute {
    z-index: 1;
  }

  /* Add depth to main content */
  section {
    position: relative;
    z-index: 2;
  }

  /* Improve trust badge hover effect */
  .transform {
    backface-visibility: hidden;
    -webkit-font-smoothing: subpixel-antialiased;
  }

  /* Ensure proper stacking of animated elements */
  .pointer-events-none {
    z-index: 1;
  }

  .text-center {
    position: relative;
    z-index: 2;
  }
</style> 