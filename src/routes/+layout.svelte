<script lang="ts">
  import '../app.css';
  import Navigation from '../components/Navigation.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import WaitlistModal from '../components/WaitlistModal.svelte';
  // import type { LayoutData } from './$types'; // Reverted again due to type resolution issues
  // Explicitly defining type for data
  export let data: { url: string };

  const baseUrl = 'https://www.robolearn.ai'; // Replace if different
  const canonicalUrl = `${baseUrl}${data.url === '/' ? '' : data.url}`;
  const ogImageUrl = `${baseUrl}/og-image.png`; // Replace with actual image URL

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RoboLearn",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`, // Replace with actual logo URL
    "sameAs": [
      // Add social media profile URLs here if available
      // "https://www.facebook.com/RoboLearn",
      // "https://www.twitter.com/RoboLearn",
      // "https://www.linkedin.com/company/RoboLearn"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "support@robolearn.ai" // Replace with actual support email
    }
  };

  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "RoboLearn",
    "url": baseUrl,
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "iOS, Android", // Adjust as needed
    "offers": {
      "@type": "Offer",
      "price": "0", // Assuming free access initially or freemium
      "priceCurrency": "USD"
    },
    "educationalAlignment": {
       "@type": "AlignmentObject",
       "alignmentType": "educationalLevel",
       "targetName": "Preschool through Grade 6", // Approximate age 4-12
       "targetUrl": `${baseUrl}/for-parents` // Link to relevant page
    },
     "learningResourceType": "learning activity", // Or more specific if applicable
     "isFamilyFriendly": "true",
     "description": "RoboLearn is a voice-controlled mobile application that provides children (ages 4-12) with a customizable AI robot companion they can ask questions about the world.",
     "provider": organizationSchema // Nesting Organization schema
  };

</script>

<svelte:head>
  <!-- Performance Optimizations -->
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta http-equiv="content-security-policy" content="default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; img-src 'self' data: https:; connect-src 'self' https:;">
  <link rel="dns-prefetch" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin="anonymous">
  
  <!-- Existing meta tags -->
  <link rel="canonical" href="{canonicalUrl}" />

  <!-- Basic Open Graph Tags -->
  <meta property="og:title" content="RoboLearn - Voice AI Learning for Children" />
  <meta property="og:description" content="Explore the world with RoboLearn, a voice-controlled AI companion for curious kids aged 4-12." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="{canonicalUrl}" />
  <meta property="og:image" content="{ogImageUrl}" />
  <meta property="og:site_name" content="RoboLearn" />

  <!-- Twitter Card Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="RoboLearn - Voice AI Learning for Children" />
  <meta name="twitter:description" content="Explore the world with RoboLearn, a voice-controlled AI companion for curious kids aged 4-12." />
  <meta name="twitter:image" content="{ogImageUrl}" />

  <!-- JSON-LD Schema Markup -->
  <script type="application/ld+json">
    {@html JSON.stringify([organizationSchema, webApplicationSchema])}
  </script>

  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA4_MEASUREMENT_ID"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    // ** IMPORTANT: Replace YOUR_GA4_MEASUREMENT_ID below **
    gtag('config', 'YOUR_GA4_MEASUREMENT_ID');
  </script>
</svelte:head>

<!-- Add skip link for accessibility -->
<a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent-primary text-white px-4 py-2 rounded">
  Skip to main content
</a>

<Navigation />

<main id="main-content" class="pt-16">
  <slot />
</main>

<Footer />
<WaitlistModal /> 