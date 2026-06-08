import { ArrowLeft, Wrench } from 'lucide-react';
import { useNavigate } from 'react-router';

interface ComingSoonPageProps {
  projectTitle: string;
  projectCategory: string;
  language?: 'es' | 'en' | 'pt';
}

const translations = {
  es: {
    backButton: 'Volver al Portfolio',
    comingSoon: 'Próximamente',
    message1: 'Estoy trabajando en la documentación completa de este proyecto real.',
    message2: 'Pronto podrás ver todo el proceso de diseño, metodología y resultados.',
    viewOthers: 'Ver otros proyectos'
  },
  en: {
    backButton: 'Back to Portfolio',
    comingSoon: 'Coming Soon',
    message1: 'I\'m working on the complete documentation of this real project.',
    message2: 'Soon you\'ll be able to see the entire design process, methodology and results.',
    viewOthers: 'View other projects'
  },
  pt: {
    backButton: 'Voltar ao Portfólio',
    comingSoon: 'Em Breve',
    message1: 'Estou trabalhando na documentação completa deste projeto real.',
    message2: 'Em breve você poderá ver todo o processo de design, metodologia e resultados.',
    viewOthers: 'Ver outros projetos'
  }
};

export function ComingSoonPage({ projectTitle, projectCategory, language = 'es' }: ComingSoonPageProps) {
  const navigate = useNavigate();
  const t = translations[language];
  
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
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

      {/* Coming Soon Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Animated Icon */}
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-2xl">
              <Wrench 
                size={64} 
                className="text-white animate-construction"
                style={{ 
                  animation: 'construction 2s ease-in-out infinite',
                }}
              />
            </div>
          </div>

          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
              {projectCategory}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl mb-6 text-gray-900">
            {projectTitle}
          </h1>

          {/* Coming Soon Message */}
          <div className="mb-12">
            <p className="text-2xl md:text-3xl text-orange-500 font-semibold mb-4">
              {t.comingSoon}
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t.message1}
              <br />
              {t.message2}
            </p>
          </div>

          {/* Progress Dots */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => navigate('/')}
            className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-lg font-medium transition-colors shadow-lg shadow-orange-500/30"
          >
            {t.viewOthers}
          </button>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </section>

      <style>{`
        @keyframes construction {
          0%, 100% {
            transform: rotate(-15deg);
          }
          50% {
            transform: rotate(15deg);
          }
        }
      `}</style>
    </div>
  );
}