'use client';

import { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

interface LayoutProps {
  children: ReactNode;
  onModeChange?: (mode: Mode) => void;
}

type Mode = 'center' | 'left' | 'right';

export default function Navbar({ children, onModeChange }: LayoutProps) {
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
        <nav className="px-6 py-4 flex justify-between items-center">
          {/* ฝั่งซ้าย */}
          <div className="flex w-1/2 items-center">
            {/* Logo ชิดซ้ายสุด */}
            <Link
              href="/"
              className={`flex items-center justify-center overflow-hidden rounded-full border h-10 min-w-[120px] px-6
                ${isHomePage
                  ? mode === 'left'
                    ? 'bg-white border-black hover:bg-black hover:border-black'
                    : 'bg-black border-white hover:bg-white hover:border-white'
                  : mode === 'left'
                    ? 'bg-black border-transparent hover:bg-transparent hover:text-black hover:border-black'
                    : 'bg-white border-transparent hover:bg-transparent hover:text-white hover:border-white'
                }`}
            >
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
                className="h-5 w-auto absolute transition-opacity duration-150 opacity-100 group-hover:opacity-0"
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
                className="h-5 w-auto transition-opacity duration-150 opacity-0 group-hover:opacity-100"
              />
            </Link>

            {/* Spacer ดัน About กับ Experiences ไปขวา */}
            <div className="flex-1" />

            {/* About อยู่กลาง */}
            <Link
              href="/about"
              className={`mr-4 font-bold uppercase text-sm tracking-wide rounded-full h-10 min-w-[120px] px-6 flex items-center justify-center transition duration-150 border
                ${isAboutPage
                  ? mode === 'left'
                    ? 'text-black border-black bg-transparent hover:bg-black hover:text-white'
                    : 'text-white border-white bg-transparent hover:bg-white hover:text-black'
                  : mode === 'left'
                    ? 'text-black border-transparent bg-transparent hover:bg-black hover:text-white hover:border-white'
                    : 'text-white border-transparent bg-transparent hover:bg-white hover:text-black hover:border-black'
                }`}
            >
              About
            </Link>

            {/* Experiences ชิดขวาสุด */}
            <Link
              href="/skills"
              className={`ml-auto mr-2 font-bold uppercase text-sm tracking-wide rounded-full h-10 min-w-[120px] px-6 flex items-center justify-center transition duration-150 border
                ${isSkillsPage
                  ? mode === 'left'
                    ? 'text-black border-black bg-transparent hover:bg-black hover:text-white'
                    : 'text-white border-white bg-transparent hover:bg-white hover:text-black'
                  : mode === 'left'
                    ? 'text-black border-transparent bg-transparent hover:bg-black hover:text-white hover:border-white'
                    : 'text-white border-transparent bg-transparent hover:bg-white hover:text-black hover:border-black'
                }`}
            >
              Skills
            </Link>
          </div>

          {/* ฝั่งขวา */}
          <div className="flex w-1/2 items-center justify-between">
            {/* ซ้ายสุดของฝั่งขวา: Skills กับ Projects เรียงติดกัน */}
            <div className="flex">
              <Link
                href="/projects"
                className={`ml-2 mr-2 font-bold uppercase text-sm tracking-wide rounded-full h-10 min-w-[120px] px-6 flex items-center justify-center transition duration-150 border
        ${isProjectsPage
                    ? mode === 'right'
                      ? 'text-white border-white bg-transparent hover:bg-white hover:text-black'
                      : 'text-black border-black bg-transparent hover:bg-black hover:text-white'
                    : mode === 'right'
                      ? 'text-white border-transparent bg-transparent hover:bg-white hover:text-black hover:border-black'
                      : 'text-black border-transparent bg-transparent hover:bg-black hover:text-white hover:border-white'
                  }`}
              >
                Projects
              </Link>

              <Link
                href="/experiences"
                className={`ml-2 font-bold uppercase text-sm tracking-wide rounded-full h-10 min-w-[120px] px-6 flex items-center justify-center transition duration-150 border
        ${isExperiencesPage
                    ? mode === 'right'
                      ? 'text-white border-white bg-transparent hover:bg-white hover:text-black'
                      : 'text-black border-black bg-transparent hover:bg-black hover:text-white'
                    : mode === 'right'
                      ? 'text-white border-transparent bg-transparent hover:bg-white hover:text-black hover:border-black'
                      : 'text-black border-transparent bg-transparent hover:bg-black hover:text-white hover:border-white'
                  }`}
              >
                Experiences
              </Link>
            </div>

            {/* ขวาสุดของฝั่งขวา: Contact */}
            <Link href="/contact">
              <div
                className={`flex items-center justify-center h-10 min-w-[120px] px-6 rounded-full transition duration-150 font-bold uppercase text-sm tracking-wide border
        ${isContactPage
                    ? mode === 'right'
                      ? 'text-white border-white bg-transparent group-hover:bg-white group-hover:text-black'
                      : 'text-black border-black bg-transparent group-hover:bg-black group-hover:text-white'
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

        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
}
