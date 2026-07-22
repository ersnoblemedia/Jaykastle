'use client';

import React, { useState } from 'react';
import { ProjectEstimator } from '@/components/ProjectEstimator';
import { Contact } from '@/components/Contact';

export default function EstimatorPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [estimateData, setEstimateData] = useState<{
    sector: string;
    timeline: string;
    scale: string;
    refCode: string;
    notes: string;
  } | null>(null);

  const handleSendEstimateToContact = (data: {
    sector: string;
    timeline: string;
    scale: string;
    refCode: string;
    notes: string;
  }) => {
    setEstimateData(data);
    setContactOpen(true);
  };

  return (
    <div className="space-y-0">
      <ProjectEstimator onSendEstimateToContact={handleSendEstimateToContact} />
      <Contact
        modalOpen={contactOpen}
        onCloseModal={() => setContactOpen(false)}
        estimateData={estimateData}
      />
    </div>
  );
}
