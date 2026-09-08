import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from '../context/LanguageContext';
import { TriggerKey } from '../manifestoData';
import { TriggerWord } from './TriggerWord';
import { Award, Compass } from 'lucide-react';

interface ManifestoProps {
  onSelectTrigger: (key: TriggerKey) => void;
  activeTrigger: TriggerKey | null;
}

export const Manifesto: React.FC<ManifestoProps> = ({
  onSelectTrigger,
  activeTrigger
}) => {
  const { manifesto } = useTranslation();

  const renderParagraph = (parts: typeof manifesto.p1) => {
    return parts.map((part, idx) => {
      if (part.trigger) {
        return (
          <TriggerWord
            key={idx}
            triggerKey={part.trigger}
            label={part.text}
            onClick={onSelectTrigger}
            isActive={activeTrigger === part.trigger}
          />
        );
      }
      return <span key={idx}>{part.text}</span>;
    });
  };

  return (
    <section className="relative min-h-[calc(100vh-96px)] flex flex-col justify-center px-4 sm:px-8 lg:px-16 py-16 sm:py-24 max-w-6xl mx-auto">
      {/* Dynamic ambient organic glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[radial-gradient(circle,var(--color-brand-sand)/8%,transparent_70%)] pointer-events-none blur-2xl" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-[radial-gradient(circle,var(--color-brand-forest)/5%,transparent_70%)] pointer-events-none blur-2xl" />

      {/* Top Status & Context Pill */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 sm:mb-12 text-[11px] font-sans text-slate-500 font-medium"
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-forest/5 text-brand-forest border border-brand-forest/15 uppercase tracking-widest text-[10px] font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
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
        className="space-y-8 sm:space-y-12 text-brand-forest/90 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.5] sm:leading-[1.45] tracking-[-0.01em] font-light"
      >
        {/* Paragraph 1: The Bottlenecks */}
        <p className="max-w-5xl">
          {renderParagraph(manifesto.p1)}
        </p>

        {/* Paragraph 2: The Interventions */}
        <p className="max-w-5xl">
          {renderParagraph(manifesto.p2)}
        </p>

        {/* Paragraph 3: Proof & Identity */}
        <p className="max-w-5xl">
          {renderParagraph(manifesto.p3)}
        </p>
      </motion.div>

      {/* Bottom helper cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-12 sm:mt-16 pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-sans text-slate-400"
      >
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-sand" />
          Haz clic o pulsa en cualquier término resaltado para desplegar el dossier correspondiente.
        </span>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onSelectTrigger('awards')}
            className="text-brand-forest hover:text-brand-sand font-medium uppercase tracking-wider text-[11px] underline transition-colors cursor-pointer"
          >
            Ver Premios Internacionales
          </button>
          <span>·</span>
          <button
            onClick={() => onSelectTrigger('projects')}
            className="text-brand-forest hover:text-brand-sand font-medium uppercase tracking-wider text-[11px] underline transition-colors cursor-pointer"
          >
            Ver Galería +50M€
          </button>
        </div>
      </motion.div>
    </section>
  );
};
