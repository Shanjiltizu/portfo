// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import fs from "node:fs";
import path from "node:path";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    spa: {
      enabled: true,
    },
    prerender: {
      enabled: false,
    },
  },
  vite: {
    base: "/portfo/",
    plugins: [
      {
        name: "copy-ssr-bundle",
        writeBundle() {
          const ssrDir = path.resolve("node_modules/.nitro/vite/services/ssr");
          const distDir = path.resolve("dist/server");
          if (fs.existsSync(ssrDir)) {
            fs.mkdirSync(distDir, { recursive: true });
            if (fs.existsSync(path.join(ssrDir, "index.js"))) {
              fs.copyFileSync(
                path.join(ssrDir, "index.js"),
                path.join(distDir, "server.js")
              );
              fs.copyFileSync(
                path.join(ssrDir, "index.js"),
                path.join(distDir, "index.js")
              );
            }
            const assetsDir = path.join(ssrDir, "assets");
            const destAssetsDir = path.join(distDir, "assets");
            if (fs.existsSync(assetsDir)) {
              fs.mkdirSync(destAssetsDir, { recursive: true });
              const files = fs.readdirSync(assetsDir);
              for (const file of files) {
                fs.copyFileSync(
                  path.join(assetsDir, file),
                  path.join(destAssetsDir, file)
                );
              }
            }
          }
        }
      }
    ]
  },
});
