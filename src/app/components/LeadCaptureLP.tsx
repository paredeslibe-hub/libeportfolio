import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, CheckCircle, Send, Calendar, Globe, TrendingUp, Users, Sparkles, Target, MessageCircle, Linkedin, Instagram, Code, Zap } from 'lucide-react';
import { trackFormSubmit, trackCalendlyClick, trackWhatsAppClick } from '../utils/analytics';
import profileImage from 'figma:asset/83e8be5bc4c6fb0e4f8e1c49b5b9630057dc999f.png';

export function LeadCaptureLP() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    whatsapp: '',
    digitalProblem: '',
    preferredOption: 'whatsapp'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.preferredOption === 'calendly') {
      // Trackear evento de Calendly
      trackFormSubmit('calendly');
      trackCalendlyClick();
      window.open('https://calendly.com/paredeslibe/', '_blank');
      setSubmitted(true);
    } else {
      // Trackear evento de WhatsApp
      trackFormSubmit('whatsapp');

      // Enviar por WhatsApp
      const message = encodeURIComponent(
        `Hola Libe! 👋\n\n` +
        `Me contacto desde tu landing page.\n\n` +
        `🏢 Negocio: ${formData.businessName}\n` +
        `👤 Nombre: ${formData.contactName}\n\n` +
        `💬 Mi situación:\n${formData.digitalProblem}\n\n` +
        `Me gustaría hablar sobre cómo podés ayudarme.`
      );
      window.open(`https://wa.me/5491132914989?text=${message}`, '_blank');
      setSubmitted(true);
    }
  };

  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Landing Pages que Venden',
      description: 'Una página que convierte visitas en ventas. Simple, clara, efectiva.',
      benefits: [
        'Tu mensaje directo al corazón del cliente',
        'Funciona perfecto en celu y compu',
        'Botones que invitan a comprar',
        'Se conecta con WhatsApp y tus redes',
        'Carga rápido (nadie espera 10 segundos)'
      ],
      color: 'from-orange-400 to-rose-400'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Profesional Completa',
      description: 'Tu carta de presentación digital. Que cuando te googleen, te encuentren y confíen.',
      benefits: [
        'Fácil de navegar (hasta para tu abuela)',
        'Aparece en Google cuando te buscan',
        'Genera confianza profesional',
        'Podés actualizarla vos mismo',
        'Diseñada para tu cliente ideal'
      ],
      color: 'from-purple-400 to-pink-400'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Estrategia de Marca Clara',
      description: 'Dejá de confundir a tu audiencia. Definí quién sos y qué ofrecés, de una vez.',
      benefits: [
        'Entendé qué hace tu competencia',
        'Un mensaje claro que vende',
        'Tu forma de hablar con los clientes',
        'Los colores y estilo que te representan',
        'Cómo pararte en el mercado'
      ],
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Presencia Digital Ordenada',
      description: 'Que cuando alguien te googlee, encuentre lo mismo en todos lados. Coherencia.',
      benefits: [
        'Revisión de todo lo que tenés hoy',
        'Plan claro para estar donde importa',
        'Tus redes y web hablando igual',
        'Todo se ve profesional y coherente',
        'Calendario de qué publicar'
      ],
      color: 'from-green-400 to-emerald-400'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Redes Sociales con Estrategia',
      description: 'Dejá de improvisar. Redes que conectan con tu audiencia y te traen clientes.',
      benefits: [
        'Plan de contenido pensado para vender',
        'Diseños que llaman la atención',
        'Sabés qué publicar cada semana',
        'Medimos qué funciona y qué no',
        'Atención a mensajes y comentarios'
      ],
      color: 'from-rose-400 to-orange-400'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Apps y Sistemas a Medida',
      description: 'Si necesitás algo específico que no existe, lo creamos. Para vos, pensado en tu negocio.',
      benefits: [
        'Hecho 100% para tu forma de trabajar',
        'Crece con vos cuando crezcas',
        'Súper fácil de usar para tu equipo',
        'Se conecta con lo que ya usás',
        'Te acompaño después del lanzamiento'
      ],
      color: 'from-indigo-400 to-purple-400'
    },
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200/50 z-50 relative">
        <div className="max-w-6xl mx-auto px-6 py-4 relative">
          <div className="flex items-center justify-center relative">
          <div className="text-xl text-gray-900">
            Libe<span className="text-orange-500">.</span>Designer
          </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-orange-50 via-rose-50 to-purple-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center relative">
            {/* Content */}
            <div className="text-center md:text-left relative">
              <div className="inline-block mb-6 px-4 py-2 bg-orange-100 rounded-full">
                <p className="text-orange-600 font-medium">✨ Solo acepto 3 proyectos nuevos este mes</p>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900">
                Transformá tu Presencia Digital en <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">Ventas Reales</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Soy tu Socia Estratégica: primero escucho cuál es tu verdadero problema, y después diseño la estrategia digital que tu negocio realmente necesita para crecer y vender más
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                <a
                  href="#formulario"
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all text-lg font-medium"
                >
                  Quiero Mi Auditoría Gratuita
                </a>
                <a
                  href="#servicios"
                  className="px-8 py-4 border-2 border-orange-500 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors text-lg font-medium"
                >
                  Cómo Te Puedo Ayudar
                </a>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span>10 años ayudando PyMEs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span>Trato directo y humano</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span>Inversión que se paga sola</span>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative order-first md:order-last">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-rose-400 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                <img
                  src={profileImage}
                  alt="Libe Paredes - Web Designer"
                  className="relative rounded-3xl w-full aspect-square object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-6 bg-white relative">
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-12 relative">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              ¿Te suena familiar?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              El 52% de los emprendedores en LATAM no logra convertir seguidores en clientes. Y no es tu culpa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            <div className="bg-rose-50 border border-rose-100 rounded-xl p-6">
              <div className="text-rose-600 font-bold text-4xl mb-2">68%</div>
              <p className="text-gray-700">
                Se siente alejado del mundo digital por el lenguaje técnico complicado
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-100 rounded-xl p-6">
              <div className="text-orange-600 font-bold text-4xl mb-2">41%</div>
              <p className="text-gray-700">
                No usa Inteligencia Artificial porque no sabe por dónde empezar
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-100 rounded-xl p-6">
              <div className="text-purple-600 font-bold text-4xl mb-2">52%</div>
              <p className="text-gray-700">
                Tiene seguidores pero no logra que se conviertan en clientes que pagan
              </p>
            </div>
          </div>

          <div className="mt-12 space-y-6">
            <div className="bg-gradient-to-br from-orange-500 to-rose-500 rounded-2xl p-8 border border-orange-600 text-white">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
                  <Instagram className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">El Error Más Común</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Si tu único canal de venta y presencia digital es Instagram, <span className="font-bold underline">estás perdiendo clientes todos los días</span>.
                  </p>
                  <p className="text-lg leading-relaxed">
                    En mi metodología aplicamos una estrategia digital completa que te ayuda a posicionarte en múltiples canales y convertir esos seguidores en clientes que realmente pagan.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
              <p className="text-xl text-gray-800 text-center leading-relaxed">
                Tu web existe pero parece un <span className="font-bold text-gray-900">fantasma</span>: nadie la visita, nadie compra, y cada mes que pasa sentís que estás tirando plata en algo que no te da resultados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 px-6 bg-gradient-to-br from-orange-50/30 to-rose-50/30 relative">
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16 relative">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
              La Solución: Tu Web Trabajando para Vos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Primero conozco tus problemas, después vemos qué necesitás. Puede ser una web, puede ser estrategia, puede ser ordenar lo que ya tenés. Sin recetas mágicas. Sin vender humo. Solo lo que tu negocio realmente necesita.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                  {service.icon}
                </div>

                <h3 className="text-2xl mb-3 text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-24 px-6 bg-gradient-to-br from-purple-50 to-pink-50 relative">
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16 relative">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
              Por qué el trato conmigo es diferente
            </h2>
            <p className="text-xl text-gray-600">
              10 años de trayectoria ayudando a PyMEs y Startups en toda LATAM
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200 rounded-full -mr-16 -mt-16 opacity-40"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-rose-200 rounded-full -ml-12 -mb-12 opacity-40"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-rose-400 rounded-xl mb-6 transform rotate-3 shadow-lg">
                  <MessageCircle className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl mb-4 text-gray-900">Hablás directamente conmigo</h3>
                <p className="text-gray-700 leading-relaxed">
                  Cero intermediarios, cero call centers. Cuando necesitás algo, me escribís y yo te respondo. Así de simple. En LATAM valoramos la confianza personal, y yo trabajo solo con clientes con los que puedo construir una relación de largo plazo.
                </p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-purple-200 rounded-full -mr-14 -mt-14 opacity-40"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-pink-200 rounded-full -ml-10 -mb-10 opacity-40"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl mb-6 transform -rotate-3 shadow-lg">
                  <Globe className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl mb-4 text-gray-900">Entiendo tu realidad</h3>
                <p className="text-gray-700 leading-relaxed">
                  Trabajé con negocios de Argentina, Brasil, México, Colombia y Chile. Sé lo que es vender en mercados complicados, con economías cambiantes. No te voy a vender humo ni soluciones que funcionan "en teoría". Te doy lo que realmente necesitás.
                </p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full -mr-16 -mt-16 opacity-40"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-200 rounded-full -ml-12 -mb-12 opacity-40"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-xl mb-6 transform rotate-3 shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl mb-4 text-gray-900">Inversión, no gasto</h3>
                <p className="text-gray-700 leading-relaxed">
                  Cada peso que invertís en tu presencia digital tiene que volver multiplicado. No hacemos "cosas lindas para Instagram". Hacemos plataformas que venden, que te ahorran tiempo, y que trabajan para vos mientras estás durmiendo o atendiendo clientes.
                </p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-blue-200 rounded-full -mr-14 -mt-14 opacity-40"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-cyan-200 rounded-full -ml-10 -mb-10 opacity-40"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl mb-6 transform -rotate-3 shadow-lg">
                  <Sparkles className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl mb-4 text-gray-900">Socia estratégica, no proveedora</h3>
                <p className="text-gray-700 leading-relaxed">
                  No soy "la diseñadora que te hace la web". Soy tu socia estratégica que te ayuda a pensar el negocio, a entender a tus clientes, y a tomar decisiones que te hagan crecer. Porque cuando vos crecés, yo también.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="formulario" className="py-24 px-6 bg-white relative">
        <div className="max-w-3xl mx-auto relative">
          <div className="text-center mb-12 relative">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
              Auditoría Gratuita de 15 Minutos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Contame qué está pasando con tu negocio y te doy un diagnóstico honesto de qué necesitás para empezar a vender más. Sin compromiso. Sin letra chica.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-orange-50 to-rose-50 rounded-2xl p-8 md:p-12 border border-orange-200">
              <div className="space-y-6">
                <div>
                  <label htmlFor="businessName" className="block text-gray-900 font-medium mb-2">
                    Nombre de tu Negocio *
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    placeholder="Ej: Mi Emprendimiento SRL"
                  />
                </div>

                <div>
                  <label htmlFor="contactName" className="block text-gray-900 font-medium mb-2">
                    Tu Nombre *
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    placeholder="Ej: Juan Pérez"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-gray-900 font-medium mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    placeholder="Ej: +54 9 11 1234-5678"
                  />
                </div>

                <div>
                  <label htmlFor="digitalProblem" className="block text-gray-900 font-medium mb-2">
                    Contame: ¿Qué te gustaría lograr con tu presencia digital? *
                  </label>
                  <textarea
                    id="digitalProblem"
                    required
                    value={formData.digitalProblem}
                    onChange={(e) => setFormData({ ...formData, digitalProblem: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Ej: Tengo Instagram pero no logro que me compren. Necesito una web que convierta..."
                  />
                </div>

                <div>
                  <label className="block text-gray-900 font-medium mb-4">
                    ¿Cómo prefieres continuar? *
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-4 bg-white border-2 border-gray-300 rounded-lg cursor-pointer hover:border-orange-500 transition-colors">
                      <input
                        type="radio"
                        name="preferredOption"
                        value="whatsapp"
                        checked={formData.preferredOption === 'whatsapp'}
                        onChange={(e) => setFormData({ ...formData, preferredOption: e.target.value })}
                        className="w-5 h-5 text-orange-500"
                      />
                      <div className="flex items-center gap-2">
                        <MessageCircle size={20} className="text-orange-500" />
                        <span className="text-gray-900">Enviar por WhatsApp</span>
                      </div>
                    </label>

                    <label className="flex items-center gap-3 p-4 bg-white border-2 border-gray-300 rounded-lg cursor-pointer hover:border-orange-500 transition-colors">
                      <input
                        type="radio"
                        name="preferredOption"
                        value="calendly"
                        checked={formData.preferredOption === 'calendly'}
                        onChange={(e) => setFormData({ ...formData, preferredOption: e.target.value })}
                        className="w-5 h-5 text-orange-500"
                      />
                      <div className="flex items-center gap-2">
                        <Calendar size={20} className="text-orange-500" />
                        <span className="text-gray-900">Agendar reunión (Calendly)</span>
                      </div>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all text-lg font-medium flex items-center justify-center gap-2"
                >
                  {formData.preferredOption === 'calendly' ? (
                    <>
                      <Calendar size={20} />
                      Ir a Calendly
                    </>
                  ) : (
                    <>
                      <MessageCircle size={20} />
                      Enviar por WhatsApp
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-gray-600">
                  Al enviar, acepto que Libe se ponga en contacto para analizar mi negocio. Cero spam, cero venta agresiva. Solo una charla honesta.
                </p>
              </div>
            </form>
          ) : (
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 border border-green-200 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-white" size={32} />
              </div>
              <h3 className="text-2xl mb-4 text-gray-900">¡Listo! Ya lo tengo</h3>
              <p className="text-gray-700 mb-6">
                {formData.preferredOption === 'calendly'
                  ? 'Te llevo a mi Calendly para que elijas el día y hora que mejor te venga. Nos vemos pronto.'
                  : 'Te abrí WhatsApp con tu mensaje listo. Solo tenés que darle enviar y charlamos al toque!'}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-orange-600 hover:text-orange-700 font-medium"
              >
                Enviar otro formulario
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-orange-500 to-rose-500 text-white relative">
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center relative">
          <h2 className="text-4xl md:text-5xl mb-6">
            Solo acepto 3 proyectos nuevos al mes
          </h2>
          <p className="text-xl mb-8 opacity-90">
            No es por hacerme la difícil. Es porque si acepto más, no puedo garantizarte la atención personalizada que tu negocio merece. Cada proyecto lleva mi dedicación completa, y prefiero decir que no antes que entregarte algo mediocre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#formulario"
              className="px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium"
            >
              Agendar Mi Auditoría Ahora
            </a>
            <a
              href="https://calendly.com/paredeslibe/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors text-lg font-medium flex items-center justify-center gap-2"
            >
              <Calendar size={20} />
              Hablar por Videollamada
            </a>
          </div>
          </div>
        </div>
      </section>

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

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 relative">
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center relative">
          <div className="flex justify-center gap-6 mb-4">
            <a
              href="https://www.linkedin.com/in/libeparedes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-orange-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/libe.designer/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-orange-500 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://calendly.com/paredeslibe/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-orange-500 transition-colors"
              aria-label="Calendly"
            >
              <Calendar size={24} />
            </a>
            <a
              href="mailto:paredeslibe@gmail.com"
              className="text-gray-600 hover:text-orange-500 transition-colors"
              aria-label="Email"
            >
              <MessageCircle size={24} />
            </a>
          </div>
          <p className="text-gray-600">
            © 2026 Libe Paredes • Web Designer & UX Specialist
          </p>
          <p className="text-gray-500 text-sm mt-2">
            @libe.designer
          </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
