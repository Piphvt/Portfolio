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
  'inline-flex items-center justify-start gap-2 border rounded-lg p-1.5 w-[7rem] h-[2.5rem] backdrop-blur-sm';

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
      <Icon className="text-2xl" title={title || label} />
      <span className="text-xs font-medium">{label}</span>
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

const iconsPerPage = 8;

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
      className={`${containerClass} p-6 rounded-lg flex flex-col items-start gap-4 w-[36rem] h-[12rem] border ${headerClass} bg-transparent hover:scale-105 transition-transform duration-300 cursor-pointer`}
    >
      <div className={`flex items-center gap-2 text-2xl font-semibold ${headerClass}`}>
        <IconComp className={headerClass} />
        <span>{title}</span>
      </div>

      <div className="relative w-full">
        {showLeft && (
          <button
            onClick={() => onPageChange('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6"
          >
            <FaCaretLeft className="text-3xl hover:scale-125 transition" />
          </button>
        )}

        <div className="grid grid-cols-4 grid-rows-2 gap-4 w-full justify-items-center">
          {iconsToShow.map(({ Icon, label, color, title }, index) => (
            <div
              key={`${label}-${startIndex + index}`}
              className={`ml-[0.375rem] ${bounceTrigger ? 'bounce-forward' : ''}`}
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
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6"
          >
            <FaCaretRight className="text-3xl hover:scale-125 transition" />
          </button>
        )}
      </div>
    </div>
  );
};

export { IconBox, Section };
