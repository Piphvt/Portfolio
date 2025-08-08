'use client';

import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';

interface LayoutProps {
    children: ReactNode;
    onModeChange?: (mode: 'center' | 'left' | 'right') => void;
}

export default function MobileNavbar({ children, onModeChange }: LayoutProps) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <div
            className="relative min-h-screen flex flex-col font-outfit"
            style={{
                background: 'linear-gradient(to right, white 50%, black 50%)',
            }}
        >
            {/* Top Nav Bar */}
            <div
                className="flex justify-between items-center px-6 py-4 relative z-20 backdrop-blur-md"
                style={{
                    background: 'linear-gradient(to right, white 50%, black 50%)',
                }}
            >
                <Link href="/" className="flex items-center">
                    <img src="/logo/black.png" alt="Logo" className="h-6 w-auto" />
                </Link>

                <button onClick={() => setOpen(!open)} aria-label="Toggle Menu">
                    {open ? (
                        <FaTimes size={24} className="text-white" />
                    ) : (
                        <FaBars size={24} className="text-white" />
                    )}
                </button>
            </div>

            {/* Sidebar Menu fixed at right half of the screen */}
            {open && (
                <div className="fixed top-0 right-0 h-full w-1/2 bg-white border-l-2 border-black flex flex-col z-30 shadow-lg p-6">
                    {/* แถวแรก: ปุ่มปิด + About */}
                    <div className="flex w-full justify-between items-center mb-6">
                        <Link
                            href="/about"
                            onClick={() => setOpen(false)}
                            className={`text-black text-lg font-semibold ${pathname === '/about' ? 'underline' : ''
                                }`}
                        >
                            About
                        </Link>

                        <button
                            onClick={() => setOpen(false)}
                            aria-label="Close Menu"
                            className="text-black"
                        >
                            <FaTimes size={28} />
                        </button>
                    </div>


                    {/* ลิงก์อื่น ๆ */}
                    <nav className="flex flex-col items-center gap-6">
                        <Link
                            href="/experiences"
                            onClick={() => setOpen(false)}
                            className={`text-black text-lg font-semibold ${pathname.startsWith('/experiences') ? 'underline' : ''
                                }`}
                        >
                            Experiences
                        </Link>
                        <Link
                            href="/skills"
                            onClick={() => setOpen(false)}
                            className={`text-black text-lg font-semibold ${pathname.startsWith('/skills') ? 'underline' : ''
                                }`}
                        >
                            Skills
                        </Link>
                        <Link
                            href="/projects"
                            onClick={() => setOpen(false)}
                            className={`text-black text-lg font-semibold ${pathname.startsWith('/projects') ? 'underline' : ''
                                }`}
                        >
                            Projects
                        </Link>
                        <Link
                            href="/contact"
                            onClick={() => setOpen(false)}
                            className={`text-black text-lg font-semibold ${pathname.startsWith('/contact') ? 'underline' : ''
                                }`}
                        >
                            Contact
                        </Link>
                    </nav>
                </div>

            )}

            {/* Main content */}
            <main className="flex-1 p-4 z-10 relative">{children}</main>
        </div>
    );
}
