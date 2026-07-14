import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router';
import { Footer } from './Footer';
import screenshotHome from '../assets/design-system/screenshot-home.png';
import tokenArchitectureImage from '../assets/design-system/token-architecture.png';
import brandBoardImage from '../assets/design-system/brand-board.webp';

interface DesignSystemPageProps {
  language?: 'es' | 'en' | 'pt';
}

const LIVE_URL = 'https://design-system-aurea-gestion.vercel.app/';
const ARTICLE_URL = 'https://libeparedes.substack.com/p/design-system-en-7-dias-de-un-prompt';

// Datos del sistema (no se traducen: hex, nombres de tokens y componentes)
const palette = [
  { token: '--global-gold', hex: '#9e7f3a' },
  { token: '--global-gold-light', hex: '#c9a84c' },
  { token: '--global-gold-dark', hex: '#7a5f28' },
  { token: '--global-ink', hex: '#1c1a17' },
  { token: '--global-ink-muted', hex: '#6b665c' },
  { token: '--global-cream', hex: '#faf8f4' },
  { token: '--feedback-success', hex: '#27ae60' },
  { token: '--feedback-warning', hex: '#f39c12' },
  { token: '--feedback-danger', hex: '#c0392b' }
];

const componentGroups = [
  {
    key: 'atoms',
    items: ['Button', 'Link', 'Input', 'Dropdown', 'Textarea', 'Switch', 'Checkbox Group', 'Radio Group', 'File Upload', 'Stepper', 'Iconografía']
  },
  {
    key: 'molecules',
    items: ['Card', 'Nav Link', 'Profile Card']
  },
  {
    key: 'organisms',
    items: ['Header', 'Footer', 'Data Table', 'Dialog', 'Snackbar']
  }
];

const translations = {
  es: {
    backButton: 'Volver al Portfolio',
    hero: {
      title: 'Áurea Design System',
      subtitle: 'De un repositorio vacío a un design system en código — con identidad de marca, arquitectura de tokens, 19 componentes accesibles (WCAG AA) y documentación de handoff — en un sprint de 7 días usando Claude Code como "junior de alta performance".',
      tags: ['Design Systems', 'Design Engineering', 'AI'],
      type: 'Rol',
      typeName: 'Design Engineer',
      market: 'Stack',
      marketName: 'Lit 3 · TypeScript · Vite',
      year: 'Año',
      yearValue: '2026',
      duration: 'Duración',
      durationTime: '7 días',
      liveButton: 'Ver el sistema en vivo',
      articleButton: 'Leer el proceso en Substack',
      imageCaption: 'Documentación en vivo del sistema: styleguide navegable con tokens, componentes y demos.'
    },
    challenge: {
      title: 'El Desafío',
      p1: '¿Se puede construir un design system escalable, con accesibilidad AA verificada y documentación profesional, en una sola semana? Siete días antes de este proyecto hubiera dicho que no.',
      p2: 'Áurea Gestión es una plataforma de gestión financiera que necesitaba una identidad sólida y una librería de componentes lista para producto: formularios de registro multi-step, tablas de datos densas y patrones de feedback. El experimento: asumir el rol de Design Engineer y construirlo todo directamente en código, con la IA ejecutando y yo auditando cada decisión.',
      highlight: 'La regla del sprint: la IA construye, el designer decide. Cada componente generado pasó por auditoría de contraste, consistencia visual y criterio de arquitectura antes de entrar al sistema.'
    },
    brand: {
      title: 'La Identidad de Marca',
      description: 'Un sector financiero saturado de azules corporativos pedía otra cosa: una paleta dorada sobre superficies cream que transmite confianza y calidad premium, con un fénix como símbolo. Cada color se definió como token con su ratio de contraste documentado.',
      boardCaption: 'Propuesta de identidad de marca: logo en versiones positiva y negativa, paleta, tipografía y primeros componentes de datos, diálogo y registro.',
      paletteTitle: 'Paleta de colores (tokens globales)',
      typographyTitle: 'Tipografía',
      typography: [
        { font: 'Inter', role: 'Títulos y display' },
        { font: 'Plus Jakarta Sans', role: 'Cuerpo de texto y UI' },
        { font: 'Roboto Mono', role: 'Datos financieros y tablas' }
      ],
      principlesTitle: 'Principios',
      principles: ['Confiable', 'Moderna', 'Escalable']
    },
    tokens: {
      title: 'Arquitectura de Tokens en 3 Capas',
      description: 'Antes de escribir un solo componente, definí la estructura de tokens: Global (valores primitivos), Semántico (significado) y Componente (aplicación específica). Esta base es lo que evita que la IA "alucine" estilos: cada decisión visual se deriva matemáticamente de la capa anterior.',
      layers: [
        { name: 'Global', detail: 'Valores primitivos: hex, escalas de espaciado 8pt, tipografías' },
        { name: 'Semántico', detail: 'Significado: acción, superficie, texto, feedback' },
        { name: 'Componente', detail: 'Aplicación específica: botón, input, tabla' }
      ],
      imageCaption: 'Styleguide real del sistema: cada swatch copia su variable CSS al portapapeles e indica su ratio de contraste AA.'
    },
    sprint: {
      title: 'La Bitácora del Sprint',
      days: [
        {
          period: 'Días 1–2',
          title: 'Arquitectura de Tokens',
          description: 'Diseño de la estructura en 3 capas y stack "inmortal": Web Components con Lit 3 para que el sistema funcione en React, Vue, Angular o HTML puro sin reescrituras. Si la base está mal estructurada, la IA alucina estilos — por eso la fundación se llevó dos días completos.'
        },
        {
          period: 'Días 3–4',
          title: 'Componentes Atómicos',
          description: 'Botones, inputs, dropdowns y navegación con Shadow DOM. Aparecieron los primeros conflictos reales: configuración manual de TypeScript y errores de compilación que la IA no podía resolver sola. Criterio humano para destrabar, IA para ejecutar.'
        },
        {
          period: 'Día 5',
          title: 'El Pivote Estético',
          description: 'La primera versión se sentía industrialmente rígida. Redefiní la dirección visual hacia "Softer Tech": bordes de 8px, sombras de doble capa y elevación física. Con la IA como herramienta de prototipado en tiempo real, iterar el lenguaje visual completo tomó horas, no semanas.'
        },
        {
          period: 'Día 6',
          title: 'Organismos Complejos',
          description: 'Tablas de datos de alta densidad, formularios multi-step con file-upload, modales y snackbars. El trabajo pasó de diseñar componentes visuales a programar comportamiento. Cuando el contexto superó la capacidad del servidor (errores 500), aprendí a dividir los pedidos en segmentos manejables: dirigir la orquesta, no pedir la sinfonía entera.'
        },
        {
          period: 'Día 7',
          title: 'Auditoría & Handoff',
          description: 'Auditoría completa WCAG 2.1 AA con ratios documentados por token, limpieza de deuda técnica y documentación navegable lista para que cualquier equipo de desarrollo implemente el sistema.'
        }
      ]
    },
    system: {
      title: 'El Sistema en Componentes',
      description: 'Organizado con atomic design: 19 componentes construidos como Custom Elements (`aurea-*`), agnósticos de framework y documentados con sus variantes, estados de carga y validación.',
      groups: {
        atoms: 'Átomos',
        molecules: 'Moléculas',
        organisms: 'Organismos'
      }
    },
    philosophy: {
      title: 'El Secreto: Auditoría > Generación',
      quote: '"El valor del Design Engineer no es saber pedirle cosas a la IA, sino saber qué decirle que NO."',
      description: 'La IA genera rápido pero genera de más. Rechacé respuestas que no cumplían contraste AA, forcé consistencia en curvaturas y sombras, y me exigí poder explicar cada línea de código del sistema. El arquitecto garantiza la ingeniería y la experiencia; la IA construye la estructura.'
    },
    results: {
      title: 'Resultados',
      items: [
        { number: '19', label: 'Componentes documentados' },
        { number: '7', label: 'Días de sprint' },
        { number: 'AA', label: 'Conformidad WCAG 2.1' },
        { number: '3', label: 'Capas de tokens' }
      ],
      impactTitle: 'Aprendizajes Clave',
      impacts: [
        'Cero fricción entre diseño y código: el diseño ya existe como código, sin gap de comunicación entre Figma y navegador',
        'La consistencia matemática de los tokens garantiza coherencia en 19 componentes sin reglas manuales',
        'La documentación se genera en simultáneo con el desarrollo, no como tarea posterior',
        'Los conflictos técnicos (errores de tipado, límites de contexto) requieren criterio humano para resolverse',
        'El rol del designer evoluciona: menos carpintería técnica, más decisiones de arquitectura y garantía de calidad'
      ]
    },
    cta: {
      title: '¿Querés ver el sistema completo?',
      description: 'El design system está publicado con su documentación navegable, y el proceso detallado — errores incluidos — está en mi Substack.',
      liveButton: 'Explorar el Design System',
      articleButton: 'Leer en Substack',
      portfolioButton: 'Ver más proyectos'
    }
  },
  en: {
    backButton: 'Back to Portfolio',
    hero: {
      title: 'Áurea Design System',
      subtitle: 'From an empty repository to a design system in code — brand identity, token architecture, 19 accessible components (WCAG AA) and handoff documentation — in a 7-day sprint using Claude Code as a "high-performance junior."',
      tags: ['Design Systems', 'Design Engineering', 'AI'],
      type: 'Role',
      typeName: 'Design Engineer',
      market: 'Stack',
      marketName: 'Lit 3 · TypeScript · Vite',
      year: 'Year',
      yearValue: '2026',
      duration: 'Duration',
      durationTime: '7 days',
      liveButton: 'View the live system',
      articleButton: 'Read the process on Substack',
      imageCaption: 'Live system documentation: a navigable styleguide with tokens, components and demos.'
    },
    challenge: {
      title: 'The Challenge',
      p1: 'Can you build a scalable design system, with verified AA accessibility and professional documentation, in a single week? Seven days before this project I would have said no.',
      p2: 'Áurea Gestión is a financial management platform that needed a solid identity and a product-ready component library: multi-step registration forms, dense data tables and feedback patterns. The experiment: take on the Design Engineer role and build everything directly in code, with AI executing and me auditing every decision.',
      highlight: 'The sprint rule: AI builds, the designer decides. Every generated component went through contrast auditing, visual consistency checks and architectural judgment before entering the system.'
    },
    brand: {
      title: 'The Brand Identity',
      description: 'A financial sector saturated with corporate blues called for something else: a gold palette over cream surfaces conveying trust and premium quality, with a phoenix as its symbol. Every color was defined as a token with its contrast ratio documented.',
      boardCaption: 'Brand identity proposal: logo in positive and negative versions, palette, typography and first data, dialog and registration components.',
      paletteTitle: 'Color palette (global tokens)',
      typographyTitle: 'Typography',
      typography: [
        { font: 'Inter', role: 'Headings and display' },
        { font: 'Plus Jakarta Sans', role: 'Body text and UI' },
        { font: 'Roboto Mono', role: 'Financial data and tables' }
      ],
      principlesTitle: 'Principles',
      principles: ['Trustworthy', 'Modern', 'Scalable']
    },
    tokens: {
      title: '3-Layer Token Architecture',
      description: 'Before writing a single component, I defined the token structure: Global (primitive values), Semantic (meaning) and Component (specific application). This foundation is what keeps AI from "hallucinating" styles: every visual decision derives mathematically from the layer above.',
      layers: [
        { name: 'Global', detail: 'Primitive values: hex, 8pt spacing scales, typefaces' },
        { name: 'Semantic', detail: 'Meaning: action, surface, text, feedback' },
        { name: 'Component', detail: 'Specific application: button, input, table' }
      ],
      imageCaption: 'The system\'s real styleguide: each swatch copies its CSS variable to the clipboard and shows its AA contrast ratio.'
    },
    sprint: {
      title: 'The Sprint Log',
      days: [
        {
          period: 'Days 1–2',
          title: 'Token Architecture',
          description: 'Designed the 3-layer structure and an "immortal" stack: Web Components with Lit 3 so the system works in React, Vue, Angular or plain HTML without rewrites. If the foundation is poorly structured, AI hallucinates styles — that\'s why the foundation took two full days.'
        },
        {
          period: 'Days 3–4',
          title: 'Atomic Components',
          description: 'Buttons, inputs, dropdowns and navigation with Shadow DOM. The first real conflicts appeared: manual TypeScript configuration and compilation errors AI couldn\'t solve on its own. Human judgment to unblock, AI to execute.'
        },
        {
          period: 'Day 5',
          title: 'The Aesthetic Pivot',
          description: 'The first version felt industrially rigid. I redefined the visual direction toward "Softer Tech": 8px radii, double-layer shadows and physical elevation. With AI as a real-time prototyping tool, iterating the entire visual language took hours, not weeks.'
        },
        {
          period: 'Day 6',
          title: 'Complex Organisms',
          description: 'High-density data tables, multi-step forms with file upload, modals and snackbars. The work shifted from designing visual components to programming behavior. When context exceeded server capacity (500 errors), I learned to split requests into manageable segments: conduct the orchestra, don\'t ask for the whole symphony at once.'
        },
        {
          period: 'Day 7',
          title: 'Audit & Handoff',
          description: 'Full WCAG 2.1 AA audit with ratios documented per token, technical debt cleanup, and navigable documentation ready for any development team to implement the system.'
        }
      ]
    },
    system: {
      title: 'The System in Components',
      description: 'Organized with atomic design: 19 components built as Custom Elements (`aurea-*`), framework-agnostic and documented with their variants, loading states and validation.',
      groups: {
        atoms: 'Atoms',
        molecules: 'Molecules',
        organisms: 'Organisms'
      }
    },
    philosophy: {
      title: 'The Secret: Audit > Generation',
      quote: '"The value of the Design Engineer is not knowing what to ask of AI, but knowing what to tell it NOT to do."',
      description: 'AI generates fast but generates too much. I rejected answers that failed AA contrast, enforced consistency in radii and shadows, and held myself to explaining every line of code in the system. The architect guarantees the engineering and the experience; AI builds the structure.'
    },
    results: {
      title: 'Results',
      items: [
        { number: '19', label: 'Documented components' },
        { number: '7', label: 'Sprint days' },
        { number: 'AA', label: 'WCAG 2.1 conformance' },
        { number: '3', label: 'Token layers' }
      ],
      impactTitle: 'Key Learnings',
      impacts: [
        'Zero friction between design and code: the design already exists as code, with no communication gap between Figma and the browser',
        'Mathematical token consistency guarantees coherence across 19 components without manual rules',
        'Documentation is generated concurrently with development, not as an afterthought',
        'Technical conflicts (type errors, context limits) require human judgment to resolve',
        'The designer\'s role evolves: less technical carpentry, more architectural decisions and quality assurance'
      ]
    },
    cta: {
      title: 'Want to see the full system?',
      description: 'The design system is published with navigable documentation, and the detailed process — mistakes included — is on my Substack.',
      liveButton: 'Explore the Design System',
      articleButton: 'Read on Substack',
      portfolioButton: 'See more projects'
    }
  },
  pt: {
    backButton: 'Voltar ao Portfólio',
    hero: {
      title: 'Áurea Design System',
      subtitle: 'De um repositório vazio a um design system em código — identidade de marca, arquitetura de tokens, 19 componentes acessíveis (WCAG AA) e documentação de handoff — em um sprint de 7 dias usando Claude Code como "junior de alta performance".',
      tags: ['Design Systems', 'Design Engineering', 'AI'],
      type: 'Papel',
      typeName: 'Design Engineer',
      market: 'Stack',
      marketName: 'Lit 3 · TypeScript · Vite',
      year: 'Ano',
      yearValue: '2026',
      duration: 'Duração',
      durationTime: '7 dias',
      liveButton: 'Ver o sistema ao vivo',
      articleButton: 'Ler o processo no Substack',
      imageCaption: 'Documentação viva do sistema: styleguide navegável com tokens, componentes e demos.'
    },
    challenge: {
      title: 'O Desafio',
      p1: 'É possível construir um design system escalável, com acessibilidade AA verificada e documentação profissional, em uma única semana? Sete dias antes deste projeto eu teria dito que não.',
      p2: 'Áurea Gestión é uma plataforma de gestão financeira que precisava de uma identidade sólida e uma biblioteca de componentes pronta para produto: formulários de cadastro multi-step, tabelas de dados densas e padrões de feedback. O experimento: assumir o papel de Design Engineer e construir tudo diretamente em código, com a IA executando e eu auditando cada decisão.',
      highlight: 'A regra do sprint: a IA constrói, o designer decide. Cada componente gerado passou por auditoria de contraste, consistência visual e critério de arquitetura antes de entrar no sistema.'
    },
    brand: {
      title: 'A Identidade de Marca',
      description: 'Um setor financeiro saturado de azuis corporativos pedia outra coisa: uma paleta dourada sobre superfícies cream que transmite confiança e qualidade premium, com uma fênix como símbolo. Cada cor foi definida como token com seu ratio de contraste documentado.',
      boardCaption: 'Proposta de identidade de marca: logo em versões positiva e negativa, paleta, tipografia e primeiros componentes de dados, diálogo e cadastro.',
      paletteTitle: 'Paleta de cores (tokens globais)',
      typographyTitle: 'Tipografia',
      typography: [
        { font: 'Inter', role: 'Títulos e display' },
        { font: 'Plus Jakarta Sans', role: 'Corpo de texto e UI' },
        { font: 'Roboto Mono', role: 'Dados financeiros e tabelas' }
      ],
      principlesTitle: 'Princípios',
      principles: ['Confiável', 'Moderna', 'Escalável']
    },
    tokens: {
      title: 'Arquitetura de Tokens em 3 Camadas',
      description: 'Antes de escrever um único componente, defini a estrutura de tokens: Global (valores primitivos), Semântico (significado) e Componente (aplicação específica). Essa base é o que impede a IA de "alucinar" estilos: cada decisão visual deriva matematicamente da camada anterior.',
      layers: [
        { name: 'Global', detail: 'Valores primitivos: hex, escalas de espaçamento 8pt, tipografias' },
        { name: 'Semântico', detail: 'Significado: ação, superfície, texto, feedback' },
        { name: 'Componente', detail: 'Aplicação específica: botão, input, tabela' }
      ],
      imageCaption: 'Styleguide real do sistema: cada swatch copia sua variável CSS para a área de transferência e indica seu ratio de contraste AA.'
    },
    sprint: {
      title: 'O Diário do Sprint',
      days: [
        {
          period: 'Dias 1–2',
          title: 'Arquitetura de Tokens',
          description: 'Design da estrutura em 3 camadas e stack "imortal": Web Components com Lit 3 para que o sistema funcione em React, Vue, Angular ou HTML puro sem reescritas. Se a base está mal estruturada, a IA alucina estilos — por isso a fundação levou dois dias completos.'
        },
        {
          period: 'Dias 3–4',
          title: 'Componentes Atômicos',
          description: 'Botões, inputs, dropdowns e navegação com Shadow DOM. Surgiram os primeiros conflitos reais: configuração manual de TypeScript e erros de compilação que a IA não conseguia resolver sozinha. Critério humano para destravar, IA para executar.'
        },
        {
          period: 'Dia 5',
          title: 'O Pivô Estético',
          description: 'A primeira versão parecia industrialmente rígida. Redefini a direção visual para "Softer Tech": bordas de 8px, sombras de dupla camada e elevação física. Com a IA como ferramenta de prototipagem em tempo real, iterar toda a linguagem visual levou horas, não semanas.'
        },
        {
          period: 'Dia 6',
          title: 'Organismos Complexos',
          description: 'Tabelas de dados de alta densidade, formulários multi-step com file-upload, modais e snackbars. O trabalho passou de desenhar componentes visuais a programar comportamento. Quando o contexto superou a capacidade do servidor (erros 500), aprendi a dividir os pedidos em segmentos gerenciáveis: reger a orquestra, não pedir a sinfonia inteira.'
        },
        {
          period: 'Dia 7',
          title: 'Auditoria & Handoff',
          description: 'Auditoria completa WCAG 2.1 AA com ratios documentados por token, limpeza de dívida técnica e documentação navegável pronta para qualquer equipe de desenvolvimento implementar o sistema.'
        }
      ]
    },
    system: {
      title: 'O Sistema em Componentes',
      description: 'Organizado com atomic design: 19 componentes construídos como Custom Elements (`aurea-*`), agnósticos de framework e documentados com suas variantes, estados de carregamento e validação.',
      groups: {
        atoms: 'Átomos',
        molecules: 'Moléculas',
        organisms: 'Organismos'
      }
    },
    philosophy: {
      title: 'O Segredo: Auditoria > Geração',
      quote: '"O valor do Design Engineer não é saber pedir coisas à IA, mas saber o que dizer para ela NÃO fazer."',
      description: 'A IA gera rápido mas gera demais. Rejeitei respostas que não cumpriam contraste AA, forcei consistência em curvaturas e sombras, e me exigi poder explicar cada linha de código do sistema. O arquiteto garante a engenharia e a experiência; a IA constrói a estrutura.'
    },
    results: {
      title: 'Resultados',
      items: [
        { number: '19', label: 'Componentes documentados' },
        { number: '7', label: 'Dias de sprint' },
        { number: 'AA', label: 'Conformidade WCAG 2.1' },
        { number: '3', label: 'Camadas de tokens' }
      ],
      impactTitle: 'Aprendizados-Chave',
      impacts: [
        'Zero fricção entre design e código: o design já existe como código, sem gap de comunicação entre Figma e navegador',
        'A consistência matemática dos tokens garante coerência em 19 componentes sem regras manuais',
        'A documentação é gerada simultaneamente ao desenvolvimento, não como tarefa posterior',
        'Conflitos técnicos (erros de tipagem, limites de contexto) requerem critério humano para resolução',
        'O papel do designer evolui: menos carpintaria técnica, mais decisões de arquitetura e garantia de qualidade'
      ]
    },
    cta: {
      title: 'Quer ver o sistema completo?',
      description: 'O design system está publicado com sua documentação navegável, e o processo detalhado — erros incluídos — está no meu Substack.',
      liveButton: 'Explorar o Design System',
      articleButton: 'Ler no Substack',
      portfolioButton: 'Ver mais projetos'
    }
  }
};

export function DesignSystemPage({ language = 'es' }: DesignSystemPageProps) {
  const navigate = useNavigate();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-700 hover:text-orange-500 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>{t.backButton}</span>
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {t.hero.tags.map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">{tag}</span>
                ))}
              </div>

              <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-gray-900">
                {t.hero.title}
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t.hero.subtitle}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-sm text-gray-500 mb-1">{t.hero.type}</p>
                  <p className="text-gray-900 font-medium">{t.hero.typeName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">{t.hero.market}</p>
                  <p className="text-gray-900 font-medium">{t.hero.marketName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">{t.hero.year}</p>
                  <p className="text-gray-900 font-medium">{t.hero.yearValue}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">{t.hero.duration}</p>
                  <p className="text-gray-900 font-medium">{t.hero.durationTime}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={LIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30"
                >
                  {t.hero.liveButton}
                  <ExternalLink size={16} />
                </a>
                <a
                  href={ARTICLE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-orange-500 text-orange-600 rounded-full hover:bg-orange-50 transition-colors"
                >
                  {t.hero.articleButton}
                </a>
              </div>
            </div>

            <figure>
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <img
                  src={screenshotHome}
                  alt="Áurea Gestión Design System — documentación en vivo"
                  className="w-full h-auto"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-3 text-center">{t.hero.imageCaption}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">{t.challenge.title}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">{t.challenge.p1}</p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">{t.challenge.p2}</p>
          <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-xl p-6">
            <p className="text-gray-800 leading-relaxed font-medium">{t.challenge.highlight}</p>
          </div>
        </div>
      </section>

      {/* Brand identity */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">{t.brand.title}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-10 max-w-3xl">{t.brand.description}</p>

          <figure className="mb-12">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <img
                src={brandBoardImage}
                alt="Propuesta de identidad de marca de Áurea Gestión"
                className="w-full h-auto"
              />
            </div>
            <figcaption className="text-sm text-gray-500 mt-3 text-center">{t.brand.boardCaption}</figcaption>
          </figure>

          <h3 className="text-xl font-semibold text-gray-900 mb-6">{t.brand.paletteTitle}</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-9 gap-3 mb-12">
            {palette.map((color) => (
              <div key={color.token} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="h-16" style={{ backgroundColor: color.hex }} />
                <div className="p-2">
                  <p className="text-[10px] font-mono text-gray-500 truncate" title={color.token}>{color.token}</p>
                  <p className="text-xs font-mono text-gray-900">{color.hex}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">{t.brand.typographyTitle}</h3>
              <div className="grid gap-3">
                {t.brand.typography.map((item) => (
                  <div key={item.font} className="bg-white rounded-xl p-4 border border-gray-100 flex items-baseline justify-between gap-4">
                    <p className="text-gray-900 font-medium">{item.font}</p>
                    <p className="text-sm text-gray-500 text-right">{item.role}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">{t.brand.principlesTitle}</h3>
              <div className="flex flex-wrap gap-3">
                {t.brand.principles.map((principle) => (
                  <span key={principle} className="px-5 py-3 bg-white border border-gray-100 shadow-sm rounded-full text-gray-800 font-medium">
                    {principle}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Token architecture */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">{t.tokens.title}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-10 max-w-3xl">{t.tokens.description}</p>

          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {t.tokens.layers.map((layer, i) => (
              <div key={layer.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className={`w-3 h-3 rounded-full mb-4 ${i === 0 ? 'bg-orange-400' : i === 1 ? 'bg-rose-400' : 'bg-purple-400'}`} />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{layer.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{layer.detail}</p>
              </div>
            ))}
          </div>

          <figure>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <img
                src={tokenArchitectureImage}
                alt="Styleguide de tokens del sistema Áurea"
                className="w-full h-auto"
              />
            </div>
            <figcaption className="text-sm text-gray-500 mt-3 text-center">{t.tokens.imageCaption}</figcaption>
          </figure>
        </div>
      </section>

      {/* Sprint timeline */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12 text-gray-900">{t.sprint.title}</h2>
          <div className="grid gap-8">
            {t.sprint.days.map((day, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-500 text-white text-lg font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <p className="text-sm text-orange-500 font-medium mb-1">{day.period}</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{day.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{day.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Component inventory */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">{t.system.title}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-10 max-w-3xl">{t.system.description}</p>

          <div className="grid md:grid-cols-3 gap-6">
            {componentGroups.map((group) => (
              <div key={group.key} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t.system.groups[group.key as keyof typeof t.system.groups]}
                  <span className="ml-2 text-sm font-normal text-gray-500">({group.items.length})</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="px-3 py-1.5 bg-white rounded-full text-sm text-gray-700 border border-gray-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy quote */}
      <section className="py-16 px-6 bg-gradient-to-br from-orange-50 to-rose-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl mb-8 text-gray-900">{t.philosophy.title}</h2>
          <blockquote className="text-2xl md:text-3xl font-semibold text-orange-600 leading-snug mb-6 italic">
            {t.philosophy.quote}
          </blockquote>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">{t.philosophy.description}</p>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-6 bg-gradient-to-br from-orange-50 via-rose-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12 text-gray-900">{t.results.title}</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {t.results.items.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <p className="text-4xl font-bold text-orange-500 mb-2">{item.number}</p>
                <p className="text-gray-600 text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t.results.impactTitle}</h3>
          <div className="grid gap-4">
            {t.results.impacts.map((impact, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">{impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">{t.cta.title}</h2>
          <p className="text-lg text-gray-600 mb-8">{t.cta.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30"
            >
              {t.cta.liveButton}
              <ExternalLink size={16} />
            </a>
            <a
              href={ARTICLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-orange-500 text-orange-600 rounded-full hover:bg-orange-50 transition-colors"
            >
              {t.cta.articleButton}
            </a>
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors"
            >
              {t.cta.portfolioButton}
            </button>
          </div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
}
