import { ArrowLeft, AlertCircle, CheckCircle, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import imgImage36 from '@/assets/projects/pets-app/screen-01.png';
import imgImage38 from '@/assets/projects/pets-app/screen-02.png';
import imgImage39 from '@/assets/projects/pets-app/screen-03.png';
import imgImage40 from '@/assets/projects/pets-app/screen-04.png';
import imgImage53 from '@/assets/projects/pets-app/screen-05.png';
import imgImage54 from '@/assets/projects/pets-app/screen-wireframes.png';
import imgImage55 from '@/assets/projects/pets-app/screen-final-product.png';
import imgIPhone16Pro from '@/assets/projects/pets-app/mockup-iphone.png';
import imgHandAndIPhone16Pro from '@/assets/projects/pets-app/mockup-hand-iphone.png';
import heroImage from '@/assets/projects/pets-app/hero-preview.png';
import architectureImage from 'figma:asset/2099587178f8f8b6926cfc58bcc9a9838ed5ca77.png';
import ideationImage from 'figma:asset/e063c622a5f79067938b8f735ead2b7a3e28da9f.png';
import researchImage1 from 'figma:asset/e52988dddeb61ea1cee5f7098f5b5709baa2de98.png';
import researchImage2 from 'figma:asset/c756f39f7fb673ec4b46b045388240acd95ce458.png';
import finalProductImage from 'figma:asset/4037b2ba3fbde3bd813eb2e04e12200f709f57a3.png';
import wireframesImage from 'figma:asset/2828a05fc5cc2375f7d2911cf6bc42a4231564d1.png';
import heroImageNew from 'figma:asset/00d685f354a5612791b957f229b5d34ac1947585.png';
import AppArquitecturaActual from '@/imports/AppArquitecturaActual/AppArquitecturaActual';
import { Footer } from './Footer';

interface PetsAppPageProps {
  language?: 'es' | 'en' | 'pt';
}

const translations = {
  es: {
    back: 'Volver',
    title: 'Wallet Pets App',
    category: 'Fintech',
    hero: {
      title: 'Wallet Pets App',
      subtitle: 'Aplicación para pedir comida de mascotas, ganar puntos y tener una billetera virtual para tu mascota',
      role: 'Rol',
      roleName: 'Product Designer',
      year: 'Año',
      duration: 'Duración',
      durationTime: '3 meses'
    },
    problem: {
      title: 'Problema',
      items: [
        'Los dueños de mascotas no tienen tiempo para comprar comida.',
        'Compran muy poca comida y no es suficiente para todo el mes.',
        'Compran demasiada comida y se humedece.',
        'Muchas marcas para elegir y no saben qué elegir.',
        'La gente no sabe cómo alimentar a su mascota.'
      ]
    },
    solution: {
      title: 'Solución',
      items: [
        'Que los dueños de mascotas no tengan que preocuparse por comprar comida.',
        'Poder identificar qué alimentos son mejores para su mascota.',
        'Y CÓMO dosificar la comida.'
      ]
    },
    proposal: {
      title: 'Propuesta',
      items: [
        'Una app que mide automáticamente la cantidad de comida y la marca que necesita tu mascota, y llega cada mes porcionada a la puerta de tu hogar.',
        'Poder contribuir con seguimiento personalizado y diversión.',
        'Un juego de nutrición para tu mascota.'
      ]
    },
    features: {
      title: 'Características',
      main: {
        title: 'Funcionalidades Principales',
        items: [
          'Mis Puntos',
          'Como hacer para sumar puntos',
          'Cotizador/Productos',
          'Mi Suscripción',
          'Carrito',
          'Checkout',
          'Perfil',
          'Mi/mis Mascotas',
          'Domicilio'
        ]
      },
      secondary: {
        title: 'Funcionalidades Secundarias',
        items: [
          'Ayuda - Como funciona?',
          'Tutoriales/Videos',
          'Nutricionistas',
          'Chat/Consultas',
          'Contacto/Chatbot',
          'Notificaciones',
          'PetShop',
          'Game',
          'Calendar',
          'Agenda',
          'Chat',
          'Asesoriamiento',
          'Invita a un amigo',
          'Tips/Juego preguntas'
        ]
      }
    },
    screens: {
      title: 'Pantallas',
      walkthrough: 'Walkthrough',
      login: 'Login/logout',
      dashboard: 'Dashboard'
    },
    process: {
      title: 'Proceso de Diseño',
      ideation: {
        title: 'Ideación y Conceptualización',
        description: 'Comenzamos identificando las necesidades principales de los dueños de mascotas: automatización en la compra de alimentos, recomendaciones personalizadas y gamificación. Definimos la propuesta de valor: una app que mide automáticamente la cantidad de comida que necesita cada mascota.'
      },
      research: {
        title: 'Research y Benchmarking',
        description: 'Realizamos un análisis exhaustivo del mercado de aplicaciones fintech para mascotas y servicios de suscripción. Estudiamos las mejores prácticas en UX/UI de apps de delivery, sistemas de puntos y gamificación. Identificamos oportunidades de diferenciación y validamos hipótesis con usuarios reales para entender sus hábitos de compra y necesidades específicas.'
      },
      userFlow: {
        title: 'Flujo de Usuario y Arquitectura',
        description: 'Diseñamos la arquitectura de información organizando las funcionalidades principales: sistema de puntos, cotizador, suscripciones, perfil de mascotas y domicilio. También mapeamos funcionalidades secundarias como tutoriales, nutricionistas, chat, y el sistema de gamificación.'
      },
      wireframes: {
        title: 'Wireframes en Low-Fi',
        description: 'Creamos wireframes de baja fidelidad para validar la arquitectura de información y definir flujos alternativos. Este proceso nos permitió identificar posibles puntos de fricción, optimizar la navegación y asegurar que todas las funcionalidades estén organizadas de manera lógica e intuitiva antes de avanzar al diseño visual.'
      },
      final: {
        title: 'Producto Final',
        description: 'La aplicación completa integra todas las funcionalidades en una experiencia cohesiva. Diseño visual moderno con paleta de colores vibrantes (morado y amarillo), animaciones sutiles y navegación intuitiva que guía al usuario en cada paso del proceso.'
      }
    }
  },
  en: {
    back: 'Back',
    title: 'Wallet Pets App',
    category: 'Fintech',
    hero: {
      title: 'Fintech App for Pets',
      subtitle: 'App where people can order pet food, earn points and have their own wallet for their pet',
      role: 'Role',
      roleName: 'Product Designer',
      year: 'Year',
      duration: 'Duration',
      durationTime: '3 months'
    },
    problem: {
      title: 'Problem',
      items: [
        'Pet owners don\'t have time to buy food.',
        'They buy too little food and it is not enough for the whole month.',
        'They buy too much food and it gets wet.',
        'A lot of brands to choose from and they don\'t know what to choose.',
        'People do not know how to feed their pet.'
      ]
    },
    solution: {
      title: 'Solution',
      items: [
        'That pet owners do not have to worry about buying food.',
        'To be able to identify what foods are best for their pet.',
        'And HOW to dose the food.'
      ]
    },
    proposal: {
      title: 'Proposal',
      items: [
        'An app that automatically measures the amount of food and the brand that your pet needs, and it arrives every month portioned at the door of your home.',
        'To be able to contribute with personalized follow-up and fun.',
        'A nutrition game for your pet.'
      ]
    },
    features: {
      title: 'Features',
      main: {
        title: 'Main Features',
        items: [
          'My Points',
          'How to earn points',
          'Quote/Products',
          'My Subscription',
          'Cart',
          'Checkout',
          'Profile',
          'My Pet(s)',
          'Address'
        ]
      },
      secondary: {
        title: 'Secondary Features',
        items: [
          'Help - How does it work?',
          'Tutorials/Videos',
          'Nutritionists',
          'Chat/Consultations',
          'Contact/Chatbot',
          'Notifications',
          'PetShop',
          'Game',
          'Calendar',
          'Agenda',
          'Chat',
          'Advisory',
          'Invite a friend',
          'Tips/Question game'
        ]
      }
    },
    screens: {
      title: 'Screens',
      walkthrough: 'Walkthrough',
      login: 'Login/logout',
      dashboard: 'Dashboard'
    },
    process: {
      title: 'Design Process',
      ideation: {
        title: 'Ideation and Conceptualization',
        description: 'We started by identifying the main needs of pet owners: automation in food purchases, personalized recommendations and gamification. We defined the value proposition: an app that automatically measures the amount of food each pet needs.'
      },
      research: {
        title: 'Research and Benchmarking',
        description: 'We conducted a comprehensive analysis of the fintech pet app market and subscription services. We studied best practices in UX/UI of delivery apps, points systems and gamification. We identified differentiation opportunities and validated hypotheses with real users to understand their shopping habits and specific needs.'
      },
      userFlow: {
        title: 'User Flow and Architecture',
        description: 'We designed the information architecture organizing the main functionalities: points system, quote calculator, subscriptions, pet profile and address. We also mapped secondary functionalities like tutorials, nutritionists, chat, and the gamification system.'
      },
      wireframes: {
        title: 'Low-Fi Wireframes',
        description: 'We created low-fidelity wireframes to validate the information architecture and define alternative flows. This process allowed us to identify potential friction points, optimize navigation and ensure all functionalities are organized in a logical and intuitive way before moving to visual design.'
      },
      final: {
        title: 'Final Product',
        description: 'The complete application integrates all functionalities into a cohesive experience. Modern visual design with vibrant color palette (purple and yellow), subtle animations and intuitive navigation that guides the user through each step of the process.'
      }
    }
  },
  pt: {
    back: 'Voltar',
    title: 'Wallet Pets App',
    category: 'Fintech',
    hero: {
      title: 'Wallet Pets App',
      subtitle: 'Aplicativo para pedir comida de pets, ganhar pontos e ter uma carteira virtual para seu pet',
      role: 'Função',
      roleName: 'Product Designer',
      year: 'Ano',
      duration: 'Duração',
      durationTime: '3 meses'
    },
    problem: {
      title: 'Problema',
      items: [
        'Os donos de pets não têm tempo para comprar comida.',
        'Compram muito pouca comida e não é suficiente para o mês todo.',
        'Compram comida demais e ela fica úmida.',
        'Muitas marcas para escolher e não sabem o que escolher.',
        'As pessoas não sabem como alimentar seu pet.'
      ]
    },
    solution: {
      title: 'Solução',
      items: [
        'Que os donos de pets não precisem se preocupar em comprar comida.',
        'Poder identificar quais alimentos são melhores para seu pet.',
        'E COMO dosear a comida.'
      ]
    },
    proposal: {
      title: 'Proposta',
      items: [
        'Um app que mede automaticamente a quantidade de comida e a marca que seu pet precisa, e chega todo mês porcionada na porta da sua casa.',
        'Poder contribuir com acompanhamento personalizado e diversão.',
        'Um jogo de nutrição para seu pet.'
      ]
    },
    features: {
      title: 'Funcionalidades',
      main: {
        title: 'Funcionalidades Principais',
        items: [
          'Meus Pontos',
          'Como fazer para somar pontos',
          'Cotador/Produtos',
          'Minha Assinatura',
          'Carrinho',
          'Checkout',
          'Perfil',
          'Meu(s) Pet(s)',
          'Endereço'
        ]
      },
      secondary: {
        title: 'Funcionalidades Secundárias',
        items: [
          'Ajuda - Como funciona?',
          'Tutoriais/Vídeos',
          'Nutricionistas',
          'Chat/Consultas',
          'Contato/Chatbot',
          'Notificações',
          'PetShop',
          'Jogo',
          'Calendário',
          'Agenda',
          'Chat',
          'Assessoria',
          'Convide um amigo',
          'Dicas/Jogo de perguntas'
        ]
      }
    },
    screens: {
      title: 'Telas',
      walkthrough: 'Walkthrough',
      login: 'Login/logout',
      dashboard: 'Dashboard'
    },
    process: {
      title: 'Processo de Design',
      ideation: {
        title: 'Ideação e Conceituação',
        description: 'Começamos identificando as principais necessidades dos donos de pets: automação na compra de alimentos, recomendações personalizadas e gamificação. Definimos a proposta de valor: um app que mede automaticamente a quantidade de comida que cada pet precisa.'
      },
      research: {
        title: 'Research e Benchmarking',
        description: 'Realizamos uma análise abrangente do mercado de aplicativos fintech para pets e serviços de assinatura. Estudamos as melhores práticas em UX/UI de apps de delivery, sistemas de pontos e gamificação. Identificamos oportunidades de diferenciação e validamos hipóteses com usuários reais para entender seus hábitos de compra e necessidades específicas.'
      },
      userFlow: {
        title: 'Fluxo de Usuário e Arquitetura',
        description: 'Projetamos a arquitetura de informação organizando as funcionalidades principais: sistema de pontos, cotador, assinaturas, perfil de pets e endereço. Também mapeamos funcionalidades secundárias como tutoriais, nutricionistas, chat e o sistema de gamificação.'
      },
      wireframes: {
        title: 'Wireframes em Low-Fi',
        description: 'Criamos wireframes de baixa fidelidade para validar a arquitetura de informação e definir fluxos alternativos. Este processo nos permitiu identificar possíveis pontos de fricção, otimizar a navegação e garantir que todas as funcionalidades estejam organizadas de forma lógica e intuitiva antes de avançar para o design visual.'
      },
      final: {
        title: 'Produto Final',
        description: 'O aplicativo completo integra todas as funcionalidades em uma experiência coesa. Design visual moderno com paleta de cores vibrantes (roxo e amarelo), animações sutis e navegação intuitiva que guia o usuário em cada etapa do processo.'
      }
    }
  }
};

export function PetsAppPage({ language = 'es' }: PetsAppPageProps) {
  const navigate = useNavigate();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-700 hover:text-orange-500 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>{t.back}</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-6">
                {t.category}
              </span>
              <h1 className="text-4xl md:text-5xl mb-6 text-gray-900">
                {t.hero.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {t.hero.subtitle}
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">{t.hero.role}</p>
                  <p className="text-gray-900 font-medium">{t.hero.roleName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">{t.hero.year}</p>
                  <p className="text-gray-900 font-medium">2021</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">{t.hero.duration}</p>
                  <p className="text-gray-900 font-medium">{t.hero.durationTime}</p>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={heroImageNew}
                alt="Pets App Preview"
                className="w-full h-auto max-w-md mx-auto drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem, Solution & Proposal Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-2xl text-gray-900">{t.problem.title}</h3>
              </div>
              <ul className="space-y-4">
                {t.problem.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl text-gray-900">{t.solution.title}</h3>
              </div>
              <ul className="space-y-4">
                {t.solution.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Proposal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-2xl text-gray-900">{t.proposal.title}</h3>
              </div>
              <ul className="space-y-4">
                {t.proposal.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-yellow-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-16 text-gray-900 text-center">
            {t.features.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Main Features */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-5 h-5 bg-purple-500 rounded-full"></div>
                <h3 className="text-2xl text-gray-900">{t.features.main.title}</h3>
              </div>
              <ul className="space-y-3">
                {t.features.main.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Secondary Features */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-5 h-5 bg-yellow-400 rounded-full"></div>
                <h3 className="text-2xl text-gray-900">{t.features.secondary.title}</h3>
              </div>
              <ul className="space-y-3">
                {t.features.secondary.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-20 text-gray-900 text-center">
            {t.process.title}
          </h2>

          {/* Ideation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center mb-32"
          >
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl mb-6 text-gray-900">
                {t.process.ideation.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t.process.ideation.description}
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={ideationImage}
                alt={t.process.ideation.title}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Research and Benchmarking */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <img
                  src={researchImage1}
                  alt={t.process.research.title}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl mb-6 text-gray-900">
                  {t.process.research.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t.process.research.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* User Flow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center mb-32"
          >
            <div>
              <div className="w-full h-auto rounded-2xl shadow-2xl overflow-auto bg-white p-8">
                <div className="min-w-[1500px] min-h-[750px]">
                  <AppArquitecturaActual />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl mb-6 text-gray-900">
                {t.process.userFlow.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t.process.userFlow.description}
              </p>
            </div>
          </motion.div>

          {/* Wireframes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center mb-32"
          >
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl mb-6 text-gray-900">
                {t.process.wireframes.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t.process.wireframes.description}
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={wireframesImage}
                alt={t.process.wireframes.title}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Final Product */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl mb-6 text-gray-900">
                {t.process.final.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t.process.final.description}
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={finalProductImage}
                alt={t.process.final.title}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
}
