'use client';

import { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

interface LayoutProps {
  children?: ReactNode;
  onModeChange?: (mode: Mode) => void;
}

type Mode = 'center' | 'left' | 'right';

export default function DesktopNavbar({ children, onModeChange }: LayoutProps) {
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<Mode>('center');
  const [leftColor, setLeftColor] = useState<'black' | 'white'>('black');
  const [rightColor, setRightColor] = useState<'black' | 'white'>('white');

  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isContactPage = pathname.startsWith('/contact');
  const isProjectsPage = pathname.startsWith('/projects');
  const isSkillsPage = pathname.startsWith('/skills');
  const isExperiencesPage = pathname.startsWith('/experiences');
  const isAboutPage = pathname.startsWith('/about');

  useEffect(() => {
    const storedMode = localStorage.getItem('layout-mode') as Mode | null;
    if (storedMode) {
      setMode(storedMode);
      if (storedMode === 'left') {
        setLeftColor('white');
        setRightColor('white');
      } else if (storedMode === 'right') {
        setRightColor('black');
        setLeftColor('black');
      }
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('layout-mode', mode);
    }

    if (onModeChange) {
      onModeChange(mode);
    }
  }, [mode, mounted, onModeChange]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col relative font-outfit">
      {/* Background Layers */}
      <div className="absolute inset-0 flex">
        <div
          className="w-1/2 transition-colors duration-700 ease-in-out"
          style={{ backgroundColor: leftColor === 'black' ? '#000000' : '#ffffff' }}
        />
        <div
          className="w-1/2 transition-colors duration-700 ease-in-out"
          style={{ backgroundColor: rightColor === 'black' ? '#000000' : '#ffffff' }}
        />
      </div>

      {/* Toggle Button */}
      <button
        type="button"
        aria-label="Toggle Background"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const clickX = e.clientX - rect.left;

          if (mode === 'center') {
            if (clickX < rect.width / 2) {
              setLeftColor('white');
              setMode('left');
            } else {
              setRightColor('black');
              setMode('right');
            }
          } else if (mode === 'left') {
            setLeftColor('black');
            setMode('center');
          } else if (mode === 'right') {
            setRightColor('white');
            setMode('center');
          }
        }}
        className={`
            absolute top-1/2 z-20 cursor-pointer overflow-hidden
            transition-all duration-700 ease-in-out
            ${mode === 'center' ? 'left-1/2 -translate-x-1/2 w-10 h-10 rounded-full' : ''}
            ${mode === 'left' ? 'left-0 translate-x-0 w-5 h-10 rounded-r-full' : ''}
            ${mode === 'right' ? 'left-full -translate-x-full w-5 h-10 rounded-l-full' : ''}
            flex items-center justify-center shadow-md
            ${mode === 'left' ? 'bg-black' : ''}
            ${mode === 'right' ? 'bg-white' : ''}
            ${mode === 'center' ? '' : 'bg-none'}
          `}
      >
        {mode === 'center' && (
          <div className="absolute inset-0 flex">
            <div className="w-1/2 bg-white" />
            <div className="w-1/2 bg-black" />
          </div>
        )}

        <div className="relative z-10 flex flex-row gap-1 h-4 items-center">
          {mode === 'center' && (
            <>
              <FaCaretLeft className="text-black text-lg" />
              <FaCaretRight className="text-white text-lg" />
            </>
          )}
          {mode === 'left' && <FaCaretRight className="text-white text-lg" />}
          {mode === 'right' && <FaCaretLeft className="text-black text-lg" />}
        </div>
      </button>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <nav className="px-4 sm:px-6 md:px-7 lg:px-10 xl:px-14 py-4 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">

          {/* Left Side */}
          <div className="flex w-full md:w-1/2 items-center">
            <Link
              href="/"
              className={`group relative flex items-center justify-center overflow-hidden rounded-full border 
                h-8 md:h-9 lg:h-10 xl:h-12 min-w-[80px] md:min-w-[90px] lg:min-w-[100px] xl:min-w-[120px]
                px-3 md:px-4 lg:px-5 xl:px-6
                text-xs md:text-sm lg:text-base xl:text-lg
                transition duration-150
                ${isHomePage
                  ? mode === 'left'
                    ? 'bg-white border-black hover:bg-black hover:border-black'
                    : 'bg-black border-white hover:bg-white hover:border-white'
                  : mode === 'left'
                    ? 'bg-black border-black hover:bg-white hover:border-black'
                    : 'bg-white border-white hover:bg-black hover:border-white'
                }`}
            >
              {/* Logo */}
              <img
                src={
                  isHomePage
                    ? mode === 'left'
                      ? '/logo/black.png'
                      : '/logo/white.png'
                    : mode === 'left'
                      ? '/logo/white.png'
                      : '/logo/black.png'
                }
                alt="Logo"
                className="h-4 md:h-5 lg:h-6 xl:h-7 w-auto absolute transition-opacity duration-150 opacity-100 group-hover:opacity-0"
              />
              <img
                src={
                  isHomePage
                    ? mode === 'left'
                      ? '/logo/white.png'
                      : '/logo/black.png'
                    : mode === 'left'
                      ? '/logo/black.png'
                      : '/logo/white.png'
                }
                alt="Logo Hover"
                className="h-4 md:h-5 lg:h-6 xl:h-7 w-auto transition-opacity duration-150 opacity-0 group-hover:opacity-100"
              />
            </Link>

            <div className="flex-1" />

            {/* About */}
            <Link
              href="/about"
              className={`mr-1 font-bold uppercase text-xs md:text-sm lg:text-base xl:text-lg tracking-wide rounded-full 
        h-8 md:h-9 lg:h-10 xl:h-12 min-w-[80px] md:min-w-[90px] lg:min-w-[100px] xl:min-w-[120px]
        px-3 md:px-4 lg:px-5 xl:px-6 flex items-center justify-center transition duration-150 border
        ${isAboutPage
                  ? mode === 'left'
                    ? 'text-black border-black hover:bg-black hover:text-white'
                    : 'text-white border-white hover:bg-white hover:text-black'
                  : mode === 'left'
                    ? 'text-black border-transparent hover:bg-black hover:text-white hover:border-white'
                    : 'text-white border-transparent hover:bg-white hover:text-black hover:border-black'
                }`}
            >
              About
            </Link>

            {/* Skills */}
            <Link
              href="/skills"
              className={`ml-auto mr-1 font-bold uppercase text-xs md:text-sm lg:text-base xl:text-lg tracking-wide rounded-full 
        h-8 md:h-9 lg:h-10 xl:h-12 min-w-[80px] md:min-w-[90px] lg:min-w-[100px] xl:min-w-[120px]
        px-3 md:px-4 lg:px-5 xl:px-6 flex items-center justify-center transition duration-150 border
        ${isSkillsPage
                  ? mode === 'left'
                    ? 'text-black border-black hover:bg-black hover:text-white'
                    : 'text-white border-white hover:bg-white hover:text-black'
                  : mode === 'left'
                    ? 'text-black border-transparent hover:bg-black hover:text-white hover:border-white'
                    : 'text-white border-transparent hover:bg-white hover:text-black hover:border-black'
                }`}
            >
              Skills
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex w-full md:w-1/2 items-center justify-between mt-3 md:mt-0">
            <div className="flex">
              {/* Projects */}
              <Link
                href="/projects"
                className={`ml-1 font-bold uppercase text-xs md:text-sm lg:text-base xl:text-lg rounded-full 
          h-8 md:h-9 lg:h-10 xl:h-12 min-w-[80px] md:min-w-[90px] lg:min-w-[100px] xl:min-w-[120px]
          px-3 md:px-4 lg:px-5 xl:px-6 flex items-center justify-center transition duration-150 border
          ${isProjectsPage
                    ? mode === 'right'
                      ? 'text-white border-white hover:bg-white hover:text-black'
                      : 'text-black border-black hover:bg-black hover:text-white'
                    : mode === 'right'
                      ? 'text-white border-transparent hover:bg-white hover:text-black hover:border-black'
                      : 'text-black border-transparent hover:bg-black hover:text-white hover:border-white'
                  }`}
              >
                Projects
              </Link>

              {/* Experiences */}
              <Link
                href="/experiences"
                className={`ml-1 font-bold uppercase text-xs md:text-sm lg:text-base xl:text-lg rounded-full 
          h-8 md:h-9 lg:h-10 xl:h-12 min-w-[80px] md:min-w-[90px] lg:min-w-[100px] xl:min-w-[120px]
          px-3 md:px-4 lg:px-5 xl:px-6 flex items-center justify-center transition duration-150 border
          ${isExperiencesPage
                    ? mode === 'right'
                      ? 'text-white border-white hover:bg-white hover:text-black'
                      : 'text-black border-black hover:bg-black hover:text-white'
                    : mode === 'right'
                      ? 'text-white border-transparent hover:bg-white hover:text-black hover:border-black'
                      : 'text-black border-transparent hover:bg-black hover:text-white hover:border-white'
                  }`}
              >
                Experiences
              </Link>
            </div>

            {/* Contact */}
            <Link href="/contact">
              <div
                className={`flex items-center justify-center font-bold uppercase 
          text-xs md:text-sm lg:text-base xl:text-lg tracking-wide rounded-full 
          h-8 md:h-9 lg:h-10 xl:h-12 min-w-[80px] md:min-w-[90px] lg:min-w-[100px] xl:min-w-[120px]
          px-3 md:px-4 lg:px-5 xl:px-6 transition duration-150 border
          ${isContactPage
                    ? mode === 'right'
                      ? 'text-white border-white hover:bg-white hover:text-black'
                      : 'text-black border-black hover:bg-black hover:text-white'
                    : mode === 'right'
                      ? 'bg-white text-black border-transparent hover:bg-transparent hover:text-white hover:border-white'
                      : 'bg-black text-white border-transparent hover:bg-transparent hover:text-black hover:border-black'
                  }`}
              >
                Contact
              </div>
            </Link>
          </div>
        </nav>

        <main className="flex-1 p-4 md:p-6 lg:p-8 xl:p-10">{children}</main>

      </div>
    </div>
  );
}
