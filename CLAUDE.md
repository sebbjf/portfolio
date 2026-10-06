# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev`: Astro dev server (`npm run dev:host` exposes it on the LAN)
- `npm run build`: runs `astro build`, then `scripts/fix-vercel-runtime.mjs` (a no-op while the site is static)
- `npm run preview`: preview the build
- `npm run i18n`: `astro-i18next generate`

There are no tests and no linter.

## Architecture

This is a personal portfolio site (sebastianjf.com) built with Astro 4 and deployed to Vercel. It uses `output: "static"` with the `@astrojs/vercel/static` adapter, so every page is prerendered and no serverless functions are deployed. Keep it static: astro-i18next sets the language globally with `changeLanguage()`, so rendering on demand (SSR) could mix languages between concurrent requests.

**Vercel runtime workaround:** `@astrojs/vercel@7` is the last adapter version that supports Astro 4. It only recognizes Node 18 and 20, and for any other version it falls back to `nodejs18.x`, which Vercel rejects. If server output is ever reintroduced, `scripts/fix-vercel-runtime.mjs` rewrites `runtime` in `.vercel/output/functions/**/.vc-config.json` to the Node version used for the build. It exits early when there are no functions.

**Pages are composed from sections:** `src/pages/*.astro` assemble the components in `src/sections/` (Header, AboutMe, Skills, Experience, Projects, Contact, Footer) inside `src/layouts/Layout.astro`. Content data (projects, experience, skills) lives in plain JS arrays in `src/consts/`, not in content collections.

**Styling:** plain CSS with the Atkinson Hyperlegible font (`public/fonts/`). The palette is monochrome warm ink on near-black with no accent hue (`--accent` is bright ink); green (`--status`) is used only for the "available for work" dot. The hero, Experience and Projects borrow the printed résumé's layout (`public/files/resume.pdf`): centered name with an italic role and contact row, and entries with a bold title, italic organization and the date on the right. Design tokens (colors, radii, easing, z-index) are defined on `:root` in `src/styles/styles.css`, and each component uses scoped `<style>` blocks that reference them. There is no accent hue (`--accent` is bright ink); green (`--status`) is used only for the "available for work" dot. Interactive elements need a hover state, an `:active` state and the global `:focus-visible` ring, and motion must respect the `prefers-reduced-motion` rule in `styles.css`.

**i18n (astro-i18next):** the locales are `en` (default, no prefix) and `es` (under `/es/`).
- Each page exists twice: `src/pages/foo.astro` and `src/pages/es/foo.astro`. The two files are near-identical and differ only in `changeLanguage("en" | "es")` in the frontmatter, so change both when you edit a page.
- UI strings are in `public/locales/{en,es}/translation.json`, including page titles and descriptions (`meta.*`) and accessibility labels (`a11y.*`). Components read them with `t("key")` from `i18next` and build links with `localizePath()` from `astro-i18next`. Don't hardcode user-facing text; strings that client scripts need are passed in through `data-*` attributes (see `Contact.astro` and `Header.astro`).
- Data in `src/consts/*.js` handles translation inline with an optional `translation.es` object per entry; sections choose between it and the default using `i18next.language`.

**SEO:** `src/components/SEO.astro` derives the canonical URL from `site` in `astro.config.mjs`. Pages that should not be indexed pass `noindex` to `Layout`. The sitemap `filter` in `astro.config.mjs` excludes the 404 pages.

**Redirects:** `/resume` and `/es/resume` redirect to PDFs in `public/files/` through `vercel.json`.