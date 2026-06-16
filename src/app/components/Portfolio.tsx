import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { Menu, X, Globe, Calendar, Info, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { trackWhatsAppClick } from '../utils/analytics';
import { useLanguage } from '../context/LanguageContext';
import { NewHero } from './NewHero';
import { AboutMe } from './AboutMe';
import { ProjectCard } from './ProjectCard';
import { ProcessSection } from './ProcessSection';
import { SkillsSection } from './SkillsSection';
import { Footer } from './Footer';
import neobankImage from 'figma:asset/68d178c25866b12853b6804246e6e0ae22433c62.png';
import aiAppImage from 'figma:asset/f7019a472d51216b42b239ee9fe17e184e6ab10c.png';
import portalCreditosImage from 'figma:asset/3c04df0eaf2b7d382be1902a474772a6edb62518.png';
import petsAppImage from 'figma:asset/00d685f354a5612791b957f229b5d34ac1947585.png';
import consultingImage from 'figma:asset/e2758ae3e941f516ffdbc201b6872ed01d207551.png';

const translations = {
  es: {
    nav: {
      projects: 'Proyectos',
      consulting: 'Consultoría',
      process: 'Proceso',
      skills: 'Habilidades',
      contact: 'Contacto'
    },
    consulting: {
      title: 'Consultoría UX',
      subtitle: 'Para Startups y Equipos de Producto',
      description: 'Ayudo a equipos digitales a tomar mejores decisiones de producto mediante análisis UX estratégico, research enfocado y recomendaciones accionables.',
      features: [
        'Análisis de experiencia de usuario',
        'Identificación de fricciones y oportunidades',
        'Recomendaciones estratégicas priorizadas',
        'Research enfocado en problemas reales'
      ],
      scheduleButton: 'Agendar reunión',
      learnMoreButton: 'Ver más información'
    },
    projects: [
      {
        title: 'Neobank App',
        category: 'Fintech',
        description: 'Diseño de App para neobank en Brasil. Limites de crédito innovador.',
        image: neobankImage,
        tags: ['Research', 'UX/UI', 'Strategy']
      },
      {
        title: 'App con Inteligencia Artificial',
        category: 'Fintech',
        description: 'App lanzada en USA que analiza los datos de los usuarios y responde con inteligencia artificial, ayudándolo a conseguir productos financieros.',
        image: aiAppImage,
        tags: ['AI', 'UX/UI', 'Research']
      },
      {
        title: 'Portal de Créditos',
        category: 'Fintech',
        description: 'Plataforma de análisis de datos de trabajadores que ofrece productos financieros personalizados.',
        image: portalCreditosImage,
        tags: ['UX/UI', 'Research', 'Análisis de datos']
      },
      {
        title: 'Wallet Pets App',
        category: 'Fintech',
        description: 'Aplicación para pedir comida de mascotas, ganar puntos y tener una billetera virtual para tu mascota.',
        image: petsAppImage,
        tags: ['UX/UI', 'E-commerce', 'Wallet']
      }
    ],
    projectsSection: {
      title: 'Proyectos destacados',
      subtitle: 'Mis trabajos más recientes con enfoque en Fintech e Inteligencia Artificial para los principales mercados de América: Brasil, Estados Unidos, México y Chile'
    },
    testimonials: {
      title: 'Referencias',
      subtitle: 'Lo que dicen quienes han trabajado conmigo',
      items: [
        {
          quote: 'Trabajar con Libe durante más de tres años ha sido una experiencia excepcional. Ha sido una pieza fundamental para consolidar mi equipo de producto, demostrando un crecimiento profesional imparable y una disposición constante para dar la milla extra.\n\nSu capacidad técnica y estratégica brilló en momentos clave: desde la optimización del Marketplace 1.0 de Bankuish, donde mejoró significativamente la experiencia de usuario, hasta el reto de definir y crear la aplicación de Filance AI para el mercado de EE.UU., adaptándose a un entorno completamente nuevo. Más recientemente, su agilidad y creatividad fueron vitales para el exitoso lanzamiento de nuestro MVP de Bankuish 2.0 en noviembre de 2025 en el mercado Brasilero.\n\nLibe combina investigación de mercado rigurosa con un diseño de vanguardia. Es una profesional que siempre busca capacitarse y elevar el estándar del equipo. Es la persona ideal para cualquier reto de producto ambicioso.',
          author: 'Adriana Galarza',
          role: 'Directora de Producto (CPO)',
          initials: 'AG'
        },
        {
          quote: 'Tuve el placer de trabajar con Libe durante casi dos años desde mi rol como Project Manager de equipos de diseño. Durante este tiempo, se desempeñó como UX/UI Designer con una mirada integral, sólido criterio de diseño y un fuerte enfoque tanto en el usuario como en los objetivos del negocio.\n\nSe destacó por la calidad de sus entregables, así como por su innovación y creatividad, aportando soluciones bien pensadas y diferenciales. Además, demostró una gran capacidad de liderazgo, comunicación y colaboración con distintos roles, manteniendo siempre una actitud proactiva, responsable y orientada a resultados, siendo esto clave en los proyectos que nos tocó abordar.\n\nMás allá de lo técnico, destaco especialmente sus habilidades interpersonales y su capacidad para generar y sostener un excelente clima de trabajo.\n\nRecomiendo ampliamente a Libe por su solidez profesional, compromiso y el impacto positivo que genera en los equipos con los que trabaja.',
          author: 'Diego Herrando',
          role: 'Project Leader / Agility Consultant',
          initials: 'DH'
        },
        {
          quote: 'Libe es una diseñadora UX/UI altamente comprometida y reflexiva. Trabajar con ella siempre fue fácil porque combina un sólido criterio de diseño con una mentalidad proactiva y analítica.\n\nAporta un enfoque innovador a la resolución de problemas, especialmente al explorar nuevas herramientas y formas alternativas de mejorar las experiencias de producto. Es curiosa por naturaleza, desafía suposiciones cuando es necesario y contribuye con ideas que añaden valor real.\n\nMás allá de la ejecución, Libe comprende el panorama general del producto y las necesidades del usuario, lo que la convierte en una colaboradora sólida tanto en discusiones de diseño como estratégicas. La recomendaría con confianza a cualquier equipo que busque una diseñadora que piense hacia adelante y entregue con propósito.',
          author: 'David Santamaria',
          role: 'Product Designer Manager',
          initials: 'DS'
        }
      ]
    }
  },
  en: {
    nav: {
      projects: 'Projects',
      consulting: 'Consulting',
      process: 'Process',
      skills: 'Skills',
      contact: 'Contact'
    },
    consulting: {
      title: 'UX Consulting',
      subtitle: 'For Startups and Product Teams',
      description: 'Help digital teams make better product decisions through strategic UX analysis, focused research, and actionable recommendations.',
      features: [
        'User experience analysis',
        'Friction and opportunity identification',
        'Prioritized strategic recommendations',
        'Research focused on real problems'
      ],
      scheduleButton: 'Schedule a meeting',
      learnMoreButton: 'Learn more'
    },
    projects: [
      {
        title: 'Neobank App',
        category: 'Fintech',
        description: 'App design for a neobank in Brazil. Innovative credit limits.',
        image: neobankImage,
        tags: ['Research', 'UX/UI', 'Strategy']
      },
      {
        title: 'AI-Powered App',
        category: 'Fintech',
        description: 'App launched in the USA that analyzes user data and responds with artificial intelligence, helping them obtain financial products.',
        image: aiAppImage,
        tags: ['AI', 'UX/UI', 'Research']
      },
      {
        title: 'Credit Portal',
        category: 'Fintech',
        description: 'Worker data analysis platform that offers personalized financial products.',
        image: portalCreditosImage,
        tags: ['UX/UI', 'Research', 'Data Analysis']
      },
      {
        title: 'Wallet Pets App',
        category: 'Fintech',
        description: 'App where people can order pet food, earn points and have their own wallet for their pet.',
        image: petsAppImage,
        tags: ['UX/UI', 'E-commerce', 'Wallet']
      }
    ],
    projectsSection: {
      title: 'Featured Projects',
      subtitle: 'My most recent work focused on Fintech and Artificial Intelligence for the main markets in the Americas: Brazil, United States, Mexico and Chile'
    },
    testimonials: {
      title: 'Testimonials',
      subtitle: 'What people I\'ve worked with say',
      items: [
        {
          quote: 'Working with Libe for over three years has been an exceptional experience. She has been a fundamental piece in consolidating my product team, demonstrating an unparalleled professional growth and a constant willingness to go the extra mile.\n\nHer technical and strategic capabilities shone at key moments: from optimizing Bankuish\'s Marketplace 1.0, where she significantly improved the user experience, to the challenge of defining and creating the Filance AI application for the US market, adapting to a completely new environment. More recently, her agility and creativity were vital for the successful launch of our Bankuish 2.0 MVP in November 2025 in the Brazilian market.\n\nLibe combines rigorous market research with cutting-edge design. She is a professional who is always seeking to upskill and elevate the team\'s standards. She is the ideal person for any ambitious product challenge.',
          author: 'Adriana Galarza',
          role: 'Product Director (CPO)',
          initials: 'AG'
        },
        {
          quote: 'I had the pleasure of working with Libe for almost two years from my role as Project Manager of design teams. During this time, she performed as a UX/UI Designer with a comprehensive view, solid design criteria, and a strong focus on both the user and business objectives.\n\nShe stood out for the quality of her deliverables, as well as her innovation and creativity, providing well-thought-out and differential solutions. Additionally, she demonstrated great leadership, communication, and collaboration skills with different roles, always maintaining a proactive, responsible, and results-oriented attitude, which was key in the projects we worked on.\n\nBeyond the technical aspects, I especially highlight her interpersonal skills and her ability to generate and sustain an excellent work environment.\n\nI highly recommend Libe for her professional solidity, commitment, and the positive impact she generates in the teams she works with.',
          author: 'Diego Herrando',
          role: 'Project Leader / Agility Consultant',
          initials: 'DH'
        },
        {
          quote: 'Libe is a highly committed and reflective UX/UI designer. Working with her was always easy because she combines solid design criteria with a proactive and analytical mindset.\n\nShe brings an innovative approach to problem-solving, especially when exploring new tools and alternative ways to improve product experiences. She is naturally curious, challenges assumptions when necessary, and contributes with ideas that add real value.\n\nBeyond execution, Libe understands the overall product landscape and user needs, making her a solid collaborator in both design and strategic discussions. I would confidently recommend her to any team looking for a designer who thinks ahead and delivers with purpose.',
          author: 'David Santamaria',
          role: 'Product Designer Manager',
          initials: 'DS'
        }
      ]
    }
  },
  pt: {
    nav: {
      projects: 'Projetos',
      consulting: 'Consultoria',
      process: 'Processo',
      skills: 'Habilidades',
      contact: 'Contato'
    },
    consulting: {
      title: 'Consultoria UX',
      subtitle: 'Para Startups e Equipes de Produto',
      description: 'Ajudo equipes digitais a tomar melhores decisões de produto através de análise UX estratégica, pesquisa focada e recomendações acionáveis.',
      features: [
        'Análise de experiência do usuário',
        'Identificação de fricções e oportunidades',
        'Recomendações estratégicas priorizadas',
        'Pesquisa focada em problemas reais'
      ],
      scheduleButton: 'Agendar reunião',
      learnMoreButton: 'Ver mais informações'
    },
    projects: [
      {
        title: 'Neobank App',
        category: 'Fintech',
        description: 'Design de App para neobank no Brasil. Limites de crédito inovadores.',
        image: neobankImage,
        tags: ['Research', 'UX/UI', 'Strategy']
      },
      {
        title: 'App com Inteligência Artificial',
        category: 'Fintech',
        description: 'App lançado nos EUA que analisa os dados dos usuários e responde com inteligência artificial, ajudando-os a obter produtos financeiros.',
        image: aiAppImage,
        tags: ['AI', 'UX/UI', 'Research']
      },
      {
        title: 'Portal de Créditos',
        category: 'Fintech',
        description: 'Plataforma de análise de dados de trabalhadores que oferece produtos financeiros personalizados.',
        image: portalCreditosImage,
        tags: ['UX/UI', 'Research', 'Análise de dados']
      },
      {
        title: 'Wallet Pets App',
        category: 'Fintech',
        description: 'Aplicativo para pedir comida de animais de estimação, ganhar pontos e ter uma carteira virtual para seu pet.',
        image: petsAppImage,
        tags: ['UX/UI', 'E-commerce', 'Wallet']
      }
    ],
    projectsSection: {
      title: 'Projetos Destacados',
      subtitle: 'Meus trabalhos mais recentes com foco em Fintech e Inteligência Artificial para os principais mercados da América: Brasil, Estados Unidos, México e Chile'
    },
    testimonials: {
      title: 'Referências',
      subtitle: 'O que dizem quem trabalhou comigo',
      items: [
        {
          quote: 'Trabalhar com Libe durante mais de três anos tem sido uma experiência excepcional. Ela tem sido uma peça fundamental para consolidar minha equipe de produto, demonstrando um crescimento profissional imparável e uma disposição constante para ir além.\n\nSua capacidade técnica e estratégica brilhou em momentos chave: desde a otimização do Marketplace 1.0 do Bankuish, onde melhorou significativamente a experiência do usuário, até o desafio de definir e criar o aplicativo Filance AI para o mercado dos EUA, adaptando-se a um ambiente completamente novo. Mais recentemente, sua agilidade e criatividade foram vitais para o lançamento bem-sucedido de nosso MVP do Bankuish 2.0 em novembro de 2025 no mercado brasileiro.\n\nLibe combina pesquisa de mercado rigorosa com design de vanguarda. É uma profissional que sempre busca se capacitar e elevar o padrão da equipe. É a pessoa ideal para qualquer desafio de produto ambicioso.',
          author: 'Adriana Galarza',
          role: 'Diretora de Produto (CPO)',
          initials: 'AG'
        },
        {
          quote: 'Tive o prazer de trabalhar com Libe por quase dois anos no meu papel como Project Manager de equipes de design. Durante este tempo, ela atuou como UX/UI Designer com uma visão abrangente, sólido critério de design e um forte foco tanto no usuário quanto nos objetivos do negócio.\n\nEla se destacou pela qualidade de seus entregáveis, bem como por sua inovação e criatividade, fornecendo soluções bem pensadas e diferenciais. Além disso, demonstrou grande capacidade de liderança, comunicação e colaboração com diferentes funções, mantendo sempre uma atitude proativa, responsável e orientada para resultados, sendo isso fundamental nos projetos que trabalhamos.\n\nAlém do técnico, destaco especialmente suas habilidades interpessoais e sua capacidade de gerar e manter um excelente clima de trabalho.\n\nRecomendo amplamente Libe por sua solidez profissional, comprometimento e o impacto positivo que gera nas equipes com as quais trabalha.',
          author: 'Diego Herrando',
          role: 'Project Leader / Agility Consultant',
          initials: 'DH'
        },
        {
          quote: 'Libe é uma designer UX/UI altamente comprometida e reflexiva. Trabalhar com ela sempre foi fácil porque combina sólido critério de design com uma mentalidade proativa e analítica.\n\nEla traz uma abordagem inovadora para a resolução de problemas, especialmente ao explorar novas ferramentas e formas alternativas de melhorar as experiências de produto. É curiosa por natureza, desafia suposições quando necessário e contribui com ideias que agregam valor real.\n\nAlém da execução, Libe compreende o panorama geral do produto e as necessidades do usuário, o que a torna uma colaboradora sólida tanto em discussões de design quanto estratégicas. Eu a recomendaria com confiança a qualquer equipe que busque uma designer que pensa à frente e entrega com propósito.',
          author: 'David Santamaria',
          role: 'Product Designer Manager',
          initials: 'DS'
        }
      ]
    }
  }
};

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  initials: string;
}

function TestimonialsCarousel({ items }: { items: TestimonialItem[] }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % items.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, [items.length]);

  const goTo = (index: number) => {
    setCurrent(index);
    startTimer();
  };

  const prev = () => goTo((current - 1 + items.length) % items.length);
  const next = () => goTo((current + 1) % items.length);

  const item = items[current];

  return (
    <div className="relative">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-white/50 min-h-[320px] flex flex-col justify-between">
        <div>
          <svg className="mb-4 text-orange-400" width="36" height="36" viewBox="0 0 24 24" fill="none">
            <path d="M10 9V5L6 9H10ZM18 9V5L14 9H18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
          </svg>
          <blockquote className="text-base md:text-lg mb-6 leading-relaxed text-gray-700 whitespace-pre-line">
            {item.quote}
          </blockquote>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-rose-400 rounded-full flex items-center justify-center text-white text-base flex-shrink-0">
              {item.initials}
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-base">{item.author}</p>
              <p className="text-sm text-gray-600">{item.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={prev} className="w-8 h-8 rounded-full bg-orange-100 hover:bg-orange-200 flex items-center justify-center transition-colors" aria-label="Anterior">
              <ChevronLeft size={16} className="text-orange-600" />
            </button>
            <button onClick={next} className="w-8 h-8 rounded-full bg-orange-100 hover:bg-orange-200 flex items-center justify-center transition-colors" aria-label="Siguiente">
              <ChevronRight size={16} className="text-orange-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-orange-500 w-6' : 'bg-orange-200'}`}
            aria-label={`Ir al testimonio ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export function Portfolio() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const t = translations[language];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/50 backdrop-blur-md border-b border-gray-200/50 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between relative">
          <div className="text-xl text-gray-900">
            Portfolio<span className="text-orange-500">.</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="#proyectos" className="text-gray-700 hover:text-orange-500 transition-colors">
              {t.nav.projects}
            </a>
            <a href="#consultoria" className="text-gray-700 hover:text-orange-500 transition-colors">
              {t.nav.consulting}
            </a>
            <a href="#proceso" className="text-gray-700 hover:text-orange-500 transition-colors">
              {t.nav.process}
            </a>
            <a href="#habilidades" className="text-gray-700 hover:text-orange-500 transition-colors">
              {t.nav.skills}
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-orange-500 transition-colors">
              {t.nav.contact}
            </a>
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : language === 'en' ? 'pt' : 'es')}
              className="flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors"
            >
              <Globe size={18} />
              <span className="font-medium">{language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-orange-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out relative ${
            isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 relative">
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4 relative">
              <a
                href="#proyectos"
                className="text-gray-700 hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.projects}
              </a>
              <a
                href="#consultoria"
                className="text-gray-700 hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.consulting}
              </a>
              <a
                href="#proceso"
                className="text-gray-700 hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.process}
              </a>
              <a
                href="#habilidades"
                className="text-gray-700 hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.skills}
              </a>
              <a
                href="#contacto"
                className="text-gray-700 hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.contact}
              </a>
              <button
                onClick={() => {
                  setLanguage(language === 'es' ? 'en' : language === 'en' ? 'pt' : 'es');
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors w-fit"
              >
                <Globe size={18} />
                <span className="font-medium">{language === 'es' ? 'EN' : language === 'en' ? 'PT' : 'ES'}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <NewHero language={language} />

      {/* About Me Section */}
      <AboutMe language={language} />

      {/* Featured Projects */}
      <section id="proyectos" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16 relative">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
              {t.projectsSection.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.projectsSection.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 relative">
            {t.projects.map((project, index) => (
              <div
                key={index}
                className="opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
              >
                <ProjectCard
                  {...project}
                  onClick={
                    index === 0 ? () => navigate('/proyectos/neobank') :
                    index === 1 ? () => navigate('/proyectos/ai-app') :
                    index === 2 ? () => navigate('/proyectos/portal-creditos') :
                    () => navigate('/proyectos/pets-app')
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Section */}
      <section id="consultoria" className="py-24 px-6 bg-gradient-to-br from-orange-50 to-amber-50 relative">
        <div className="max-w-6xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center relative">
            {/* Content Left */}
            <div>
              <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
                {t.consulting.title}
              </h2>
              <p className="text-xl text-orange-600 font-medium mb-6">
                {t.consulting.subtitle}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {t.consulting.description}
              </p>

              <div className="grid gap-4 mb-8">
                {t.consulting.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://calendly.com/paredeslibe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30"
                >
                  <Calendar size={20} />
                  {t.consulting.scheduleButton}
                </a>
                <button
                  onClick={() => navigate('/proyectos/consulting')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-orange-500 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors"
                >
                  <Info size={20} />
                  {t.consulting.learnMoreButton}
                </button>
              </div>
            </div>

            {/* Image Right */}
            <div className="relative order-first md:order-last">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={consultingImage}
                  alt="UX Consulting"
                  className="w-full h-full aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <div id="proceso" className="relative">
        <ProcessSection language={language} />
      </div>

      {/* Skills Section */}
      <div id="habilidades" className="relative">
        <SkillsSection language={language} />
      </div>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-gradient-to-br from-orange-50 via-rose-50 to-amber-50 relative overflow-hidden">
        {/* Decorative gradient blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-8 text-center relative">
            <h2 className="text-3xl md:text-4xl mb-3 text-gray-900">
              {t.testimonials.title}
            </h2>
            <p className="text-lg text-gray-600">
              {t.testimonials.subtitle}
            </p>
          </div>

          <TestimonialsCarousel items={t.testimonials.items} />
        </div>
      </section>

      {/* Footer */}
      <div id="contacto" className="relative">
        <Footer language={language} />
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5491132914989"
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackWhatsAppClick}
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-50 group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute right-16 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Hablemos por WhatsApp
        </span>
      </a>
    </div>
  );
}
