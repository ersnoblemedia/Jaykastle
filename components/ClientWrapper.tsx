'use client';

import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Contact } from './Contact';

interface ClientWrapperProps {
  children: React.ReactNode;
}

export const ClientWrapper: React.FC<ClientWrapperProps> = ({ children }) => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [defaultService, setDefaultService] = useState<string | undefined>(undefined);

  const handleOpenContact = (service?: string) => {
    setDefaultService(service);
    setContactModalOpen(true);
  };

  const handleOpenEstimator = () => {
    window.location.href = '/estimator';
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#060a14] text-slate-100">
      <Navbar
        onOpenContact={handleOpenContact}
        onOpenEstimator={handleOpenEstimator}
      />
      <main className="flex-grow pt-10 md:pt-14">
        {children}
      </main>
      <Footer />
      <Contact
        modalOpen={contactModalOpen}
        onCloseModal={() => setContactModalOpen(false)}
        defaultService={defaultService}
        showSection={false}
      />
    </div>
  );
};
