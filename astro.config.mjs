// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build
export default defineConfig({
  site: "https://frknilisu.github.io",
  base: "/",
  // Hugo ile aynı URL biçimi: /slug/ ve /etiket/slug/
  trailingSlash: "always",
  build: { format: "directory" },
  // Kod/şablon blokları için açık tema — sıcak zemine dark blok yakışmıyor.
  markdown: {
    shikiConfig: { theme: "github-light" },
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
