# CLAUDE.md — Libe Paredes Portfolio

Portfolio profesional de Product Design (UX/UI) orientado a mercados Latam y Remote (Brasil, USA, México, Chile). Especialización en Fintech e IA aplicada.

---

## Stack tecnológico

| Capa | Tecnología | Versión |
|------|-----------|---------|
| UI Framework | React | 18.3.1 |
| Build | Vite | 6.3.5 |
| Routing | React Router | v7 (createBrowserRouter) |
| Styling | Tailwind CSS | v4 (`@tailwindcss/vite`) |
| UI Primitives | Radix UI + shadcn/ui | (ver package.json) |
| Animaciones | Motion (Framer Motion) | v12 |
| Iconos | Lucide React | 0.487 |
| CSS-in-JS | Emotion + MUI | solo en imports de Figma |
| Analytics | react-ga4 | ^3.0.1 |
| Package manager | pnpm | workspace habilitado |
| i18n | LanguageContext custom | ES / EN / PT |
| Figma | Figma Make exports | `src/imports/` |

**No usa Next.js** — es una SPA pura con Vite. No hay SSR ni SSG.

---

## Comandos frecuentes

```bash
# Instalar dependencias
pnpm install

# Servidor de desarrollo
pnpm dev

# Build de producción
pnpm build

# Preview del build
pnpm preview

# Tests (node:test; requiere Node ≥ 23.6)
pnpm test
```

> **Nota Windows:** Los paths de `node_modules` pueden superar el límite de 260 caracteres.
> Ejecutar una vez: `git config core.longpaths true`

---

## Estructura del proyecto

```
src/
├── app/
│   ├── App.tsx                    # Root: ErrorBoundary + LanguageProvider + RouterProvider
│   ├── routes.tsx                 # Todas las rutas con createBrowserRouter
│   ├── seo.ts                     # Título, descripción y noindex por ruta (pre-render + navegación)
│   ├── components/
│   │   ├── Portfolio.tsx          # Página principal (home)
│   │   ├── NewHero.tsx            # Hero con video + foto + typing animation
│   │   ├── AboutMe.tsx            # Sección bio
│   │   ├── Hero.tsx               # Hero alternativo (legacy)
│   │   ├── Layout.tsx             # Shell con nav + outlet
│   │   ├── Footer.tsx             # Footer global
│   │   ├── ProcessSection.tsx     # 5 pasos del proceso de diseño
│   │   ├── ProjectCard.tsx        # Tarjeta reutilizable de proyecto
│   │   ├── SkillsSection.tsx      # Grid de habilidades
│   │   ├── ConsultingPage.tsx     # Consultoría UX (case study)
│   │   ├── LeadCaptureLP.tsx      # Landing page /negocios
│   │   ├── RealEstateLP.tsx       # Landing page /imobiliario
│   │   ├── NeobankPage.tsx        # Case study Neobank
│   │   ├── AiAppPage.tsx          # Case study App Fintech AI
│   │   ├── DesignSystemPage.tsx   # Case study Design System
│   │   ├── PortalCreditosPage.tsx # Case study Portal de Créditos
│   │   ├── PetsAppPage.tsx        # Case study Pets App (Fintech)
│   │   ├── NotFoundPage.tsx       # Página 404 (ruta `*`)
│   │   ├── LlmContent.tsx         # Capa sr-only con el perfil para crawlers y LLMs
│   │   ├── CarouselPreview.tsx    # Preview interno de carruseles (fuera del sitemap)
│   │   ├── ComingSoonPage.tsx     # Placeholder genérico (sin uso actualmente)
│   │   ├── figma/
│   │   │   └── ImageWithFallback.tsx
│   │   └── ui/                    # Librería shadcn/ui completa (Radix-based)
│   ├── context/
│   │   └── LanguageContext.tsx    # ES/EN/PT con localStorage persistence
│   └── utils/
│       └── analytics.ts           # initGA() con react-ga4
├── entry-server.tsx               # Entrada SSR para el pre-render del build
├── imports/                       # Exports de Figma Make (NO editar manualmente)
│   ├── *.tsx                      # Componentes generados por Figma
│   ├── svg-*.ts                   # SVGs como strings inline
│   └── */                         # Subcarpetas por frame de Figma
└── styles/
    ├── index.css                  # Entry: importa fonts + tailwind + theme
    ├── fonts.css                  # @import Poppins (Google Fonts)
    ├── tailwind.css               # @import "tailwindcss"
    ├── theme.css                  # CSS custom properties (--background, --primary, etc.)
    └── globals.css                # (vacío actualmente)
```

---

## Rutas de la aplicación

| Ruta | Componente | Estado |
|------|-----------|--------|
| `/` | `Portfolio` | Activo |
| `/negocios` | `LeadCaptureLP` | Activo |
| `/imobiliario` | `RealEstateLP` | Activo |
| `/proyectos/neobank` | `NeobankPage` | Activo |
| `/proyectos/consulting` | `ConsultingPage` | Activo |
| `/proyectos/ai-app` | `AiAppPage` | Activo |
| `/proyectos/design-system` | `DesignSystemPage` | Activo |
| `/proyectos/portal-creditos` | `PortalCreditosPage` | Activo |
| `/proyectos/pets-app` | `PetsAppPage` | Activo |
| `/carousel-preview` | `CarouselPreview` | Interno (bloqueado en robots.txt) |
| `*` | `NotFoundPage` | Activo |

---

## Sistema de diseño (resumen rápido)

Ver `DESIGN_GUIDELINES.md` para referencia completa.

**Fuente:** Poppins (300–700) — solo una familia tipográfica.

**Colores clave:**
- Naranja acento: `text-orange-500` / `bg-orange-500` (`#f97316`)
- Gradiente hero: `from-orange-50 via-rose-50 to-purple-50`
- Gradiente CTA: `from-orange-500 to-rose-500`

**Contenedor:** `max-w-6xl mx-auto px-6`

**Border radius:** `rounded-2xl` (tarjetas), `rounded-full` (botones/tags), `rounded-xl` (iconos/inputs)

**Hover estándar en tarjetas:** `transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`

---

## Estándares de código

### TypeScript / React

- Componentes como funciones nombradas con `export` nombrado (no default, salvo `App.tsx`)
- Props definidas con `interface` inline o en el mismo archivo
- Idioma se pasa como prop `language: 'es' | 'en' | 'pt'` en componentes de página
- Traducciones: objeto `translations` local en cada componente (no i18n library)
- El contexto global de idioma vive en `LanguageContext` y se consume con `useLanguage()`
- Usar `@/` como alias para `src/` (configurado en `vite.config.ts`)

### Tailwind

- Usar Tailwind v4: sin `tailwind.config.js`, la configuración va directo en CSS
- Tokens custom en `src/styles/theme.css` con `@layer base`
- No usar clases arbitrarias `[value]` cuando existe una clase estándar equivalente
- Mantener consistencia con el sistema de colores naranja/rose/purple establecido

### Componentes UI

- Usar componentes de `src/app/components/ui/` (shadcn/ui) para primitivas de UI
- No mezclar MUI con componentes propios — MUI solo existe para imports de Figma
- `src/imports/` son generados por Figma Make: no editar manualmente, integrarlos vía `@/imports/`

### Animaciones

- Preferir `motion` (Framer Motion v12) para animaciones de entrada
- Hover estático con Tailwind (`hover:scale-105`, `hover:-translate-y-2`)
- Respetar `prefers-reduced-motion` en animaciones de entrada

---

## Internacionalización

```ts
// Patrón estándar en cada componente de página
type Language = 'es' | 'en' | 'pt';

const translations = {
  es: { title: '...', ... },
  en: { title: '...', ... },
  pt: { title: '...', ... },
};

// En el componente:
const t = translations[language];
```

El idioma persiste en `localStorage` con la clave `'portfolio-language'`.

---

## Analytics

Google Analytics 4 inicializado en `App.tsx` via `initGA()`. Measurement ID en `src/app/utils/analytics.ts`.  
Ver `GOOGLE_ANALYTICS.md` para setup y eventos personalizados.

---

## Deploy

- **Plataforma:** Vercel, publicando desde la CLI (`vercel deploy --prod --yes`); un push a GitHub no despliega.
- **Build:** `pnpm build` = `vite build` + build SSR de `src/entry-server.tsx` + `scripts/prerender.mjs`, que escribe un HTML por ruta en `dist/`, `404.html` y `sitemap.xml`.
- **Toda ruta nueva necesita su entrada en `src/app/seo.ts`**: si falta, el build falla. Sin archivo propio, la ruta respondería 404 en producción.
- `vercel.json` usa `cleanUrls` y `trailingSlash: false`, sin rewrites: cada URL se sirve desde su HTML y lo desconocido devuelve `404.html` con código 404.
- Los componentes no pueden usar `window`, `document` ni `localStorage` durante el render (solo dentro de efectos o handlers), porque el pre-render corre en Node.

---

## Backlog — Tareas pendientes

### Alta prioridad
- [x] **Case study AI App** — Reemplazar `ComingSoonPage` con contenido real del proyecto IA
- [x] **SEO meta tags** — Agregar `<title>`, `<meta description>`, Open Graph por ruta (React Helmet o equivalente)
  - Hecho con pre-render en el build y `src/app/seo.ts`. Pendiente: rutas `/en` y `/pt` con `hreflang`, imagen para compartir por case study.
- [ ] **Lazy loading de rutas** — Convertir imports de páginas a `React.lazy()` + `<Suspense>` para reducir bundle inicial
- [ ] **Optimización de imágenes** — Convertir PNGs en `src/imports/` a WebP/AVIF con `sharp-cli` (ya instalado)

### Media prioridad
- [x] **404 page** — Agregar ruta `*` con página de error personalizada en `routes.tsx`
- [ ] **Scroll progress indicator** — Barra de progreso en case studies largos (Neobank, Portal Créditos)
- [ ] **Transiciones entre rutas** — Animación de fade/slide al navegar entre páginas con Motion
- [ ] **Preloader / skeleton** — Estados de carga para imágenes pesadas en case studies
- [ ] **Formulario de contacto funcional** — Conectar el form con un servicio (Resend, Formspree, EmailJS)
- [ ] **Dark mode** — Preparar tokens en `theme.css` para modo oscuro (next-themes ya instalado)

### Baja prioridad / Mejoras futuras
- [x] **Sitemap.xml** — Creado a mano en `public/sitemap.xml` (actualizar al agregar rutas)
- [x] **robots.txt** — Configurar correctamente para indexación
- [ ] **PWA / manifest.json** — Para instalabilidad en mobile
- [ ] **Test del bundle** — Analizar con `vite-bundle-visualizer` qué pesa más
- [ ] **Refactor i18n** — Evaluar mover traducciones a archivos JSON separados si el sitio crece
- [ ] **Testimoniales dinámicos** — Cargar desde JSON externo o CMS headless
- [ ] **Filtro de proyectos** — Tabs por categoría (Fintech, IA, UX Research) en la grilla de proyectos

---

## Notas importantes

- `node_modules/` dejó de versionarse en octubre de 2026, pero sigue en el historial de git (el repo sigue pesando)
- En Windows, habilitar long paths con: `git config --global core.longpaths true`
- `__figma__entrypoint__.ts` es el punto de entrada para Figma Make — no modificar
- `.figma/` contiene configuración de la integración Figma Make — no versionar datos sensibles
- `src/imports/` contiene componentes auto-generados desde Figma — tratar como "vendor", no editar
