'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '../../components/navbar/default';

type ModeType = 'center' | 'left' | 'right';

// Dynamic import client-only components
const MobileHome = dynamic(() => import('../../components/contact/mobile'), { ssr: false });
const DesktopHome = dynamic(() => import('../../components/contact/desktop'), { ssr: false });

export default function HomePage() {
  const [mode, setMode] = React.useState<ModeType>('center');

  return (
    <Navbar onModeChange={setMode}>
      {/* Mobile: sm and below */}
      <div className="block md:hidden">
        <MobileHome mode={mode} />
      </div>

      {/* Desktop: md and above */}
      <div className="hidden md:block">
        <DesktopHome mode={mode} />
      </div>
    </Navbar>
  );
}
