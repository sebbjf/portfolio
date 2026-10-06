import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: "always",
  },
  // Astro 7 defaults to JSX whitespace rules ("jsx"), which drop line breaks between
  // text and tags ("my projects</a>or<a"). true keeps the lossless Astro 4 behavior.
  compressHTML: true,
  site: "https://sebastianjf.com",
  integrations: [
    sitemap({
      // Keep the error pages out of search engines.
      filter: (page) => !/\/404\/$/.test(new URL(page).pathname),
    }),
  ],
  // English has no prefix and Spanish lives under /es/. Astro.currentLocale comes
  // from the URL, so components get the right language without global state.
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: { prefixDefaultLocale: false },
  },
  // Static output: every page is prerendered and no serverless functions are deployed.
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
