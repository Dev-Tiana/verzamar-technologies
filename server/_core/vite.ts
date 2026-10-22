import express, { type Express } from "express";
import fs from "fs";
import { type Server } from "http";
import { nanoid } from "nanoid";
import path from "path";
import { createServer as createViteServer } from "vite";
import viteConfig from "../../vite.config";

const routeMeta: Record<string, { title: string; description: string }> = {
  "/": { title: "Verzamar | Professional Website Development", description: "Verzamar Technologies builds business websites designed to get found, build trust, and generate enquiries." },
  "/services": { title: "Services, Verzamar", description: "Business websites, redesigns, landing pages, SEO, and conversion improvement for growing businesses." },
  "/pricing": { title: "Pricing, Verzamar", description: "Proposed starting prices for landing pages, business websites, redesigns, ecommerce, and custom web development." },
  "/work": { title: "Selected work, Verzamar", description: "Explore genuine project links and supplied testimonials from Verzamar Technologies work." },
  "/about": { title: "About, Verzamar", description: "A practical website development approach built around visibility, conversion, and growth." },
  "/contact": { title: "Contact, Verzamar", description: "Tell Verzamar Technologies what your website needs to do and request a practical next step." },
  "/book": { title: "Book a Free Consultation, Verzamar", description: "Book a free 30 minute conversation about your website and business goals." },
  "/audit": { title: "Website audit, Verzamar", description: "Find the friction in your website before it costs another customer." },
  "/faq": { title: "FAQ, Verzamar", description: "Useful answers about website development, redesign, SEO, and conversion." },
  "/insights": { title: "Insights, Verzamar", description: "Useful answers about websites, search, and business growth." },
  "/privacy": { title: "Privacy policy, Verzamar", description: "How Verzamar Technologies plans to handle information submitted through the website." },
  "/terms": { title: "Terms, Verzamar", description: "Launch terms for Verzamar Technologies website and services." },
};

function withRouteMeta(template: string, url: string) {
  const pathname = new URL(url, "http://localhost").pathname;
  const serviceSlug = pathname.startsWith("/services/") ? pathname.split("/")[2] : undefined;
  const articleSlug = pathname.startsWith("/insights/") ? pathname.split("/")[2] : undefined;
  const serviceNames: Record<string, string> = { "business-websites": "Business websites", "website-redesign": "Website redesign", "landing-pages": "Landing pages", "seo-visibility": "SEO and visibility", "conversion-optimization": "Conversion optimization" };
  const articleNames: Record<string, string> = { "build-small-business-website": "How to Build a Small Business Website", "plumber-website-design-guide": "Plumber Website Design Guide", "business-website-not-generating-enquiries": "Why Your Business Website Is Not Generating Enquiries", "website-redesign-checklist": "Website Redesign Checklist", "local-seo-small-business": "Local SEO for Small Businesses", "website-conversion-rates": "Improve Website Conversion Rates" };
  const meta = routeMeta[pathname] ?? (serviceSlug && serviceNames[serviceSlug] ? { title: `${serviceNames[serviceSlug]}, Verzamar`, description: `${serviceNames[serviceSlug]} services for consultants, coaches, startups, and growing businesses.` } : articleSlug && articleNames[articleSlug] ? { title: `${articleNames[articleSlug]}, Verzamar`, description: `Useful guidance from Verzamar Technologies about ${articleNames[articleSlug].toLowerCase()}.` } : routeMeta["/"]);
  return template.replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`).replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${meta.description}" />`).replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${meta.title}" />`).replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${meta.description}" />`);
}

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "../..",
        "client",
        "index.html"
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = withRouteMeta(template, url);
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath =
    process.env.NODE_ENV === "development"
      ? path.resolve(import.meta.dirname, "../..", "dist", "public")
      : path.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    console.error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }

  app.use((req, res, next) => {
    if (/\.(?:avif|webp|png|jpe?g|gif|svg|ico|woff2?)$/i.test(req.path)) {
      res.set("Cache-Control", "public, max-age=604800");
    }
    next();
  });
  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", async (req, res) => {
    const template = await fs.promises.readFile(path.resolve(distPath, "index.html"), "utf-8");
    res.type("html").send(withRouteMeta(template, req.originalUrl));
  });
}
