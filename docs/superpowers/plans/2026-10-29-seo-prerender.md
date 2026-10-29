# SEO por ruta y pre-render: plan de implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Servir cada ruta de libeparedes.com como un HTML propio, con `<head>` y contenido pre-renderizados, y responder 404 real a las URLs inexistentes.

**Architecture:** Después de `vite build`, un build SSR de `src/entry-server.tsx` y el script `scripts/prerender.mjs` renderizan cada ruta con la API estática de React Router y `renderToString`, inyectan el `<head>` desde `src/app/seo.ts` y escriben `dist/<ruta>.html`, `dist/404.html` y `dist/sitemap.xml`. El cliente sigue montando con `createRoot`. Vercel sirve los archivos con `cleanUrls` y sin la redirección general.

**Tech Stack:** Vite 6, React 18.3, React Router 7.17 (`createStaticHandler`, `createStaticRouter`, `StaticRouterProvider`), `react-dom/server`, Node 24 (`node:test` con type stripping), Vercel.

**Spec:** `docs/superpowers/specs/2026-10-29-seo-prerender-design.md`

## Global Constraints

- Sin dependencias npm nuevas.
- Tests con `node:test`; los que importan `.ts` necesitan Node ≥ 23.6 (local: 24.17). Vercel no corre los tests.
- Los textos de títulos y descripciones se copian literal de la tabla "Textos" de la spec.
- Componentes React: funciones con `export` nombrado; Tailwind con clases estándar; seguir el estilo del archivo que se toca.
- Commits en inglés, terminados en `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`. `git add` con rutas explícitas: la raíz del repo tiene archivos personales sin versionar (`Curriculo_Libe_Paredes_Producto.pdf`, `inmobiliaria/`, `content/`, `temp_page.json`, `.vercelignore`).
- Trabajo en la rama `feat/seo-prerender`. Deploy a producción solo con aprobación explícita de Libe.

## Prueba previa (29/10, descartable, ya revertida)

Un build SSR de toda la app con un entry provisional renderizó las 11 rutas en Node. Todas las URLs `/assets/...` coincidieron con el build de cliente, el contenido real quedó en el HTML y no hizo falta `ssr.noExternal`. El único bloqueo fue `localStorage` en `LanguageContext`. La home no tiene `<h1>`; el resto de las rutas sí.

## Mapa de archivos

| Archivo | Acción | Responsabilidad |
|---|---|---|
| `scripts/prerender-lib.mjs` | Crear | Funciones puras: inyectar `<head>` y contenido, nombres de salida, sitemap, cobertura de rutas, referencias a assets |
| `scripts/prerender-lib.test.mjs` | Crear | Tests de lo anterior |
| `src/app/seo.ts` | Crear | Textos por ruta y helpers `getRouteSeo`, `canonicalUrl`, `robotsContent`, `applyRouteSeo` |
| `scripts/seo.test.mjs` | Crear | Tests de `seo.ts` |
| `src/entry-server.tsx` | Crear | `render(url)` y reexports para el script |
| `scripts/prerender.mjs` | Crear | Orquesta el pre-render y frena el build si algo falla |
| `src/app/routes.tsx` | Modificar | Exportar `routes` en vez de `router` |
| `src/app/App.tsx` | Modificar | Crear el router del navegador |
| `src/app/context/LanguageContext.tsx` | Modificar | Idioma `'es'` sin `window` |
| `src/app/components/Layout.tsx` | Modificar | Actualizar el `<head>` al navegar |
| `src/app/components/RealEstateLP.tsx` | Modificar | Quitar el `document.title` propio |
| `src/app/components/NewHero.tsx` | Modificar | Título del hero como `<h1>` |
| `package.json` | Modificar | Scripts `build` y `test` |
| `vercel.json` | Modificar | `cleanUrls`, `trailingSlash`, sin `rewrites` |
| `public/sitemap.xml` | Borrar | Lo genera el build |
| `.gitignore` | Modificar | Ignorar `dist-ssr` |
| `CLAUDE.md` | Modificar | Documentar el build nuevo y la regla de rutas |

---

### Task 0: Rama de trabajo

- [ ] **Step 1: Crear la rama**

```bash
cd "C:/Users/Libe/Documents/Proyectos/Libe.portfolio"
git switch -c feat/seo-prerender
```

Expected: `Switched to a new branch 'feat/seo-prerender'`.

---

### Task 1: Funciones puras del pre-render

**Files:**
- Create: `scripts/prerender-lib.mjs`
- Create: `scripts/prerender-lib.test.mjs`
- Modify: `package.json` (script `test`)

**Interfaces:**
- Produces:
  - `injectHead(template: string, values: { title: string, description: string, robots: string, canonical: string | null, ogType: string, image: string }): string`
  - `injectRoot(html: string, appHtml: string): string`
  - `outputFileFor(routePath: string): string`
  - `buildSitemap(urls: string[]): string`
  - `collectPaths(routes: { path?: string, children?: object[] }[]): string[]`
  - `diffPaths(routePaths: string[], seoPaths: string[]): { missingSeo: string[], orphanSeo: string[] }`
  - `assetRefs(html: string): string[]`

- [ ] **Step 1: Agregar el script `test` en `package.json`**

En `"scripts"`, después de `"preview": "vite preview"`:

```json
    "preview": "vite preview",
    "test": "node --test \"scripts/*.test.mjs\""
```

- [ ] **Step 2: Escribir los tests**

`scripts/prerender-lib.test.mjs`:

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  injectHead,
  injectRoot,
  outputFileFor,
  buildSitemap,
  collectPaths,
  diffPaths,
  assetRefs,
} from './prerender-lib.mjs';

// Misma forma que las etiquetas de index.html
const TEMPLATE = `<!doctype html>
<html lang="es">
  <head>
    <title>Viejo título</title>
    <meta name="description" content="Vieja descripción" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://libeparedes.com/" />
    <meta property="og:type" content="profile" />
    <meta property="og:url" content="https://libeparedes.com/" />
    <meta property="og:title" content="Viejo" />
    <meta property="og:description" content="Vieja" />
    <meta property="og:image" content="https://libeparedes.com/assets/libe-perfil.png" />
    <meta property="og:locale" content="es_AR" />
    <meta name="twitter:title" content="Viejo" />
    <meta name="twitter:description" content="Vieja" />
    <meta name="twitter:image" content="https://libeparedes.com/assets/libe-perfil.png" />
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`;

const VALUES = {
  title: 'Neobank App: case study | Libe Paredes',
  description: 'App "móvil" para un neobank & más',
  robots: 'index, follow',
  canonical: 'https://libeparedes.com/proyectos/neobank',
  ogType: 'website',
  image: 'https://libeparedes.com/assets/neobank.png',
};

test('injectHead reemplaza título, descripción y etiquetas sociales', () => {
  const html = injectHead(TEMPLATE, VALUES);
  assert.match(html, /<title>Neobank App: case study \| Libe Paredes<\/title>/);
  assert.match(html, /<meta name="description" content="App &quot;móvil&quot; para un neobank &amp; más" \/>/);
  assert.match(html, /<meta property="og:title" content="Neobank App: case study \| Libe Paredes" \/>/);
  assert.match(html, /<meta property="og:description" content="App &quot;móvil&quot;/);
  assert.match(html, /<meta name="twitter:title" content="Neobank App: case study \| Libe Paredes" \/>/);
  assert.match(html, /<meta name="twitter:description" content="App &quot;móvil&quot;/);
  assert.match(html, /<meta property="og:type" content="website" \/>/);
  assert.match(html, /<meta property="og:image" content="https:\/\/libeparedes\.com\/assets\/neobank\.png" \/>/);
  assert.match(html, /<meta name="twitter:image" content="https:\/\/libeparedes\.com\/assets\/neobank\.png" \/>/);
  assert.match(html, /<meta property="og:locale" content="es_AR" \/>/);
  assert.doesNotMatch(html, /Viejo|Vieja/);
});

test('injectHead fija canonical y og:url', () => {
  const html = injectHead(TEMPLATE, VALUES);
  assert.match(html, /<link rel="canonical" href="https:\/\/libeparedes\.com\/proyectos\/neobank" \/>/);
  assert.match(html, /<meta property="og:url" content="https:\/\/libeparedes\.com\/proyectos\/neobank" \/>/);
});

test('injectHead quita canonical y og:url cuando canonical es null', () => {
  const html = injectHead(TEMPLATE, { ...VALUES, canonical: null });
  assert.doesNotMatch(html, /rel="canonical"/);
  assert.doesNotMatch(html, /og:url/);
});

test('injectHead fija robots', () => {
  const html = injectHead(TEMPLATE, { ...VALUES, robots: 'noindex, follow' });
  assert.match(html, /<meta name="robots" content="noindex, follow" \/>/);
});

test('injectHead falla si falta una etiqueta en el template', () => {
  const broken = TEMPLATE.replace(/\s*<meta name="robots"[^>]*>/, '');
  assert.throws(() => injectHead(broken, VALUES), /robots/);
});

test('injectHead falla si una etiqueta aparece dos veces', () => {
  const doubled = TEMPLATE.replace('</head>', '<title>Otro</title></head>');
  assert.throws(() => injectHead(doubled, VALUES), /<title>/);
});

test('injectRoot mete el HTML de la app en #root sin interpretar $', () => {
  const html = injectRoot(TEMPLATE, '<main>Precio $& $1</main>');
  assert.ok(html.includes('<div id="root"><main>Precio $& $1</main></div>'));
});

test('outputFileFor convierte rutas en archivos', () => {
  assert.equal(outputFileFor('/'), 'index.html');
  assert.equal(outputFileFor('*'), '404.html');
  assert.equal(outputFileFor('/negocios'), 'negocios.html');
  assert.equal(outputFileFor('/proyectos/neobank'), 'proyectos/neobank.html');
});

test('buildSitemap lista cada URL sin lastmod', () => {
  const xml = buildSitemap(['https://libeparedes.com/', 'https://libeparedes.com/proyectos/neobank']);
  assert.ok(xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>'));
  assert.match(xml, /<urlset xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">/);
  assert.equal((xml.match(/<url>/g) ?? []).length, 2);
  assert.match(xml, /<loc>https:\/\/libeparedes\.com\/proyectos\/neobank<\/loc>/);
  assert.doesNotMatch(xml, /lastmod/);
});

test('collectPaths recorre rutas anidadas', () => {
  const routes = [{ children: [{ path: '/' }, { path: '/a', children: [{ path: '/a/b' }] }, { path: '*' }] }];
  assert.deepEqual(collectPaths(routes), ['/', '/a', '/a/b', '*']);
});

test('diffPaths informa rutas sin SEO y SEO sin ruta', () => {
  assert.deepEqual(diffPaths(['/', '/a', '*'], ['/', '*', '/b']), { missingSeo: ['/a'], orphanSeo: ['/b'] });
  assert.deepEqual(diffPaths(['/'], ['/']), { missingSeo: [], orphanSeo: [] });
});

test('assetRefs extrae rutas únicas de /assets, también dentro de &quot;', () => {
  const html =
    '<img src="/assets/a-1.png">' +
    '<div style="background:url(&quot;/assets/b-2.webp&quot;)"></div>' +
    '<img src="/assets/a-1.png">' +
    '<meta content="https://libeparedes.com/assets/libe-perfil.png">' +
    '<script src="/assets/index-Ab1.js"></script>';
  assert.deepEqual(assetRefs(html), ['/assets/a-1.png', '/assets/b-2.webp', '/assets/libe-perfil.png', '/assets/index-Ab1.js']);
});
```

- [ ] **Step 3: Correr los tests y verificar que fallan**

Run: `pnpm test`
Expected: FAIL con `Cannot find module ... prerender-lib.mjs`.

- [ ] **Step 4: Implementar**

`scripts/prerender-lib.mjs`:

```js
// Funciones puras del pre-render: no tocan disco ni importan la app.

const escapeText = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escapeAttr = (s) => escapeText(s).replace(/"/g, '&quot;');

// Reemplaza una etiqueta que debe existir exactamente una vez en el template.
function replaceOnce(html, pattern, replacement, label) {
  const count = (html.match(new RegExp(pattern.source, 'g')) ?? []).length;
  if (count !== 1) {
    throw new Error(`index.html: se esperaba exactamente un ${label} y hay ${count}`);
  }
  return html.replace(pattern, () => replacement);
}

const metaPattern = (attr, name) => new RegExp(`<meta ${attr}="${name}" content="[^"]*" \\/>`);

export function injectHead(template, values) {
  let html = replaceOnce(template, /<title>[^<]*<\/title>/, `<title>${escapeText(values.title)}</title>`, '<title>');

  const metas = [
    ['name', 'description', values.description],
    ['name', 'robots', values.robots],
    ['property', 'og:type', values.ogType],
    ['property', 'og:title', values.title],
    ['property', 'og:description', values.description],
    ['property', 'og:image', values.image],
    ['name', 'twitter:title', values.title],
    ['name', 'twitter:description', values.description],
    ['name', 'twitter:image', values.image],
  ];
  for (const [attr, name, content] of metas) {
    html = replaceOnce(html, metaPattern(attr, name), `<meta ${attr}="${name}" content="${escapeAttr(content)}" />`, name);
  }

  const ogUrl = /\s*<meta property="og:url" content="[^"]*" \/>/;
  const canonical = /\s*<link rel="canonical" href="[^"]*" \/>/;
  if (values.canonical === null) {
    html = replaceOnce(html, ogUrl, '', 'og:url');
    return replaceOnce(html, canonical, '', 'canonical');
  }
  const href = escapeAttr(values.canonical);
  html = replaceOnce(html, ogUrl, `\n    <meta property="og:url" content="${href}" />`, 'og:url');
  return replaceOnce(html, canonical, `\n    <link rel="canonical" href="${href}" />`, 'canonical');
}

export function injectRoot(html, appHtml) {
  return replaceOnce(html, /<div id="root"><\/div>/, `<div id="root">${appHtml}</div>`, '<div id="root">');
}

export function outputFileFor(routePath) {
  if (routePath === '*') return '404.html';
  if (routePath === '/') return 'index.html';
  return `${routePath.slice(1)}.html`;
}

export function buildSitemap(urls) {
  const items = urls.map((url) => `  <url>\n    <loc>${url}</loc>\n  </url>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</urlset>\n`;
}

export function collectPaths(routes) {
  return routes.flatMap((route) => [
    ...(route.path ? [route.path] : []),
    ...collectPaths(route.children ?? []),
  ]);
}

export function diffPaths(routePaths, seoPaths) {
  return {
    missingSeo: routePaths.filter((p) => !seoPaths.includes(p)),
    orphanSeo: seoPaths.filter((p) => !routePaths.includes(p)),
  };
}

const ASSET_REF = /\/assets\/[^"'\s()<>&?#]+?\.(?:png|jpe?g|webp|avif|svg|gif|mp4|webm|js|css|woff2?)(?![\w.])/g;

export function assetRefs(html) {
  return [...new Set(html.match(ASSET_REF) ?? [])];
}
```

- [ ] **Step 5: Correr los tests y verificar que pasan**

Run: `pnpm test`
Expected: 12 tests, todos `ok`, `# fail 0`.

- [ ] **Step 6: Commit**

```bash
git add scripts/prerender-lib.mjs scripts/prerender-lib.test.mjs package.json
git commit -F - <<'EOF'
feat(seo): add pure helpers for build-time prerendering

Head and root injection, output file naming, sitemap generation,
route coverage and asset reference checks, with node:test coverage.

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
EOF
```

---

### Task 2: Configuración SEO por ruta

**Files:**
- Create: `src/app/seo.ts`
- Create: `scripts/seo.test.mjs`

**Interfaces:**
- Produces (desde `src/app/seo.ts`):
  - `SITE_URL: string` (`'https://libeparedes.com'`), `DEFAULT_IMAGE: string`, `NOT_FOUND_PATH: '*'`
  - `interface RouteSeo { path: string; title: string; description: string; image?: string; noindex?: boolean }`
  - `seoRoutes: RouteSeo[]`
  - `getRouteSeo(pathname: string): RouteSeo`
  - `canonicalUrl(seo: RouteSeo): string | null`
  - `robotsContent(seo: RouteSeo): string`
  - `applyRouteSeo(seo: RouteSeo): void` (solo navegador)

- [ ] **Step 1: Escribir los tests**

`scripts/seo.test.mjs`:

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { seoRoutes, getRouteSeo, canonicalUrl, robotsContent } from '../src/app/seo.ts';

const byPath = (path) => seoRoutes.find((r) => r.path === path);

test('títulos de hasta 60 caracteres y descripciones de hasta 160', () => {
  for (const r of seoRoutes) {
    assert.ok(r.title.length <= 60, `${r.path}: título de ${r.title.length} caracteres`);
    assert.ok(r.description.length <= 160, `${r.path}: descripción de ${r.description.length} caracteres`);
  }
});

test('paths únicos, con la entrada 404', () => {
  const paths = seoRoutes.map((r) => r.path);
  assert.equal(new Set(paths).size, paths.length);
  assert.ok(paths.includes('*'));
});

test('landings, carousel y 404 son noindex; home y case studies se indexan', () => {
  for (const p of ['/negocios', '/imobiliario', '/carousel-preview', '*']) {
    assert.equal(byPath(p).noindex, true, p);
  }
  for (const p of ['/', '/proyectos/neobank', '/proyectos/ai-app', '/proyectos/design-system', '/proyectos/portal-creditos', '/proyectos/pets-app', '/proyectos/consulting']) {
    assert.ok(!byPath(p).noindex, p);
  }
});

test('getRouteSeo encuentra la ruta exacta e ignora la barra final', () => {
  assert.equal(getRouteSeo('/proyectos/neobank').path, '/proyectos/neobank');
  assert.equal(getRouteSeo('/proyectos/neobank/').path, '/proyectos/neobank');
  assert.equal(getRouteSeo('/').path, '/');
});

test('getRouteSeo devuelve la 404 para rutas desconocidas', () => {
  assert.equal(getRouteSeo('/no-existe').path, '*');
});

test('canonicalUrl: la home conserva la barra y la 404 no tiene', () => {
  assert.equal(canonicalUrl(byPath('/')), 'https://libeparedes.com/');
  assert.equal(canonicalUrl(byPath('/proyectos/neobank')), 'https://libeparedes.com/proyectos/neobank');
  assert.equal(canonicalUrl(byPath('*')), null);
});

test('robotsContent', () => {
  assert.equal(robotsContent(byPath('/')), 'index, follow');
  assert.equal(robotsContent(byPath('/negocios')), 'noindex, follow');
});
```

- [ ] **Step 2: Correr los tests y verificar que fallan**

Run: `pnpm test`
Expected: FAIL con `Cannot find module ... src/app/seo.ts`.

- [ ] **Step 3: Implementar**

`src/app/seo.ts` (los textos son los de la spec, literal):

```ts
// Título, descripción e indexación de cada ruta. Lo usan el pre-render del build
// (scripts/prerender.mjs) y Layout al navegar. Toda ruta de routes.tsx necesita su entrada.

export const SITE_URL = 'https://libeparedes.com';
export const DEFAULT_IMAGE = '/assets/libe-perfil.png';
export const NOT_FOUND_PATH = '*';

export interface RouteSeo {
  path: string;
  title: string;
  description: string;
  image?: string;
  noindex?: boolean;
}

export const seoRoutes: RouteSeo[] = [
  {
    path: '/',
    title: 'Libe Paredes — Product Designer UX/UI | Fintech & AI',
    description:
      'Product Designer con más de 6 años en fintech e IA. Proyectos para Brasil, USA, México y Chile. Disponible para roles remotos y consultoría.',
  },
  {
    path: '/proyectos/neobank',
    title: 'Neobank App: case study de UX fintech | Libe Paredes',
    description:
      'App móvil para un neobank en Brasil, con límites de crédito innovadores y una experiencia simplificada. Research, flujos y UI.',
  },
  {
    path: '/proyectos/ai-app',
    title: 'App Fintech con IA: case study | Libe Paredes',
    description:
      'App financiera con IA que ayuda a trabajadores de aplicativos en Estados Unidos a organizar sus finanzas con datos reales.',
  },
  {
    path: '/proyectos/design-system',
    title: 'Design System con IA en 7 días | Libe Paredes',
    description:
      'De un repositorio vacío a un design system en código: tokens, 19 componentes accesibles (WCAG AA) y documentación, en 7 días con Claude Code.',
  },
  {
    path: '/proyectos/portal-creditos',
    title: 'Portal de Créditos: case study fintech | Libe Paredes',
    description:
      'Plataforma que analiza datos de trabajadores para ofrecer productos financieros personalizados, integrada con instituciones de crédito.',
  },
  {
    path: '/proyectos/pets-app',
    title: 'Wallet Pets App: case study fintech | Libe Paredes',
    description:
      'App para pedir comida para mascotas, sumar puntos y usar una billetera virtual para tu mascota. Case study de UX/UI fintech.',
  },
  {
    path: '/proyectos/consulting',
    title: 'Consultoría UX para startups | Libe Paredes',
    description:
      'Claridad antes de escalar: una mirada externa, estratégica y accionable para mejorar la experiencia de tu producto sin perder velocidad.',
  },
  {
    path: '/negocios',
    title: 'Diseño web y de marca para negocios | Libe Paredes',
    description:
      'Landing pages, webs profesionales, estrategia de marca y redes sociales para negocios que quieren crecer online.',
    noindex: true,
  },
  {
    path: '/imobiliario',
    title: 'Marketing Visual & Design | Libe Paredes',
    description: 'Social media, tratamento de fotos, reels, branding e websites para o mercado imobiliário.',
    noindex: true,
  },
  {
    path: '/carousel-preview',
    title: 'Carousel preview | Libe Paredes',
    description: 'Vista interna de carruseles.',
    noindex: true,
  },
  {
    path: NOT_FOUND_PATH,
    title: 'Página no encontrada | Libe Paredes',
    description: 'Esta página no existe en libeparedes.com.',
    noindex: true,
  },
];

export function getRouteSeo(pathname: string): RouteSeo {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  const match = seoRoutes.find((r) => r.path === path);
  if (match) return match;
  return seoRoutes.find((r) => r.path === NOT_FOUND_PATH) as RouteSeo;
}

export function canonicalUrl(seo: RouteSeo): string | null {
  return seo.path === NOT_FOUND_PATH ? null : `${SITE_URL}${seo.path}`;
}

export function robotsContent(seo: RouteSeo): string {
  return seo.noindex ? 'noindex, follow' : 'index, follow';
}

// Al navegar dentro del sitio: mantiene el <head> igual al HTML pre-renderizado de esa ruta.
export function applyRouteSeo(seo: RouteSeo): void {
  document.title = seo.title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', seo.description);
  document.querySelector('meta[name="robots"]')?.setAttribute('content', robotsContent(seo));

  const href = canonicalUrl(seo);
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (href === null) {
    link?.remove();
    return;
  }
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = href;
}
```

- [ ] **Step 4: Correr los tests y verificar que pasan**

Run: `pnpm test`
Expected: 19 tests en total, `# fail 0`.

- [ ] **Step 5: Commit**

```bash
git add src/app/seo.ts scripts/seo.test.mjs
git commit -F - <<'EOF'
feat(seo): add per-route title, description and indexing config

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
EOF
```

---

### Task 3: `<head>` al navegar y `<h1>` en la home

**Files:**
- Modify: `src/app/components/Layout.tsx`
- Modify: `src/app/components/RealEstateLP.tsx:181-185`
- Modify: `src/app/components/NewHero.tsx:52-69` y `:101-118`

**Interfaces:**
- Consumes: `getRouteSeo`, `applyRouteSeo` de `src/app/seo.ts` (Task 2).

- [ ] **Step 1: Layout actualiza el `<head>` en cada cambio de ruta**

`src/app/components/Layout.tsx` completo:

```tsx
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigationType } from 'react-router';
import { logPageView } from '../utils/analytics';
import { applyRouteSeo, getRouteSeo } from '../seo';

export function Layout() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Registrar cada cambio de página
    logPageView(location.pathname + location.search);
  }, [location]);

  useEffect(() => {
    // Título, descripción y canonical de la ruta (los mismos que trae su HTML pre-renderizado)
    applyRouteSeo(getRouteSeo(location.pathname));
  }, [location.pathname]);

  useEffect(() => {
    // Al entrar a una página nueva, empezar arriba (al volver atrás, el navegador restaura la posición)
    if (navigationType !== 'POP') window.scrollTo(0, 0);
  }, [location.pathname]);

  return <Outlet />;
}
```

- [ ] **Step 2: Quitar el título propio de `RealEstateLP`**

En `src/app/components/RealEstateLP.tsx`, borrar este bloque (el `useEffect` de scroll que está arriba se queda, así que el import de `useEffect` también):

```tsx
  useEffect(() => {
    const prev = document.title;
    document.title = 'Marketing Visual & Design | Libe Paredes';
    return () => { document.title = prev; };
  }, []);

```

- [ ] **Step 3: El título del hero pasa a `<h1>` (escritorio)**

En `src/app/components/NewHero.tsx`, reemplazar:

```tsx
          <div className="font-['Consolas',monospace] text-gray-900 leading-tight text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
```

por:

```tsx
          <h1 className="font-['Consolas',monospace] font-normal text-gray-900 leading-tight text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
```

y el `</div>` que cierra ese bloque (el que sigue al `motion.span` con `{t.title2}` y `transition={{ duration: 0.7, delay: 1.0 }}` de `x: 40`) por `</h1>`:

```tsx
              {t.title2}
            </motion.span>
          </h1>
```

- [ ] **Step 4: El título del hero pasa a `<h1>` (móvil)**

Reemplazar:

```tsx
        <div className="font-['Consolas',monospace] text-gray-900 leading-tight text-4xl text-center mb-12">
```

por:

```tsx
        <h1 className="font-['Consolas',monospace] font-normal text-gray-900 leading-tight text-4xl text-center mb-12">
```

y su `</div>` de cierre (después del `motion.span` con `{t.title2}` y `x: 30`) por `</h1>`:

```tsx
            {t.title2}
          </motion.span>
        </h1>
```

`font-normal` es necesario: `src/styles/theme.css` da `font-weight: var(--font-weight-medium)` a los `h1`.

- [ ] **Step 5: Verificar en el navegador**

```bash
pnpm build && pnpm preview --port 4173 --strictPort   # en segundo plano
agent-browser open http://localhost:4173/
agent-browser eval 'document.title'
# Expected: "Libe Paredes — Product Designer UX/UI | Fintech & AI"
agent-browser eval 'document.querySelectorAll("h1").length'
# Expected: 2 (escritorio y móvil; uno oculto por breakpoint)
agent-browser eval 'getComputedStyle([...document.querySelectorAll("h1")].find(h => h.offsetParent)).fontWeight'
# Expected: "400"
agent-browser open http://localhost:4173/proyectos/neobank
agent-browser eval '[document.title, document.querySelector("link[rel=canonical]").href]'
# Expected: ["Neobank App: case study de UX fintech | Libe Paredes", "https://libeparedes.com/proyectos/neobank"]
agent-browser open http://localhost:4173/no-existe
agent-browser eval '[document.title, !!document.querySelector("link[rel=canonical]"), document.querySelector("meta[name=robots]").content]'
# Expected: ["Página no encontrada | Libe Paredes", false, "noindex, follow"]
agent-browser open http://localhost:4173/imobiliario
agent-browser eval 'document.title'
# Expected: "Marketing Visual & Design | Libe Paredes"
```

Captura de la home en escritorio y en móvil (`agent-browser set viewport 390 844`) para confirmar que el hero se ve igual que antes. Cerrar el preview y el navegador.

- [ ] **Step 6: Commit**

```bash
git add src/app/components/Layout.tsx src/app/components/RealEstateLP.tsx src/app/components/NewHero.tsx
git commit -F - <<'EOF'
feat(seo): update head tags on navigation and make hero title the h1

Layout applies the route's title, description, robots and canonical from
seo.ts. RealEstateLP no longer sets its own title. The home page had no
h1; the hero title becomes one with font-normal to keep its look.

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
EOF
```

---

### Task 4: La app se puede renderizar en Node

**Files:**
- Modify: `src/app/routes.tsx` (import y export final)
- Modify: `src/app/App.tsx:1-5`
- Modify: `src/app/context/LanguageContext.tsx:16-19`
- Create: `src/entry-server.tsx`
- Modify: `.gitignore`

**Interfaces:**
- Consumes: `seoRoutes`, `SITE_URL`, `DEFAULT_IMAGE`, `canonicalUrl`, `robotsContent` (Task 2).
- Produces (`dist-ssr/entry-server.js`): `render(url: string): Promise<string>`, `routes: RouteObject[]` y los reexports de `seo.ts`.

- [ ] **Step 1: `routes.tsx` exporta el array**

Reemplazar la primera línea:

```tsx
import { createBrowserRouter } from 'react-router';
```

por:

```tsx
import type { RouteObject } from 'react-router';
```

y:

```tsx
export const router = createBrowserRouter([
```

por:

```tsx
export const routes: RouteObject[] = [
```

y el cierre del archivo:

```tsx
    ],
  },
]);
```

por:

```tsx
    ],
  },
];
```

- [ ] **Step 2: `App.tsx` crea el router del navegador**

Reemplazar:

```tsx
import { RouterProvider } from 'react-router';
import { router } from './routes';
```

por:

```tsx
import { RouterProvider, createBrowserRouter } from 'react-router';
import { routes } from './routes';
```

y agregar, después de los imports y antes de `class ErrorBoundary`:

```tsx
const router = createBrowserRouter(routes);
```

- [ ] **Step 3: `LanguageContext` sin `window` usa español**

Reemplazar:

```tsx
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem('portfolio-language');
```

por:

```tsx
  const [language, setLanguageState] = useState<Language>(() => {
    // En el pre-render del build no hay localStorage: el HTML sale en español
    if (typeof window === 'undefined') return 'es';
    const stored = localStorage.getItem('portfolio-language');
```

- [ ] **Step 4: Crear `src/entry-server.tsx`**

```tsx
// Entrada del build SSR que usa scripts/prerender.mjs. No se carga en el navegador.
import { renderToString } from 'react-dom/server';
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from 'react-router';
import { routes } from './app/routes';
import { LanguageProvider } from './app/context/LanguageContext';
import { SITE_URL } from './app/seo';

export { routes };
export { seoRoutes, SITE_URL, DEFAULT_IMAGE, canonicalUrl, robotsContent } from './app/seo';

export async function render(url: string): Promise<string> {
  const handler = createStaticHandler(routes);
  const context = await handler.query(new Request(`${SITE_URL}${url}`));
  if (context instanceof Response) {
    throw new Error(`La ruta ${url} devolvió una redirección (${context.status})`);
  }
  const router = createStaticRouter(handler.dataRoutes, context);
  return renderToString(
    <LanguageProvider>
      <StaticRouterProvider router={router} context={context} hydrate={false} />
    </LanguageProvider>,
  );
}
```

- [ ] **Step 5: Ignorar `dist-ssr`**

En `.gitignore`, después de `dist/`:

```
dist/
dist-ssr/
```

En `.vercelignore` (archivo local, no versionado), agregar una línea `dist-ssr`.

- [ ] **Step 6: Verificar que compila y renderiza en Node**

```bash
npx vite build --ssr src/entry-server.tsx --outDir dist-ssr
node -e "import('./dist-ssr/entry-server.js').then(async m => { for (const p of ['/', '/proyectos/neobank', '/no-existe']) { const h = await m.render(p); console.log(p, h.length, /<h1[\s>]/.test(h)); } console.log('rutas:', m.routes[0].children.length, '| seo:', m.seoRoutes.length); })"
```

Expected: tres líneas con longitud > 1000 y `true`, sin `localStorage is not defined`; `rutas: 11 | seo: 11`. Pueden aparecer avisos `useLayoutEffect does nothing on the server`: son esperables.

Después: `rm -rf dist-ssr`.

- [ ] **Step 7: Verificar que el sitio sigue funcionando en el navegador**

```bash
pnpm build && pnpm preview --port 4173 --strictPort   # en segundo plano
agent-browser open http://localhost:4173/proyectos/ai-app
agent-browser eval 'document.querySelector("h1").textContent'
# Expected: "App Fintech AI"
```

Cerrar el preview.

- [ ] **Step 8: Commit**

```bash
git add src/app/routes.tsx src/app/App.tsx src/app/context/LanguageContext.tsx src/entry-server.tsx .gitignore
git commit -F - <<'EOF'
feat(seo): make the app renderable in Node for prerendering

routes.tsx exports the route array (createBrowserRouter needs window and
moves to App.tsx), LanguageContext defaults to Spanish without window, and
entry-server.tsx renders a URL with React Router's static API.

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
EOF
```

---

### Task 5: Script de pre-render en el build

**Files:**
- Create: `scripts/prerender.mjs`
- Modify: `package.json` (script `build`)
- Delete: `public/sitemap.xml`

**Interfaces:**
- Consumes: todo lo de `scripts/prerender-lib.mjs` (Task 1) y `dist-ssr/entry-server.js` (Task 4).

- [ ] **Step 1: Crear `scripts/prerender.mjs`**

```js
// Paso final de `pnpm build`: escribe un HTML por ruta en dist/ y el sitemap.
// Frena el build si una ruta no tiene SEO, si un render falla o si falta un asset.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import {
  injectHead,
  injectRoot,
  outputFileFor,
  buildSitemap,
  collectPaths,
  diffPaths,
  assetRefs,
} from './prerender-lib.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const { render, routes, seoRoutes, SITE_URL, DEFAULT_IMAGE, canonicalUrl, robotsContent } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
);

const errors = [];

const { missingSeo, orphanSeo } = diffPaths(collectPaths(routes), seoRoutes.map((r) => r.path));
if (missingSeo.length) errors.push(`rutas sin entrada en src/app/seo.ts: ${missingSeo.join(', ')}`);
if (orphanSeo.length) errors.push(`entradas de src/app/seo.ts sin ruta: ${orphanSeo.join(', ')}`);
if (errors.length) fail();

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

for (const seo of seoRoutes) {
  try {
    const url = seo.path === '*' ? '/__pagina-inexistente__' : seo.path;
    const appHtml = await render(url);
    if (!seo.noindex && !/<h1[\s>]/.test(appHtml)) errors.push(`${seo.path}: no tiene <h1>`);

    const head = {
      title: seo.title,
      description: seo.description,
      robots: robotsContent(seo),
      canonical: canonicalUrl(seo),
      ogType: seo.path === '/' ? 'profile' : 'website',
      image: SITE_URL + (seo.image ?? DEFAULT_IMAGE),
    };
    const html = injectRoot(injectHead(template, head), appHtml);

    for (const ref of assetRefs(html)) {
      if (!fs.existsSync(path.join(distDir, decodeURIComponent(ref)))) errors.push(`${seo.path}: falta ${ref} en dist/`);
    }

    const outFile = path.join(distDir, outputFileFor(seo.path));
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, html);
    console.log(`prerender: ${seo.path} -> ${path.relative(root, outFile)}`);
  } catch (error) {
    errors.push(`${seo.path}: ${error.message}`);
  }
}

const sitemapUrls = seoRoutes.filter((r) => !r.noindex && r.path !== '*').map(canonicalUrl);
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), buildSitemap(sitemapUrls));
console.log(`prerender: sitemap.xml con ${sitemapUrls.length} URLs`);

fs.rmSync(ssrDir, { recursive: true, force: true });
if (errors.length) fail();

function fail() {
  console.error(`\nprerender falló:\n- ${errors.join('\n- ')}`);
  process.exit(1);
}
```

- [ ] **Step 2: Encadenar el script en `build`**

En `package.json`:

```json
    "build": "vite build && vite build --ssr src/entry-server.tsx --outDir dist-ssr && node scripts/prerender.mjs",
```

- [ ] **Step 3: Borrar el sitemap manual**

```bash
git rm public/sitemap.xml
```

- [ ] **Step 4: Verificar que el build frena si falta una entrada SEO**

En `src/app/seo.ts`, comentar temporalmente la entrada `/carousel-preview` y correr:

```bash
pnpm build; echo "exit: $?"
```

Expected: `prerender falló:` con `rutas sin entrada en src/app/seo.ts: /carousel-preview` y `exit: 1`. Restaurar la entrada (`git checkout -- src/app/seo.ts`).

- [ ] **Step 5: Build completo y revisión de `dist/`**

```bash
pnpm build
find dist -maxdepth 2 -name "*.html" | sort
cat dist/sitemap.xml
grep -o "<title>[^<]*</title>" dist/proyectos/neobank.html
grep -c "límites de crédito" dist/proyectos/neobank.html
grep -o '<meta name="robots" content="[^"]*"' dist/negocios.html dist/404.html dist/index.html
grep -c 'rel="canonical"' dist/404.html
ls dist-ssr 2>&1
```

Expected:
- 11 líneas `prerender: ...` y `sitemap.xml con 7 URLs`; termina sin error.
- HTML: `dist/404.html`, `dist/carousel-preview.html`, `dist/imobiliario.html`, `dist/index.html`, `dist/negocios.html` y `dist/proyectos/{ai-app,consulting,design-system,neobank,pets-app,portal-creditos}.html`.
- `sitemap.xml`: 7 `<loc>` (home y 6 case studies), sin `lastmod`.
- `<title>Neobank App: case study de UX fintech | Libe Paredes</title>`; el conteo de "límites de crédito" es ≥ 1.
- `noindex, follow` en `negocios.html` y `404.html`; `index, follow` en `index.html`.
- `0` canonical en `404.html`.
- `dist-ssr`: `No such file or directory`.

- [ ] **Step 6: Tests**

Run: `pnpm test`
Expected: `# fail 0`.

- [ ] **Step 7: Commit**

```bash
git add scripts/prerender.mjs package.json
git commit -F - <<'EOF'
feat(seo): prerender every route to static HTML at build time

pnpm build now renders each route into dist/ with its own head tags and
content, writes 404.html, and generates sitemap.xml from seo.ts (replacing
the hand-written one). The build fails if a route has no SEO entry, a
render throws, an indexable page has no h1, or an asset is missing.

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
EOF
```

(`git rm` del Step 3 ya dejó el borrado de `public/sitemap.xml` en el índice.)

---

### Task 6: Servir los HTML en Vercel y verificar localmente

**Files:**
- Modify: `vercel.json`
- Modify: `CLAUDE.md`

- [ ] **Step 1: `vercel.json`**

Reemplazar:

```json
  "installCommand": "pnpm install --no-frozen-lockfile",
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ],
```

por:

```json
  "installCommand": "pnpm install --no-frozen-lockfile",
  "cleanUrls": true,
  "trailingSlash": false,
```

- [ ] **Step 2: Servir `dist/` como lo haría Vercel**

`serve` (de Vercel) aplica `cleanUrls` por defecto y responde `404.html` con código 404.

```bash
pnpm build
npx --yes serve@14.2.4 dist -l 4174   # en segundo plano
```

- [ ] **Step 3: Verificar con curl, sin JavaScript**

```bash
for p in / /proyectos/neobank /proyectos/ai-app /proyectos/design-system /proyectos/portal-creditos /proyectos/pets-app /proyectos/consulting /negocios /imobiliario; do
  printf "%-28s %s  " "$p" "$(curl -s -o /dev/null -w '%{http_code}' "http://localhost:4174$p")"
  curl -s "http://localhost:4174$p" | grep -o "<title>[^<]*</title>"
done
printf "/no-existe  %s\n" "$(curl -s -o /dev/null -w '%{http_code}' http://localhost:4174/no-existe)"
curl -s http://localhost:4174/no-existe | grep -c "Esta página no existe"
curl -s http://localhost:4174/proyectos/design-system | grep -c "19 componentes"
curl -s -o /dev/null -w "%{http_code} %{content_type}\n" http://localhost:4174/sitemap.xml
```

Expected: las 9 rutas con `200` y el título de la tabla de la spec; `/no-existe` con `404` y conteo ≥ 1; conteo de "19 componentes" ≥ 1; sitemap `200` con tipo `xml`.

- [ ] **Step 4: Verificar en el navegador**

```bash
agent-browser open http://localhost:4174/
```

Comprobar:
1. Click en un case study desde la home: `document.title` cambia al de ese case study. Volver atrás: vuelve el título de la home.
2. Cambiar el idioma a EN y a PT con el selector del sitio: los textos cambian. Recargar en EN: la página queda en EN.
3. `agent-browser errors` no muestra errores de página y `agent-browser console` no muestra errores de React (los avisos de `useLayoutEffect` solo aparecen en el build, no en el navegador).
4. Captura de la home: el hero y las animaciones de entrada se ven como antes.

Cerrar `serve` y el navegador.

- [ ] **Step 5: Actualizar `CLAUDE.md`**

En "Comandos frecuentes", después del bloque de `pnpm preview`:

```bash
# Tests (node:test; requiere Node ≥ 23.6)
pnpm test
```

En "Estructura del proyecto", dentro de `src/app/`, después de `routes.tsx`:

```
│   ├── seo.ts                     # Título, descripción y noindex por ruta (pre-render + navegación)
```

y después de `src/app/` (al nivel de `imports/`):

```
├── entry-server.tsx               # Entrada SSR para el pre-render del build
```

Reemplazar la sección "Deploy" por:

```markdown
## Deploy

- **Plataforma:** Vercel, publicando desde la CLI (`vercel deploy --prod --yes`); un push a GitHub no despliega.
- **Build:** `pnpm build` = `vite build` + build SSR de `src/entry-server.tsx` + `scripts/prerender.mjs`, que escribe un HTML por ruta en `dist/`, `404.html` y `sitemap.xml`.
- **Toda ruta nueva necesita su entrada en `src/app/seo.ts`**: si falta, el build falla. Sin archivo propio, la ruta respondería 404 en producción.
- `vercel.json` usa `cleanUrls` y `trailingSlash: false`, sin rewrites: cada URL se sirve desde su HTML y lo desconocido devuelve `404.html` con código 404.
- Los componentes no pueden usar `window`, `document` ni `localStorage` durante el render (solo dentro de efectos o handlers), porque el pre-render corre en Node.
```

En el backlog, marcar:

```markdown
- [x] **SEO meta tags** — Agregar `<title>`, `<meta description>`, Open Graph por ruta (React Helmet o equivalente)
```

y agregar debajo:

```markdown
  - Hecho con pre-render en el build y `src/app/seo.ts`. Pendiente: rutas `/en` y `/pt` con `hreflang`, imagen para compartir por case study.
```

- [ ] **Step 6: Commit**

```bash
git add vercel.json CLAUDE.md
git commit -F - <<'EOF'
feat(seo): serve prerendered pages on Vercel with real 404s

Drops the catch-all rewrite to the home page. cleanUrls serves each route
from its own HTML file, trailingSlash: false redirects duplicates, and
unknown URLs get 404.html with a 404 status. CLAUDE.md documents the new
build and the rule that every route needs an entry in seo.ts.

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
EOF
```

---

### Task 7: Publicar y verificar en producción

**Requiere aprobación explícita de Libe antes del Step 2.**

- [ ] **Step 1: Integrar la rama en `main`**

```bash
git switch main
git merge --ff-only feat/seo-prerender
pnpm test && pnpm build
```

Expected: fast-forward sin conflictos; tests y build sin errores.

- [ ] **Step 2: Push y deploy (con aprobación)**

```bash
git push origin main
vercel deploy --prod --yes
vercel ls --prod | head -6
```

Expected: el deploy más reciente en `● Ready`.

- [ ] **Step 3: Verificar en producción**

```bash
B=https://libeparedes.com
for p in / /proyectos/neobank /proyectos/ai-app /proyectos/design-system /proyectos/portal-creditos /proyectos/pets-app /proyectos/consulting /negocios /imobiliario; do
  printf "%-28s %s  " "$p" "$(curl -s -o /dev/null -w '%{http_code}' "$B$p")"
  curl -s "$B$p" | grep -o "<title>[^<]*</title>"
done
printf "/no-existe %s\n" "$(curl -s -o /dev/null -w '%{http_code}' $B/no-existe)"
curl -s -o /dev/null -w "trailing slash: %{http_code} -> %{redirect_url}\n" $B/proyectos/neobank/
curl -s $B/proyectos/neobank | grep -o '<link rel="canonical" href="[^"]*"'
curl -s $B/sitemap.xml | grep -c "<loc>"
curl -s -o /dev/null -w "robots.txt: %{http_code} %{content_type}\n" $B/robots.txt
curl -s -o /dev/null -w "favicon: %{http_code} %{content_type}\n" $B/favicon.svg
```

Expected: 9 rutas con `200` y su título; `/no-existe` con `404`; barra final con `308 -> https://libeparedes.com/proyectos/neobank`; canonical propio de Neobank; `7` URLs en el sitemap; `robots.txt` como `text/plain`; favicon como `image/svg+xml`.

Abrir https://libeparedes.com en el navegador, ir a un case study y volver: todo funciona y la consola no muestra errores.

- [ ] **Step 4: Si algo falla en producción**

```bash
vercel rollback
```

Después, investigar en local con `pnpm build` + `npx serve dist`.

- [ ] **Step 5: Borrar la rama**

```bash
git branch -d feat/seo-prerender
```

- [ ] **Step 6: Pasos de Libe**

En Search Console: enviar `https://libeparedes.com/sitemap.xml` y pedir indexación de cada case study (Inspección de URLs → Solicitar indexación).
