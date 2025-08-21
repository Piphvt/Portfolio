'use client';

import { useEffect, useState, useRef } from 'react';
import { Section } from './section/desktop';

import {
  frontendIcons,
  backendIcons,
  devopsIcons,
  toolsIcons,
  uxuiIcons,
  learningIcons,
} from './data/skills';

import { FaCode, FaDatabase, FaObjectGroup } from 'react-icons/fa';
import { PiPackageFill } from 'react-icons/pi';
import { BsTools } from 'react-icons/bs';
import { SiBookstack } from 'react-icons/si';

type Mode = 'center' | 'left' | 'right';

const pageKeys = ['frontend', 'backend', 'devops', 'tools', 'uxui', 'learning'] as const;
type PageKey = typeof pageKeys[number];

interface DesktopSkillsProps {
  mode: Mode;
}

export default function DesktopSkills({ mode }: DesktopSkillsProps) {
  const isLeftMode = mode === 'left';
  const isRightMode = mode === 'right';

  const leftHeader = isLeftMode ? 'text-black border-black' : 'text-white border-white';
  const rightHeader = isRightMode ? 'text-white border-white' : 'text-black border-black';

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
    <>
      <Section
        title="Frontend Development"
        IconComp={FaCode}
        icons={frontendIcons}
        modeSide="left"
        headerClass={leftHeader}
        containerClass="absolute top-[7em] left-36"
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
        containerClass="absolute top-[20.5em] left-36"
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
        containerClass="absolute top-[34em] left-36"
        pageIndex={pageIndexes.devops}
        isLeftMode={isLeftMode}
        isRightMode={isRightMode}
        onPageChange={(dir) => handlePageChange('devops', dir)}
      />

      <Section
        title="Tools & Technologies"
        IconComp={BsTools}
        icons={toolsIcons}
        modeSide="right"
        headerClass={rightHeader}
        containerClass="absolute top-[7em] right-[9.375rem]"
        pageIndex={pageIndexes.tools}
        isLeftMode={isLeftMode}
        isRightMode={isRightMode}
        onPageChange={(dir) => handlePageChange('tools', dir)}
      />

      <Section
        title="UX/UI Design"
        IconComp={FaObjectGroup}
        icons={uxuiIcons}
        modeSide="right"
        headerClass={rightHeader}
        containerClass="absolute top-[20.5rem] right-[9.375rem]"
        pageIndex={pageIndexes.uxui}
        isLeftMode={isLeftMode}
        isRightMode={isRightMode}
        onPageChange={(dir) => handlePageChange('uxui', dir)}
      />

      <Section
        title="Learning"
        IconComp={SiBookstack}
        icons={learningIcons}
        modeSide="right"
        headerClass={rightHeader}
        containerClass="absolute top-[34rem] right-[9.375rem]"
        pageIndex={pageIndexes.learning}
        isLeftMode={isLeftMode}
        isRightMode={isRightMode}
        onPageChange={(dir) => handlePageChange('learning', dir)}
      />
    </>
  );
}
