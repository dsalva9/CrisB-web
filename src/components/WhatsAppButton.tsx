import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export const WhatsAppButton: React.FC = () => {
  const { language } = useTranslation();
  const [showTooltip, setShowTooltip] = useState(false);

  // Load tooltip dismiss preference
  useEffect(() => {
    const isDismissed = localStorage.getItem('whatsapp-tooltip-dismissed');
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
      }, 3500); // delays entrance slightly for premium overlay presence
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismissTooltip = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowTooltip(false);
    localStorage.setItem('whatsapp-tooltip-dismissed', 'true');
  };

  const getWhatsappUrl = () => {
    const textMap = {
      es: "Hola Cris, me gustaría agendar un café de consultoría estratégica para mi empresa.",
      ca: "Hola Cris, em agradaria agendar un cafè de consultoria estratègica per a la meva empresa.",
      en: "Hello Cris, I would like to schedule a strategic consulting coffee for my company.",
      it: "Ciao Cris, vorrei programmare un caffè di consulenza strategica per la mia azienda.",
      de: "Hallo Cris, ich würde gerne einen strategischen Beratungskaffee für mein Unternehmen vereinbaren."
    };
    const text = textMap[language] || textMap.es;
    return `https://wa.me/34654126634?text=${encodeURIComponent(text)}`;
  };

  const tooltipTextMap = {
    es: "¿Agendamos un café estratégico? Hablemos de forma directa.",
    ca: "Agendem un cafè estratègic? Parlem de manera directa.",
    en: "Shall we schedule a strategic coffee? Let's talk directly.",
    it: "Fissiamo un caffè strategico? Parliamo direttamente.",
    de: "Sollen wir einen strategischen Kaffee vereinbaren? Lassen Sie uns direkt sprechen."
  };
  const tooltipText = tooltipTextMap[language] || tooltipTextMap.es;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Tooltip Welcoming Box */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="bg-brand-forest text-white p-4 rounded-2xl shadow-xl border border-white/10 flex items-start gap-3 pointer-events-auto max-w-[260px] relative mb-1"
          >
            {/* Close Tooltip Button */}
            <button
              onClick={handleDismissTooltip}
              className="absolute top-2 right-2 p-0.5 rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              aria-label="Cerrar sugerencia"
              style={{ minWidth: '20px', minHeight: '20px' }}
            >
              <X size={12} />
            </button>
            
            <div className="flex gap-2">
              <MessageCircle size={16} className="text-brand-sand mt-0.5 flex-shrink-0" />
              <p className="font-sans text-[11px] leading-relaxed text-white/95 font-medium pr-3 select-none">
                {tooltipText}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.a
        href={getWhatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacto por WhatsApp"
        className="w-14 h-14 bg-[#25d366] text-white rounded-full shadow-lg hover:shadow-xl focus:outline-none flex items-center justify-center relative pointer-events-auto cursor-pointer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', delay: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Infinite pulse ping */}
        <span className="absolute inset-0 rounded-full bg-[#25d366] opacity-30 animate-ping z-0" />
        
        {/* WhatsApp Icon */}
        <svg className="w-6.5 h-6.5 fill-current relative z-10" viewBox="0 0 24 24">
          <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.46 3.473 1.33 4.98l-1.413 5.16 5.283-1.385c1.455.795 3.09 1.213 4.773 1.215h.005c5.503 0 9.986-4.485 9.986-9.99 0-2.668-1.037-5.176-2.924-7.064S14.68 2 12.012 2zm6.924 14.935c-.274.773-1.6 1.412-2.202 1.5-1.247.18-4.103-1.4-6.425-4.492C7.99 10.852 6.642 8.442 6.822 7.195c.18-.602.82-1.928 1.593-2.202.26-.09.52-.103.744-.046.223.056.406.2.533.486.326.732.99 2.41 1.077 2.593.087.184.144.4.02.643-.122.24-.225.334-.41.554-.183.218-.387.457-.55.626-.182.18-.372.378-.16.744.21.363.94 1.555 2.01 2.51 1.38 1.23 2.545 1.614 2.906 1.796.36.183.57.152.784-.092.213-.243.913-1.06 1.157-1.427.244-.367.49-.306.814-.184.326.12 2.065.974 2.42 1.15.355.18.59.266.677.416.088.15.088.87-.186 1.642z"/>
        </svg>
      </motion.a>

    </div>
  );
};
