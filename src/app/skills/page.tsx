'use client';

import Navbar from '../../components/navbar/default';
import { useState, useEffect } from 'react';

import MobileSkills from './size/mobile';
import DesktopSkills from './size/desktop';

type ModeType = 'center' | 'left' | 'right';
type ScreenSize = 'mobile' | 'desktop';

export default function SkillsPage() {
  const [mode, setMode] = useState<ModeType>('center');
  const [screen, setScreen] = useState<ScreenSize>('mobile');

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreen('mobile');
      } else {
        setScreen('desktop');
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
      {screen === 'mobile' && <MobileSkills mode={mode} />}
      {screen === 'desktop' && <DesktopSkills mode={mode} />}
    </Navbar>
  );
}