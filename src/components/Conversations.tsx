import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from '../context/LanguageContext';
import { Presentation, MessageSquareShare, Award, Lightbulb } from 'lucide-react';

export const Conversations: React.FC = () => {
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

  const icons = [Presentation, MessageSquareShare, Award, Lightbulb];

  return (
    <section id="conversaciones" className="section py-20 bg-brand-cream border-t border-b border-slate-200/60 relative">
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
            {copy.speaking.tag}
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-forest font-light tracking-wide mt-3 mb-4 uppercase"
          >
            {copy.speaking.title}
          </motion.h2>
          
          <div className="w-12 h-px bg-brand-sand mx-auto" />
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="font-sans text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed font-light"
          >
            {copy.speaking.desc}
          </motion.p>
        </div>

        {/* Clean Squared Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-3xl overflow-hidden shadow-sm"
        >
          {copy.speaking.items.map((act, idx) => {
            const Icon = icons[idx];
            return (
              <motion.div
                key={act.num}
                variants={cardVariants}
                className="bg-brand-white p-8 md:p-10 flex flex-col justify-between items-start gap-8 group hover:bg-slate-50/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex justify-between items-center w-full relative z-10">
                  <span className="font-serif text-2xl font-light text-brand-sand/55 tracking-widest">{act.num}</span>
                  <div className="w-9 h-9 rounded-lg bg-brand-cream flex items-center justify-center text-brand-forest group-hover:bg-brand-forest group-hover:text-white transition-colors duration-300 border border-slate-100">
                    <Icon size={16} />
                  </div>
                </div>

                <div className="space-y-3 relative z-10">
                  <h3 className="font-serif text-base md:text-lg tracking-wide text-brand-forest font-semibold group-hover:text-brand-sand transition-colors duration-300 uppercase">
                    {act.title}
                  </h3>
                  <p className="font-sans text-slate-500 text-xs md:text-sm leading-relaxed font-light">
                    {act.desc}
                  </p>
                </div>

                {/* Symmetrical active bottom bar decor */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-forest group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
