# Component Specifications

## Navigation Component
- Path: `src/lib/components/Nav.svelte`
- Features:
  - Dark themed with cyan accent elements
  - Responsive mobile/desktop layout
  - Logo + navigation links
  - Mobile hamburger menu
  - Waitlist CTA button with cyan glow effect
- Props:
  - `activeRoute` - Current active route

## Hero Section
- Path: `src/lib/components/Hero.svelte`
- Features:
  - Dark background matching app theme
  - Headline + subheading in light text
  - CTA button with cyan glow effect
  - Illustration of customizable robot
  - Contained in rounded card layout
- Props:
  - `headline` - Main headline text
  - `subheading` - Supporting text
  - `ctaText` - Call to action button text

## Feature Card
- Path: `src/lib/components/FeatureCard.svelte`
- Features:
  - Dark themed card with subtle glow
  - Icon with cyan accent
  - Title in white
  - Description in light gray
  - Optional link with glow effect
- Props:
  - `icon` - Feature icon name/path
  - `title` - Feature title
  - `description` - Feature description
  - `link` - Optional link (URL + text)

## Section Header
- Path: `src/lib/components/SectionHeader.svelte`
- Features:
  - Title with cyan highlight option
  - Subtitle/description in light gray
  - Centered or left-aligned variants
- Props:
  - `title` - Section title
  - `subtitle` - Supporting text
  - `align` - Alignment (center/left)
  - `highlightWords` - Words to highlight in title

## Testimonial Carousel
- Path: `src/lib/components/TestimonialCarousel.svelte`
- Features:
  - Dark themed cards
  - Autoplay + manual navigation
  - Quote + attribution
  - Avatar/image
  - Cyan dot pagination indicators
- Props:
  - `testimonials` - Array of testimonial objects
  - `autoplaySpeed` - Speed of autoplay (ms)
  - `pauseOnHover` - Boolean to pause on hover

## Robot Customizer Demo
- Path: `src/lib/components/RobotDemo.svelte`
- Features:
  - Dark themed container with cyan border/glow
  - Interactive robot similar to app screenshot
  - Color selection options
  - Feature toggles
  - Progress indicator dots (as shown in screenshot)
  - Next/Back navigation buttons matching app style
- Props:
  - `presets` - Array of preset configurations
  - `onComplete` - Callback when customization complete

## Waitlist Form
- Path: `src/lib/components/WaitlistForm.svelte`
- Features:
  - Dark themed container
  - Email input with cyan glow on focus
  - Submit button with cyan background
  - Success/error messages
  - Styling matching screenshot input field
- Props:
  - `onSubmit` - Form submission handler
  - `buttonText` - Submit button text
  - `placeholder` - Input placeholder text

## Call to Action
- Path: `src/lib/components/CTA.svelte`
- Features:
  - Dark themed container
  - Headline with optional cyan highlight
  - Description in light gray
  - Button(s) with cyan glow effect
  - Optional background pattern
- Props:
  - `headline` - CTA headline
  - `description` - Supporting text
  - `primaryButton` - Primary button config
  - `secondaryButton` - Optional secondary button config
  - `theme` - Visual theme (light/dark/colored)

## Footer
- Path: `src/lib/components/Footer.svelte`
- Features:
  - Dark themed background
  - Logo with cyan accent
  - Site links in light text
  - Social media icons with cyan hover effect
  - Copyright info in muted text
  - Legal links
- Props:
  - `links` - Array of site links
  - `socialLinks` - Array of social media links
  - `legalLinks` - Array of legal page links

## Progress Indicator
- Path: `src/lib/components/ProgressIndicator.svelte`
- Features:
  - Horizontal row of dots
  - Active dot filled with cyan
  - Inactive dots as hollow circles
  - Matches screenshot styling
- Props:
  - `steps` - Total number of steps
  - `currentStep` - Current active step (1-based)
  - `onStepClick` - Optional callback when step is clicked