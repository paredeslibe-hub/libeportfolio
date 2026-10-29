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
