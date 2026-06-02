import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Services } from './components/Services';
import { AboutMe } from './components/AboutMe';
import { Conversations } from './components/Conversations';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { LegalModal } from './components/LegalModal';

export const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'legal' | 'privacy' | 'cookies' | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (type: 'legal' | 'privacy' | 'cookies') => {
    setActiveModal(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-brand-offwhite text-brand-charcoal selection:bg-brand-salvia selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Sticky Translucent Header */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* Pitch Hero Section */}
        <Hero />

        {/* Bento Grid Pain points */}
        <PainPoints />

        {/* Asymmetric strategic services Grid & Drawer details */}
        <Services />

        {/* Asymmetric Split biography section */}
        <AboutMe />

        {/* Clean numerical keynotes and debates Grid */}
        <Conversations />

        {/* Captation Form with FormSubmit and interactive checks */}
        <ContactForm />
      </main>

      {/* Structured Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Pulse animated WhatsApp FAB */}
      <WhatsAppButton />

      {/* Glassmorphic Legal and Compliance Overlays */}
      <LegalModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        type={activeModal}
      />
    </div>
  );
};

export default App;
