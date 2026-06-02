import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Mail, Phone, Copy, Check, ExternalLink, Sparkles, AlertCircle } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export const ContactForm: React.FC = () => {
  const { copy } = useTranslation();

  // Form states
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [budget, setBudget] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  // Status states
  const [isSuccess, setIsSuccess] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Field validation flags
  const [emailTouched, setEmailTouched] = useState(false);
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Compile formatted email body
  const getCompiledEmailBody = () => {
    return `Estimada Cris,\n\nA continuación le adjunto el briefing operativo y financiero para iniciar nuestra conversación estratégica:\n\n• Nombre: ${name}\n• Organización: ${company}\n• Contacto: ${email}\n• Situación y Nudo Operativo: ${message}\n• Presupuesto estimado: ${budget}\n\nQuedo a la espera de su contacto.\n\nAtentamente,\n${name}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !company || !isEmailValid || !message || !budget || !privacyAccepted) {
      setErrorMsg(copy.language === 'ca' ? 'Si us plau, completa tots els camps correctament.' : 'Por favor, completa todos los campos correctamente.');
      return;
    }

    setErrorMsg('');
    setIsSuccess(true);
  };

  const handleCopyClipboard = () => {
    const text = getCompiledEmailBody();
    navigator.clipboard.writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2500);
      })
      .catch((err) => {
        console.error('Copy failed:', err);
      });
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(copy.contact.emailSubject);
    const body = encodeURIComponent(getCompiledEmailBody());
    return `mailto:hola@crisballester.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contacto" className="section py-24 bg-brand-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Coordinates */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="space-y-4">
              <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-brand-sand block">
                {copy.contact.tag}
              </span>
              
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-forest font-light tracking-wide leading-tight uppercase">
                {copy.contact.title}
              </h2>
              
              <div className="w-12 h-px bg-brand-sand" />
              
              <p className="font-sans text-slate-500 text-sm sm:text-base leading-relaxed font-light">
                {copy.contact.desc}
              </p>
            </div>

            {/* Channels */}
            <div className="space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 bg-slate-50 border border-slate-100 rounded-xl text-brand-forest">
                  <MapPin size={18} className="stroke-[1.75]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-serif text-xs font-bold tracking-wider text-brand-forest uppercase">
                    Palma / Santa Eugènia
                  </h4>
                  <p className="font-sans text-slate-500 text-sm font-light">
                    Mallorca, España
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 bg-slate-50 border border-slate-100 rounded-xl text-brand-forest">
                  <Mail size={18} className="stroke-[1.75]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-serif text-xs font-bold tracking-wider text-brand-forest uppercase">
                    {copy.contact.labelEmail}
                  </h4>
                  <p className="font-sans text-sm font-light">
                    <a href="mailto:hola@crisballester.com" className="text-brand-forest hover:text-brand-sand transition-colors underline decoration-slate-200">
                      hola@crisballester.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 bg-slate-50 border border-slate-100 rounded-xl text-brand-forest">
                  <Phone size={18} className="stroke-[1.75]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-serif text-xs font-bold tracking-wider text-brand-forest uppercase">
                    Teléfono Directo
                  </h4>
                  <p className="font-sans text-slate-500 text-sm font-light">
                    +34 654 12 66 34
                  </p>
                </div>
              </div>

            </div>

            <div className="text-[10px] font-sans text-slate-400 tracking-wide uppercase leading-normal">
              {copy.about.metrics ? copy.about.p1.slice(0, 5) && '* Cobertura directiva completa a Palma, Inca, Manacor, Calvià, Llucmajor.' : ''}
            </div>
          </div>

          {/* Right Column: Briefing Form */}
          <div className="lg:col-span-7 bg-brand-cream border border-slate-200/80 rounded-3xl p-6 md:p-10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,var(--color-brand-sand)/5%,transparent_50%)] pointer-events-none" />

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="form"
                  onSubmit={handleFormSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <h4 className="font-serif text-lg tracking-wider text-brand-forest font-semibold text-center uppercase mb-2">
                    {copy.contact.formTitle}
                  </h4>

                  {errorMsg && (
                    <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs sm:text-sm font-sans animate-shake">
                      <AlertCircle size={16} className="flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-sans text-[10px] sm:text-xs font-bold tracking-wider text-slate-400 uppercase block">
                      {copy.contact.labelName}
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Ej: Jaime Sastre"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 font-sans text-sm text-brand-charcoal placeholder-slate-400 focus:outline-none focus:border-brand-forest focus:ring-1 focus:ring-brand-sand transition-all"
                    />
                  </div>

                  {/* Company Input */}
                  <div className="space-y-2">
                    <label htmlFor="company" className="font-sans text-[10px] sm:text-xs font-bold tracking-wider text-slate-400 uppercase block">
                      {copy.contact.labelCompany}
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      required
                      placeholder="Ej: Construcciones Sastre S.L."
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 font-sans text-sm text-brand-charcoal placeholder-slate-400 focus:outline-none focus:border-brand-forest focus:ring-1 focus:ring-brand-sand transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label htmlFor="email" className="font-sans text-[10px] sm:text-xs font-bold tracking-wider text-slate-400 uppercase block">
                        {copy.contact.labelEmail}
                      </label>
                      {emailTouched && !isEmailValid && (
                        <span className="text-[10px] font-sans text-red-500 font-bold uppercase">Email inválido</span>
                      )}
                    </div>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailTouched(true);
                      }}
                      required
                      placeholder="Ej: jaime@construccionessastre.com"
                      className={`w-full bg-white border rounded-xl px-4 py-3.5 font-sans text-sm text-brand-charcoal placeholder-slate-400 focus:outline-none focus:ring-1 transition-all ${
                        emailTouched && !isEmailValid
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                          : 'border-slate-200 focus:border-brand-forest focus:ring-brand-sand'
                      }`}
                    />
                  </div>

                  {/* Team Bottleneck Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="font-sans text-[10px] sm:text-xs font-bold tracking-wider text-slate-400 uppercase block">
                      {copy.contact.labelMessage}
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      placeholder={copy.contact.placeholderMessage}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 font-sans text-sm text-brand-charcoal placeholder-slate-400 focus:outline-none focus:border-brand-forest focus:ring-1 focus:ring-brand-sand transition-all resize-none"
                    />
                  </div>

                  {/* Estimated Budget Input */}
                  <div className="space-y-2">
                    <label htmlFor="budget" className="font-sans text-[10px] sm:text-xs font-bold tracking-wider text-slate-400 uppercase block">
                      {copy.contact.labelBudget}
                    </label>
                    <input
                      type="text"
                      id="budget"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      required
                      placeholder={copy.contact.placeholderBudget}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 font-sans text-sm text-brand-charcoal placeholder-slate-400 focus:outline-none focus:border-brand-forest focus:ring-1 focus:ring-brand-sand transition-all"
                    />
                  </div>

                  {/* Privacy Checkbox */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={privacyAccepted}
                      onChange={(e) => setPrivacyAccepted(e.target.checked)}
                      required
                      className="mt-1 w-4.5 h-4.5 accent-brand-forest cursor-pointer"
                    />
                    <label htmlFor="privacy" className="font-sans text-xs text-slate-500 leading-normal select-none cursor-pointer">
                      {copy.contact.labelPrivacy}
                    </label>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full py-4 bg-brand-forest hover:bg-brand-forest/95 text-white rounded-xl font-sans text-xs font-bold uppercase tracking-widest shadow-lg shadow-brand-forest/10 flex items-center justify-center gap-2 cursor-pointer transition-all duration-300"
                    style={{ minHeight: '44px' }}
                  >
                    <span>Generar Briefing</span>
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-stretch space-y-6"
                >
                  <div className="flex items-center gap-3 border-b border-slate-200 pb-4 justify-center md:justify-start">
                    <div className="w-10 h-10 bg-brand-forest/5 text-brand-forest rounded-full flex items-center justify-center border border-brand-forest/10">
                      <Sparkles size={18} className="text-brand-sand" />
                    </div>
                    <h4 className="font-serif text-lg tracking-wide text-brand-forest font-semibold uppercase">
                      {copy.contact.successTitle}
                    </h4>
                  </div>
                  
                  <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                    {copy.contact.successDesc}
                  </p>

                  {/* Letter Blueprint display */}
                  <div className="bg-white border border-slate-200/80 rounded-2xl p-5 md:p-6 font-sans text-xs text-slate-700 space-y-2 whitespace-pre-wrap leading-relaxed shadow-inner max-h-56 overflow-y-auto">
                    {getCompiledEmailBody()}
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.button
                      onClick={handleCopyClipboard}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="flex-1 py-4 bg-brand-forest hover:bg-brand-forest/95 text-white rounded-xl font-sans text-xs font-bold uppercase tracking-widest shadow-lg shadow-brand-forest/10 flex items-center justify-center gap-2 cursor-pointer transition-colors"
                      style={{ minHeight: '44px' }}
                    >
                      {isCopied ? (
                        <>
                          <Check size={14} className="text-brand-sand" />
                          <span>{copy.contact.copySuccess}</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span>{copy.contact.btnCopy}</span>
                        </>
                      )}
                    </motion.button>

                    <motion.a
                      href={getMailtoUrl()}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="flex-1 py-4 border border-slate-300 bg-white hover:border-brand-forest text-brand-forest hover:bg-slate-50 rounded-xl font-sans text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer text-center"
                      style={{ minHeight: '44px' }}
                    >
                      <ExternalLink size={14} />
                      <span>{copy.contact.btnMailto}</span>
                    </motion.a>
                  </div>

                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-center font-sans text-[10px] text-slate-400 hover:text-brand-forest uppercase tracking-widest font-bold py-2 cursor-pointer"
                  >
                    Volver a escribir
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
