# Atalaias Rou — Sitio Web
## Stack: Astro + Netlify

> Estado actual, changelog y próximos pasos: ver [ROADMAP.md](./ROADMAP.md)

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
- Content Collections de Astro (Markdown) para las noticias de cada subsitio
- Hosting y despliegue continuo en **Netlify**

---

## Estructura del proyecto

```
atalaias-rou/
├── CLAUDE.md / README.md / ROADMAP.md
├── astro.config.mjs / netlify.toml
├── public/
│   └── images/{logos,radios,noticias-uruguay,noticias-brasil,pastores}/
└── src/
    ├── content.config.ts
    ├── content/
    │   ├── noticias-uruguay/*.md
    │   └── noticias-brasil/*.md
    ├── data/              # radios, pastores, horarios y textos institucionales
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
git clone <url-del-repo>
cd atalaias-rou
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

---

## Deploy en Netlify

1. Subir el repo a GitHub.
2. En Netlify → "Add new site" → "Import from Git".
3. Build command: `npm run build` — Publish directory: `dist` (ya configurado en `netlify.toml`).
4. Cada push a la rama principal dispara un build y deploy automático.
5. Cuando haya un dominio propio, configurarlo en Netlify y actualizar `site` en `astro.config.mjs`.

---

## Datos de contacto

*Pendiente de confirmar con el Pastor Manoel Da Luz* — hoy `Footer.astro` tiene un WhatsApp y un email placeholder (`598000000000` / `contacto@atalaias-rou.org`). Reemplazar por los datos reales del proyecto.

---

*Proyecto: Atalaias Rou — Informática Arroba (Néstor Horacio) · Julio 2026*

Para el detalle de cambios realizados y lo que sigue, ver [ROADMAP.md](./ROADMAP.md).
