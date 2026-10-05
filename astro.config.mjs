import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/static";
import astroI18next from "astro-i18next";
import mdx from "@astrojs/mdx";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    ssr: {
      noExternal: ["path-to-regexp"],
    },
  },
  site: "https://sebastianjf.com",
  integrations: [
    sitemap({
      // Keep error pages and unfinished placeholder pages out of search engines.
      filter: (page) => !/\/(404|archive|freelance)\/$/.test(new URL(page).pathname),
    }),
    astroI18next(),
    react({
      include: ["**/react/*"],
    }),
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "rose-pine-moon",
      },
    }),
    partytown(),
  ],
  // Static output: every page is prerendered. astro-i18next switches the global
  // language per page with changeLanguage(), which is only safe at build time.
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
