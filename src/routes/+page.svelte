<script lang="ts">
  import Container from '$lib/components/layout/Container.svelte';
  import Section from '$lib/components/layout/Section.svelte';
  import WaitlistForm from '../components/WaitlistForm.svelte';
  import DevelopmentTimeline from '$lib/components/status/DevelopmentTimeline.svelte';
  import PreviewIndicator from '$lib/components/status/PreviewIndicator.svelte';
  import VoiceDemo from '../components/VoiceDemo.svelte';
  import MobilePreview from '../components/MobilePreview.svelte';
</script>

<svelte:head>
  <title>Voice-Controlled AI Learning Companions for Curious Kids | BuddyBotLearning</title>
  <meta 
    name="description" 
    content="BuddyBot creates personalized AI companions that answer children's questions about the world, encouraging exploration and building knowledge through natural conversation."
  />
</svelte:head>

<!-- Hero Section -->
<Section spacing="xl" class_name="relative overflow-hidden">
  <Container>
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div class="space-y-6">
        <h1 class="text-display font-semibold leading-tight">
          AI Learning Companions for
          <span class="text-accent">Curious Kids</span>
        </h1>
        
        <p class="text-body-lg">
          Voice-controlled AI companions that answer children's questions about the world,
          encouraging exploration and building knowledge through natural conversation.
        </p>

        <div class="flex flex-col sm:flex-row gap-4">
          <a href="/waitlist" class="btn-primary">
            Join Early Access
          </a>
          <a href="/how-it-works" class="btn-secondary">
            Learn More
          </a>
        </div>
      </div>

      <div class="relative">
        <PreviewIndicator />
        <div class="aspect-square bg-background-surface rounded-card border border-border overflow-hidden">
          <iframe 
            src="https://buddy-bot-iota.vercel.app/" 
            title="BuddyBot Live App Preview" 
            class="w-full h-full border-0" 
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          ></iframe>
        </div>
        <p class="text-xs text-text-secondary mt-3 text-center lg:text-left px-2">
          <strong>Live App Preview:</strong> Explore BuddyBot now! Chat interactions with custom robots use placeholders for now. Full AI conversations coming soon!
        </p>
      </div>
    </div>
  </Container>
</Section>

<!-- Features Section -->
<Section spacing="xl" class_name="bg-background-surface border-y border-border">
  <Container>
    <div class="space-y-12">
      <div class="text-center space-y-4 max-w-2xl mx-auto">
        <h2 class="text-h2">Designed for Natural Learning</h2>
        <p class="text-body-lg">
          Children learn best through conversation and exploration. Our AI companions make learning
          engaging, interactive, and tailored to each child's interests.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="card space-y-4">
          <span class="text-4xl">🗣️</span>
          <h3 class="text-h3">Voice Control</h3>
          <p>Natural conversations with AI companions that understand and respond to your child's questions.</p>
        </div>

        <div class="card space-y-4">
          <span class="text-4xl">🎯</span>
          <h3 class="text-h3">Personalized</h3>
          <p>Learning experiences that adapt to your child's interests, age, and knowledge level.</p>
        </div>

        <div class="card space-y-4">
          <span class="text-4xl">🔬</span>
          <h3 class="text-h3">STEM Focus</h3>
          <p>Emphasis on science, technology, engineering, and math through engaging explanations.</p>
        </div>
      </div>
    </div>
  </Container>
</Section>

<!-- Development Timeline -->
<Section spacing="xl">
  <Container max_width="lg">
    <div class="space-y-12">
      <div class="text-center space-y-4">
        <h2 class="text-h2">Development Progress</h2>
        <p class="text-body-lg max-w-2xl mx-auto">
          We're working hard to bring BuddyBot to life. Join our early access program to be among
          the first to experience the future of children's learning.
        </p>
      </div>

      <DevelopmentTimeline />
    </div>
  </Container>
</Section>

<!-- Early Access Section -->
<Section spacing="xl" class_name="bg-background-surface border-y border-border">
  <Container max_width="lg">
    <div class="space-y-12">
      <div class="text-center space-y-4">
        <h2 class="text-h2">Join Early Access</h2>
        <p class="text-body-lg max-w-2xl mx-auto">
          Be among the first to experience BuddyBot and help shape its development.
          Early access members receive exclusive benefits and priority access.
        </p>
      </div>

      <div class="max-w-xl mx-auto">
        <WaitlistForm />
      </div>
    </div>
  </Container>
</Section>

<!-- Trust Elements Section -->
<section class="py-12 bg-background-light border-y border-border" aria-labelledby="trust-heading">
  <h2 id="trust-heading" class="sr-only">Trust and Credibility Indicators</h2>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
       <!-- Placeholder 1: As Featured In -->
       <div class="text-center w-full">
         <p class="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Featured In</p>
         <div class="h-8 bg-background-lighter rounded w-24 mx-auto flex items-center justify-center border border-border">
           <span class="text-xs text-text-secondary">Logo</span>
         </div>
       </div>
       <!-- Placeholder 2: Partnerships -->
       <div class="text-center w-full">
         <p class="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Partners</p>
         <div class="h-8 bg-background-lighter rounded w-24 mx-auto flex items-center justify-center border border-border">
           <span class="text-xs text-text-secondary">Logo</span>
         </div>
       </div>
        <!-- Placeholder 3: Safety Certified -->
       <div class="text-center w-full">
         <p class="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Safety</p>
         <div class="h-8 bg-background-lighter rounded w-24 mx-auto flex items-center justify-center border border-border">
           <span class="w-5 h-5 text-cyan-400">🛡️</span>
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

<!-- How BuddyBot Works Section (Timeline Style) -->
<section id="how-it-works" class="py-20 md:py-28 bg-background">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
     <div class="text-center mb-16">
         <h2 class="text-3xl md:text-4xl font-bold mb-4 text-text-primary">How BuddyBot Sparks Curiosity</h2>
         <p class="text-lg text-text-secondary max-w-2xl mx-auto">
             Engage your child's natural desire to learn through simple voice interactions and safe, AI-powered conversations.
         </p>
     </div>

     <ol class="relative border-l-2 border-border ml-4">
       <!-- Step 1 -->
       <li class="mb-10 ml-10">
          <span class="absolute flex items-center justify-center w-8 h-8 bg-accent/20 rounded-full -left-4 ring-4 ring-background border border-accent/50">
            <span class="w-5 h-5 text-accent">🎤</span>
          </span>
          <h3 class="text-xl font-semibold text-text-primary mb-1">Ask Anything</h3>
          <p class="text-base font-normal text-text-secondary">Your child uses simple voice commands to ask questions about any topic they're curious about, from dinosaurs to distant stars.</p>
       </li>
       <!-- Step 2 -->
       <li class="mb-10 ml-10">
          <span class="absolute flex items-center justify-center w-8 h-8 bg-accent/20 rounded-full -left-4 ring-4 ring-background border border-accent/50">
            <span class="w-5 h-5 text-accent">🤖</span>
          </span>
          <h3 class="text-xl font-semibold text-text-primary mb-1">Engaging Conversations</h3>
          <p class="text-base font-normal text-text-secondary">Our AI companion provides age-appropriate, informative answers in a friendly, conversational style. <em>(You can try a live preview on our homepage! Full AI chat functionality is launching very soon.)</em></p>
       </li>
       <!-- Step 3 -->
        <li class="mb-10 ml-10">
          <span class="absolute flex items-center justify-center w-8 h-8 bg-accent/20 rounded-full -left-4 ring-4 ring-background border border-accent/50">
            <span class="w-5 h-5 text-accent">🛡️</span>
          </span>
          <h3 class="text-xl font-semibold text-text-primary mb-1">Safe Exploration</h3>
          <p class="text-base font-normal text-text-secondary">Content is carefully curated and filtered for safety, allowing children to explore freely within secure boundaries.</p>
       </li>
       <!-- Step 4 -->
       <li class="ml-10">
          <span class="absolute flex items-center justify-center w-8 h-8 bg-accent/20 rounded-full -left-4 ring-4 ring-background border border-accent/50">
            <span class="w-5 h-5 text-accent">🍁</span>
          </span>
          <h3 class="text-xl font-semibold text-text-primary mb-1">Learning Naturally</h3>
          <p class="text-base font-normal text-text-secondary">BuddyBot adapts to your child's interests, encouraging deeper exploration and reinforcing concepts through dialogue.</p>
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
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-text-primary">See BuddyBot in Action</h2>
          <p class="text-lg text-text-secondary mb-8 max-w-md">
               Experience the intuitive voice interface firsthand with our live app preview (featured at the top of this page!). While chat interactions with custom robots currently use placeholders, full AI-powered conversations are launching very soon. See how BuddyBot makes learning engaging.
          </p>
          <a href="/features" class="btn-secondary inline-flex items-center hover:border-accent hover:text-accent">
              <span class="w-5 h-5 mr-2">📄</span>
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
           <div class="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/30">
              <span class="w-8 h-8 text-accent">🧠</span>
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
           <div class="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/30">
               <span class="w-8 h-8 text-accent">🗣️</span>
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
           <div class="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/30">
               <span class="w-8 h-8 text-accent">🚀</span>
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
           <div class="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/30">
               <span class="w-8 h-8 text-accent">💡</span>
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
         Listen to a sample interaction and imagine your child engaging with BuddyBot.
      </p>
      <VoiceDemo />
  </div>
</section>

<style lang="postcss">
  .gradient-text {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500;
  }
  .benefit-card {
       @apply bg-background-lighter/30 rounded-lg p-6 transition-all duration-300 border border-border hover:border-accent/50;
  }
  .card {
    @apply bg-background-lighter rounded-xl p-6 border border-border shadow-lg;
  }

  /* Button styles */
  .btn-primary {
    @apply bg-accent text-background font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform shadow-lg text-center;
  }
  .btn-primary:hover {
    background-color: theme('colors.accent.hover');
    transform: translateY(-0.25rem);
    box-shadow: theme('boxShadow.lg'), 0 0 15px 5px rgba(0, 209, 255, 0.2);
  }

  .btn-secondary {
    @apply bg-transparent border border-border text-text-primary font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out text-center;
  }
  .btn-secondary:hover {
    border-color: theme('colors.accent.DEFAULT');
    color: theme('colors.accent.DEFAULT');
  }
</style> 