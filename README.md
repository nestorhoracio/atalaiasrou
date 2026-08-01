# Atalaias Rou — Sitio Web
## Stack: Astro + Netlify

> Estado actual, changelog y próximos pasos: ver [ROADMAP.md](./ROADMAP.md)

**Sitio en producción**: [atalaiasrou.netlify.app](https://atalaiasrou.netlify.app)
**Repositorio**: [github.com/nestorhoracio/atalaiasrou](https://github.com/nestorhoracio/atalaiasrou)

---

## Sobre el proyecto

Sitio web de **Atalaias Rou / IMTF Uruguay y Brasil**, un ministerio evangélico enfocado en la predicación del evangelio y la acción social. El sitio agrupa en un solo lugar:

- Un **portal de radios** con la transmisión en vivo de 20 emisoras evangélicas/gospel.
- La subweb de **IMTF Uruguay** (en español): declaración de fe, historia, fotos, videos, horarios de actividades y noticias propias.
- La subweb de **IMTF Brasil** (en portugués): mismo esquema de contenido, en su propio idioma.
- Una sección **institucional** con los pastores mundiales, nacionales y regionales del ministerio.

Este proyecto **no incluye asistente de IA**, a diferencia de otros sitios del mismo desarrollador.

---

## Stack técnico

- **Astro 7**, sitio 100% estático (sin adapter, sin backend)
- CSS vanilla con custom properties (sin Tailwind, sin frameworks de UI)
- Tipografía **Montserrat** + **Lora** autohospedadas (`@fontsource-variable/montserrat`, `@fontsource/lora` — sin Google Fonts CDN)
- Content Collections de Astro (Markdown) para las noticias de cada subsitio
- Hosting y despliegue continuo en **Netlify**

---

## Estructura del proyecto

```
atalaiasrou/
├── CLAUDE.md / README.md / ROADMAP.md
├── astro.config.mjs / netlify.toml
├── public/
│   └── images/{logos,radios,noticias-uruguay,noticias-brasil,pastores}/
└── src/
    ├── content.config.ts
    ├── content/
    │   ├── noticias-uruguay/*.md
    │   └── noticias-brasil/*.md
    ├── data/              # radios, pastores, horarios, contenido institucional general (UY/BR) y de "Proyecto Atalaias Rou"
    ├── layouts/Layout.astro
    ├── components/
    │   ├── seo/, layout/, home/, radios/, institucional/, noticias/, subsite/
    └── pages/
        ├── index.astro, institucional.astro, 404.astro
        ├── uruguay/       # subsitio en español
        └── brasil/        # subsitio en portugués
```

---

## Instalación y desarrollo local

```bash
git clone https://github.com/nestorhoracio/atalaiasrou.git
cd atalaiasrou
npm install
npm run dev
# → http://localhost:4321
```

## Build para producción

```bash
npm run build     # genera /dist
npm run preview   # sirve /dist localmente para probarlo antes de deployar
```

## Comandos

| Comando | Acción |
| :--- | :--- |
| `npm install` | Instala las dependencias |
| `npm run dev` | Servidor de desarrollo en `localhost:4321` |
| `npm run build` | Genera el sitio de producción en `./dist/` |
| `npm run preview` | Sirve `./dist/` localmente |
| `npx astro check` | Chequeo de tipos de TypeScript/Astro |

---

## Cómo agregar contenido

**Una noticia nueva** (Uruguay o Brasil): crear un archivo `.md` en `src/content/noticias-uruguay/` o `src/content/noticias-brasil/`, con este formato de frontmatter:

```md
---
titulo: "Título de la noticia"
fecha: 2026-08-15
resumen: "Resumen corto que aparece en el listado."
imagen: "/images/noticias-uruguay/nombre-de-archivo.jpg"   # opcional
destacada: false                                            # opcional
borrador: false                                              # true = no se publica todavía
---

Texto completo de la noticia en Markdown.
```

**Una radio nueva**: editar el array `radios` en `src/data/radios.ts` — completar `streamUrl` con la URL HTTPS del stream (una radio con `streamUrl: null` se muestra como "Próximamente").

**Un pastor nuevo**: editar el array `pastores` en `src/data/pastores.ts`.

**Textos institucionales de cada subsitio** (declaración de fe, historia, horarios, fotos, videos): editar `src/data/contenido-uruguay.ts` / `contenido-brasil.ts` y `horarios-uruguay.ts` / `horarios-brasil.ts`.

**Contenido institucional general** (presentación, historia, misión, visión, valores, áreas de trabajo, organigrama, fundamento bíblico y lema del ministerio "Proyecto Atalaias Rou" completo, mostrado en `/institucional/`): editar `src/data/contenido-institucional.ts`.

---

## Deploy en Netlify

El sitio ya está conectado: cada push a `main` dispara un build (`npm run build`, publish dir `dist`, ya configurado en `netlify.toml`) y lo deploya automáticamente en [atalaiasrou.netlify.app](https://atalaiasrou.netlify.app). No hace falta ningún paso manual para deployar — alcanza con pushear a `main`.

Cuando haya un dominio propio, configurarlo en Netlify y actualizar `site` en `astro.config.mjs` y la URL del `Sitemap` en `public/robots.txt`.

---

## Datos de contacto

El WhatsApp y el email reales del proyecto (los que aparecen en el material gráfico del Pastor Manoel Da Luz) ya están cargados en `Footer.astro`.

---

*Proyecto: Atalaias Rou — Informática Arroba (Néstor Horacio) · Julio 2026*

Para el detalle de cambios realizados y lo que sigue, ver [ROADMAP.md](./ROADMAP.md).
