'use client';

import React from 'react';

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
  isLeftMode,
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

export default IconBox;
