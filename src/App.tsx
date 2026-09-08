import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Manifesto } from './components/Manifesto';
import { DossierModal } from './components/DossierModal';
import { QuickBriefingModal } from './components/QuickBriefingModal';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { LegalModal } from './components/LegalModal';
import { useTranslation } from './context/LanguageContext';
import { TriggerKey } from './manifestoData';

export const App: React.FC = () => {
  const { manifesto } = useTranslation();

  // Active trigger key for the Dossier Modal
  const [activeTrigger, setActiveTrigger] = useState<TriggerKey | null>(null);

  // Quick Briefing Modal state
  const [isBriefingOpen, setIsBriefingOpen] = useState(false);
  const [briefingScenario, setBriefingScenario] = useState<string | undefined>(undefined);

  // Legal and compliance modal states
  const [activeLegalType, setActiveLegalType] = useState<'legal' | 'privacy' | 'cookies' | null>(null);
  const [isLegalOpen, setIsLegalOpen] = useState(false);

  const handleOpenDossier = (key: TriggerKey) => {
    setActiveTrigger(key);
  };

  const handleCloseDossier = () => {
    setActiveTrigger(null);
  };

  const handleOpenBriefing = (scenario?: string) => {
    setBriefingScenario(scenario);
    setIsBriefingOpen(true);
  };

  const handleCloseBriefing = () => {
    setIsBriefingOpen(false);
  };

  const handleOpenLegal = (type: 'legal' | 'privacy' | 'cookies') => {
    setActiveLegalType(type);
    setIsLegalOpen(true);
  };

  const handleCloseLegal = () => {
    setIsLegalOpen(false);
  };

  const activeDossierItem = activeTrigger ? manifesto.dossiers[activeTrigger] : null;

  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal selection:bg-brand-forest selection:text-brand-sand font-sans antialiased overflow-x-hidden flex flex-col justify-between">
      {/* Minimalist Executive Header with Awards Ribbon & Language Switch */}
      <Navbar
        onOpenDossier={handleOpenDossier}
        onOpenBriefing={() => handleOpenBriefing()}
      />

      {/* Main Executive Manifesto Hero Canvas */}
      <main className="flex-1 flex flex-col justify-center">
        <Manifesto
          onSelectTrigger={handleOpenDossier}
          activeTrigger={activeTrigger}
        />
      </main>

      {/* Single-strip Executive Footer */}
      <Footer
        onOpenModal={handleOpenLegal}
        onOpenDossier={handleOpenDossier}
      />

      {/* Interactive Dossier Modal (Centered Glass on Desktop / Bottom Sheet on Mobile) */}
      <DossierModal
        isOpen={activeTrigger !== null}
        item={activeDossierItem}
        onClose={handleCloseDossier}
        onSelectTrigger={handleOpenDossier}
        onOpenBriefing={() => handleOpenBriefing(activeTrigger || undefined)}
      />

      {/* 30-second Rapid Executive Briefing Dispatcher */}
      <QuickBriefingModal
        isOpen={isBriefingOpen}
        onClose={handleCloseBriefing}
        initialScenario={briefingScenario}
      />

      {/* Discreet WhatsApp FAB */}
      <WhatsAppButton />

      {/* Regulatory Compliance & Legal Modals */}
      <LegalModal
        isOpen={isLegalOpen}
        onClose={handleCloseLegal}
        type={activeLegalType}
      />
    </div>
  );
};

export default App;
