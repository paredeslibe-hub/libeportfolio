import { Palette, Users, Code, Zap } from 'lucide-react';

const translations = {
  es: {
    title: 'Habilidades & Herramientas',
    subtitle: 'Experiencia integral en todo el ciclo de diseño de producto',
    skills: [
      {
        icon: Palette,
        title: 'Visual Design',
        items: ['UI Design', 'Design Systems', 'Branding', 'Tipografía']
      },
      {
        icon: Users,
        title: 'UX Research',
        items: ['User Testing', 'Personas', 'Journey Maps', 'Interviews']
      },
      {
        icon: Code,
        title: 'Herramientas',
        items: ['Figma', 'Adobe XD', 'Inteligencia Artificial', 'UX Cam']
      },
      {
        icon: Zap,
        title: 'Metodologías',
        items: ['Design Thinking', 'Agile', 'Lean UX', 'A/B Testing']
      }
    ]
  },
  en: {
    title: 'Skills & Tools',
    subtitle: 'Comprehensive experience throughout the product design lifecycle',
    skills: [
      {
        icon: Palette,
        title: 'Visual Design',
        items: ['UI Design', 'Design Systems', 'Branding', 'Typography']
      },
      {
        icon: Users,
        title: 'UX Research',
        items: ['User Testing', 'Personas', 'Journey Maps', 'Interviews']
      },
      {
        icon: Code,
        title: 'Tools',
        items: ['Figma', 'Adobe XD', 'Artificial Intelligence', 'UX Cam']
      },
      {
        icon: Zap,
        title: 'Methodologies',
        items: ['Design Thinking', 'Agile', 'Lean UX', 'A/B Testing']
      }
    ]
  },
  pt: {
    title: 'Habilidades & Ferramentas',
    subtitle: 'Experiência abrangente em todo o ciclo de design de produto',
    skills: [
      {
        icon: Palette,
        title: 'Design Visual',
        items: ['UI Design', 'Design Systems', 'Branding', 'Tipografia']
      },
      {
        icon: Users,
        title: 'UX Research',
        items: ['User Testing', 'Personas', 'Journey Maps', 'Entrevistas']
      },
      {
        icon: Code,
        title: 'Ferramentas',
        items: ['Figma', 'Adobe XD', 'Inteligência Artificial', 'UX Cam']
      },
      {
        icon: Zap,
        title: 'Metodologias',
        items: ['Design Thinking', 'Agile', 'Lean UX', 'A/B Testing']
      }
    ]
  }
};

export function SkillsSection({ language = 'es' }: { language?: 'es' | 'en' | 'pt' }) {
  const t = translations[language];
  
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600">
            {t.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {t.skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-orange-300 transition-colors">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={24} />
                </div>
                
                <h3 className="text-xl mb-4 text-gray-900">
                  {skill.title}
                </h3>
                
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}