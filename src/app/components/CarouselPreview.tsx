import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Instagram, MessageCircle, Globe, MapPin, TrendingUp, Eye, MessageSquare, Award } from 'lucide-react';

const INSTAGRAM = '@libe.designer';
const WEBSITE = 'seusite.com.br';

const slides = [
  {
    id: 1,
    label: '01 / 08',
    theme: 'dark',
    content: (
      <div className="relative w-full h-full flex flex-col justify-between p-10">
        {/* Photo overlay background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0E17]/60 via-[#0F0E17]/70 to-[#0F0E17]/95" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1080&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Left accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#6C3CF0] to-[#FF8A3D]" />

        <div className="relative z-10">
          <p className="text-[#FF8A3D] text-[11px] font-light tracking-[0.2em] uppercase mb-2">
            Libe.Imóveis
          </p>
          <p className="text-[#A090C0] text-[11px] font-light tracking-widest uppercase">
            Marketing Imobiliário · Bombinhas, SC
          </p>
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white leading-[1.1] mb-3">
            Seu imóvel<br />vale R$ 1 milhão.
          </h1>
          <p className="text-5xl font-light text-[#F5F0E8] leading-[1.1]">
            Mas sua apresentação<br />transmite isso?
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-2">
          <span className="text-[#FF8A3D] text-sm font-light">Deslize para descobrir</span>
          <span className="text-[#FF8A3D] text-sm">→</span>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    label: '02 / 08',
    theme: 'light',
    content: (
      <div className="w-full h-full flex flex-col justify-between p-10 bg-[#F5F0E8]">
        <p className="text-[#FF8A3D] text-[11px] font-light tracking-[0.2em] uppercase">
          O Problema
        </p>

        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-[#0F0E17] text-4xl font-bold leading-[1.15] mb-10">
            Imóveis incríveis<br />podem passar<br />despercebidos.
          </h2>

          <div className="space-y-5">
            {[
              'Fotos escuras e sem tratamento',
              'Posts genéricos sem identidade',
              'Falta de narrativa visual',
              'Apresentações amadoras',
            ].map((item) => (
              <div key={item} className="flex items-center gap-4">
                <span className="text-[#FF8A3D] font-bold text-lg w-5 flex-shrink-0">✕</span>
                <span className="text-[#5A5A72] text-base font-normal">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-[#9090A0] text-xs font-light leading-relaxed">
          E você continua perdendo leads para quem investe em apresentação.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    label: '03 / 08',
    theme: 'dark',
    content: (
      <div className="relative w-full h-full flex flex-col justify-between p-10 bg-[#0F0E17] overflow-hidden">
        {/* Orb */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#6C3CF0]/20 rounded-full blur-[100px]" />
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #6C3CF0 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <p className="relative z-10 text-[#6C3CF0] text-[11px] font-light tracking-[0.2em] uppercase">
          O Que Isso Custa
        </p>

        <div className="relative z-10 flex-1 flex flex-col justify-center">
          <h2 className="text-white text-4xl font-bold leading-[1.15] mb-8">
            Quando a apresentação<br />não comunica valor:
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { icon: <TrendingUp size={18} />, text: 'Menos cliques' },
              { icon: <Eye size={18} />, text: 'Menos visitas' },
              { icon: <MessageSquare size={18} />, text: 'Menos contatos' },
              { icon: <Award size={18} />, text: 'Menor valor percebido' },
            ].map(({ icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-3 border border-white/10 rounded-xl p-4 bg-white/[0.03]"
              >
                <span className="text-[#6C3CF0]">{icon}</span>
                <span className="text-[#F5F0E8] text-sm font-light">{text}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p
              className="text-7xl font-bold"
              style={{
                background: 'linear-gradient(135deg, #6C3CF0, #FF8A3D)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              -70%
            </p>
            <p className="text-[#F5F0E8] text-sm font-light mt-2">
              de contatos com marketing visual fraco*
            </p>
          </div>
        </div>

        <p className="relative z-10 text-[#5A5A72] text-[11px]">
          *Baseado em estudos de comportamento de compra imobiliária online
        </p>
      </div>
    ),
  },
  {
    id: 4,
    label: '04 / 08',
    theme: 'light',
    content: (
      <div className="w-full h-full flex flex-col justify-between p-10 bg-[#F5F0E8]">
        <p className="text-[#FF8A3D] text-[11px] font-light tracking-[0.2em] uppercase">
          A Virada
        </p>

        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-[#0F0E17] text-5xl font-bold leading-[1.1] mb-4">
            Hoje o primeiro<br />corretor é o<br />
            <span
              style={{
                background: 'linear-gradient(135deg, #6C3CF0, #FF8A3D)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Instagram.
            </span>
          </h2>

          <p className="text-[#5A5A72] text-base font-light mb-10 leading-relaxed">
            Antes de visitar, o comprador já decidiu.<br />E ele decidiu pela foto.
          </p>

          <div className="space-y-5 border-t border-[#0F0E17]/10 pt-6">
            {[
              { stat: '87%', desc: 'dos compradores pesquisam imóveis online antes do contato' },
              { stat: '3,2×', desc: 'mais conversões com apresentação visual premium' },
              { stat: '1ª', desc: 'impressão digital = a mais importante da venda' },
            ].map(({ stat, desc }) => (
              <div key={stat} className="flex items-baseline gap-4">
                <span className="text-[#6C3CF0] text-2xl font-bold w-16 flex-shrink-0">{stat}</span>
                <span className="text-[#5A5A72] text-sm font-light leading-tight">{desc}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-[#6C3CF0] text-sm font-semibold">
          → Sua vitrine digital está pronta?
        </p>
      </div>
    ),
  },
  {
    id: 5,
    label: '05 / 08',
    theme: 'dark',
    content: (
      <div className="relative w-full h-full flex flex-col justify-between p-10 bg-[#0F0E17] overflow-hidden">
        {/* Left accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#6C3CF0] to-[#FF8A3D]" />
        {/* Background photo */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1080&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0E17]/80 to-[#0F0E17]/95" />

        <p className="relative z-10 text-[#FF8A3D] text-[11px] font-light tracking-[0.2em] uppercase">
          A Solução
        </p>

        <div className="relative z-10 flex-1 flex flex-col justify-center">
          <h2 className="text-white text-4xl font-bold leading-[1.15] mb-8">
            Transformamos<br />imóveis em<br />experiências visuais.
          </h2>

          <div className="space-y-4">
            {[
              'Design para redes sociais',
              'Reels imobiliários',
              'Tratamento profissional de imagens',
              'Apresentações comerciais (PDF/Slides)',
              'Websites imobiliários',
              'CRM e gestão de leads',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="text-[#6C3CF0] text-xs">◆</span>
                <span className="text-[#F5F0E8] text-sm font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="relative z-10 text-[#A090B0] text-xs font-light">
          Libe Paredes · Visual Designer · Bombinhas, SC
        </p>
      </div>
    ),
  },
  {
    id: 6,
    label: '06 / 08',
    theme: 'light',
    content: (
      <div className="w-full h-full flex flex-col justify-between p-10 bg-[#F5F0E8]">
        <p className="text-[#6C3CF0] text-[11px] font-light tracking-[0.2em] uppercase">
          O Que Você Ganha
        </p>

        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-[#0F0E17] text-4xl font-bold leading-[1.15] mb-8">
            Design que<br />gera resultado real.
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: '+45%', label: 'Valor percebido do imóvel', Icon: TrendingUp },
              { stat: '3×', label: 'Mais contatos e consultas', Icon: MessageSquare },
              { stat: '+80%', label: 'Engajamento nas redes', Icon: Eye },
              { stat: '1°', label: 'Diferenciação no mercado', Icon: Award },
            ].map(({ stat, label, Icon }) => (
              <div
                key={stat}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon size={16} className="text-[#6C3CF0]" />
                </div>
                <p
                  className="text-3xl font-bold mb-1"
                  style={{
                    background: 'linear-gradient(135deg, #6C3CF0, #FF8A3D)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {stat}
                </p>
                <p className="text-[#5A5A72] text-xs font-light leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    label: '07 / 08',
    theme: 'dark',
    content: (
      <div className="relative w-full h-full flex flex-col items-center justify-center p-10 bg-[#0F0E17] overflow-hidden text-center">
        {/* Orbs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#6C3CF0]/25 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF8A3D]/15 rounded-full blur-[100px]" />

        <div className="relative z-10 w-full flex flex-col items-center gap-6">
          {/* Location tag */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#6C3CF0]/40 bg-[#6C3CF0]/10">
            <MapPin size={13} className="text-[#A78BFA]" />
            <span className="text-[#A78BFA] text-xs font-light tracking-wide">
              Bombinhas · Santa Catarina · Brasil
            </span>
          </div>

          <h2 className="text-white text-4xl font-bold leading-[1.15]">
            Marketing visual<br />e soluções digitais<br />para imobiliárias<br />e construtoras.
          </h2>

          {/* Decorative line */}
          <div
            className="h-0.5 w-16 rounded-full"
            style={{ background: 'linear-gradient(90deg, #6C3CF0, #FF8A3D)' }}
          />

          <p className="text-[#A090B0] text-base font-light leading-relaxed max-w-xs">
            Especialistas em apresentação de imóveis para o mercado catarinense de alto padrão.
          </p>

          {/* Service icons row */}
          <div className="flex items-center gap-6 mt-2">
            {[
              { label: 'Social' },
              { label: 'Fotos' },
              { label: 'Reels' },
              { label: 'PDFs' },
              { label: 'Brand' },
            ].map(({ label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#6C3CF0]" />
                </div>
                <span className="text-[#A090B0] text-[10px]">{label}</span>
              </div>
            ))}
          </div>

          <p className="text-[#FF8A3D] text-lg font-semibold">{INSTAGRAM}</p>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    label: '08 / 08',
    theme: 'dark',
    content: (
      <div className="relative w-full h-full flex flex-col items-center justify-between p-10 overflow-hidden text-center"
        style={{ background: 'linear-gradient(135deg, #0F0E17 0%, #1A1040 50%, #0F0E17 100%)' }}
      >
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #6C3CF0 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Center orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#6C3CF0]/15 rounded-full blur-[120px]" />

        {/* Top question */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-6">
          <h2 className="text-white text-3xl font-bold leading-[1.2]">
            Seu marketing imobiliário<br />está valorizando seus imóveis<br />
            <span
              style={{
                background: 'linear-gradient(135deg, #6C3CF0, #FF8A3D)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              ou escondendo seu potencial?
            </span>
          </h2>

          {/* Decorative line */}
          <div
            className="h-0.5 w-16 rounded-full"
            style={{ background: 'linear-gradient(90deg, #6C3CF0, #FF8A3D)' }}
          />

          <p className="text-[#A090B0] text-base font-light leading-relaxed max-w-xs">
            Acesse nosso portfólio e descubra como transformar sua presença digital.
          </p>

          {/* Website button */}
          <div
            className="flex items-center gap-3 px-6 py-3 rounded-full border-2 text-white text-sm font-medium"
            style={{ borderImage: 'linear-gradient(135deg, #6C3CF0, #FF8A3D) 1' }}
          >
            <Globe size={16} className="text-[#6C3CF0]" />
            <span className="text-[#F5F0E8]">{WEBSITE}</span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#E1306C] to-[#F77737] rounded-lg flex items-center justify-center">
                <Instagram size={16} className="text-white" />
              </div>
              <span className="text-[#F5F0E8] text-sm">{INSTAGRAM}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#25D366] rounded-lg flex items-center justify-center">
                <MessageCircle size={16} className="text-white" />
              </div>
              <span className="text-[#F5F0E8] text-sm">Link na bio</span>
            </div>
          </div>
        </div>

        {/* Scarcity nudge */}
        <div className="relative z-10 w-full px-4 py-3 rounded-2xl border border-[#FF8A3D]/30 bg-[#FF8A3D]/10">
          <p className="text-[#FF8A3D] text-xs font-medium">
            ✦ Apenas 3 novos projetos por mês para garantir qualidade total
          </p>
        </div>
      </div>
    ),
  },
];

export function CarouselPreview() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <div className="min-h-screen bg-[#111] flex flex-col items-center justify-center py-12 px-4">
      {/* Header */}
      <div className="mb-8 text-center">
        <p className="text-white/40 text-xs tracking-widest uppercase mb-1">Preview local</p>
        <h1 className="text-white text-lg font-semibold">Instagram Carousel — Libe.Imóveis</h1>
        <p className="text-white/40 text-xs mt-1">1080 × 1350 px · 8 slides</p>
      </div>

      {/* Phone frame */}
      <div className="relative flex items-center gap-6">
        {/* Prev button */}
        <button
          onClick={prev}
          className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Slide */}
        <div className="relative w-[360px] h-[450px] rounded-[32px] overflow-hidden shadow-2xl shadow-black/60 border border-white/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="absolute inset-0"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {slides[current].content}
            </motion.div>
          </AnimatePresence>

          {/* Slide counter badge */}
          <div className="absolute top-4 right-4 z-20 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1">
            <span className="text-white text-[11px] font-light">{slides[current].label}</span>
          </div>
        </div>

        {/* Next button */}
        <button
          onClick={next}
          className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex gap-2 mt-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? 'w-6 h-2 bg-[#FF8A3D]'
                : 'w-2 h-2 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Keyboard hint */}
      <p className="text-white/20 text-xs mt-6">← → para navegar · clique nos pontos para ir direto</p>
    </div>
  );
}
