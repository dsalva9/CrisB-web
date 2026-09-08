import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ChevronDown, Check } from 'lucide-react';
import { useTranslation, Language } from '../context/LanguageContext';
import { TriggerKey } from '../manifestoData';

interface NavbarProps {
  onOpenDossier: (key: TriggerKey) => void;
  onOpenBriefing: () => void;
}

const languageNames: Record<Language, string> = {
  es: 'Español',
  ca: 'Català',
  en: 'English',
  it: 'Italiano',
  de: 'Deutsch'
};

export const Navbar: React.FC<NavbarProps> = ({ onOpenDossier, onOpenBriefing }) => {
  const { language, changeLanguage, manifesto } = useTranslation();
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const languages: Language[] = ['es', 'ca', 'en', 'it', 'de'];

  // Close dropdown on click or touch outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) {
        setIsMobileLangOpen(false);
      }
    };
    if (isMobileLangOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileLangOpen]);

  return (
    <header className="sticky top-0 left-0 w-full z-40 h-16 sm:h-20 bg-brand-cream/85 backdrop-blur-xl border-b border-slate-200/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto h-full px-3.5 sm:px-8 lg:px-12 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Identity & Logo */}
        <div className="flex items-center gap-2 sm:gap-6 flex-shrink-0">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group"
          >
            {/* Elegant Botanical Twig Icon */}
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-brand-forest group-hover:text-brand-sand transition-colors fill-none stroke-current flex-shrink-0"
              viewBox="0 0 100 100"
            >
              <path d="M50 90C50 63.333 50 36.667 50 10" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M50 75C53.5 70 59 66.5 65 65C62.5 71 58 75.5 50 78" strokeWidth="2" strokeLinejoin="round" />
              <path d="M50 60C46.5 55 41 51.5 35 50C37.5 56 42 60.5 50 63" strokeWidth="2" strokeLinejoin="round" />
              <path d="M50 45C53.5 40 59 36.5 65 35C62.5 41 58 45.5 50 48" strokeWidth="2" strokeLinejoin="round" />
              <path d="M50 30C46.5 25 41 21.5 35 20C37.5 26 42 30.5 50 33" strokeWidth="2" strokeLinejoin="round" />
              <path d="M50 18C52 14 55 11 59 10C57 14 54 17 50 19" strokeWidth="2" strokeLinejoin="round" />
            </svg>
            <span className="font-serif text-[11.5px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.25em] text-brand-forest font-semibold uppercase group-hover:text-brand-sand transition-colors whitespace-nowrap">
              CRIS BALLESTER
            </span>
          </a>

          {/* Desktop Awards Ribbon Badge */}
          <button
            type="button"
            onClick={() => onOpenDossier('awards')}
            className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-sand/10 hover:bg-brand-sand/20 text-brand-forest text-[10px] font-sans font-semibold tracking-wider border border-brand-sand/35 transition-all cursor-pointer shadow-sm hover:shadow"
          >
            <Award size={13} className="text-brand-sand" />
            <span>{manifesto.awardsBadge}</span>
          </button>
        </div>

        {/* Right Nav Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Awards Badge (Mobile / Tablet / Desktop <1280px) */}
          <button
            type="button"
            onClick={() => onOpenDossier('awards')}
            className="flex xl:hidden items-center gap-1 p-1.5 sm:p-2 rounded-xl text-brand-forest hover:bg-brand-forest/5 transition-colors cursor-pointer"
            aria-label={manifesto.awardsNavText}
          >
            <Award size={16} className="text-brand-sand" />
            <span className="hidden md:inline text-[10px] font-sans font-bold uppercase tracking-wider">{manifesto.awardsNavText}</span>
          </button>

          {/* Desktop Language Selector (Hidden on Mobile) */}
          <div className="hidden md:flex items-center border border-slate-200/80 rounded-full p-0.5 bg-white/80 shadow-inner">
            {languages.map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => changeLanguage(lang)}
                className={`px-2.5 py-1 font-sans text-[10px] font-bold rounded-full transition-all cursor-pointer ${
                  language === lang
                    ? 'bg-brand-forest text-white shadow-sm'
                    : 'text-slate-500 hover:text-brand-forest'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Mobile Language Dropdown Pill (Visible ONLY on Mobile <768px) */}
          <div className="relative md:hidden" ref={langDropdownRef}>
            <button
              type="button"
              onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-slate-200 bg-white/90 text-brand-forest text-[11px] font-sans font-bold shadow-xs cursor-pointer"
              aria-label="Cambiar idioma"
            >
              <span>{language.toUpperCase()}</span>
              <ChevronDown size={12} className={`text-slate-400 transition-transform ${isMobileLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
              {isMobileLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 5, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-1.5 w-32 py-1.5 rounded-2xl bg-white shadow-xl border border-slate-200 z-50 overflow-hidden"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => {
                        changeLanguage(lang);
                        setIsMobileLangOpen(false);
                      }}
                      className={`w-full px-3 py-2 text-left text-xs font-sans flex items-center justify-between transition-colors ${
                        language === lang
                          ? 'bg-brand-forest/5 text-brand-forest font-bold'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span>{languageNames[lang]}</span>
                      {language === lang && <Check size={12} className="text-brand-sand" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Primary CTA (Fluid Responsive Padding) */}
          <button
            type="button"
            onClick={onOpenBriefing}
            className="px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full border border-brand-forest/50 hover:border-brand-forest bg-brand-forest md:bg-transparent md:hover:bg-brand-forest text-white md:text-brand-forest md:hover:text-white font-sans text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] transition-all duration-300 shadow-sm cursor-pointer whitespace-nowrap"
            style={{ minHeight: '34px' }}
          >
            <span className="hidden sm:inline">{manifesto.ctaBriefing}</span>
            <span className="sm:hidden">Briefing</span>
          </button>
        </div>
      </div>
    </header>
  );
};
