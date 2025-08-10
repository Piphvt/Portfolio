'use client';

import Navbar from '../components/navbar/default';
import Image from 'next/image';
import { useState } from 'react';

export default function HomePage() {
  const [mode, setMode] = useState<'center' | 'left' | 'right'>('center');

  const isLeftMode = mode === 'left';
  const isRightMode = mode === 'right';

  return (
    <Navbar onModeChange={setMode}>
      {/* ข้อความฝั่งซ้ายแบบ absolute สำหรับ desktop */}
      <p className={`hidden sm:block absolute top-[5em] left-36 z-10 text-4xl font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
        Hi, I am
      </p>
      <p className={`hidden sm:block absolute top-[4em] left-48 z-10 text-6xl font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
        Piphat Upachatai
      </p>
      <p className={`hidden sm:block absolute top-[13em] left-48 z-10 text-2xl font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
        Frontend Developer/Programmer
      </p>
      <p className={`hidden sm:block absolute top-[14em] left-48 z-10 text-3xl font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
        &quot;A developer who turns ideas into
      </p>
      <p className={`hidden sm:block absolute top-[15em] left-48 z-10 text-3xl font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
        interactive experiences.&quot;
      </p>

      {/* รูปภาพ desktop */}
      <div
        className={`hidden sm:block absolute top-[7rem] right-44 w-[520px] h-[470px] overflow-hidden border-4 ${isRightMode ? 'border-white' : 'border-black'}`}
      >
        <Image
          src="/image/cat-coding.gif"
          alt="Cat coding"
          fill
          className="object-cover"
        />
      </div>

      {/* ข้อความใต้รูปภาพ desktop */}
      <p
        className={`hidden sm:block absolute top-[calc(7rem+470px+1rem)] right-52 w-[520px] text-right text-3xl font-bold ${isRightMode ? 'text-white' : 'text-black'}`}
      >
        &quot;Clean UI, constant growth. I build,
      </p>
      <p
        className={`hidden sm:block absolute top-[calc(7rem+505px+1rem)] right-52 w-[520px] text-right text-3xl font-bold ${isRightMode ? 'text-white' : 'text-black'}`}
      >
        learn, and keep moving forward—
      </p>
      <p
        className={`hidden sm:block absolute top-[calc(7rem+540px+1rem)] right-56 w-[520px] text-right text-3xl font-bold ${isRightMode ? 'text-white' : 'text-black'}`}
      >
        with curiosity and persistence.&quot;
      </p>

      {/* Mobile Layout */}
      <div className="sm:hidden px-6 pt-1 pb-10 text-center relative">
        <p className={`text-2xl font-bold mb-4 ${isLeftMode ? 'text-black' : 'text-white'}`}>Hi, I am</p>
        <p className={`text-4xl font-bold mb-0 ${isLeftMode ? 'text-black' : 'text-white'}`}>Piphat Upachatai</p>
        <p className={`text-base font-bold mb-4 ${isLeftMode ? 'text-black' : 'text-white'}`}>Frontend Developer/Programmer</p>
        <p className={`text-lg font-bold mb-0 ${isLeftMode ? 'text-black' : 'text-white'}`}>
          &quot;A developer who turns ideas into
        </p>
        <p className={`text-lg font-bold mb-8 ${isLeftMode ? 'text-black' : 'text-white'}`}>
          interactive experiences.&quot;
        </p>

        <div className={`relative w-64 h-48 mx-auto mb-8 overflow-hidden border-4 ${isRightMode ? 'border-white' : 'border-black'}`}>
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
    </Navbar>
  );
}
