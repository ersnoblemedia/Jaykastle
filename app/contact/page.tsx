'use client';

import React from 'react';
import { Contact } from '@/components/Contact';

export default function ContactPage() {
  return (
    <div className="space-y-0">
      <Contact modalOpen={false} onCloseModal={() => {}} />
    </div>
  );
}
