<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  interface TeamMember {
    name: string;
    role: string;
    expertise: string[];
    image: string;
  }

  // Placeholder team data - to be replaced with actual team members
  const teamMembers: TeamMember[] = [
    {
      name: "Dr. Sarah Chen",
      role: "Educational Director",
      expertise: ["Child Development", "STEM Education", "Learning Psychology"],
      image: "/images/team/placeholder-1.png"
    },
    {
      name: "Michael Rodriguez",
      role: "AI Learning Specialist",
      expertise: ["Machine Learning", "Educational Technology", "Child Safety"],
      image: "/images/team/placeholder-2.png"
    },
    {
      name: "Dr. Emily Thompson",
      role: "Curriculum Designer",
      expertise: ["Early Childhood Education", "STEM Content", "Voice Interface Design"],
      image: "/images/team/placeholder-3.png"
    }
  ];

  const learningStages = [
    {
      stage: "Question",
      description: "Child asks a natural question about their world",
      icon: "🤔"
    },
    {
      stage: "Engage",
      description: "AI companion provides age-appropriate explanation",
      icon: "🗣️"
    },
    {
      stage: "Explore",
      description: "Interactive follow-up questions deepen understanding",
      icon: "🔍"
    },
    {
      stage: "Learn",
      description: "Knowledge is reinforced through natural conversation",
      icon: "💡"
    }
  ];

  let isVisible = false;

  onMount(() => {
    isVisible = true;
  });
</script>

<svelte:head>
  <title>About RoboLearn - Our Vision for Children's Learning</title>
  <meta name="description" content="Discover how RoboLearn's voice-controlled AI companion transforms children's natural curiosity into meaningful learning experiences." />
</svelte:head>

<div class="min-h-screen bg-background">
  <!-- Vision Section -->
  <section class="relative py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16" in:fade={{ duration: 800, delay: 200 }}>
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          <span class="gradient-text">Our Vision</span>
        </h1>
        <p class="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
          Transforming children's natural curiosity into meaningful learning experiences through the power of conversation.
        </p>
        <div class="stats-container grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div class="stat-card">
            <h3 class="text-cyan-400 text-4xl font-bold">300+</h3>
            <p class="text-text-secondary">Questions asked by children daily</p>
          </div>
          <div class="stat-card">
            <h3 class="text-cyan-400 text-4xl font-bold">24/7</h3>
            <p class="text-text-secondary">Learning companion availability</p>
          </div>
          <div class="stat-card">
            <h3 class="text-cyan-400 text-4xl font-bold">100%</h3>
            <p class="text-text-secondary">Safe and age-appropriate</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Educational Philosophy -->
  <section class="relative py-24 bg-background-light">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">
        <span class="gradient-text">Our Educational Philosophy</span>
      </h2>
      
      <div class="learning-journey grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        {#each learningStages as stage, i}
          <div 
            class="stage-card"
            in:fly={{ y: 50, delay: i * 200, duration: 800 }}
          >
            <div class="text-4xl mb-4">{stage.icon}</div>
            <h3 class="text-xl font-bold text-cyan-400 mb-2">{stage.stage}</h3>
            <p class="text-text-secondary">{stage.description}</p>
          </div>
        {/each}
      </div>

      <div class="age-adaptability grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div class="adaptability-card">
          <h3 class="text-xl font-bold text-cyan-400 mb-4">Ages 4-6</h3>
          <p class="text-text-secondary">Simple, concrete explanations with relatable examples from daily life</p>
        </div>
        <div class="adaptability-card">
          <h3 class="text-xl font-bold text-cyan-400 mb-4">Ages 7-9</h3>
          <p class="text-text-secondary">More detailed explanations with basic scientific concepts</p>
        </div>
        <div class="adaptability-card">
          <h3 class="text-xl font-bold text-cyan-400 mb-4">Ages 10-12</h3>
          <p class="text-text-secondary">Complex concepts with real-world applications and deeper exploration</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Team Section -->
  <section class="relative py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">
        <span class="gradient-text">Our Team</span>
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each teamMembers as member, i}
          <div 
            class="team-card group"
            in:fly={{ y: 50, delay: i * 200, duration: 800 }}
          >
            <div class="relative overflow-hidden rounded-lg mb-4">
              <img 
                src={member.image} 
                alt={member.name}
                class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 class="text-xl font-bold text-cyan-400 mb-2">{member.name}</h3>
            <p class="text-text-secondary mb-4">{member.role}</p>
            <div class="expertise-tags flex flex-wrap gap-2">
              {#each member.expertise as skill}
                <span class="expertise-tag">{skill}</span>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
</div>

<style lang="postcss">
  .stat-card {
    @apply bg-background-light rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105;
  }

  .stage-card {
    @apply bg-background rounded-lg p-6 shadow-lg text-center;
  }

  .adaptability-card {
    @apply bg-background rounded-lg p-6 shadow-lg;
  }

  .team-card {
    @apply bg-background-light rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-cyan-400/20;
  }

  .expertise-tag {
    @apply bg-background px-3 py-1 rounded-full text-sm text-cyan-400;
  }

  .gradient-text {
    @apply bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent;
  }
</style> 