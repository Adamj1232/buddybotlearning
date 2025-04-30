<script lang="ts">
  import { onMount } from 'svelte';
  import WaitlistForm from '../../components/WaitlistForm.svelte';

  let activeSection = 'overview';
  
  const sections = [
    {
      id: 'overview',
      title: 'Overview',
      content: `BuddyBotLearning is committed to protecting the privacy of children and families. This privacy policy explains how we collect, use, and safeguard your information when you use our voice-controlled educational application.`
    },
    {
      id: 'information-collection',
      title: 'Information We Collect',
      content: `We collect minimal information necessary to provide our service:

• Email address (from parents/guardians only)
• Voice data (processed in real-time, not stored)
• Learning preferences and progress
• Age range (to customize content)
• Device information and usage statistics`
    },
    {
      id: 'children-privacy',
      title: 'Children\'s Privacy (COPPA Compliance)',
      content: `We follow strict guidelines to protect children's privacy:

• Parental consent required for users under 13
• No personal information collected from children
• Voice data is processed in real-time and not stored
• No third-party tracking of children's activities
• Parents can review and delete their child's data`
    },
    {
      id: 'data-usage',
      title: 'How We Use Information',
      content: `Your information is used to:

• Provide personalized learning experiences
• Improve our educational content
• Send product updates (to parents only)
• Ensure platform safety and security
• Analyze aggregate usage patterns`
    },
    {
      id: 'data-security',
      title: 'Data Security',
      content: `We implement robust security measures:

• End-to-end encryption for all data
• Regular security audits
• Secure data centers
• Employee security training
• Incident response procedures`
    },
    {
      id: 'parental-rights',
      title: 'Parental Rights & Controls',
      content: `Parents/guardians can:

• Review their child's activities
• Delete account data
• Restrict features
• Update consent preferences
• Contact us for any concerns`
    },
    {
      id: 'updates',
      title: 'Policy Updates',
      content: `We may update this policy to reflect:

• New features and functionality
• Regulatory requirements
• Industry best practices
• Parent and educator feedback

We'll notify you of significant changes.`
    }
  ];

  onMount(() => {
    // Set initial section based on URL hash
    const hash = window.location.hash.slice(1);
    if (hash && sections.some(section => section.id === hash)) {
      activeSection = hash;
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });

  function handleNavClick(sectionId: string) {
    activeSection = sectionId;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      history.replaceState(null, '', `#${sectionId}`);
    }
  }
</script>

<svelte:head>
  <title>Privacy Policy - BuddyBotLearning</title>
  <meta name="description" content="BuddyBotLearning's commitment to protecting children's privacy and data security" />
</svelte:head>

<div class="min-h-screen bg-background">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="lg:grid lg:grid-cols-12 lg:gap-8">
      <!-- Sidebar -->
      <div class="hidden lg:block lg:col-span-3">
        <nav class="sticky top-24 space-y-2" aria-label="Privacy Policy Sections">
          {#each sections as section}
            <button
              on:click={() => handleNavClick(section.id)}
              class="w-full text-left px-3 py-2 text-sm rounded-lg transition-colors duration-200
                {activeSection === section.id ?
                  'bg-cyan-400/10 text-cyan-400 font-medium' :
                  'text-text-secondary hover:text-text-primary hover:bg-background-lighter'}"
              aria-current={activeSection === section.id ? 'true' : 'false'}
            >
              {section.title}
            </button>
          {/each}
        </nav>
      </div>

      <!-- Main Content -->
      <div class="lg:col-span-9">
        <div class="prose prose-invert max-w-none">
          <h1 class="text-4xl font-bold mb-8">
            <span class="gradient-text">Privacy Policy</span>
          </h1>

          <div class="text-text-secondary mb-12">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>

          {#each sections as section}
            <section
              id={section.id}
              class="mb-12 scroll-mt-24"
            >
              <h2 class="text-2xl font-bold mb-4">{section.title}</h2>
              <div class="text-text-secondary whitespace-pre-line">
                {section.content}
              </div>
            </section>
          {/each}

          <div class="mt-16 p-6 bg-background-lighter rounded-xl border border-border-primary">
            <h3 class="text-xl font-bold mb-4">Questions About Our Privacy Policy?</h3>
            <p class="text-text-secondary mb-6">
              We're committed to protecting your family's privacy. If you have any questions or concerns, please don't hesitate to contact us.
            </p>
            <a href="/contact" class="btn-primary inline-flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </a>
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

  :global(.prose) {
    @apply text-text-primary;
  }

  :global(.prose strong) {
    @apply text-text-primary;
  }

  :global(.prose a) {
    @apply text-cyan-400 no-underline hover:text-cyan-300;
  }

  :global(.prose h1, .prose h2, .prose h3) {
    @apply text-text-primary;
  }
</style> 