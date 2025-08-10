'use client';

import Navbar from '../components/navbar/default';
import { useState, useEffect } from 'react';
import Desktop from '../components/home/desktop';
import Mobile from '../components/home/mobile';

export default function HomePage() {
  const [mode, setMode] = useState<'center' | 'left' | 'right'>('center');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkWidth() {
      setIsMobile(window.innerWidth <= 768);
    }

    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return (
    <Navbar onModeChange={setMode}>
      {isMobile ? <Mobile mode={mode} /> : <Desktop mode={mode} />}
    </Navbar>
  );
}
