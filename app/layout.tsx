import type { Metadata } from 'next';
import './globals.css';
import { ClientWrapper } from '@/components/ClientWrapper';

export const metadata: Metadata = {
  title: 'JAYKASTLE NIGERIA LIMITED | Marine, Engineering & Logistics',
  description: 'Redefining offshore infrastructure, marine engineering, specialized dredging, and strategic procurement for energy corridors across Nigeria. RC 1197099.',
  keywords: ['Marine Engineering', 'Logistics', 'Offshore Infrastructure', 'Procurement', 'Jaykastle Nigeria Limited', 'Dredging', 'Port Harcourt', 'Nigeria Oil and Gas'],
  icons: {
    icon: '/jaykastle_single_icon.png',
    shortcut: '/jaykastle_single_icon.png',
    apple: '/jaykastle_single_icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#060a14] text-slate-100 antialiased selection:bg-emerald-600/30 selection:text-emerald-200 font-sans min-h-screen overflow-x-hidden" suppressHydrationWarning>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
