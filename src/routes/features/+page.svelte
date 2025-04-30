<script lang="ts">
  import { onMount } from 'svelte';
  import VoiceDemo from '../../components/VoiceDemo.svelte';
  import MobilePreview from '../../components/MobilePreview.svelte';
  import Container from '$lib/components/layout/Container.svelte';
  import Section from '$lib/components/layout/Section.svelte';
  import StatusBadge from '$lib/components/status/StatusBadge.svelte';
  import WaitlistForm from '../../components/WaitlistForm.svelte';
  
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

  $: currentSubject = stemSubjects.find(s => s.id === activeSubject) ?? stemSubjects[0];
</script>

<svelte:head>
  <title>Features - BuddyBotLearning</title>
  <meta 
    name="description" 
    content="Discover BuddyBot's innovative features designed to make learning engaging and effective for children through AI-powered conversations."
  />
</svelte:head>

<!-- Hero Section -->
<Section spacing="xl">
  <Container>
    <div class="max-w-4xl mx-auto text-center space-y-6">
      <h1 class="text-display font-semibold">
        Features That Make Learning
        <span class="text-accent">Fun</span>
      </h1>
      <p class="text-body-lg">
        BuddyBot combines cutting-edge AI technology with proven educational principles to create
        an engaging learning experience that children love.
      </p>
    </div>
  </Container>
</Section>

<!-- Core Features -->
<Section spacing="xl" class_name="bg-background-surface border-y border-border">
  <Container>
    <div class="space-y-16">
      <div class="text-center space-y-4">
        <h2 class="text-h2">Core Features</h2>
        <p class="text-body-lg max-w-2xl mx-auto">
          Every feature is designed with children's natural learning patterns in mind.
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2">
        <div class="card space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-h3">Voice Interaction</h3>
            <StatusBadge type="coming-soon" />
          </div>
          <p>Natural voice conversations make learning accessible for children of all ages and reading levels.</p>
          <ul class="space-y-2 text-text-secondary">
            <li class="flex items-center">
              <span class="text-accent mr-2">✓</span>
              Natural language understanding
            </li>
            <li class="flex items-center">
              <span class="text-accent mr-2">✓</span>
              Age-appropriate responses
            </li>
            <li class="flex items-center">
              <span class="text-accent mr-2">✓</span>
              Multiple voice options
            </li>
          </ul>
        </div>

        <div class="card space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-h3">Personalized Learning</h3>
            <StatusBadge type="coming-soon" />
          </div>
          <p>AI that adapts to each child's interests, knowledge level, and learning style.</p>
          <ul class="space-y-2 text-text-secondary">
            <li class="flex items-center">
              <span class="text-accent mr-2">✓</span>
              Interest-based content
            </li>
            <li class="flex items-center">
              <span class="text-accent mr-2">✓</span>
              Adaptive difficulty
            </li>
            <li class="flex items-center">
              <span class="text-accent mr-2">✓</span>
              Progress tracking
            </li>
          </ul>
        </div>

        <div class="card space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-h3">STEM Focus</h3>
            <StatusBadge type="coming-soon" />
          </div>
          <p>Strong emphasis on science, technology, engineering, and mathematics.</p>
          <ul class="space-y-2 text-text-secondary">
            <li class="flex items-center">
              <span class="text-accent mr-2">✓</span>
              Real-world examples
            </li>
            <li class="flex items-center">
              <span class="text-accent mr-2">✓</span>
              Interactive experiments
            </li>
            <li class="flex items-center">
              <span class="text-accent mr-2">✓</span>
              Visual explanations
            </li>
          </ul>
        </div>

        <div class="card space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-h3">Parent Dashboard</h3>
            <StatusBadge type="coming-soon" />
          </div>
          <p>Complete oversight and control over your child's learning journey.</p>
          <ul class="space-y-2 text-text-secondary">
            <li class="flex items-center">
              <span class="text-accent mr-2">✓</span>
              Learning reports
            </li>
            <li class="flex items-center">
              <span class="text-accent mr-2">✓</span>
              Content filters
            </li>
            <li class="flex items-center">
              <span class="text-accent mr-2">✓</span>
              Goal setting
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Container>
</Section>

<!-- Safety Features -->
<Section spacing="xl">
  <Container>
    <div class="space-y-12">
      <div class="text-center space-y-4">
        <h2 class="text-h2">Built with Safety in Mind</h2>
        <p class="text-body-lg max-w-2xl mx-auto">
          BuddyBot prioritizes your child's safety with comprehensive protection measures.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="card space-y-4">
          <span class="text-4xl">🛡️</span>
          <h3 class="text-h3">Content Filtering</h3>
          <p>
            Multi-layer content filtering ensures all responses are age-appropriate and safe.
          </p>
        </div>

        <div class="card space-y-4">
          <span class="text-4xl">👀</span>
          <h3 class="text-h3">Parent Controls</h3>
          <p>
            Comprehensive controls let parents set boundaries and monitor activity.
          </p>
        </div>

        <div class="card space-y-4">
          <span class="text-4xl">🔒</span>
          <h3 class="text-h3">Data Privacy</h3>
          <p>
            Industry-leading security measures protect your family's privacy.
          </p>
        </div>
      </div>
    </div>
  </Container>
</Section>

<!-- Early Access Section -->
<Section spacing="xl" class_name="bg-background-surface border-y border-border">
  <Container max_width="lg">
    <div class="space-y-12">
      <div class="text-center space-y-4">
        <h2 class="text-h2">Experience These Features First</h2>
        <p class="text-body-lg max-w-2xl mx-auto">
          Join our early access program to be among the first to try BuddyBot's innovative features
          and help shape their development.
        </p>
      </div>

      <div class="max-w-xl mx-auto">
        <WaitlistForm />
      </div>
    </div>
  </Container>
</Section>

<style>

  @keyframes gradientFlow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
</style> 