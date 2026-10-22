export type BlogSection = { heading: string; paragraphs: string[]; bullets?: string[] };

export type BlogArticle = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  published: string;
  readingTime: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  metaTitle: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  sections: BlogSection[];
  cta: string;
  sources: { label: string; url: string }[];
  related: string[];
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "build-small-business-website",
    category: "Website foundations",
    title: "How to Build a Website for a Small Business",
    excerpt: "A practical path from business goals and useful content to a mobile ready website that helps people find, trust, and contact you.",
    published: "15 October 2026",
    readingTime: "8 minute read",
    primaryKeyword: "how to build a website for a small business",
    secondaryKeywords: ["small business website", "local business website", "local SEO", "Google Business Profile", "business website cost"],
    metaTitle: "How to Build a Small Business Website | Verzamar Technologies",
    metaDescription: "Learn how to plan, write, build, launch, and improve a useful small business website for local and worldwide customers.",
    image: "/manus-storage/async-images/uukmz8QR9yfFJGtJjC6Y9S/image-1.webp",
    imageAlt: "Blue website planning board with sections for goals, services, and contact",
    sections: [
      { heading: "Start with the business job", paragraphs: ["A small business website should do more than display a logo and a phone number. Before choosing a platform or a visual style, decide what the site must help the business do. That might be receiving calls, collecting quote requests, booking consultations, selling a service, or helping people understand a location and opening hours.", "Write down the audience, the service area, the most important customer question, and the action you want a qualified visitor to take. These decisions make the later work clearer. They also help you judge whether a page is useful instead of adding sections because another website has them."] },
      { heading: "Plan the essential pages", paragraphs: ["Most small businesses need a focused home page, service pages, an about page, a contact page, and clear information about where the business serves customers. A privacy page and terms page may also be needed, depending on the tools, market, and business model. A blog can support long term visibility when each article answers a real customer question.", "Each page should have a clear purpose. A service page should explain the problem, the service, who it suits, what happens next, and how to enquire. A contact page should show more than a form. Include a phone number, email, message option, hours, service area, and a plain explanation of what happens after someone submits their details."] },
      { heading: "Write specific content people can use", paragraphs: ["Useful website copy names the customer, the problem, the service, the area served, and the next step. It avoids vague claims such as best in town unless there is evidence to support them. For a local service business, explain the types of work you accept, the locations you cover, how people can request a quote, and what information helps you respond well.", "Add genuine trust signals. These can include verified testimonials, real project links, clear business details, useful photographs, qualifications where they apply, and a transparent process. Do not add client names, results, awards, or credentials that have not been confirmed."] },
      { heading: "Build for phones, speed, and access", paragraphs: ["Many customers will first see a website on a phone and on a connection that is not perfect. Use readable text, clear buttons, simple forms, and images that are sized for the job. Keep scripts limited, prevent layout movement, and test the pages on a real phone. Performance tools can help identify issues, but a score is not a promise of more enquiries.", "Accessibility is part of good business communication. Use labelled fields, logical headings, visible focus states, sufficient contrast, keyboard friendly controls, and useful image alternatives. These choices make the website easier to use for more people and often improve clarity for everyone."] },
      { heading: "Make search visibility factual", paragraphs: ["Give every important page a clear title, descriptive URL, useful headings, and links to related pages. Build pages for real services and real locations rather than producing many similar pages with small wording changes. Add a sitemap and check that search systems can crawl the pages.", "For local discovery, complete and verify the Google Business Profile where the business is eligible. Keep the name, category, hours, phone number, website, service area, photos, and customer responses accurate. Google explains that local results are mainly influenced by relevance, distance, and prominence. A website alone cannot guarantee a local position."] },
      { heading: "Launch with a simple checklist", paragraphs: ["Before launch, test every form, phone link, message link, booking link, and important navigation path. Check the site on a phone, tablet, laptop, and large screen. Confirm HTTPS, backups, analytics settings, error pages, sitemap access, and the wording of consent notices.", "After launch, keep the site useful. Update services, answer common questions, add genuine proof, review search queries, and record qualified enquiries. A website becomes more valuable when the business learns from real customer questions and improves the clearest barrier first."] },
    ],
    cta: "Need a clearer website plan? Book a Free Consultation with Verzamar Technologies.",
    sources: [
      { label: "Google Search documentation", url: "https://developers.google.com/search/docs" },
      { label: "Google guidance for local ranking", url: "https://support.google.com/business/answer/7091?hl=en" },
      { label: "W3C accessibility guidance", url: "https://www.w3.org/TR/WCAG21/" },
      { label: "Web performance guidance", url: "https://web.dev/performance" },
    ],
    related: ["local-seo-small-business", "website-conversion-rates"],
  },
  {
    slug: "plumber-website-design-guide",
    category: "Local service websites",
    title: "Website Design for Plumbers and Local Service Businesses",
    excerpt: "What a plumbing or local service website needs to make the next call, message, or quote request easy on a busy phone screen.",
    published: "15 October 2026",
    readingTime: "7 minute read",
    primaryKeyword: "plumber website design",
    secondaryKeywords: ["local service business website design", "plumber website SEO", "Google Business Profile for plumbers", "mobile friendly plumbing website"],
    metaTitle: "Plumber Website Design Guide for Local Service Businesses",
    metaDescription: "Plan a clear, fast, accessible plumber website that explains services, locations, trust signals, and the route to a quote.",
    image: "/manus-storage/async-images/uukmz8QR9yfFJGtJjC6Y9S/image-2.webp",
    imageAlt: "Bright blue service website layout with a phone button and local map marker",
    sections: [
      { heading: "Design around the real service journey", paragraphs: ["A visitor looking for a plumber may be comparing options quickly, checking whether the business serves their area, or trying to reach someone about an urgent problem. The website should answer those questions without making the visitor search through long pages.", "Decide which actions matter most. A phone call may be the primary path for urgent work. A short quote form may suit planned jobs. A message option can help people who cannot call immediately. Show these choices clearly and explain what information helps the business respond."] },
      { heading: "Give every important service a useful page", paragraphs: ["A single page that lists every service can be difficult to scan and difficult to match with a specific need. Create clear sections or pages for the work the business actually accepts, such as leak repairs, installation, maintenance, or emergency response. Use plain language and state any limits honestly.", "Include the areas served and the hours of availability. If prices depend on inspection, say that. If emergency response has different conditions, explain them without promising a time that has not been confirmed. Specific information builds trust because it helps a visitor decide whether to contact the business."] },
      { heading: "Make local information consistent", paragraphs: ["Keep the website details aligned with the verified Google Business Profile. Use the real business name, appropriate category, current phone, website, hours, service area, and genuine photos. Respond to reviews thoughtfully and avoid creating multiple profiles or pages that misrepresent the business location.", "Google explains that relevance, distance, and prominence influence local results. A complete profile helps a system understand the business, but no website or agency can guarantee a top local position. Measure calls, quote requests, and qualified leads instead of relying on a rank promise."] },
      { heading: "Build for a phone in a hurry", paragraphs: ["Use a prominent phone action, readable text, clear buttons, and short forms. Keep the most important service and location information near the start of the page. Do not hide the phone number in an image. Make it a real link so a visitor can tap to call.", "Use enough contrast, visible focus states, descriptive image alternatives, labels for every field, and a clear success message after submission. A visitor should know what will happen next and what channel the business will use to respond."] },
      { heading: "Keep media and scripts useful", paragraphs: ["Large images and unnecessary scripts can make a service website slow on mobile connections. Use properly sized images, avoid autoplay media, and remove tools that do not support a real business goal. Test on a real phone as well as a performance tool.", "Speed is part of the experience, not a guarantee of leads. A fast page still needs a clear offer, proof, accurate local information, and a reliable response process. Treat these as one connected customer journey."] },
      { heading: "Measure the actions that matter", paragraphs: ["Record calls, message clicks, quote requests, booked visits, and qualified jobs where the business can do so responsibly. Use Search Console and Business Profile data to understand discovery, then compare that with real enquiries. Review which pages people visit before they contact you.", "The best first improvement is often the largest visible barrier. If people cannot find the phone number, fix that before adding another animation. If the site receives little relevant traffic, improve service and location clarity before changing the button colour."] },
    ],
    cta: "Want a local service website that makes the next call obvious? Book a Free Consultation.",
    sources: [
      { label: "Google Search fundamentals", url: "https://developers.google.com/search/docs/fundamentals" },
      { label: "Google local ranking guidance", url: "https://support.google.com/business/answer/7091?hl=en" },
      { label: "W3C WCAG guidance", url: "https://www.w3.org/TR/WCAG21/" },
      { label: "Google PageSpeed Insights overview", url: "https://developers.google.com/speed/docs/insights/v5/about" },
    ],
    related: ["local-seo-small-business", "website-not-generating-enquiries"],
  },
  {
    slug: "business-website-not-generating-enquiries",
    category: "Conversion and clarity",
    title: "Why Your Business Website Is Not Generating Enquiries and What to Fix",
    excerpt: "Separate a visibility problem from a conversion problem, then fix the barrier that stops the right visitor from taking the next step.",
    published: "15 October 2026",
    readingTime: "8 minute read",
    primaryKeyword: "why is my business website not generating enquiries",
    secondaryKeywords: ["website not getting leads", "local business website conversion", "contact form best practices", "website accessibility and performance"],
    metaTitle: "Why Your Business Website Is Not Generating Enquiries",
    metaDescription: "Diagnose low website enquiries by checking visibility, clarity, trust, usability, accessibility, response paths, and measurement.",
    image: "/manus-storage/async-images/uukmz8QR9yfFJGtJjC6Y9S/image-3.webp",
    imageAlt: "Website dashboard with a clear enquiry path highlighted in blue",
    sections: [
      { heading: "First, separate traffic from action", paragraphs: ["A website can fail before a visitor arrives, while a different website can receive relevant visitors and still make contact difficult. These are different problems. Check search visibility, direct visits, referral sources, and landing pages before changing the design.", "Then inspect the actions that should create an enquiry. Are people calling, tapping WhatsApp, opening a form, booking a consultation, or leaving after reading the first section? A simple lead log can reveal more than a single top line analytics number."] },
      { heading: "Make the offer clear quickly", paragraphs: ["A visitor should understand who the business helps, what it does, where it works, and what to do next without decoding clever language. Put the main service and service area near the start of the page. Explain the customer problem in words they use.", "Give each major service its own useful path. A generic paragraph that lists many services may not answer a specific question. Use headings, examples, proof, and a clear call to action that matches the visitor stage."] },
      { heading: "Remove contact friction", paragraphs: ["A contact form should ask only for information that helps the business respond well. Label every field, use the right input type, show a useful error, and explain what happens after submission. Offer a phone, email, or message route as well, especially when the service is local or urgent.", "Do not make a chatbot the only way to reach the business. Do not hide the phone number inside an image. On mobile, make the preferred action easy to reach without covering the content or form button."] },
      { heading: "Build trust without making claims", paragraphs: ["People need enough evidence to feel safe taking the next step. Use genuine testimonials, live project links, real business details, a clear process, relevant qualifications, and honest service boundaries. If a result has not been measured or approved, do not state it as a result.", "Policies and secure browsing also matter. Keep the privacy wording aligned with the actual tools and data the site uses. A polished visual style cannot replace clear information and a credible response process."] },
      { heading: "Check local visibility and technical quality", paragraphs: ["For a local business, align the website with an accurate Google Business Profile. Keep the business name, category, hours, phone, website, photos, and service area current. Google says local results are mainly influenced by relevance, distance, and prominence.", "Check page titles, headings, internal links, crawlability, mobile layout, Core Web Vitals, labels, contrast, and keyboard access. These are foundations. Passing a technical check does not guarantee enquiries, but ignoring the foundations can create avoidable friction."] },
      { heading: "Create a prioritised repair list", paragraphs: ["Start with the largest barrier you can observe. If the right people are not arriving, improve service and location clarity. If they arrive and leave, improve the offer, page structure, proof, and next step. If forms start but do not finish, reduce fields and improve the error state.", "Retest one meaningful change at a time. Track qualified enquiries, not only clicks. Review source, device, page, service, and response time where the data is appropriate. A website becomes more effective when the business treats improvement as an ongoing process rather than a one day redesign."] },
    ],
    cta: "If the website feels busy but enquiries stay quiet, request a website audit from Verzamar Technologies.",
    sources: [
      { label: "Google Search documentation", url: "https://developers.google.com/search" },
      { label: "Google Business Profile guidance", url: "https://support.google.com/business/answer/7091?hl=en" },
      { label: "Web performance metrics", url: "https://web.dev/articles/vitals" },
      { label: "W3C WCAG guidance", url: "https://www.w3.org/TR/WCAG22/" },
    ],
    related: ["website-conversion-rates", "website-redesign-checklist"],
  },
  {
    slug: "website-redesign-checklist",
    category: "Website redesign",
    title: "Signs Your Business Needs a Website Redesign: A Practical Checklist",
    excerpt: "A redesign should solve customer and business problems. Use this checklist to decide whether you need a new structure, targeted repairs, or both.",
    published: "15 October 2026",
    readingTime: "8 minute read",
    primaryKeyword: "signs your business needs a website redesign",
    secondaryKeywords: ["website redesign checklist", "small business website redesign", "mobile friendly business website", "website accessibility audit"],
    metaTitle: "Signs Your Business Needs a Website Redesign Checklist",
    metaDescription: "Use this practical checklist to decide whether an old business website needs a redesign, targeted repairs, or a clearer content structure.",
    image: "/manus-storage/async-images/uukmz8QR9yfFJGtJjC6Y9S/image-4.webp",
    imageAlt: "Before and after website layout with a bright blue redesign marker",
    sections: [
      { heading: "A redesign should have a job", paragraphs: ["A visual refresh can be useful, but a redesign should not be approved only because the colours look old. Start with the customer and business problem. Is the site difficult to use, hard to find, unclear, inaccessible, slow, insecure, or no longer aligned with the service?", "Write down the current evidence before choosing a new layout. Review enquiries, customer questions, Search Console, page performance, form completion, phone clicks, and comments from real users. The evidence will help you distinguish a full rebuild from a focused improvement."] },
      { heading: "Your phone experience is failing", paragraphs: ["A site that looks acceptable on a large screen can be difficult to use on a phone. Check text size, navigation, form fields, tap targets, phone links, page order, layout movement, and the visibility of the primary action. Test on a real phone and a slower connection.", "Core Web Vitals can help you investigate loading, responsiveness, and visual stability. They are useful technical signals, not a promise of rankings or enquiries. Pair them with a human review of whether the page is easy to understand and use."] },
      { heading: "People cannot understand the offer", paragraphs: ["If a visitor cannot say what the business does after reading the first section, the content needs attention. Clarify the audience, service, area, problem, proof, and next step. Use headings that help people scan and page titles that describe the page honestly.", "A new design will not fix unclear content by itself. Rewrite the message before choosing decorative elements. Make the next action specific, such as book a consultation, request a quote, call the business, or send a project brief."] },
      { heading: "Accessibility and trust are weak", paragraphs: ["Check keyboard access, headings, form labels, visible focus, colour contrast, image alternatives, error messages, and meaningful link text. These are not optional details for a professional business website. They make it easier for more people to understand and act.", "Trust also depends on accuracy. Use current contact details, genuine testimonials, real project links, clear policies, honest service boundaries, and a process that sets expectations. Do not replace missing evidence with invented badges or claims."] },
      { heading: "The search structure is outdated", paragraphs: ["Review the pages that search systems can crawl, the titles and descriptions, the internal links, the sitemap, broken links, duplicate pages, and service area information. Build pages for real customer questions rather than creating many similar pages with only a location word changed.", "If URLs change, plan the move carefully. Map old pages to relevant new pages, use direct permanent redirects where appropriate, update canonicals and internal links, submit the new sitemap, and monitor Search Console. A redesign should protect useful existing paths instead of discarding them casually."] },
      { heading: "Choose the smallest useful change", paragraphs: ["Sometimes a new page structure is needed. Sometimes the right solution is better service copy, a simpler form, faster images, improved contrast, or accurate local information. A practical audit can identify the smallest change that removes the largest barrier.", "Set a baseline and decide how you will judge progress. Use qualified enquiries, completed actions, customer feedback, and technical checks. Do not define success as a guaranteed position, traffic number, or revenue result without evidence from the business."] },
    ],
    cta: "Not sure whether to redesign or repair? Book a Free Consultation and bring the evidence.",
    sources: [
      { label: "Google guidance for site moves", url: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" },
      { label: "Google Business Profile help", url: "https://support.google.com/business/answer/3038177?hl=en" },
      { label: "W3C accessibility standards", url: "https://www.w3.org/WAI/standards-guidelines/wcag/" },
      { label: "Web performance metrics", url: "https://web.dev/articles/vitals" },
    ],
    related: ["business-website-not-generating-enquiries", "build-small-business-website"],
  },
  {
    slug: "local-seo-small-business",
    category: "Search visibility",
    title: "Local SEO for Small Businesses: A Practical Guide for Any Service Area",
    excerpt: "A grounded local search guide covering business details, useful pages, reviews, accessibility, performance, and responsible measurement.",
    published: "15 October 2026",
    readingTime: "7 minute read",
    primaryKeyword: "local SEO for small businesses",
    secondaryKeywords: ["Google Business Profile optimization", "local search visibility", "service area business SEO", "local citations and reviews"],
    metaTitle: "Local SEO for Small Businesses and Service Areas",
    metaDescription: "Learn practical local SEO steps for small businesses, including Google Business Profile, service pages, reviews, performance, and measurement.",
    image: "/manus-storage/async-images/uukmz8QR9yfFJGtJjC6Y9S/image-5.webp",
    imageAlt: "Local search map with blue business marker and clear service information",
    sections: [
      { heading: "What local SEO is meant to do", paragraphs: ["Local SEO helps people understand that a business serves a particular place and a particular need. It is not a promise of a first position. It is a set of useful signals and customer experiences that make the business easier to find, understand, and contact.", "For any business, the details should include the real service areas, customer questions, and services the business can genuinely support. Publish useful location and service information where it is true, not a long list of places created only for search."] },
      { heading: "Complete the business profile accurately", paragraphs: ["Where the business is eligible, claim and verify the Google Business Profile. Use the real business name, an appropriate category, current hours, a phone number, website, photos, and accurate address or service area information. Keep these details current when the business changes.", "Google explains that local results are mainly influenced by relevance, distance, and prominence. A complete profile can help matching, but no agency can guarantee a position. Follow the current rules for storefronts, service area businesses, categories, and reviews."] },
      { heading: "Build useful website pages", paragraphs: ["Create a page for each important service and explain what it includes, who it helps, where it is available, and how to begin. Use descriptive page titles, clean URLs, logical headings, internal links, and original information that answers customer questions.", "Avoid doorway pages that repeat the same copy for many locations. A service area page should contain useful evidence and practical information for that location. If you cannot provide a meaningful local experience, do not create the page just to target a phrase."] },
      { heading: "Earn trust with real details", paragraphs: ["Accurate details across relevant directories can make it easier for people and systems to confirm the business. Genuine reviews and thoughtful responses can help visitors assess the service. Do not buy reviews, copy testimonials, or create customer stories that did not happen.", "Show the next step clearly. Phone, email, WhatsApp, quote forms, and bookings should work on mobile. Explain response expectations so the visitor knows whether to expect a call, message, or email."] },
      { heading: "Keep the experience accessible and fast", paragraphs: ["Use readable text, strong contrast, descriptive alternatives, keyboard friendly controls, labels, helpful errors, and visible focus. Test the page on a phone and on the networks your customers use. Compress images, limit unnecessary scripts, and protect visual stability.", "Accessibility and performance improve the experience, but they do not guarantee a ranking or conversion result. Treat them as quality foundations and check the full customer journey as well."] },
      { heading: "Measure qualified local actions", paragraphs: ["Use Search Console to understand queries and pages, Business Profile data to understand interactions, and a simple lead record to understand calls, messages, quotes, and bookings. Review the quality of the enquiries, not only the number of clicks.", "Improve one part of the journey at a time. Keep an honest record of what changed and what the business observed. This approach is more useful than publishing a fixed rank or traffic claim that cannot be supported."] },
    ],
    cta: "Want a practical local visibility plan? Start with a Free Consultation.",
    sources: [
      { label: "Google local ranking guidance", url: "https://support.google.com/business/answer/7091?hl=en" },
      { label: "Google profile guidelines", url: "https://support.google.com/business/answer/3038177?hl=en" },
      { label: "Google Search documentation", url: "https://developers.google.com/search/docs" },
      { label: "W3C accessibility guidance", url: "https://www.w3.org/TR/WCAG21/" },
    ],
    related: ["build-small-business-website", "plumber-website-design-guide"],
  },
  {
    slug: "website-conversion-rates",
    category: "Conversion improvement",
    title: "How to Improve Website Conversion Rates Without Increasing Ad Spend",
    excerpt: "A practical improvement plan for turning existing attention into calls, messages, bookings, quote requests, or sales without adding a bigger media budget.",
    published: "15 October 2026",
    readingTime: "8 minute read",
    primaryKeyword: "improve website conversion rates without increasing ad spend",
    secondaryKeywords: ["website conversion optimization", "local service business website conversions", "website usability and accessibility", "Core Web Vitals"],
    metaTitle: "Improve Website Conversion Rates Without More Ad Spend",
    metaDescription: "Improve website conversions with clearer offers, less friction, stronger trust, accessible forms, faster pages, and responsible testing.",
    image: "/manus-storage/async-images/frA7G2BrlwPbhfPkRmOhp2/image-1.webp",
    imageAlt: "Bright blue conversion path connecting a website visit to a contact action",
    sections: [
      { heading: "Define one meaningful conversion", paragraphs: ["A conversion is not always a purchase. For a consultant it may be a booked consultation. For a plumber it may be a call or quote request. For a service business it may be a useful message. Choose one primary action and list supporting actions such as reading a service page or opening a phone link.", "Record a baseline before making changes. Note source, device, page, action, service, and response time where the data is appropriate. Conversion rates vary by audience, offer, location, traffic quality, and buying cycle, so avoid publishing a universal benchmark."] },
      { heading: "Make the offer easy to understand", paragraphs: ["A visitor should quickly see who the business helps, what it provides, where it works, and why the next step is worth taking. Use a direct heading, a useful supporting sentence, relevant proof, and one clear action near the start of the page.", "Pricing guidance can reduce uncertainty when it is accurate and suitable for the service. If a quote is needed, explain what information helps you prepare it. Do not hide the next step behind clever wording or a long introduction."] },
      { heading: "Reduce mobile and form friction", paragraphs: ["Shorten forms to the information the business needs. Use labels, helpful placeholders, correct field types, and clear errors. Make phone, email, WhatsApp, and booking paths easy to use on a phone. After submission, explain what happens next.", "Do not use a chat launcher, pop up, or floating button in a way that covers the form or its submit button. Keep the primary action visible. Test with a thumb, a keyboard, and a screen reader where practical."] },
      { heading: "Use trust that can be checked", paragraphs: ["Trust signals should be real and relevant. Use approved testimonials, live work links, business details, genuine photographs, useful process information, and clear policies. Show the people or organisation behind the service when the business has approved that information.", "Do not add fake logos, awards, numbers, reviews, or claims. Evidence is stronger when it helps a visitor understand what the business actually does and what the first step feels like."] },
      { heading: "Improve visibility without buying more ads", paragraphs: ["Helpful service pages, accurate local information, thoughtful review responses, useful articles, and internal links can support organic discovery. Keep the website aligned with the Google Business Profile where the business is eligible.", "Search visibility takes time and depends on many factors. Google guidance is a set of best practices, not a guarantee of ranking or traffic. Make content useful for people first and measure the enquiries that follow."] },
      { heading: "Test one change at a time", paragraphs: ["Choose a change that addresses an observed problem. You might improve the first heading, shorten a form, move the phone action, add a missing service detail, or make the booking path clearer. Keep the rest of the page stable long enough to learn something useful.", "Review qualified actions, not only clicks. Segment by device, source, location, and service when the sample and privacy approach support it. Use the result to choose the next small improvement rather than rebuilding everything without evidence."] },
      { heading: "A practical thirty day plan", paragraphs: ["Week one can focus on the offer, primary action, contact paths, and baseline record. Week two can improve forms, phone links, trust details, and mobile spacing. Week three can address service pages, local information, performance, and accessibility. Week four can review the evidence and choose the next test.", "This approach does not promise a particular rate. It creates a clearer customer journey and a responsible way to learn what helps the right visitors take the next step."] },
    ],
    cta: "Want to find the highest friction point first? Request a Verzamar Technologies Website Audit.",
    sources: [
      { label: "Google Search guidance", url: "https://developers.google.com/search" },
      { label: "Google local ranking guidance", url: "https://support.google.com/business/answer/7091?hl=en" },
      { label: "W3C WCAG guidance", url: "https://www.w3.org/TR/WCAG22/" },
      { label: "Nielsen Norman Group conversion guidance", url: "https://www.nngroup.com/articles/conversion-rates/" },
    ],
    related: ["business-website-not-generating-enquiries", "website-redesign-checklist"],
  },
];

export const findArticle = (slug: string) => blogArticles.find(article => article.slug === slug);
