<script lang="ts">
  import { inview } from 'svelte-inview';
  import { onMount } from 'svelte';
  import VoiceDemo from '../../components/VoiceDemo.svelte';
  import MobilePreview from '../../components/MobilePreview.svelte';
  
  let activeFeature = '';
  let activeTechSpec = '';
  let activeSubject = 'physics';
  let spotlightIndex = 0;

  const voiceFeatures = [
    {
      id: 'natural-language',
      title: 'Natural Language Understanding',
      description: 'Advanced AI that understands and adapts to your child\'s unique way of asking questions.',
      icon: '🗣️'
    },
    {
      id: 'child-optimized',
      title: 'Child-Speech Optimized',
      description: 'Specially trained to understand children\'s pronunciation and vocabulary levels.',
      icon: '👶'
    },
    {
      id: 'multilingual',
      title: 'Multilingual Support',
      description: 'Learn and explore in multiple languages, supporting global curiosity.',
      icon: '🌍'
    },
    {
      id: 'voice-accuracy',
      title: 'High Accuracy Recognition',
      description: 'State-of-the-art voice recognition designed for children\'s voices.',
      icon: '🎯'
    }
  ] as const;

  const adaptiveFeatures = [
    {
      id: 'age-appropriate',
      title: 'Age-Appropriate Learning',
      description: 'Content automatically adjusts to match your child\'s age and understanding.',
      icon: '📚'
    },
    {
      id: 'progress-tracking',
      title: 'Smart Progress Tracking',
      description: 'AI that remembers past conversations and builds upon previous knowledge.',
      icon: '📈'
    },
    {
      id: 'interest-based',
      title: 'Interest-Based Learning',
      description: 'Personalizes explanations using topics your child loves.',
      icon: '⭐'
    },
    {
      id: 'depth-adjustment',
      title: 'Dynamic Depth Adjustment',
      description: 'Seamlessly adjusts explanation complexity based on comprehension.',
      icon: '🎚️'
    }
  ] as const;

  const stemSubjects = [
    {
      id: 'physics',
      title: 'Physics & Space',
      description: 'From basic forces to cosmic wonders',
      icon: '🚀',
      examples: [
        { question: "How do rockets work?", age: 6 },
        { question: "Why do things fall down?", age: 4 },
        { question: "What are black holes?", age: 8 }
      ]
    },
    {
      id: 'biology',
      title: 'Biology & Nature',
      description: 'Life sciences and natural world',
      icon: '🌱',
      examples: [
        { question: "Why do leaves change color?", age: 5 },
        { question: "How do birds fly?", age: 6 },
        { question: "Why do we need to sleep?", age: 7 }
      ]
    },
    {
      id: 'chemistry',
      title: 'Chemistry & Matter',
      description: 'Elements and reactions around us',
      icon: '🧪',
      examples: [
        { question: "Why does ice float?", age: 6 },
        { question: "What are clouds made of?", age: 5 },
        { question: "Why does bread rise?", age: 7 }
      ]
    },
    {
      id: 'math',
      title: 'Mathematics',
      description: 'Numbers in everyday life',
      icon: '🔢',
      examples: [
        { question: "Why do we need math?", age: 6 },
        { question: "How do patterns work?", age: 5 },
        { question: "What are fractions?", age: 8 }
      ]
    }
  ] as const;

  const robotCustomizations = [
    {
      id: 'personality',
      title: 'Personality Type',
      description: 'Adjust your robot\'s teaching style',
      options: ['Enthusiastic', 'Patient', 'Playful', 'Methodical']
    },
    {
      id: 'interests',
      title: 'Interest Areas',
      description: 'Focus on your child\'s favorite subjects',
      options: ['Space', 'Animals', 'Dinosaurs', 'Inventions']
    },
    {
      id: 'learning-style',
      title: 'Learning Style',
      description: 'Match your child\'s way of understanding',
      options: ['Visual', 'Hands-on', 'Story-based', 'Question-led']
    },
    {
      id: 'complexity',
      title: 'Explanation Style',
      description: 'Set the default complexity level',
      options: ['Simple', 'Detailed', 'Technical', 'Mixed']
    }
  ] as const;

  const techSpecs = [
    {
      id: 'platform',
      title: 'Platform Support',
      specs: [
        { name: 'Mobile OS', value: 'iOS 14+, Android 10+' },
        { name: 'Web App', value: 'All modern browsers' },
        { name: 'Offline Mode', value: 'Available' }
      ]
    },
    {
      id: 'performance',
      title: 'Performance',
      specs: [
        { name: 'Response Time', value: '< 1 second' },
        { name: 'Voice Recognition', value: '98% accuracy' },
        { name: 'Language Support', value: '12 languages' }
      ]
    },
    {
      id: 'security',
      title: 'Security & Privacy',
      specs: [
        { name: 'Data Encryption', value: 'End-to-end' },
        { name: 'Content Filtering', value: 'Real-time AI' },
        { name: 'Privacy Standard', value: 'COPPA Compliant' }
      ]
    }
  ] as const;

  // Add spotlight features
  const spotlightFeatures = [
    {
      title: "Voice-First Learning",
      description: "Natural conversations that adapt to your child's way of speaking",
      icon: "🗣️",
      stats: "98% recognition accuracy for children's voices"
    },
    {
      title: "Personalized STEM Education",
      description: "AI-driven content that grows with your child's interests and abilities",
      icon: "🚀",
      stats: "Over 10,000 topics covered across all STEM subjects"
    },
    {
      title: "Safe Learning Environment",
      description: "COPPA-compliant platform with real-time content filtering",
      icon: "🛡️",
      stats: "100% parent-controlled learning experience"
    }
  ];

  // Rotate spotlight features
  onMount(() => {
    const interval = setInterval(() => {
      spotlightIndex = (spotlightIndex + 1) % spotlightFeatures.length;
    }, 5000);

    return () => clearInterval(interval);
  });

  function handleIntersect(e: CustomEvent<{ inView: boolean; entry: IntersectionObserverEntry }>) {
    if (e.detail.inView) {
      const target = e.detail.entry.target as HTMLElement;
      target.classList.add('is-visible');
    }
  }

  $: currentSubject = stemSubjects.find(s => s.id === activeSubject) ?? stemSubjects[0];
</script>

<div class="min-h-screen bg-[#171923] text-white">
  <!-- Hero Section -->
  <section class="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12" use:inview on:inview_change={handleIntersect}>
        <h1 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00D1FF] to-[#73CBFF] bg-clip-text text-transparent">
          Cutting-Edge Features for Natural Learning
        </h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">
          Discover how our AI companion makes learning an engaging, natural conversation for your child.
        </p>
      </div>
    </div>
  </section>

  <!-- Add Feature Spotlight section after Hero -->
  <section class="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#171923] to-[#1E2130]">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12" use:inview on:inview_change={handleIntersect}>
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Feature Spotlight</h2>
        <div class="relative h-[200px] overflow-hidden">
          {#each spotlightFeatures as feature, i}
            <div 
              class="absolute w-full transition-all duration-500 transform"
              style="opacity: {i === spotlightIndex ? '1' : '0'}; 
                     transform: translateY({i === spotlightIndex ? '0' : '20px'})">
              <div class="bg-[#171923] p-8 rounded-xl border border-[#00D1FF]/20 shadow-glow">
                <span class="text-3xl mb-4 block">{feature.icon}</span>
                <h3 class="text-xl font-bold text-[#00D1FF] mb-2">{feature.title}</h3>
                <p class="text-gray-300 mb-4">{feature.description}</p>
                <p class="text-sm text-[#00D1FF]">{feature.stats}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- Voice Interaction Section -->
  <section class="py-16 px-4 md:px-8 lg:px-16 bg-[#1E2130]">
    <div class="max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-8">
          <h2 class="text-3xl md:text-4xl font-bold">Voice Interaction</h2>
          <p class="text-xl text-gray-300">
            Natural conversations powered by advanced AI, designed specifically for children's voices and learning patterns.
          </p>
          
          <div class="grid sm:grid-cols-2 gap-4">
            {#each voiceFeatures as feature}
              <button
                class="bg-[#171923] p-6 rounded-xl border border-[#00D1FF]/20 hover:border-[#00D1FF] transition-all duration-300
                       {activeFeature === feature.id ? 'border-[#00D1FF] shadow-glow' : ''}"
                on:click={() => activeFeature = feature.id}
                use:inview
                on:inview_change={handleIntersect}
              >
                <span class="text-2xl mb-3 block">{feature.icon}</span>
                <h3 class="text-lg font-semibold text-[#00D1FF] mb-2">{feature.title}</h3>
                <p class="text-gray-300 text-sm">{feature.description}</p>
              </button>
            {/each}
          </div>
        </div>

        <div class="relative">
          <VoiceDemo />
        </div>
      </div>
    </div>
  </section>

  <!-- Adaptive Learning Section -->
  <section class="py-16 px-4 md:px-8 lg:px-16">
    <div class="max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="order-2 lg:order-1">
          <MobilePreview 
            robotName="Astro"
            question="Why is the sky blue?"
            answer={activeFeature === 'age-appropriate' 
              ? "The sky looks blue because sunlight bounces off tiny bits in the air, like when you shine a flashlight through water!" 
              : "The sky appears blue due to a phenomenon called Rayleigh scattering, where sunlight interacts with air molecules, scattering blue wavelengths more than others."}
            voiceState="responding"
          />
        </div>

        <div class="space-y-8 order-1 lg:order-2">
          <h2 class="text-3xl md:text-4xl font-bold">Adaptive Learning</h2>
          <p class="text-xl text-gray-300">
            An AI that grows with your child, providing increasingly sophisticated explanations as their understanding deepens.
          </p>
          
          <div class="grid sm:grid-cols-2 gap-4">
            {#each adaptiveFeatures as feature}
              <button
                class="bg-[#1E2130] p-6 rounded-xl border border-[#00D1FF]/20 hover:border-[#00D1FF] transition-all duration-300
                       {activeFeature === feature.id ? 'border-[#00D1FF] shadow-glow' : ''}"
                on:click={() => activeFeature = feature.id}
                use:inview
                on:inview_change={handleIntersect}
              >
                <span class="text-2xl mb-3 block">{feature.icon}</span>
                <h3 class="text-lg font-semibold text-[#00D1FF] mb-2">{feature.title}</h3>
                <p class="text-gray-300 text-sm">{feature.description}</p>
              </button>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- STEM Content Excellence -->
  <section class="py-16 px-4 md:px-8 lg:px-16 bg-[#1E2130]">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">STEM Content Excellence</h2>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">
          Explore a world of knowledge through age-appropriate explanations of complex concepts.
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Subject Selection -->
        <div class="space-y-4">
          {#each stemSubjects as subject}
            <button
              class="w-full text-left p-4 rounded-xl border transition-all duration-300
                     {activeSubject === subject.id 
                       ? 'bg-[#171923] border-[#00D1FF] shadow-glow' 
                       : 'bg-[#171923]/50 border-[#00D1FF]/20 hover:border-[#00D1FF]/50'}"
              on:click={() => activeSubject = subject.id}
            >
              <div class="flex items-center space-x-3">
                <span class="text-2xl">{subject.icon}</span>
                <div>
                  <h3 class="font-semibold text-[#00D1FF]">{subject.title}</h3>
                  <p class="text-sm text-gray-300">{subject.description}</p>
                </div>
              </div>
            </button>
          {/each}
        </div>

        <!-- Example Questions -->
        <div class="lg:col-span-2 bg-[#171923] rounded-xl p-6 border border-[#00D1FF]/20">
          <h3 class="text-xl font-semibold mb-6 flex items-center">
            <span class="text-2xl mr-3">{currentSubject.icon}</span>
            {currentSubject.title} Examples
          </h3>
          <div class="space-y-4">
            {#each currentSubject.examples as example}
              <div class="p-4 bg-[#1E2130] rounded-lg">
                <div class="flex justify-between items-start mb-2">
                  <p class="text-[#00D1FF] font-medium">{example.question}</p>
                  <span class="text-sm text-gray-300">Age {example.age}+</span>
                </div>
                <MobilePreview 
                  robotName="Astro"
                  question={example.question}
                  answer="Loading personalized response..."
                  voiceState="processing"
                />
              </div>
            {/each}
          </div>
        </div>
      </div>

      <!-- Add cross-selling links in STEM Content Excellence section -->
      <div class="mt-6 p-4 bg-[#171923]/50 rounded-lg border border-[#00D1FF]/20">
        <h4 class="text-[#00D1FF] font-semibold mb-2">Related Features</h4>
        <div class="flex flex-wrap gap-2">
          <button 
            class="px-3 py-1 text-sm rounded-full bg-[#171923] border border-[#00D1FF]/20 hover:border-[#00D1FF] transition-all duration-300"
            on:click={() => activeFeature = 'voice-accuracy'}>
            Voice Recognition
          </button>
          <button 
            class="px-3 py-1 text-sm rounded-full bg-[#171923] border border-[#00D1FF]/20 hover:border-[#00D1FF] transition-all duration-300"
            on:click={() => activeFeature = 'age-appropriate'}>
            Age-Appropriate Learning
          </button>
          <button 
            class="px-3 py-1 text-sm rounded-full bg-[#171923] border border-[#00D1FF]/20 hover:border-[#00D1FF] transition-all duration-300"
            on:click={() => activeFeature = 'interest-based'}>
            Interest-Based Content
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Customization & Personalization -->
  <section class="py-16 px-4 md:px-8 lg:px-16">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Customization & Personalization</h2>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">
          Create the perfect learning companion that adapts to your child's unique needs.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each robotCustomizations as custom}
          <div class="bg-[#1E2130] rounded-xl p-6 border border-[#00D1FF]/20 hover:border-[#00D1FF]/50 transition-all duration-300">
            <h3 class="text-lg font-semibold text-[#00D1FF] mb-3">{custom.title}</h3>
            <p class="text-sm text-gray-300 mb-4">{custom.description}</p>
            <div class="space-y-2">
              {#each custom.options as option}
                <button 
                  class="w-full p-2 text-sm rounded-lg border border-[#00D1FF]/20 hover:border-[#00D1FF] transition-all duration-300
                         {activeFeature === `${custom.id}-${option}` ? 'bg-[#00D1FF]/10 border-[#00D1FF]' : 'bg-[#171923]'}"
                  on:click={() => activeFeature = `${custom.id}-${option}`}
                >
                  {option}
                </button>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Technical Specifications -->
  <section class="py-16 px-4 md:px-8 lg:px-16 bg-[#1E2130]">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Technical Specifications</h2>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">
          Built with cutting-edge technology to ensure a seamless learning experience.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        {#each techSpecs as spec}
          <div 
            class="bg-[#171923] rounded-xl p-6 border border-[#00D1FF]/20 hover:border-[#00D1FF]/50 transition-all duration-300"
            use:inview
            on:inview_change={handleIntersect}
          >
            <h3 class="text-lg font-semibold text-[#00D1FF] mb-4">{spec.title}</h3>
            <div class="space-y-3">
              {#each spec.specs as detail}
                <div class="flex justify-between items-center">
                  <span class="text-gray-300">{detail.name}</span>
                  <span class="text-[#00D1FF] font-medium">{detail.value}</span>
                </div>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Call to Action -->
  <section class="py-20 px-4 md:px-8 lg:px-16">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Start Learning?</h2>
      <p class="text-xl text-gray-300 mb-8">
        Join our waitlist to be among the first to experience the future of children's education.
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
  :global(.is-visible) {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }

  button {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out, border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .shadow-glow {
    box-shadow: 0 0 20px rgba(0, 209, 255, 0.1);
  }

  /* Add smooth gradient animation */
  @keyframes gradientFlow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  section {
    position: relative;
  }

  section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 209, 255, 0.2), transparent);
    animation: gradientFlow 3s ease infinite;
    background-size: 200% 200%;
  }
</style> 