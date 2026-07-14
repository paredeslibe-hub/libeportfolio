import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import libePhoto from '../../../assets/libe-perfil.png';
import {
  Building2,
  Camera,
  FileText,
  Video,
  Home,
  Megaphone,
  Palette,
  LayoutGrid,
  Eye,
  Star,
  Instagram,
  Mail,
  MessageCircle,
  ChevronDown,
  X,
  CheckCircle,
} from 'lucide-react';

const WHATSAPP_NUMBER = '5491132914989';
const INSTAGRAM_URL = 'https://www.instagram.com/libe.designer/';
const EMAIL = 'paredeslibe@gmail.com';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const services = [
  {
    Icon: LayoutGrid,
    title: 'Social Media & Conteúdo',
    description: 'Posts, stories e carrosséis que valorizam cada detalhe do seu projeto e geram consultas reais.',
  },
  {
    Icon: Camera,
    title: 'Tratamento de Fotos',
    description: 'Edição profissional que transforma fotos comuns em imagens que impressionam e vendem.',
  },
  {
    Icon: Video,
    title: 'Reels e Edição de Vídeo',
    description: 'Vídeos envolventes que mostram o estilo de vida e as experiências do seu negócio.',
  },
  {
    Icon: FileText,
    title: 'PDFs e Apresentações',
    description: 'Materiais elegantes para envio a clientes, com identidade premium e profissional.',
  },
  {
    Icon: Building2,
    title: 'Branding & Identidade Visual',
    description: 'Marca e identidade visual que transmite solidez, confiança e diferenciação no mercado.',
  },
  {
    Icon: Home,
    title: 'Websites & Landing Pages',
    description: 'Presença digital que converte visitantes em clientes com design estratégico.',
  },
  {
    Icon: Megaphone,
    title: 'Campanhas de Lançamento',
    description: 'Identidade visual completa para lançamentos de projetos com impacto máximo.',
  },
  {
    Icon: Palette,
    title: 'Materiais Gráficos',
    description: 'Banners, cartões, folders e tudo que seu negócio precisa para se destacar.',
  },
];

interface PortfolioItem {
  id: number;
  category: string;
  label: string;
  description: string;
  image: string;
  video?: string;
  mockup?: 'desktop' | 'mobile';
  tall: boolean;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    category: 'Social Media',
    label: 'Gestão de Redes Sociais',
    description: 'Estratégia visual e produção de conteúdo para Instagram, gerando mais engajamento e consultas.',
    image: '/inmobiliaria/social-agency.jpg',
    video: '/inmobiliaria/portada.mp4',
    tall: true,
  },
  {
    id: 2,
    category: 'Branding de Luxo',
    label: 'Identidade Visual Premium',
    description: 'Marca completa com logotipo, paleta e tipografia para posicionamento de alto padrão.',
    image: '/inmobiliaria/luxury-branding.jpg',
    tall: false,
  },
  {
    id: 3,
    category: 'Antes & Depois',
    label: 'Tratamento de Fotos — Interior',
    description: 'Edição profissional que transforma qualquer foto em material de alto impacto visual.',
    image: '/inmobiliaria/before-after-interior.jpg',
    tall: false,
  },
  {
    id: 4,
    category: 'Apresentações',
    label: 'PDFs e Materiais Premium',
    description: 'Materiais elegantes para apresentação e envio a clientes com identidade visual sofisticada.',
    image: '/inmobiliaria/presentations.jpg',
    tall: true,
  },
  {
    id: 5,
    category: 'Antes & Depois',
    label: 'Tratamento de Fachada',
    description: 'Substituição de céu, correção de iluminação e ajuste de cores para máximo apelo visual.',
    image: '/inmobiliaria/before-after-exterior.jpg',
    tall: false,
  },
  {
    id: 6,
    category: 'Website',
    label: 'Landing Page',
    description: 'Landing page completa para espaço de eventos: hero impactante, galeria, formulário de contacto e identidade visual elegante.',
    image: '/inmobiliaria/landing-page.png',
    video: '/inmobiliaria/web-quintas.mp4',
    tall: true,
  },
];

const testimonials = [
  {
    name: 'Adriana Galarza',
    role: 'Diretora de Produto (CPO)',
    initials: 'AG',
    text: 'Trabalhar com Libe durante mais de três anos tem sido uma experiência excepcional. Libe combina pesquisa de mercado rigorosa com design de vanguarda. É a pessoa ideal para qualquer desafio de produto ambicioso.',
  },
  {
    name: 'Diego Herrando',
    role: 'Project Leader / Agility Consultant',
    initials: 'DH',
    text: 'Ela se destacou pela qualidade de seus entregáveis, inovação e criatividade, fornecendo soluções diferenciais. Recomendo amplamente Libe por sua solidez profissional, comprometimento e o impacto positivo que gera nas equipes.',
  },
  {
    name: 'David Santamaria',
    role: 'Product Designer Manager',
    initials: 'DS',
    text: 'Libe é uma designer UX/UI altamente comprometida e reflexiva. Eu a recomendaria com confiança a qualquer equipe que busque uma designer que pensa à frente e entrega com propósito.',
  },
];

export function RealEstateLP() {
  const [scrolled, setScrolled] = useState(false);
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const prev = document.title;
    document.title = 'Marketing Visual & Design | Libe Paredes';
    return () => { document.title = prev; };
  }, []);

  const openWhatsApp = (message: string) => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `Olá Libe! 👋\n\nMe chamo *${formData.name}*.\n📱 ${formData.phone}\n\n` +
      `${formData.message}\n\n_Mensagem enviada pelo site._`;
    openWhatsApp(msg);
    setSubmitted(true);
  };

  const activeItem = portfolioItems.find((p) => p.id === activeModal);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">

      {/* ── NAV ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
            : 'bg-white/70 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-lg font-semibold tracking-wide text-gray-900">
            Libe <span className="text-orange-500">Paredes</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
            <a href="#servicos" className="hover:text-orange-500 transition-colors">Serviços</a>
            <a href="#portfolio" className="hover:text-orange-500 transition-colors">Portfólio</a>
            <a href="#sobre" className="hover:text-orange-500 transition-colors">Sobre</a>
            <a href="#contato" className="hover:text-orange-500 transition-colors">Contato</a>
          </div>

          <button
            onClick={() => openWhatsApp('Olá Libe! Gostaria de solicitar um orçamento.')}
            className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-rose-500 text-white text-sm rounded-full transition-all hover:shadow-lg hover:shadow-orange-200"
          >
            Solicitar orçamento
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-orange-50 via-rose-50 to-purple-50">

        {/* Ambient orb */}
        <motion.div
          className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-orange-200/30 blur-[160px] pointer-events-none"
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-purple-200/20 blur-[120px] pointer-events-none"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — text */}
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.p
                variants={fadeUp}
                className="text-orange-500 text-xs font-medium tracking-[0.2em] uppercase mb-6"
              >
                Design Visual & Marketing
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl xl:text-[3.25rem] font-bold text-gray-900 leading-[1.1] mb-6"
              >
                Transformo negócios em{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">
                  experiências visuais
                </span>{' '}
                que vendem.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed"
              >
                Marketing e design visual para imobiliárias, construtoras e empreendimentos.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-4 mb-14"
              >
                <a
                  href="#portfolio"
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-full font-medium hover:shadow-xl hover:shadow-orange-200 transition-all text-center"
                >
                  Ver portfólio
                </a>
                <button
                  onClick={() => openWhatsApp('Olá Libe! Gostaria de solicitar um orçamento.')}
                  className="px-8 py-4 border border-gray-200 text-gray-700 rounded-full font-medium hover:border-orange-400 hover:text-orange-500 transition-all"
                >
                  Solicitar orçamento
                </button>
              </motion.div>

              <motion.div
                variants={stagger}
                className="flex gap-10 pt-8 border-t border-gray-200"
              >
                {[
                  { val: '50+', label: 'Projetos entregues' },
                  { val: '3×', label: 'Mais contatos' },
                  { val: '100%', label: 'Satisfação' },
                ].map((s, i) => (
                  <motion.div key={i} variants={fadeUp}>
                    <div className="text-2xl font-bold text-gray-900">{s.val}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
              className="relative hidden lg:flex justify-center"
            >
              {/* Soft glow */}
              <div className="absolute inset-8 bg-orange-200/40 rounded-[40px] blur-3xl" />

              {/* Photo */}
              <div className="relative w-full max-w-[400px] aspect-[3/4] rounded-[32px] overflow-hidden shadow-2xl shadow-orange-100 ring-1 ring-black/5">
                <img
                  src={libePhoto}
                  alt="Libe Paredes — Visual Designer"
                  className="w-full h-full object-cover object-top"
                />
                {/* Name badge */}
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-orange-300 text-[11px] font-light tracking-[0.2em] uppercase mb-1">
                    Visual Designer
                  </p>
                  <p className="text-white font-semibold text-xl">Libe Paredes</p>
                </div>
              </div>

              {/* Accent dots */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full border border-orange-200" />
              <div className="absolute top-10 -right-3 w-2.5 h-2.5 rounded-full bg-orange-400" />
            </motion.div>

          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* ── PRODUTO DESTAQUE: Site para Imobiliárias ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left: image mockup */}
            <motion.div variants={fadeUp} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-violet-100">
                <img
                  src="/inmobiliaria/site-corretor.png"
                  alt="Site para Imobiliárias e Corretores"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#6C3CF0] text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
                ✦ Demo disponível
              </div>
            </motion.div>

            {/* Right: copy + features + CTA */}
            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-[#FF8A3D] mb-3 block">
                  Produto Digital
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                  Site completo para<br />
                  <span className="text-[#6C3CF0]">Imobiliárias e Corretores</span>
                </h2>
                <p className="text-gray-500 text-base leading-relaxed">
                  Uma plataforma profissional pronta para atrair compradores, gerenciar leads e fechar mais negócios — com design premium e tecnologia de IA integrada.
                </p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3">
                {[
                  { icon: '🏠', title: 'Portal de Imóveis', desc: 'Catálogo completo com fotos, preços, filtros e busca em tempo real' },
                  { icon: '🤖', title: 'Assistente de IA', desc: 'Chatbot inteligente que recomenda imóveis e captura leads automaticamente' },
                  { icon: '📋', title: 'CRM integrado', desc: 'Gestão de leads, agendamentos de visitas e status de negociação' },
                  { icon: '❤️', title: 'Favoritos & Comparador', desc: 'Clientes salvam e comparam imóveis de interesse com login próprio' },
                  { icon: '⚙️', title: 'Painel Administrativo', desc: 'Gestão de propriedades, publicação de imóveis e relatórios de leads' },
                  { icon: '🌐', title: 'Multi-idioma', desc: 'Português e Espanhol nativos para atender mercados Latam e Brasil' },
                ].map((f) => (
                  <li key={f.title} className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0 mt-0.5">{f.icon}</span>
                    <div>
                      <span className="font-semibold text-gray-800 text-sm">{f.title}</span>
                      <span className="text-gray-500 text-sm"> — {f.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => openWhatsApp('Olá Libe! Quero solicitar uma demo do site para imobiliária/corretor. Pode me mostrar como funciona?')}
                  className="flex items-center justify-center gap-2 bg-[#6C3CF0] hover:bg-[#5a2fd8] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-violet-200 hover:-translate-y-0.5"
                >
                  <MessageCircle size={18} />
                  Solicitar Demo
                </button>
                <a
                  href="https://inmobiliaria-one-liart.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border-2 border-[#6C3CF0] text-[#6C3CF0] font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-violet-50"
                >
                  <Eye size={18} />
                  Ver Demo ao vivo
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="servicos" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="text-orange-500 text-xs font-medium tracking-[0.2em] uppercase mb-4"
            >
              Serviços
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl text-gray-900 font-bold mb-4"
            >
              Design que gera resultados
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 max-w-xl mx-auto">
              Cada serviço foi pensado para maximizar o valor percebido do seu negócio e gerar mais contatos e conversões.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {services.map(({ Icon, title, description }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group border border-gray-100"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-rose-500 transition-all duration-300">
                  <Icon
                    size={22}
                    className="text-orange-500 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-gray-900 font-semibold text-sm mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="text-orange-500 text-xs font-medium tracking-[0.2em] uppercase mb-4"
            >
              Portfólio
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl text-gray-900 font-bold mb-4">
              Resultados visuais que impressionam
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 max-w-xl mx-auto">
              Cada peça foi criada para posicionar negócios no segmento premium do mercado.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
            style={{ gridAutoRows: '200px' }}
          >
            {portfolioItems.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group ${item.tall ? 'row-span-2' : ''}`}
                style={{ minHeight: item.tall ? '400px' : '200px' }}
                onClick={() => setActiveModal(item.id)}
              >
                {item.video ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={item.image}
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>
                ) : item.mockup === 'desktop' ? (
                  /* Desktop browser mockup */
                  <div className="absolute inset-0 flex flex-col bg-[#1C1C1E]">
                    {/* Browser chrome bar */}
                    <div className="flex items-center gap-1.5 px-3 py-2 bg-[#2C2C2E] flex-shrink-0 border-b border-white/5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] flex-shrink-0" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E] flex-shrink-0" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#28C840] flex-shrink-0" />
                      <div className="flex-1 mx-2 bg-[#3A3A3C] rounded-md px-2 py-0.5 text-[7px] text-gray-400 truncate">
                        quintabomba.com.ar
                      </div>
                    </div>
                    {/* Page screenshot — shows top of page */}
                    <div className="flex-1 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.label}
                        className="w-full transition-transform duration-700 group-hover:scale-105"
                        style={{ objectPosition: 'top' }}
                      />
                    </div>
                  </div>
                ) : (
                  <img
                    src={item.image}
                    alt={item.label}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}

                <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  <span className="text-xs text-orange-300 font-medium mb-1">{item.category}</span>
                  <span className="text-white font-semibold text-sm leading-snug">{item.label}</span>
                </div>

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                    <Eye size={20} className="text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mt-10"
          >
            <button
              onClick={() => openWhatsApp('Olá! Gostaria de ver mais exemplos do seu portfólio.')}
              className="px-8 py-3 border border-orange-200 text-orange-500 rounded-full hover:bg-orange-50 transition-all text-sm"
            >
              Ver mais trabalhos →
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="sobre" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              <div className="absolute inset-4 bg-orange-100/60 rounded-[40px] blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-xl ring-1 ring-black/5">
                <img
                  src={libePhoto}
                  alt="Libe Paredes — Visual Designer"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-orange-300 text-xs font-light tracking-[0.2em] uppercase mb-1">Visual Designer</p>
                  <p className="text-white text-2xl font-semibold">Libe Paredes</p>
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                className="text-orange-500 text-xs font-medium tracking-[0.2em] uppercase mb-4"
              >
                Sobre mim
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Libe Paredes
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-400 text-lg mb-8">
                Visual Designer
              </motion.p>

              <motion.div variants={stagger} className="space-y-4 text-gray-500 leading-relaxed">
                <motion.p variants={fadeUp}>
                  Combinei minha paixão por design e narrativa visual com o mercado digital — criando experiências que comunicam valor e geram negócios reais.
                </motion.p>
                <motion.p variants={fadeUp}>
                  Trabalho com imobiliárias, construtoras, empreendimentos de turismo e proprietários que entendem que a apresentação visual é o primeiro passo da venda.
                </motion.p>
                <motion.p variants={fadeUp}>
                  Meu foco é transformar cada projeto em uma experiência visual memorável — do design de redes sociais até campanhas completas de lançamento.
                </motion.p>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-8">
                {['Social Media', 'Branding', 'Imóveis', 'Turismo', 'Construtoras', 'Lançamentos'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full border border-orange-200 text-orange-500 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8">
                <button
                  onClick={() => openWhatsApp('Olá Libe! Vi seu perfil no site e gostaria de conversar.')}
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-orange-200 transition-all"
                >
                  Fale comigo
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-6 bg-gradient-to-br from-orange-50 via-rose-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="text-orange-500 text-xs font-medium tracking-[0.2em] uppercase mb-4"
            >
              Depoimentos
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl text-gray-900 font-bold"
            >
              O que dizem os clientes
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="text-orange-200 text-7xl font-serif leading-none mb-2 select-none">"</div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="text-orange-400 fill-orange-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-br from-orange-400 to-rose-500 rounded-full flex-shrink-0 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{t.initials}</span>
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contato" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="text-orange-500 text-xs font-medium tracking-[0.2em] uppercase mb-4"
            >
              Contato
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl text-gray-900 font-bold mb-4">
              Vamos conversar sobre seu projeto?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 max-w-xl mx-auto">
              Consulta gratuita sobre o potencial visual do seu negócio. Sem compromisso.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Channels */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-4"
            >
              <motion.button
                variants={fadeUp}
                onClick={() => openWhatsApp('Olá Libe! Vim do seu site e gostaria de uma consulta gratuita.')}
                className="w-full flex items-center gap-4 p-5 bg-green-50 border border-green-200 rounded-2xl hover:bg-green-100 transition-all text-left"
              >
                <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">WhatsApp</p>
                  <p className="text-gray-500 text-sm">Consulta gratuita · Resposta rápida</p>
                </div>
              </motion.button>

              <motion.a
                variants={fadeUp}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-4 p-5 bg-rose-50 border border-rose-200 rounded-2xl hover:bg-rose-100 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#E1306C] to-[#F77737] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Instagram size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">Instagram</p>
                  <p className="text-gray-500 text-sm">@libe.designer · Ver trabalhos</p>
                </div>
              </motion.a>

              <motion.a
                variants={fadeUp}
                href={`mailto:${EMAIL}`}
                className="w-full flex items-center gap-4 p-5 bg-orange-50 border border-orange-200 rounded-2xl hover:bg-orange-100 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-rose-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">E-mail</p>
                  <p className="text-gray-500 text-sm">{EMAIL}</p>
                </div>
              </motion.a>

              <motion.div
                variants={fadeUp}
                className="p-4 rounded-2xl border border-orange-200 bg-orange-50"
              >
                <p className="text-orange-600 text-xs font-medium">
                  ✦ Aceito apenas 3 novos projetos por mês para garantir qualidade e atenção total a cada cliente.
                </p>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    required
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp / Telefone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
                  />
                  <textarea
                    required
                    placeholder="Fale sobre seu projeto ou negócio..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-xl font-medium hover:shadow-xl hover:shadow-orange-200 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} />
                    Enviar pelo WhatsApp
                  </button>
                  <p className="text-center text-xs text-gray-400">
                    Ao enviar, você será redirecionado ao WhatsApp. Sem spam.
                  </p>
                </form>
              ) : (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={30} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Mensagem enviada!</h3>
                  <p className="text-gray-500 mb-4">O WhatsApp foi aberto com sua mensagem. Até logo!</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-orange-500 text-sm hover:underline"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-10 px-6 border-t border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-lg font-semibold text-gray-900">
            Libe <span className="text-orange-500">Paredes</span>
          </div>

          <p className="text-gray-400 text-sm">
            © 2026 Libe Paredes · Marketing Visual & Design
          </p>

          <div className="flex gap-5">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <button
              onClick={() => openWhatsApp('Olá!')}
              className="text-gray-400 hover:text-orange-500 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </button>
            <a
              href={`mailto:${EMAIL}`}
              className="text-gray-400 hover:text-orange-500 transition-colors"
              aria-label="E-mail"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ── */}
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] hover:bg-[#20B955] rounded-full flex items-center justify-center shadow-lg z-50 group transition-colors"
        aria-label="Fale no WhatsApp"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={26} className="text-white" />
        <span className="absolute right-16 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Fale no WhatsApp
        </span>
      </motion.a>

      {/* ── PORTFOLIO MODAL ── */}
      {activeItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setActiveModal(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative bg-white rounded-3xl overflow-hidden max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Media header */}
            <div className={`relative overflow-hidden ${activeItem.mockup === 'desktop' ? 'h-64 bg-[#1C1C1E]' : 'h-44'}`}>
              {activeItem.video ? (
                <video
                  src={activeItem.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : activeItem.mockup === 'desktop' ? (
                <div className="flex flex-col h-full">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#2C2C2E] flex-shrink-0 border-b border-white/5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                    <div className="flex-1 mx-3 bg-[#3A3A3C] rounded-md px-3 py-1 text-[9px] text-gray-400 truncate">
                      quintabomba.com.ar
                    </div>
                  </div>
                  {/* Scrollable page preview */}
                  <div className="flex-1 overflow-y-auto">
                    <img
                      src={activeItem.image}
                      alt={activeItem.label}
                      className="w-full"
                    />
                  </div>
                </div>
              ) : (
                <img
                  src={activeItem.image}
                  alt={activeItem.label}
                  className="w-full h-full object-cover"
                />
              )}
              {activeItem.mockup !== 'desktop' && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              )}
              <div
                className="absolute inset-0 opacity-0"
                style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />
            </div>

            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 w-8 h-8 bg-black/20 rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-colors"
              aria-label="Fechar"
            >
              <X size={16} />
            </button>

            <div className="p-7">
              <p className="text-orange-500 text-xs font-medium mb-1">{activeItem.category}</p>
              <h3 className="text-gray-900 text-xl font-semibold mb-3">{activeItem.label}</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">{activeItem.description}</p>
              <button
                onClick={() => {
                  setActiveModal(null);
                  openWhatsApp(`Olá Libe! Vi o trabalho "${activeItem.label}" no seu portfólio e gostaria de saber mais sobre este serviço.`);
                }}
                className="w-full py-3 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-xl font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                Quero este serviço
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
