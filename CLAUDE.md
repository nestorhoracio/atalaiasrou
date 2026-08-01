# Atalaias Rou — Contexto para Claude Code

Sitio web de Atalaias Rou / IMTF Uruguay y Brasil. Portal que agrupa la transmisión en vivo de radios evangélicas/gospel, más subsitios institucionales de IMTF Uruguay (español) e IMTF Brasil (portugués). A diferencia de otros proyectos del mismo desarrollador, **este sitio NO incluye asistente de IA**.

## Stack

- **Astro 7** (SSG puro, `output` estático — sin adapter, no hay backend ni funciones serverless)
- Sin framework de UI (no React/Vue/Svelte), sin Tailwind — CSS vanilla con custom properties para theming (`src/styles/global.css`)
- **Content Collections** (Content Layer API de Astro, `loader: glob(...)`) para noticias — primer proyecto de este desarrollador que las usa. El archivo de configuración vive en `src/content.config.ts` (⚠️ no en `src/content/config.ts` — Astro 7 movió esa ubicación; ponerlo en el lugar viejo tira `LegacyContentConfigError`)
- **Netlify**: hosting estático puro, sin funciones
- Tipografía **Montserrat** (títulos) + **Lora** (cuerpo), autohospedadas con `@fontsource-variable/montserrat` y `@fontsource/lora`, importadas en `Layout.astro` — no usar el CDN de Google Fonts (decisión de `DESIGN-SYSTEM.md`: RGPD + latencia). Base `18px` en `html`, cuerpo con `line-height: 1.75`. Montserrat nunca por debajo de 24px (`--fs-lg`/`--fs-xl`/`--fs-2xl`/`--fs-3xl` en `global.css`) — si un elemento de heading necesita verse más chico, no lo dejes en Montserrat sin revisar legibilidad

## Estructura

- `src/pages/index.astro` — home: Hero + grid de 20 radios + reproductor + teasers institucional/UY/BR
- `src/pages/institucional.astro` — contenido institucional general (`QuienesSomos.astro`: presentación/historia/misión/visión/valores/áreas de trabajo/organigrama/fundamento bíblico/lema) + pastores mundiales/nacionales/regionales
- `src/pages/uruguay/` y `src/pages/brasil/` — subsitios (index + noticias/index + noticias/[slug]), en español y portugués respectivamente
- `src/content.config.ts` + `src/content/noticias-uruguay/`, `src/content/noticias-brasil/` — una noticia = un archivo `.md`
- `src/data/` — datos hardcodeados tipados: `radios.ts`, `pastores.ts`, `horarios-uruguay.ts`, `horarios-brasil.ts`, `contenido-uruguay.ts`, `contenido-brasil.ts`, `contenido-institucional.ts` (contenido general de "Proyecto Atalaias Rou", distinto del contenido específico de IMTF Uruguay/Brasil)
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
- `[data-theme]` / custom properties en `global.css` — no hardcodear colores nuevos fuera de esas variables. Nombres actuales (adoptados de `DESIGN-SYSTEM.md`, el documento de referencia que se armó con Claude.ai): `--bg`/`--surface`/`--surface-2`/`--border`/`--text`/`--text-soft`/`--text-faint` (neutros), `--accent`/`--accent-fill`/`--accent-dim` (dorado — `--accent-fill` es el dorado de marca, **nunca usarlo como color de texto en tema claro**, da 2.09:1 de contraste; para texto/enlaces/labels usar siempre `--accent`), `--cta`/`--cta-text` (botón principal — en oscuro el CTA pasa a dorado, es intencional), `--secondary`/`--secondary-bright`/`--secondary-dim` (el azul de marca — DESIGN-SYSTEM.md no lo contempla porque no conocía la paleta ya aprobada por el cliente; se mantiene como acento secundario junto al dorado, no reemplazarlo por accent/accent-fill)
- Placeholders de logo, fotos de pastores regionales y fotos/videos de actividades — deben verse claramente como placeholders (siluetas, texto "pendiente"), nunca fotos de stock genéricas — pedido explícito del cliente de usar solo material fotográfico propio. Pastor mundial y pastor nacional ya tienen foto real (2026-08-01)
- `pastores.ts`: los "pastores nacionales" son del proyecto en general, **no** están divididos por país (Manoel Nunes da Luz y Shirley Rivero da Luz son los pastores nacionales de Proyecto Atalaias Rou, sin `pais` asociado) — confirmado explícitamente por Néstor el 2026-08-01. No reintroducir una división Uruguay/Brasil en ese nivel sin confirmarlo de nuevo
- `.grid-auto` (clase global de `global.css`, usada por radios/pastores/noticias): usa `auto-fit` + un máximo **fijo** (`280px`, no `1fr`) en vez de `auto-fill` + `1fr`. Es a propósito — con `auto-fill` las columnas vacías siguen ocupando espacio y `justify-content: center` no tiene nada para centrar; con `auto-fit` + `1fr` la única tarjeta de una fila incompleta se estira para ocupar todo el ancho libre. Solo la combinación `auto-fit` + máximo fijo centra de verdad una fila incompleta (ej. 1 pastor, 1 noticia) sin deformar la tarjeta, y no cambia el resultado visual de una fila ya completa (bug real detectado y corregido en esta sesión — verificarlo con las coordenadas reales del elemento, no a simple vista, si se vuelve a tocar)
- `astro.config.mjs` (`site: '...netlify.app'`) y `netlify.toml` — afectan build/deploy en producción; actualizar `site` en cuanto haya dominio propio
- **Repo**: [github.com/nestorhoracio/atalaiasrou](https://github.com/nestorhoracio/atalaiasrou) (público). **Sitio**: `atalaiasrou.netlify.app`, conectado vía la GitHub App de esta cuenta (`installation_id: 126678153`, el mismo que usan los demás proyectos). Si algún día hay que recrear el sitio de Netlify por API en vez de por la UI, crearlo con ese `installation_id` desde el principio — crear el sitio con un objeto `repo` simple (sin `installation_id`) hace que Netlify intente clonar por SSH con una deploy key propia y el build falla con "Host key verification failed" (pasó en la sesión inicial, se corrigió con un `PATCH /sites/{id}` agregando el `installation_id`)
- Al buscar el stream crudo de una radio nueva: algunas plataformas (ej. `listen2myradio.com`, detectado 2026-08-01 con las emisoras Sion y SC) sirven una página HTML con reproductor embebido en el dominio público, no el audio directo — ni siquiera `curl` con un User-Agent de navegador lo destapa. Hace falta inspeccionar la pestaña de red de un navegador real reproduciendo esa página para encontrar la URL `.mp3`/`.aac` real
- Datos bancarios/de donación del cliente (cuentas BROU, Prex, PayPal, etc., del informe institucional) — **nunca publicarlos en el sitio sin confirmación explícita** del cliente sobre qué quiere visible y en qué formato. El PDF/Excel originales con esos datos no viven en este repo (se sacaron a una carpeta local fuera de Git, ver ROADMAP.md)

### Convenciones de SEO (de `SEO.md`, documento de referencia armado con Claude.ai)

Reglas a seguir de ahora en más al crear o tocar páginas, aunque la implementación concreta de varias de ellas todavía esté pendiente (ver ROADMAP.md):

- Canonical siempre derivado de `Astro.site` (`new URL(Astro.url.pathname, Astro.site).href`) — nunca hardcodear el dominio en un componente
- `title`: 50–60 caracteres, patrón `{Tema específico} | Atalaias Rou` (marca al final salvo en la home), único por página
- `description`: 140–160 caracteres, específica de esa página (no reutilizar la de la home), sin relleno de palabras clave
- `<html lang="es-UY">` en todo el sitio salvo `/brasil/`, que lleva `<html lang="pt-BR">`; si aparece un bloque en portugués dentro de una página en español (ej. el lema), envolverlo con `lang="pt-BR"` en el elemento
- Un solo `<h1>` por página, jerarquía de encabezados sin saltos (`h1`→`h2`→`h3`), nunca elegir un nivel de heading por su tamaño visual
- Los nombres de las 20 radios son activos de búsqueda: siempre como texto real en el HTML (no solo dentro del logo), con `alt` descriptivo tipo `"Logo de Radio Atalaias Gold"` (no `alt="logo"`)
- URLs en minúsculas, con guiones, sin acentos — ya aplicado a los nombres de archivo de imágenes (`public/images/radios/radio-atalaias-el-shaddai.webp`, etc.)
- Ningún placeholder llega a producción como si fuera contenido real (ver bullet de arriba sobre fotos/logo)

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
