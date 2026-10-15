import express, { type Express } from "express";
import fs from "fs";
import { type Server } from "http";
import { nanoid } from "nanoid";
import path from "path";
import { createServer as createViteServer } from "vite";
import viteConfig from "../../vite.config";

const routeMeta: Record<string, { title: string; description: string }> = {
  "/": { title: "Webora Digital — Websites that grow businesses", description: "Webora Digital builds business websites designed to get found, build trust, and generate enquiries." },
  "/services": { title: "Services — Webora Digital", description: "Business websites, redesigns, landing pages, SEO, and conversion improvement for growing businesses." },
  "/work": { title: "Selected work — Webora Digital", description: "Explore genuine project links and supplied testimonials from Webora Digital work." },
  "/about": { title: "About — Webora Digital", description: "A practical website development approach built around visibility, conversion, and growth." },
  "/contact": { title: "Contact — Webora Digital", description: "Tell Webora Digital what your website needs to do and request a practical next step." },
  "/book": { title: "Book a consultation — Webora Digital", description: "Book a free 30-minute conversation about your website and business goals." },
  "/audit": { title: "Website audit — Webora Digital", description: "Find the friction in your website before it costs another customer." },
  "/faq": { title: "FAQ — Webora Digital", description: "Useful answers about website development, redesign, SEO, and conversion." },
  "/insights": { title: "Insights — Webora Digital", description: "Useful answers about websites, search, and business growth." },
  "/privacy": { title: "Privacy policy — Webora Digital", description: "How Webora Digital plans to handle information submitted through the website." },
  "/terms": { title: "Terms — Webora Digital", description: "Launch terms placeholder for Webora Digital website and services." },
};

function withRouteMeta(template: string, url: string) {
  const pathname = new URL(url, "http://localhost").pathname;
  const serviceSlug = pathname.startsWith("/services/") ? pathname.split("/")[2] : undefined;
  const serviceNames: Record<string, string> = { "business-websites": "Business websites", "website-redesign": "Website redesign", "landing-pages": "Landing pages", "seo-visibility": "SEO and visibility", "conversion-optimization": "Conversion optimization" };
  const meta = routeMeta[pathname] ?? (serviceSlug && serviceNames[serviceSlug] ? { title: `${serviceNames[serviceSlug]} — Webora Digital`, description: `${serviceNames[serviceSlug]} services for consultants, coaches, startups, and growing businesses.` } : routeMeta["/"]);
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

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", async (req, res) => {
    const template = await fs.promises.readFile(path.resolve(distPath, "index.html"), "utf-8");
    res.type("html").send(withRouteMeta(template, req.originalUrl));
  });
}
