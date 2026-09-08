import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Copy, Check, ExternalLink, MessageSquare, Send, Sparkles, AlertCircle } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

interface QuickBriefingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialScenario?: string;
}

export const QuickBriefingModal: React.FC<QuickBriefingModalProps> = ({
  isOpen,
  onClose,
  initialScenario
}) => {
  const { manifesto } = useTranslation();
  const cfg = manifesto.briefingModal;

  const [selectedScenario, setSelectedScenario] = useState<string>(
    initialScenario || cfg.scenarios[0]?.id || 'ejecucion'
  );
  const [name, setName] = useState('');
  const [org, setOrg] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  const [isGenerated, setIsGenerated] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialScenario) {
      setSelectedScenario(initialScenario);
    }
  }, [initialScenario]);

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

  if (!isOpen) return null;

  const getScenarioLabel = () => {
    const match = cfg.scenarios.find((s) => s.id === selectedScenario);
    return match ? match.label : selectedScenario;
  };

  const getCompiledDispatch = () => {
    return `Estimada Cris,\n\nLe remito el siguiente despacho confidencial para iniciar nuestra conversación estratégica:\n\n• Nombre y Cargo: ${name}\n• Organización: ${org}\n• Correo de Contacto: ${email}\n• Prioridad Estratégica: ${getScenarioLabel()}\n• Nudo Concreto a Ordenar: ${notes || 'Pendiente de profundizar en briefing directivo'}\n\nQuedo a la espera de coordinar nuestra sesión.\n\nAtentamente,\n${name}`;
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setErrorMsg('Por favor, indica al menos tu nombre y correo de contacto.');
      return;
    }
    setErrorMsg('');
    setIsGenerated(true);
  };

  const handleCopy = () => {
    const text = getCompiledDispatch();
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    });
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`Briefing Estratégico — ${org || name} [${getScenarioLabel()}]`);
    const body = encodeURIComponent(getCompiledDispatch());
    return `mailto:hola@crisballester.com?subject=${subject}&body=${body}`;
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hola Cris, te escribo desde ${org || name} referente a ${getScenarioLabel()}: "${notes || 'Quisiéramos agendar un briefing directivo.'}" Mi contacto es ${email}.`
    );
    return `https://wa.me/34654126634?text=${text}`;
  };

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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
              ? 'max-h-[90vh] rounded-t-[32px] pb-6'
              : 'max-w-xl max-h-[85vh] rounded-3xl my-6'
          }`}
        >
          {/* Mobile handle */}
          <div className="md:hidden pt-3 pb-1 flex justify-center cursor-pointer" onClick={onClose}>
            <div className="w-12 h-1.5 bg-slate-300 rounded-full" />
          </div>

          {/* Header */}
          <div className="flex items-start justify-between p-6 sm:p-7 border-b border-slate-200/70 bg-white/70 backdrop-blur-sm">
            <div className="space-y-1">
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-brand-sand">
                {cfg.tag}
              </span>
              <h3 className="font-serif text-2xl text-brand-forest font-light">
                {cfg.title}
              </h3>
              <p className="font-sans text-xs text-slate-500 font-light">
                {cfg.desc}
              </p>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-7 space-y-6">
            {!isGenerated ? (
              <form onSubmit={handleGenerate} className="space-y-5">
                {errorMsg && (
                  <div className="flex items-center gap-2 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-sans">
                    <AlertCircle size={15} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Scenario Selection Pills */}
                <div className="space-y-2">
                  <label className="font-sans text-[10px] font-bold tracking-wider text-slate-400 uppercase block">
                    {cfg.scenariosLabel}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {cfg.scenarios.map((sc) => (
                      <button
                        key={sc.id}
                        type="button"
                        onClick={() => setSelectedScenario(sc.id)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-sans transition-all cursor-pointer ${
                          selectedScenario === sc.id
                            ? 'bg-brand-forest text-white font-medium shadow-sm'
                            : 'bg-white border border-slate-200 text-slate-600 hover:border-brand-sand'
                        }`}
                      >
                        {sc.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Two Column Name & Org */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1.5">
                    <label className="font-sans text-[10px] font-bold tracking-wider text-slate-400 uppercase block">
                      {cfg.labelName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej: Laura Pons"
                      className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-brand-charcoal focus:border-brand-forest focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-sans text-[10px] font-bold tracking-wider text-slate-400 uppercase block">
                      {cfg.labelOrg}
                    </label>
                    <input
                      type="text"
                      value={org}
                      onChange={(e) => setOrg(e.target.value)}
                      placeholder="Ej: Grupo Balear S.L."
                      className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-brand-charcoal focus:border-brand-forest focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="font-sans text-[10px] font-bold tracking-wider text-slate-400 uppercase block">
                    {cfg.labelEmail} *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ej: laura@empresa.com"
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-brand-charcoal focus:border-brand-forest focus:outline-none transition-colors"
                  />
                </div>

                {/* Notes */}
                <div className="space-y-1.5">
                  <label className="font-sans text-[10px] font-bold tracking-wider text-slate-400 uppercase block">
                    {cfg.labelNotes}
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Ej: Necesitamos ordenar el relevo de comités y alinear el modelo de tesorería para la nueva fase."
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-brand-charcoal focus:border-brand-forest focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-brand-forest hover:bg-brand-forest/90 text-white rounded-xl font-sans text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-brand-forest/10 cursor-pointer transition-all"
                  style={{ minHeight: '44px' }}
                >
                  <Sparkles size={14} className="text-brand-sand" />
                  <span>{cfg.btnGenerate}</span>
                </button>
              </form>
            ) : (
              <div className="space-y-5">
                <div className="p-4 rounded-2xl bg-brand-forest/5 border border-brand-forest/10 space-y-2">
                  <div className="flex items-center gap-2 text-brand-forest font-semibold text-xs">
                    <Check size={16} className="text-brand-sand" />
                    <span>Despacho confidencial preparado</span>
                  </div>
                  <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                    Puedes copiar el texto o enviarlo directamente a través de tu cliente de correo o WhatsApp oficial.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-4 text-xs font-mono text-slate-700 whitespace-pre-wrap max-h-48 overflow-y-auto leading-relaxed">
                  {getCompiledDispatch()}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    onClick={handleCopy}
                    className="py-3 px-3 bg-brand-forest text-white rounded-xl font-sans text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {isCopied ? <Check size={14} className="text-brand-sand" /> : <Copy size={14} />}
                    <span>{isCopied ? cfg.copySuccess : cfg.btnCopy}</span>
                  </button>

                  <a
                    href={getMailtoUrl()}
                    className="py-3 px-3 border border-slate-300 bg-white hover:border-brand-forest text-brand-forest rounded-xl font-sans text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Send size={14} />
                    <span>{cfg.btnEmail}</span>
                  </a>

                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-3 border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl font-sans text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageSquare size={14} />
                    <span>{cfg.btnWhatsApp}</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setIsGenerated(false)}
                  className="w-full text-center text-[10px] font-sans text-slate-400 hover:text-brand-forest uppercase tracking-widest font-bold pt-2 cursor-pointer"
                >
                  Modificar datos
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
