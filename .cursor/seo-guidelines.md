# SEO & LLM Discoverability Guidelines

## Core Principles
- Simplicity first: Implement foundational elements before advanced techniques.
- Performance is SEO: Prioritize speed and responsiveness in all implementations.
- Content quality over quantity: Focus on clear, helpful, factual information. Avoid marketing fluff.
- Progressive enhancement: Start with basics, measure, then enhance based on data.
- Lean implementation: Avoid unnecessary dependencies or complex solutions where simpler ones suffice.
- User focus: Write for parents and potential users, addressing their questions and concerns directly.

## Technical SEO Essentials
- **Metadata:** Clear, concise, keyword-rich titles (<60 chars) and descriptions (<160 chars) for all pages. Use target keywords naturally.
- **Semantic Markup:** Proper heading structure (H1 per page, logical H2-H6), use HTML5 elements (header, nav, main, article, aside, footer).
- **Mobile Optimization:** Perfect responsive behavior via frameworks like Tailwind CSS. **Manual testing across devices and touch target validation (min 48x48px) are crucial.**
- **Core Web Vitals:** Optimize LCP, CLS, and FID. Monitor via PageSpeed Insights.
- **Structured Data (Schema.org):**
    - Implement foundational schema: `Organization`, `WebApplication` (in layout).
    - Add page-specific schema: `Product` (homepage), `FAQPage` (FAQ), `HowTo` (process explanations), `BreadcrumbList` (navigation context), `Review` (testimonials, use placeholders initially).
    - Use JSON-LD format within `<script type="application/ld+json">`.
    - **Validate using external tools (e.g., Google Rich Results Test).**
- **Internal Linking:** Strategically link related content using descriptive anchor text. Add contextual links within body text. Implement `BreadcrumbList` schema.
- **Crawlability:** Maintain a clean `robots.txt` allowing necessary crawls and linking to the sitemap. Ensure `sitemap.xml` is auto-generated and includes all relevant pages with appropriate priorities (though priority impact is minor).
- **Performance:** Use modern frameworks (SvelteKit/Vite), code splitting, asset optimization, and monitor performance regularly.

## Content Strategy for SEO & LLM
- **Entity Clarity:** Clearly define what the product/service is (e.g., "RoboLearn is a voice-controlled AI learning companion...") prominently on key pages (Homepage, About).
- **Keyword Integration:** Naturally incorporate primary and secondary keywords (e.g., "voice AI learning", "educational app for kids", "STEM companion") into headings, body text, and metadata.
- **Question-Answer Content:** Directly address common user queries using natural language. Utilize FAQ sections (`FAQPage` schema) and integrate Q&A format within regular content.
- **Factual Consistency:** Maintain consistent terminology (e.g., "AI companion", "voice learning") and factual claims across the site.
- **Content Hierarchy:** Organize content logically with clear headings (H1, H2, H3...) and use lists for readability.
- **Educational Credibility:** Emphasize learning methodology, benefits, safety features, and age-appropriateness with specific examples.
- **Value Proposition:** Clearly articulate benefits for the target audience (e.g., parents - safety, educational value; children - fun, exploration).
- **Product Differentiation:** Explain what makes the product unique compared to alternatives (e.g., voice-first vs. screen-based, curiosity-driven vs. curriculum).

## Analytics & Measurement
- **Setup:** Implement GA4 using the standard gtag.js snippet in the main layout.
- **Conversion Tracking:** Track key actions (e.g., waitlist signups) using custom events (`gtag('event', 'event_name', {...});`).
- **Goal Configuration:** Configure tracked events as primary conversion goals within the GA4 interface.
- **Monitoring:** Regularly review analytics data to understand user behavior, traffic sources, and conversion performance to inform further optimization.

## LLM Visibility Strategy
- Entity clarity: Make it clear what RoboLearn is and does
- Question-answer content: Directly address common queries
- Factual consistency: Maintain consistent terminology and claims
- Content hierarchy: Logical organization with clear headings
- Educational credibility: Emphasize learning methodology and benefits