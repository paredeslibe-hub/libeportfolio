import image_68d178c25866b12853b6804246e6e0ae22433c62 from 'figma:asset/68d178c25866b12853b6804246e6e0ae22433c62.png';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';
import imgImage96 from "figma:asset/a226074eca8c2225ce5a6f03f90ffa7e4d8eef7d.png";
import imgImage97 from "figma:asset/b9e562fdd682835574b7947876cc0984a2fa4cc5.png";
import imgNome11 from "figma:asset/66b357a28c4815bbb9f0df40ce28854af290dcc6.png";
import imgOnboarding11 from "figma:asset/29fe268c0f9d7ca5eff7ea7cc8dd07d1d2ea62ab.png";
import imgImage101 from "figma:asset/ff7cec2b5d9e9252e5b997f153b0b12fa68034a6.png";
import imgRoadmap from "figma:asset/ab95d16e568df4c66c58956a7bca40e820060e8c.png";
import imgIPhone16Pro from "figma:asset/d54be5559cc7e1deac438ee76344e08f3a160639.png";
import imgAnalisisDatos from "figma:asset/a1c2c96fdcd93de9ef55f3e8a4cc796a3453c3c4.png";
import imgHeaderDashboard from "figma:asset/1baf62ca9e4e75d64a3a6485a6f4ae0f7b7d4596.png";

interface NeobankPageProps {
  language?: 'es' | 'en' | 'pt';
}

const translations = {
  es: {
    backButton: 'Volver al Portfolio',
    hero: {
      title: 'Neobank App',
      description: 'Diseño de aplicación móvil para un neobank en Brasil, enfocado en límites de crédito innovadores y una experiencia de usuario simplificada.',
      client: 'Cliente',
      clientName: 'Neobank Brasil',
      year: 'Año',
      role: 'Rol',
      roleName: 'Product Designer Lead',
      duration: 'Duración',
      durationTime: '4 meses'
    },
    overview: {
      title: 'Resumen del Proyecto',
      p1: 'El desafío consistía en diseñar una aplicación móvil para un neobank en Brasil que ofreciera límites de crédito personales de forma rápida y sencilla. A través de las métricas del antiguo portal, identificamos que los usuarios estaban principalmente interesados en productos financieros con límites de crédito accesibles.',
      p2: 'El proyecto se desarrolló bajo una metodología ágil de validación continua con usuarios reales, permitiéndonos lanzar un MVP funcional en solo 4 meses.'
    },
    methodology: {
      title: 'Metodología',
      step1Title: 'Validación de Hipótesis',
      step1Desc: 'En la primera etapa del cambio, se trabajó bajo la metodología de validar hipótesis directo con los usuarios. Trabajando con ellos desde el primer momento.',
      step2Title: 'Análisis de Métricas',
      step2Desc1: 'A través de las métricas del antiguo portal de la aplicación, identificamos que los usuarios estaban únicamente interesados en productos financieros que le ofrezcan límites de crédito personales, de forma rápida.',
      step2Desc2: 'Hicimos una primera validación de hipótesis enviando mensajes de WhatsApp a nuestros usuarios con mejor reputación con la idea de validar el interés por un límite de crédito.',
      step3Title: 'Roadmap del MVP',
      step3Desc: 'Hicimos roadmap para hacer el desarrollo y lanzamiento de un MVP en sólo 4 meses.',
      step4Title: 'Diseño del Onboarding',
      step4Desc: 'Lo primero que diseñamos y lanzamos fue el Onboarding para poder empezar a registrar usuarios segmentados y continuar mejorando el producto según la información que obtuviéramos de los usuarios registrados.'
    },
    screens: {
      title: 'Pantallas Principales',
      onboarding: 'Onboarding',
      onboardingDesc: 'Introducción interactiva a las funcionalidades principales.',
      registration: 'Registro de Usuario',
      registrationDesc: 'Proceso simplificado de registro con validación en tiempo real.',
      dataAnalysis: 'Análisis de Datos',
      dataAnalysisDesc: 'Evaluación de posibilidades de crédito con proceso transparente y clara comunicación.',
      dashboard: 'Dashboard Principal',
      dashboardDesc: 'Vista general de límite de crédito y acciones rápidas.'
    },
    results: {
      title: 'Resultados',
      months: 'Meses de desarrollo',
      conversion: 'Tasa de conversión en onboarding',
      users: 'Usuarios registrados en el primer mes',
      impactTitle: 'Impacto del Proyecto',
      impact1: 'Reducción del 60% en el tiempo de solicitud de crédito',
      impact2: 'Aumento del 40% en la satisfacción del usuario comparado con la versión anterior',
      impact3: 'Validación exitosa de hipótesis con usuarios reales desde la primera etapa',
      impact4: 'Lanzamiento de MVP en tiempo récord manteniendo altos estándares de calidad'
    },
    cta: {
      title: '¿Interesado en trabajar juntos?',
      description: 'Estoy disponible para nuevos proyectos de diseño de producto.',
      button: 'Ver más proyectos'
    }
  },
  en: {
    backButton: 'Back to Portfolio',
    hero: {
      title: 'Neobank App',
      description: 'Mobile app design for a neobank in Brazil, focused on innovative credit limits and a simplified user experience.',
      client: 'Client',
      clientName: 'Neobank Brasil',
      year: 'Year',
      role: 'Role',
      roleName: 'Product Designer Lead',
      duration: 'Duration',
      durationTime: '4 months'
    },
    overview: {
      title: 'Project Overview',
      p1: 'The challenge was to design a mobile app for a neobank in Brazil that offered personal credit limits quickly and easily. Through the metrics of the old portal, we identified that users were primarily interested in financial products with accessible credit limits.',
      p2: 'The project was developed under an agile methodology of continuous validation with real users, allowing us to launch a functional MVP in just 4 months.'
    },
    methodology: {
      title: 'Methodology',
      step1Title: 'Hypothesis Validation',
      step1Desc: 'In the first stage of the change, we worked under the methodology of validating hypotheses directly with users. Working with them from the very beginning.',
      step2Title: 'Metrics Analysis',
      step2Desc1: 'Through the metrics of the old application portal, we identified that users were solely interested in financial products that offered personal credit limits quickly.',
      step2Desc2: 'We conducted a first hypothesis validation by sending WhatsApp messages to our users with the best reputation to validate interest in a credit limit.',
      step3Title: 'MVP Roadmap',
      step3Desc: 'We created a roadmap to develop and launch an MVP in just 4 months.',
      step4Title: 'Onboarding Design',
      step4Desc: 'The first thing we designed and launched was the Onboarding to start registering segmented users and continue improving the product based on the information we obtained from registered users.'
    },
    screens: {
      title: 'Main Screens',
      onboarding: 'Onboarding',
      onboardingDesc: 'Interactive introduction to the main functionalities.',
      registration: 'User Registration',
      registrationDesc: 'Simplified registration process with real-time validation.',
      dataAnalysis: 'Data Analysis',
      dataAnalysisDesc: 'Credit possibilities assessment with transparent process and clear communication.',
      dashboard: 'Main Dashboard',
      dashboardDesc: 'Overview of credit limit and quick actions.'
    },
    results: {
      title: 'Results',
      months: 'Months of development',
      conversion: 'Onboarding conversion rate',
      users: 'Users registered in the first month',
      impactTitle: 'Project Impact',
      impact1: '60% reduction in credit application time',
      impact2: '40% increase in user satisfaction compared to the previous version',
      impact3: 'Successful validation of hypotheses with real users from the first stage',
      impact4: 'MVP launch in record time while maintaining high quality standards'
    },
    cta: {
      title: 'Interested in working together?',
      description: 'I\'m available for new product design projects.',
      button: 'View more projects'
    }
  },
  pt: {
    backButton: 'Voltar ao Portfólio',
    hero: {
      title: 'Neobank App',
      description: 'Design de aplicativo móvel para um neobank no Brasil, focado em limites de crédito inovadores e uma experiência de usuário simplificada.',
      client: 'Cliente',
      clientName: 'Neobank Brasil',
      year: 'Ano',
      role: 'Função',
      roleName: 'Product Designer Lead',
      duration: 'Duração',
      durationTime: '4 meses'
    },
    overview: {
      title: 'Resumo do Projeto',
      p1: 'O desafio consistia em projetar um aplicativo móvel para um neobank no Brasil que oferecesse limites de crédito pessoais de forma rápida e fácil. Através das métricas do antigo portal, identificamos que os usuários estavam principalmente interessados em produtos financeiros com limites de crédito acessíveis.',
      p2: 'O projeto foi desenvolvido sob uma metodologia ágil de validação contínua com usuários reais, permitindo-nos lançar um MVP funcional em apenas 4 meses.'
    },
    methodology: {
      title: 'Metodologia',
      step1Title: 'Validação de Hipóteses',
      step1Desc: 'Na primeira etapa da mudança, trabalhamos sob a metodologia de validar hipóteses direto com os usuários. Trabalhando com eles desde o primeiro momento.',
      step2Title: 'Análise de Métricas',
      step2Desc1: 'Através das métricas do antigo portal do aplicativo, identificamos que os usuários estavam unicamente interessados em produtos financeiros que lhes oferecessem limites de crédito pessoais, de forma rápida.',
      step2Desc2: 'Fizemos uma primeira validação de hipóteses enviando mensagens de WhatsApp para nossos usuários com melhor reputação com a ideia de validar o interesse por um limite de crédito.',
      step3Title: 'Roadmap do MVP',
      step3Desc: 'Fizemos um roadmap para fazer o desenvolvimento e lançamento de um MVP em apenas 4 meses.',
      step4Title: 'Design do Onboarding',
      step4Desc: 'A primeira coisa que projetamos e lançamos foi o Onboarding para poder começar a registrar usuários segmentados e continuar melhorando o produto segundo a informação que obtivéssemos dos usuários registrados.'
    },
    screens: {
      title: 'Telas Principais',
      onboarding: 'Onboarding',
      onboardingDesc: 'Introdução interativa às funcionalidades principais.',
      registration: 'Registro de Usuário',
      registrationDesc: 'Processo simplificado de registro com validação em tempo real.',
      dataAnalysis: 'Análise de Dados',
      dataAnalysisDesc: 'Avaliação de possibilidades de crédito com processo transparente e comunicação clara.',
      dashboard: 'Dashboard Principal',
      dashboardDesc: 'Visão geral do limite de crédito e ações rápidas.'
    },
    results: {
      title: 'Resultados',
      months: 'Meses de desenvolvimento',
      conversion: 'Taxa de conversão em onboarding',
      users: 'Usuários registrados no primeiro mês',
      impactTitle: 'Impacto do Projeto',
      impact1: 'Redução de 60% no tempo de solicitação de crédito',
      impact2: 'Aumento de 40% na satisfação do usuário comparado com a versão anterior',
      impact3: 'Validação bem-sucedida de hipóteses com usuários reais desde a primeira etapa',
      impact4: 'Lançamento de MVP em tempo recorde mantendo altos padrões de qualidade'
    },
    cta: {
      title: 'Interessado em trabalhar juntos?',
      description: 'Estou disponível para novos projetos de design de produto.',
      button: 'Ver mais projetos'
    }
  }
};

export function NeobankPage({ language = 'es' }: NeobankPageProps) {
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

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                  Research
                </span>
                <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                  UX/UI
                </span>
                <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                  Strategy
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl mb-6 text-gray-900">
                {t.hero.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {t.hero.description}
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">{t.hero.client}</p>
                  <p className="text-gray-900 font-medium">{t.hero.clientName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">{t.hero.year}</p>
                  <p className="text-gray-900 font-medium">2025</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">{t.hero.role}</p>
                  <p className="text-gray-900 font-medium">{t.hero.roleName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">{t.hero.duration}</p>
                  <p className="text-gray-900 font-medium">{t.hero.durationTime}</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={image_68d178c25866b12853b6804246e6e0ae22433c62} 
                alt="Neobank App Preview" 
                className="mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">{t.overview.title}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {t.overview.p1}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t.overview.p2}
          </p>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12 text-gray-900">{t.methodology.title}</h2>
          
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="order-2 md:order-1">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.methodology.step1Title}</h3>
                    <p className="text-gray-700">
                      {t.methodology.step1Desc}
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img src={imgImage96} alt="Validación" className="w-full rounded-xl shadow-lg" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <img src={imgImage97} alt="Análisis de métricas" className="w-full max-w-[192px] mx-auto rounded-xl shadow-lg" />
              </div>
              <div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.methodology.step2Title}</h3>
                    <p className="text-gray-700 mb-4">
                      {t.methodology.step2Desc1}
                    </p>
                    <p className="text-gray-700">
                      {t.methodology.step2Desc2}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="order-2 md:order-1">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.methodology.step3Title}</h3>
                    <p className="text-gray-700">
                      {t.methodology.step3Desc}
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img src={imgRoadmap} alt="Roadmap" className="w-full rounded-xl shadow-lg" />
              </div>
            </div>

            {/* Step 4 */}
            <div className="max-w-3xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.methodology.step4Title}</h3>
                  <p className="text-gray-700">
                    {t.methodology.step4Desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screens Preview */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12 text-gray-900 text-center">{t.screens.title}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <img src={imgOnboarding11} alt="Onboarding" className="w-full rounded-lg shadow-md mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">{t.screens.onboarding}</h3>
              <p className="text-sm text-gray-600">{t.screens.onboardingDesc}</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <img src={imgNome11} alt="Registro de Usuario" className="w-full rounded-lg shadow-md mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">{t.screens.registration}</h3>
              <p className="text-sm text-gray-600">{t.screens.registrationDesc}</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <img src={imgAnalisisDatos} alt="Análisis de Datos" className="w-full rounded-lg shadow-md mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">{t.screens.dataAnalysis}</h3>
              <p className="text-sm text-gray-600">{t.screens.dataAnalysisDesc}</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <img src={imgIPhone16Pro} alt="Dashboard Principal" className="w-full rounded-lg shadow-md mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">{t.screens.dashboard}</h3>
              <p className="text-sm text-gray-600">{t.screens.dashboardDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12 text-gray-900 text-center">{t.results.title}</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-500 mb-2">4</div>
              <p className="text-gray-600">{t.results.months}</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-500 mb-2">85%</div>
              <p className="text-gray-600">{t.results.conversion}</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-500 mb-2">1K</div>
              <p className="text-gray-600">{t.results.users}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t.results.impactTitle}</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{t.results.impact1}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{t.results.impact2}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{t.results.impact3}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{t.results.impact4}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Full Screen Preview */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <img src={imgImage101} alt="Full Preview" className="w-full rounded-2xl shadow-2xl" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6">{t.cta.title}</h2>
          <p className="text-xl text-gray-300 mb-8">
            {t.cta.description}
          </p>
          <button 
            onClick={() => navigate('/')}
            className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-lg font-medium transition-colors"
          >
            {t.cta.button}
          </button>
        </div>
      </section>
    </div>
  );
}