<script lang="ts">
  import { inview } from 'svelte-inview';
  import MobilePreview from '../../components/MobilePreview.svelte';
  import VoiceDemo from '../../components/VoiceDemo.svelte';

  let activeFaq = -1;

  const safetyFeatures = [
    {
      title: 'Content Filtering',
      icon: '🛡️',
      description: 'Age-appropriate content boundaries with real-time filtering'
    },
    {
      title: 'Privacy First',
      icon: '🔒',
      description: 'No personal data storage, conversations are processed in real-time'
    },
    {
      title: 'Parental Controls',
      icon: '⚙️',
      description: 'Comprehensive oversight tools and usage monitoring'
    },
    {
      title: 'Regular Updates',
      icon: '🔄',
      description: 'Continuous safety improvements and content reviews'
    }
  ] as const;

  const timeline = [
    {
      time: 'Morning',
      activity: 'Curiosity Wake-up',
      description: 'Natural questions about breakfast lead to nutrition learning'
    },
    {
      time: 'Afternoon',
      activity: 'Discovery Time',
      description: 'Exploring science concepts through everyday observations'
    },
    {
      time: 'Evening',
      activity: 'Reflection & Wonder',
      description: 'Discussing the day\'s experiences and planning tomorrow\'s adventures'
    }
  ] as const;

  const faqs = [
    {
      question: 'How does BuddyBot keep my child safe?',
      answer: 'BuddyBot employs multiple layers of safety measures including real-time content filtering, age-appropriate boundaries, and comprehensive parental controls. All interactions are monitored and filtered for appropriateness.'
    },
    {
      question: 'How much screen time is involved?',
      answer: 'BuddyBot is primarily voice-controlled, minimizing screen time while maximizing engagement. Visual elements are used only when necessary for learning enhancement.'
    },
    {
      question: 'What age group is BuddyBot suitable for?',
      answer: 'BuddyBot is designed for children aged 4-12, with content and interactions that automatically adapt to your child\'s age and learning level.'
    },
    {
      question: 'How does BuddyBot support my child\'s learning?',
      answer: 'Through natural conversation and adaptive learning, BuddyBot follows your child\'s curiosity while ensuring educational value. It builds on their interests to explore STEM concepts in an engaging way.'
    }
  ] as const;

  function handleIntersect(e: CustomEvent<{ inView: boolean; entry: IntersectionObserverEntry }>) {
    if (e.detail.inView) {
      const target = e.detail.entry.target as HTMLElement;
      target.classList.add('is-visible');
    }
  }
</script>

<div class="min-h-screen bg-[#171923] text-white">
  <!-- Hero Section -->
  <section class="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12" use:inview on:inview_change={handleIntersect}>
        <h1 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00D1FF] to-[#73CBFF] bg-clip-text text-transparent">
          Nurturing Curiosity Through Conversation
        </h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">
          Empower your child's learning journey with a safe, voice-controlled AI companion that grows with them.
        </p>
      </div>
      
      <div class="mt-12 flex justify-center">
        <MobilePreview />
      </div>
    </div>
  </section>

  <!-- Educational Benefits Section -->
  <section class="py-16 px-4 md:px-8 lg:px-16 bg-[#1E2130]">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">Educational Benefits</h2>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each ['Natural Learning', 'Personalized Path', 'STEM Focus'] as benefit}
          <div class="bg-[#171923] p-6 rounded-xl border border-[#00D1FF]/20 hover:border-[#00D1FF] transition-all duration-300 animate-on-scroll"
               use:inview
               on:inview_change={handleIntersect}>
            <h3 class="text-xl font-semibold mb-4 text-[#00D1FF]">{benefit}</h3>
            <p class="text-gray-300">
              {#if benefit === 'Natural Learning'}
                Learning through conversation makes complex concepts accessible and memorable.
              {:else if benefit === 'Personalized Path'}
                Adapts to your child's interests and pace, ensuring engaged learning.
              {:else}
                Explores STEM topics through real-world examples and hands-on discovery.
              {/if}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Safety & Privacy Section -->
  <section class="py-16 px-4 md:px-8 lg:px-16">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">Safety & Privacy</h2>
      
      <div class="grid md:grid-cols-2 gap-8">
        {#each safetyFeatures as feature}
          <div class="bg-[#1E2130] p-6 rounded-xl hover:scale-[1.02] transition-all duration-300 animate-on-scroll"
               use:inview
               on:inview_change={handleIntersect}>
            <div class="flex items-center mb-4">
              <span class="text-2xl mr-3">{feature.icon}</span>
              <h3 class="text-xl font-semibold text-[#00D1FF]">{feature.title}</h3>
            </div>
            <p class="text-gray-300">{feature.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Daily Learning Journey -->
  <section class="py-16 px-4 md:px-8 lg:px-16 bg-[#1E2130]">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">A Day with BuddyBot</h2>
      
      <div class="relative">
        <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#00D1FF]/20"></div>
        
        <div class="space-y-12">
          {#each timeline as { time, activity, description }, i}
            <div class="relative flex items-center {i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} animate-on-scroll"
                 use:inview
                 on:inview_change={handleIntersect}>
              <div class="flex-1 {i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} text-center md:text-left">
                <h3 class="text-xl font-semibold text-[#00D1FF]">{time}</h3>
                <h4 class="text-lg font-medium mb-2">{activity}</h4>
                <p class="text-gray-300">{description}</p>
              </div>
              
              <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#00D1FF] rounded-full"></div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="py-16 px-4 md:px-8 lg:px-16">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
      
      <div class="space-y-4">
        {#each faqs as faq, i}
          <div class="bg-[#1E2130] rounded-xl overflow-hidden animate-on-scroll"
               use:inview
               on:inview_change={handleIntersect}>
            <button
              class="w-full p-6 text-left flex justify-between items-center hover:bg-[#1E2130]/80"
              on:click={() => activeFaq = activeFaq === i ? -1 : i}
              aria-expanded={activeFaq === i}
              aria-controls={`faq-${i}`}
            >
              <span class="font-semibold">{faq.question}</span>
              <span class="transform transition-transform duration-300 {activeFaq === i ? 'rotate-180' : ''}" aria-hidden="true">
                ▼
              </span>
            </button>
            
            {#if activeFaq === i}
              <div id="faq-{i}" class="p-6 pt-0 text-gray-300 animate-slideDown">
                {faq.answer}
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Call to Action -->
  <section class="py-20 px-4 md:px-8 lg:px-16 bg-[#1E2130]">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Join the Learning Revolution</h2>
      <p class="text-xl text-gray-300 mb-8">
        Be among the first to give your child the gift of curiosity-driven learning.
      </p>
      <button 
        class="bg-[#00D1FF] text-[#171923] px-8 py-3 rounded-lg font-semibold hover:brightness-110 transition-all duration-300"
        aria-label="Join the BuddyBot waitlist"
      >
        Join the Waitlist
      </button>
    </div>
  </section>
</div>

<style>
  .animate-slideDown {
    animation: slideDown 0.3s ease-out forwards;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  :global(.is-visible) {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }

  .animate-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
</style> 