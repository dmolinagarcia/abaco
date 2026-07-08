# 01 — Diseño responsive

El esqueleto inicial (`00-esqueleto.md`) se construyó a medida de escritorio.
Esta iteración adapta el login y el app shell a pantallas móviles, sin tocar
la apariencia en `lg` (≥1024px) ni añadir funcionalidad de negocio.

## Qué incluye

- **Login** (`app/login/page.tsx`): en móvil se oculta el panel de marca
  izquierdo (hero grande) y se muestra un logo compacto sobre el formulario,
  que pasa a ocupar todo el ancho.
- **App shell**: el Sidebar deja de ser una columna fija y se convierte en un
  drawer que entra desde la izquierda sobre un overlay, oculto por defecto en
  móvil. El Header incorpora un botón de menú (hamburguesa) para abrirlo.
- **Dashboard**: las ghost cards pasan de 3 columnas a 1 en pantallas
  pequeñas, y el empty state (padding y botones) se adapta y apila.

Breakpoint usado: `lg` (1024px) de Tailwind. Por debajo, layout de móvil;
en `lg` y superior, el diseño de escritorio original sin cambios.

## Estructura de ficheros relevante

```
components/
  app-shell.tsx    # NUEVO — client component que mantiene el estado abierto/cerrado
                    # del drawer y compone Sidebar + Header + <main>
  sidebar.tsx       # ahora recibe `onClose` (cierra el drawer al navegar o al
                    # pulsar la X, visible solo en móvil); ancho fijo w-[248px]
  header.tsx        # ahora recibe `onMenuClick`; botón de menú visible solo
                    # en móvil (lg:hidden); buscador de texto colapsa a icono
                    # por debajo de `sm`
  empty-state.tsx   # padding y botones responsive

app/(app)/layout.tsx        # ahora delega la composición en <AppShell>
app/(app)/dashboard/page.tsx # grid de ghost cards responsive
app/login/page.tsx           # panel de marca oculto en móvil + logo compacto
```

## Decisiones no obvias

- **Drawer con `position: fixed` + `translate-x`, no un segundo layout**: se
  optó por un único árbol de componentes (Sidebar/Header) que cambia de
  comportamiento por breakpoint, en vez de renderizar variantes móvil/desktop
  separadas. Menos duplicación, mismo componente sirve ambos casos.
- **Estado del drawer vive en `AppShell` (client component), no en
  `(app)/layout.tsx`**: el layout es un Server Component (necesita `await`
  para leer la sesión de Supabase) y no puede tener `useState`. `AppShell`
  encapsula toda la interactividad y recibe `userLabel` ya resuelto por el
  layout.
- **El panel de marca del login se oculta (`hidden lg:flex`) en vez de
  reducirse**: con el hero de 40px y el párrafo, encogerlo manteniéndolo
  visible en móvil quedaba apretado y restaba foco al formulario, que es la
  acción principal. Se sustituye por un logo compacto sobre el formulario.

## Cómo probarlo

1. `npm run dev` y abrir `http://localhost:3000` en un dispositivo móvil o
   con las devtools del navegador en modo responsive (ancho < 1024px).
2. En `/login`: se ve el logo compacto + formulario a ancho completo, sin el
   panel negro de marca.
3. Autenticado, en `/dashboard`: el Sidebar no aparece hasta pulsar el botón
   de menú en el Header; al abrirse, cubre la pantalla con overlay; se cierra
   pulsando la X, el overlay, o navegando a un item del menú.
4. Ampliando a ≥1024px, el layout vuelve al comportamiento de escritorio
   (Sidebar fijo visible, sin botón de menú).

> Nota de depuración: si se borra `.next` mientras `next dev` sigue en
> ejecución, la caché de Turbopack puede corromperse (errores `ENOENT` /
> `Compaction failed`). Hay que parar el proceso antes de borrar `.next`, o
> simplemente reiniciar `npm run dev` si ocurre.
