<script lang="ts">
  import { onMount } from 'svelte';
  import Container from '$lib/components/layout/Container.svelte';
  import Section from '$lib/components/layout/Section.svelte';
  import WaitlistForm from '../../components/WaitlistForm.svelte';
  import DevelopmentTimeline from '$lib/components/status/DevelopmentTimeline.svelte';
</script>

<svelte:head>
  <title>Join the BuddyBotLearning Waitlist</title>
  <meta 
    name="description" 
    content="Sign up for early access to BuddyBot, the AI learning companion for curious kids. Be the first to know when we launch!"
  />
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Join Early Access - BuddyBotLearning",
      "description": "Join BuddyBotLearning's early access program to be among the first to experience our voice-controlled AI learning companions for children.",
      "offers": {
        "@type": "Offer",
        "availability": "PreOrder",
        "availabilityStarts": "2024-06-01",
        "description": "Early access to BuddyBot's AI learning companion",
        "seller": {
          "@type": "Organization",
          "name": "BuddyBotLearning"
        }
      },
      "mainEntity": {
        "@type": "Product",
        "name": "BuddyBot AI Learning Companion",
        "description": "Voice-controlled AI learning companion for children ages 4-12",
        "releaseDate": "2024-09-01",
        "applicationCategory": "EducationalApplication",
        "offers": {
          "@type": "Offer",
          "availability": "PreOrder",
          "availabilityStarts": "2024-06-01"
        }
      }
    })}
  </script>
</svelte:head>

<!-- Hero Section -->
<Section spacing="xl">
  <Container max_width="lg">
    <div class="text-center space-y-6">
      <h1 class="text-display font-semibold">
        Be the First to Explore with
        <span class="text-accent">BuddyBot</span>
      </h1>
      <p class="text-body-lg">
        Join our waitlist to get exclusive early access and updates on the development
        of our voice-controlled AI learning companion for children.
      </p>
    </div>
  </Container>
</Section>

<!-- Waitlist Form Section -->
<Section spacing="xl" class_name="bg-background-surface border-y border-border">
  <Container max_width="md">
    <div class="space-y-8">
      <div class="text-center space-y-4">
        <h2 class="text-h2">Secure Your Spot</h2>
        <p class="text-body-lg">
          Early access members will receive priority access and special launch benefits.
          Sign up below to join the community!
        </p>
      </div>
      
      <WaitlistForm />

      <p class="text-center text-small text-text-tertiary">
        We respect your privacy. Your email will only be used for BuddyBotLearning updates.
        Read our <a href="/privacy" class="text-accent hover:underline">Privacy Policy</a>.
      </p>
    </div>
  </Container>
</Section>

<!-- Why Join Section -->
<Section spacing="xl">
  <Container max_width="lg">
    <div class="space-y-12">
      <div class="text-center space-y-4">
        <h2 class="text-h2">Why Join the Waitlist?</h2>
        <p class="text-body-lg max-w-2xl mx-auto">
          Get involved early and help shape the future of children's learning.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="card space-y-4 text-center">
          <span class="text-4xl">🥇</span>
          <h3 class="text-h3">Priority Access</h3>
          <p>Be among the first to experience BuddyBot when it launches.</p>
        </div>

        <div class="card space-y-4 text-center">
          <span class="text-4xl">🎁</span>
          <h3 class="text-h3">Exclusive Benefits</h3>
          <p>Receive special offers and perks available only to early supporters.</p>
        </div>

        <div class="card space-y-4 text-center">
          <span class="text-4xl">📢</span>
          <h3 class="text-h3">Shape Development</h3>
          <p>Provide valuable feedback that helps us build the best possible learning tool.</p>
        </div>
      </div>
    </div>
  </Container>
</Section>

<!-- Timeline Section -->
<Section spacing="xl" class_name="bg-background-surface border-y border-border">
  <Container max_width="lg">
    <div class="space-y-12">
      <div class="text-center space-y-4">
        <h2 class="text-h2">Our Development Journey</h2>
        <p class="text-body-lg max-w-2xl mx-auto">
          We're working hard to bring BuddyBotLearning to life. Follow our progress!
        </p>
      </div>

      <DevelopmentTimeline />
    </div>
  </Container>
</Section>

<style lang="postcss">
  .gradient-text {
    @apply bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent;
  }
</style> 