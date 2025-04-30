# Component Specifications

## Design Philosophy
Each component should follow these core principles:
- **Simplicity:** Focus on core functionality without unnecessary decoration
- **Purpose:** Every element must serve a clear user need
- **Clarity:** Make functionality immediately apparent to users
- **Consistency:** Use consistent patterns across the entire system
- **Performance:** Prioritize loading speed and smooth interaction
- **Transparency:** Clearly communicate development status without overstatement

## Core Components

### Navigation Component
- **Path:** `src/lib/components/Nav.svelte`
- **Purpose:** Provide clear, accessible site navigation
- **Design:**
  - Clean, minimal header with logo and essential links
  - Mobile: Simple hamburger menu with smooth transition
  - Desktop: Horizontal nav with subtle indicators
  - Waitlist CTA as secondary button style
  - Optional status indicator for "Early Access" or "Coming Soon"
- **States:**
  - Default: Dark background, white/light gray text
  - Active: Current page indicator (subtle underline or dot)
  - Mobile open: Full screen nav with clear close button
- **Props:**
  - `currentPath` - Current route path
  - `showStatusIndicator` - Boolean to toggle status display

### Hero Section
- **Path:** `src/lib/components/Hero.svelte`
- **Purpose:** Clearly communicate core value proposition and primary action
- **Design:**
  - Clean layout with clear visual hierarchy
  - Single headline with supporting subtext
  - Simple visualization of product function
  - Primary CTA button
  - No visual distractions or secondary actions
  - Subtle "Coming Soon" or launch date indicator
- **Props:**
  - `headline` - Primary value proposition
  - `subheading` - Supporting explanation
  - `ctaText` - Call to action text
  - `ctaUrl` - Call to action destination
  - `launchInfo` - Optional object with launch timeline details

### Feature Card
- **Path:** `src/lib/components/FeatureCard.svelte`
- **Purpose:** Highlight individual product benefits
- **Design:**
  - Simple card with consistent padding
  - Icon or small illustration
  - Concise heading
  - Brief description (2-3 lines maximum)
  - Optional link for more information
  - Optional "Coming Soon" badge for unreleased features
- **Props:**
  - `icon` - Feature icon (simple line style)
  - `title` - Feature name
  - `description` - Brief explanation
  - `link` - Optional "Learn more" destination
  - `comingSoon` - Boolean to toggle availability status
  - `releaseDate` - Optional expected release timeframe

### Content Section
- **Path:** `src/lib/components/ContentSection.svelte`
- **Purpose:** Organize content into logical, scannable sections
- **Design:**
  - Clear heading
  - Optional subheading
  - Consistent padding and spacing
  - Content container with flexible children
  - Visual boundaries between sections
- **Props:**
  - `heading` - Section title
  - `subheading` - Optional supporting text
  - `sectionId` - For direct linking
  - `background` - Optional background style variant

### Testimonial
- **Path:** `src/lib/components/Testimonial.svelte`
- **Purpose:** Provide social proof from real users
- **Design:**
  - Simple card with quote and attribution
  - Small authentic avatar photo
  - Brief, specific quote (not generic praise)
  - Parent name, child age, and location
  - No excessive styling or animations
  - Optional beta tester or early preview indicator
- **Props:**
  - `quote` - Testimonial text
  - `name` - Parent/educator name
  - `role` - Parent or educator 
  - `childAge` - Child's age (if applicable)
  - `image` - Small avatar image
  - `previewMember` - Boolean indicating if from preview program

### AI Demo
- **Path:** `src/lib/components/AIDemo.svelte`
- **Purpose:** Demonstrate AI conversation capabilities
- **Design:**
  - Simple chat interface showing example interactions
  - Clear differentiation between child question and AI response
  - Topic selector for different educational examples
  - Minimal, functional design without excessive animation
  - Preview mode indicator showing this is a sample of upcoming functionality
- **Props:**
  - `conversations` - Array of sample Q&A pairs by topic
  - `activeTopic` - Currently selected topic
  - `showTopicSelector` - Boolean to toggle topic selector
  - `previewModeLabel` - Text to indicate preview status (default: "Preview of Coming Features")

### Waitlist Form
- **Path:** `src/lib/components/WaitlistForm.svelte`
- **Purpose:** Convert visitors to waitlist signups
- **Design:**
  - Clean form with minimal fields
  - Clear heading and brief explanation
  - Email input with proper validation
  - Optional role selector (parent/educator)
  - Submit button in primary style
  - Success state with next steps
  - Privacy information near form
  - Expected timeline or access process information
- **Props:**
  - `heading` - Form heading
  - `description` - Brief explanation text
  - `buttonText` - Submit button text
  - `successCallback` - Function after successful submission
  - `timelineInfo` - Object with launch timeline details

### Info Card
- **Path:** `src/lib/components/InfoCard.svelte`
- **Purpose:** Present key information in a structured format
- **Design:**
  - Simple card with consistent styling
  - Optional icon or small illustration
  - Heading with supporting text
  - Content area for flexible information
  - Optional link or action button
- **Props:**
  - `title` - Card heading
  - `description` - Supporting text
  - `icon` - Optional icon
  - `action` - Optional button/link configuration

### How It Works
- **Path:** `src/lib/components/HowItWorks.svelte`
- **Purpose:** Explain the product process clearly
- **Design:**
  - Step-by-step explanation with numbers
  - Simple illustrations for each step
  - Brief, clear explanation text
  - Linear progression visualization
  - Mobile-friendly vertical layout
- **Props:**
  - `steps` - Array of step objects (number, title, description, image)
  - `heading` - Section heading
  - `subheading` - Optional supporting text

### FAQ Accordion
- **Path:** `src/lib/components/FAQAccordion.svelte`
- **Purpose:** Address common questions in a space-efficient format
- **Design:**
  - Clean list of questions
  - Expand/collapse functionality
  - Question as button with clear indicator
  - Answer text with proper spacing
  - Support for rich text in answers
- **Props:**
  - `items` - Array of question/answer pairs
  - `allowMultiple` - Whether multiple items can be open
  - `initialOpenIndex` - Optional default open item

### Footer
- **Path:** `src/lib/components/Footer.svelte`
- **Purpose:** Provide essential links and legal information
- **Design:**
  - Simple dark background
  - Logo with essential links
  - Secondary navigation links
  - Social media icons (if applicable)
  - Copyright and legal information
  - Clean, minimal layout
  - Optional status indicator (beta, coming soon)
- **Props:**
  - `links` - Array of navigation links
  - `legalLinks` - Legal page links
  - `socialLinks` - Social media links
  - `statusText` - Optional product status text

### Call to Action
- **Path:** `src/lib/components/CTA.svelte`
- **Purpose:** Drive user to primary conversion action
- **Design:**
  - Clear heading focused on value
  - Brief supporting text
  - Single primary button
  - Simple background treatment
  - Adequate whitespace
  - No distractions or secondary actions
  - Optional launch timeline information
- **Props:**
  - `heading` - CTA heading
  - `subheading` - Supporting text
  - `buttonText` - CTA button text
  - `buttonUrl` - Destination URL
  - `theme` - Optional visual variant
  - `launchInfo` - Optional object with launch timeline

## Status Components

### Coming Soon Badge
- **Path:** `src/lib/components/ComingSoonBadge.svelte`
- **Purpose:** Indicate features or sections that are in development
- **Design:**
  - Subtle badge with minimal visual weight
  - Clear "Coming Soon" text
  - Optional timeframe indication
  - Consistent placement on parent components
  - Non-distracting but noticeable styling
- **Props:**
  - `text` - Badge text (default: "Coming Soon")
  - `timeframe` - Optional expected availability
  - `variant` - Style variant (subtle/standard/prominent)

### Development Timeline
- **Path:** `src/lib/components/DevelopmentTimeline.svelte`
- **Purpose:** Visualize development progress and expected launch
- **Design:**
  - Simple horizontal timeline showing development stages
  - Current stage clearly highlighted
  - Brief stage descriptions
  - Expected launch timeframe
  - Mobile-friendly vertical adaptation
- **Props:**
  - `stages` - Array of development stages
  - `currentStage` - Index of current stage
  - `launchDate` - Expected launch timeframe
  - `orientation` - Horizontal or vertical layout

### Preview Mode Indicator
- **Path:** `src/lib/components/PreviewIndicator.svelte`
- **Purpose:** Clearly label preview or demo functionality
- **Design:**
  - Subtle but noticeable banner or indicator
  - Clear text explaining preview status
  - Optional additional context
  - Non-intrusive positioning
- **Props:**
  - `text` - Indicator text (default: "Preview Mode")
  - `description` - Optional additional context
  - `position` - Positioning (top, corner, inline)
  - `variant` - Style variant (subtle/standard)

## Layout Components

### Page Layout
- **Path:** `src/lib/components/PageLayout.svelte`
- **Purpose:** Provide consistent page structure
- **Design:**
  - Header with navigation
  - Main content area
  - Footer
  - Metadata handling
  - Consistent max-width and spacing
  - Optional global status indicator
- **Props:**
  - `title` - Page title (for metadata)
  - `description` - Page description (for metadata)
  - `showNav` - Boolean to toggle navigation
  - `showStatusIndicator` - Boolean to toggle global status indicator

### Grid Layout
- **Path:** `src/lib/components/Grid.svelte`
- **Purpose:** Create responsive grid layouts simply
- **Design:**
  - CSS Grid-based layout system
  - Responsive column configurations
  - Consistent gap spacing
  - Equal height items by default
- **Props:**
  - `columns` - Object with breakpoint column counts
  - `gap` - Grid gap size

### Container
- **Path:** `src/lib/components/Container.svelte`
- **Purpose:** Create consistent content containers
- **Design:**
  - Consistent max-width
  - Centered content
  - Responsive padding
  - Optional vertical spacing
- **Props:**
  - `width` - Container width variant (narrow, default, wide)
  - `padding` - Container padding variant
  - `margin` - Container margin variant

*All components should prioritize simplicity and function over decorative elements. Every design decision should enhance usability, readability, and performance, while clearly communicating the current development status of the platform.*