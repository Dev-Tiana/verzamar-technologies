import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect, useRef } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { SiteChrome } from "./components/SiteChrome";
import { About, ArticlePage, Audit, Book, Contact, FAQ, Insights, ServicePage, Services, Terms, Privacy, Work } from "./pages/PublicPages";
import Pricing from "./pages/Pricing";
import { findArticle } from "./content/blog";

function RouteMetadata() {
  const [location] = useLocation();
  const returningThroughHistory = useRef(false);
  useEffect(() => {
    const onPopState = () => { returningThroughHistory.current = true; };
    window.history.scrollRestoration = "auto";
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);
  useEffect(() => {
    if (!returningThroughHistory.current && !location.includes("#")) window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    returningThroughHistory.current = false;
    const labels: Record<string, [string, string]> = {
      "/": ["Verzamar | Professional Website Development", "Verzamar Technologies builds business websites designed to get found, build trust, and generate enquiries."],
      "/services": ["Services, Verzamar", "Business websites, redesigns, landing pages, SEO, and conversion improvement for growing businesses."],
      "/pricing": ["Pricing, Verzamar", "Proposed starting prices for landing pages, business websites, redesigns, ecommerce, and custom web development."],
      "/work": ["Selected work, Verzamar", "Explore genuine project links and supplied testimonials from Verzamar Technologies work."],
      "/about": ["About, Verzamar", "A practical website development approach built around visibility, conversion, and growth."],
      "/contact": ["Contact, Verzamar", "Tell Verzamar Technologies what your website needs to do and request a practical next step."],
      "/book": ["Book a Free Consultation, Verzamar", "Book a free 30 minute conversation about your website and business goals."],
      "/audit": ["Website audit, Verzamar", "Find the friction in your website before it costs another customer."],
      "/faq": ["FAQ, Verzamar", "Useful answers about website development, redesign, SEO, and conversion."],
      "/insights": ["Insights, Verzamar", "Useful answers about websites, search, and business growth."],
      "/privacy": ["Privacy policy, Verzamar", "How Verzamar Technologies plans to handle information submitted through the website."],
      "/terms": ["Terms, Verzamar", "Launch terms for Verzamar Technologies website and services."],
    };
    const slug = location.startsWith("/insights/") ? location.split("/")[2] : "";
    const article = slug ? findArticle(slug) : undefined;
    const [title, description] = article ? [article.metaTitle, article.metaDescription] : labels[location] ?? ["Verzamar | Professional Website Development", "Business websites built around visibility, clarity, and the next useful action."];
    document.title = title;
    const meta = document.querySelector('meta[name="description"]') ?? document.createElement("meta"); meta.setAttribute("name", "description"); meta.setAttribute("content", description); document.head.appendChild(meta);
    const canonical = document.querySelector('link[rel="canonical"]') ?? document.createElement("link"); canonical.setAttribute("rel", "canonical"); canonical.setAttribute("href", `${window.location.origin}${location}`); document.head.appendChild(canonical);
    for (const [property, content] of [["og:title", title], ["og:description", description], ["og:url", `${window.location.origin}${location}`]] as const) { const tag = document.querySelector(`meta[property="${property}"]`) ?? document.createElement("meta"); tag.setAttribute("property", property); tag.setAttribute("content", content); document.head.appendChild(tag); }
  }, [location]);
  return null;
}

function Router() { return <Switch>
  <Route path="/" component={Home} /><Route path="/services" component={Services} /><Route path="/services/:slug" component={ServicePage} />
  <Route path="/pricing" component={Pricing} /><Route path="/work" component={Work} /><Route path="/about" component={About} /><Route path="/contact" component={Contact} /><Route path="/book" component={Book} /><Route path="/audit" component={Audit} /><Route path="/faq" component={FAQ} /><Route path="/insights/:slug" component={ArticlePage} /><Route path="/insights" component={Insights} /><Route path="/privacy" component={Privacy} /><Route path="/terms" component={Terms} /><Route path="/404" component={NotFound} /><Route component={NotFound} />
</Switch>; }

function App() { return <ErrorBoundary><ThemeProvider defaultTheme="light" switchable><TooltipProvider><Toaster /><RouteMetadata /><SiteChrome><Router /></SiteChrome></TooltipProvider></ThemeProvider></ErrorBoundary>; }
export default App;
