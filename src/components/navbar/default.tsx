'use client';

import { ReactNode, useEffect, useState } from 'react';
import MobileNavbar from './size/mobile';
import DesktopNavbar from './size/desktop';

interface LayoutProps {
  children: ReactNode;
  onModeChange?: (mode: 'center' | 'left' | 'right') => void;
}

type ScreenSize = 'mobile' | 'desktop';

export default function Navbar({ children, onModeChange }: LayoutProps) {
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

  return screen === 'mobile' ? (
    <MobileNavbar onModeChange={onModeChange}>{children}</MobileNavbar>
  ) : (
    <DesktopNavbar onModeChange={onModeChange}>{children}</DesktopNavbar>
  );
}
