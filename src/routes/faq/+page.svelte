<script lang="ts">
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@rgossiaux/svelte-headlessui';
  import Icon from '@iconify/svelte';

  const faqSections = [
    {
      category: 'About RoboLearn',
      questions: [
        {
          q: 'What is RoboLearn?',
          a: 'RoboLearn is a voice-controlled AI learning companion for children aged 4-12. It uses a mobile app interface where kids can ask questions about the world and receive safe, age-appropriate answers from a friendly AI robot.'
        },
        {
          q: 'What ages is RoboLearn designed for?',
          a: "RoboLearn is primarily designed for children between the ages of 4 and 12. The AI adapts its language and complexity based on the child's interaction style and inferred age."
        },
        {
          q: 'How does RoboLearn differ from other educational apps?',
          a: "Unlike curriculum-based apps, RoboLearn focuses on answering a child's natural questions through voice interaction. It encourages curiosity-driven learning rather than following a set lesson plan."
        }
      ]
    },
    {
      category: 'Educational Approach',
      questions: [
        {
          q: 'What subjects does RoboLearn cover?',
          a: "RoboLearn aims to cover a wide range of STEM (Science, Technology, Engineering, Math) topics and general knowledge about the world, driven by the child's questions. It's designed to explain complex topics simply."
        },
        {
          q: 'How does RoboLearn support learning?',
          a: "It fosters critical thinking by encouraging questions, expands vocabulary through conversation, makes STEM topics accessible, and supports self-directed learning by following the child's interests."
        },
        {
          q: 'Is there a structured curriculum?',
          a: "No, RoboLearn does not follow a rigid curriculum. Learning is driven by the child's curiosity and the questions they ask, promoting a more natural and engaging discovery process."
        }
      ]
    },
    {
      category: 'Safety & Privacy',
      questions: [
        {
          q: 'How do you ensure content is safe for children?',
          a: "We use multiple layers of content filtering and moderation designed specifically for children. All AI responses are vetted for age-appropriateness and safety before being delivered."
        },
        {
          q: 'How is my child\'s privacy protected?',
          a: "We adhere to strict privacy standards, including COPPA compliance. Voice data is processed securely and anonymized where possible. Please see our Privacy Policy for full details."
        },
        {
          q: 'Are there parental controls?',
          a: "Yes, we plan to offer a parent dashboard allowing oversight of topics discussed and controls over usage time and potentially content areas."
        }
      ]
    },
    {
      category: 'Technology & Access',
      questions: [
        {
          q: 'What devices are required?',
          a: "RoboLearn is a mobile application, initially planned for iOS and Android smartphones and tablets. It requires an internet connection for the AI to function."
        },
        {
          q: 'How does the voice recognition work?',
          a: "We use advanced speech recognition technology optimized for children's voices and speech patterns to ensure accurate understanding of their questions."
        },
        {
          q: 'Is RoboLearn available now?',
          a: "RoboLearn is currently under development. You can join our waitlist to get early access and updates on our launch progress."
        }
      ]
    }
  ];

  // JSON-LD Schema for FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqSections.flatMap(section => 
      section.questions.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    )
  };
</script>

<svelte:head>
  <title>FAQ | RoboLearn</title>
  <meta name="description" content="Frequently asked questions about RoboLearn, the voice AI learning companion for children. Learn about safety, education, technology, and more." />
  <script type="application/ld+json">
    {JSON.stringify(faqSchema)}
  </script>
  <script type="application/ld+json">
    {
      JSON.stringify({
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
            "name": "FAQ"
          }
        ]
      })
    }
  </script>
</svelte:head>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <h1 class="text-4xl font-bold text-center mb-12 gradient-text">Frequently Asked Questions</h1>

  {#each faqSections as section}
    <div class="mb-12">
      <h2 class="text-2xl font-semibold text-text-primary mb-6 border-b border-border-primary pb-2">{section.category}</h2>
      <div class="space-y-4">
        {#each section.questions as item, index}
          <Disclosure let:open>
            <DisclosureButton class="flex justify-between items-center w-full px-4 py-3 text-left text-lg font-medium text-text-primary bg-background-lighter rounded-lg hover:bg-background-light focus:outline-none focus-visible:ring focus-visible:ring-cyan-500 focus-visible:ring-opacity-75 transition-colors">
              <span>{item.q}</span>
              <Icon icon="heroicons:chevron-down-20-solid" class="w-5 h-5 text-cyan-400 transform transition-transform duration-200 {open ? 'rotate-180' : ''}" />
            </DisclosureButton>
            <DisclosurePanel class="px-4 pt-2 pb-4 text-text-secondary bg-background-lighter rounded-b-lg">
              <p>{item.a}</p>
            </DisclosurePanel>
          </Disclosure>
        {/each}
      </div>
    </div>
  {/each}

  <div class="text-center mt-16">
    <p class="text-text-secondary mb-4">Have more questions?</p>
    <a href="/contact" class="btn-secondary">Contact Us</a>
  </div>
</div>