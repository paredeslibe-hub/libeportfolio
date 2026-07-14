import { ArrowDown, MapPin, Briefcase } from 'lucide-react';
import profileImage from 'figma:asset/20c15569f02626c51ed29e8e698272d4f37cf8c9.png';

const translations = {
  es: {
    badges: ['Product Designer', 'Consultora UX'],
    greeting: 'Hola, soy',
    description: 'Product Designer y Consultora UX con más de 6 años de experiencia en diseño de productos digitales, UX/UI y estrategia de producto.\n\nMe especializo en Inteligencia Artificial aplicada al Product Design, integrando herramientas y flujos de trabajo basados en IA para optimizar procesos de research, ideación, prototipado y validación.\n\nTrabajo con startups y empresas ayudando a definir problemas reales, tomar mejores decisiones de producto y diseñar experiencias digitales accesibles, intuitivas y alineadas con objetivos de negocio.\n\nEstoy disponible para trabajo full-time y consultoría.',
    location: 'Latam, Remote',
    experience: '+6 años de experiencia en Producto',
    available: 'Disponible',
    viewProjects: 'Ver proyectos',
    downloadCV: 'Descargar CV'
  },
  en: {
    badges: ['Product Designer', 'UX Consultant'],
    greeting: 'Hi, I\'m',
    description: 'Product Designer and UX Consultant with over 6 years of experience in digital product design, UX/UI, and product strategy.\n\nI specialize in Artificial Intelligence applied to Product Design, integrating AI-powered tools and workflows to optimize research, ideation, prototyping, and validation processes.\n\nI work with startups and companies helping define real problems, make better product decisions, and design accessible, intuitive digital experiences aligned with business objectives.\n\nI\'m available for full-time roles and consulting.',
    location: 'Latam, Remote',
    experience: '+6 years of experience in Product',
    available: 'Available',
    viewProjects: 'View projects',
    downloadCV: 'Download CV'
  }
};

export function Hero({ language = 'es' }: { language?: 'es' | 'en' }) {
  const t = translations[language];
  
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
            
            <h1 className="text-5xl md:text-6xl mb-6 text-gray-900">
              {t.greeting}{' '}
              <span className="text-orange-500">Libe Paredes</span>
            </h1>
            
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
        
        <a href="#proyectos" className="mt-20 text-center animate-bounce block">
          <ArrowDown className="mx-auto text-gray-400" size={24} />
        </a>
      </div>
    </section>
  );
}