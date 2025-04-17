<script lang="ts">
  import VoiceDemo from '../components/VoiceDemo.svelte';
  import MobilePreview from '../components/MobilePreview.svelte';
  import Icon from '@iconify/svelte';

  const waitlistCount = 1753;
  const spotsRemaining = 247;
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

<div class="relative overflow-hidden bg-background">
  <!-- Hero Section -->
  <section class="relative flex items-center justify-center text-center py-24 px-4 md:px-8 lg:px-16 min-h-[70vh] overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-b from-background via-background to-background-light opacity-90 z-0"></div>
    
    <div class="z-10 relative">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        Join the Future <br class="hidden md:block" /> of Child Learning
      </h1>
      <p class="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
        Be among the first to give your child access to a personalized AI learning companion that makes education fun and engaging.
      </p>
      <div class="flex justify-center gap-4">
        <a href="/waitlist" class="btn-primary">
          Join the Waitlist Now
        </a>
        <a href="/demo" class="btn-secondary">
          Try Voice Demo
        </a>
      </div>
    </div>
  </section>

  <!-- Trust Elements Section -->
  <section class="py-12 bg-background-light border-y border-border-primary" aria-labelledby="trust-heading">
    <h2 id="trust-heading" class="sr-only">Trust and Credibility Indicators</h2> <!-- Screen reader heading -->
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
         <!-- Placeholder 1: As Featured In -->
         <div class="text-center w-full">
           <p class="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Featured In</p>
           <!-- Replace with actual logo(s) -->
           <div class="h-8 bg-background-lighter rounded w-24 mx-auto flex items-center justify-center border border-border-primary">
             <span class="text-xs text-text-secondary">Logo</span>
           </div>
         </div>
         <!-- Placeholder 2: Partnerships -->
         <div class="text-center w-full">
           <p class="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Partners</p>
           <!-- Replace with actual logo(s) -->
           <div class="h-8 bg-background-lighter rounded w-24 mx-auto flex items-center justify-center border border-border-primary">
             <span class="text-xs text-text-secondary">Logo</span>
           </div>
         </div>
          <!-- Placeholder 3: Safety Certified -->
         <div class="text-center w-full">
           <p class="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Safety</p>
           <!-- Replace with actual badge/certification -->
           <div class="h-8 bg-background-lighter rounded w-24 mx-auto flex items-center justify-center border border-border-primary">
             <Icon icon="mdi:shield-check-outline" class="w-5 h-5 text-cyan-400" />
           </div>
         </div>
          <!-- Placeholder 4: Testimonial Preview -->
         <div class="text-center w-full">
            <p class="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Parents Love It</p>
            <!-- Replace with actual short testimonial -->
           <p class="text-xs text-text-secondary italic">"Incredible!"</p>
         </div>
          <!-- Placeholder 5: Built By Experts -->
         <div class="text-center w-full hidden lg:block">
           <p class="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Expert Built</p>
           <p class="text-xs text-text-secondary">By Parents & Educators</p>
         </div>
      </div>
    </div>
  </section>

  <!-- How RoboLearn Works Section (Timeline Style) -->
  <section id="how-it-works" class="py-20 md:py-28 bg-background">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
       <div class="text-center mb-16">
           <h2 class="text-3xl md:text-4xl font-bold mb-4 text-text-primary">How RoboLearn Sparks Curiosity</h2>
           <p class="text-lg text-text-secondary max-w-2xl mx-auto">
               Engage your child's natural desire to learn through simple voice interactions and safe, AI-powered conversations.
           </p>
       </div>

       <ol class="relative border-l-2 border-border-primary/50 ml-4">
         <!-- Step 1 -->
         <li class="mb-10 ml-10">
            <span class="absolute flex items-center justify-center w-8 h-8 bg-cyan-400/20 rounded-full -left-4 ring-4 ring-background border border-cyan-400/50">
              <Icon icon="mdi:microphone-question" class="w-5 h-5 text-cyan-400" />
            </span>
            <h3 class="text-xl font-semibold text-text-primary mb-1">Ask Anything</h3>
            <p class="text-base font-normal text-text-secondary">Your child uses simple voice commands to ask questions about any topic they're curious about, from dinosaurs to distant stars.</p>
         </li>
         <!-- Step 2 -->
         <li class="mb-10 ml-10">
            <span class="absolute flex items-center justify-center w-8 h-8 bg-cyan-400/20 rounded-full -left-4 ring-4 ring-background border border-cyan-400/50">
              <Icon icon="mdi:robot-happy-outline" class="w-5 h-5 text-cyan-400" />
            </span>
            <h3 class="text-xl font-semibold text-text-primary mb-1">Engaging Conversations</h3>
            <p class="text-base font-normal text-text-secondary">Our AI companion provides age-appropriate, informative answers in a friendly, conversational style, adapting to their understanding.</p>
         </li>
         <!-- Step 3 -->
          <li class="mb-10 ml-10">
            <span class="absolute flex items-center justify-center w-8 h-8 bg-cyan-400/20 rounded-full -left-4 ring-4 ring-background border border-cyan-400/50">
              <Icon icon="mdi:shield-check-outline" class="w-5 h-5 text-cyan-400" />
            </span>
            <h3 class="text-xl font-semibold text-text-primary mb-1">Safe Exploration</h3>
            <p class="text-base font-normal text-text-secondary">Content is carefully curated and filtered for safety, allowing children to explore freely within secure boundaries.</p>
         </li>
         <!-- Step 4 -->
         <li class="ml-10">
            <span class="absolute flex items-center justify-center w-8 h-8 bg-cyan-400/20 rounded-full -left-4 ring-4 ring-background border border-cyan-400/50">
              <Icon icon="mdi:leaf-maple" class="w-5 h-5 text-cyan-400" />
            </span>
            <h3 class="text-xl font-semibold text-text-primary mb-1">Learning Naturally</h3>
            <p class="text-base font-normal text-text-secondary">RoboLearn adapts to your child's interests, encouraging deeper exploration and reinforcing concepts through dialogue.</p>
         </li>
       </ol>
     </div>
   </section>

  <!-- App Preview Section -->
  <section class="py-16 md:py-24 bg-background">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Mobile Preview -->
        <div class="order-2 lg:order-1 flex justify-center">
            <MobilePreview robotName="Astro" question="Why do planes fly?" voiceState={'responding'} />
        </div>

        <!-- {/* Placeholder for potential future content in the right column */} -->
        <div class="order-1 lg:order-2 flex flex-col items-center justify-center text-center lg:text-left lg:items-start">
            <!-- {/* Example content for this area */}  -->
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-text-primary">See RoboLearn in Action</h2>
            <p class="text-lg text-text-secondary mb-8 max-w-md">
                 Experience the intuitive voice interface and engaging learning conversations firsthand.
            </p>
            <a href="/features" class="btn-secondary inline-flex items-center hover:border-cyan-400 hover:text-cyan-400">
                <Icon icon="mdi:view-list-outline" class="w-5 h-5 mr-2" />
                Explore All Features
            </a>
        </div>
    </div>
  </section>

  <!-- Educational Benefits Section -->
  <section class="py-20 md:py-28 bg-background-light">
     <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
           <h2 class="text-3xl md:text-4xl font-bold mb-4 text-text-primary">Spark Curiosity, Build Knowledge</h2>
            <p class="text-lg text-text-secondary max-w-2xl mx-auto">
                Go beyond facts and foster essential skills for lifelong learning.
            </p>
        </div>

       <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
         <!-- Benefit Card 1: Critical Thinking -->
         <div class="benefit-card flex space-x-6 items-start">
           <div class="flex-shrink-0">
             <!-- Icon representing the benefit -->
             <div class="w-16 h-16 rounded-lg bg-cyan-400/10 flex items-center justify-center border border-cyan-400/30">
                <Icon icon="mdi:brain" class="w-8 h-8 text-cyan-400" />
             </div>
           </div>
           <div>
             <h3 class="font-semibold text-xl text-text-primary mb-2">Develops Critical Thinking</h3>
             <p class="text-text-secondary text-base min-h-[4rem]">Encourages asking 'why' and 'how,' fostering deeper understanding beyond rote memorization. Example: Explaining gravity through relatable scenarios.</p>
           </div>
         </div>
         <!-- Benefit Card 2: Communication -->
         <div class="benefit-card flex space-x-6 items-start">
            <div class="flex-shrink-0">
             <!-- Icon representing the benefit -->
             <div class="w-16 h-16 rounded-lg bg-cyan-400/10 flex items-center justify-center border border-cyan-400/30">
                 <Icon icon="mdi:account-voice" class="w-8 h-8 text-cyan-400" />
             </div>
           </div>
           <div>
             <h3 class="font-semibold text-xl text-text-primary mb-2">Expands Vocabulary & Communication</h3>
             <p class="text-text-secondary text-base min-h-[4rem]">Introduces new words and concepts naturally within conversations, improving language skills. Example: Defining 'photosynthesis' simply.</p>
           </div>
         </div>
         <!-- Benefit Card 3: STEM Confidence -->
         <div class="benefit-card flex space-x-6 items-start">
             <div class="flex-shrink-0">
             <!-- Icon representing the benefit -->
             <div class="w-16 h-16 rounded-lg bg-cyan-400/10 flex items-center justify-center border border-cyan-400/30">
                 <Icon icon="mdi:rocket-launch-outline" class="w-8 h-8 text-cyan-400" />
             </div>
           </div>
           <div>
             <h3 class="font-semibold text-xl text-text-primary mb-2">Boosts STEM Confidence</h3>
             <p class="text-text-secondary text-base min-h-[4rem]">Makes complex topics like space and biology accessible and exciting through interactive explanations. Example: Simulating conversations about space travel.</p>
           </div>
         </div>
         <!-- Benefit Card 4: Self-Directed Learning -->
         <div class="benefit-card flex space-x-6 items-start">
            <div class="flex-shrink-0">
             <!-- Icon representing the benefit -->
             <div class="w-16 h-16 rounded-lg bg-cyan-400/10 flex items-center justify-center border border-cyan-400/30">
                 <Icon icon="mdi:lightbulb-on-outline" class="w-8 h-8 text-cyan-400" />
             </div>
           </div>
           <div>
             <h3 class="font-semibold text-xl text-text-primary mb-2">Supports Self-Directed Learning</h3>
             <p class="text-text-secondary text-base min-h-[4rem]">Empowers children to follow their own interests and learn at their own pace, building intrinsic motivation. Example: Letting a child lead a long chat about dinosaurs.</p>
           </div>
         </div>
       </div>
     </div>
   </section>

  <!-- Voice Demo Section -->
  <section class="py-16 md:py-24 bg-background-light">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-text-primary">Hear the Difference</h2>
        <p class="text-lg text-text-secondary mb-12 max-w-xl mx-auto">
           Listen to a sample interaction and imagine your child engaging with RoboLearn.
        </p>
        <VoiceDemo />
    </div>
  </section>

</div> 

<style lang="postcss">
  .gradient-text {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500;
  }
  .benefit-card {
      @apply bg-background-lighter/30 rounded-lg p-6 transition-all duration-300 border border-border-primary/50 hover:border-cyan-400/50;
  }
  .benefit-card:hover {
      box-shadow: 0 0 15px 5px rgba(0, 209, 255, 0.2);
  }
  .card {
    @apply bg-background-lighter rounded-xl p-6 border border-border-primary shadow-lg;
  }
  .progress-dot {
    @apply w-3 h-3 rounded-full mx-1 transition-colors duration-300;
  }
  .progress-dot-active {
    @apply bg-cyan-400;
  }
  .progress-dot-inactive {
    @apply bg-border-primary;
  }
  .progress-line {
    @apply h-0.5 w-8 transition-colors duration-300;
  }
  .progress-line-active {
    @apply bg-cyan-400;
  }
  .progress-line-inactive {
    @apply bg-border-primary;
  }

  /* Button styles */
  .btn-primary {
    @apply bg-cyan-500 text-background font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform shadow-lg text-center;
  }
  .btn-primary:hover {
    background-color: theme('colors.cyan.600');
    transform: translateY(-0.25rem);
    box-shadow: theme('boxShadow.lg'), 0 0 15px 5px rgba(0, 209, 255, 0.2);
  }

  .btn-secondary {
    @apply bg-transparent border border-border-primary text-text-primary font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out text-center;
  }
  .btn-secondary:hover {
    border-color: theme('colors.cyan.400');
    color: theme('colors.cyan.400');
  }
</style> 