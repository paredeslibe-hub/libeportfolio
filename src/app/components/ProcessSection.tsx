import { Lightbulb, Search, Pencil, TestTube, Rocket } from 'lucide-react';

const translations = {
  es: {
    title: 'Mi proceso de diseño',
    subtitle: 'Mi enfoque centrado en el usuario, combinando estrategia y necesidades del negocio, integrando metodologías según cada proyecto. No es un proceso lineal, se adecua dependiendo cada problema.',
    steps: [
      {
        icon: Search,
        title: 'Research',
        description: 'Investigación profunda de usuarios, mercado y competencia para entender el problema',
        color: 'bg-orange-100 text-orange-600'
      },
      {
        icon: Lightbulb,
        title: 'Ideación',
        description: 'Brainstorming y generación de conceptos creativos basados en insights',
        color: 'bg-amber-100 text-amber-600'
      },
      {
        icon: Pencil,
        title: 'Diseño',
        description: 'Creación de wireframes, prototipos y diseños de alta fidelidad iterativos',
        color: 'bg-rose-100 text-rose-600'
      },
      {
        icon: TestTube,
        title: 'Testing',
        description: 'Validación con usuarios reales y refinamiento basado en feedback',
        color: 'bg-emerald-100 text-emerald-600'
      },
      {
        icon: Rocket,
        title: 'Entrega',
        description: 'Handoff a desarrollo con documentación completa y seguimiento',
        color: 'bg-orange-100 text-orange-600'
      }
    ]
  },
  en: {
    title: 'My design process',
    subtitle: 'My user-centered approach, combining strategy and business needs, integrating methodologies according to each project. It\'s not a linear process, it adapts depending on each problem.',
    steps: [
      {
        icon: Search,
        title: 'Research',
        description: 'Deep investigation of users, market and competition to understand the problem',
        color: 'bg-orange-100 text-orange-600'
      },
      {
        icon: Lightbulb,
        title: 'Ideation',
        description: 'Brainstorming and generation of creative concepts based on insights',
        color: 'bg-amber-100 text-amber-600'
      },
      {
        icon: Pencil,
        title: 'Design',
        description: 'Creation of wireframes, prototypes and iterative high-fidelity designs',
        color: 'bg-rose-100 text-rose-600'
      },
      {
        icon: TestTube,
        title: 'Testing',
        description: 'Validation with real users and refinement based on feedback',
        color: 'bg-emerald-100 text-emerald-600'
      },
      {
        icon: Rocket,
        title: 'Delivery',
        description: 'Handoff to development with complete documentation and follow-up',
        color: 'bg-orange-100 text-orange-600'
      }
    ]
  },
  pt: {
    title: 'Meu processo de design',
    subtitle: 'Minha abordagem centrada no usuário, combinando estratégia e necessidades do negócio, integrando metodologias de acordo com cada projeto. Não é um processo linear, adapta-se dependendo de cada problema.',
    steps: [
      {
        icon: Search,
        title: 'Research',
        description: 'Investigação profunda de usuários, mercado e concorrência para entender o problema',
        color: 'bg-orange-100 text-orange-600'
      },
      {
        icon: Lightbulb,
        title: 'Ideação',
        description: 'Brainstorming e geração de conceitos criativos baseados em insights',
        color: 'bg-amber-100 text-amber-600'
      },
      {
        icon: Pencil,
        title: 'Design',
        description: 'Criação de wireframes, protótipos e designs de alta fidelidade iterativos',
        color: 'bg-rose-100 text-rose-600'
      },
      {
        icon: TestTube,
        title: 'Testing',
        description: 'Validação com usuários reais e refinamento baseado em feedback',
        color: 'bg-emerald-100 text-emerald-600'
      },
      {
        icon: Rocket,
        title: 'Entrega',
        description: 'Handoff para desenvolvimento com documentação completa e acompanhamento',
        color: 'bg-orange-100 text-orange-600'
      }
    ]
  }
};

export function ProcessSection({ language = 'es' }: { language?: 'es' | 'en' | 'pt' }) {
  const t = translations[language];
  
  return (
    <section className="py-24 px-6 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {t.steps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-14 h-14 rounded-xl ${step.color} flex items-center justify-center mb-4`}>
                  <Icon size={24} />
                </div>
                
                <h3 className="text-xl mb-3 text-gray-900">
                  {step.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}