'use client';

import React from 'react';
import { Strategy } from '@/components/Strategy';
import { HSECompliance } from '@/components/HSECompliance';

export default function StrategyPage() {
  return (
    <div className="space-y-0">
      <Strategy />
      <HSECompliance />
    </div>
  );
}
