import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const src = (path: string) => fileURLToPath(new URL(`./src/${path}`, import.meta.url));

// Deployed to GitHub Pages under a sub-path, so every asset URL must be prefixed.
export default defineConfig({
  base: "/new-portfolio/",
  plugins: [react()],
  resolve: {
    alias: {
      assets: src("assets"),
      components: src("components"),
      data: src("data"),
      hooks: src("hooks"),
      i18n: src("i18n"),
      lib: src("lib"),
      sections: src("sections"),
    },
  },
  build: {
    outDir: "dist",
    assetsInlineLimit: 4096,
  },
});
