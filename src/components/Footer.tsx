import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { Mail, MapPin, Award } from 'lucide-react';
import { TriggerKey } from '../manifestoData';

const LinkedInIcon: React.FC<{ size?: number; className?: string }> = ({ size = 13, className = "" }) => (
  <svg className={`fill-current ${className}`} style={{ width: size, height: size }} viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

interface FooterProps {
  onOpenModal: (type: 'legal' | 'privacy' | 'cookies') => void;
  onOpenDossier: (key: TriggerKey) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal, onOpenDossier }) => {
  const { copy } = useTranslation();

  const handleLegalClick = (e: React.MouseEvent, type: 'legal' | 'privacy' | 'cookies') => {
    e.preventDefault();
    onOpenModal(type);
  };

  return (
    <footer className="border-t border-slate-200/80 bg-white/60 text-slate-500 py-12 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand wordmark & Mallorca Headquarters */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
          <span className="font-serif text-sm tracking-[0.2em] font-semibold text-brand-forest uppercase">
            CRIS BALLESTER
          </span>
          <span className="hidden sm:inline-block text-slate-300">|</span>
          <span className="flex items-center gap-1.5 text-slate-500 text-[11px]">
            <MapPin size={13} className="text-brand-sand" />
            Santa Eugènia
          </span>
        </div>

        {/* Center: Direct executive channels */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:hola@crisballester.com"
            className="flex items-center gap-1.5 text-slate-600 hover:text-brand-forest transition-colors text-[11px]"
          >
            <Mail size={13} className="text-brand-sand" />
            <span>hola@crisballester.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/cris-ballester-parets-crisballesterp/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-slate-600 hover:text-brand-forest transition-colors text-[11px]"
          >
            <LinkedInIcon size={13} className="text-brand-sand" />
            <span>LinkedIn</span>
          </a>

          <button
            onClick={() => onOpenDossier('awards')}
            className="flex items-center gap-1 text-slate-600 hover:text-brand-forest transition-colors text-[11px] cursor-pointer"
          >
            <Award size={13} className="text-brand-sand" />
            <span>Royal Academy & OBEL</span>
          </button>
        </div>

        {/* Right: Legal links & copyright */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-400">
          <a
            href="#legal"
            onClick={(e) => handleLegalClick(e, 'legal')}
            className="hover:text-brand-forest transition-colors"
          >
            {copy.legal.notice.title}
          </a>
          <span>·</span>
          <a
            href="#privacidad"
            onClick={(e) => handleLegalClick(e, 'privacy')}
            className="hover:text-brand-forest transition-colors"
          >
            {copy.legal.privacy.title}
          </a>
          <span>·</span>
          <a
            href="#cookies"
            onClick={(e) => handleLegalClick(e, 'cookies')}
            className="hover:text-brand-forest transition-colors"
          >
            {copy.legal.cookies.title}
          </a>
        </div>
      </div>
    </footer>
  );
};
