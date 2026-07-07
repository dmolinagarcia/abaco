# PROJECT.md — Fuente de verdad del proyecto ABACO

> Este documento es el **contrato compartido** entre Claude Design y Claude Code.
> Antes de empezar cualquier iteración, se lo pasas como contexto a la herramienta
> que vayas a usar. Al terminar una iteración, lo actualizas. Si algo no está aquí,
> no existe: no dejes que Design ni Code inventen campos o pantallas fuera de este doc.

---

## 1. Resumen de la app

- **Qué es:** Una aplicación de gestión personal de carteras de inversión
- **Usuario principal:** Un solo usuario, yo, el autor de la aplicación
- **Stack:** Next.js (App Router) + Supabase (Postgres + Auth) + Tailwind

---

## 2. Convenciones (NO cambiar una vez fijadas)

Estas reglas evitan la deriva entre Design y Code. El error más caro del flujo
incremental es que una pantalla llame `title` a algo que en la base de datos acabó
siendo `name`. Fija los nombres aquí y respétalos en las dos herramientas.

- **Nombres de campos:** en `snake_case`, en inglés, singular por columna.
- **Nombres de tablas:** en `snake_case`, en plural (`products`, `orders`).
- **IDs:** todas las tablas tienen `id` (uuid) + `created_at` + `updated_at`.
- **Estados de UI obligatorios en cada pantalla de datos:** cargando, vacío, error, éxito.

---

## 3. Modelo de datos

> Cada entidad suele generar 3 pantallas (lista, detalle, formulario crear/editar)
> y 1 tabla en Supabase. Define aquí los campos EXACTOS.

### portfolios

**portfolios** — Una cartera gestionada
| campo        | tipo      | notas                        |
|--------------|-----------|------------------------------|
| id           | uuid      | PK, autogenerado             |
| name         | text      | obligatorio                  |
| color        | numeric   | obligatorio, ≥ 0             |
| category     | text      | opcional                     |
| created_at   | timestamp | autogenerado                 |


## 4. Relaciones entre entidades

> Solo si las hay. Ejemplo: "order pertenece a un user (user_id)".
> Esto le dice a Code qué foreign keys crear y a Design qué datos enlazar.

## 5. Registro de funcionalidades (features)

> El orden importa: cada feature debe depender solo de lo YA construido.
> Regla general CRUD: entidad principal → entidades relacionadas → transversales
> (búsqueda, filtros, export...) al final.

### Ciclo 0 — Esqueleto
- [x] Layout base en Design (navegación + cabecera, sin features dentro)
- [x] Proyecto Next.js arrancado + Supabase conectado
- [x] Autenticación (login / logout) funcionando
- **Criterio de cierre:** puedo iniciar sesión y ver una app vacía pero navegable.

### Hechas
- **Ciclo 0 — Esqueleto**: layout base (Sidebar + Header), proyecto Next.js (App Router) + Supabase conectado, autenticación con Supabase Auth (login/logout) y protección de rutas. Verificado: login → dashboard vacío → logout.

### En curso
- **Feature actual:** _(nombre)_ — _(qué hace en una línea)_
  - Entidad(es) que toca: _(...)_
  - Estado Design: ⬜  ·  Estado Code: ⬜

### Backlog (orden previsto)
1. portfolios
2. accounts
3. assets

## 6. Bitácora de decisiones

> Apunta aquí decisiones que no son obvias, para no re-discutirlas ni contradecirlas
> en una iteración futura. Ejemplo: "el borrado es lógico (soft delete), no físico".