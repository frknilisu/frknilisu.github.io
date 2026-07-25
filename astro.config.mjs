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
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
