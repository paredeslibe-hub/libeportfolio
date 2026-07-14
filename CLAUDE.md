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
│   │   ├── NeobankPage.tsx        # Case study Neobank
│   │   ├── PortalCreditosPage.tsx # Case study Portal de Créditos
│   │   ├── PetsAppPage.tsx        # Case study Pets App (Fintech)
│   │   ├── ComingSoonPage.tsx     # Placeholder para AI App
│   │   ├── figma/
│   │   │   └── ImageWithFallback.tsx
│   │   └── ui/                    # Librería shadcn/ui completa (Radix-based)
│   ├── context/
│   │   └── LanguageContext.tsx    # ES/EN/PT con localStorage persistence
│   └── utils/
│       └── analytics.ts           # initGA() con react-ga4
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
| `/proyectos/neobank` | `NeobankPage` | Activo |
| `/proyectos/consulting` | `ConsultingPage` | Activo |
| `/proyectos/ai-app` | `ComingSoonPage` | Coming soon |
| `/proyectos/portal-creditos` | `PortalCreditosPage` | Activo |
| `/proyectos/pets-app` | `PetsAppPage` | Activo |

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

- **Plataforma recomendada:** Vercel o Netlify (SPA estática)
- **Comando de build:** `pnpm build` → genera `dist/`
- El router usa `createBrowserRouter` → necesita rewrites a `index.html` en producción
- Vercel lo maneja automáticamente; en Netlify agregar `_redirects`: `/* /index.html 200`

---

## Backlog — Tareas pendientes

### Alta prioridad
- [ ] **Case study AI App** — Reemplazar `ComingSoonPage` con contenido real del proyecto IA
- [ ] **SEO meta tags** — Agregar `<title>`, `<meta description>`, Open Graph por ruta (React Helmet o equivalente)
- [ ] **Lazy loading de rutas** — Convertir imports de páginas a `React.lazy()` + `<Suspense>` para reducir bundle inicial
- [ ] **Optimización de imágenes** — Convertir PNGs en `src/imports/` a WebP/AVIF con `sharp-cli` (ya instalado)

### Media prioridad
- [ ] **404 page** — Agregar ruta `*` con página de error personalizada en `routes.tsx`
- [ ] **Scroll progress indicator** — Barra de progreso en case studies largos (Neobank, Portal Créditos)
- [ ] **Transiciones entre rutas** — Animación de fade/slide al navegar entre páginas con Motion
- [ ] **Preloader / skeleton** — Estados de carga para imágenes pesadas en case studies
- [ ] **Formulario de contacto funcional** — Conectar el form con un servicio (Resend, Formspree, EmailJS)
- [ ] **Dark mode** — Preparar tokens en `theme.css` para modo oscuro (next-themes ya instalado)

### Baja prioridad / Mejoras futuras
- [ ] **Sitemap.xml** — Generación automática para SEO
- [ ] **robots.txt** — Configurar correctamente para indexación
- [ ] **PWA / manifest.json** — Para instalabilidad en mobile
- [ ] **Test del bundle** — Analizar con `vite-bundle-visualizer` qué pesa más
- [ ] **Refactor i18n** — Evaluar mover traducciones a archivos JSON separados si el sitio crece
- [ ] **Testimoniales dinámicos** — Cargar desde JSON externo o CMS headless
- [ ] **Filtro de proyectos** — Tabs por categoría (Fintech, IA, UX Research) en la grilla de proyectos

---

## Notas importantes

- `node_modules/` está versionado en el repo remoto (no debería estarlo — hay un `.gitignore` pendiente de ajustar)
- En Windows, habilitar long paths con: `git config --global core.longpaths true`
- `__figma__entrypoint__.ts` es el punto de entrada para Figma Make — no modificar
- `.figma/` contiene configuración de la integración Figma Make — no versionar datos sensibles
- `src/imports/` contiene componentes auto-generados desde Figma — tratar como "vendor", no editar
