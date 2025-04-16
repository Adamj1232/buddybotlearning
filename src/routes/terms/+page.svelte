<script lang="ts">
  import { onMount } from 'svelte';
  
  let activeSection = 'overview'; // Set default section
  
  const sections = [
    {
      id: 'overview',
      title: 'Overview',
      content: `Welcome to RoboLearn! These Terms of Service ("Terms") govern your use of our voice-controlled educational application. By using RoboLearn, you agree to these terms. If you're under 13, you need a parent or legal guardian's permission.`
    },
    {
      id: 'definitions',
      title: 'Definitions',
      content: `• "Service" refers to the RoboLearn application
• "User" means any person accessing the Service
• "Child User" means users under 13 years old
• "Parent" means a parent or legal guardian
• "Content" includes all educational materials and interactions`
    },
    {
      id: 'account-creation',
      title: 'Account Creation & Parental Consent',
      content: `• Parents must create and manage accounts for Child Users
• Valid parental consent required for users under 13
• Parents are responsible for maintaining account security
• One account per Child User
• Accurate information must be provided during registration`
    },
    {
      id: 'acceptable-use',
      title: 'Acceptable Use',
      content: `Users agree to:
• Use the Service for educational purposes only
• Not share account credentials
• Not attempt to access other users' data
• Not use the Service for harmful purposes
• Follow our community guidelines

Parents agree to:
• Monitor their child's use of the Service
• Ensure appropriate use of voice features
• Report any concerns or misuse`
    },
    {
      id: 'educational-content',
      title: 'Educational Content',
      content: `• Content is age-appropriate and educational
• We strive for accuracy but don't guarantee completeness
• Content may be updated or modified
• Parents can review and restrict content access
• Voice interactions are processed in real-time
• Content is customized based on age and learning level`
    },
    {
      id: 'safety-measures',
      title: 'Safety & Security Measures',
      content: `We implement:
• Real-time content filtering
• Voice interaction monitoring
• Inappropriate content blocking
• Secure data transmission
• Regular security updates
• Parental controls and oversight tools`
    },
    {
      id: 'privacy',
      title: 'Privacy & Data Protection',
      content: `• We follow COPPA guidelines
• Data collection is minimal and necessary
• Voice data is processed, not stored
• Parents can access and delete data
• See our Privacy Policy for details`
    },
    {
      id: 'changes',
      title: 'Changes to Service',
      content: `We may:
• Update features and content
• Modify or discontinue services
• Change pricing with notice
• Update these Terms
• Add new safety measures

We'll notify users of significant changes.`
    },
    {
      id: 'termination',
      title: 'Account Termination',
      content: `We may suspend or terminate accounts for:
• Violation of these Terms
• Inappropriate use
• Extended inactivity
• Parent/guardian request
• Legal requirements

Users can terminate accounts anytime.`
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      content: `• Service provided "as is"
• No guarantee of uninterrupted service
• Not liable for educational outcomes
• Limited liability for technical issues
• Force majeure exclusions apply`
    },
    {
      id: 'contact',
      title: 'Contact Information',
      content: `For questions about these Terms:
• Email: support@robolearn.ai
• Website: robolearn.ai/contact
• Mail: [Physical Address]

We aim to respond within 24 hours.`
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
  <title>Terms of Service - RoboLearn</title>
  <meta name="description" content="RoboLearn's terms of service, designed with children's safety and education in mind" />
</svelte:head>

<div class="min-h-screen bg-background">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="lg:grid lg:grid-cols-12 lg:gap-8">
      <!-- Sidebar -->
      <div class="hidden lg:block lg:col-span-3">
        <nav class="sticky top-24 space-y-2" aria-label="Terms of Service Sections">
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
            <span class="gradient-text">Terms of Service</span>
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
            <h3 class="text-xl font-bold mb-4">Questions About Our Terms?</h3>
            <p class="text-text-secondary mb-6">
              We're here to help! If you have any questions about our terms of service or need clarification, please reach out.
            </p>
            <div class="flex space-x-4">
              <a href="/contact" class="btn-primary inline-flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Support
              </a>
              <a href="/privacy" class="btn-secondary">View Privacy Policy</a>
            </div>
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