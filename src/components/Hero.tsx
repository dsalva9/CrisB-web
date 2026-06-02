import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from '../context/LanguageContext';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const { copy } = useTranslation();
  const [activeSlide, setActiveSlide] = useState<0 | 1>(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 50, damping: 14 }
    }
  };

  const slideContent = [
    {
      label: copy.hero.galleryLabel1,
      svg: (
        <svg className="w-4/5 h-4/5 text-brand-sand/30" viewBox="0 0 100 120" fill="none" stroke="currentColor">
          {/* Architectural rustic arches and clean modular stone grids */}
          <rect x="10" y="10" width="80" height="100" rx="6" strokeWidth="0.75" className="stroke-brand-sand/20" />
          
          {/* Mallorca stone textures */}
          <path d="M10 90C30 90 40 85 50 75C60 85 70 90 90 90" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M10 70C25 75 35 60 50 65C65 60 75 75 90 70" strokeWidth="0.75" />
          
          {/* Traditional Mallorcan archway silhouette */}
          <path d="M30 110 V55 C30 40, 70 40, 70 55 V110" strokeWidth="2.5" strokeLinecap="round" className="text-brand-sand" />
          <path d="M40 110 V65 C40 55, 60 55, 60 65 V110" strokeWidth="1.5" className="text-brand-sand/50" />
          
          {/* Sun/Core Strategic Circle */}
          <circle cx="50" cy="30" r="10" stroke="var(--color-brand-sand)" strokeWidth="1.5" fill="var(--color-brand-cream)" className="opacity-90" />
          <line x1="50" y1="12" x2="50" y2="18" strokeWidth="1" />
          <line x1="50" y1="42" x2="50" y2="48" strokeWidth="1" />
          <line x1="32" y1="30" x2="38" y2="30" strokeWidth="1" />
          <line x1="62" y1="30" x2="68" y2="30" strokeWidth="1" />
          
          {/* Stone wall hatching */}
          <line x1="15" y1="95" x2="25" y2="95" strokeWidth="1" />
          <line x1="75" y1="95" x2="85" y2="95" strokeWidth="1" />
          <line x1="20" y1="102" x2="28" y2="102" strokeWidth="0.75" />
        </svg>
      )
    },
    {
      label: copy.hero.galleryLabel2,
      svg: (
        <svg className="w-4/5 h-4/5 text-brand-sand/30" viewBox="0 0 100 120" fill="none" stroke="currentColor">
          {/* Botanical forestry curves & structural grid */}
          <rect x="10" y="10" width="80" height="100" rx="6" strokeWidth="0.75" className="stroke-brand-sand/20" />
          
          {/* Growth Grid */}
          <line x1="50" y1="15" x2="50" y2="105" strokeWidth="0.5" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="35" stroke="var(--color-brand-sand)" strokeWidth="0.5" strokeDasharray="5 5" className="opacity-40" />

          {/* Organic Leaf curves in gold/satin forest */}
          <path d="M50 105C50 75 50 45 50 15" strokeWidth="2.5" strokeLinecap="round" className="text-brand-sand" />
          
          {/* Branch 1 */}
          <path d="M50 85C56 78 65 72 74 70C70 78 63 84 50 89" strokeWidth="1.75" strokeLinejoin="round" fill="var(--color-brand-forest)" fillOpacity="0.8" className="text-brand-forest" />
          {/* Branch 2 */}
          <path d="M50 67C44 60 35 54 26 52C30 60 37 66 50 71" strokeWidth="1.75" strokeLinejoin="round" fill="var(--color-brand-sand)" fillOpacity="0.5" className="text-brand-sand" />
          {/* Branch 3 */}
          <path d="M50 49C56 42 65 36 74 34C70 42 63 48 50 53" strokeWidth="1.75" strokeLinejoin="round" fill="var(--color-brand-forest)" fillOpacity="0.8" className="text-brand-forest" />
          {/* Branch 4 */}
          <path d="M50 31C44 24 35 18 26 16C30 24 37 30 50 35" strokeWidth="1.75" strokeLinejoin="round" fill="var(--color-brand-sand)" fillOpacity="0.5" className="text-brand-sand" />
          
          {/* Rising Leaf Tip */}
          <path d="M50 18C52 14 56 10 61 9C58 14 54 17 50 20" strokeWidth="1.25" strokeLinejoin="round" fill="var(--color-brand-cream)" fillOpacity="0.9" />
        </svg>
      )
    }
  ];

  const handleNext = () => setActiveSlide((prev) => (prev === 0 ? 1 : 0));
  const handlePrev = () => setActiveSlide((prev) => (prev === 1 ? 0 : 1));

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-brand-cream"
    >
      {/* Dynamic ambient backgrounds */}
      <div className="absolute top-0 right-0 w-[45%] h-[55%] bg-[radial-gradient(ellipse_at_top_right,var(--color-brand-sand)/6%,transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[50%] h-[55%] bg-[radial-gradient(ellipse_at_bottom_left,var(--color-brand-forest)/4%,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Pane: Structured Strategic Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
        >
          {/* Elegant Corporate Badge */}
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 bg-brand-forest/5 text-brand-forest rounded-full border border-brand-forest/15"
          >
            <Sparkles size={12} className="text-brand-sand animate-pulse" />
            {copy.hero.tag}
          </motion.span>

          {/* Symmetrical Sentence-Case high contrast Title */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-forest font-light tracking-wide leading-[1.3] text-left uppercase"
          >
            Acompaño a empresas, instituciones y equipos directivos a{' '}
            <span className="font-semibold text-brand-forest relative inline-block">
              {copy.hero.highlight1}
              <span className="absolute bottom-1 left-0 w-full h-[2px] bg-brand-sand rounded-full" />
            </span>
            ,{' '}
            <span className="font-semibold text-brand-forest relative inline-block">
              {copy.hero.highlight2}
              <span className="absolute bottom-1 left-0 w-full h-[2px] bg-brand-sand rounded-full" />
            </span>{' '}
            y{' '}
            <span className="font-semibold text-brand-forest relative inline-block whitespace-nowrap">
              {copy.hero.highlight3}
              <span className="absolute bottom-1 left-0 w-full h-[2px] bg-brand-sand rounded-full" />
            </span>{' '}
            proyectos estratégicos y con impacto.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-sans text-slate-600 text-base md:text-lg leading-relaxed font-light max-w-xl"
          >
            {copy.hero.desc}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3 w-full"
          >
            <motion.a
              href="#servicios"
              whileHover={{ scale: 1.01, x: 2 }}
              whileTap={{ scale: 0.99 }}
              className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest px-7 py-4 bg-brand-forest text-white hover:bg-brand-forest/95 rounded-xl shadow-lg shadow-brand-forest/10 transition-all duration-300 justify-center cursor-pointer"
              style={{ minHeight: '44px' }} // tap size
            >
              {copy.hero.btnServices}
              <ArrowRight size={14} />
            </motion.a>

            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="inline-flex items-center justify-center font-sans text-xs font-bold uppercase tracking-widest px-7 py-4 border border-slate-300 bg-white text-brand-forest hover:border-brand-forest hover:bg-slate-50 rounded-xl transition-all duration-300 cursor-pointer"
              style={{ minHeight: '44px' }} // tap size
            >
              {copy.hero.btnContact}
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Pane: Project Gallery Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 50, damping: 14, delay: 0.3 }}
          className="lg:col-span-5 flex flex-col items-center gap-6 relative"
        >
          {/* Asymmetric Display Frame */}
          <div className="relative w-full max-w-[370px] aspect-[4/5] bg-white rounded-3xl p-3 shadow-xl border border-slate-200/80 z-10 overflow-hidden flex flex-col justify-between">
            
            {/* Gallery Top Flag */}
            <div className="flex justify-between items-center px-3 py-1 border-b border-slate-100 pb-3">
              <span className="font-serif text-[10px] tracking-widest uppercase text-brand-forest font-bold">
                {copy.hero.galleryTitle}
              </span>
              <span className="font-sans text-[10px] text-slate-400 font-semibold">
                {activeSlide + 1} / 2
              </span>
            </div>

            {/* Slider view */}
            <div className="flex-1 flex items-center justify-center relative bg-brand-forest rounded-2xl overflow-hidden my-3">
              
              {/* Slate shading layer */}
              <div className="absolute inset-0 bg-brand-forest/10 z-10 pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {slideContent[activeSlide].svg}
                </motion.div>
              </AnimatePresence>
              
            </div>

            {/* Gallery Slide Footer Controls */}
            <div className="flex items-center justify-between px-2 pt-2 border-t border-slate-100">
              <span className="font-sans text-[10px] text-slate-500 font-medium tracking-wide">
                {slideContent[activeSlide].label}
              </span>
              
              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  className="w-7 h-7 flex items-center justify-center rounded-lg border border-slate-200 bg-white hover:bg-slate-50 hover:text-brand-forest cursor-pointer text-slate-400"
                  style={{ minWidth: '28px', minHeight: '28px' }} // compact responsive limits
                  aria-label="Anterior"
                >
                  <ChevronLeft size={14} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-7 h-7 flex items-center justify-center rounded-lg border border-slate-200 bg-white hover:bg-slate-50 hover:text-brand-forest cursor-pointer text-slate-400"
                  style={{ minWidth: '28px', minHeight: '28px' }}
                  aria-label="Siguiente"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
