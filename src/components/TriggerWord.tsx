import React from 'react';
import { TriggerKey, DossierItem } from '../manifestoData';

interface TriggerWordProps {
  triggerKey: TriggerKey;
  label: string;
  onClick: (key: TriggerKey) => void;
  onHover?: (key: TriggerKey | null) => void;
  isActive?: boolean;
  previewData?: DossierItem;
}

export const TriggerWord: React.FC<TriggerWordProps> = ({
  triggerKey,
  label,
  onClick,
  onHover,
  isActive = false,
}) => {
  return (
    <span
      role="button"
      tabIndex={0}
      onClick={() => onClick(triggerKey)}
      onMouseEnter={() => onHover?.(triggerKey)}
      onMouseLeave={() => onHover?.(null)}
      onFocus={() => onHover?.(triggerKey)}
      onBlur={() => onHover?.(null)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(triggerKey);
        }
      }}
      className={`inline cursor-pointer select-none outline-none font-serif transition-all duration-200 ${
        isActive
          ? 'bg-brand-forest text-white px-1.5 py-0.5 rounded shadow-sm'
          : 'text-brand-forest underline decoration-brand-sand hover:decoration-brand-forest decoration-[2px] underline-offset-[6px] sm:underline-offset-[8px] hover:bg-brand-sand/20 px-1 -mx-1 py-0.5 rounded'
      }`}
      aria-label={`Abrir dossier sobre ${label}`}
    >
      {label}
    </span>
  );
};


