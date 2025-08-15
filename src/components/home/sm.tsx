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
        <p className="text-2xl font-bold">Hi, I am</p>
        <p className="mt-4 text-3xl font-bold">Piphat Upachatai</p>
        <p className="text-sm font-bold">Frontend Developer/Programmer</p>
        <p className="mt-4 text-xl font-bold">
          &quot;A developer who turns ideas into interactive experiences.&quot;
        </p>
      </div>

      {/* รูปภาพ */}
      <div
        className={`relative mt-4 w-[350px] h-[350px] overflow-hidden border-4 ${
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
      <div className="mt-4 text-xl font-bold max-w-[350px]">
        <p>&quot;Clean UI, constant growth. I build, learn, and keep moving forward—with curiosity and persistence.&quot;</p>
      </div>
    </div>
  );
}
