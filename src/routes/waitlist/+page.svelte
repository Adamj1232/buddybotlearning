<script lang="ts">
  import { onMount } from 'svelte';
  import WaitlistForm from '../../components/WaitlistForm.svelte';
  import { fade, fly } from 'svelte/transition';

  const benefits = [
    {
      icon: '🎯',
      title: 'Early Access',
      description: 'Be among the first to experience personalized AI learning'
    },
    {
      icon: '🎁',
      title: '3 Months Free',
      description: 'Early members receive 3 months of premium access'
    },
    {
      icon: '⭐',
      title: 'Priority Features',
      description: 'Get first access to new features and updates'
    },
    {
      icon: '📚',
      title: 'STEM Activities Pack',
      description: 'Exclusive educational resources and activities'
    },
    {
      icon: '💡',
      title: 'Custom Robot',
      description: 'Design your child\'s perfect learning companion'
    },
    {
      icon: '🎓',
      title: 'Learning Credits',
      description: 'Special credits for premium educational content'
    }
  ];

  const testimonials = [
    {
      quote: "My daughter loves asking questions about space and science. RoboLearn makes learning fun and interactive!",
      author: "Sarah M.",
      role: "Parent of 8-year-old",
      avatar: "/images/testimonials/parent1.jpg"
    },
    {
      quote: "The voice interaction is amazing. It's like having a knowledgeable tutor available 24/7.",
      author: "Michael R.",
      role: "Parent of 10-year-old",
      avatar: "/images/testimonials/parent2.jpg"
    },
    {
      quote: "As an educator, I'm impressed by how well it adapts to each child's learning level.",
      author: "Dr. Emily Chen",
      role: "Elementary Education Specialist",
      avatar: "/images/testimonials/educator1.jpg"
    }
  ];

  const stats = [
    {
      number: "1,753",
      label: "Parents Joined"
    },
    {
      number: "247",
      label: "Spots Remaining"
    },
    {
      number: "4.9/5",
      label: "Parent Rating"
    }
  ];

  let activeTestimonial = 0;
  let testimonialInterval: number;

  onMount(() => {
    testimonialInterval = setInterval(() => {
      activeTestimonial = (activeTestimonial + 1) % testimonials.length;
    }, 5000);

    return () => clearInterval(testimonialInterval);
  });
</script>

<svelte:head>
  <title>Join the Waitlist - RoboLearn</title>
  <meta name="description" content="Join the waitlist for RoboLearn and be among the first to experience personalized AI learning for your child." />
</svelte:head>

<div class="min-h-screen bg-background">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
      <!-- Left Column -->
      <div class="mb-12 lg:mb-0">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          <span class="gradient-text">Join the Future</span>
          <br />
          <span class="text-text-primary">of Child Learning</span>
        </h1>

        <p class="text-xl text-text-secondary mb-8">
          Be among the first to give your child access to a personalized AI learning companion that makes education fun and engaging.
        </p>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-4 mb-12">
          {#each stats as stat}
            <div class="text-center p-4 bg-background-lighter rounded-xl border border-border-primary">
              <div class="text-2xl font-bold text-cyan-400 mb-1">{stat.number}</div>
              <div class="text-sm text-text-secondary">{stat.label}</div>
            </div>
          {/each}
        </div>

        <!-- Benefits -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {#each benefits as benefit}
            <div class="flex space-x-4 p-4 bg-background-lighter rounded-xl border border-border-primary">
              <div class="text-2xl">{benefit.icon}</div>
              <div>
                <h3 class="font-semibold mb-1">{benefit.title}</h3>
                <p class="text-sm text-text-secondary">{benefit.description}</p>
              </div>
            </div>
          {/each}
        </div>

        <!-- Testimonials -->
        <div class="relative bg-background-lighter rounded-xl border border-border-primary p-6 mb-8">
          {#each testimonials as testimonial, i}
            {#if i === activeTestimonial}
              <div
                class="text-center"
                in:fade={{ duration: 300 }}
              >
                <p class="text-lg mb-4 text-text-secondary">"{testimonial.quote}"</p>
                <div class="font-semibold">{testimonial.author}</div>
                <div class="text-sm text-text-secondary">{testimonial.role}</div>
              </div>
            {/if}
          {/each}

          <!-- Testimonial Navigation -->
          <div class="flex justify-center space-x-2 mt-4">
            {#each testimonials as _, i}
              <button
                class="w-2 h-2 rounded-full transition-colors duration-300
                  {i === activeTestimonial ? 'bg-cyan-400' : 'bg-border-primary hover:bg-cyan-400/50'}"
                on:click={() => activeTestimonial = i}
                aria-label="View testimonial {i + 1}"
              ></button>
            {/each}
          </div>
        </div>
      </div>

      <!-- Right Column - Waitlist Form -->
      <div class="lg:sticky lg:top-24">
        <div class="bg-background-lighter rounded-xl border border-border-primary p-6 shadow-xl">
          <WaitlistForm
            variant="full"
            showProgress={true}
            showSocialProof={true}
            showScarcity={true}
            autoFocus={true}
          />
        </div>

        <!-- Trust Indicators -->
        <div class="mt-6 grid grid-cols-2 gap-4 text-center text-sm text-text-secondary">
          <div class="p-4 bg-background-lighter rounded-xl border border-border-primary">
            <svg class="w-6 h-6 mx-auto mb-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <div>COPPA Compliant</div>
          </div>
          <div class="p-4 bg-background-lighter rounded-xl border border-border-primary">
            <svg class="w-6 h-6 mx-auto mb-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <div>Secure & Private</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .gradient-text {
    @apply bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent;
  }
</style> 