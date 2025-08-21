'use client';

import React, { useEffect, useState } from 'react';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

interface IconBoxProps {
    icon: React.ComponentType<{ className?: string; style?: React.CSSProperties; title?: string }>;
    label: string;
    color?: string;
    title?: string;
    modeSide: 'left' | 'right';
    isActiveSide: boolean;
    isLeftMode: boolean;
}

const iconBoxClassBase =
    'p-1 sm:p-2 w-24 sm:w-28 h-8 sm:h-10 gap-2 inline-flex items-center justify-start border rounded-lg backdrop-blur-sm';

const IconBox: React.FC<IconBoxProps> = ({
    icon: Icon,
    label,
    title,
    modeSide,
    isActiveSide,
}) => {
    const baseClass = iconBoxClassBase.trim();

    const isTextBlack =
        modeSide === 'left'
            ? isActiveSide
                ? true
                : false
            : isActiveSide
                ? false
                : true;

    const textColorClass = isTextBlack ? 'text-black' : 'text-white';
    const borderColorClass = isTextBlack ? 'border-black' : 'border-white';
    const bgColorClass =
        modeSide === 'left'
            ? isActiveSide
                ? 'bg-white'
                : 'bg-black'
            : isActiveSide
                ? 'bg-black'
                : 'bg-white';

    const className = `${baseClass} ${bgColorClass} ${textColorClass} ${borderColorClass}`;

    return (
        <div className={className}>
            <Icon className="text-lg sm:text-xl" title={title || label} />
            <span className="text-xs sm:text-sm">{label}</span>
        </div>
    );
};

interface IconItem {
    Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties; title?: string }>;
    label: string;
    color?: string;
    title?: string;
}

interface SectionProps {
    title: string;
    IconComp: React.ComponentType<{ className?: string }>;
    icons: IconItem[];
    modeSide: 'left' | 'right';
    headerClass: string;
    containerClass?: string;
    pageIndex: number;
    isLeftMode: boolean;
    isRightMode: boolean;
    onPageChange: (direction: 'left' | 'right') => void;
}

let iconsPerPage = 4;
if (typeof window !== 'undefined') {
  if (window.innerWidth > 640) {
    iconsPerPage = 6;
  }
}

const Section: React.FC<SectionProps> = ({
    title,
    IconComp,
    icons,
    modeSide,
    headerClass,
    containerClass = '',
    pageIndex,
    isLeftMode,
    isRightMode,
    onPageChange,
}) => {
    const [bounceTrigger, setBounceTrigger] = useState(false);

    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
      @keyframes bounce-forward {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      .bounce-forward {
        animation: bounce-forward 0.6s ease;
      }
    `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    useEffect(() => {
        setBounceTrigger(true);
        const timer = setTimeout(() => setBounceTrigger(false), 600);
        return () => clearTimeout(timer);
    }, [pageIndex]);

    const isActiveSide =
        (modeSide === 'left' && isLeftMode) || (modeSide === 'right' && isRightMode);

    const totalPages = Math.ceil(icons.length / iconsPerPage);

    const showLeft = pageIndex > 0;
    const showRight = pageIndex < totalPages - 1;

    const startIndex = pageIndex * iconsPerPage;
    const endIndex = startIndex + iconsPerPage;
    const iconsToShow = icons.slice(startIndex, endIndex);

    return (
        <div
            className={`${containerClass} p-4 gap-2 w-auto h-auto rounded-lg flex flex-col items-start border ${headerClass} bg-transparent hover:scale-105 transition-transform duration-300 cursor-pointer`}
        >
            <div className={`gap-2 text-base sm:text-lg flex items-center font-bold ${headerClass}`}>
                <IconComp className={headerClass} />
                <span>{title}</span>
            </div>

            <div className="relative w-full">
                {showLeft && (
                    <button
                        onClick={() => onPageChange('left')}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4"
                    >
                        <FaCaretLeft className="text-xl sm:text-2xl hover:scale-125 transition" />
                    </button>
                )}

                <div className="grid grid-cols-2 sm:grid-cols-3 grid-rows-2 gap-4 w-full justify-items-center">
                    {iconsToShow.map(({ Icon, label, color, title }, index) => (
                        <div
                            key={`${label}-${startIndex + index}`}
                            className={`ml-[0.75rem] mr-[0.75rem] ${bounceTrigger ? 'bounce-forward' : ''}`}
                            title={title}
                        >
                            <IconBox
                                icon={Icon}
                                label={label}
                                color={color}
                                title={title}
                                modeSide={modeSide}
                                isActiveSide={isActiveSide}
                                isLeftMode={isLeftMode}
                            />
                        </div>
                    ))}
                </div>

                {showRight && (
                    <button
                        onClick={() => onPageChange('right')}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4"
                    >
                        <FaCaretRight className="text-xl sm:text-2xl hover:scale-125 transition" />
                    </button>
                )}
            </div>
        </div>
    );
};

export { IconBox, Section };
