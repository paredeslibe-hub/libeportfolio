# SEO por ruta y pre-render a HTML estático

**Fecha:** 29/10/2026
**Estado:** diseño aprobado por secciones; pendiente revisión de la spec

## Problema

libeparedes.com es una SPA: el servidor devuelve el mismo `index.html` vacío para cualquier URL y React arma la página en el navegador. Eso trae tres problemas:

1. Todas las rutas comparten `<title>`, descripción y `canonical`, y el `canonical` apunta a la home. Google recibe la señal de que cada case study es un duplicado de la home.
2. Los bots de ChatGPT, Claude y Perplexity no ejecutan JavaScript: ven una página vacía. El plan de visibilidad de la nota *Estrategia AI Product Designer* depende de que esos bots lean el contenido.
3. Cualquier URL inexistente responde 200 con la home, porque `vercel.json` reescribe todo a `/`. Google la trata como página válida (*soft 404*).

## Objetivo

Que cada ruta se sirva como un HTML propio, con su título, descripción, `canonical` y Open Graph, y con el contenido real ya renderizado. Que las URLs inexistentes respondan 404.

## Decisiones tomadas

| Decisión | Elegido | Alternativas descartadas |
|---|---|---|
| Enfoque de pre-render | Render con React en el build (`react-dom/server` + API estática de React Router) | Navegador headless (Chromium frágil en el build de Vercel); solo `<head>` por ruta (los bots de IA siguen sin ver contenido) |
| Idioma de títulos y descripciones | Español, igual que el contenido pre-renderizado | Inglés; mixto |
| `/negocios` e `/imobiliario` | `noindex`: siguen funcionando para quien tenga el link | Indexarlas; dejarlas como hoy |
| Título de la home | Se mantiene el actual hasta cambiar el hero al posicionamiento "AI Product Designer · Design Engineer" | Cambiarlo ya |
| Montaje en el cliente | `createRoot` (React reemplaza el HTML pre-renderizado) | `hydrateRoot` (errores de *hydration mismatch* con visitantes en EN/PT) |

## Arquitectura

### Build

`pnpm build` pasa a ser:

```
vite build
  && vite build --ssr src/entry-server.tsx --outDir dist-ssr
  && node scripts/prerender.mjs
```

`pnpm dev` no cambia: el servidor de desarrollo de Vite sigue sirviendo la SPA sin pre-render.

1. `vite build`: igual que hoy, genera `dist/`.
2. `vite build --ssr`: compila la app para Node en `dist-ssr/` (temporal; el script lo borra al terminar).
3. `scripts/prerender.mjs`: para cada entrada de la configuración SEO, renderiza la ruta, inyecta el `<head>` y escribe el HTML en `dist/`. Después genera `dist/sitemap.xml`.

### Archivos de salida

| Ruta | Archivo |
|---|---|
| `/` | `dist/index.html` |
| `/negocios` | `dist/negocios.html` |
| `/proyectos/neobank` | `dist/proyectos/neobank.html` |
| `*` (404) | `dist/404.html` (renderizado con una URL que no coincide con ninguna ruta) |

El template es `dist/index.html` tal como lo deja `vite build`; el script lo lee antes de sobrescribirlo. Los scripts y estilos del bundle usan rutas absolutas (`/assets/...`), así que funcionan desde cualquier carpeta.

### Archivos nuevos

- **`src/app/seo.ts`**: única fuente de títulos, descripciones y flags.
  ```ts
  export const SITE_URL = 'https://libeparedes.com';
  export const DEFAULT_IMAGE = '/assets/libe-perfil.png';

  export interface RouteSeo {
    path: string;        // idéntico al path de routes.tsx; '*' para la 404
    title: string;
    description: string;
    image?: string;      // ruta en public/; por defecto DEFAULT_IMAGE
    noindex?: boolean;
  }

  export const seoRoutes: RouteSeo[];
  export function getRouteSeo(pathname: string): RouteSeo; // coincidencia exacta, si no la entrada '*'
  export function applyRouteSeo(seo: RouteSeo): void;      // actualiza el <head> en el navegador
  ```
- **`src/entry-server.tsx`**: exporta `render(url): Promise<string>` (usa `createStaticHandler`, `createStaticRouter`, `StaticRouterProvider` y `renderToString`, envuelto en `LanguageProvider`) y reexporta `routes`, `seoRoutes` y `SITE_URL` para el script.
- **`scripts/prerender.mjs`**: el script descrito arriba.

### Cambios en archivos existentes

- **`src/app/routes.tsx`**: exporta `routes` (el array) en vez de `router`. `createBrowserRouter` usa `window` al crearse y rompería en Node.
- **`src/app/App.tsx`**: crea el router con `createBrowserRouter(routes)`.
- **`src/app/context/LanguageContext.tsx`**: si `typeof window === 'undefined'`, el idioma inicial es `'es'`.
- **`src/app/components/Layout.tsx`**: en cada cambio de `pathname`, llama a `applyRouteSeo(getRouteSeo(pathname))`, que actualiza `<title>`, descripción y `robots`, y crea, actualiza o quita el `canonical` con las mismas reglas que el pre-render (sin `canonical` en la 404).
- **`src/app/components/RealEstateLP.tsx`**: se quita el `useEffect` que fija `document.title`; el título sale de `seo.ts`.
- **`src/app/components/NewHero.tsx`**: el contenedor del título ("Product Designer / UX UI") pasa de `<div>` a `<h1>` en los layouts de escritorio y móvil. `theme.css` da `font-weight: medium` a los `h1`, así que se agrega `font-normal` para no cambiar el aspecto. Los dos `<h1>` conviven en el DOM, pero solo uno es visible por breakpoint.
- **`public/sitemap.xml`**: se borra; lo genera el build.
- **`vercel.json`**: ver la sección Vercel.
- **`package.json`**: nuevo script `build`.
- **`.gitignore` y `.vercelignore`**: agregar `dist-ssr`.

## `<head>` por ruta

El script reemplaza los valores de estas etiquetas del template, que ya existen en `index.html`:

| Etiqueta | Valor |
|---|---|
| `<title>` | `title` |
| `meta[name=description]` | `description` |
| `meta[name=robots]` | `noindex, follow` si `noindex`; si no, `index, follow` |
| `link[rel=canonical]` | `SITE_URL + path` (la home: `https://libeparedes.com/`) |
| `og:url` | igual que `canonical` |
| `og:title`, `twitter:title` | `title` |
| `og:description`, `twitter:description` | `description` |
| `og:image`, `twitter:image` | `SITE_URL + (image ?? DEFAULT_IMAGE)` |
| `og:type` | `profile` en la home; `website` en el resto |

Las demás etiquetas (`keywords`, `og:locale`, favicon, JSON-LD de Person) quedan iguales en todas las rutas. La 404 no lleva `canonical`: el script quita la etiqueta.

## Textos

| Ruta | noindex | Título | Descripción |
|---|---|---|---|
| `/` | | Libe Paredes — Product Designer UX/UI \| Fintech & AI | Product Designer con más de 6 años en fintech e IA. Proyectos para Brasil, USA, México y Chile. Disponible para roles remotos y consultoría. |
| `/proyectos/neobank` | | Neobank App: case study de UX fintech \| Libe Paredes | App móvil para un neobank en Brasil, con límites de crédito innovadores y una experiencia simplificada. Research, flujos y UI. |
| `/proyectos/ai-app` | | App Fintech con IA: case study \| Libe Paredes | App financiera con IA que ayuda a trabajadores de aplicativos en Estados Unidos a organizar sus finanzas con datos reales. |
| `/proyectos/design-system` | | Design System con IA en 7 días \| Libe Paredes | De un repositorio vacío a un design system en código: tokens, 19 componentes accesibles (WCAG AA) y documentación, en 7 días con Claude Code. |
| `/proyectos/portal-creditos` | | Portal de Créditos: case study fintech \| Libe Paredes | Plataforma que analiza datos de trabajadores para ofrecer productos financieros personalizados, integrada con instituciones de crédito. |
| `/proyectos/pets-app` | | Wallet Pets App: case study fintech \| Libe Paredes | App para pedir comida para mascotas, sumar puntos y usar una billetera virtual para tu mascota. Case study de UX/UI fintech. |
| `/proyectos/consulting` | | Consultoría UX para startups \| Libe Paredes | Claridad antes de escalar: una mirada externa, estratégica y accionable para mejorar la experiencia de tu producto sin perder velocidad. |
| `/negocios` | sí | Diseño web y de marca para negocios \| Libe Paredes | Landing pages, webs profesionales, estrategia de marca y redes sociales para negocios que quieren crecer online. |
| `/imobiliario` | sí | Marketing Visual & Design \| Libe Paredes | Social media, tratamento de fotos, reels, branding e websites para o mercado imobiliário. |
| `/carousel-preview` | sí | Carousel preview \| Libe Paredes | Vista interna de carruseles. |
| `*` (404) | sí | Página no encontrada \| Libe Paredes | Esta página no existe en libeparedes.com. |

`/imobiliario` lleva la descripción en portugués porque la página está en portugués y la descripción es lo que se ve al compartir el link por WhatsApp.

## Sitemap

El script genera `dist/sitemap.xml` con las entradas sin `noindex` y sin `'*'`, ordenadas como en `seo.ts`. Sin `lastmod`: las fechas escritas a mano dejan de ser confiables y Google ignora las que no lo son. `public/robots.txt` no cambia.

## Vercel

`vercel.json`:
- Se quita `rewrites` (`"/(.*)" → "/"`).
- Se agrega `"cleanUrls": true`: `/proyectos/neobank` se sirve desde `proyectos/neobank.html`.
- Se agrega `"trailingSlash": false`: `/proyectos/neobank/` redirige a `/proyectos/neobank`.
- Los encabezados de seguridad no cambian.

Vercel sirve `404.html` con código 404 para cualquier URL sin archivo.

## Verificaciones del script (frenan el build)

1. Toda ruta de `routes.tsx` tiene entrada en `seoRoutes` y viceversa. Sin esto, una ruta nueva sin entrada respondería 404 en producción.
2. Cada etiqueta de la tabla `<head>` existe exactamente una vez en el template.
3. El render de cada ruta no lanza error y no devuelve una redirección.
4. Cada `/assets/...` referenciado en un HTML generado existe en `dist/`. Detecta si el build de servidor y el de cliente generan nombres de archivo distintos.
5. El HTML de cada ruta indexable contiene un `<h1>`.

## Verificación

**Local, antes de publicar:**
1. `pnpm build` termina sin errores; `dist/` tiene un HTML por ruta, `404.html` y `sitemap.xml`.
2. `npx serve dist` (replica `cleanUrls` y `404.html` de Vercel). Con `curl`, sin JavaScript:
   - cada ruta responde 200, con su `<title>` y texto real de la página en el HTML;
   - `/no-existe` responde 404 con el contenido de la página 404;
   - las rutas `noindex` traen `noindex, follow`;
   - `/proyectos/neobank/` redirige a `/proyectos/neobank`.
3. En el navegador: navegación home → case study → atrás actualiza el título de la pestaña; cambiar a EN y PT funciona; sin errores en consola; las animaciones de entrada se ven como antes; el hero se ve igual que antes.

**En producción, después del deploy:** los mismos `curl` contra `https://libeparedes.com`. Después, Libe pide indexación en Search Console.

**Rollback:** `vercel rollback` al deploy anterior; los cambios quedan en commits revertibles.

## Riesgos

- **Dependencias que no corren en Node.** Ningún componente de `src/app` toca `window` al importarse, pero alguna dependencia CJS (MUI, Emotion) puede fallar al importarse desde el build SSR. Mitigación: agregarla a `ssr.noExternal` en `vite.config.ts`.
- **Avisos de `useLayoutEffect` en el servidor** (Radix, Motion). Son solo ruido en el log del build.
- **Rutas nuevas en el futuro.** Deben agregarse a `seo.ts`; la verificación 1 lo exige.

## Fuera de alcance

- Rutas `/en` y `/pt` con `hreflang`.
- Imagen para compartir por case study (va con la optimización de imágenes).
- Cambio del hero y del título de la home al posicionamiento nuevo.
- Lazy loading de rutas. Cuando se haga, el render tiene que pasar de `renderToString` a `renderToPipeableStream` con `onAllReady`, porque `renderToString` no espera a `React.lazy`.
- JSON-LD por case study.
