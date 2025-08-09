'use client';

import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

interface LayoutProps {
    children: ReactNode;
    onModeChange?: (mode: 'center' | 'left' | 'right') => void;
}

export default function MobileNavbar({ children, onModeChange }: LayoutProps) {
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState<'center' | 'left' | 'right'>('left');
    const pathname = usePathname();

    // ฟังก์ชันเปลี่ยน mode
    const toggleMode = () => {
        let newMode: 'center' | 'left' | 'right';
        if (mode === 'left') newMode = 'right';
        else if (mode === 'right') newMode = 'left';
        else newMode = 'left'; // กรณีมี center จะปรับเพิ่มได้
        setMode(newMode);
        onModeChange?.(newMode);
    };

    // ตั้ง theme class ตาม mode
    const themeClass =
        mode === 'right'
            ? 'bg-black text-white border-white'
            : 'bg-white text-black border-black';

    return (
        <div
            className={`relative min-h-screen grid grid-rows-[auto_1fr] font-outfit border-2 ${themeClass}`}
        >
            {/* Nav Bar */}
            <div className={`relative z-20 border-b-2 ${themeClass}`}>
                <div className="flex justify-between items-center px-6 py-4 backdrop-blur-md">
                    <Link href="/" className="flex items-center">
                        <img
                            src={mode === 'right' ? '/logo/white.png' : '/logo/black.png'}
                            alt="Logo"
                            className="h-6 w-auto"
                        />
                    </Link>

                    <div className="flex items-center gap-4">
                        {/* ปุ่มเปลี่ยน Theme */}
                        <button
                            onClick={toggleMode}
                            aria-label="Toggle Theme"
                            className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${themeClass}`}
                        >
                            {mode === 'right' ? (
                                <FaMoon size={19} />
                            ) : (
                                <FaSun size={20} />
                            )}
                        </button>

                        {/* ปุ่มเมนู */}
                        <button onClick={() => setOpen(!open)} aria-label="Toggle Menu">
                            {open ? (
                                <FaTimes size={24} />
                            ) : (
                                <FaBars size={24} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Dropdown Menu */}
                {open && (
                    <nav
                        className={`border-t-2 shadow-lg px-6 py-6 flex flex-col items-center gap-3 ${themeClass}`}
                    >
                        <Link
                            href="/about"
                            onClick={() => setOpen(false)}
                            className={`text-lg font-semibold ${
                                pathname === '/about' ? 'underline' : ''
                            }`}
                        >
                            About
                        </Link>
                        <Link
                            href="/experiences"
                            onClick={() => setOpen(false)}
                            className={`text-lg font-semibold ${
                                pathname.startsWith('/experiences') ? 'underline' : ''
                            }`}
                        >
                            Experiences
                        </Link>
                        <Link
                            href="/skills"
                            onClick={() => setOpen(false)}
                            className={`text-lg font-semibold ${
                                pathname.startsWith('/skills') ? 'underline' : ''
                            }`}
                        >
                            Skills
                        </Link>
                        <Link
                            href="/projects"
                            onClick={() => setOpen(false)}
                            className={`text-lg font-semibold ${
                                pathname.startsWith('/projects') ? 'underline' : ''
                            }`}
                        >
                            Projects
                        </Link>
                        <Link
                            href="/contact"
                            onClick={() => setOpen(false)}
                            className={`text-lg font-semibold ${
                                pathname.startsWith('/contact') ? 'underline' : ''
                            }`}
                        >
                            Contact
                        </Link>
                    </nav>
                )}
            </div>

            {/* Main content */}
            <main className="flex-1 p-4 z-10 relative">{children}</main>
        </div>
    );
}
