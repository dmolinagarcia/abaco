# Documentación de ÁBACO

Índice general de la documentación técnica del proyecto. Cada funcionalidad
añadida tiene su propio fichero en esta carpeta; este índice se actualiza
cada vez que se cierra una iteración del bucle descrito en `PROMPTS.md`.

> La fuente de verdad del *qué* (modelo de datos, convenciones, backlog) es
> `PROJECT.md` en la raíz del repo. Aquí documentamos el *cómo*: decisiones
> de implementación, estructura de ficheros y cómo probar cada pieza.

## Funcionalidades

| # | Documento | Resumen |
|---|-----------|---------|
| 0 | [00-esqueleto.md](./00-esqueleto.md) | Proyecto Next.js (App Router) + Tailwind, cliente Supabase y autenticación (login/logout/protección de rutas). |
| 1 | [01-diseno-responsive.md](./01-diseno-responsive.md) | Adaptación del layout (login y app shell) a pantallas móviles. |

## Convención para nuevos ficheros

- Un fichero por feature, numerado en orden de creación: `NN-nombre-feature.md`.
- Nombre en `kebab-case`, en español, descriptivo de la funcionalidad (no del ciclo).
- Al añadir uno nuevo, añade también su fila en la tabla de arriba.
- Contenido mínimo esperado en cada fichero: qué hace, qué ficheros toca,
  decisiones no obvias, y cómo probarlo/verificarlo.
