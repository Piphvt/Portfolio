'use client';

import { useEffect, useState, useRef } from 'react';
import Navbar from '../../components/navbar/default';
import { Section } from '../../components/skills/mobile';

import {
  frontendIcons,
  backendIcons,
  devopsIcons,
  toolsIcons,
  uxuiIcons,
  learningIcons,
} from '../../data/skills';

import {
  FaCode,
  FaDatabase,
  FaObjectGroup,
} from 'react-icons/fa';
import { PiPackageFill } from 'react-icons/pi';
import { BsTools } from 'react-icons/bs';
import { SiBookstack } from 'react-icons/si';

type Mode = 'center' | 'left' | 'right';

const pageKeys = ['frontend', 'backend', 'devops', 'tools', 'uxui', 'learning'] as const;
type PageKey = typeof pageKeys[number];

export default function MobileSkills() {
  const [mode, setMode] = useState<Mode>('center');

  const isLeftMode = mode === 'left';
  const isRightMode = mode === 'right';

  // สี header ตาม mode
  const leftHeader = isLeftMode ? 'text-black border-black' : 'text-white border-white';
  const rightHeader = isRightMode ? 'text-white border-white' : 'text-black border-black';

  // background + text color ตาม mode
  const backgroundClass = isLeftMode
    ? 'bg-white text-black'
    : isRightMode
    ? 'bg-black text-white'
    : 'bg-gray-100 text-black';

  const iconsPerPage = 8;

  const [pageIndexes, setPageIndexes] = useState<Record<PageKey, number>>({
    frontend: 0,
    backend: 0,
    devops: 0,
    tools: 0,
    uxui: 0,
    learning: 0,
  });

  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

  const startInterval = () => {
    if (intervalIdRef.current) clearInterval(intervalIdRef.current);

    const totalPagesMap: Record<PageKey, number> = {
      frontend: Math.ceil(frontendIcons.length / iconsPerPage),
      backend: Math.ceil(backendIcons.length / iconsPerPage),
      devops: Math.ceil(devopsIcons.length / iconsPerPage),
      tools: Math.ceil(toolsIcons.length / iconsPerPage),
      uxui: Math.ceil(uxuiIcons.length / iconsPerPage),
      learning: Math.ceil(learningIcons.length / iconsPerPage),
    };

    intervalIdRef.current = setInterval(() => {
      setPageIndexes((prev) => {
        const next = { ...prev };
        for (const key of pageKeys) {
          if (totalPagesMap[key] > 1) {
            next[key] = (prev[key] + 1) % totalPagesMap[key];
          }
        }
        return next;
      });
    }, 6000);
  };

  useEffect(() => {
    startInterval();

    return () => {
      if (intervalIdRef.current) clearInterval(intervalIdRef.current);
    };
  }, []);

  const handlePageChange = (section: PageKey, direction: 'left' | 'right') => {
    const iconsMap = {
      frontend: frontendIcons,
      backend: backendIcons,
      devops: devopsIcons,
      tools: toolsIcons,
      uxui: uxuiIcons,
      learning: learningIcons,
    };
    const totalPages = Math.ceil(iconsMap[section].length / iconsPerPage);

    setPageIndexes((prev) => {
      let newIndex = prev[section];
      if (direction === 'left') {
        newIndex = newIndex > 0 ? newIndex - 1 : newIndex;
      } else if (direction === 'right') {
        newIndex = newIndex < totalPages - 1 ? newIndex + 1 : newIndex;
      }
      return { ...prev, [section]: newIndex };
    });

    startInterval();
  };

  return (
    <Navbar onModeChange={setMode}>
      <div className={`${backgroundClass} min-h-screen p-4`}>
        <Section
          title="Frontend Development"
          IconComp={FaCode}
          icons={frontendIcons}
          modeSide="left"
          headerClass={leftHeader}
          containerClass="relative mb-8"
          pageIndex={pageIndexes.frontend}
          isLeftMode={isLeftMode}
          isRightMode={isRightMode}
          onPageChange={(dir) => handlePageChange('frontend', dir)}
        />

        <Section
          title="Backend Development"
          IconComp={FaDatabase}
          icons={backendIcons}
          modeSide="left"
          headerClass={leftHeader}
          containerClass="relative mb-8"
          pageIndex={pageIndexes.backend}
          isLeftMode={isLeftMode}
          isRightMode={isRightMode}
          onPageChange={(dir) => handlePageChange('backend', dir)}
        />

        <Section
          title="DevOps & Deployment"
          IconComp={PiPackageFill}
          icons={devopsIcons}
          modeSide="left"
          headerClass={leftHeader}
          containerClass="relative mb-8"
          pageIndex={pageIndexes.devops}
          isLeftMode={isLeftMode}
          isRightMode={isRightMode}
          onPageChange={(dir) => handlePageChange('devops', dir)}
        />

        <Section
          title="Tools & Technologies"
          IconComp={BsTools}
          icons={toolsIcons}
          modeSide="left"
          headerClass={rightHeader}
          containerClass="relative mb-8"
          pageIndex={pageIndexes.tools}
          isLeftMode={isLeftMode}
          isRightMode={isRightMode}
          onPageChange={(dir) => handlePageChange('tools', dir)}
        />

        <Section
          title="UX/UI Design"
          IconComp={FaObjectGroup}
          icons={uxuiIcons}
          modeSide="left"
          headerClass={rightHeader}
          containerClass="relative mb-8"
          pageIndex={pageIndexes.uxui}
          isLeftMode={isLeftMode}
          isRightMode={isRightMode}
          onPageChange={(dir) => handlePageChange('uxui', dir)}
        />

        <Section
          title="Learning"
          IconComp={SiBookstack}
          icons={learningIcons}
          modeSide="left"
          headerClass={rightHeader}
          containerClass="relative"
          pageIndex={pageIndexes.learning}
          isLeftMode={isLeftMode}
          isRightMode={isRightMode}
          onPageChange={(dir) => handlePageChange('learning', dir)}
        />
      </div>
    </Navbar>
  );
}
