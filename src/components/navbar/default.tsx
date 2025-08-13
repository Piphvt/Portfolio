'use client';

import { ReactNode, useEffect, useState } from 'react';
import XSNavbar from './size/xs';
import SMNavbar from './size/sm';
import MDNavbar from './size/md';
import LGNavbar from './size/lg';
import XLNavbar from './size/xl';

interface LayoutProps {
  children: ReactNode;
  onModeChange?: (mode: 'center' | 'left' | 'right') => void;
}

type ScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export default function Navbar({ children, onModeChange }: LayoutProps) {
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

  switch (screen) {
    case 'xs':
      return <XSNavbar onModeChange={onModeChange}>{children}</XSNavbar>;
    case 'sm':
      return <SMNavbar onModeChange={onModeChange}>{children}</SMNavbar>;
    case 'md':
      return <MDNavbar onModeChange={onModeChange}>{children}</MDNavbar>;
    case 'lg':
      return <LGNavbar onModeChange={onModeChange}>{children}</LGNavbar>;
    case 'xl':
      return <XLNavbar onModeChange={onModeChange}>{children}</XLNavbar>;
    default:
      return <XSNavbar onModeChange={onModeChange}>{children}</XSNavbar>;
  }
}
