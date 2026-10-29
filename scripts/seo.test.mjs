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
