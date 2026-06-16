import { motion, useScroll, useTransform } from 'motion/react';
import imgMePhoto from '../../imports/me_photo.png';
import videoSrc from '../../imports/Gradient_with_subtle_movement_delpmaspu_.mp4';

interface NewHeroProps {
  language?: 'es' | 'en' | 'pt';
}

const translations = {
  es: { greeting: 'Hola, soy Libe Paredes', title1: 'Product Designer', title2: 'UX UI' },
  en: { greeting: "Hi, I'm Libe Paredes",   title1: 'Product Designer', title2: 'UX UI' },
  pt: { greeting: 'Olá, sou Libe Paredes',  title1: 'Product Designer', title2: 'UX UI' },
};

export function NewHero({ language = 'es' }: NewHeroProps) {
  const t = translations[language];

  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 0.3], [0, 80]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          controlsList="nodownload"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-white/30" />
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:flex absolute inset-0 z-10 items-center justify-center">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl mb-8 text-gray-900 font-medium"
          >
            {t.greeting}
          </motion.p>

          <div className="font-['Consolas',monospace] text-gray-900 leading-tight text-5xl md:text-6xl lg:text-7xl xl:text-9xl">
            <motion.span
              className="block"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              {t.title1}
            </motion.span>
            <motion.span
              className="block text-orange-500"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.0 }}
            >
              {t.title2}
            </motion.span>
          </div>
        </div>
      </div>

      {/* Desktop: profile image bottom-right with parallax */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        style={{ y: imageY }}
        className="absolute right-0 bottom-0 hidden lg:block z-10"
      >
        <div className="w-[320px] xl:w-[400px] h-[400px] xl:h-[500px]">
          <img
            src={imgMePhoto}
            alt="Libe Paredes"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </motion.div>

      {/* Mobile layout */}
      <div className="lg:hidden absolute inset-0 z-10 flex flex-col items-center justify-center px-6 py-16">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-2xl text-center mb-6 text-gray-900 font-medium"
        >
          {t.greeting}
        </motion.p>

        <div className="font-['Consolas',monospace] text-gray-900 leading-tight text-4xl text-center mb-12">
          <motion.span
            className="block"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {t.title1}
          </motion.span>
          <motion.span
            className="block text-orange-500"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
          >
            {t.title2}
          </motion.span>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="w-full max-w-xs"
        >
          <div className="w-full aspect-[3/4]">
            <img
              src={imgMePhoto}
              alt="Libe Paredes"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.a
          href="#sobre-mi"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
}
