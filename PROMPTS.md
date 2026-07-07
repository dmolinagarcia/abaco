# Guion de prompts — Design ⇄ Code (desarrollo incremental)

> Cómo usar este guion: cada vez que empieces un paso, copia el prompt correspondiente,
> rellena los `[corchetes]` y **adjunta o pega el contenido de `PROJECT.md`** como contexto.
> Los prompts están escritos para que cada herramienta añada SOLO lo de la iteración
> actual y no reescriba lo anterior — esa es la clave de que el incremental no derive.

---

## CICLO 0 — El esqueleto (una sola vez)

### 0.A — Design: layout base

```
Estoy construyendo una web app con Next.js + Tailwind. Adjunto PROJECT.md con el
contexto. Quiero SOLO el andamiaje visual, todavía sin ninguna funcionalidad de negocio:

- Un layout general con navegación y cabecera.
- Una pantalla de login.
- Una pantalla "Dashboard" vacía (placeholder) a la que se llega tras iniciar sesión.

Usa componentes reutilizables y limpios. No inventes entidades ni pantallas de datos:
esas las añadiré en iteraciones posteriores encajándolas en este layout.
```

```
Generame el paquete para continuar en claude code
```

### 0.B — Code: proyecto + auth

```
Adjunto PROJECT.md y el proyecto que generó Claude Design. Quiero montar el andamiaje
del backend, sin features de negocio todavía:

1. Arranca el proyecto Next.js (App Router) integrando el frontend de Design.
2. Conecta Supabase (cliente + variables de entorno; indícame qué debo poner en .env).
3. Implementa autenticación con Supabase Auth: login, logout y protección de rutas,
   conectando la pantalla de login existente.

No crees tablas de negocio ni CRUD aún. Criterio de éxito: puedo iniciar sesión,
llegar a la home vacía y cerrar sesión.
```

---

## EL BUCLE — se repite por cada funcionalidad

### Paso A — Definir el slice (lo escribes tú en PROJECT.md)

No es un prompt: es una línea que añades a la sección "En curso" de `PROJECT.md`.

```
Feature: [nombre]. Hace: [una frase]. Toca la(s) entidad(es): [...].
```

Luego confirma que los campos de esa entidad están ya definidos en la sección 3 de
`PROJECT.md`. Si no lo están, defínelos ahí ANTES de seguir.

---

### Paso B — Design (solo esta feature)

```
Adjunto PROJECT.md. Ya tengo una app con un layout base y otras features ya diseñadas
(ver sección 5 de PROJECT.md). Quiero AÑADIR únicamente la funcionalidad "[nombre]".

Reglas importantes:
- Respeta el layout, los estilos y los componentes que ya existen. Reutilízalos.
  NO regeneres la app entera ni cambies el diseño de lo ya hecho.
- Añade solo las pantallas de esta feature: [lista / detalle / formulario crear-editar],
  encajadas en el layout actual.
- Usa datos mock que respeten EXACTAMENTE los campos de la entidad "[entidad]" tal como
  están en la sección 3 de PROJECT.md. No añadas campos nuevos.
- Incluye los estados: cargando, vacío, error, éxito.
- Para cada botón/acción, indícame qué operación dispara (crear, editar, borrar, listar).
```

Itera aquí hasta poder navegar el flujo de esta feature con los mocks.

---

### Paso C — Code (solo esta feature)

```
Adjunto PROJECT.md y las pantallas nuevas que generó Design para la feature "[nombre]".
La app ya funciona con auth y con las features previas (sección 5 de PROJECT.md);
NO toques nada de eso.

Implementa solo el backend de esta feature:
1. Crea en Supabase la tabla "[tabla]" con los campos de la sección 3 de PROJECT.md
   (incluye id uuid, created_at, updated_at) y las relaciones de la sección 4 si aplican.
2. Implementa las operaciones CRUD necesarias para esta feature.
3. Conecta las pantallas nuevas a esas operaciones, reemplazando los datos mock por
   datos reales de Supabase. Mantén los estados cargando/vacío/error/éxito.

Criterio de éxito: puedo crear, ver, editar y borrar "[entidad]" de punta a punta.
No implementes otras entidades ni features futuras.
```

Si una feature toca varias entidades, pídele una entidad completa antes de la siguiente.

---

### Paso D — Consolidar (checklist, no es un prompt)

Antes de cerrar la iteración, verifica:

- [ ] La feature nueva va de punta a punta (crear/ver/editar/borrar reales).
- [ ] Las features anteriores **siguen funcionando** (pruébalas rápido).
- [ ] Design y Code coinciden en los nombres de campos (sin desajustes).
- [ ] Actualizas `PROJECT.md`: mueves la feature de "En curso" a "Hechas" y marcas
      su casilla en la sección 5.
- [ ] Haces commit con un mensaje claro (`feat: gestión de [entidad]`).

Vuelves al Paso A con la siguiente feature del backlog.

---

## Cómo evitar la deriva (resumen)

1. **Un solo documento manda:** `PROJECT.md` se pasa como contexto en CADA prompt,
   a Design y a Code. Ambas herramientas parten siempre del mismo estado.
2. **Cada herramienta solo añade lo de la iteración actual.** Los prompts lo repiten
   a propósito ("no regeneres lo anterior") porque las dos tienden a reescribir de más.
3. **Los nombres nacen una vez.** Un campo se nombra en la sección 3 de PROJECT.md y
   ese mismo nombre viaja intacto hasta la columna de Supabase. Nunca lo renombres a
   mitad de camino.