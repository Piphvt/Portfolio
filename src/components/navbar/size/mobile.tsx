'use client';

import { ReactNode, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

interface LayoutProps {
  children?: ReactNode;
  onModeChange?: (mode: 'center' | 'left' | 'right') => void;
}

export default function MobileNavbar({ children, onModeChange }: LayoutProps) {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<'center' | 'left' | 'right'>('left');
  const pathname = usePathname();

  useEffect(() => {
    const savedMode = localStorage.getItem('navbar-mode') as
      | 'center'
      | 'left'
      | 'right'
      | null;
    if (savedMode) {
      setMode(savedMode);
      onModeChange?.(savedMode);
    }
  }, [onModeChange]);

  const toggleMode = () => {
    let newMode: 'center' | 'left' | 'right';
    if (mode === 'left') newMode = 'right';
    else if (mode === 'right') newMode = 'left';
    else newMode = 'left';

    setMode(newMode);
    localStorage.setItem('navbar-mode', newMode);
    onModeChange?.(newMode);
  };

  const themeClass =
    mode === 'right'
      ? 'bg-black text-white border-white'
      : 'bg-white text-black border-black';

  const menuItems = [
    { href: '/about', label: 'ABOUT', match: pathname === '/about' },
    { href: '/skills', label: 'SKILLS', match: pathname.startsWith('/skills') },
    { href: '/projects', label: 'PROJECTS', match: pathname.startsWith('/projects') },
    { href: '/experiences', label: 'EXPERIENCES', match: pathname.startsWith('/experiences') },
    { href: '/contact', label: 'CONTACT', match: pathname.startsWith('/contact') },
  ];

  return (
    <div className={`relative min-h-screen flex flex-col font-outfit border-2 ${themeClass}`}>
      {/* Nav Bar */}
      <div className={`relative z-20 border-b-2 ${themeClass}`}>
        <div className="flex justify-between items-center px-3 sm:px-6 py-2 sm:py-4 backdrop-blur-md">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src={mode === 'right' ? '/image/logo/white.png' : '/image/logo/black.png'}
              alt="Logo"
              className="h-5 w-auto sm:h-8"
            />
          </Link>

          {/* ปุ่ม Theme + เมนู */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={toggleMode}
              aria-label="Toggle Theme"
              className={`w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-2 ${themeClass}`}
            >
              {mode === 'right' ? <FaMoon size={18} /> : <FaSun size={18} />}
            </button>

            <button onClick={() => setOpen(!open)} aria-label="Toggle Menu">
              {open ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* Dropdown Menu */}
        {open && (
          <nav
            className={`absolute top-full left-0 w-full border-t-2 shadow-lg flex flex-col items-center gap-0 ${themeClass}`}
            style={{ zIndex: 30 }}
          >
            {menuItems.map((item) => {
              const isActive = item.match;

              const activeClass =
                mode === 'right'
                  ? 'bg-white text-black'
                  : 'bg-black text-white';

              const inactiveClass =
                mode === 'right'
                  ? 'bg-transparent text-white hover:bg-white hover:text-black'
                  : 'bg-transparent text-black hover:bg-black hover:text-white';

              const borderClass =
                item.label === 'CONTACT'
                  ? mode === 'right'
                    ? 'border-b border-white'
                    : 'border-b border-black'
                  : 'border-b-0';

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`w-full text-center text-base sm:text-xl font-semibold py-2 sm:py-3 ${borderClass} transition-colors duration-200
                    ${isActive ? activeClass : inactiveClass}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        )}
      </div>

      {/* Main content */}
      <main className="flex-1 p-3 sm:p-4 z-10 relative">{children}</main>
    </div>
  );
}
