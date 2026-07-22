'use client';

import React, { useState } from 'react';
import { Careers } from '@/components/Careers';
import { Contact } from '@/components/Contact';

export default function CareersPage() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="space-y-0">
      <Careers onOpenContact={() => setContactOpen(true)} />
      <Contact modalOpen={contactOpen} onCloseModal={() => setContactOpen(false)} />
    </div>
  );
}
