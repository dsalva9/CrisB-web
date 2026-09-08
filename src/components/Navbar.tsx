import React from 'react';
import { motion } from 'motion/react';
import { Award, Sparkles } from 'lucide-react';
import { useTranslation, Language } from '../context/LanguageContext';
import { TriggerKey } from '../manifestoData';

interface NavbarProps {
  onOpenDossier: (key: TriggerKey) => void;
  onOpenBriefing: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDossier, onOpenBriefing }) => {
  const { language, changeLanguage, manifesto } = useTranslation();

  const languages: Language[] = ['es', 'ca', 'en', 'it', 'de'];

  return (
    <header className="sticky top-0 left-0 w-full z-40 h-20 bg-brand-cream/90 backdrop-blur-md border-b border-slate-200/60 transition-all duration-200">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-8 lg:px-12 flex items-center justify-between gap-3">
        {/* Brand Identity & Logo */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 group flex-shrink-0"
          >
            {/* Elegant Botanical Twig Icon */}
            <svg
              className="w-5 h-5 text-brand-forest group-hover:text-brand-sand transition-colors fill-none stroke-current"
              viewBox="0 0 100 100"
            >
              <path d="M50 90C50 63.333 50 36.667 50 10" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M50 75C53.5 70 59 66.5 65 65C62.5 71 58 75.5 50 78" strokeWidth="2" strokeLinejoin="round" />
              <path d="M50 60C46.5 55 41 51.5 35 50C37.5 56 42 60.5 50 63" strokeWidth="2" strokeLinejoin="round" />
              <path d="M50 45C53.5 40 59 36.5 65 35C62.5 41 58 45.5 50 48" strokeWidth="2" strokeLinejoin="round" />
              <path d="M50 30C46.5 25 41 21.5 35 20C37.5 26 42 30.5 50 33" strokeWidth="2" strokeLinejoin="round" />
              <path d="M50 18C52 14 55 11 59 10C57 14 54 17 50 19" strokeWidth="2" strokeLinejoin="round" />
            </svg>
            <span className="font-serif text-sm tracking-[0.22em] text-brand-forest font-semibold uppercase group-hover:text-brand-sand transition-colors">
              CRIS BALLESTER
            </span>
          </a>

          {/* Interactive Awards Pill Badge */}
          <button
            type="button"
            onClick={() => onOpenDossier('awards')}
            className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-sand/10 hover:bg-brand-sand/20 text-brand-charcoal text-[11px] font-sans font-medium border border-brand-sand/30 transition-all cursor-pointer"
          >
            <Award size={13} className="text-brand-sand" />
            <span>{manifesto.awardsBadge}</span>
          </button>
        </div>

        {/* Right Nav Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Mobile Awards Icon Button */}
          <button
            type="button"
            onClick={() => onOpenDossier('awards')}
            className="xl:hidden flex items-center gap-1 p-2 rounded-xl text-brand-forest hover:bg-brand-forest/5 text-xs transition-colors cursor-pointer"
            aria-label="Ver premios"
          >
            <Award size={16} className="text-brand-sand" />
            <span className="hidden sm:inline text-[11px] font-sans font-semibold">Premios</span>
          </button>

          {/* Language Selector Pill */}
          <div className="flex items-center border border-slate-200 rounded-full p-0.5 bg-white/70">
            {languages.map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => changeLanguage(lang)}
                className={`px-2 sm:px-2.5 py-1 font-sans text-[10px] font-bold rounded-full transition-all cursor-pointer ${
                  language === lang
                    ? 'bg-brand-forest text-white shadow-sm'
                    : 'text-slate-500 hover:text-brand-forest'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Primary CTA */}
          <button
            type="button"
            onClick={onOpenBriefing}
            className="px-4 sm:px-5 py-2.5 rounded-xl bg-brand-forest hover:bg-brand-forest/90 text-white font-sans text-[11px] font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer"
            style={{ minHeight: '40px' }}
          >
            {manifesto.ctaBriefing}
          </button>
        </div>
      </div>
    </header>
  );
};
