# Roadmap — Atalaias Rou

> Mantener actualizado al final de cada sesión de trabajo.

## Hecho

- **2026-07-26** — Scaffold inicial del proyecto (Astro 7, `@astrojs/sitemap`), estructura completa de carpetas
- **2026-07-26** — Sistema de diseño: `global.css` con paleta placeholder dorado+azul+crema, tema claro por defecto con toggle a oscuro (persistencia en `localStorage`, script anti-FOUC), tipografía Fraunces + Mulish
- **2026-07-26** — `Layout.astro` + `SEO.astro` (canonical, OG/Twitter, JSON-LD `ReligiousOrganization`), `Header`/`Footer` bilingües (prop `lang`), `ThemeToggle`, página 404
- **2026-07-26** — Portal de radios: `radios.ts` (1 fixture de prueba + 19 placeholders), `RadioGrid`/`RadioCard`/`RadioPlayer` (reproductor sticky, cache-busting, manejo de errores en runtime, deshabilitado visual de emisoras sin HTTPS)
- **2026-07-26** — Home completa (Hero + grid de radios + teasers institucionales)
- **2026-07-26** — Sección institucional: `pastores.ts` (placeholders por nivel) + `/institucional/`
- **2026-07-26** — Content Collections de noticias (Content Layer API, `src/content.config.ts`) con colecciones separadas `noticias-uruguay`/`noticias-brasil`, 1 noticia de ejemplo por idioma, listado + detalle
- **2026-07-26** — Subsitios `/uruguay/` (ES) y `/brasil/` (PT) completos: declaración de fe/historia, fotos, videos (embeds YouTube), horarios, últimas noticias
- **2026-07-26** — Verificación visual con Playwright (capturas de las 9 páginas, toggle de tema, play/pause del reproductor) — se detectaron y corrigieron 2 bugs reales: (1) pausar el audio mostraba "Emisora temporalmente no disponible" por un evento `error` espurio al vaciar `audio.src`; (2) las fechas de noticias se mostraban un día antes por no fijar `timeZone: 'UTC'` en `Intl.DateTimeFormat`
- **2026-07-26** — `netlify.toml`, `robots.txt`, sitemap verificado en build (`dist/sitemap-index.xml`)
- **2026-07-26** — Proyecto renombrado a `atalaiasrou` (sin guion) en package.json/site/robots/placeholders; repo público creado en GitHub (`nestorhoracio/atalaiasrou`) y pusheado; sitio creado en Netlify (`atalaiasrou.netlify.app`) conectado al repo vía la GitHub App ya instalada en la cuenta (⚠️ crear el sitio por API con un objeto `repo` simple generó una conexión SSH que falló con "Host key verification failed" — hubo que hacer un `PATCH` al sitio agregando `installation_id: 126678153`, el mismo que usan los demás proyectos de esta cuenta, para que use la GitHub App en vez de una deploy key SSH). Deploy inicial verificado en `ready` y las rutas principales responden 200 en producción.
- **2026-07-26** — Confirmado el circuito de deploy continuo de punta a punta: un segundo push a `main` (con solo cambios de documentación) disparó automáticamente un nuevo build en Netlify sin intervención manual, y terminó en `ready`. El webhook GitHub → Netlify quedó funcionando correctamente.

## En curso

- (nada registrado actualmente — completar en la próxima sesión de trabajo)

## Próximo / Pendiente

**Pendiente del lado del cliente (Pastor Manoel Da Luz) — bloqueante para dar la v1 por cerrada:**

- **Alta** — Las 20 URLs de streaming reales (HTTPS, .mp3/.aac). Conseguir el stream *crudo* de cada emisora suele requerir inspeccionar la pestaña de red del navegador en el reproductor embebido de cada sitio — no siempre está publicado como enlace directo. Verificar además que no bloqueen por `User-Agent` de navegador (hotlink protection, ver nota en CLAUDE.md) antes de darlas por válidas.
- **Alta** — Logos (principal, IMTF Uruguay, IMTF Brasil) — hoy con placeholder de iniciales/paleta en el header.
- **Alta** — Fotos reales de los pastores mundiales/nacionales/regionales (y sus nombres) — hoy con placeholders de silueta y "Nombre pendiente". Pedido explícito: material fotográfico propio, no imágenes genéricas.
- **Media** — Texto real de declaración de fe / historia de IMTF Uruguay y de IMTF Brasil — hoy con copy de ejemplo marcado como tal en `contenido-uruguay.ts`/`contenido-brasil.ts`.
- **Media** — Fotos y videos reales de actividades de cada subsitio (`fotos`/`videoIdsYoutube` en los mismos archivos de datos).
- **Media** — Horarios reales de actividades y eventos (`horarios-uruguay.ts`/`horarios-brasil.ts`).

**Pendiente técnico, no bloqueante:**

- **Baja / Fase 2** — Formulario de contacto/inscripción real por subsitio (patrón Web3Forms, como en Santa Isabel FM). Falta definir a qué email/WhatsApp debe llegar cada inscripción. Por ahora el "contacto" es un `mailto:`/WhatsApp genérico en el footer.
- **Baja** — Dominio propio (hoy el sitio usa el subdominio `atalaiasrou.netlify.app` en `astro.config.mjs`/`netlify.toml`/sitemap/JSON-LD).
- **Baja** — Evaluar reproductor persistente entre navegaciones (View Transitions + `transition:persist`) si en el uso real resulta molesto que la radio se corte al cambiar de página — decisión explícita de v1: no implementarlo todavía.
- **Baja** — Confirmar número de WhatsApp y email reales del proyecto (`Footer.astro` tiene placeholders `598000000000` / `contacto@atalaiasrou.org`).

## Changelog resumido

- Scaffold Astro 7 + sitemap + estructura de carpetas
- Sistema de diseño (paleta, tipografía, dark/light) + shell (Layout/SEO/Header/Footer/ThemeToggle/404)
- Portal de radios (datos, grid, tarjetas, reproductor sticky) + fix de bug de pausa
- Home, institucional (pastores), Content Collections de noticias (ES/PT)
- Subsitios Uruguay y Brasil completos + fix de bug de zona horaria en fechas
- Verificación visual end-to-end con Playwright, netlify.toml, robots.txt, sitemap
- Rename a `atalaiasrou`, repo en GitHub, sitio en Netlify conectado vía GitHub App (fix del gotcha de `installation_id`), deploy continuo confirmado
