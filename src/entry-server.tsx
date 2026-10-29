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
