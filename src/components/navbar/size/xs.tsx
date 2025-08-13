'use client';

import { ReactNode, useState, useEffect } from 'react';
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

    // โหลด mode ล่าสุดจาก localStorage
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

    // ฟังก์ชันเปลี่ยน mode
    const toggleMode = () => {
        let newMode: 'center' | 'left' | 'right';
        if (mode === 'left') newMode = 'right';
        else if (mode === 'right') newMode = 'left';
        else newMode = 'left';

        setMode(newMode);
        localStorage.setItem('navbar-mode', newMode); // บันทึกโหมดล่าสุด
        onModeChange?.(newMode);
    };

    // theme ปกติ
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
        <div
            className={`relative min-h-screen flex flex-col font-outfit border-2 ${themeClass}`}
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

                {/* Dropdown Menu (Overlay) */}
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

                            // ให้ border เฉพาะ CONTACT และเปลี่ยนสีตาม mode
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
                                    className={`w-full text-center text-lg font-semibold py-3 ${borderClass} transition-colors duration-200
                                        ${isActive ? activeClass : inactiveClass}
                                    `}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>
                )}
            </div>

            {/* Main content */}
            <main className="flex-1 p-4 z-10 relative">{children}</main>
        </div>
    );
}
