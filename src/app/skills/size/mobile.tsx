'use client';

import { useEffect, useState, useRef } from 'react';
import { Section } from '../section/mobile';
import { Meteors } from "../../../components/ui/background/meteors";
import { InteractiveGridPattern } from "../../../components/ui/background/interactive-grid-pattern";
import { Particles } from "../../../components/ui/background/particles";

import {
    frontendIcons,
    backendIcons,
    devopsIcons,
    toolsIcons,
    uxuiIcons,
    learningIcons,
} from '../data/skills';

import { FaCode, FaDatabase, FaObjectGroup } from 'react-icons/fa';
import { PiPackageFill } from 'react-icons/pi';
import { BsTools } from 'react-icons/bs';
import { SiBookstack } from 'react-icons/si';

type Mode = 'center' | 'left' | 'right';
const pageKeys = ['frontend', 'backend', 'devops', 'tools', 'uxui', 'learning'] as const;
type PageKey = typeof pageKeys[number];

interface MobileSkillsProps {
    mode: Mode;
}

export default function MobileSkills({ mode }: MobileSkillsProps) {
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
        <div className={`flex flex-col items-center text-center min-h-screen relative ${isLeftMode ? 'text-black' : 'text-white'}`}>
            <InteractiveGridPattern
                className="
          absolute
          [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]
          inset-0
          z-[-1]
        "
            />
            <Meteors number={40} />
            <Section
                title="Frontend Development"
                IconComp={FaCode}
                icons={frontendIcons}
                modeSide="left"
                headerClass={leftHeader}
                containerClass="mb-4 sm:mb-6 w-auto mx-6 sm:mx-8"
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
                containerClass="mb-4 sm:mb-6 w-auto mx-6 sm:mx-8"
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
                containerClass="mb-4 sm:mb-6 w-auto mx-6 sm:mx-8"
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
                containerClass="mb-4 sm:mb-6 w-auto mx-6 sm:mx-8"
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
                containerClass="mb-4 sm:mb-6 w-auto mx-6 sm:mx-8"
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
                containerClass="w-auto mx-6 sm:mx-8"
                pageIndex={pageIndexes.learning}
                isLeftMode={isLeftMode}
                isRightMode={isRightMode}
                onPageChange={(dir) => handlePageChange('learning', dir)}
            />
            <Particles
                className="absolute inset-0 z-0"
                quantity={100}
                ease={80}
                colorLeft={isLeftMode ? "#000000" : "#ffffff"}
                colorRight={isRightMode ? "#ffffff" : "#000000"}
                refresh
            />
        </div>
    );
}
