import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from '../context/LanguageContext';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const { copy } = useTranslation();
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const renderTitle = () => {
    const { title, highlight1, highlight2, highlight3 } = copy.hero;
    const terms = [highlight1, highlight2, highlight3].filter(Boolean);
    if (terms.length === 0) return title;

    const escapedTerms = terms.map(term => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regex = new RegExp(`(${escapedTerms.join('|')})`, 'g');
    const parts = title.split(regex);

    const renderedParts: React.ReactNode[] = [];
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      const isHighlight = terms.includes(part);

      if (isHighlight) {
        const nextPart = parts[i + 1];
        const hasTrailingComma = typeof nextPart === 'string' && nextPart.startsWith(',');

        if (hasTrailingComma) {
          parts[i + 1] = nextPart.substring(1); // strip the comma
          renderedParts.push(
            <span key={i} className="inline-block whitespace-nowrap">
              <span className="font-semibold text-brand-forest relative inline-block">
                {part}
                <span className="absolute bottom-1 left-0 w-full h-[2px] bg-brand-sand rounded-full" />
              </span>
              ,
            </span>
          );
        } else {
          const isHighlight3 = part === highlight3;
          renderedParts.push(
            <span
              key={i}
              className={`font-semibold text-brand-forest relative inline-block ${isHighlight3 ? 'whitespace-nowrap' : ''}`}
            >
              {part}
              <span className="absolute bottom-1 left-0 w-full h-[2px] bg-brand-sand rounded-full" />
            </span>
          );
        }
      } else {
        if (part) {
          renderedParts.push(<span key={i}>{part}</span>);
        }
      }
    }
    return renderedParts;
  };

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
      label: "Salvador Espriu 39, 8 Social Housing Units – Palma, Mallorca, 2018-2021",
      image: "/projects/salvador_espriu_int1.png"
    },
    {
      label: "Salvador Espriu 39, 8 Social Housing Units – Palma, Mallorca, 2018-2021",
      image: "/projects/salvador_espriu_int2.png"
    },
    {
      label: "Salvador Espriu 39, 8 Social Housing Units – Palma, Mallorca, 2018-2021",
      image: "/projects/salvador_espriu_ext.png"
    },
    {
      label: "Olivera 62, 48 Social Housing Units – Magalluf-Calvià, Mallorca, LLOC Arquitectes, 2018-2022",
      image: "/projects/olivera_ext.png"
    },
    {
      label: "Pere Matutes 72, 24 Social Housing Units – Ibiza, 08014 Arquitectura, 2018-2022",
      image: "/projects/pere_matutes_int.png"
    }
  ];

  const handleNext = () => setActiveSlide((prev) => (prev === slideContent.length - 1 ? 0 : prev + 1));
  const handlePrev = () => setActiveSlide((prev) => (prev === 0 ? slideContent.length - 1 : prev - 1));

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
            {renderTitle()}
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
                {activeSlide + 1} / {slideContent.length}
              </span>
            </div>

            {/* Slider view */}
            <div className="flex-1 flex items-center justify-center relative bg-white rounded-2xl overflow-hidden my-3">
              
              {/* Slate shading layer */}
              <div className="absolute inset-0 bg-brand-forest/10 z-10 pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center bg-brand-cream"
                >
                  <img
                    src={slideContent[activeSlide].image}
                    alt={slideContent[activeSlide].label}
                    className="w-full h-full object-cover object-center"
                  />
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
