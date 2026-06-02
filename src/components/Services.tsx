import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from '../context/LanguageContext';
import { Check, ShieldCheck, Award, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  const { copy } = useTranslation();
  const [activePillar, setActivePillar] = useState<string>('mentoria');

  const selectedPillar = copy.services.pillars.find(p => p.id === activePillar) || copy.services.pillars[0];

  return (
    <section id="servicios" className="section py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-brand-sand block"
          >
            {copy.services.tag}
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-forest font-light tracking-wide uppercase"
          >
            {copy.services.title}
          </motion.h2>
          
          <div className="w-12 h-px bg-brand-sand mx-auto" />
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="font-sans text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed font-light"
          >
            {copy.services.desc}
          </motion.p>
        </div>

        {/* Tab Selector Row (Scrollable on mobile, compact layout) */}
        <div className="w-full flex justify-start md:justify-center overflow-x-auto pb-4 mb-12 no-scrollbar border-b border-slate-200/60 gap-2 md:gap-4">
          {copy.services.pillars.map((pillar) => {
            const isActive = pillar.id === activePillar;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className={`px-6 py-4 font-serif text-xs md:text-sm tracking-wide uppercase font-semibold border-b-2 whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'border-brand-forest text-brand-forest font-bold scale-[1.02]'
                    : 'border-transparent text-slate-400 hover:text-slate-600'
                }`}
                style={{ minHeight: '44px' }} // tap size
              >
                {pillar.title}
              </button>
            );
          })}
        </div>

        {/* Dynamic Elevated Core Card */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-brand-white rounded-3xl p-8 md:p-12 border border-slate-200/80 shadow-md relative overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              {/* Background elegant circle glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[radial-gradient(circle_at_top_right,var(--color-brand-sand)/5%,transparent_50%)] pointer-events-none" />

              {/* Left Column: Objective and Details */}
              <div className="md:col-span-7 space-y-6">
                <div className="space-y-1">
                  <span className="font-sans text-[9px] font-bold tracking-[0.2em] text-brand-sand uppercase block">
                    {copy.services.objectiveLabel}
                  </span>
                  <h3 className="font-serif text-2xl text-brand-forest font-light uppercase">
                    {selectedPillar.title}
                  </h3>
                </div>

                <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                  {selectedPillar.objective}
                </p>

                <div className="pt-4">
                  <motion.a
                    href="#contacto"
                    whileHover={{ x: 3 }}
                    className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-brand-forest hover:text-brand-sand transition-colors cursor-pointer"
                    style={{ minHeight: '44px' }} // tap target compliance
                  >
                    <span>Iniciar conversación estratégica</span>
                    <ArrowRight size={14} />
                  </motion.a>
                </div>
              </div>

              {/* Right Column: Key Milestones Checklist (hitos clave) */}
              <div className="md:col-span-5 bg-slate-50 border border-slate-200/60 p-6 md:p-8 rounded-2xl space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-3 mb-2">
                  <Award size={15} className="text-brand-sand" />
                  <span className="font-sans text-[9px] font-bold tracking-widest text-brand-forest uppercase">
                    {copy.services.milestonesLabel}
                  </span>
                </div>

                <ul className="space-y-3">
                  {selectedPillar.milestones.map((hito, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs md:text-sm font-sans font-light text-slate-600 leading-relaxed">
                      <div className="flex-shrink-0 mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-brand-forest/5 text-brand-sand">
                        <ShieldCheck size={14} className="stroke-[2.5]" />
                      </div>
                      <span>{hito}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
