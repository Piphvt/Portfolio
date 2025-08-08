'use client';

import Navbar from '../../components/navbar/default';
import { useState } from 'react';

export default function ContactPage() {
  const [mode, setMode] = useState<'center' | 'left' | 'right'>('center');

  const isLeftMode = mode === 'left';
  const isRightMode = mode === 'right';

  return (
    <Navbar onModeChange={setMode}>

      {/* รูปภาพ */}
      <div
        className={`absolute top-[7rem] right-36 w-[520px] h-[470px] overflow-hidden border-4 ${isRightMode ? 'border-white' : 'border-black'
          }`}
      >
        <img
          src="/image/cat-cellphone.gif"
          alt="Cat GIF"
          className="w-full h-full object-cover"
        />
      </div>


      {/* ข้อความใต้รูปภาพ */}
      <p
        className={`absolute top-[calc(7rem+470px+1rem)] right-52 w-[520px] text-right text-3xl font-bold ${isRightMode ? 'text-white' : 'text-black'}`}
      >
        "Thank you for your interest."
      </p>
    </Navbar>
  );
}
