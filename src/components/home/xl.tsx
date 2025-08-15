'use client';

import Image from 'next/image';

type Props = {
  mode: 'center' | 'left' | 'right';
};

export default function Desktop({ mode }: Props) {
  const isLeftMode = mode === 'left';
  const isRightMode = mode === 'right';

  return (
    <>
      <p
        className={`absolute top-[5em] left-36 z-10 text-4xl font-bold ${
          isLeftMode ? 'text-black' : 'text-white'
        }`}
      >
        Hi, I am
      </p>
      <p
        className={`absolute top-[4em] left-48 z-10 text-6xl font-bold ${
          isLeftMode ? 'text-black' : 'text-white'
        }`}
      >
        Piphat Upachatai
      </p>
      <p
        className={`absolute top-[13em] left-48 z-10 text-2xl font-bold ${
          isLeftMode ? 'text-black' : 'text-white'
        }`}
      >
        Frontend Developer/Programmer
      </p>
      <p
        className={`absolute top-[14em] left-48 z-10 text-3xl font-bold ${
          isLeftMode ? 'text-black' : 'text-white'
        }`}
      >
        &quot;A developer who turns ideas into
      </p>
      <p
        className={`absolute top-[15em] left-48 z-10 text-3xl font-bold ${
          isLeftMode ? 'text-black' : 'text-white'
        }`}
      >
        interactive experiences.&quot;
      </p>

      <div
        className={`absolute top-[7rem] right-44 w-[520px] h-[470px] overflow-hidden border-4 ${
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

      <p
        className={`absolute top-[calc(7rem+470px+1rem)] right-52 w-[520px] text-right text-3xl font-bold ${
          isRightMode ? 'text-white' : 'text-black'
        }`}
      >
        &quot;Clean UI, constant growth. I build,
      </p>
      <p
        className={`absolute top-[calc(7rem+505px+1rem)] right-52 w-[520px] text-right text-3xl font-bold ${
          isRightMode ? 'text-white' : 'text-black'
        }`}
      >
        learn, and keep moving forward—
      </p>
      <p
        className={`absolute top-[calc(7rem+540px+1rem)] right-56 w-[520px] text-right text-3xl font-bold ${
          isRightMode ? 'text-white' : 'text-black'
        }`}
      >
        with curiosity and persistence.&quot;
      </p>
    </>
  );
}
