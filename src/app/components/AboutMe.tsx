import { MapPin, Briefcase } from 'lucide-react';
import profileImage from 'figma:asset/83e8be5bc4c6fb0e4f8e1c49b5b9630057dc999f.png';

const translations = {
  es: {
    title: 'Sobre mí',
    badges: ['Product Designer', 'Consultora UX'],
    description: 'Product Designer y Consultora UX con más de 6 años de experiencia en diseño de productos digitales, UX/UI y estrategia de producto.\n\nMe especializo en Inteligencia Artificial aplicada al Product Design, integrando herramientas y flujos de trabajo basados en IA para optimizar procesos de research, ideación, prototipado y validación.\n\nTrabajo con startups y empresas ayudando a definir problemas reales, tomar mejores decisiones de producto y diseñar experiencias digitales accesibles, intuitivas y alineadas con objetivos de negocio.\n\nEstoy disponible para trabajo full-time y consultoría.',
    location: 'Latam, Remote',
    experience: '+6 años de experiencia en Producto',
    available: 'Disponible',
    viewProjects: 'Ver proyectos'
  },
  en: {
    title: 'About Me',
    badges: ['Product Designer', 'UX Consultant'],
    description: 'Product Designer and UX Consultant with over 6 years of experience in digital product design, UX/UI, and product strategy.\n\nI specialize in Artificial Intelligence applied to Product Design, integrating AI-powered tools and workflows to optimize research, ideation, prototyping, and validation processes.\n\nI work with startups and companies helping define real problems, make better product decisions, and design accessible, intuitive digital experiences aligned with business objectives.\n\nI\'m available for full-time roles and consulting.',
    location: 'Latam, Remote',
    experience: '+6 years of experience in Product',
    available: 'Available',
    viewProjects: 'View projects'
  },
  pt: {
    title: 'Sobre mim',
    badges: ['Product Designer', 'Consultora UX'],
    description: 'Product Designer e Consultora UX com mais de 6 anos de experiência em design de produtos digitais, UX/UI e estratégia de produto.\n\nEspecializo-me em Inteligência Artificial aplicada ao Product Design, integrando ferramentas e fluxos de trabalho baseados em IA para otimizar processos de pesquisa, ideação, prototipagem e validação.\n\nTrabalho com startups e empresas ajudando a definir problemas reais, tomar melhores decisões de produto e projetar experiências digitais acessíveis, intuitivas e alinhadas com objetivos de negócio.\n\nEstou disponível para trabalho full-time e consultoria.',
    location: 'Latam, Remoto',
    experience: '+6 anos de experiência em Produto',
    available: 'Disponível',
    viewProjects: 'Ver projetos'
  }
};

export function AboutMe({ language = 'es' }: { language?: 'es' | 'en' | 'pt' }) {
  const t = translations[language];

  return (
    <section id="sobre-mi" className="py-24 px-6 bg-gradient-to-br from-orange-50 to-white relative">
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-4xl md:text-5xl mb-16 text-gray-900 text-center relative">
          {t.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center relative">
          {/* Profile Image Section */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-pink-500 rounded-3xl blur-2xl opacity-30"></div>
              <img
                src={profileImage}
                alt="Profile"
                className="relative rounded-3xl w-full aspect-square object-cover shadow-2xl bg-gradient-to-br from-orange-50 to-pink-50"
              />
              <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-700 font-medium">{t.available}</span>
              </div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="order-1 md:order-2">
            <div className="mb-6 flex flex-wrap gap-3">
              {t.badges.map((badge, index) => (
                <span key={index} className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm">
                  {badge}
                </span>
              ))}
            </div>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed whitespace-pre-line">
              {t.description}
            </p>

            <div className="flex flex-col gap-3 mb-8 text-gray-600">
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-orange-500" />
                <span>{t.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase size={20} className="text-orange-500" />
                <span>{t.experience}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#proyectos" className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30 inline-block text-center">
                {t.viewProjects}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
