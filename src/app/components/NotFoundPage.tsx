import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

interface NotFoundPageProps {
  language?: 'es' | 'en' | 'pt';
}

const translations = {
  es: {
    backButton: 'Volver',
    title: 'Esta página no existe',
    message: 'Puede que el enlace esté roto o que la página se haya movido.',
    cta: 'Ir al inicio',
  },
  en: {
    backButton: 'Back',
    title: "This page doesn't exist",
    message: 'The link may be broken or the page may have moved.',
    cta: 'Go to homepage',
  },
  pt: {
    backButton: 'Voltar',
    title: 'Esta página não existe',
    message: 'O link pode estar quebrado ou a página pode ter sido movida.',
    cta: 'Ir para o início',
  },
};

export function NotFoundPage({ language = 'es' }: NotFoundPageProps) {
  const t = translations[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-700 hover:text-orange-500 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>{t.backButton}</span>
          </Link>
        </div>
      </nav>

      {/* 404 Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-orange-50 via-rose-50 to-purple-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-8xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
            404
          </p>

          <h1 className="text-4xl md:text-5xl mb-6 text-gray-900">
            {t.title}
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            {t.message}
          </p>

          <Link
            to="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-rose-500 hover:shadow-xl text-white rounded-full text-lg font-medium transition-all duration-300 shadow-lg shadow-orange-500/30"
          >
            {t.cta}
          </Link>
        </div>
      </section>
    </div>
  );
}
