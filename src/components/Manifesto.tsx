import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from '../context/LanguageContext';
import { TriggerKey, DossierItem } from '../manifestoData';
import { TriggerWord } from './TriggerWord';
import { Award, Compass, ArrowRight, ShieldCheck, AlertTriangle, Sparkles, MapPin } from 'lucide-react';

interface ManifestoProps {
  onSelectTrigger: (key: TriggerKey) => void;
  activeTrigger: TriggerKey | null;
}

const triggerImages: Record<TriggerKey, string> = {
  execution: '/boardroom.png',
  treasury: '/boardroom.png',
  governance: '/boardroom.png',
  interim: '/consultant.png',
  sustainability: '/projects/salvador_espriu_ext.png',
  consortia: '/projects/pere_matutes_int.png',
  awards: '/projects/salvador_espriu_ext.png',
  projects: '/projects/salvador_espriu_int1.png',
  cris: '/consultant.png',
  location: '/projects/olivera_ext.png',
};

export const Manifesto: React.FC<ManifestoProps> = ({
  onSelectTrigger,
  activeTrigger
}) => {
  const { manifesto } = useTranslation();
  const [hoveredTrigger, setHoveredTrigger] = useState<TriggerKey | null>(null);

  // Active or hovered dossier preview
  const previewKey = hoveredTrigger || activeTrigger;
  const activeDossier: DossierItem | undefined = previewKey ? manifesto.dossiers[previewKey] : undefined;

  const renderParagraph = (parts: typeof manifesto.p1) => {
    return parts.map((part, idx) => {
      if (part.trigger) {
        return (
          <TriggerWord
            key={idx}
            triggerKey={part.trigger}
            label={part.text}
            onClick={onSelectTrigger}
            onHover={setHoveredTrigger}
            isActive={activeTrigger === part.trigger}
            previewData={manifesto.dossiers[part.trigger]}
          />
        );
      }
      return <span key={idx}>{part.text}</span>;
    });
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center px-4 sm:px-6 lg:px-12 xl:px-16 py-8 sm:py-12 lg:py-16 max-w-7xl mx-auto w-full">
      {/* Dynamic ambient organic glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[radial-gradient(circle,var(--color-brand-sand)/10%,transparent_70%)] pointer-events-none blur-3xl" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-[radial-gradient(circle,var(--color-brand-forest)/7%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="lg:grid lg:grid-cols-12 lg:gap-10 xl:gap-16 items-start">
        {/* Left Column: The High-Craft Editorial Text (7 cols on desktop) */}
        <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center">
          {/* Top Status & Context Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-2.5 sm:gap-4 mb-6 sm:mb-10 text-[11px] font-sans text-slate-500 font-medium"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-forest/5 text-brand-forest border border-brand-forest/15 uppercase tracking-widest text-[9.5px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              Consultoría de Firma
            </span>

            <span className="hidden sm:inline-block text-slate-300">|</span>

            <span className="inline-flex items-center gap-1.5 text-slate-500 tracking-wider uppercase text-[10px]">
              <Compass size={12} className="text-brand-sand" />
              Palma de Mallorca · 39°34'N 2°39'E
            </span>
          </motion.div>

          {/* The 3-Paragraph High-Craft Editorial Text */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 sm:space-y-9 text-brand-forest font-serif text-[21px] sm:text-2xl md:text-3xl lg:text-[33px] xl:text-[36px] leading-[1.48] sm:leading-[1.45] tracking-[-0.015em] font-light"
          >
            {/* Paragraph 1: The Bottlenecks */}
            <p>
              {renderParagraph(manifesto.p1)}
            </p>

            {/* Paragraph 2: The Interventions */}
            <p>
              {renderParagraph(manifesto.p2)}
            </p>

            {/* Paragraph 3: Proof & Identity */}
            <p>
              {renderParagraph(manifesto.p3)}
            </p>
          </motion.div>

          {/* Bottom helper cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 sm:mt-12 pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-sans text-slate-400"
          >
            <span className="flex items-center gap-2 text-[11px] sm:text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-sand flex-shrink-0" />
              Pulsa en cualquier término resaltado para desplegar su dossier.
            </span>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onSelectTrigger('awards')}
                className="text-brand-forest hover:text-brand-sand font-semibold uppercase tracking-wider text-[10.5px] underline transition-colors cursor-pointer"
              >
                Premios Internacionales
              </button>
              <span>·</span>
              <button
                onClick={() => onSelectTrigger('projects')}
                className="text-brand-forest hover:text-brand-sand font-semibold uppercase tracking-wider text-[10.5px] underline transition-colors cursor-pointer"
              >
                Galería +50M€
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Live Architectural Viewfinder & Dossier Telemetry (Desktop Only, 5 cols, Sticky) */}
        <div className="hidden lg:block lg:col-span-5 xl:col-span-5 sticky top-28 self-start">
          <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-brand-sand/30 shadow-[0_20px_50px_rgba(27,59,34,0.06)] p-6 xl:p-7 relative overflow-hidden transition-all duration-300">
            {/* Ambient corner glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-[radial-gradient(circle_at_top_right,var(--color-brand-sand)/15%,transparent_70%)] pointer-events-none" />

            <AnimatePresence mode="wait">
              {activeDossier ? (
                /* Interactive Viewfinder State when a trigger is hovered */
                <motion.div
                  key={activeDossier.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="space-y-4"
                >
                  {/* Category Tag & Metric pill */}
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-brand-sand truncate">
                      {activeDossier.tag}
                    </span>
                    {activeDossier.metric && (
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-forest/10 text-brand-forest">
                        {activeDossier.metric.value}
                      </span>
                    )}
                  </div>

                  {/* High-res Image / Architectural Viewport */}
                  <div
                    onClick={() => onSelectTrigger(activeDossier.id)}
                    className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-900 shadow-md group cursor-pointer"
                  >
                    <img
                      src={triggerImages[activeDossier.id] || '/boardroom.png'}
                      alt={activeDossier.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                    
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <p className="font-sans text-[10px] font-mono text-brand-sand tracking-wider uppercase">
                        {activeDossier.metric?.label || 'Dossier de Firma'}
                      </p>
                      <h4 className="font-serif text-lg font-semibold leading-tight text-white drop-shadow-sm">
                        {activeDossier.title}
                      </h4>
                    </div>

                    <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/90 text-brand-forest flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                      <ArrowRight size={13} />
                    </div>
                  </div>

                  {/* Subtitle / Executive Insight */}
                  <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                    {activeDossier.subtitle}
                  </p>

                  {/* Quote or Symptom Alert Snippet */}
                  {activeDossier.quote ? (
                    <div className="p-3.5 rounded-xl bg-brand-forest/5 border border-brand-forest/10 text-brand-forest">
                      <p className="font-serif text-xs italic font-light leading-relaxed">
                        "{activeDossier.quote}"
                      </p>
                    </div>
                  ) : activeDossier.symptom ? (
                    <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/50 text-amber-900">
                      <div className="flex items-center gap-1.5 text-[9px] font-bold tracking-wider uppercase text-amber-700 mb-1">
                        <AlertTriangle size={12} />
                        <span>{activeDossier.symptomTitle || 'SÍNTOMA DE ALERTA'}</span>
                      </div>
                      <p className="font-sans text-[11px] leading-snug font-light line-clamp-3">
                        {activeDossier.symptom}
                      </p>
                    </div>
                  ) : null}

                  {/* Action Link to Full Dossier */}
                  <button
                    type="button"
                    onClick={() => onSelectTrigger(activeDossier.id)}
                    className="w-full py-2.5 px-4 rounded-xl bg-brand-forest hover:bg-brand-forest/90 text-white font-sans text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                  >
                    <span>Abrir Dossier Completo</span>
                    <ArrowRight size={13} />
                  </button>
                </motion.div>
              ) : (
                /* Default Executive Monolith State (Cris Ballester Credentials & Awards) */
                <motion.div
                  key="default-profile"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="space-y-4"
                >
                  {/* Cris Ballester Portrait & Wordmark Header */}
                  <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                    <div className="w-16 h-20 rounded-2xl overflow-hidden shadow-sm border border-brand-sand/30 flex-shrink-0 bg-white">
                      <img
                        src="/consultant.png"
                        alt="Cris Ballester"
                        className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-0.5">
                      <span className="font-mono text-[9.5px] font-bold text-brand-sand tracking-widest uppercase block">
                        Directora & Consultora de Firma
                      </span>
                      <h3 className="font-serif text-lg font-semibold text-brand-forest leading-tight">
                        Cris Ballester
                      </h3>
                      <p className="font-sans text-[11px] text-slate-500 font-light leading-snug">
                        Ex-Directora General de Vivienda y Arquitectura · Economista
                      </p>
                    </div>
                  </div>

                  {/* Laurels & International Recognition Badge */}
                  <div
                    onClick={() => onSelectTrigger('awards')}
                    className="p-3.5 rounded-2xl bg-brand-forest text-white space-y-2 relative overflow-hidden cursor-pointer group shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,var(--color-brand-sand)/30%,transparent_70%)] pointer-events-none" />
                    <div className="flex items-center justify-between text-brand-sand text-[10px] font-mono tracking-widest uppercase font-bold">
                      <span className="flex items-center gap-1.5">
                        <Award size={13} />
                        Reconocimiento Internacional
                      </span>
                      <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div className="space-y-1 text-xs font-sans">
                      <p className="font-semibold text-white/95">
                        Royal Academy Architecture Prize 2024 (London)
                      </p>
                      <p className="text-white/75 text-[11px]">
                        OBEL Award 2026 Copenhagen · "Systems' Hack"
                      </p>
                    </div>
                  </div>

                  {/* Telemetry Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 text-center py-1">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="font-serif text-base font-bold text-brand-forest block">
                        +50M€
                      </span>
                      <span className="font-sans text-[9px] text-slate-500 leading-none">
                        Licitados
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="font-serif text-base font-bold text-brand-forest block">
                        15+
                      </span>
                      <span className="font-sans text-[9px] text-slate-500 leading-none">
                        Promociones
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="font-serif text-base font-bold text-brand-forest block">
                        100%
                      </span>
                      <span className="font-sans text-[9px] text-slate-500 leading-none">
                        Justificados
                      </span>
                    </div>
                  </div>

                  {/* Live Hint */}
                  <div className="pt-2 flex items-center justify-between text-[10.5px] font-sans text-slate-400 border-t border-slate-100">
                    <span className="flex items-center gap-1.5">
                      <Sparkles size={12} className="text-brand-sand" />
                      Inspección en tiempo real
                    </span>
                    <span>Pasa el cursor sobre el texto</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

