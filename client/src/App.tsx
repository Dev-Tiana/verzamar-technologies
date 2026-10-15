import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { SiteChrome } from "./components/SiteChrome";
import { About, ArticlePage, Audit, Book, Contact, FAQ, Insights, ServicePage, Services, Terms, Privacy, Work } from "./pages/PublicPages";
import { findArticle } from "./content/blog";

function RouteMetadata() {
  const [location] = useLocation();
  useEffect(() => {
    const labels: Record<string, [string, string]> = {
      "/": ["Webora Digital, Websites that grow businesses", "Webora Digital builds business websites designed to get found, build trust, and generate enquiries."],
      "/services": ["Services, Webora Digital", "Business websites, redesigns, landing pages, SEO, and conversion improvement for growing businesses."],
      "/work": ["Selected work, Webora Digital", "Explore genuine project links and supplied testimonials from Webora Digital work."],
      "/about": ["About, Webora Digital", "A practical website development approach built around visibility, conversion, and growth."],
      "/contact": ["Contact, Webora Digital", "Tell Webora Digital what your website needs to do and request a practical next step."],
      "/book": ["Book a Free Consultation, Webora Digital", "Book a free 30 minute conversation about your website and business goals."],
      "/audit": ["Website audit, Webora Digital", "Find the friction in your website before it costs another customer."],
      "/faq": ["FAQ, Webora Digital", "Useful answers about website development, redesign, SEO, and conversion."],
      "/insights": ["Insights, Webora Digital", "Useful answers about websites, search, and business growth."],
      "/privacy": ["Privacy policy, Webora Digital", "How Webora Digital plans to handle information submitted through the website."],
      "/terms": ["Terms, Webora Digital", "Launch terms for Webora Digital website and services."],
    };
    const slug = location.startsWith("/insights/") ? location.split("/")[2] : "";
    const article = slug ? findArticle(slug) : undefined;
    const [title, description] = article ? [article.metaTitle, article.metaDescription] : labels[location] ?? ["Webora Digital, Websites that grow businesses", "Business websites built around visibility, clarity, and the next useful action."];
    document.title = title;
    const meta = document.querySelector('meta[name="description"]') ?? document.createElement("meta"); meta.setAttribute("name", "description"); meta.setAttribute("content", description); document.head.appendChild(meta);
    const canonical = document.querySelector('link[rel="canonical"]') ?? document.createElement("link"); canonical.setAttribute("rel", "canonical"); canonical.setAttribute("href", `${window.location.origin}${location}`); document.head.appendChild(canonical);
    for (const [property, content] of [["og:title", title], ["og:description", description], ["og:url", `${window.location.origin}${location}`]] as const) { const tag = document.querySelector(`meta[property="${property}"]`) ?? document.createElement("meta"); tag.setAttribute("property", property); tag.setAttribute("content", content); document.head.appendChild(tag); }
  }, [location]);
  return null;
}

function Router() { return <Switch>
  <Route path="/" component={Home} /><Route path="/services" component={Services} /><Route path="/services/:slug" component={ServicePage} />
  <Route path="/work" component={Work} /><Route path="/about" component={About} /><Route path="/contact" component={Contact} /><Route path="/book" component={Book} /><Route path="/audit" component={Audit} /><Route path="/faq" component={FAQ} /><Route path="/insights/:slug" component={ArticlePage} /><Route path="/insights" component={Insights} /><Route path="/privacy" component={Privacy} /><Route path="/terms" component={Terms} /><Route path="/404" component={NotFound} /><Route component={NotFound} />
</Switch>; }

function App() { return <ErrorBoundary><ThemeProvider defaultTheme="light" switchable><TooltipProvider><Toaster /><RouteMetadata /><SiteChrome><Router /></SiteChrome></TooltipProvider></ThemeProvider></ErrorBoundary>; }
export default App;
