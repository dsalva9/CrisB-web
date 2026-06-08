import React from 'react';
import { useTranslation } from '../context/LanguageContext';

interface FooterProps {
  onOpenModal: (type: 'legal' | 'privacy' | 'cookies') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  const { t, copy } = useTranslation();

  const handleLegalClick = (e: React.MouseEvent, type: 'legal' | 'privacy' | 'cookies') => {
    e.preventDefault();
    onOpenModal(type);
  };

  return (
    <footer className="bg-brand-forest text-white/80 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-5">
            <a href="#inicio" className="flex items-center gap-3 group">
              {/* Elegant Twig */}
              <svg className="w-5 h-5 text-brand-sand fill-none stroke-current" viewBox="0 0 100 100">
                <path d="M50 90C50 63.333 50 36.667 50 10" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M50 75C53.5 70 59 66.5 65 65C62.5 71 58 75.5 50 78" strokeWidth="2" strokeLinejoin="round" />
                <path d="M50 60C46.5 55 41 51.5 35 50C37.5 56 42 60.5 50 63" strokeWidth="2" strokeLinejoin="round" />
                <path d="M50 45C53.5 40 59 36.5 65 35C62.5 41 58 45.5 50 48" strokeWidth="2" strokeLinejoin="round" />
                <path d="M50 30C46.5 25 41 21.5 35 20C37.5 26 42 30.5 50 33" strokeWidth="2" strokeLinejoin="round" />
                <path d="M50 18C52 14 55 11 59 10C57 14 54 17 50 19" strokeWidth="2" strokeLinejoin="round" />
              </svg>
              <span className="font-serif text-xs tracking-[0.25em] text-white font-semibold uppercase">
                CRISBALLESTER.COM
              </span>
            </a>
            
            <p className="font-sans text-xs sm:text-sm text-white/50 leading-relaxed font-light max-w-sm">
              {copy.about.sigSubtitle} — {copy.about.p1.slice(0, 120)}...
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-[10px] font-bold tracking-widest text-brand-sand uppercase">
              {t('footer_col1_title')}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#inicio" className="font-sans text-xs hover:text-brand-sand transition-colors">
                  {copy.nav.home}
                </a>
              </li>
              <li>
                <a href="#desafios" className="font-sans text-xs hover:text-brand-sand transition-colors">
                  {copy.nav.challenges}
                </a>
              </li>
              <li>
                <a href="#servicios" className="font-sans text-xs hover:text-brand-sand transition-colors">
                  {copy.nav.services}
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="font-sans text-xs hover:text-brand-sand transition-colors">
                  {copy.nav.about}
                </a>
              </li>
              <li>
                <a href="#conversaciones" className="font-sans text-xs hover:text-brand-sand transition-colors">
                  {copy.nav.speaking}
                </a>
              </li>
            </ul>
          </div>

          {/* Services Quicklist */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-[10px] font-bold tracking-widest text-brand-sand uppercase">
              {t('footer_col2_title')}
            </h4>
            <ul className="space-y-2.5">
              {copy.services.pillars.map((pillar) => (
                <li key={pillar.id}>
                  <a href="#servicios" className="font-sans text-xs hover:text-brand-sand transition-colors">
                    {pillar.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-[10px] font-bold tracking-widest text-brand-sand uppercase">
              {t('footer_col3_title')}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#contacto" className="font-sans text-xs hover:text-brand-sand transition-colors">
                  {copy.nav.contact}
                </a>
              </li>
              <li>
                <a href="mailto:hola@crisballester.com" className="font-sans text-xs hover:text-brand-sand underline transition-colors decoration-white/10">
                  hola@crisballester.com
                </a>
              </li>
              <li className="font-sans text-xs text-white/40">
                Palma / Santa Eugenia, Mallorca
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 text-[11px] text-white/40 font-sans">
          
          <div
            dangerouslySetInnerHTML={{ __html: copy.copyright }}
            className="text-center md:text-left [&_a]:text-brand-sand [&_a]:underline [&_a]:hover:text-white [&_a]:transition-colors"
          />
          
          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="#legal"
              onClick={(e) => handleLegalClick(e, 'legal')}
              className="hover:text-white transition-colors"
            >
              {copy.legal.notice.title}
            </a>
            <a
              href="#privacidad"
              onClick={(e) => handleLegalClick(e, 'privacy')}
              className="hover:text-white transition-colors"
            >
              {copy.legal.privacy.title}
            </a>
            <a
              href="#cookies"
              onClick={(e) => handleLegalClick(e, 'cookies')}
              className="hover:text-white transition-colors"
            >
              {copy.legal.cookies.title}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
