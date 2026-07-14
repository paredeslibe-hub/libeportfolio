import step3Image1 from 'figma:asset/3c04df0eaf2b7d382be1902a474772a6edb62518.png';
import step3Image2 from 'figma:asset/d5b65f4c45875f696a17a4cbc374eb73e5e02dd3.png';
import step3Image3 from 'figma:asset/fb8f79d85c450f0d05c7e27ee5f3e7c1d0e55b26.png';
import beforeAfterImage from 'figma:asset/46f43eb5596ec25c38e6d7893a2c41e47aaff281.png';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import step1Image from 'figma:asset/b42298fd0a5b1d91ced7d752301798c3de863efe.png';
import step2Image from 'figma:asset/62325b97b03ca914bee8325ac8f6274c4414b69b.png';
import step2ExtraImage1 from 'figma:asset/08d9becee533b33c42bd72d8c8f7d04a0c5ce8cc.png';
import step2ExtraImage2 from 'figma:asset/f8e8f814c5ff88c63ad28a7e42a16620b907ba6e.png';
import DetailProductBAltis from '@/imports/DetailProductBAltis';
import bankuishDashboardImage from 'figma:asset/d138bbb5b9fb380a1f8342de19bb0d92632a0aef.png';
import productRecommendationsImage from 'figma:asset/150cdd003d2852eb34602a469faf42e3861966e9.png';
import creditScoreImage from 'figma:asset/bbefcbbfd23c9bf37e1dcc01cde9b2eaf9e49fe1.png';
import Op4ConnectLarge from '@/imports/Op4ConnectLarge';
import OptionGraphicBar from '@/imports/OptionGraphicBar';
import connectAppsImage from 'figma:asset/cc085ff3a39093d720ffb6c527154df8eb6906e2.png';
import dashboardUserImage from 'figma:asset/aa829af70c1a0eb459afd15f59f26e9fcf264c20.png';
import ConnectAppsScreen from '@/imports/Op4ConnectLarge-62-3976';
import connectScreenImage from 'figma:asset/8d0996e070c7cc18aec737da2046b8b097632d20.png';
import analysisScreenImage from 'figma:asset/e5e72299c1dbcef0b1f26bf4f4f2721d4f0df439.png';

interface PortalCreditosPageProps {
  language?: 'es' | 'en' | 'pt';
}

const translations = {
  es: {
    backButton: 'Volver al Portfolio',
    hero: {
      title: 'Portal de Créditos',
      description: 'Plataforma de análisis de datos de trabajadores que ofrece productos financieros personalizados mediante integración con instituciones crediticias.',
      client: 'Cliente',
      clientName: 'Portal Financiero',
      year: 'Año',
      role: 'Rol',
      roleName: 'Product Designer',
      duration: 'Duración',
      durationTime: '18 meses'
    },
    overview: {
      title: 'Resumen del Proyecto',
      p1: 'Cuando me integré al proyecto en 2023, la aplicación contaba con un desarrollo básico y un diseño poco accesible que no cumplía con los estándares actuales del mercado. Mi desafío principal fue transformar la experiencia del usuario mediante mejoras constantes y una renovación completa de la interfaz para adaptarnos a las tendencias del mercado fintech y hacer la App verdaderamente competitiva.',
      p2: 'A través de investigación exhaustiva con usuarios reales y un proceso iterativo de validación, implementé cambios continuos que mejoraron significativamente la experiencia. El proyecto se enfocó en crear una plataforma transparente donde los trabajadores pudieran entender su capacidad crediticia y acceder a productos financieros personalizados de manera rápida, segura y confiable.'
    },
    beforeAfter: {
      title: 'La Transformación',
      subtitle: 'De una interfaz básica a una experiencia financiera moderna y accesible'
    },
    methodology: {
      title: 'Proceso de Diseño',
      step1Title: 'Investigación de Usuarios',
      step1Desc: 'Considero que la investigación de usuarios es una parte clave al entrar en un nuevo mercado o crear un nuevo producto. En Bankuish, realizo entrevistas y focus groups con usuarios en diferentes países para lanzar el producto y adaptarlo a las necesidades de cada país.',
      step2Title: 'Análisis de Datos y Flujos',
      step2Desc1: 'Diseñamos un sistema que analiza múltiples variables del perfil del trabajador: historial laboral, ingresos, estabilidad, y más.',
      step2Desc2: 'Utilizamos distintas herramientas como GA4, UXCam y Meta para analizar datos y mapas de calor, identificando las áreas de mayor interés y uso para iterar según la prioridad detectada.',
      step3Title: 'Integración con Instituciones',
      step3Desc: 'Desarrollamos un sistema de integración con múltiples instituciones crediticias para ofrecer comparativas en tiempo real y las mejores opciones personalizadas para cada perfil.',
      step4Title: 'Dashboard Personalizado',
      step4Desc: 'Diseñamos un dashboard intuitivo donde los usuarios pueden ver su capacidad crediticia, productos recomendados, y gestionar sus solicitudes de crédito en un solo lugar.'
    },
    screens: {
      title: 'Pantallas Principales',
      analysis: 'Análisis de Perfil',
      analysisDesc: 'Creación de un score de crédito con detalles e indicadores de mejora.',
      products: 'Productos Disponibles',
      productsDesc: 'Catálogo personalizado de productos financieros según el perfil.',
      comparison: 'Comparador de Créditos',
      comparisonDesc: 'Herramienta para comparar diferentes opciones de crédito lado a lado.',
      dashboard: 'Dashboard Usuario',
      dashboardDesc: 'Reporte sobre los datos más importantes para el usuario, obtenidos de las conexiones realizadas.'
    },
    results: {
      title: 'Resultados',
      months: 'Meses de desarrollo',
      approval: 'Tasa de aprobación de créditos',
      users: 'Usuarios activos en el primer trimestre',
      impactTitle: 'Impacto del Proyecto',
      impact1: 'Reducción del 50% en el tiempo de análisis y aprobación de créditos',
      impact2: 'Aumento del 70% en la satisfacción del usuario con el proceso transparente',
      impact3: 'Integración exitosa con 12 instituciones crediticias diferentes',
      impact4: 'Sistema de comparación que ayudó a usuarios a ahorrar un promedio de 15% en intereses'
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
      title: 'Credit Portal',
      description: 'Worker data analysis platform that offers personalized financial products through integration with credit institutions.',
      client: 'Client',
      clientName: 'Financial Portal',
      year: 'Year',
      role: 'Role',
      roleName: 'Product Designer',
      duration: 'Duration',
      durationTime: '18 months'
    },
    overview: {
      title: 'Project Overview',
      p1: 'When I joined the project in 2023, the application had basic development and an inaccessible design that did not meet current market standards. My main challenge was to transform the user experience through constant improvements and a complete interface renewal to adapt to fintech market trends and make the App truly competitive.',
      p2: 'Through exhaustive user research and an iterative validation process, I implemented continuous changes that significantly improved the experience. The project focused on creating a transparent platform where workers could understand their creditworthiness and access personalized financial products quickly, securely, and reliably.'
    },
    beforeAfter: {
      title: 'The Transformation',
      subtitle: 'From a basic interface to a modern and accessible financial experience'
    },
    methodology: {
      title: 'Design Process',
      step1Title: 'User Research',
      step1Desc: 'I consider user research to be a key part of entering a new market or creating a new product. At Bankuish, I conduct interviews and focus groups with users in different countries to launch the product and adapt it to the needs of each country.',
      step2Title: 'Data Analysis and Flows',
      step2Desc1: 'We designed a system that analyzes multiple variables of the worker\'s profile: work history, income, stability, and more.',
      step2Desc2: 'We use various tools such as GA4, UXCam, and Meta to analyze data and heatmaps, identifying areas of greatest interest and usage to iterate based on detected priority.',
      step3Title: 'Institution Integration',
      step3Desc: 'We developed an integration system with multiple credit institutions to offer real-time comparisons and the best personalized options for each profile.',
      step4Title: 'Personalized Dashboard',
      step4Desc: 'We designed an intuitive dashboard where users can see their creditworthiness, recommended products, and manage their credit applications in one place.'
    },
    screens: {
      title: 'Main Screens',
      analysis: 'Profile Analysis',
      analysisDesc: 'Creation of a credit score with details and improvement indicators.',
      products: 'Available Products',
      productsDesc: 'Personalized catalog of financial products according to profile.',
      comparison: 'Credit Comparator',
      comparisonDesc: 'Tool to compare different credit options side by side.',
      dashboard: 'User Dashboard',
      dashboardDesc: 'Report on the most important user data obtained from completed connections.'
    },
    results: {
      title: 'Results',
      months: 'Months of development',
      approval: 'Credit approval rate',
      users: 'Active users in the first quarter',
      impactTitle: 'Project Impact',
      impact1: '50% reduction in credit analysis and approval time',
      impact2: '70% increase in user satisfaction with the transparent process',
      impact3: 'Successful integration with 12 different credit institutions',
      impact4: 'Comparison system helped users save an average of 15% on interest'
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
      title: 'Portal de Créditos',
      description: 'Plataforma de análise de dados de trabalhadores que oferece produtos financeiros personalizados mediante integração com instituições de crédito.',
      client: 'Cliente',
      clientName: 'Portal Financeiro',
      year: 'Ano',
      role: 'Função',
      roleName: 'Product Designer',
      duration: 'Duração',
      durationTime: '18 meses'
    },
    overview: {
      title: 'Resumo do Projeto',
      p1: 'Quando me integrei ao projeto em 2023, o aplicativo contava com um desenvolvimento básico e um design pouco acessível que não cumpria com os padrões atuais do mercado. Meu desafio principal foi transformar a experiência do usuário mediante melhorias constantes e uma renovação completa da interface para nos adaptarmos às tendências do mercado fintech e fazer o App verdadeiramente competitivo.',
      p2: 'Através de pesquisa exaustiva com usuários reais e um processo iterativo de validação, implementei mudanças contínuas que melhoraram significativamente a experiência. O projeto focou em criar uma plataforma transparente onde os trabalhadores pudessem entender sua capacidade de crédito e acessar produtos financeiros personalizados de forma rápida, segura e confiável.'
    },
    beforeAfter: {
      title: 'A Transformação',
      subtitle: 'De uma interface básica a uma experiência financeira moderna e acessível'
    },
    methodology: {
      title: 'Processo de Design',
      step1Title: 'Pesquisa de Usuários',
      step1Desc: 'Considero que a pesquisa de usuários é uma parte fundamental ao entrar em um novo mercado ou criar um novo produto. Na Bankuish, realizo entrevistas e focus groups com usuários em diferentes países para lançar o produto e adaptá-lo às necessidades de cada país.',
      step2Title: 'Análise de Dados e Fluxos',
      step2Desc1: 'Projetamos um sistema que analisa múltiplas variáveis do perfil do trabalhador: histórico de trabalho, renda, estabilidade, e mais.',
      step2Desc2: 'Utilizamos diferentes ferramentas como GA4, UXCam e Meta para analisar dados e mapas de calor, identificando as áreas de maior interesse e uso para iterar segundo a prioridade detectada.',
      step3Title: 'Integração com Instituições',
      step3Desc: 'Desenvolvemos um sistema de integração com múltiplas instituições de crédito para oferecer comparações em tempo real e as melhores opções personalizadas para cada perfil.',
      step4Title: 'Dashboard Personalizado',
      step4Desc: 'Projetamos um dashboard intuitivo onde os usuários podem ver sua capacidade de crédito, produtos recomendados e gerenciar suas solicitações de crédito em um só lugar.'
    },
    screens: {
      title: 'Telas Principais',
      analysis: 'Análise de Perfil',
      analysisDesc: 'Criação de um score de crédito com detalhes e indicadores de melhoria.',
      products: 'Produtos Disponíveis',
      productsDesc: 'Catálogo personalizado de produtos financeiros segundo o perfil.',
      comparison: 'Comparador de Créditos',
      comparisonDesc: 'Ferramenta para comparar diferentes opções de crédito lado a lado.',
      dashboard: 'Dashboard Usuário',
      dashboardDesc: 'Relatório sobre os dados mais importantes para o usuário, obtidos das conexões realizadas.'
    },
    results: {
      title: 'Resultados',
      months: 'Meses de desenvolvimento',
      approval: 'Taxa de aprovação de créditos',
      users: 'Usuários ativos no primeiro trimestre',
      impactTitle: 'Impacto do Projeto',
      impact1: 'Redução de 50% no tempo de análise e aprovação de créditos',
      impact2: 'Aumento de 70% na satisfação do usuário com o processo transparente',
      impact3: 'Integração bem-sucedida com 12 instituições de crédito diferentes',
      impact4: 'Sistema de comparação que ajudou usuários a economizar em média 15% em juros'
    },
    cta: {
      title: 'Interessado em trabalhar juntos?',
      description: 'Estou disponível para novos projetos de design de produto.',
      button: 'Ver mais projetos'
    }
  }
};

export function PortalCreditosPage({ language = 'es' }: PortalCreditosPageProps) {
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
                  UX/UI
                </span>
                <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                  Research
                </span>
                <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                  {language === 'es' ? 'Análisis de datos' : 'Data Analysis'}
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
                  <p className="text-gray-900 font-medium">2023</p>
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
<motion.img
                src={step3Image1}
                alt="Portal de Créditos Preview"
                className="w-full h-auto max-w-md mx-auto drop-shadow-2xl rounded-2xl"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
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

      {/* Before After Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">{t.beforeAfter.title}</h2>
            <p className="text-xl text-gray-600">
              {t.beforeAfter.subtitle}
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 text-left">Antes</h3>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 text-left">Después</h3>
              </div>
            </div>
            <img
              src={beforeAfterImage}
              alt="Before and After Comparison"
              className="w-full max-w-3xl mx-auto rounded-xl"
            />
          </div>
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
                <ImageWithFallback 
                  src={step1Image} 
                  alt="User Research" 
                  className="w-full rounded-xl shadow-lg" 
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <ImageWithFallback 
                  src={step2Image} 
                  alt="Data Analysis" 
                  className="w-full rounded-xl shadow-lg" 
                />
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

            {/* Step 2 - Additional Visual Material */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src={step2ExtraImage1} 
                  alt="User Activity Analysis" 
                  className="w-full h-auto object-contain rounded-xl shadow-lg" 
                />
              </div>
              <div>
                <img 
                  src={step2ExtraImage2} 
                  alt="UX Insights and Heatmaps" 
                  className="hidden" 
                />
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
                <img 
                  src={bankuishDashboardImage} 
                  alt="Bankuish Dashboard Mobile" 
                  className="w-full rounded-xl shadow-lg"
                />
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
              <img 
                src={productRecommendationsImage} 
                alt="Product Recommendations" 
                className="w-full rounded-lg shadow-md mb-4 aspect-[9/19.5] object-cover" 
              />
              <h3 className="font-semibold text-gray-900 mb-2">{t.screens.products}</h3>
              <p className="text-sm text-gray-600">{t.screens.productsDesc}</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-full rounded-lg shadow-md mb-4 overflow-hidden aspect-[9/19.5]">
                <img src={connectScreenImage} alt="Connect Apps" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t.screens.comparison}</h3>
              <p className="text-sm text-gray-600">{t.screens.comparisonDesc}</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-full rounded-lg shadow-md mb-4 overflow-hidden bg-white flex items-center justify-center aspect-[9/19.5]">
                <img src={analysisScreenImage} alt="Analysis Screen" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t.screens.analysis}</h3>
              <p className="text-sm text-gray-600">{t.screens.analysisDesc}</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <img
                src={dashboardUserImage}
                alt="Bankuish Dashboard"
                className="w-full rounded-lg shadow-md mb-4 aspect-[9/19.5] object-cover object-top"
              />
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
              <div className="text-5xl font-bold text-orange-500 mb-2">18</div>
              <p className="text-gray-600">{t.results.months}</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-500 mb-2">92%</div>
              <p className="text-gray-600">{t.results.approval}</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-500 mb-2">2.5K</div>
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