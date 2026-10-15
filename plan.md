# Webora Digital Website Implementation Plan

## Source of truth

The website uses verified details from the submitted business brief, the supplied portfolio links, the supplied testimonials, the supplied Calendly URL, and the supplied WhatsApp number. It does not invent results, credentials, awards, client logos, prices, rankings, or integrations.

## Positioning and launch scope

Webora Digital is a Lagos, Nigeria based website development business with the promise **We Build Websites That Grow Businesses.** The primary audience is consultants and coaches, with room for small businesses, startups, local service businesses, professional services, agencies, real estate, education, ecommerce, Nigeria, and international markets.

The public launch includes:

* A conversion focused homepage with clear audience, problem, outcome, proof, and calls to action.
* Services, priority service pages, About, Work, Contact, Audit, FAQ, Privacy, Terms, and a custom 404.
* Six search intent led articles covering small business websites, plumber websites, enquiry problems, redesign decisions, local SEO, and conversion improvement.
* Article detail pages with feature illustrations, categories, dates, reading time, sources, related reading, metadata, and internal links.
* The four supplied portfolio links, including Mini Wallet, Beyond Barrier, Timely, and Mellifluous.
* Only the four supplied testimonials.
* A structured project enquiry form saved to the managed database.
* Newsletter signup saved to the managed database.
* The exact Calendly link `https://calendly.com/eviokpako-c/new-meeting` embedded on the booking page with a new tab fallback.
* Verified WhatsApp and email contact routes.
* A transparent live chat status panel that says the provider is offline until an account is authorized, with working WhatsApp and email fallbacks.
* Responsive mobile first layouts, accessible labels, keyboard focus, reduced motion support, dark mode, sitemap, robots, route manifest, canonical handling, route metadata, and social metadata.

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
* Signature elements: blue service rails, coral signal dots, numbered markers, rounded proof cards, and abstract article illustrations.
* Interaction philosophy: clear hover and focus states, restrained motion, responsive navigation, and no interaction that hides the next step.
* Animation: short transitions only, with reduced motion support.
* Typography: Space Grotesk for display and headings, DM Sans for body and interface text.
* Brand essence: a practical growth partner for businesses that need a website to perform, not merely exist. Personality: clear, credible, purposeful.
* Brand voice: direct, useful, confident without hype. Example lines: “Your website should make the next step obvious.” and “Bring the business problem. We will shape the digital path.”
* Wordmark: WEBORA in a tight geometric text treatment with a coral signal dot until a final logo asset is supplied.
* Signature colour: Webora Blue `#1769e0`, supported by Coral `#ff7657`.

## Technical approach

* React and Vite frontend using the initialized Web and database template.
* Express and tRPC backend.
* Drizzle and managed MySQL for enquiries and newsletter subscriptions.
* Public routes without login.
* Zod validation and accessible client feedback.
* Static article content in `client/src/content/blog.ts` with reusable article rendering.
* Original lightweight SVG illustrations in `client/public/blog/` and `client/public/portfolio/`.
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

* Final logo asset and public domain.
* Package names, prices, deliverables, timelines, payment terms, and legal review.
* Initial language list because “All” is not an actionable launch choice.
* Google Sheets write through, email notification, newsletter provider, CRM, analytics, Search Console, and Tag Manager authorization.
* Live chat provider account and configuration.
* Detailed case study context and substantiated results.
