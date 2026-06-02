import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from '../context/LanguageContext';

export const AboutMe: React.FC = () => {
  const { copy } = useTranslation();

  return (
    <section id="sobre-mi" className="section py-24 bg-brand-white relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-slate-50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left Column: Portrait with Botanical Frame & Quote */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Background design backing card */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-cream rounded-3xl -z-10 border border-slate-200/50" />
            
            {/* Portrait Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ type: 'spring', stiffness: 50, damping: 15 }}
              className="relative w-full max-w-[340px] aspect-[4/5] rounded-3xl overflow-hidden shadow-lg bg-brand-cream border border-slate-200/80 p-2"
            >
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <img
                  src="/consultant.png"
                  alt="Cris Ballester - Consultora Directiva en Mallorca"
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Thin-lined Botanical SVG Frame Overlay (Representing the Mallorca nature context) */}
                <svg
                  className="absolute inset-0 w-full h-full text-brand-sand pointer-events-none z-10 p-4 opacity-70 group-hover:opacity-100 transition-opacity"
                  viewBox="0 0 100 120"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                >
                  {/* Subtle inner framing */}
                  <rect x="2" y="2" width="96" height="116" rx="6" />
                  
                  {/* Fine botanical twigs climbing the corners */}
                  {/* Top-Right Corner */}
                  <path d="M90 10 C86 12 83 16 82 20 C81 24 82 28 85 30" strokeWidth="0.5" />
                  <path d="M86 15 C88 16 90 15 91 13" strokeWidth="0.5" fill="var(--color-brand-sand)" fillOpacity="0.3" />
                  <path d="M82 22 C80 23 78 22 77 20" strokeWidth="0.5" fill="var(--color-brand-sand)" fillOpacity="0.3" />
                  
                  {/* Bottom-Left Corner */}
                  <path d="M10 110 C14 108 17 104 18 100 C19 96 18 92 15 90" strokeWidth="0.5" />
                  <path d="M14 105 C12 104 10 105 9 107" strokeWidth="0.5" fill="var(--color-brand-sand)" fillOpacity="0.3" />
                  <path d="M18 98 C20 97 22 98 23 100" strokeWidth="0.5" fill="var(--color-brand-sand)" fillOpacity="0.3" />
                </svg>

                <div className="absolute inset-0 bg-gradient-to-t from-brand-pizarra/35 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>

            {/* Overlapping Floating Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ type: 'spring', stiffness: 60, damping: 13, delay: 0.25 }}
              className="absolute -bottom-6 -right-4 max-w-[260px] bg-brand-forest text-white p-5 rounded-2xl shadow-xl z-20 border border-brand-forest/10 flex flex-col gap-2"
            >
              <span className="text-3xl text-brand-sand font-serif leading-none h-3 select-none">“</span>
              <p className="font-serif text-xs md:text-sm font-light leading-relaxed italic text-white/90">
                {copy.about.quote}
              </p>
              <span className="text-3xl text-brand-sand font-serif leading-none h-3 select-none text-right -mt-2">”</span>
            </motion.div>
          </div>

          {/* Right Column: Bio Content & Separator */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 50, damping: 15, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col items-start space-y-6 relative"
          >
            {/* Elegant Twig Separator */}
            <svg
              className="w-8 h-8 text-brand-sand mb-1 fill-none stroke-current"
              viewBox="0 0 100 100"
            >
              <path d="M50 90C50 63.333 50 36.667 50 10" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M50 75C53.5 70 59 66.5 65 65C62.5 71 58 75.5 50 78" strokeWidth="2" strokeLinejoin="round" />
              <path d="M50 60C46.5 55 41 51.5 35 50C37.5 56 42 60.5 50 63" strokeWidth="2" strokeLinejoin="round" />
              <path d="M50 45C53.5 40 59 36.5 65 35C62.5 41 58 45.5 50 48" strokeWidth="2" strokeLinejoin="round" />
              <path d="M50 30C46.5 25 41 21.5 35 20C37.5 26 42 30.5 50 33" strokeWidth="2" strokeLinejoin="round" />
              <path d="M50 18C52 14 55 11 59 10C57 14 54 17 50 19" strokeWidth="2" strokeLinejoin="round" />
            </svg>

            <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-brand-sand">
              {copy.about.tag}
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-forest font-light tracking-wide mt-2 mb-2 uppercase">
              {copy.about.title}
            </h2>

            <div className="space-y-4 font-sans text-slate-500 text-sm sm:text-base leading-relaxed font-light">
              <p className="font-semibold text-brand-forest">
                {copy.about.p1}
              </p>
              <p>
                {copy.about.p2}
              </p>
            </div>

            {/* Signature Block */}
            <div className="pt-6 border-t border-slate-100 w-full flex flex-col gap-1">
              <span className="font-serif text-lg font-semibold tracking-wide text-brand-forest">
                {copy.about.sigTitle}
              </span>
              <span className="font-sans text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                {copy.about.sigSubtitle}
              </span>
              <a
                href="https://www.linkedin.com/in/cris-ballester-parets-crisballesterp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 font-sans text-xs text-brand-forest hover:text-brand-sand underline transition-colors cursor-pointer w-fit"
                style={{ minHeight: '44px' }}
              >
                <svg className="w-4 h-4 fill-current text-brand-forest hover:text-brand-sand transition-colors" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                <span>{copy.about.linkedinLabel}</span>
              </a>
            </div>

            {/* Symmetrical vertical sidebar text */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block w-0 h-40 pointer-events-none select-none">
              <div className="rotate-90 origin-right translate-x-24 text-[9px] uppercase tracking-[0.3em] font-sans text-slate-300 font-bold whitespace-nowrap">
                {copy.about.sidebar}
              </div>
            </div>
          </motion.div>
          
        </div>

        {/* Symmetrical High-Impact Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-200/60">
          {copy.about.metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1, type: 'spring', stiffness: 55 }}
              className="bg-brand-cream border border-slate-200/80 rounded-2xl p-6 flex flex-col gap-2 shadow-sm text-center md:text-left group hover:border-brand-sand transition-colors"
            >
              <span className="font-serif text-3xl md:text-4xl text-brand-forest font-semibold group-hover:text-brand-sand transition-colors">
                {metric.value}
              </span>
              <div className="space-y-0.5">
                <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-brand-forest block">
                  {metric.label}
                </span>
                <p className="font-sans text-xs text-slate-400 font-light">
                  {metric.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
