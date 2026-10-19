import { defineConfig } from "vite";
// Serve the standalone original at its public design route in both local modes.
function originalRoute() {
  const rewrite = (server) => {
    server.middlewares.use((req, res, next) => {
      if (/^\/design-05\/?(?:\?|$)/.test(req.url)) {
        req.url = req.url.replace(/^\/design-05\/?/, "/original/index.html");
      }
      next();
    });
  };
  return {
    name: "original-design-route",
    configureServer: rewrite,
    configurePreviewServer: rewrite,
  };
}
export default defineConfig({ plugins: [originalRoute()] });
