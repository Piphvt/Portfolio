'use client';

import Navbar from '../components/navbar/default';
import { useState, useEffect } from 'react';

import XSHome from '../components/home/xs';
import SMHome from '../components/home/sm';
import MDHome from '../components/home/md';
import LGHome from '../components/home/lg';
import XLHome from '../components/home/xl';

type ModeType = 'center' | 'left' | 'right';
type ScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export default function HomePage() {
  const [mode, setMode] = useState<ModeType>('center');
  const [screen, setScreen] = useState<ScreenSize>('xs');

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;

      if (width <= 480) {
        setScreen('xs');
      } else if (width < 768) {
        setScreen('sm');
      } else if (width < 1024) {
        setScreen('md');
      } else if (width < 1280) {
        setScreen('lg');
      } else {
        setScreen('xl');
      }
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);
    window.addEventListener('orientationchange', checkScreen);

    return () => {
      window.removeEventListener('resize', checkScreen);
      window.removeEventListener('orientationchange', checkScreen);
    };
  }, []);

  return (
    <Navbar onModeChange={setMode}>
      {screen === 'xs' && <XSHome mode={mode} />}
      {screen === 'sm' && <SMHome mode={mode} />}
      {screen === 'md' && <MDHome mode={mode} />}
      {screen === 'lg' && <LGHome mode={mode} />}
      {screen === 'xl' && <XLHome mode={mode} />}
    </Navbar>
  );
}
