'use client';

import React from 'react';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { HomeVisualCapabilities } from '@/components/HomeVisualCapabilities';
import { HomeAboutHighlight } from '@/components/HomeAboutHighlight';
import { HomeOperationalMap } from '@/components/HomeOperationalMap';
import { HomeEstimatorTeaser } from '@/components/HomeEstimatorTeaser';

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* Sleek Hero Banner */}
      <Hero />

      {/* Metrics & Credentials Ticker */}
      <Stats />

      {/* Visual Capabilities Showcase Cards */}
      <HomeVisualCapabilities />

      {/* Corporate Identity & Profile Spotlight */}
      <HomeAboutHighlight />

      {/* Operational Footprint & Niger Delta Map */}
      <HomeOperationalMap />

      {/* Interactive Estimator Teaser */}
      <HomeEstimatorTeaser />
    </div>
  );
}
