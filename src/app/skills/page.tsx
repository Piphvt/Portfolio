'use client';

import { useEffect, useState } from 'react';
import DesktopSkills from './desktop';
import MobileSkills from './mobile';

export default function SkillsPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkWidth() {
      setIsMobile(window.innerWidth <= 768);
    }
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return isMobile ? <MobileSkills /> : <DesktopSkills />;
}
