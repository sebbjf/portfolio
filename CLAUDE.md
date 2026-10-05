# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev`: Astro dev server (`npm run dev:host` exposes it on the LAN)
- `npm run build`: runs `astro build`, then `scripts/fix-vercel-runtime.mjs`
- `npm run preview`: preview the build
- `npm run i18n`: `astro-i18next generate`

There are no tests and no linter.

## Architecture

This is a personal portfolio site (sebastianjf.com) built with Astro 4 and deployed to Vercel. It uses `output: "server"` with the `@astrojs/vercel/serverless` adapter, so pages are rendered on demand by a single `_render` function. React is used only for interactive islands: the `@astrojs/react` integration is limited to `**/react/*` paths, plus `.tsx`/`.jsx` files such as `CommandMenu.tsx`.

**Vercel runtime workaround:** `@astrojs/vercel@7` is the last adapter version that supports Astro 4. It only recognizes Node 18 and 20, and for any other version it falls back to `nodejs18.x`, which Vercel rejects. `scripts/fix-vercel-runtime.mjs` runs after the build and rewrites `runtime` in `.vercel/output/functions/**/.vc-config.json` to the Node version used for the build. Keep this script in the build until the project moves to a newer Astro and adapter.

**Pages are composed from sections:** `src/pages/*.astro` assemble the components in `src/sections/` (Header, AboutMe, Skills, Experience, Projects, Contact, Footer) inside `src/layouts/Layout.astro`. Content data (projects, experience, skills, command-menu actions) lives in plain JS arrays in `src/consts/`, not in content collections.

**i18n (astro-i18next):** the locales are `en` (default, no prefix) and `es` (under `/es/`).
- Each page exists twice: `src/pages/foo.astro` and `src/pages/es/foo.astro`. The two files are near-identical and differ only in `changeLanguage("en" | "es")` in the frontmatter, so change both when you edit a page.
- UI strings are in `public/locales/{en,es}/translation.json`. Components read them with `t("key")` from `i18next` and build links with `localizePath()` from `astro-i18next`.
- Data in `src/consts/*.js` handles translation inline with an optional `translation.es` object per entry; sections choose between it and the default using `i18next.language`.
- The translation JSON files are listed under `includeFiles` in the Vercel adapter config in `astro.config.mjs`, so the serverless function can read them at runtime. Keep that list in sync if you add locales or namespaces.

**Redirects:** `/resume` and `/es/resume` redirect to PDFs in `public/files/` through `vercel.json`.