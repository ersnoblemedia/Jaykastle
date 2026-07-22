'use client';

import React, { useState } from 'react';
import { Services } from '@/components/Services';
import { Contact } from '@/components/Contact';
import { useRouter } from 'next/navigation';

export default function ServicesPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();
  const router = useRouter();

  const handleSelectServiceForEstimate = () => {
    router.push('/estimator');
  };

  const handleOpenContact = (service?: string) => {
    setSelectedService(service);
    setContactOpen(true);
  };

  return (
    <div className="space-y-0">
      <Services
        onSelectServiceForEstimate={handleSelectServiceForEstimate}
        onOpenContact={handleOpenContact}
      />
      <Contact
        modalOpen={contactOpen}
        onCloseModal={() => setContactOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
