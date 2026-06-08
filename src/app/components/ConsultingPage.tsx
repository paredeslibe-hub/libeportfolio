import { ArrowLeft, Calendar, Target, Users, CheckCircle2, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router';

const translations = {
  es: {
    back: 'Volver',
    title: 'UX Consulting para Startups y Equipos de Producto',
    subtitle: 'Claridad antes de escalar. Decisiones antes de diseñar.',
    intro: {
      question1: '¿Tu producto crece, pero algo en la experiencia no termina de funcionar?',
      question2: '¿Las métricas se estancan, los usuarios abandonan o el equipo no logra ponerse de acuerdo sobre qué priorizar?',
      answer: 'La Consultoría UX te ayuda a entender qué está pasando antes de seguir construyendo.',
      description: 'Trabajo con startups y equipos digitales que necesitan una mirada externa, estratégica y accionable para mejorar la experiencia de usuario sin perder velocidad.'
    },
    whatIs: {
      title: '¿En qué consiste la consultoría UX?',
      description: 'Es un espacio de trabajo enfocado en resolver problemas reales de producto, no en producir entregables innecesarios.',
      analyze: 'Analizamos juntos:',
      items: [
        'el estado actual del producto,',
        'el comportamiento de los usuarios,',
        'las métricas clave,',
        'y los objetivos de negocio.'
      ],
      conclusion: 'A partir de eso, identifico fricciones, oportunidades y próximos pasos claros para avanzar con foco.'
    },
    benefits: {
      title: '¿Qué podés lograr con este servicio?',
      items: [
        'Detectar por qué los usuarios abandonan o no convierten',
        'Priorizar features con criterio UX + negocio',
        'Reducir retrabajo en diseño y desarrollo',
        'Alinear a diseño, producto y desarrollo bajo una misma visión',
        'Tomar decisiones basadas en evidencia, no en suposiciones'
      ],
      quote: 'UX no se trata de "hacerlo más lindo", sino de hacerlo más efectivo.'
    },
    howIWork: {
      title: '¿Cómo trabajo?',
      description: 'Mi enfoque se adapta a metodologías ágiles y equipos en movimiento.',
      subtitle: 'Puedo acompañarte con:',
      items: [
        'análisis UX del producto o MVP',
        'research liviano (entrevistas, feedback, análisis de comportamiento)',
        'evaluación de flujos, arquitectura de información y usabilidad',
        'recomendaciones estratégicas priorizadas',
        'definición de próximos pasos claros y accionables'
      ],
      conclusion: 'Todo pensado para que puedas actuar rápido.'
    },
    initialSession: {
      title: 'Sesión inicial — Reunión de 30 minutos',
      description: 'Si no sabés por dónde empezar, esta reunión es el primer paso.',
      intro: 'En una sesión de 30 minutos:',
      items: [
        'revisamos tu contexto y desafíos,',
        'identificamos posibles problemas de experiencia,',
        'y evaluamos si la consultoría UX es lo que tu producto necesita ahora.'
      ],
      benefits: [
        'Sin compromiso.',
        'Sin venta forzada.',
        'Solo claridad.'
      ],
      cta: '👉 Reservá tu reunión de 30 minutos y empecemos a entender el problema correcto.'
    },
    forWhom: {
      title: '¿Para quién es este servicio?',
      items: [
        'Startups en etapa MVP o crecimiento',
        'Equipos de producto que necesitan foco',
        'Founders que quieren validar decisiones antes de invertir más',
        'Empresas que sienten que "algo no funciona", pero no saben qué'
      ]
    },
    ctaButtons: {
      schedule: 'Agendar reunión',
      backToPortfolio: 'Volver al Portfolio'
    }
  },
  en: {
    back: 'Back',
    title: 'UX Consulting for Startups and Product Teams',
    subtitle: 'Clarity before scaling. Decisions before designing.',
    intro: {
      question1: 'Is your product growing, but something in the experience isn\'t quite working?',
      question2: 'Are metrics stagnating, users abandoning, or is the team struggling to agree on what to prioritize?',
      answer: 'UX Consulting helps you understand what\'s happening before you keep building.',
      description: 'I work with startups and digital teams that need an external, strategic, and actionable perspective to improve user experience without losing speed.'
    },
    whatIs: {
      title: 'What does UX consulting consist of?',
      description: 'It\'s a workspace focused on solving real product problems, not producing unnecessary deliverables.',
      analyze: 'We analyze together:',
      items: [
        'the current state of the product,',
        'user behavior,',
        'key metrics,',
        'and business objectives.'
      ],
      conclusion: 'From that, I identify frictions, opportunities, and clear next steps to move forward with focus.'
    },
    benefits: {
      title: 'What can you achieve with this service?',
      items: [
        'Detect why users abandon or don\'t convert',
        'Prioritize features with UX + business criteria',
        'Reduce rework in design and development',
        'Align design, product, and development under one vision',
        'Make decisions based on evidence, not assumptions'
      ],
      quote: 'UX isn\'t about "making it prettier," it\'s about making it more effective.'
    },
    howIWork: {
      title: 'How do I work?',
      description: 'My approach adapts to agile methodologies and teams in motion.',
      subtitle: 'I can accompany you with:',
      items: [
        'UX analysis of the product or MVP',
        'lightweight research (interviews, feedback, behavior analysis)',
        'evaluation of flows, information architecture and usability',
        'prioritized strategic recommendations',
        'definition of clear and actionable next steps'
      ],
      conclusion: 'All designed so you can act quickly.'
    },
    initialSession: {
      title: 'Initial Session — 30-minute Meeting',
      description: 'If you don\'t know where to start, this meeting is the first step.',
      intro: 'In a 30-minute session:',
      items: [
        'we review your context and challenges,',
        'we identify possible experience problems,',
        'and we evaluate if UX consulting is what your product needs now.'
      ],
      benefits: [
        'No commitment.',
        'No forced sales.',
        'Just clarity.'
      ],
      cta: '👉 Book your 30-minute meeting and let\'s start understanding the right problem.'
    },
    forWhom: {
      title: 'Who is this service for?',
      items: [
        'Startups in MVP or growth stage',
        'Product teams that need focus',
        'Founders who want to validate decisions before investing more',
        'Companies that feel "something doesn\'t work," but don\'t know what'
      ]
    },
    ctaButtons: {
      schedule: 'Schedule Meeting',
      backToPortfolio: 'Back to Portfolio'
    }
  },
  pt: {
    back: 'Voltar',
    title: 'Consultoria UX para Startups e Times de Produto',
    subtitle: 'Clareza antes de escalar. Decisões antes de desenhar.',
    intro: {
      question1: 'Seu produto cresce, mas algo na experiência não funciona completamente?',
      question2: 'As métricas estão estagnadas, os usuários abandonam ou a equipe não consegue concordar sobre o que priorizar?',
      answer: 'A Consultoria UX ajuda você a entender o que está acontecendo antes de continuar construindo.',
      description: 'Trabalho com startups e times digitais que precisam de um olhar externo, estratégico e acionável para melhorar a experiência do usuário sem perder velocidade.'
    },
    whatIs: {
      title: 'No que consiste a consultoria UX?',
      description: 'É um espaço de trabalho focado em resolver problemas reais de produto, não em produzir entregáveis desnecessários.',
      analyze: 'Analisamos juntos:',
      items: [
        'o estado atual do produto,',
        'o comportamento dos usuários,',
        'as métricas-chave,',
        'e os objetivos de negócio.'
      ],
      conclusion: 'A partir disso, identifico atritos, oportunidades e próximos passos claros para avançar com foco.'
    },
    benefits: {
      title: 'O que você pode alcançar com este serviço?',
      items: [
        'Detectar por que os usuários abandonam ou não convertem',
        'Priorizar features com critério UX + negócio',
        'Reduzir retrabalho em design e desenvolvimento',
        'Alinhar design, produto e desenvolvimento sob uma mesma visão',
        'Tomar decisões baseadas em evidência, não em suposições'
      ],
      quote: 'UX não se trata de "fazer mais bonito", mas sim de fazer mais efetivo.'
    },
    howIWork: {
      title: 'Como trabalho?',
      description: 'Minha abordagem se adapta a metodologias ágeis e times em movimento.',
      subtitle: 'Posso acompanhar você com:',
      items: [
        'análise UX do produto ou MVP',
        'research leve (entrevistas, feedback, análise de comportamento)',
        'avaliação de fluxos, arquitetura de informação e usabilidade',
        'recomendações estratégicas priorizadas',
        'definição de próximos passos claros e acionáveis'
      ],
      conclusion: 'Tudo pensado para que você possa agir rápido.'
    },
    initialSession: {
      title: 'Sessão inicial — Reunião de 30 minutos',
      description: 'Se você não sabe por onde começar, esta reunião é o primeiro passo.',
      intro: 'Em uma sessão de 30 minutos:',
      items: [
        'revisamos seu contexto e desafios,',
        'identificamos possíveis problemas de experiência,',
        'e avaliamos se a consultoria UX é o que seu produto precisa agora.'
      ],
      benefits: [
        'Sem compromisso.',
        'Sem venda forçada.',
        'Apenas clareza.'
      ],
      cta: '👉 Reserve sua reunião de 30 minutos e vamos começar a entender o problema correto.'
    },
    forWhom: {
      title: 'Para quem é este serviço?',
      items: [
        'Startups em estágio MVP ou crescimento',
        'Times de produto que precisam de foco',
        'Founders que querem validar decisões antes de investir mais',
        'Empresas que sentem que "algo não funciona", mas não sabem o quê'
      ]
    },
    ctaButtons: {
      schedule: 'Agendar reunião',
      backToPortfolio: 'Voltar ao Portfólio'
    }
  }
};

interface ConsultingPageProps {
  language?: 'es' | 'en' | 'pt';
}

export function ConsultingPage({ language = 'es' }: ConsultingPageProps) {
  const navigate = useNavigate();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-700 hover:text-orange-500 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>{t.back}</span>
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl mb-6 text-gray-900">
              {t.title}
            </h1>
            <p className="text-2xl text-orange-600 font-medium">
              {t.subtitle}
            </p>
          </div>

          {/* Intro Questions */}
          <div className="mb-12 bg-gradient-to-br from-orange-50 to-rose-50 rounded-2xl p-8">
            <p className="text-xl text-gray-700 mb-4">
              {t.intro.question1}
            </p>
            <p className="text-xl text-gray-700 mb-6">
              {t.intro.question2}
            </p>
            <p className="text-xl text-gray-900 font-semibold mb-4">
              {t.intro.answer}
            </p>
            <p className="text-lg text-gray-700">
              {t.intro.description}
            </p>
          </div>

          {/* What is UX Consulting */}
          <section className="mb-12">
            <h2 className="text-3xl text-gray-900 mb-6 flex items-center gap-3">
              <Target className="text-orange-500" size={32} />
              {t.whatIs.title}
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              {t.whatIs.description}
            </p>
            <p className="text-lg text-gray-900 font-medium mb-3">
              {t.whatIs.analyze}
            </p>
            <ul className="space-y-2 mb-4">
              {t.whatIs.items.map((item, index) => (
                <li key={index} className="text-lg text-gray-700 ml-6">
                  • {item}
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700">
              {t.whatIs.conclusion}
            </p>
          </section>

          {/* Benefits */}
          <section className="mb-12 bg-white border-2 border-orange-200 rounded-2xl p-8">
            <h2 className="text-3xl text-gray-900 mb-6 flex items-center gap-3">
              <CheckCircle2 className="text-orange-500" size={32} />
              {t.benefits.title}
            </h2>
            <ul className="space-y-4 mb-6">
              {t.benefits.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xl text-gray-900 font-semibold italic">
              {t.benefits.quote}
            </p>
          </section>

          {/* How I Work */}
          <section className="mb-12">
            <h2 className="text-3xl text-gray-900 mb-6 flex items-center gap-3">
              <Lightbulb className="text-orange-500" size={32} />
              {t.howIWork.title}
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              {t.howIWork.description}
            </p>
            <p className="text-lg text-gray-900 font-medium mb-3">
              {t.howIWork.subtitle}
            </p>
            <ul className="space-y-2 mb-4">
              {t.howIWork.items.map((item, index) => (
                <li key={index} className="text-lg text-gray-700 ml-6">
                  • {item}
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 font-medium">
              {t.howIWork.conclusion}
            </p>
          </section>

          {/* Initial Session */}
          <section className="mb-12 bg-gradient-to-br from-orange-100 to-rose-100 rounded-2xl p-8">
            <h2 className="text-3xl text-gray-900 mb-4 flex items-center gap-3">
              <Calendar className="text-orange-600" size={32} />
              {t.initialSession.title}
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              {t.initialSession.description}
            </p>
            <p className="text-lg text-gray-900 font-medium mb-3">
              {t.initialSession.intro}
            </p>
            <ul className="space-y-2 mb-4">
              {t.initialSession.items.map((item, index) => (
                <li key={index} className="text-lg text-gray-700 ml-6">
                  • {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mb-4">
              {t.initialSession.benefits.map((benefit, index) => (
                <span key={index} className="text-lg text-gray-900 font-medium">
                  {benefit}
                </span>
              ))}
            </div>
            <p className="text-lg text-gray-900 font-semibold mb-6">
              {t.initialSession.cta}
            </p>
            <a
              href="https://calendly.com/paredeslibe/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30 text-lg font-medium"
            >
              <Calendar size={20} />
              {t.ctaButtons.schedule}
            </a>
          </section>

          {/* For Whom */}
          <section className="mb-12">
            <h2 className="text-3xl text-gray-900 mb-6 flex items-center gap-3">
              <Users className="text-orange-500" size={32} />
              {t.forWhom.title}
            </h2>
            <ul className="space-y-3">
              {t.forWhom.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA Footer */}
          <div className="text-center pt-8 border-t border-gray-200">
            <button
              onClick={() => navigate('/')}
              className="px-8 py-3 border-2 border-orange-500 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors inline-block text-center font-medium"
            >
              {t.ctaButtons.backToPortfolio}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
