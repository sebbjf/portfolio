# Mapa del proyecto

Portfolio personal (sebastianjf.com): Astro 7, página estática, desplegada en Vercel. Idiomas: inglés (sin prefijo) y español (`/es/`). Detalles de diseño y reglas en `CLAUDE.md`.

## Dónde está cada cosa

| Quiero cambiar... | Archivo |
|---|---|
| Orden de las secciones de la página | `src/pages/index.astro` y `src/pages/es/index.astro` (siempre los dos) |
| Hero (nombre, enlaces, hora, rol, lugar, disponibilidad) y el texto de presentación | `src/sections/AboutMe.astro` |
| Barra de navegación superior | `src/sections/Header.astro` |
| Selector de idioma (EN / ES) | `src/components/LanguageSelector.astro` |
| Tecnologías (lista) | `src/consts/skills.js`; iconos en `public/img/technologies/` |
| Tecnologías (aspecto) | `src/sections/Skills.astro`, `src/components/Skill.astro` |
| Experiencia | datos: `src/consts/experience.js`; vista: `src/sections/Experience.astro` |
| Estudios | datos: `src/consts/education.js`; vista: `src/sections/Education.astro` |
| Premios | datos: `src/consts/awards.js`; vista: `src/sections/Awards.astro` |
| Proyectos (lista) | `src/consts/projects.js`; capturas en `src/assets/projects/` |
| Proyectos (tarjeta, hover, aparición) | `src/components/Project.astro`, `src/sections/Projects.astro` |
| Contacto, copiar email | `src/sections/Contact.astro` |
| Pie de página | `src/sections/Footer.astro` |
| Página 404 | `src/pages/404.astro` y `src/pages/es/404.astro` |
| Textos de la interfaz, títulos y descripciones SEO | `public/locales/en/translation.json` y `public/locales/es/translation.json` |
| Formato de fechas de los periodos | `src/utils/formatPeriod.js` |
| Traducciones: `t()` y `localizePath()` | `src/utils/i18n.js` |
| Textos con marcado (`<0>…</0>`) | `src/components/Trans.astro` |

## Estilos

- `src/styles/styles.css`: tokens en `:root` (colores, radios, easing, z-index, `--max-w`), fuentes (`@font-face`), tamaños base, títulos, espaciado global de secciones, aparición al hacer scroll (`data-reveal`) y reglas de movimiento reducido.
- `src/styles/entries.css`: entradas tipo currículum compartidas por Experience, Education y Awards.
- `src/styles/normalize.css`: reset.
- Cada componente lleva su `<style>` con alcance propio.

## Valores que se tocan a menudo

- Ancho del contenido: `--max-w` (640px) en `styles.css`.
- Tamaño base: `font-size: 93.75%` en `html` (15px).
- Separación entre secciones: regla `section` en `styles.css` (72px, 56px en móvil). Título a contenido: `h2`, 16px.
- Contact: márgenes en `Contact.astro` (96px arriba, 88px abajo).
- Hero a presentación: `.about` en `AboutMe.astro` (32px).
- Velocidad de aparición de tarjetas de proyecto: `:global(.js) .project[data-reveal]` en `Project.astro`.
- Aparición del resto de secciones: `.js [data-reveal]` en `styles.css`.

## Fuentes, imágenes y archivos públicos

- Geist (principal): `public/fonts/Geist/`. Atkinson (respaldo): `public/fonts/Atkinson_Hyperlegible/`. La precarga está en `src/components/SEO.astro`.
- Logo: `public/img/logo/`. Banderas: `public/img/flags/`. Logos de estudios: `public/img/education/`.
- Currículum en PDF: `public/files/resume.pdf` (EN) y `public/files/resume-es.pdf` (ES). Las rutas `/resume` y `/es/resume` redirigen ahí (302) desde `redirects` en `astro.config.mjs`.

## Configuración

- `astro.config.mjs`: `site`, `i18n`, sitemap (excluye las 404), `compressHTML: true` y el adaptador de Vercel.
- `src/layouts/Layout.astro`: documento base, clase `.js`, observador de aparición, enlace de salto.
- `src/components/SEO.astro`: metaetiquetas, canónica, precarga de fuentes.
- `DESIGN.md`: sistema de diseño documentado. Está desactualizado respecto a la fuente (Geist) y al hero.

## Flujo de trabajo

- `npm run dev` para trabajar, `npm run build` para comprobar que compila. No hay tests ni linter.
- Commits directamente en `main`, sin ramas. Mensajes en inglés, formato Conventional Commits.
- Cada cambio de página va en la versión inglesa y en la española.
- Carpetas de herramientas (`.agents/`, `.claude/`): no son parte del sitio.
