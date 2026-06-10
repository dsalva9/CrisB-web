import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from '../context/LanguageContext';
import { Compass, Zap, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';

export const PainPoints: React.FC = () => {
  const { copy } = useTranslation();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 50, damping: 14 }
    }
  };

  const icons = [Compass, Zap, TrendingUp, Layers];

  return (
    <section id="desafios" className="section py-24 bg-brand-cream border-t border-b border-slate-200/60 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8d9_1px,transparent_1px)] [background-size:20px_20px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-brand-sand block"
          >
            {copy.challenges.tag}
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-forest font-light tracking-wide uppercase"
          >
            {copy.challenges.title}
          </motion.h2>
          
          <div className="w-12 h-px bg-brand-sand mx-auto" />
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="font-sans text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed font-light"
          >
            {copy.challenges.desc}
          </motion.p>
        </div>

        {/* 2x2 Bento Quadrant */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {copy.challenges.items.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <motion.div
                key={item.num}
                variants={cardVariants}
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(27, 59, 34, 0.04), 0 10px 10px -5px rgba(27, 59, 34, 0.02)' }}
                className="bg-brand-white rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between items-start gap-6 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Asymmetric Header */}
                <div className="flex justify-between items-center w-full relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-brand-cream border border-slate-100 text-brand-forest group-hover:bg-brand-forest group-hover:text-white transition-all duration-300">
                      <Icon size={18} className="stroke-[1.75]" />
                    </div>
                    <h3 className="font-serif text-lg tracking-wide text-brand-forest font-semibold uppercase group-hover:text-brand-sand transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <span className="font-serif text-2xl font-light text-brand-sand/40 group-hover:text-brand-sand transition-colors">
                    {item.num}
                  </span>
                </div>

                {/* Síntoma de Alerta (Executive Quote Style) */}
                <div className="w-full border-l border-brand-sand/35 pl-4 flex flex-col gap-0.5 relative z-10">
                  <span className="font-sans text-[9px] font-bold tracking-wider text-brand-sand uppercase block">
                    {copy.challenges.warningLabel}
                  </span>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed font-light">
                    {item.symptom}
                  </p>
                </div>

                {/* Propuesta Estratégica (Cris's strategic solution) */}
                <div className="w-full space-y-2.5 relative z-10 pt-2">
                  <div className="flex items-center gap-1.5 text-brand-forest">
                    <CheckCircle2 size={13} className="text-brand-forest" />
                    <span className="font-sans text-[9px] font-bold tracking-widest uppercase">
                      {copy.challenges.proposalLabel}
                    </span>
                  </div>
                  <p className="font-sans text-slate-600 text-sm leading-relaxed font-light">
                    {item.proposal}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
