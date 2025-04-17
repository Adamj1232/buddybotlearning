<script lang="ts">
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
  <title>RoboLearn | Voice AI Learning Companion for Children</title>
  <meta name="description" content="RoboLearn: A voice-controlled AI learning companion for children ages 4-12. Explore the world through natural, safe, and engaging conversations." />
  <script type="application/ld+json">
    {
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "RoboLearn Voice AI Learning Companion",
        "description": "A voice-controlled mobile app where children (ages 4-12) explore the world by asking questions to a friendly AI companion. Features conversational learning, STEM focus, and robust safety measures.",
        "brand": {
          "@type": "Brand",
          "name": "RoboLearn"
        },
        "url": "https://www.robolearn.ai", // Replace with actual URL if different
        "image": "https://www.robolearn.ai/images/product-preview.png", // Replace with actual image
        "audience": {
          "@type": "Audience",
          "audienceType": "Child",
          "suggestedMinAge": "4",
          "suggestedMaxAge": "12"
        },
        "applicationCategory": "EducationalApplication",
        "learningResourceType": "learning activity",
        "educationalUse": ["curriculum support", "skill development", "informal education"],
        "isFamilyFriendly": "true",
        // Placeholder Review
        "review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5", // Placeholder rating
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Satisfied Parent" // Placeholder author
          },
          "reviewBody": "An incredible way to engage my child's curiosity! RoboLearn makes learning fun and interactive, and I love the focus on safety." // Placeholder review
        },
        // Placeholder Aggregate Rating
         "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8", // Placeholder average rating
          "reviewCount": "150" // Placeholder review count
        },
        "offers": {
           "@type": "Offer",
           "price": "0", // Indicate free waitlist/early access
           "priceCurrency": "USD",
           "availability": "https://schema.org/PreOrder" // Or InStock, OutOfStock
         }
      })
    }
  </script>
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
            RoboLearn: Voice AI
          </span>
          <br />
          <span class="text-text-primary">
            Learning Companion for Children
          </span>
        </h1>
        <p class="text-xl text-text-secondary max-w-3xl mx-auto mb-12">
          <strong>What is RoboLearn?</strong> RoboLearn is a voice-controlled mobile app where children (ages 4-12) explore the world by asking questions to a friendly AI companion. It's safe, engaging, and fosters natural curiosity through conversation.
        </p>
        
        <!-- How RoboLearn Works Section -->
        <div class="max-w-2xl mx-auto mb-12 text-left">
          <h2 class="text-2xl font-semibold text-center mb-6">How RoboLearn Works</h2>
          <ol class="space-y-4 list-decimal list-inside text-text-secondary">
            <li><strong class="text-text-primary">Ask Anything:</strong> Your child uses simple voice commands to ask questions about any topic they're curious about.</li>
            <li><strong class="text-text-primary">Engaging Conversations:</strong> Our AI companion provides age-appropriate, informative answers in a friendly, conversational style.</li>
            <li><strong class="text-text-primary">Safe Exploration:</strong> Content is carefully curated and filtered for safety, allowing children to explore freely within secure boundaries.</li>
            <li><strong class="text-text-primary">Learning Naturally:</strong> RoboLearn adapts to your child's interests, encouraging deeper exploration and reinforcing concepts through dialogue.</li>
          </ol>
        </div>

        <!-- Educational Benefits Section -->
        <div class="max-w-3xl mx-auto mb-12">
          <h2 class="text-2xl font-semibold mb-6">Spark Curiosity, Build Knowledge</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div class="benefit-card">
              <h3 class="font-semibold text-text-primary mb-2">Develops Critical Thinking</h3>
              <p class="text-text-secondary text-sm">Encourages children to ask 'why' and 'how,' fostering deeper understanding beyond rote memorization. Example: Explaining gravity not just as a fact, but through relatable scenarios.</p>
            </div>
            <div class="benefit-card">
              <h3 class="font-semibold text-text-primary mb-2">Expands Vocabulary & Communication</h3>
              <p class="text-text-secondary text-sm">Introduces new words and concepts naturally within conversations, improving language skills. Example: Defining scientific terms like 'photosynthesis' in simple language.</p>
            </div>
            <div class="benefit-card">
              <h3 class="font-semibold text-text-primary mb-2">Boosts STEM Confidence</h3>
              <p class="text-text-secondary text-sm">Makes complex topics like space, biology, and technology accessible and exciting through interactive explanations. Example: Simulating a conversation about how rockets reach space.</p>
            </div>
            <div class="benefit-card">
              <h3 class="font-semibold text-text-primary mb-2">Supports Self-Directed Learning</h3>
              <p class="text-text-secondary text-sm">Empowers children to follow their own interests and learn at their own pace, building intrinsic motivation. Example: Letting a child guide a conversation about dinosaurs for as long as they wish.</p>
            </div>
          </div>
        </div>

        <!-- Enhanced CTA Section -->
        <div class="max-w-xl mx-auto mb-8">
          <div class="bg-background-lighter/50 backdrop-blur-sm rounded-xl p-6 border border-border-primary">
            <p class="text-cyan-400 font-semibold mb-4">🚀 Join the Waitlist & Shape the Future</p>
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
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Join the Waitlist Now
            </span>
          </a>
          <a href="/features" class="btn-secondary">
            Explore Features
          </a>
        </div>

        <!-- Benefits -->
        <div class="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-sm">
          <div class="flex items-center justify-center space-x-2 text-text-secondary">
            <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" role="img" aria-label="Clock icon indicating duration benefit">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>3 months free access</span>
          </div>
          <div class="flex items-center justify-center space-x-2 text-text-secondary">
            <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" role="img" aria-label="Sparkle icon indicating feature access benefit">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span>Priority features access</span>
          </div>
          <div class="flex items-center justify-center space-x-2 text-text-secondary">
            <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" role="img" aria-label="Briefcase icon indicating exclusive activities benefit">
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