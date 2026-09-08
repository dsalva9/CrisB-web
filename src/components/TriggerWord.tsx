import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TriggerKey, DossierItem } from '../manifestoData';
import { ArrowRight, Sparkles } from 'lucide-react';

interface TriggerWordProps {
  triggerKey: TriggerKey;
  label: string;
  onClick: (key: TriggerKey) => void;
  isActive?: boolean;
  previewData?: DossierItem;
}

export const TriggerWord: React.FC<TriggerWordProps> = ({
  triggerKey,
  label,
  onClick,
  isActive = false,
  previewData
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span className="relative inline-block align-baseline">
      <motion.button
        type="button"
        onClick={() => onClick(triggerKey)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.97 }}
        className={`inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-0.5 sm:py-1 mx-1 my-0.5 rounded-full border font-serif text-brand-forest transition-all duration-300 cursor-pointer select-none group text-left ${
          isActive
            ? 'bg-brand-forest text-white border-brand-forest shadow-md shadow-brand-forest/20 ring-2 ring-brand-sand/50'
            : 'bg-white/75 hover:bg-white text-brand-forest border-brand-sand/50 hover:border-brand-sand shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_20px_rgba(194,155,98,0.2)]'
        }`}
        aria-label={`Abrir dossier sobre ${label}`}
      >
        {/* Subtle amber jewelled dot */}
        <span
          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
            isActive
              ? 'bg-brand-sand scale-110'
              : 'bg-brand-sand/70 group-hover:bg-brand-sand group-hover:scale-125'
          }`}
        />

        {/* Label text */}
        <span
          className={`transition-colors font-medium ${
            isActive
              ? 'text-white'
              : 'text-brand-forest group-hover:text-brand-forest'
          }`}
        >
          {label}
        </span>
      </motion.button>

      {/* Floating Desktop Hover Micro-Lens Preview */}
      <AnimatePresence>
        {isHovered && previewData && !isActive && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.96 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-full mb-2.5 w-64 p-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-brand-sand/30 shadow-[0_15px_35px_rgba(27,59,34,0.12)] z-30 pointer-events-none text-left"
          >
            {/* Header with Tag & Metric */}
            <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-1.5 mb-1.5">
              <span className="font-sans text-[9px] font-bold tracking-widest uppercase text-brand-sand truncate">
                {previewData.tag}
              </span>
              {previewData.metric && (
                <span className="font-mono text-[9px] font-bold px-1.5 py-0.5 rounded bg-brand-forest/5 text-brand-forest">
                  {previewData.metric.value}
                </span>
              )}
            </div>

            {/* Subtitle / summary */}
            <p className="font-sans text-[11px] text-slate-600 leading-snug font-normal line-clamp-2">
              {previewData.subtitle}
            </p>

            {/* Prompt footer */}
            <div className="flex items-center justify-between pt-2 mt-1.5 text-[10px] font-sans text-brand-forest font-semibold">
              <span>Abrir dossier</span>
              <ArrowRight size={11} className="text-brand-sand" />
            </div>

            {/* Little pointer triangle */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 bg-white/95 border-r border-b border-brand-sand/30 rotate-45 -mt-1" />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};
