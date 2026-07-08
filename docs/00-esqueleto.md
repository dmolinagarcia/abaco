# 00 — Esqueleto: Next.js + Supabase + Auth

Corresponde al **Ciclo 0** de `PROJECT.md`. Monta el andamiaje del backend sin
ninguna funcionalidad de negocio: proyecto Next.js arrancado, cliente de
Supabase conectado, y autenticación con login/logout y protección de rutas.

## Qué incluye

- Proyecto Next.js 16 (App Router) + TypeScript + Tailwind CSS v4, recreando
  a nivel de código el prototipo visual generado en `Step 0.a/` (login, app
  shell con sidebar/header, dashboard vacío).
- Cliente de Supabase (browser y server) usando `@supabase/ssr`.
- Autenticación por email/contraseña con Supabase Auth: login, logout y
  protección de rutas vía `proxy.ts`.

## Estructura de ficheros relevante

```
app/
  layout.tsx              # fuentes (Space Grotesk / Hanken Grotesk / IBM Plex Mono) y metadata
  globals.css              # tokens de diseño (colores, animaciones) vía @theme de Tailwind v4
  page.tsx                 # "/" redirige a /dashboard (el proxy se encarga de mandar a /login si no hay sesión)
  login/page.tsx            # pantalla de login, client component
  (app)/layout.tsx          # obtiene el usuario (server) y redirige a /login si no existe; renderiza AppShell
  (app)/dashboard/page.tsx  # placeholder vacío (ghost cards + empty state)

components/
  app-shell.tsx    # composición Sidebar + Header + contenido
  sidebar.tsx      # navegación (Dashboard operativo, resto "Pronto"), logout
  header.tsx       # título de página derivado de la ruta, buscador, notificaciones
  logout-button.tsx
  logo.tsx, button.tsx, text-field.tsx, empty-state.tsx, ghost-card.tsx

lib/
  supabase/client.ts   # createBrowserClient (uso en Client Components)
  supabase/server.ts   # createServerClient con cookies de next/headers (uso en Server Components)
  supabase/proxy.ts    # updateSession(): refresca la sesión y decide redirects
  nav.tsx              # definición de los items de navegación (id, label, href, icono, soon)

proxy.ts               # Proxy de Next.js (raíz del repo)
.env.local.example      # plantilla de variables de entorno
```

## Variables de entorno

Definidas en `.env.local` (no versionado; plantilla en `.env.local.example`):

- `NEXT_PUBLIC_SUPABASE_URL` — Project URL del proyecto Supabase.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — anon public key del proyecto.

Ambas se obtienen en **Supabase Dashboard → Project Settings → API**.

## Decisiones no obvias

- **`proxy.ts`, no `middleware.ts`**: Next.js 16 renombró la convención de
  fichero de `middleware` a `proxy` (misma función, exportada como `proxy`
  en vez de `middleware`). El scaffold inicial generó `middleware.ts`; se
  renombró a `proxy.ts` para no arrancar con una convención ya deprecada.
- **Doble comprobación de sesión**: el proxy protege todas las rutas salvo
  `/login`, pero `(app)/layout.tsx` también comprueba el usuario server-side
  y redirige si no existe. Es defensivo (no debería dispararse en uso normal)
  y además es de donde sale el nombre de usuario para el Sidebar.
- **Sin tabla de perfiles**: al ser una app de un solo usuario, el nombre
  mostrado en el Sidebar se deriva del email de Supabase Auth (parte local,
  capitalizada) o de `user_metadata.full_name` si existe — no hay tabla de
  negocio para esto todavía.
- **Sin pantalla de registro**: el usuario único se crea manualmente desde
  Supabase Dashboard → Authentication → Users → Add user (marcando "Auto
  Confirm User"), no hay flujo de sign-up en la app.

## Cómo probarlo

1. Copiar `.env.local.example` a `.env.local` y rellenar con las credenciales
   del proyecto Supabase.
2. Crear el usuario único en Supabase Dashboard (Authentication → Users).
3. `npm run dev` y abrir `http://localhost:3000`.
4. Sin sesión, cualquier ruta redirige a `/login`. Al iniciar sesión, redirige
   a `/dashboard` (vacío pero navegable). El botón de logout en el pie del
   Sidebar cierra la sesión y vuelve a `/login`.

**Criterio de cierre cumplido:** iniciar sesión, llegar a la home vacía y
cerrar sesión — verificado manualmente.
