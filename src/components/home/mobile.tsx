'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type Props = {
    mode: 'center' | 'left' | 'right';
};

export default function Mobile({ mode }: Props) {
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

    const isLeftMode = mode === 'left';
    const isRightMode = mode === 'right';

    if (isLandscape) {
        // Landscape = แสดง layout แบบ desktop แต่ขนาดฟอนต์เท่ากับ portrait
        return (
            <div className="px-6 pt-5 pb-10 relative flex flex-col sm:flex-row sm:justify-between sm:items-start">
                {/* ฝั่งซ้าย */}
                <div className="text-left sm:max-w-[60%]">
                    <p className={`text-2xl font-bold mb-4 ${isLeftMode ? 'text-black' : 'text-white'}`}>
                        Hi, I am
                    </p>
                    <p className={`text-4xl ml-4 font-bold mb-0 ${isLeftMode ? 'text-black' : 'text-white'}`}>
                        Piphat Upachatai
                    </p>
                    <p className={`text-base ml-4 font-bold mb-4 ${isLeftMode ? 'text-black' : 'text-white'}`}>
                        Frontend Developer/Programmer
                    </p>
                    <p className={`text-lg ml-4 font-bold mb-0 ${isLeftMode ? 'text-black' : 'text-white'}`}>
                        &quot;A developer who turns ideas into
                    </p>
                    <p className={`text-lg ml-4 font-bold mb-8 ${isLeftMode ? 'text-black' : 'text-white'}`}>
                        interactive experiences.&quot;
                    </p>
                </div>

                {/* ฝั่งขวา */}
                <div className="flex flex-col items-center sm:items-end sm:max-w-[35%]">
                    <div
                        className={`relative w-64 h-48 mb-4 overflow-hidden border-2 ${isRightMode ? 'border-white' : 'border-black'
                            }`}
                    >
                        <Image
                            src="/image/cat-coding.gif"
                            alt="Cat coding"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* ข้อความตรงกลางใต้รูป */}
                    <div>
                        <p className={`absolute top-[calc(3rem+150px+1rem)] right-6 w-[520px] text-right text-base font-bold ${isRightMode ? 'text-white' : 'text-black'}`}>
                            &quot;Clean UI, constant growth. I build,
                        </p>
                        <p className={`absolute top-[calc(3rem+170px+1rem)] right-7 w-[520px] text-right text-base font-bold ${isRightMode ? 'text-white' : 'text-black'}`}>
                            learn, and keep moving forward—
                        </p>
                        <p className={`absolute top-[calc(3rem+190px+1rem)] right-9 w-[520px] text-right text-base font-bold ${isRightMode ? 'text-white' : 'text-black'}`}>
                            with curiosity and persistence.&quot;
                        </p>
                    </div>
                </div>
            </div>

        );
    }

    // Portrait (เดิม)
    return (
        <div className="px-6 pt-1 pb-10 text-center relative">
            <p className={`text-2xl font-bold mb-4 ${isLeftMode ? 'text-black' : 'text-white'}`}>
                Hi, I am
            </p>
            <p className={`text-4xl font-bold mb-0 ${isLeftMode ? 'text-black' : 'text-white'}`}>
                Piphat Upachatai
            </p>
            <p className={`text-base font-bold mb-4 ${isLeftMode ? 'text-black' : 'text-white'}`}>
                Frontend Developer/Programmer
            </p>
            <p className={`text-lg font-bold mb-0 ${isLeftMode ? 'text-black' : 'text-white'}`}>
                &quot;A developer who turns ideas into
            </p>
            <p className={`text-lg font-bold mb-8 ${isLeftMode ? 'text-black' : 'text-white'}`}>
                interactive experiences.&quot;
            </p>

            <div
                className={`relative w-64 h-48 mx-auto mb-8 overflow-hidden border-2 ${isRightMode ? 'border-white' : 'border-black'
                    }`}
            >
                <Image
                    src="/image/cat-coding.gif"
                    alt="Cat coding"
                    fill
                    className="object-cover"
                />
            </div>

            <p className={`text-xl font-bold mb-0 ${isRightMode ? 'text-white' : 'text-black'}`}>
                &quot;Clean UI, constant growth. I build,
            </p>
            <p className={`text-xl font-bold mb-0 ${isRightMode ? 'text-white' : 'text-black'}`}>
                learn, and keep moving forward—
            </p>
            <p className={`text-xl font-bold ${isRightMode ? 'text-white' : 'text-black'}`}>
                with curiosity and persistence.&quot;
            </p>
        </div>
    );
}
