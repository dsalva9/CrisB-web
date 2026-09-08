import React from 'react';
import { motion } from 'motion/react';
import { TriggerKey } from '../manifestoData';

interface TriggerWordProps {
  triggerKey: TriggerKey;
  label: string;
  onClick: (key: TriggerKey) => void;
  isActive?: boolean;
}

export const TriggerWord: React.FC<TriggerWordProps> = ({
  triggerKey,
  label,
  onClick,
  isActive = false
}) => {
  return (
    <motion.button
      type="button"
      onClick={() => onClick(triggerKey)}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center align-baseline px-2.5 py-0.5 mx-1 my-0.5 rounded-lg border font-serif text-brand-forest transition-all duration-200 cursor-pointer select-none group text-left ${
        isActive
          ? 'bg-brand-forest text-white border-brand-forest shadow-md shadow-brand-forest/15 ring-2 ring-brand-sand/50'
          : 'bg-white/80 hover:bg-white text-brand-forest border-brand-forest/25 hover:border-brand-sand hover:shadow-sm'
      }`}
      aria-label={`Abrir dossier sobre ${label}`}
    >
      <span className="relative inline-block font-normal">
        <span className="text-brand-sand/70 group-hover:text-brand-sand font-mono text-[0.75em] mr-1">
          [
        </span>
        <span
          className={`border-b transition-colors duration-200 ${
            isActive
              ? 'border-brand-sand text-white font-medium'
              : 'border-brand-sand/60 group-hover:border-brand-sand font-medium'
          }`}
        >
          {label}
        </span>
        <span className="text-brand-sand/70 group-hover:text-brand-sand font-mono text-[0.75em] ml-1">
          ]
        </span>
      </span>
    </motion.button>
  );
};
