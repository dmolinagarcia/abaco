# Handoff: Andamiaje visual de ÁBACO (Ciclo 0 — Esqueleto)

## Overview
Andamiaje visual base para **ÁBACO**, una app personal de gestión de carteras de inversión (Next.js App Router + Supabase + Tailwind, un solo usuario). Este paquete cubre el **Ciclo 0 (Esqueleto)** de `PROJECT.md`: layout general con navegación y cabecera, pantalla de login y un Dashboard vacío (placeholder) al que se llega tras iniciar sesión. **No incluye ninguna entidad ni pantalla de datos** — esas se añaden en iteraciones posteriores encajándolas en este layout.

Criterio de cierre del ciclo (de `PROJECT.md`): *"puedo iniciar sesión y ver una app vacía pero navegable"*.

## About the Design Files
Los archivos de este bundle son **referencias de diseño creadas en HTML** — un prototipo que muestra el aspecto y el comportamiento previstos, **no código de producción para copiar tal cual**. El HTML se escribió con un runtime de componentes propio (`.dc.html` + `support.js`) solo para prototipar; **no lo lleves al codebase**.

La tarea es **recrear este diseño en el entorno real del proyecto**: Next.js (App Router) + React + Tailwind CSS, usando los patrones y librerías establecidos del repo `dmolinagarcia/abaco`. El repo está vacío de UI (solo `PROJECT.md`), así que puedes elegir la estructura de componentes idiomática de Next.js/Tailwind. La autenticación es vía **Supabase Auth** (email/password).

## Fidelity
**High-fidelity (hifi).** Colores, tipografía, espaciado e interacciones son finales. Recrea la UI de forma fiel al pixel usando Tailwind (con tokens equivalentes) y componentes React reutilizables.

## Design Tokens

### Colores
| Token | Hex | Uso |
|-------|-----|-----|
| `ink` | `#0A0A0A` | Negro real — texto principal, panel de marca, sidebar |
| `paper` | `#F5F2EC` | Fondo de la app (papel cálido) |
| `surface` | `#FCFAF6` | Superficie de inputs, botones secundarios, tarjetas |
| `surface-alt` | `#F0ECE3` | Hover de botones/superficies secundarias |
| `surface-empty` | `#EEE9DF` | Fondo del icono en el empty state |
| `accent` | `#1F6B4A` | Verde profundo — acento (botón primario, logo, activo) |
| `accent-hover` | `#185639` | Hover del acento |
| `muted` | `#6B6F68` | Texto secundario |
| `muted-2` | `#9A9E96` | Eyebrow/labels tenues sobre papel |
| `on-dark` | `#F5F2EC` | Texto sobre superficies negras |

Opacidades derivadas usadas:
- Bordes sobre papel: `rgba(10,10,10,0.09–0.20)` (hairlines, dashed, inputs).
- Texto sobre negro: `rgba(245,242,236, 0.34 / 0.40 / 0.42 / 0.50 / 0.62 / 0.78)`.
- Superficies sobre negro: `rgba(245,242,236,0.08)` (chips/hover), borde `rgba(245,242,236,0.10)`.
- Highlight radial del panel de marca: `radial-gradient(120% 90% at 15% 0%, rgba(31,107,74,0.35), transparent 55%)` con `opacity:0.5`.
- Nav activo: fondo `rgba(31,107,74,0.22)`.

### Tipografía
- **Display / títulos y wordmark:** `Space Grotesk` (Google Fonts), pesos 400/500/600/700.
- **UI / cuerpo:** `Hanken Grotesk`, pesos 400/500/600/700.
- **Etiquetas / mono (eyebrows, labels, iniciales):** `IBM Plex Mono`, pesos 400/500/600.

Escala de texto (px): eyebrow/label mono 9–11 · texto secundario 11–14 · cuerpo 14.5–15 · título header 24 (weight 500) · h2 login 28 · h2 empty state 23 · h1 hero login 40 (weight 500, line-height 1.14) · wordmark 19–22.
Letter-spacing: labels/eyebrows en mono `0.12–0.22em` en mayúsculas; wordmark `0.04em`.

### Espaciado, radios, sombras
- Radios: inputs/botones `9px` · logo badge `7–8px` · tarjetas `12px` · empty state `14px` · icono empty `14px` · avatar `50%` · chips mono `5–6px`.
- Sidebar width: `248px`. Avatares: `30–34px` (logo), `32px` (usuario).
- Sin sombras pesadas; el diseño se apoya en hairlines y dashed borders. Cabecera con `backdrop-filter: blur(8px)`.

## Screens / Views

### 1. Login
- **Purpose:** El usuario único inicia sesión (Supabase email/password).
- **Layout:** `min-height:100vh`, grid de 2 columnas `1.05fr / 0.95fr`.
  - **Panel izquierdo (marca):** fondo `#0A0A0A`, `padding:56px 60px`, flex column `space-between`. Overlay radial verde (arriba). Contenido:
    - Arriba: badge logo (34px, radio 8px, fondo `#1F6B4A`, icono ábaco SVG) + wordmark "ÁBACO" (Space Grotesk 22px/600, tracking 0.04em, color `#F5F2EC`).
    - Centro (`max-width:400px`): eyebrow mono "GESTIÓN DE CARTERAS" (11px, tracking 0.22em, color `#1F6B4A`); h1 "Tus inversiones, contadas con precisión." (Space Grotesk 40px/500, line-height 1.14, `#F5F2EC`); párrafo 15px, `rgba(245,242,236,0.62)`.
    - Abajo: fila mono 11px `rgba(245,242,236,0.4)`: "PERSONAL · PRIVADO · v0 · ESQUELETO".
  - **Panel derecho (formulario):** fondo `#F5F2EC`, centrado, columna `max-width:360px`, animación `fadeUp .5s`.
    - h2 "Iniciar sesión" (Space Grotesk 28px/500); subtítulo "Accede a tu panel de carteras." (14px, `#6B6F68`).
    - Form (gap 18px): campo **Correo** (`type=email`, placeholder `tu@correo.com`) y **Contraseña** (`type=password`, placeholder `••••••••`). Cada campo: label mono 11px mayúsculas `#6B6F68` + input (`padding:12px 14px`, borde `rgba(10,10,10,0.16)`, radio 9px, fondo `#FCFAF6`, texto 14.5px).
    - Enlace derecha "¿Olvidaste tu contraseña?" (13px, `#6B6F68`).
    - Botón primario **Entrar** (full width, `padding:13px`, fondo `#1F6B4A`→hover `#185639`, texto `#F5F2EC` 15px/600, radio 9px).
    - Pie con hairline superior: "App de un solo usuario · autenticación vía **Supabase**" (13px, `#6B6F68`, "Supabase" en `#0A0A0A`/500).

### 2. App Shell (layout general)
Grid 2 columnas `248px / 1fr`, `min-height:100vh`, fondo `#F5F2EC`, animación `fade .35s`. Es el **layout persistente** que envuelve todas las pantallas futuras.
- **Sidebar** (`aside`, sticky, `height:100vh`, fondo `#0A0A0A`, color `#F5F2EC`, `padding:22px 16px`, flex column):
  - Header: badge logo (30px) + wordmark "ÁBACO" (Space Grotesk 19px/600).
  - Label de sección mono "MENÚ" (10px, tracking 0.16em, `rgba(245,242,236,0.34)`).
  - **Nav** (flex column, gap 3px). Cada item = botón full-width, `padding:10px 11px`, radio 9px, icono 18px + label 14px/500. Estados:
    - **Activo:** fondo `rgba(31,107,74,0.22)`, texto `#F5F2EC`.
    - **Normal (clicable):** fondo transparente, texto `rgba(245,242,236,0.78)`, hover a fondo sutil.
    - **"Próximamente" (soon):** texto `rgba(245,242,236,0.42)`, cursor default, con chip mono "PRONTO" a la derecha (9px, fondo `rgba(245,242,236,0.08)`, `rgba(245,242,236,0.4)`, radio 5px).
  - Items (de `PROJECT.md`): `Dashboard` (activo, único operativo en Ciclo 0), `Carteras` (soon), `Cuentas` (soon), `Activos` (soon). Los "soon" corresponden al backlog `portfolios / accounts / assets` — **no crear sus pantallas aún**, solo son andamiaje de navegación.
  - Pie (`margin-top:auto`, hairline superior): chip de usuario — avatar circular 32px (fondo `#1F6B4A`, inicial "D" en mono) + nombre "Diego M." (13px/600) + "Cuenta personal" (11px, `rgba(245,242,236,0.5)`) + botón logout (icono, hover con fondo sutil).
- **Main** (flex column):
  - **Header** (sticky, `padding:20px 36px`, fondo `rgba(245,242,236,0.8)` + blur 8px, hairline inferior): izquierda eyebrow mono "ÁBACO" (10.5px, `#9A9E96`) + h1 título de página "Dashboard" (Space Grotesk 24px/500). Derecha: pseudo-buscador (chip `min-width:220px`, borde, radio 9px, fondo `#FCFAF6`, icono lupa + "Buscar…" en `#6B6F68`) + botón campana (38×38px, borde, radio 9px, fondo `#FCFAF6`, hover `#F0ECE3`).
  - **Content:** slot para cada pantalla (`padding:36px`, contenedor `max-width:1080px` centrado).

### 3. Dashboard (vacío / placeholder)
Contenido dentro del Main del shell. **Sin datos reales**:
- **Fila de 3 ghost cards** (grid 3 col, gap 18px): cada una borde **dashed** `rgba(10,10,10,0.18)`, radio 12px, `padding:20px`, fondo `rgba(252,250,246,0.5)`, con barras skeleton grises (`rgba(10,10,10,0.07–0.09)`). Marcan dónde irán los indicadores.
- **Empty state principal** (borde dashed `rgba(10,10,10,0.2)`, radio 14px, `padding:64px 40px`, centrado): icono en cuadro 58px (fondo `#EEE9DF`, radio 14px, glyph SVG verde `#1F6B4A`); h2 "Tu panel está listo para llenarse" (Space Grotesk 23px/500); párrafo "Aún no hay contenido. Los indicadores y resúmenes de tus carteras aparecerán aquí en próximas iteraciones." (14.5px, `#6B6F68`, `max-width:420px`); dos botones: primario "Empezar a configurar" (fondo `#1F6B4A`) + secundario "Ver documentación" (borde, fondo `#FCFAF6`, hover `#F0ECE3`).

## Interactions & Behavior
- **Login → Dashboard:** `submit` del form (prototipo: `preventDefault` + cambio de pantalla). En real: `supabase.auth.signInWithPassword({ email, password })`; en éxito, redirigir a `/dashboard`.
- **Logout:** botón en el pie de la sidebar → `supabase.auth.signOut()` + volver a `/login`.
- **Navegación:** al pulsar un item operativo se marca activo y se enruta. Items "soon" no navegan (deshabilitados).
- **Animaciones:** login `fadeUp` (opacity 0→1, translateY 10→0, `.5s ease`); entrada del shell `fade .35s ease`.
- **Hovers:** botón primario `#1F6B4A`→`#185639`; botones/superficies secundarias `#FCFAF6`→`#F0ECE3`; nav normal → fondo sutil `rgba(245,242,236,0.08)`.
- **Estados obligatorios (según `PROJECT.md`, para pantallas de datos futuras):** cargando, vacío, error, éxito. Este ciclo solo materializa el estado **vacío**.

## State Management / Auth
- **Sesión:** gestionar con Supabase Auth (SSR helpers de `@supabase/ssr` en App Router). Middleware protege rutas del shell; `/login` es pública.
- **Rutas sugeridas:** `/login` (pantalla 1), grupo autenticado con el layout del shell (`app/(app)/layout.tsx`) que renderiza Sidebar + Header, y `/dashboard` (pantalla 3) como landing tras login.
- **Estado local:** valores de los inputs del formulario de login; item de nav activo (derivable del pathname).
- No hay data fetching en este ciclo.

## Componentes reutilizables sugeridos
- `Sidebar` (con `NavItem` que soporta `active` y `soon`), `Header` (con eyebrow + título de página + acciones), `AppShell` (layout que compone Sidebar + Header + slot de contenido).
- `Button` (variantes `primary` / `secondary`), `TextField` (label mono + input), `EmptyState`, `GhostCard` (skeleton).
- Iconos: line icons 24×24, `stroke:currentColor`, `stroke-width:1.6–1.8`. Sugerido usar **lucide-react** (equivalentes: layout-dashboard, briefcase, credit-card, bar-chart, log-out, bell, search) en lugar de recrear los SVG a mano.

## Assets
- **Logo ÁBACO:** SVG inline hecho a medida (varillas verticales con "cuentas" de ábaco). Incluido en el HTML; recrear como componente `<Logo />` o exportar a SVG.
- Sin imágenes rasterizadas. Fuentes desde Google Fonts (Space Grotesk, Hanken Grotesk, IBM Plex Mono) — cargar con `next/font/google`.

## Files
- `Abaco.dc.html` — prototipo completo (login + shell + dashboard vacío). Es la referencia visual; **no copiar el runtime `.dc.html`/`support.js`**, solo reproducir el diseño.
