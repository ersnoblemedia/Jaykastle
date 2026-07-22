'use client';

import React, { useState } from 'react';
import { About } from '@/components/About';
import { HSECompliance } from '@/components/HSECompliance';
import { Contact } from '@/components/Contact';

export default function AboutPage() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="space-y-0">
      <About onOpenContact={() => setContactOpen(true)} />
      <HSECompliance />
      <Contact modalOpen={contactOpen} onCloseModal={() => setContactOpen(false)} />
    </div>
  );
}
