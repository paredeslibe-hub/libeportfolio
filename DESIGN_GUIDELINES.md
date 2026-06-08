# Design Guidelines — Libe Paredes Portfolio

Documento de referencia para implementar el sistema de diseño del portfolio en nuevos proyectos, páginas o componentes.

---

## 1. Identidad de Marca

**Nombre:** Libe Paredes  
**Tagline:** Product Designer · UX UI  
**Logotipo textual:** `Libe` + punto naranja + `Designer` → `Libe.Designer`  
**Personalidad:** Creativa, estratégica, profesional, cercana. Especializada en Fintech e IA aplicada.  
**Mercados:** Latam / Remote — Brasil, USA, México, Chile.

---

## 2. Tipografía

### Fuente principal

| Uso | Familia | Peso |
|-----|---------|------|
| Todo el sitio | **Poppins** (Google Fonts) | 300, 400, 500, 600, 700 |

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
}
```

### Jerarquía tipográfica

| Elemento | Tailwind | Peso |
|----------|----------|------|
| Display / Hero heading | `text-5xl` o `text-6xl` | `font-bold` |
| Sección title | `text-3xl` o `text-4xl` | `font-bold` |
| Subtítulo de sección | `text-lg` o `text-xl` | `font-medium` |
| Body / párrafo | `text-base` | `font-normal` |
| Label / caption | `text-sm` | `font-medium` |
| Micro / tag | `text-xs` | `font-medium` |

### Estilos de heading base

```css
h1 { font-size: var(--text-2xl); font-weight: 500; line-height: 1.5; }
h2 { font-size: var(--text-xl);  font-weight: 500; line-height: 1.5; }
h3 { font-size: var(--text-lg);  font-weight: 500; line-height: 1.5; }
h4 { font-size: var(--text-base); font-weight: 500; line-height: 1.5; }
```

---

## 3. Paleta de Colores

### Colores principales (usados directamente con Tailwind)

| Rol | Clase Tailwind | Valor hex / descripción |
|-----|---------------|-------------------------|
| Naranja principal | `text-orange-500` / `bg-orange-500` | `#f97316` — acento de marca |
| Naranja hover | `hover:bg-orange-600` | `#ea6c0a` |
| Naranja claro (fondo) | `bg-orange-50` | Secciones hero y fondos suaves |
| Rosa suave (fondo) | `bg-rose-50` | Combinado con naranja en gradientes |
| Púrpura suave (fondo) | `bg-purple-50` | Tercer tono en gradientes de fondo |
| Gris oscuro texto | `text-gray-900` | Títulos y texto principal |
| Gris medio texto | `text-gray-600` | Párrafos y descripciones |
| Gris claro | `text-gray-400` | Placeholders, metadatos |
| Blanco | `bg-white` | Fondo base del sitio |
| Negro suave | `text-gray-800` | Texto alternativo en modo claro |

### Gradientes recurrentes

```
/* Hero / secciones de fondo */
bg-gradient-to-br from-orange-50 via-rose-50 to-purple-50

/* Tarjetas de servicio */
from-orange-400 to-rose-400      /* Landing pages */
from-purple-400 to-pink-400      /* Sitios web */
from-blue-400 to-cyan-400        /* Estrategia */
from-green-400 to-emerald-400    /* Presencia digital */
from-rose-400 to-orange-400      /* Social media */
from-indigo-400 to-purple-400    /* Web apps */

/* Botón CTA principal */
bg-gradient-to-r from-orange-500 to-rose-500
hover:from-orange-600 hover:to-rose-600

/* Testimoniales */
bg-gradient-to-br from-orange-50 to-rose-50
```

### Tokens de diseño (theme.css)

```css
:root {
  --background: #ffffff;
  --foreground: oklch(0.145 0 0);   /* ~#1a1a1a */
  --card: #ffffff;
  --card-foreground: oklch(0.145 0 0);
  --primary: #030213;
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.95 0.0058 264.53);
  --muted: #ececf0;
  --muted-foreground: #717182;
  --accent: #e9ebef;
  --accent-foreground: #030213;
  --border: rgba(0, 0, 0, 0.1);
  --radius: 0.625rem;
}
```

---

## 4. Espaciado y Layout

### Contenedor máximo

```
max-w-6xl mx-auto px-6
```

Todas las secciones usan este contenedor para consistencia horizontal.

### Padding de secciones

| Sección | Clase |
|---------|-------|
| Hero | `pt-32 pb-20 px-6` |
| Secciones internas | `py-20 px-6` |
| Secciones alternadas | `py-16 px-6` |
| Footer | `py-12 px-6` |

### Grid de proyectos

```
grid grid-cols-1 md:grid-cols-2 gap-8
```

### Grid de servicios (LP negocios)

```
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
```

### Grid de habilidades

```
grid grid-cols-1 md:grid-cols-3 gap-8
```

---

## 5. Componentes de UI

### Botón CTA Principal

```jsx
<button className="bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2">
  Texto del botón
  <ArrowRight size={20} />
</button>
```

### Botón Secundario (outline)

```jsx
<button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-2">
  Texto del botón
</button>
```

### Tag / Badge de categoría

```jsx
<span className="bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
  Fintech
</span>
```

### Tarjeta de proyecto

```jsx
<div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
  {/* imagen */}
  <div className="p-6">
    <span className="tag">Categoría</span>
    <h3 className="text-xl font-semibold text-gray-900 mt-2">Título</h3>
    <p className="text-gray-600 text-sm mt-2">Descripción</p>
    <div className="flex gap-2 mt-4 flex-wrap">
      {/* tags */}
    </div>
  </div>
</div>
```

### Tarjeta de servicio

```jsx
<div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white mb-6`}>
    {service.icon}
  </div>
  <h3 className="text-2xl mb-3 text-gray-900">{service.title}</h3>
  <p className="text-gray-600 mb-6">{service.description}</p>
  {/* lista de beneficios con CheckCircle */}
</div>
```

### Navegación (nav fija)

```jsx
<nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200/50 z-50">
  <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
    {/* logo + links + selector idioma */}
  </div>
</nav>
```

### Selector de idioma

Botones de texto con subrayado activo naranja:

```jsx
<button className={`text-sm font-medium transition-colors ${activeLanguage === lang ? 'text-orange-500 underline' : 'text-gray-600 hover:text-gray-900'}`}>
  ES
</button>
```

---

## 6. Border Radius

| Elemento | Clase |
|----------|-------|
| Tarjetas grandes | `rounded-2xl` |
| Iconos / avatares pequeños | `rounded-xl` |
| Botones pill / tags | `rounded-full` |
| Inputs de formulario | `rounded-xl` |
| Imágenes de perfil | `rounded-full` |

---

## 7. Sombras

| Estado | Clase |
|--------|-------|
| Reposo | `shadow-sm` o sin sombra |
| Hover | `hover:shadow-xl` |
| Fijo elevado (nav) | `backdrop-blur-md border-b border-gray-200/50` |

---

## 8. Animaciones y Transiciones

### Hover lift en tarjetas

```
transition-all duration-300 hover:-translate-y-2
```

### Hover lift sutil (servicios)

```
transition-all duration-300 hover:-translate-y-1
```

### Botón escala

```
hover:scale-105
```

### Fade in up (entrada de sección)

```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fadeInUp { animation: fadeInUp 0.6s ease-out; }
```

### Typing cursor (hero)

```jsx
<motion.span
  animate={{ opacity: [1, 0] }}
  transition={{ duration: 0.5, repeat: Infinity }}
  className="inline-block w-0.5 h-[1em] bg-current ml-1"
/>
```

### Blur orbs decorativos (hero backgrounds)

```jsx
<div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
<div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }} />
```

---

## 9. Iconografía

Librería: **lucide-react**

Iconos usados frecuentemente:

| Contexto | Icono |
|----------|-------|
| Navegación hamburguesa | `Menu`, `X` |
| Idioma | `Globe` |
| Agendar | `Calendar` |
| Info / consultoría | `Info` |
| Hecho / beneficio | `CheckCircle`, `CheckCircle2` |
| Flecha / CTA | `ArrowRight`, `ArrowLeft` |
| Objetivos | `Target` |
| Usuarios | `Users` |
| Tendencias | `TrendingUp` |
| Destellos / AI | `Sparkles` |
| Código | `Code` |
| Energía | `Zap` |
| Social | `Linkedin`, `Instagram` |
| Envío | `Send` |
| Mensaje | `MessageCircle` |
| Iluminación | `Lightbulb` |

Tamaño estándar en tarjeta icono: `w-8 h-8`  
Tamaño en lista: `size={18}` con `flex-shrink-0 mt-0.5`

---

## 10. Formularios

### Input estándar

```jsx
<input
  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
/>
```

### Textarea

```jsx
<textarea
  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
  rows={4}
/>
```

### Label

```jsx
<label className="block text-sm font-medium text-gray-700 mb-2">
  Nombre del negocio *
</label>
```

---

## 11. Estructura de Rutas

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | `Portfolio` | Portfolio principal |
| `/consulting` | `ConsultingPage` | Consultoría UX detallada |
| `/negocios` | `LeadCaptureLP` | Landing page de captación |
| `/neobank` | `NeobankPage` | Case study Neobank |
| `/portal-creditos` | `PortalCreditosPage` | Case study Portal de Créditos |
| `/pets-app` | `PetsAppPage` | Case study Wallet Pets App |
| `/coming-soon` | `ComingSoonPage` | Proyectos próximos |

---

## 12. Internacionalización

Idiomas soportados: **Español (es) · English (en) · Português (pt)**

Patrón de implementación: objeto `translations` local en cada componente.

```ts
const translations = {
  es: { /* ... */ },
  en: { /* ... */ },
  pt: { /* ... */ }
};

// Uso
const t = translations[language];
```

El selector de idioma vive en la navegación principal del `Portfolio.tsx`.

---

## 13. Información de Contacto y Links Externos

| Canal | Dato |
|-------|------|
| Email | paredeslibe@gmail.com |
| Calendly | https://calendly.com/paredeslibe/ |
| Logotipo textual | `Libe.Designer` (punto naranja en medio) |

---

## 14. Secciones del Portfolio Principal

1. **NewHero** — Video de fondo + foto de perfil + typing animation
2. **AboutMe** — Descripción personal, +6 años experiencia, especialización IA / Fintech
3. **Proyectos** — Grid con 4 tarjetas (Neobank, AI App, Portal Créditos, Pets App)
4. **Consultoría UX** — Banner con features + botones Agendar / Ver más
5. **Proceso** — 5 pasos del proceso de diseño
6. **Habilidades** — Categorías organizadas (UX Research, UI Design, Tools, etc.)
7. **Testimoniales** — 3 referencias reales con degradado naranja suave
8. **Footer** — Contacto + redes + copyright

---

## 15. Principios de Diseño

- **Minimalista pero cálido** — Mucho espacio en blanco, acentos naranjas puntuales.
- **Naranja como energía** — No abuses del naranja; úsalo en CTAs, puntos de énfasis, bordes de focus.
- **Redondeo generoso** — `rounded-2xl` y `rounded-full` predominan. Sin esquinas rectas.
- **Hover siempre presente** — Toda tarjeta o botón interactivo tiene feedback visual de hover.
- **Gradientes sutiles en fondos** — Solo en secciones hero/testimoniales, no en todo.
- **Sin bordes pesados** — Usar `border border-gray-200` o `border-b border-gray-200/50`, nunca `border-2` salvo en botones outline.
- **Tipografía consistente** — Solo Poppins. Sin mezclar familias.
