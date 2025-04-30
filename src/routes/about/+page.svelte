<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import Container from '$lib/components/layout/Container.svelte';
  import Section from '$lib/components/layout/Section.svelte';
  import WaitlistForm from '../../components/WaitlistForm.svelte';

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
  <title>About RoboLearn - Our Vision & Educational Approach</title>
  <meta 
    name="description" 
    content="Learn about RoboLearn's mission to make learning engaging and accessible for children through AI-powered conversations. Also includes structured data about our educational approach."
  />
  <script type="application/ld+json">
    {
      JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.robolearn.ai" // Replace with actual base URL
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "About Us"
            }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How Conversational Learning Works with RoboLearn",
          "description": "Understand the steps involved in RoboLearn's voice-based educational interaction.",
          "step": [
            {
              "@type": "HowToStep",
              "name": "Ask a Question",
              "text": "The child uses simple voice commands to ask RoboLearn about any topic they are curious about.",
              "url": "https://www.robolearn.ai/about#how-it-works" // Link to relevant section
            },
            {
              "@type": "HowToStep",
              "name": "Engage in Conversation",
              "text": "The AI companion provides an age-appropriate, informative answer in a friendly, conversational style.",
              "url": "https://www.robolearn.ai/about#how-it-works"
            },
            {
              "@type": "HowToStep",
              "name": "Explore Deeper",
              "text": "The AI encourages further exploration with follow-up questions or related concepts based on the child's interest.",
              "url": "https://www.robolearn.ai/about#how-it-works"
            },
            {
              "@type": "HowToStep",
              "name": "Learn Naturally",
              "text": "Knowledge is reinforced through dialogue and repetition within the natural flow of conversation, adapting complexity as needed.",
              "url": "https://www.robolearn.ai/about#how-it-works"
            }
          ]
        }
      ])
    }
  </script>
</svelte:head>

<div class="min-h-screen bg-background">
  <!-- Vision Section -->
  <section class="relative py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16" in:fade={{ duration: 800, delay: 200 }}>
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          <span class="gradient-text">Our Vision</span>
        </h1>
        <p class="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
          <strong>Our Mission:</strong> To transform children's natural curiosity into meaningful learning experiences through safe, engaging, and personalized voice conversations with an AI companion.
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
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">
        <span class="gradient-text">Our Educational Philosophy</span>
      </h2>
      <p class="text-lg text-text-secondary text-center max-w-3xl mx-auto mb-16">
        We believe learning is most effective when it's driven by curiosity and happens naturally through conversation. RoboLearn isn't about lessons or levels; it's about empowering children to explore their world by asking questions.
      </p>

      <div id="how-it-works" class="text-left max-w-4xl mx-auto mb-16 scroll-mt-20">
        <h3 class="text-2xl font-semibold text-text-primary mb-4">How Conversational Learning Works</h3>
        <p class="text-text-secondary mb-4">Instead of passive screen time or rigid drills, RoboLearn leverages the power of dialogue:</p>
        <ul class="list-disc list-inside space-y-2 text-text-secondary mb-6">
          <li><strong class="text-cyan-400">Child-Led Exploration:</strong> The child's questions dictate the learning path. Asking "Why is the sky blue?" can lead to discussions about light, atmosphere, and perception.</li>
          <li><strong class="text-cyan-400">Active Engagement:</strong> Voice interaction requires active participation, keeping children focused and involved compared to passively watching videos.</li>
          <li><strong class="text-cyan-400">Contextual Understanding:</strong> Concepts are explained within the context of the child's question, making information more relevant and memorable.</li>
          <li><strong class="text-cyan-400">Adaptive Complexity:</strong> The AI adjusts explanations based on the conversation flow and the child's apparent understanding, ensuring content is always age-appropriate.</li>
        </ul>

        <h4 class="text-xl font-semibold text-text-primary mb-3">Example Learning Topics:</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-text-secondary mb-6">
          <p><strong>Science:</strong> How do volcanoes erupt? Why do leaves change color? What are planets made of?</p>
          <p><strong>Biology:</strong> How do fish breathe underwater? Why do birds migrate? What do different animals eat?</p>
          <p><strong>Technology:</strong> How does the internet work? What makes a computer run? How do robots move?</p>
          <p><strong>History & Culture:</strong> Who built the pyramids? What was life like long ago? Why do we celebrate certain holidays?</p>
        </div>
      </div>
      
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

      <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h3 class="text-2xl font-semibold text-text-primary mb-4">Voice Learning vs. Screen Learning</h3>
          <p class="text-text-secondary mb-4">While screens can offer visual information, voice-first learning provides unique benefits:</p>
          <ul class="list-disc list-inside space-y-2 text-text-secondary">
            <li>Reduces passive screen time.</li>
            <li>Encourages active listening and verbal expression.</li>
            <li>Develops conversational skills and patience.</li>
            <li>Allows learning during other activities (e.g., drawing, playing).</li>
            <li>More natural interaction method for young children.</li>
          </ul>
        </div>
        <div>
           <h3 class="text-2xl font-semibold text-text-primary mb-4">Age-Appropriate Adaptation</h3>
           <p class="text-text-secondary mb-4">Our AI is designed to tailor explanations:</p>
           <ul class="list-disc list-inside space-y-2 text-text-secondary">
             <li><strong>Ages 4-6:</strong> Simple vocabulary, concrete examples, short sentences. (e.g., "The sky looks blue because tiny bits in the air scatter the blue light from the sun best!")</li>
             <li><strong>Ages 7-9:</strong> Introduction of basic concepts, slightly longer explanations. (e.g., "Sunlight contains all colors, but air molecules scatter blue light more than other colors, making the sky appear blue.")</li>
             <li><strong>Ages 10-12:</strong> More complex terms, connections to broader concepts. (e.g., "This phenomenon, called Rayleigh scattering, affects shorter wavelengths like blue and violet more strongly...")</li>
           </ul>
        </div>
      </div>

      <!-- Expert Perspective Placeholder -->
      <div class="max-w-3xl mx-auto text-center border-t border-border-primary pt-12 mt-12">
         <h3 class="text-2xl font-semibold text-text-primary mb-4">Expert Perspective</h3>
         <blockquote class="text-text-secondary italic mb-4">
           "Conversational AI holds immense potential for personalized education. By allowing children to lead the inquiry process, platforms like RoboLearn can cultivate deeper conceptual understanding and a lifelong love for learning."
         </blockquote>
         <p class="text-sm text-cyan-400">- Placeholder Name, Child Development Expert</p>
      </div>

    </div>
  </section>

  <!-- For Parents Section -->
  <section class="relative py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">
          <span class="gradient-text">What Parents Should Know</span>
        </h2>
        <p class="text-lg text-text-secondary text-center max-w-3xl mx-auto mb-16">
          RoboLearn is designed to be a helpful, safe, and engaging tool for your child's development. Here's how it benefits both children and parents.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
           <div class="parent-benefit-card">
             <h3 class="text-xl font-semibold text-cyan-400 mb-3">✅ Tangible Learning Benefits</h3>
             <ul class="list-disc list-inside space-y-2 text-text-secondary">
               <li>Satisfies endless curiosity with reliable, age-appropriate answers.</li>
               <li>Builds foundational knowledge across diverse subjects, especially STEM.</li>
               <li>Improves communication skills and vocabulary through interaction.</li>
               <li>Offers guilt-free engagement that is educational, not just entertainment.</li>
               <li>Complements school learning by reinforcing concepts in a different context.</li>
             </ul>
           </div>
           <div class="parent-benefit-card">
             <h3 class="text-xl font-semibold text-cyan-400 mb-3">🛡️ Addressing Common Concerns</h3>
             <ul class="list-disc list-inside space-y-2 text-text-secondary">
               <li><strong>Safety First:</strong> Rigorous content filters and ongoing moderation ensure safe exploration. See our <a href="/safety" class="text-cyan-400 hover:underline font-medium">Safety Page</a> for details.</li>
               <li><strong>Privacy Protected:</strong> We follow strict data handling practices (COPPA compliant). See our <a href="/privacy" class="text-cyan-400 hover:underline font-medium">Privacy Policy</a> for specifics.</li>
               <li><strong>Balanced Use:</strong> Designed for focused interaction, not endless passive consumption. Future parental controls planned.</li>
               <li><strong>Accuracy:</strong> While AI is constantly learning, we prioritize factual information from reliable sources.</li>
             </ul>
           </div>
        </div>

        <div class="max-w-3xl mx-auto mt-16 p-6 bg-background-light rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold text-cyan-400 mb-3">Making the Decision: Is RoboLearn Right for Your Child?</h3>
          <p class="text-text-secondary mb-2">RoboLearn may be a great fit if your child:</p>
          <ul class="list-disc list-inside space-y-1 text-text-secondary text-sm mb-4">
            <li>Frequently asks "why" and shows natural curiosity.</li>
            <li>Enjoys talking and expressing themselves verbally.</li>
            <li>Shows interest in science, animals, how things work, etc.</li>
            <li>Benefits from learning through conversation rather than just visuals.</li>
          </ul>
          <p class="text-text-secondary text-sm">It complements traditional learning methods by offering a unique, interactive way to explore information based on individual interest.</p>
        </div>

        <div class="text-center mt-16">
          <a href="/waitlist" class="btn-primary">Join the Waitlist</a>
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

  .parent-benefit-card {
     @apply bg-background-lighter rounded-lg p-6 shadow-md;
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