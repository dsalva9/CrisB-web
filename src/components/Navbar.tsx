import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { useTranslation, Language } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const { language, changeLanguage, copy } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: copy.nav.home, href: '#inicio' },
    { label: copy.nav.challenges, href: '#desafios' },
    { label: copy.nav.services, href: '#servicios' },
    { label: copy.nav.about, href: '#sobre-mi' },
    { label: copy.nav.speaking, href: '#conversaciones' },
    { label: copy.nav.contact, href: '#contacto' }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 80, damping: 15 }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'h-20 bg-brand-cream/90 backdrop-blur-md border-b border-slate-200/60 shadow-sm'
            : 'h-24 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-8 lg:px-16 flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#inicio" className="flex items-center gap-3 group">
            {/* Elegant Botanical Twig SVG Logo */}
            <svg
              className="w-6 h-6 text-brand-forest group-hover:text-brand-sand transition-colors duration-300 fill-none stroke-current"
              viewBox="0 0 100 100"
            >
              <path d="M50 90C50 63.333 50 36.667 50 10" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M50 75C53.5 70 59 66.5 65 65C62.5 71 58 75.5 50 78" strokeWidth="2" strokeLinejoin="round" />
              <path d="M50 60C46.5 55 41 51.5 35 50C37.5 56 42 60.5 50 63" strokeWidth="2" strokeLinejoin="round" />
              <path d="M50 45C53.5 40 59 36.5 65 35C62.5 41 58 45.5 50 48" strokeWidth="2" strokeLinejoin="round" />
              <path d="M50 30C46.5 25 41 21.5 35 20C37.5 26 42 30.5 50 33" strokeWidth="2" strokeLinejoin="round" />
              <path d="M50 18C52 14 55 11 59 10C57 14 54 17 50 19" strokeWidth="2" strokeLinejoin="round" />
            </svg>
            <span className="font-serif text-sm tracking-[0.25em] text-brand-forest font-semibold group-hover:text-brand-sand transition-colors duration-300 uppercase">
              CRISBALLESTER.COM
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-sans text-xs tracking-[0.1em] text-slate-600 hover:text-brand-forest transition-colors uppercase font-semibold"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden lg:flex items-center gap-6">
            
            {/* Elegant Language Pill Toggle */}
            <div className="flex items-center border border-slate-200 rounded-full p-0.5 bg-slate-100/50 relative">
              {(['es', 'ca', 'en', 'it', 'de'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => changeLanguage(lang)}
                  className={`w-11 py-1.5 font-sans text-xs font-bold rounded-full transition-all cursor-pointer relative z-10 ${
                    language === lang
                      ? 'text-white'
                      : 'text-slate-500 hover:text-brand-forest'
                  }`}
                  style={{ minHeight: '44px' }}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
              
              {/* Sliding Background Indicator */}
              <motion.div
                layout
                className="absolute top-0.5 bottom-0.5 rounded-full bg-brand-forest shadow-sm z-0"
                style={{
                  width: '44px',
                  left: `${(['es', 'ca', 'en', 'it', 'de'] as Language[]).indexOf(language) * 44 + 2}px`
                }}
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contacto"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center font-sans text-xs font-bold uppercase tracking-widest px-5 py-3 border border-brand-forest text-brand-forest hover:bg-brand-forest hover:text-white rounded-lg transition-all duration-300 cursor-pointer"
              style={{ minHeight: '44px' }} // compliance tap size
            >
              {copy.nav.cta}
            </motion.a>
          </div>

          {/* Mobile Menu Action Row */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Premium Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-center w-11 h-11 border border-slate-200 bg-white hover:bg-slate-50 rounded-lg text-brand-forest cursor-pointer"
              aria-label="Toggle Menu"
              style={{ minWidth: '44px', minHeight: '44px' }} // Ensures compliance with tap target size
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Glassmorphic Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-forest/40 backdrop-blur-lg z-30 lg:hidden flex flex-col justify-center items-center"
          >
            {/* Close touch area backing */}
            <div className="absolute inset-0 z-0" onClick={() => setIsMobileMenuOpen(false)} />
            
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
              className="relative z-10 w-[85%] max-w-sm bg-brand-cream rounded-2xl border border-slate-200/50 shadow-2xl p-8 flex flex-col items-center gap-6"
            >
              <div className="w-12 h-1 bg-slate-300 rounded-full mb-2" />
              
              <ul className="flex flex-col items-center gap-5 w-full text-center">
                {navItems.map((item, idx) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="w-full"
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full py-2 font-serif text-lg tracking-wider text-brand-forest font-semibold hover:text-brand-sand active:text-brand-sand transition-colors uppercase"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              
              <div className="w-full h-px bg-slate-200/80 my-2" />

              {/* Language Selector inside mobile menu */}
              <div className="flex items-center border border-slate-200 rounded-full p-0.5 bg-slate-100/50 relative w-fit mx-auto my-2">
                {(['es', 'ca', 'en', 'it', 'de'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className={`w-10 py-1 font-sans text-xs font-bold rounded-full cursor-pointer relative z-10 transition-colors ${
                      language === lang ? 'text-white' : 'text-slate-500'
                    }`}
                    style={{ minHeight: '44px' }}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
                <motion.div
                  layout
                  className="absolute top-0.5 bottom-0.5 rounded-full bg-brand-forest shadow-sm z-0"
                  style={{
                    width: '40px',
                    left: `${(['es', 'ca', 'en', 'it', 'de'] as Language[]).indexOf(language) * 40 + 2}px`
                  }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              </div>

              <div className="w-full h-px bg-slate-200/80 my-1" />

              {/* Action Button inside mobile menu */}
              <motion.a
                href="#contacto"
                onClick={() => setIsMobileMenuOpen(false)}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-brand-forest text-white text-center font-sans text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-brand-forest/90 shadow-md shadow-brand-forest/10 active:shadow-none transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                style={{ minHeight: '44px' }}
              >
                <MessageSquare size={16} />
                {copy.nav.cta}
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
