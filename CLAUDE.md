# Atalaias Rou — Contexto para Claude Code

Sitio web de Atalaias Rou / IMTF Uruguay y Brasil. Portal que agrupa la transmisión en vivo de radios evangélicas/gospel, más subsitios institucionales de IMTF Uruguay (español) e IMTF Brasil (portugués). A diferencia de otros proyectos del mismo desarrollador, **este sitio NO incluye asistente de IA**.

## Stack

- **Astro 7** (SSG puro, `output` estático — sin adapter, no hay backend ni funciones serverless)
- Sin framework de UI (no React/Vue/Svelte), sin Tailwind — CSS vanilla con custom properties para theming (`src/styles/global.css`)
- **Content Collections** (Content Layer API de Astro, `loader: glob(...)`) para noticias — primer proyecto de este desarrollador que las usa. El archivo de configuración vive en `src/content.config.ts` (⚠️ no en `src/content/config.ts` — Astro 7 movió esa ubicación; ponerlo en el lugar viejo tira `LegacyContentConfigError`)
- **Netlify**: hosting estático puro, sin funciones
- Google Fonts (`Fraunces` + `Mulish`) cargadas por `<link>` en `Layout.astro`

## Estructura

- `src/pages/index.astro` — home: Hero + grid de 20 radios + reproductor + teasers institucional/UY/BR
- `src/pages/institucional.astro` — pastores mundiales/nacionales/regionales
- `src/pages/uruguay/` y `src/pages/brasil/` — subsitios (index + noticias/index + noticias/[slug]), en español y portugués respectivamente
- `src/content.config.ts` + `src/content/noticias-uruguay/`, `src/content/noticias-brasil/` — una noticia = un archivo `.md`
- `src/data/` — datos hardcodeados tipados: `radios.ts`, `pastores.ts`, `horarios-uruguay.ts`, `horarios-brasil.ts`, `contenido-uruguay.ts`, `contenido-brasil.ts`
- `src/components/layout/` — `Header`/`Footer` (prop `lang: 'es' | 'pt'`, un solo componente para ambos idiomas, no duplicado), `ThemeToggle`, `SubsiteNav`
- `src/components/radios/` — `RadioGrid`, `RadioCard`, `RadioPlayer` (reproductor sticky)
- `src/components/subsite/` — `DeclaracionFe`, `Galeria`, `Videos`, `Horarios` (genéricos, reciben `lang` + datos por props)
- `src/components/seo/SEO.astro` — extraído aparte de `Layout.astro` porque hay 3 "sitios" (principal/UY/BR) con metadata y JSON-LD distintos
- `AGENTS.md` — guía genérica de Astro generada por el scaffold (no específica del proyecto); la fuente de verdad para trabajar acá es este archivo

## Convenciones y cosas que NO tocar sin avisar

- Namespace de eventos/funciones globales: `atalaias:playing`, `atalaias:paused`, `window.__atalaiasPlayRadio` — no cambiar el prefijo sin actualizar todos los componentes que lo usan (`RadioPlayer.astro`, `RadioGrid.astro`)
- `RadioPlayer.astro`: al pausar se hace `audio.src = ''` para no seguir bufferizando el stream en vivo — esto dispara un evento `error` espurio del `<audio>`, controlado con la bandera `pausaIntencional`. No borrar esa bandera sin entender por qué está (bug real detectado y corregido en la sesión inicial: sin ella, pausar mostraba "Emisora temporalmente no disponible" en vez de "Pausado")
- `src/data/radios.ts` — `estaDisponible()`/`esHttps()` son el único gate de mixed content; no cargar una URL nueva sin verificar que empieza con `https://`. Algunos proveedores de streaming bloquean con HTTP 403 cualquier `User-Agent` de navegador (hotlink protection) — probarlo con un navegador real, no solo con `curl` sin `-A`, antes de darla por válida (se descartó SomaFM como fixture de prueba por este motivo, ver comentario en el archivo)
- Fechas de noticias: siempre formatear con `Intl.DateTimeFormat(..., { timeZone: 'UTC' })`. Sin fijar `timeZone: 'UTC'`, una fecha `2026-07-01` del frontmatter se muestra como "30 de junio" en husos horarios negativos (bug real detectado y corregido en la sesión inicial)
- Tema por defecto = **claro/cálido** (crema + dorado + azul) — decisión de branding explícita del cliente ("cálido y cercano"), invierte el default oscuro que usan los demás proyectos de este desarrollador. No cambiar el default sin confirmar
- `[data-theme]` / custom properties en `global.css` — no hardcodear colores nuevos fuera de esas variables
- Placeholders de logo, fotos de pastores y fotos/videos de actividades — deben verse claramente como placeholders (siluetas, texto "pendiente"), nunca fotos de stock genéricas — pedido explícito del cliente de usar solo material fotográfico propio
- `astro.config.mjs` (`site: '...netlify.app'`) y `netlify.toml` — afectan build/deploy en producción; actualizar `site` en cuanto haya dominio propio

## Comandos

```bash
npm run dev       # http://localhost:4321
npm run build     # genera /dist
npm run preview   # sirve /dist localmente
npx astro check   # chequeo de tipos
```

Deploy: push a la rama principal → Netlify hace build (`npm run build`) y publica `dist/` automáticamente. Sin GitHub Actions.

---
Ver **ROADMAP.md** para estado actual y próximos pasos antes de empezar cualquier tarea nueva.
