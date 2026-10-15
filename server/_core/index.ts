import "dotenv/config";
import express from "express";
import { createServer } from "http";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { publicPlatformScript } from "./publicConfig";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";

async function startServer() {
  const app = express();
  const server = createServer(app);
  // Configure body parser with larger size limit for file uploads
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  app.get("/api/health", (_req, res) => res.json({ status: "ok" }));
  app.get("/api/platform/config.js", (_req, res) => {
    res.set("Cache-Control", "no-store").type("application/javascript").send(publicPlatformScript());
  });
  registerOAuthRoutes(app);
  const publicPaths = new Set([
    "/", "/services", "/services/business-websites", "/services/website-redesign",
    "/services/landing-pages", "/services/seo-visibility", "/services/conversion-optimization",
    "/work", "/about", "/contact", "/book", "/audit", "/faq", "/insights", "/privacy", "/terms", "/404",
  ]);
  app.use((req, res, next) => {
    if (req.method !== "GET" || req.path.startsWith("/api/") || req.path.startsWith("/assets/") || req.path.startsWith("/@vite") || req.path.startsWith("/@react-refresh") || req.path.startsWith("/@fs/") || req.path.includes(".") || publicPaths.has(req.path)) return next();
    res.status(404).set("X-Robots-Tag", "noindex").type("html").send("<!doctype html><html lang=\"en\"><head><meta name=\"robots\" content=\"noindex\"><title>Page not found — Webora Digital</title></head><body><h1>Page not found</h1><p>Return to <a href=\"/\">Webora Digital</a>.</p></body></html>");
  });
  // tRPC API
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  // development mode uses Vite, production mode uses static files
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const port = Number(process.env.PORT || "3000");
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error("Invalid PORT");
  server.on("error", error => { console.error("Server failed:", error.message); process.exit(1); });
  server.listen(port, "0.0.0.0", () => console.log(`Server listening on port ${port}`));
}

startServer().catch(error => { console.error(error); process.exit(1); });
