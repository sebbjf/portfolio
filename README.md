<div align="center">

<img src="public/og/og-en.png" alt="sebastianjf.com" width="720" />

# Portfolio

My personal site, in English and Spanish.

[**sebastianjf.com**](https://sebastianjf.com)

![Astro](https://img.shields.io/badge/Astro-7-0d0d0d?style=flat-square&logo=astro&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-static-0d0d0d?style=flat-square&logo=vercel&logoColor=white)
![i18n](https://img.shields.io/badge/i18n-en%20%C2%B7%20es-0d0d0d?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-0d0d0d?style=flat-square)

</div>

---

## Getting started

```bash
npm install
npm run dev
```

| Command           | What it does                         |
| :---------------- | :----------------------------------- |
| `npm run dev`     | Start the dev server                 |
| `npm run dev:host`| Start the dev server on the LAN      |
| `npm run build`   | Build the site into `dist/`          |
| `npm run preview` | Preview the build locally            |

## Structure

```text
src/
├── pages/      Pages (each one also exists under es/)
├── sections/   Header, About, Skills, Experience, Projects…
├── components/ Reusable pieces
├── consts/     Content: projects, experience, skills, awards
└── styles/     Global styles and design tokens
public/
└── locales/    UI strings for en and es
```

## License

[MIT](LICENSE) © seb
