import MobileNavbar from './size/mobile';
import DesktopNavbar from './size/desktop';
import { ReactNode, Dispatch, SetStateAction } from 'react';

interface NavbarProps {
  children?: ReactNode;
  onModeChange?: (mode: 'center' | 'left' | 'right') => void;
}

export default function Navbar({ children, onModeChange }: NavbarProps) {
  return (
    <>
      <div className="block md:hidden">
        <MobileNavbar onModeChange={onModeChange}>{children}</MobileNavbar>
      </div>
      <div className="hidden md:block">
        <DesktopNavbar onModeChange={onModeChange}>{children}</DesktopNavbar>
      </div>
    </>
  );
}
