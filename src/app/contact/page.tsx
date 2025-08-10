'use client';

import Navbar from '../../components/navbar/default';
import { FaEnvelope, FaGithub, FaFileDownload } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';

export default function ContactPage() {
  const [mode, setMode] = useState<'center' | 'left' | 'right'>('center');

  const isLeftMode = mode === 'left';
  const isRightMode = mode === 'right';

  return (
    <Navbar onModeChange={setMode}>

      {/* MOBILE VIEW */}
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
                : 'bg-white text-black hover:bg-transparent hover:border hover:border-white hover:text-white'}`}
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
                : 'bg-white text-black hover:bg-transparent hover:border hover:border-white hover:text-white'}`}
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
                : 'bg-white text-black hover:bg-transparent hover:border hover:border-white hover:text-white'}`}
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
                : 'bg-white text-black hover:bg-transparent hover:border hover:border-white hover:text-white'}`}
          >
            <FaFileDownload className="text-xl" />
            <span className="font-bold">CV</span>
          </a>
        </div>

        {/* รูปภาพและข้อความใต้รูปภาพ */}
        <div className={`relative w-64 h-48 mx-auto mb-4 overflow-hidden border-4 ${isRightMode ? 'border-white' : 'border-black'}`}>
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

      {/* DESKTOP VIEW */}
      <div className="hidden sm:block">
        <p className={`ml-36 mt-16 text-3xl font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
          If you are interested in getting in touch,
        </p>
        <p className={`ml-36 text-3xl font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
          here is how to contact me.
        </p>

        <div className="ml-48 mt-5 flex gap-6">
          <a
            href="mailto:Piphat.Upachatai@gmail.com"
            className={`flex items-center justify-start gap-3 w-[150px] h-12 text-2xl rounded-md shadow px-4 transition
              ${isLeftMode
                ? 'bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black'
                : 'bg-white text-black hover:bg-transparent hover:border hover:border-white hover:text-white'}`}
          >
            <FaEnvelope className="text-2xl font-bold" />
            <span className="font-bold">Email</span>
          </a>

          <a
            href="https://github.com/Piphvt"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-start gap-3 w-[150px] h-12 text-2xl rounded-md shadow px-4 transition
              ${isLeftMode
                ? 'bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black'
                : 'bg-white text-black hover:bg-transparent hover:border hover:border-white hover:text-white'}`}
          >
            <FaGithub className="text-2xl font-bold" />
            <span className="font-bold">GitHub</span>
          </a>
        </div>

        <p className={`ml-36 mt-5 text-3xl font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
          Should you wish to download my profile,
        </p>
        <p className={`ml-36 text-3xl font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
          it is available here.
        </p>

        <div className="ml-48 mt-5 flex gap-6">
          <a
            href="/file/Resume.pdf"
            download
            className={`flex items-center justify-start gap-3 w-[150px] h-12 text-2xl rounded-md shadow px-4 transition
              ${isLeftMode
                ? 'bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black'
                : 'bg-white text-black hover:bg-transparent hover:border hover:border-white hover:text-white'}`}
          >
            <FaFileDownload className="text-2xl font-bold" />
            <span className="font-bold">Resume</span>
          </a>

          <a
            href="/file/Curriculum Vitae.pdf"
            download
            className={`flex items-center justify-start gap-3 w-[150px] h-12 text-2xl rounded-md shadow px-4 transition
              ${isLeftMode
                ? 'bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black'
                : 'bg-white text-black hover:bg-transparent hover:border hover:border-white hover:text-white'}`}
          >
            <FaFileDownload className="text-2xl font-bold" />
            <span className="font-bold">CV</span>
          </a>
        </div>

        <div
          className={`absolute top-[7rem] right-44 w-[520px] h-[470px] overflow-hidden border-4 ${isRightMode ? 'border-white' : 'border-black'}`}
        >
          <Image
            src="/image/cat-cellphone.gif"
            alt="Cat GIF"
            fill
            className="object-cover"
          />
        </div>

        <p
          className={`absolute top-[calc(7rem+470px+1rem)] right-60 w-[520px] text-right text-3xl font-bold ${isRightMode ? 'text-white' : 'text-black'}`}
        >
          &quot;Thank you for your interest.&quot;
        </p>
      </div>
    </Navbar>
  );
}
