'use client';

import Image from 'next/image';
import { FaEnvelope, FaGithub, FaFileDownload } from 'react-icons/fa';
import { useEffect, useState } from 'react';

type Props = {
    mode: 'center' | 'left' | 'right';
};

export default function Mobile({ mode }: Props) {
    const isLeftMode = mode === 'left';
    const isRightMode = mode === 'right';

    const [isLandscape, setIsLandscape] = useState(false);

    useEffect(() => {
        function checkOrientation() {
            if (typeof window === 'undefined') return;
            setIsLandscape(window.innerWidth > window.innerHeight);
        }
        checkOrientation();

        window.addEventListener('resize', checkOrientation);
        return () => window.removeEventListener('resize', checkOrientation);
    }, []);

    if (isLandscape) {
        // Layout แนวนอน
        return (
            <div className="px-6 pt-5 pb-10 relative flex flex-col sm:flex-row sm:justify-between sm:items-start">
                {/* ฝั่งซ้าย */}
                <div className="text-left sm:max-w-[60%]">
                    <p className={`text-base font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
                        If you are interested in getting in touch,
                    </p>
                    <p className={`text-base font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
                        here is how to contact me.
                    </p>

                    <div className="mt-4 mb-4 flex justify-center gap-4">
                        <a
                            href="mailto:Piphat.Upachatai@gmail.com"
                            className={`flex items-center justify-center gap-2 w-28 h-10 text-base rounded-md shadow px-4 transition
            ${isLeftMode
                                    ? 'bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black'
                                    : 'bg-white text-black hover:bg-transparent hover:border hover:border-white hover:text-white'
                                }`}
                        >
                            <FaEnvelope className="text-base" />
                            <span className="font-bold">Email</span>
                        </a>

                        <a
                            href="https://github.com/Piphvt"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center justify-center gap-2 w-28 h-10 text-base rounded-md shadow px-4 transition
            ${isLeftMode
                                    ? 'bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black'
                                    : 'bg-white text-black hover:bg-transparent hover:border hover:border-white hover:text-white'
                                }`}
                        >
                            <FaGithub className="text-base" />
                            <span className="font-bold">GitHub</span>
                        </a>
                    </div>

                    <p className={`text-base font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
                        &quot;Should you wish to download my profile,
                    </p>
                    <p className={`text-lg font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
                         it is available here.
                    </p>

                    <div className="mt-4 flex justify-center gap-4">
                <a
                    href="/file/Resume.pdf"
                    download
                    className={`flex items-center justify-center gap-2 w-28 h-10 text-base rounded-md shadow px-4 transition
            ${isLeftMode
                            ? 'bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black'
                            : 'bg-white text-black hover:bg-transparent hover:border hover:border-white hover:text-white'
                        }`}
                >
                    <FaFileDownload className="text-base" />
                    <span className="font-bold">Resume</span>
                </a>

                <a
                    href="/file/Curriculum Vitae.pdf"
                    download
                    className={`flex items-center justify-center gap-2 w-28 h-10 text-base rounded-md shadow px-4 transition
            ${isLeftMode
                            ? 'bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black'
                            : 'bg-white text-black hover:bg-transparent hover:border hover:border-white hover:text-white'
                        }`}
                >
                    <FaFileDownload className="text-base" />
                    <span className="font-bold">CV</span>
                </a>
            </div>
                </div>

                {/* ฝั่งขวา */}
                <div className="flex flex-col items-center sm:items-end sm:max-w-[35%]">
                    <div
                        className={`relative w-64 h-48 mb-4 overflow-hidden border-2 ${isRightMode ? 'border-white' : 'border-black'
                            }`}
                    >
                        <Image
                            src="/image/cat-cellphone.gif"
                            alt="Cat cellphone"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* ข้อความตรงกลางใต้รูป */}
                    <div>
                        <p className={`absolute top-[calc(3rem+150px+1rem)] right-11 w-[520px] text-right text-base font-bold ${isRightMode ? 'text-white' : 'text-black'}`}>
                            &quot;Thank you for your interest.&quot;
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    // Layout แนวตั้ง (portrait)
    return (
        <div className="block sm:hidden px-6 pt-1 text-center">
            <p className={`text-xl font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
                If you are interested in getting in touch,
            </p>
            <p className={`text-xl font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
                here is how to contact me.
            </p>

            <div className="mt-4 flex justify-center gap-4">
                <a
                    href="mailto:Piphat.Upachatai@gmail.com"
                    className={`flex items-center justify-center gap-2 w-32 h-12 text-xl rounded-md shadow px-4 transition
            ${isLeftMode
                            ? 'bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black'
                            : 'bg-white text-black hover:bg-transparent hover:border hover:border-white hover:text-white'
                        }`}
                >
                    <FaEnvelope className="text-xl" />
                    <span className="font-bold">Email</span>
                </a>

                <a
                    href="https://github.com/Piphvt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-32 h-12 text-xl rounded-md shadow px-4 transition
            ${isLeftMode
                            ? 'bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black'
                            : 'bg-white text-black hover:bg-transparent hover:border hover:border-white hover:text-white'
                        }`}
                >
                    <FaGithub className="text-xl" />
                    <span className="font-bold">GitHub</span>
                </a>
            </div>

            <p className={`mt-4 text-xl font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
                Should you wish to download my profile,
            </p>
            <p className={`text-xl font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
                it is available here.
            </p>

            <div className="mt-4 mb-8 flex justify-center gap-4">
                <a
                    href="/file/Resume.pdf"
                    download
                    className={`flex items-center justify-center gap-2 w-32 h-12 text-xl rounded-md shadow px-4 transition
            ${isLeftMode
                            ? 'bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black'
                            : 'bg-white text-black hover:bg-transparent hover:border hover:border-white hover:text-white'
                        }`}
                >
                    <FaFileDownload className="text-xl" />
                    <span className="font-bold">Resume</span>
                </a>

                <a
                    href="/file/Curriculum Vitae.pdf"
                    download
                    className={`flex items-center justify-center gap-2 w-32 h-12 text-xl rounded-md shadow px-4 transition
            ${isLeftMode
                            ? 'bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black'
                            : 'bg-white text-black hover:bg-transparent hover:border hover:border-white hover:text-white'
                        }`}
                >
                    <FaFileDownload className="text-xl" />
                    <span className="font-bold">CV</span>
                </a>
            </div>

            <div
                className={`relative w-64 h-48 mx-auto mb-4 overflow-hidden border-4 ${isRightMode ? 'border-white' : 'border-black'
                    }`}
            >
                <Image
                    src="/image/cat-cellphone.gif"
                    alt="Cat coding"
                    fill
                    className="object-cover"
                />
            </div>

            <p className={`mt-4 text-center text-xl font-bold ${isRightMode ? 'text-white' : 'text-black'}`}>
                &quot;Thank you for your interest.&quot;
            </p>
        </div>
    );
}
