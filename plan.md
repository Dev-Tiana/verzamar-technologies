# Webora Digital Website Implementation Plan

## Source of truth

The implementation is based on the single latest complete response submitted to the Website Development Business Brief form. Verified facts are kept separate from recommendations. No business facts, prices, results, credentials, or testimonials will be invented.

## Business positioning

Webora Digital is a Lagos, Nigeria-based website development business with the stated promise: **“We Build Websites That Grow Businesses.”** The primary launch audience is consultants and coaches. The site will also make room for future expansion into small businesses, startups, home services, professional services, agencies, real estate, education, e-commerce, Nigeria, and international markets.

The primary conversion goal is a **free 30-minute consultation**. Secondary conversion paths are a website quote, free website audit, lead-magnet download, WhatsApp contact, email contact, and newsletter signup.

## Launch scope

The first release is a public lead-generation website, not a full client-operations platform. It will implement:

- Homepage with clear audience, problem, outcome, proof, and CTAs.
- About page based only on supplied experience and business approach.
- Services overview and priority service pages for website development, redesign, landing pages, maintenance, SEO/local SEO, AI-search readiness, and conversion improvement.
- Portfolio with the four genuine project URLs supplied in the response.
- Testimonials using only the four supplied written testimonials.
- Pricing/packages section marked as “packages in development” rather than inventing prices.
- Contact and project enquiry form with the selected fields.
- Website audit / quote request path.
- Calendly booking CTA using a configuration placeholder until a real Calendly URL is supplied.
- Lead magnet CTA for the supplied Business Website Audit Checklist topic.
- Newsletter signup stored in the managed database.
- Enquiry and newsletter persistence in the managed database with success/error states.
- Responsive navigation, mobile-first layouts, accessible form labels, keyboard focus states, and optional dark mode.
- SEO metadata, canonical configuration placeholder, Open Graph/Twitter metadata, sitemap, robots, route manifest, FAQ content, and a custom 404.

High-complexity requested items are staged rather than silently omitted: client portal, project tracking, client onboarding workflows, automated reminders, CRM, external email notifications, Google Sheets write-through from website forms, multilingual content, and full analytics provider connections.

## Sitemap and intent

| Route | Purpose and intent |
| --- | --- |
| `/` | Understand the value proposition and book a consultation. |
| `/services` | Compare services and choose a relevant path. |
| `/services/business-websites` | Commercial intent: launch a website for a business without one. |
| `/services/website-redesign` | Commercial intent: improve an outdated or underperforming website. |
| `/services/landing-pages` | Commercial intent: create a focused conversion page. |
| `/services/seo-visibility` | Commercial intent: improve search visibility and technical foundations. |
| `/services/conversion-optimization` | Commercial intent: turn existing traffic into more enquiries. |
| `/work` | Validate credibility through genuine projects and links. |
| `/about` | Establish trust and explain the business approach. |
| `/contact` | Submit an enquiry or choose WhatsApp/email. |
| `/book` | Book a free 30-minute consultation; Calendly URL remains to be supplied. |
| `/audit` | Request a website audit or download the audit checklist. |
| `/faq` | Resolve objections and answer pre-hiring questions. |
| `/insights` | Educational content hub for future articles. |
| `/privacy` | Explain collection and handling of form/newsletter data. |
| `/terms` | Service and website terms placeholder requiring business/legal review. |

## Keyword-to-page mapping

No search volumes or difficulty scores are invented. The mapping uses terms supplied in the questionnaire.

| Keyword group | Primary page |
| --- | --- |
| Business website development; professional website development services; website developer for small businesses | `/services/business-websites` |
| Website design for consultants; website design for coaches and consultants | Homepage, `/services/business-websites` |
| Website redesign; business website modernization; mobile-friendly website redesign | `/services/website-redesign` |
| Landing page design; high-converting business website design; lead-generation website design | `/services/landing-pages` |
| SEO services for small businesses; local SEO services; website SEO audit services | `/services/seo-visibility` |
| Website conversion optimization; website design to generate more enquiries | `/services/conversion-optimization` |
| Website developer in Nigeria; website designer in Lagos; website development company in Nigeria | Homepage and relevant service copy; no thin location pages at launch |
| How much does a business website cost; how long does it take; does my business need a website | `/faq` and future `/insights` articles |

## Homepage messaging and conversion

Hero message: **Business websites built to get found, build trust, and generate enquiries.** Supporting copy will state that Webora Digital helps consultants and growing businesses clarify their offer, present it professionally, and create straightforward paths to enquire or book.

Primary CTA: **Book a free 30-minute consultation**. Secondary CTAs: **Request a website quote**, **Get a free website audit**, and **View selected work**.

Trust will come from the supplied project links, supplied testimonials, transparent process explanation, and clear limitations. No unsupported metrics, awards, client logos, or guaranteed search results will be used.

## Brand and visual direction

Three possible movements were considered:

- **Signal Studio — 0.07:** editorial black-and-white foundation with bright yellow signal accents and precise utility layouts.
- **Warm Growth — 0.05:** soft neutral canvas with optimistic yellow highlights and rounded, conversational sections.
- **Neo-Blueprint — 0.03:** technical grid language, blueprint lines, and bright signal markers.

**Chosen direction: Signal Studio.**

- **Design movement:** editorial digital studio with utility-first precision.
- **Core principles:** clarity before decoration; high contrast; visible evidence; every section moves toward a useful action.
- **Color philosophy:** black and white create trust and focus; `#fef300` is the ownable “signal” color reserved for CTAs, markers, and key moments.
- **Layout paradigm:** asymmetric editorial bands, oversized type, offset proof cards, and horizontal service rails instead of a generic centered card grid.
- **Signature elements:** yellow signal bars, underlined action links, and numbered process markers.
- **Interaction philosophy:** restrained transitions, clear hover/focus states, no motion that delays comprehension.
- **Animation:** short opacity/translate reveals only where they reinforce reading order; respect reduced-motion preferences.
- **Typography system:** Space Grotesk for display and headings; Inter for body and interface text; bold condensed-feeling headlines paired with calm readable paragraphs.
- **Brand essence:** a practical growth partner for consultants and businesses that need a website to perform, not merely exist. Personality: clear, credible, purposeful.
- **Brand voice:** direct, useful, confident without hype. Example lines: “Your website should make the next step obvious.” and “Bring the business problem. We’ll shape the digital path.”
- **Wordmark concept:** “WEBORA” in a tight geometric wordmark with a small yellow signal slash replacing the crossbar rhythm between the final letters; implement as text treatment until an actual logo asset is supplied.
- **Signature brand color:** Webora Signal Yellow `#fef300`.

## Technical approach

- React + Vite frontend using the initialized Web/DB template.
- Express + tRPC backend.
- Drizzle/MySQL managed database for enquiries and newsletter signups.
- Public routes remain accessible without login.
- Forms use Zod validation on the server and accessible client-side feedback.
- Google Sheets, email, Calendly, Analytics, Search Console, and Tag Manager are documented as pending authorization/configuration unless a connection is actually established.
- No secret is placed in frontend code.

## SEO and AI-search implementation

Public HTML will contain meaningful content, route-specific titles and descriptions, canonical placeholders that are not guessed, Open Graph/Twitter metadata, descriptive headings, internal links, sitemap/robots documents, and valid structured data limited to facts visible on the page. The content will answer real customer questions about website need, cost, process, redesign, SEO, and conversion. AI-search readiness is treated as clarity and factual consistency, not a guarantee of inclusion.

## Project structure

- `client/src/pages/`: public route pages and 404.
- `client/src/components/`: navigation, footer, reusable sections, form fields, and UI primitives.
- `client/src/content/`: verified business content, services, projects, testimonials, FAQ, and SEO metadata.
- `client/public/`: route manifest, sitemap, robots, and static metadata assets.
- `server/routers.ts`: public enquiry and newsletter procedures.
- `server/db.ts`: database queries for lead and subscriber persistence.
- `drizzle/schema.ts` and `drizzle/`: additive schema and migration history.
- `plan.md` and `TODO.md`: implementation decisions and outcome criteria.

## Unresolved items requiring later human input

- Final logo asset.
- Domain and public canonical origin.
- Exact package names, prices, deliverables, timelines, and payment terms.
- Actual Calendly URL.
- Initial language list; “All” is not actionable.
- Google Sheets write-through, email notification, CRM, analytics, and Tag Manager authorization.
- Legal review of privacy and terms content.
- Specific case-study context and substantiated project results.
