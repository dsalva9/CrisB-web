import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  AlertTriangle,
  Award,
  Sparkles,
  MapPin,
  ArrowRight,
  Send
} from 'lucide-react';
import { DossierItem, TriggerKey } from '../manifestoData';
import { useTranslation } from '../context/LanguageContext';

const LinkedInIcon: React.FC<{ size?: number; className?: string }> = ({ size = 14, className = "" }) => (
  <svg className={`fill-current ${className}`} style={{ width: size, height: size }} viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

interface DossierModalProps {
  isOpen: boolean;
  item: DossierItem | null;
  onClose: () => void;
  onSelectTrigger: (key: TriggerKey) => void;
  onOpenBriefing: () => void;
}

export const DossierModal: React.FC<DossierModalProps> = ({
  isOpen,
  item,
  onClose,
  onSelectTrigger,
  onOpenBriefing
}) => {
  const { manifesto } = useTranslation();
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset project slider index when trigger item changes
  useEffect(() => {
    setActiveProjectIdx(0);
  }, [item?.id]);

  // Handle ESC key press and scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  const handleActionClick = () => {
    if (item.ctaAction === 'briefing') {
      onClose();
      onOpenBriefing();
    } else if (item.ctaAction === 'projects') {
      onSelectTrigger('projects');
    } else if (item.ctaAction === 'linkedin') {
      if (item.ctaUrl) window.open(item.ctaUrl, '_blank', 'noopener,noreferrer');
    } else if (item.ctaAction === 'external' && item.ctaUrl) {
      window.open(item.ctaUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 bg-brand-charcoal/50 backdrop-blur-md z-40"
        />

        {/* Modal Container */}
        <motion.div
          initial={isMobile ? { y: '100%' } : { opacity: 0, scale: 0.95, y: 15 }}
          animate={isMobile ? { y: 0 } : { opacity: 1, scale: 1, y: 0 }}
          exit={isMobile ? { y: '100%' } : { opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 28, stiffness: 320 }}
          className={`relative z-50 w-full bg-brand-cream border border-slate-200/80 shadow-2xl overflow-hidden flex flex-col ${
            isMobile
              ? 'max-h-[88vh] rounded-t-[32px] pb-6'
              : 'max-w-2xl lg:max-w-3xl max-h-[85vh] rounded-3xl my-6'
          }`}
        >
          {/* Mobile drag handle */}
          <div className="md:hidden pt-3 pb-1 flex justify-center cursor-pointer" onClick={onClose}>
            <div className="w-12 h-1.5 bg-slate-300 rounded-full" />
          </div>

          {/* Dossier Header */}
          <div className="flex items-start justify-between p-6 sm:p-8 border-b border-slate-200/70 bg-white/70 backdrop-blur-sm">
            <div className="space-y-1.5 pr-6">
              <div className="flex items-center gap-2">
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-brand-sand">
                  {item.tag}
                </span>
                {item.metric && (
                  <span className="inline-flex items-center font-sans text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-forest/10 text-brand-forest">
                    {item.metric.value}
                  </span>
                )}
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-brand-forest font-light leading-snug">
                {item.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-500 font-light">
                {item.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="flex-shrink-0 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-brand-charcoal flex items-center justify-center transition-colors cursor-pointer"
              aria-label={manifesto.dossierClose}
            >
              <X size={18} />
            </button>
          </div>

          {/* Scrollable Body Content */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
            {/* Direct Quote banner */}
            {item.quote && (
              <div className="p-5 sm:p-6 rounded-2xl bg-brand-forest text-white shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,var(--color-brand-sand)/20%,transparent_70%)] pointer-events-none" />
                <p className="font-serif text-sm sm:text-base italic font-light leading-relaxed text-white/95">
                  {item.quote}
                </p>
              </div>
            )}

            {/* Cris Ballester Portrait and Bio Split */}
            {item.id === 'cris' && (
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-5 flex justify-center">
                  <div className="relative w-40 h-52 sm:w-full sm:h-64 rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white">
                    <img
                      src="/consultant.png"
                      alt="Cris Ballester"
                      className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
                <div className="sm:col-span-7 space-y-4 font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  <p className="font-medium text-brand-forest">
                    {item.solution}
                  </p>
                  <div className="pt-2">
                    <a
                      href={item.ctaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-forest text-white text-xs font-semibold hover:bg-brand-forest/90 transition-colors"
                    >
                      <LinkedInIcon size={14} />
                      <span>{item.ctaText}</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Awards List Component */}
            {item.awardsList && item.awardsList.length > 0 && (
              <div className="space-y-4">
                {item.awardsList.map((aw, idx) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2 hover:border-brand-sand transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-brand-forest/5 flex items-center justify-center text-brand-sand">
                          <Award size={18} />
                        </div>
                        <div>
                          <span className="font-mono text-[10px] font-bold text-brand-sand tracking-widest block">
                            {aw.year}
                          </span>
                          <h4 className="font-serif text-base sm:text-lg text-brand-forest font-semibold">
                            {aw.name}
                          </h4>
                        </div>
                      </div>
                      {aw.link && (
                        <a
                          href={aw.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-brand-forest p-1 transition-colors"
                          aria-label="Enlace oficial"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                    <p className="font-sans text-xs font-medium text-slate-700">
                      {aw.organization}
                    </p>
                    <p className="font-sans text-xs text-slate-500 font-light leading-relaxed">
                      {aw.focus}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Real Projects Slider Component */}
            {item.projects && item.projects.length > 0 && (
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-black aspect-[16/10] sm:aspect-[16/9]">
                  <img
                    src={item.projects[activeProjectIdx].image}
                    alt={item.projects[activeProjectIdx].title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Project metadata overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white space-y-1">
                    <div className="flex items-center gap-2 font-mono text-[10px] tracking-wider text-brand-sand">
                      <MapPin size={12} />
                      <span>{item.projects[activeProjectIdx].location}</span>
                      <span>·</span>
                      <span>{item.projects[activeProjectIdx].year}</span>
                    </div>
                    <h4 className="font-serif text-lg sm:text-xl font-semibold">
                      {item.projects[activeProjectIdx].title}
                    </h4>
                    <p className="font-sans text-xs text-white/80 font-light max-w-xl line-clamp-2">
                      {item.projects[activeProjectIdx].desc}
                    </p>
                  </div>

                  {/* Slider controls */}
                  <div className="absolute top-3 right-3 flex gap-1.5 z-10">
                    <button
                      onClick={() =>
                        setActiveProjectIdx((prev) =>
                          prev === 0 ? item.projects!.length - 1 : prev - 1
                        )
                      }
                      className="w-8 h-8 rounded-lg bg-black/60 hover:bg-black text-white flex items-center justify-center backdrop-blur-sm transition-colors cursor-pointer"
                      aria-label="Anterior"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={() =>
                        setActiveProjectIdx((prev) =>
                          prev === item.projects!.length - 1 ? 0 : prev + 1
                        )
                      }
                      className="w-8 h-8 rounded-lg bg-black/60 hover:bg-black text-white flex items-center justify-center backdrop-blur-sm transition-colors cursor-pointer"
                      aria-label="Siguiente"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Thumbnails row */}
                <div className="grid grid-cols-4 gap-2">
                  {item.projects.map((proj, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveProjectIdx(idx)}
                      className={`relative aspect-[16/10] rounded-lg overflow-hidden border transition-all cursor-pointer ${
                        activeProjectIdx === idx
                          ? 'border-brand-forest ring-2 ring-brand-sand/60'
                          : 'border-slate-200 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Strategic Diagnostic & Protocol Cards */}
            {(item.symptom || item.solution) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {item.symptom && (
                  <div className="p-5 rounded-2xl bg-white border border-red-100 shadow-sm space-y-2">
                    <div className="flex items-center gap-2 text-amber-700">
                      <AlertTriangle size={15} />
                      <span className="font-sans text-[10px] font-bold tracking-wider uppercase">
                        {item.symptomTitle || 'SÍNTOMA DE ALERTA'}
                      </span>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                      {item.symptom}
                    </p>
                  </div>
                )}

                {item.solution && (
                  <div className="p-5 rounded-2xl bg-white border border-brand-forest/15 shadow-sm space-y-2">
                    <div className="flex items-center gap-2 text-brand-forest">
                      <ShieldCheck size={15} />
                      <span className="font-sans text-[10px] font-bold tracking-wider uppercase">
                        {item.solutionTitle || 'PROTOCOLO DE INTERVENCIÓN'}
                      </span>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                      {item.solution}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Tangible Milestones Bullet List */}
            {item.milestones && item.milestones.length > 0 && (
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
                <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-brand-forest block border-b border-slate-100 pb-2">
                  {item.milestonesTitle || 'HITOS & ENTREGABLES'}
                </span>
                <ul className="space-y-2.5">
                  {item.milestones.map((ms, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-slate-600 font-light leading-relaxed"
                    >
                      <Sparkles size={13} className="text-brand-sand flex-shrink-0 mt-1" />
                      <span>{ms}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Dossier Footer Action */}
          {item.ctaText && (
            <div className="p-5 sm:p-6 border-t border-slate-200/70 bg-white/90 backdrop-blur-sm flex items-center justify-between gap-4">
              <span className="font-sans text-[11px] text-slate-400 hidden sm:inline-block">
                {manifesto.taglineSignature} · Cris Ballester
              </span>
              <button
                onClick={handleActionClick}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-brand-forest hover:bg-brand-forest/90 text-white font-sans text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-brand-forest/15 transition-all cursor-pointer"
                style={{ minHeight: '44px' }}
              >
                <span>{item.ctaText}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
