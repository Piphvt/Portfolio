'use client';

import { ReactNode, useEffect, useState } from 'react';
import DesktopNavbar from './desktop';
import MobileNavbar from './mobile';

interface LayoutProps {
  children: ReactNode;
  onModeChange?: (mode: 'center' | 'left' | 'right') => void;
}

export default function Navbar({ children, onModeChange }: LayoutProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkWidth();
    window.addEventListener('resize', checkWidth);

    return () => {
      window.removeEventListener('resize', checkWidth);
    };
  }, []);

  return isMobile ? (
    <MobileNavbar onModeChange={onModeChange}>{children}</MobileNavbar>
  ) : (
    <DesktopNavbar onModeChange={onModeChange}>{children}</DesktopNavbar>
  );
}
