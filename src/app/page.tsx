'use client';

import React from 'react';
import Navbar from '../components/navbar/default';
import SMHome from '../components/home/mobile';
import MDHome from '../components/home/desktop';

type ModeType = 'center' | 'left' | 'right';

export default function HomePage() {
  const [mode, setMode] = React.useState<ModeType>('center');

  return (
    <Navbar onModeChange={setMode}>
      {/* Mobile: sm and below */}
      <div className="block md:hidden">
        <SMHome mode={mode} />
      </div>

      {/* Desktop: md and above */}
      <div className="hidden md:block">
        <MDHome mode={mode} />
      </div>
    </Navbar>
  );
}
