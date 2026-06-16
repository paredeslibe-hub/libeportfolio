import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import imgMePhoto from '../../imports/me_photo.png';
import videoSrc from '../../imports/Gradient_with_subtle_movement_delpmaspu_.mp4';

interface NewHeroProps {
  language?: 'es' | 'en' | 'pt';
}

const translations = {
  es: {
    greeting: 'Hola, soy Libe Paredes',
    title1: 'Product Designer',
    title2: 'UX UI'
  },
  en: {
    greeting: "Hi, I'm Libe Paredes",
    title1: 'Product Designer',
    title2: 'UX UI'
  },
  pt: {
    greeting: 'Olá, sou Libe Paredes',
    title1: 'Product Designer',
    title2: 'UX UI'
  }
};

function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);

    let interval: ReturnType<typeof setInterval> | null = null;

    const startTimer = setTimeout(() => {
      let index = 0;
      interval = setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));
        if (index >= text.length) {
          setDone(true);
          if (interval) clearInterval(interval);
        }
      }, 100);
    }, delay);

    return () => {
      clearTimeout(startTimer);
      if (interval) clearInterval(interval);
    };
  }, [text, delay]);

  return (
    <span>
      {displayed}
      {!done && (
        <span className="inline-block w-0.5 h-[0.85em] bg-current ml-1 align-middle animate-pulse" />
      )}
    </span>
  );
}

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

      {/* Desktop: text centered */}
      <div className="hidden lg:flex absolute inset-0 z-10 items-center justify-center">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-2xl md:text-3xl lg:text-4xl mb-8 text-gray-900 font-medium"
          >
            {t.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-['Consolas',monospace] text-gray-900 leading-tight"
          >
            <span className="block">
              <TypingText text={t.title1} delay={1000} />
            </span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.5 }}
              className="block text-orange-500"
            >
              {t.title2}
            </motion.span>
          </motion.h1>
        </div>
      </div>

      {/* Desktop: profile image bottom-right with parallax */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 3, ease: 'easeOut' }}
        style={{ y: imageY }}
        className="absolute right-0 bottom-0 hidden lg:block z-10"
      >
        <div className="relative w-[320px] xl:w-[400px] h-[400px] xl:h-[500px]">
          <img
            src={imgMePhoto}
            alt="Libe Paredes"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </motion.div>

      {/* Mobile: stacked layout */}
      <div className="lg:hidden absolute inset-0 z-10 flex flex-col items-center justify-center px-6 py-16">
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-2xl text-center mb-6 text-gray-900 font-medium"
        >
          {t.greeting}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="text-4xl font-['Consolas',monospace] text-gray-900 leading-tight text-center mb-12"
        >
          <span className="block text-gray-900">Product Designer</span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="block text-orange-500"
          >
            {t.title2}
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2, ease: 'easeOut' }}
          className="w-full max-w-xs"
        >
          <div className="relative w-full aspect-[3/4]">
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
        transition={{ delay: 1.2 }}
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
