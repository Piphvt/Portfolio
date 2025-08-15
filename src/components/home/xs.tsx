'use client';

import Image from 'next/image';

type Props = {
  mode: 'center' | 'left' | 'right';
};

export default function Home({ mode }: Props) {
  const isLeftMode = mode === 'left';
  const isRightMode = mode === 'right';

  return (
    <div
      className={`flex flex-col items-center text-center p-6 ${
        isLeftMode ? 'text-black' : 'text-white'
      }`}
    >
      {/* ส่วนที่อยู่บนสุด */}
      <div className="flex flex-col items-center">
        <p className="text-xl font-bold">Hi, I am</p>
        <p className="mt-3 text-2xl font-bold">Piphat Upachatai</p>
        <p className="text-xs font-bold">Frontend Developer/Programmer</p>
        <p className="mt-3 text-lg font-bold">
          &quot;A developer who turns ideas into interactive experiences.&quot;
        </p>
      </div>

      {/* รูปภาพ */}
      <div
        className={`relative mt-3 w-[250px] h-[250px] overflow-hidden border-4 ${
          isRightMode ? 'border-white' : 'border-black'
        }`}
      >
        <Image
          src="/image/cat-coding.gif"
          alt="Cat coding"
          fill
          className="object-cover"
        />
      </div>

      {/* ข้อความล่าง */}
      <div className="mt-3 text-lg font-bold max-w-[250px]">
        <p>&quot;Clean UI, constant growth. I build, learn, and keep moving forward—with curiosity and persistence.&quot;</p>
      </div>
    </div>
  );
}
