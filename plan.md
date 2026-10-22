# Verzamar Technologies Website Implementation Plan

## Source of truth

The website uses verified details from the submitted business brief, the supplied portfolio links, the supplied testimonials, the supplied Calendly URL, and the supplied WhatsApp number. It does not invent results, credentials, awards, client logos, prices, rankings, or integrations.

## Positioning and launch scope

Verzamar Technologies is an international website development business with the promise **We Build Websites That Grow Businesses.** The primary audience is consultants and coaches, with room for small businesses, startups, local service businesses, professional services, agencies, real estate, education, ecommerce, and clients worldwide.

The public launch includes:

* A conversion focused homepage with clear audience, problem, outcome, proof, and calls to action.
* Services, priority service pages, Pricing, About, Work, Contact, Audit, FAQ, Privacy, Terms, and a custom 404.
* A researched Pricing page with proposed starting packages for landing pages, starter websites, business websites, premium websites, ecommerce, redesigns, and custom development.
* A comparison table that lets visitors compare fit, scope, starting price, and launch support across the proposed packages.
* Six search intent led articles covering small business websites, plumber websites, enquiry problems, redesign decisions, local SEO, and conversion improvement.
* Article detail pages with topic specific generated images, categories, dates, reading time, sources, related reading, metadata, and internal links.
* The four supplied portfolio links, including Mini Wallet, Beyond Barrier, Timely, and Mellifluous, each shown with a genuine captured homepage visual.
* Only the four supplied testimonials.
* A structured project enquiry form saved to the managed database.
* Newsletter signup saved to the managed database.
* The exact Calendly link `https://calendly.com/eviokpako-c/new-meeting` embedded on the booking page with a new tab fallback.
* Verified WhatsApp and email contact routes.
* A transparent live chat status panel that says the provider is offline until an account is authorized, with working WhatsApp and email fallbacks.
* Responsive mobile first layouts, accessible labels, keyboard focus, reduced motion support, dark mode, sitemap, robots, route manifest, canonical handling, route metadata, social metadata, route scroll reset, and purposeful page motion.

## Visual direction

Three possible movements were considered:

* **Blue Editorial Signal, 0.07:** bright blue studio system with generous white space, coral markers, and editorial service rails inspired by the supplied Zarrin reference.
* **Warm Growth, 0.05:** soft neutral canvas with optimistic colour highlights and rounded conversational sections.
* **Neo Blueprint, 0.03:** technical grid language, blueprint lines, and bright signal markers.

**Chosen direction: Blue Editorial Signal.**

* Design movement: bright editorial digital studio with generous white space, electric blue structure, and coral signals.
* Core principles: clarity before decoration, high contrast, visible evidence, and every section moving toward a useful action.
* Color philosophy: blue creates confidence and direction, white creates breathing room, and coral provides a warm human signal.
* Layout paradigm: asymmetric editorial bands, oversized type, offset proof cards, feature article cards, and horizontal service rails.
* Signature elements: blue service rails, coral signal dots, numbered markers, rounded proof cards, genuine project screenshots, and topic specific article imagery.
* Interaction philosophy: clear hover and focus states, restrained motion, responsive navigation, and no interaction that hides the next step.
* Animation: short transitions only, with reduced motion support. Page changes fade in, pricing cards enter in a short stagger, and project and article images use a restrained hover zoom.
* Typography: Space Grotesk for display and headings, DM Sans for body and interface text.
* Brand essence: a practical growth partner for businesses that need a website to perform, not merely exist. Personality: clear, credible, purposeful.
* Brand voice: direct, useful, confident without hype. Example lines: “Your website should make the next step obvious.” and “Bring the business problem. We will shape the digital path.”
* Wordmark: the supplied official Verzamar logo is used in the shared navigation, footer, favicon, platform metadata, and social preview.
* Signature colour: Verzamar Blue `#1769e0`, supported by Coral `#ff7657`.

## Technical approach

* React and Vite frontend using the initialized Web and database template.
* Express and tRPC backend.
* Drizzle and managed MySQL for enquiries and newsletter subscriptions.
* Public routes without login.
* Zod validation and accessible client feedback.
* Static article content in `client/src/content/blog.ts` with reusable article rendering.
* Generated article imagery stored through Manus managed storage references and genuine captured project visuals in `client/public/portfolio/`.
* Proposed package content in `client/src/content/pricing.ts`, with enquiry links that preselect the chosen package.
* `client/src/content/pricingComparison.ts` contains the accessible comparison table rows.
* Below fold project and article imagery uses lazy loading. Article hero imagery remains eager. Portfolio cards use 640 pixel WebP derivatives through `srcSet`, while the full screenshot remains the fallback.
* The supplied logo is preserved at its original proportions, with a compressed WebP site asset and a proportion preserving favicon canvas. The original JPEG is retained as a reference asset.
* Wouter route changes reset new pages to the top. Browser history navigation uses native scroll restoration.
* No private API keys in frontend code.
* Google Sheets, customer email notifications, newsletter automation, Google Analytics, Search Console, Tag Manager, CRM, payment, portal, multilingual content, and other advanced capabilities remain pending authorization or requirements.

## SEO and AI search readiness

Pages use meaningful text, route specific titles and descriptions, canonical handling that does not guess a public origin, Open Graph and Twitter metadata, descriptive headings, internal links, a sitemap, robots directives, a route manifest, direct answers, and source links. The site makes no guarantee about rankings, traffic, or inclusion in ChatGPT search, Google AI features, Copilot, or Perplexity.

## Project structure

* `client/src/pages/` contains public route pages, the homepage, article pages, and 404.
* `client/src/components/` contains navigation, footer, conversion actions, booking, and chat status UI.
* `client/src/content/` contains verified business content and reusable blog articles.
* `client/public/` contains route, sitemap, robots, article, and portfolio assets.
* `server/routers.ts` and `server/db.ts` contain validated lead and newsletter persistence.
* `drizzle/` contains the schema and migration history.
* `plan.md` and `TODO.md` record implementation decisions and acceptance outcomes.

## Items requiring later human input

* Public domain and final commercial approval.
* Commercial approval of the proposed package prices, payment terms, and legal review.
* Initial language list because “All” is not an actionable launch choice.
* Google Sheets write through, email notification, newsletter provider, CRM, analytics, Search Console, and Tag Manager authorization.
* Live chat provider account and configuration.
* Detailed case study context and substantiated results.
