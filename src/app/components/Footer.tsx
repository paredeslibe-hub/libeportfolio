import svgPaths from '@/imports/Hero4/svg-qs20gkemae';
import imgHero4 from '@/imports/Hero4/8601e7a0b876b42a34fb6cb86fc5483d5b6f5ce1.png';

const translations = {
  es: {
    title: '¿Trabajamos juntos?',
    subtitle: 'Estoy disponible para proyectos freelance y colaboraciones',
    contact: 'Contáctame',
    whatsapp: 'Whatsapp',
    copyright: '2026 Portfolio de Product Design. Diseñado con pasión.'
  },
  en: {
    title: 'Let\'s work together?',
    subtitle: 'I\'m available for freelance projects and collaborations',
    contact: 'Contact me',
    whatsapp: 'Whatsapp',
    copyright: '2026 Product Design Portfolio. Designed with passion.'
  },
  pt: {
    title: 'Vamos trabalhar juntos?',
    subtitle: 'Estou disponível para projetos freelance e colaborações',
    contact: 'Contate-me',
    whatsapp: 'Whatsapp',
    copyright: '2026 Portfólio de Product Design. Projetado com paixão.'
  }
};

export function Footer({ language = 'es' }: { language?: 'es' | 'en' | 'pt' }) {
  const t = translations[language];

  return (
    <footer className="relative py-24 px-6 overflow-hidden">
      {/* Background Image */}
      <img
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src={imgHero4}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Title and Subtitle */}
        <div className="text-center mb-12 relative">
          <h3 className="text-3xl md:text-4xl mb-4 text-gray-900">
            {t.title}
          </h3>
          <p className="text-lg text-gray-700">
            {t.subtitle}
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-8 items-center mb-12 relative">
          {/* Email */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
            <div className="font-['Poppins',sans-serif] font-semibold text-2xl text-black tracking-tight">
              {t.contact}
            </div>
            <a
              href="mailto:paredeslibe@gmail.com"
              className="font-['Poppins',sans-serif] font-semibold text-2xl text-black/70 tracking-tight hover:text-black transition-colors"
            >
              paredeslibe@gmail.com
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
            <div className="font-['Poppins',sans-serif] font-semibold text-2xl text-black tracking-tight">
              {t.whatsapp}
            </div>
            <a
              href="https://wa.me/5491132914989"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Poppins',sans-serif] font-semibold text-2xl text-black/70 tracking-tight hover:text-black transition-colors"
            >
              +54 1132914989
            </a>
          </div>
        </div>

        {/* LinkedIn Icon */}
        <div className="flex justify-center">
          <a
            href="https://www.linkedin.com/in/libeparedes/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[43px] h-[43px] hover:opacity-80 transition-opacity"
          >
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 43">
              <g clipPath="url(#clip0_100_593)">
                <g>
                  <path clipRule="evenodd" d={svgPaths.p2d85e00} fill="black" fillOpacity="0.8" fillRule="evenodd" />
                  <path d={svgPaths.p21c90080} fill="white" />
                  <path d={svgPaths.p173c3b00} fill="white" />
                  <path d={svgPaths.p3b9f3000} fill="white" />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_100_593">
                  <rect fill="white" height="43" width="43" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}