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
