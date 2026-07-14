import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';
import aiAppImage from 'figma:asset/f7019a472d51216b42b239ee9fe17e184e6ab10c.png';
import flowVideo from '../../../assets/project-3/ai-app-flow-video.mp4';
import brainstormImage from '../../../assets/project-3/brainstorm.png';
import valuePropCanvasImage from '../../../assets/project-3/value-proposition-canvas.png';
import mainFlowImage from '../../../assets/project-3/flujo-principal.png';
import { Footer } from './Footer';

interface AiAppPageProps {
  language?: 'es' | 'en' | 'pt';
}

const translations = {
  es: {
    backButton: 'Volver al Portfolio',
    hero: {
      title: 'App Fintech AI',
      subtitle: 'App financiera con integración de AI que ayuda a trabajadores de aplicativos en los Estados Unidos a organizar sus finanzas con Inteligencia Artificial basada en datos reales.',
      client: 'App',
      clientName: 'Fintech AI',
      market: 'Mercado',
      marketName: 'USA',
      year: 'Año',
      yearValue: '2025',
      role: 'Rol',
      roleName: 'Product Designer',
      duration: 'Duración',
      durationTime: '6 meses'
    },
    overview: {
      title: 'Resumen del Proyecto',
      p1: 'App financiera con integración de AI que ayuda a trabajadores de aplicativos en los Estados Unidos a organizar sus finanzas con Inteligencia Artificial que da respuestas basadas en los datos reales de los usuarios.',
      p2: 'Ayudándolos a mejorar su salud financiera de manera personalizada. Desarrollar esta nueva aplicación fue un trabajo de mucha investigación en el comportamiento de uso de la herramienta de AI al interactuar con los usuarios.'
    },
    methodology: {
      title: 'Metodología',
      steps: [
        {
          title: 'Ideación',
          description: 'Partimos de un problema hacia una propuesta de valor enfocada en los puntos de dolor de los usuarios.'
        },
        {
          title: 'Definición de Hipótesis',
          description: 'Realizamos sesiones de ideación y priorización para contemplar diferentes soluciones y alinear el producto con las necesidades reales del usuario.'
        },
        {
          title: 'Propuesta de Valor',
          description: 'Construimos una propuesta clara basada en cómo la AI puede responder a dudas financieras en tiempo real y mejorar la confianza del usuario.'
        },
        {
          title: 'Flujo Hi-fi',
          description: 'Comenzamos con un flujo donde el usuario podía hablar con Aimee o simplemente hacer click en un prompt para validar las necesidades principales con usuarios reales.'
        }
      ]
    },
    assets: {
      videoTitle: 'Video del flujo en Figma',
      videoDescription: 'Presentación del prototipo interactivo en Figma con el flujo principal del usuario y la AI conversacional.'
    }
  },
  en: {
    backButton: 'Back to Portfolio',
    hero: {
      title: 'Fintech AI App',
      subtitle: 'Financial app with AI integration that helps app workers in the United States organize their finances using artificial intelligence based on real user data.',
      client: 'App',
      clientName: 'Fintech AI',
      market: 'Market',
      marketName: 'USA',
      year: 'Year',
      yearValue: '2025',
      role: 'Role',
      roleName: 'Product Designer',
      duration: 'Duration',
      durationTime: '6 months'
    },
    overview: {
      title: 'Project Overview',
      p1: 'Financial app with AI integration that helps app workers in the United States organize their finances with artificial intelligence that responds based on real user data.',
      p2: 'Helping them improve their financial health in a personalized way. Building this new app involved extensive research into AI usage behavior as users interacted with the product.'
    },
    methodology: {
      title: 'Methodology',
      steps: [
        {
          title: 'Ideation',
          description: 'We moved from a problem statement to a value proposition focused on the users’ pain points.'
        },
        {
          title: 'Hypothesis Definition',
          description: 'We ran ideation and prioritization sessions to explore different solutions and align the product with real user needs.'
        },
        {
          title: 'Value Proposition',
          description: 'We developed a clear proposition around how AI can answer financial questions in real time and build user trust.'
        },
        {
          title: 'Hi-fi Flow',
          description: 'We started with a flow where users could talk to Aimee or simply click a prompt to validate key user needs with real tests.'
        }
      ]
    },
    assets: {
      videoTitle: 'Figma Flow Video',
      videoDescription: 'Prototype walkthrough in Figma showing the main user flow and AI conversational interaction.'
    }
  },
  pt: {
    backButton: 'Voltar ao Portfólio',
    hero: {
      title: 'App Fintech AI',
      subtitle: 'App financeiro com integração de AI que ajuda trabalhadores de aplicativos nos Estados Unidos a organizar suas finanças com Inteligência Artificial baseada em dados reais.',
      client: 'App',
      clientName: 'Fintech AI',
      market: 'Mercado',
      marketName: 'EUA',
      year: 'Ano',
      yearValue: '2025',
      role: 'Função',
      roleName: 'Product Designer',
      duration: 'Duração',
      durationTime: '6 meses'
    },
    overview: {
      title: 'Resumo do Projeto',
      p1: 'App financeiro com integração de AI que ajuda trabalhadores de aplicativos nos Estados Unidos a organizar suas finanças com Inteligência Artificial que responde com base em dados reais dos usuários.',
      p2: 'Ajudando-os a melhorar sua saúde financeira de forma personalizada. Desenvolver este novo aplicativo foi um trabalho de muita pesquisa no comportamento de uso da ferramenta de AI ao interagir com os usuários.'
    },
    methodology: {
      title: 'Metodologia',
      steps: [
        {
          title: 'Ideação',
          description: 'Partimos de um problema para uma proposta de valor focada nos pontos de dor dos usuários.'
        },
        {
          title: 'Definição de Hipóteses',
          description: 'Realizamos sessões de ideação e priorização para contemplar diferentes soluções e alinhar o produto às necessidades reais dos usuários.'
        },
        {
          title: 'Proposta de Valor',
          description: 'Construímos uma proposta clara baseada em como a AI pode responder dúvidas financeiras em tempo real e aumentar a confiança do usuário.'
        },
        {
          title: 'Fluxo Hi-fi',
          description: 'Começamos com um fluxo onde o usuário podia falar com a Aimee ou simplesmente clicar em um prompt para validar as necessidades principais com usuários reais.'
        }
      ]
    },
    assets: {
      videoTitle: 'Vídeo do fluxo no Figma',
      videoDescription: 'Apresentação do protótipo interativo no Figma com o fluxo principal do usuário e a AI conversacional.'
    }
  }
};

// Imagen por paso de metodología: Ideación, Definición de Hipótesis, Propuesta de Valor, Flujo Hi-fi
const stepImages = [brainstormImage, undefined, valuePropCanvasImage, mainFlowImage];

export function AiAppPage({ language = 'es' }: AiAppPageProps) {
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

      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">Fintech</span>
                <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">AI</span>
                <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">Research</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-gray-900">
                {t.hero.title}
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t.hero.subtitle}
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">{t.hero.client}</p>
                  <p className="text-gray-900 font-medium">{t.hero.clientName}</p>
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
            </div>

            <div className="rounded-[2rem] overflow-hidden shadow-2xl bg-white">
              <img
                src={aiAppImage}
                alt={t.hero.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">{t.overview.title}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">{t.overview.p1}</p>
          <p className="text-lg text-gray-700 leading-relaxed">{t.overview.p2}</p>
        </div>
      </section>

      {/* Duplicate overview section removed */}

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">{t.assets.videoTitle}</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">{t.assets.videoDescription}</p>
          <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-xl bg-white">
            <video controls className="w-full h-full bg-transparent">
              <source src={flowVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12 text-gray-900">{t.methodology.title}</h2>

          <div className="grid gap-8">
            {t.methodology.steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-500 text-white text-lg font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{step.description}</p>
                  {stepImages[index] && (
                    <div className="mt-4">
                      <img
                        src={stepImages[index]}
                        alt={step.title}
                        className="w-full rounded-2xl border border-gray-200 shadow-md"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
}
