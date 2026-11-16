# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev`: Astro dev server (`npm run dev:host` exposes it on the LAN)
- `npm run build`: `astro build` (output goes to `.vercel/output/`)
- `npm run preview`: preview the build

There are no tests and no linter. `mapa.md` lists where everything lives; read it first.

## Architecture

This is a personal portfolio site (sebastianjf.com) built with Astro 7 and deployed to Vercel (Node >= 22.12, see `engines` in `package.json`). It uses `output: "static"` with the `@astrojs/vercel` adapter, so every page is prerendered and no serverless functions are deployed.

**Whitespace:** `compressHTML: true` in `astro.config.mjs` keeps Astro's lossless whitespace handling. Astro 7's default (`"jsx"`) drops line breaks between text and tags, which glues words together in templates that wrap text across lines.

**Pages are composed from sections:** `src/pages/*.astro` assemble the components in `src/sections/` (Header, AboutMe, Skills, Experience, Education, Awards, Projects, Contact, Footer) inside `src/layouts/Layout.astro`. Content data (projects, experience, skills) lives in plain JS arrays in `src/consts/`, not in content collections.

**Styling:** plain CSS. The font is Geist (variable, latin subset, `public/fonts/Geist/`), preloaded in `SEO.astro`; Atkinson Hyperlegible (`public/fonts/Atkinson_Hyperlegible/`) stays only as a fallback. Geist has no italic, so italics (role, organization) are synthesized by the browser. The page is flat: the root size is 15px (`font-size: 93.75%` on `html`), the name, section titles and entry titles are weight 500, and hierarchy comes from weight and color, not size. The content column is 640px (`--max-w`). The palette is monochrome warm ink on near-black with no accent hue (`--accent` is bright ink); green (`--status`) is used only for the "available for work" dot, and gold (`--trophy`) only for the first-place trophy in Awards. Design tokens (colors, radii, easing, z-index, `--max-w`) are defined on `:root` in `src/styles/styles.css`, and each component uses scoped `<style>` blocks that reference them. Interactive elements need a hover state, an `:active` state and the global `:focus-visible` ring, and motion must respect the `prefers-reduced-motion` rule in `styles.css`.

**Spacing:** sections are 72px apart (56px on phones) through the global `section` margin; a section title sits 16px above its content; the intro under the hero is 24px below it; Contact has extra air (96px above, 88px below). Change these in `styles.css` (and `Contact.astro`), not per section.

**Hero (`src/sections/AboutMe.astro`):** left aligned, two columns. Left: name (weight 500) and role (muted, same size). Right: "available for work" link with the green dot, and below it the place and the Barcelona time (`#hero-clock`, 24h, always CET/CEST). Below both, a row with the email / github / CV links (weight 500, no slashes). On phones (max-width 768px) everything stacks in one column in that order. The intro paragraph lives in the `.about` section below it, 24px away. The analog clock tooltip was removed; do not bring it back unless asked. Entries in Experience, Education and Awards share `src/styles/entries.css` (title weight 500, italic organization, date on the right).

**Scroll reveal:** elements with `data-reveal` fade in when they enter the viewport (`Layout.astro` sets `data-in`; the transition is in `styles.css`). `--i` staggers rows.

**i18n (Astro's built-in `i18n` routing):** the locales are `en` (default, no prefix) and `es` (under `/es/`), configured in `astro.config.mjs`. Components get the language from `Astro.currentLocale`, which Astro derives from the URL.
- Each page exists twice: `src/pages/foo.astro` and `src/pages/es/foo.astro`. The two files are identical apart from relative import paths, so change both when you edit a page.
- UI strings are in `public/locales/{en,es}/translation.json`, including page titles and descriptions (`meta.*`) and accessibility labels (`a11y.*`). Components create `t` with `const t = useTranslations(Astro.currentLocale)` and build links with `localizePath(path, Astro.currentLocale)`, both from `src/utils/i18n.js`. Strings with markup use `<0>…</0>` placeholders and `src/components/Trans.astro`, which fills each one with the matching element from its slot. Don't hardcode user-facing text; strings that client scripts need are passed in through `data-*` attributes (see `Contact.astro` and `Header.astro`).
- Data in `src/consts/*.js` handles translation inline with an optional `translation.es` object per entry; sections choose between it and the default using `Astro.currentLocale`.

**SEO:** `src/components/SEO.astro` derives the canonical URL from `site` in `astro.config.mjs`. Pages that should not be indexed pass `noindex` to `Layout`. The sitemap `filter` in `astro.config.mjs` excludes the 404 pages.

**Redirects:** `/resume` and `/es/resume` redirect (302) to the PDFs in `public/files/` through `redirects` in `astro.config.mjs`; the Vercel adapter turns them into routes at build time, so there is no `vercel.json`.

<!-- graphify-rules-start (managed by `graphify init`) -->
## Use Graphify before grep

This repository is indexed by Graphify: a code graph over its call, dependency, and test structure, exposed through a connected Graphify MCP server. Before reaching for grep or reading files, use the Graphify tools your MCP client lists (their exact names and descriptions are in the server's tool list) for what the graph knows and a text search does not:

- find where a symbol, function, or class is defined (instead of grepping for it)
- understand how something works, or where a behavior is handled
- find who calls a function, or what it calls
- see what a change affects (its blast radius) and which tests cover it
- map a file's dependencies and dependents

Fall back to grep or file reads only for what the graph does not model: literal string or comment matches, non-indexed files, or reading a file you have already located. If no Graphify tools are listed, check the MCP server connection.
<!-- graphify-rules-end -->