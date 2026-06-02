import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'legal' | 'privacy' | 'cookies' | null;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  const { copy } = useTranslation();

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const renderContent = () => {
    if (!type) return null;
    
    const legalData = copy.legal;
    
    switch (type) {
      case 'legal':
        return (
          <>
            <h3 className="text-xl md:text-2xl font-serif text-brand-forest tracking-wider border-b border-slate-200 pb-4 mb-6 uppercase">
              {legalData.notice.title}
            </h3>
            <div className="space-y-4 text-slate-700 text-sm md:text-base leading-relaxed font-sans font-light">
              <h4 className="font-serif font-bold text-brand-forest text-base mt-4 uppercase tracking-wider">{legalData.notice.h1}</h4>
              <p dangerouslySetInnerHTML={{ __html: legalData.notice.p1 }} />
              
              <h4 className="font-serif font-bold text-brand-forest text-base mt-4 uppercase tracking-wider">{legalData.notice.h2}</h4>
              <p dangerouslySetInnerHTML={{ __html: legalData.notice.p2 }} />
              
              <h4 className="font-serif font-bold text-brand-forest text-base mt-4 uppercase tracking-wider">{legalData.notice.h3}</h4>
              <p dangerouslySetInnerHTML={{ __html: legalData.notice.p3 }} />
              
              <h4 className="font-serif font-bold text-brand-forest text-base mt-4 uppercase tracking-wider">{legalData.notice.h4}</h4>
              <p dangerouslySetInnerHTML={{ __html: legalData.notice.p4 }} />
            </div>
          </>
        );
      case 'privacy':
        return (
          <>
            <h3 className="text-xl md:text-2xl font-serif text-brand-forest tracking-wider border-b border-slate-200 pb-4 mb-6 uppercase">
              {legalData.privacy.title}
            </h3>
            <div className="space-y-4 text-slate-700 text-sm md:text-base leading-relaxed font-sans font-light">
              <p dangerouslySetInnerHTML={{ __html: legalData.privacy.p1 }} />
              
              <h4 className="font-serif font-bold text-brand-forest text-base mt-4 uppercase tracking-wider">{legalData.privacy.h2}</h4>
              <p dangerouslySetInnerHTML={{ __html: legalData.privacy.p2 }} />
              
              <h4 className="font-serif font-bold text-brand-forest text-base mt-4 uppercase tracking-wider">{legalData.privacy.h3}</h4>
              <p dangerouslySetInnerHTML={{ __html: legalData.privacy.p3 }} />
              
              <h4 className="font-serif font-bold text-brand-forest text-base mt-4 uppercase tracking-wider">{legalData.privacy.h4}</h4>
              <p dangerouslySetInnerHTML={{ __html: legalData.privacy.p4 }} />
              
              <h4 className="font-serif font-bold text-brand-forest text-base mt-4 uppercase tracking-wider">{legalData.privacy.h5}</h4>
              <p dangerouslySetInnerHTML={{ __html: legalData.privacy.p5 }} />
              
              <h4 className="font-serif font-bold text-brand-forest text-base mt-4 uppercase tracking-wider">{legalData.privacy.h6}</h4>
              <p dangerouslySetInnerHTML={{ __html: legalData.privacy.p6 }} />
              
              <h4 className="font-serif font-bold text-brand-forest text-base mt-4 uppercase tracking-wider">{legalData.privacy.h7}</h4>
              <p dangerouslySetInnerHTML={{ __html: legalData.privacy.p7 }} />
            </div>
          </>
        );
      case 'cookies':
        return (
          <>
            <h3 className="text-xl md:text-2xl font-serif text-brand-forest tracking-wider border-b border-slate-200 pb-4 mb-6 uppercase">
              {legalData.cookies.title}
            </h3>
            <div className="space-y-4 text-slate-700 text-sm md:text-base leading-relaxed font-sans font-light">
              <h4 className="font-serif font-bold text-brand-sand text-base mt-4 uppercase tracking-wider">{legalData.cookies.h1}</h4>
              <p dangerouslySetInnerHTML={{ __html: legalData.cookies.p1 }} />
              
              <h4 className="font-serif font-bold text-brand-forest text-base mt-4 uppercase tracking-wider">{legalData.cookies.h2}</h4>
              <ul className="list-disc pl-5 space-y-2">
                {legalData.cookies.ul.map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
              
              <h4 className="font-serif font-bold text-brand-forest text-base mt-4 uppercase tracking-wider">{legalData.cookies.h3}</h4>
              <p dangerouslySetInnerHTML={{ __html: legalData.cookies.p3 }} />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && type && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Fades In */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
          />

          {/* Modal Container Slides/Scales Up */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-3xl glass-panel max-h-[85vh] overflow-y-auto rounded-2xl shadow-2xl p-6 md:p-8 z-10 focus:outline-none bg-white/95"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Cerrar modal"
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-brand-forest hover:bg-slate-100 transition-all cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Content Wrapper */}
            <div className="pr-2 md:pr-4">
              {renderContent()}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
