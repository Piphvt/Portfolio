'use client';

import Image from 'next/image';
import { FaEnvelope, FaGithub, FaFileDownload } from 'react-icons/fa';
import { Meteors } from "../ui/background/meteors";
import { InteractiveGridPattern } from "../ui/background/interactive-grid-pattern";
import { Particles } from "../ui/background/particles";
import { FlipText } from "../ui/text/flip-text";
import { useRef, useState } from "react";
import { ContactForm } from "../ui/card/contact-form";

type Props = {
  mode: 'center' | 'left' | 'right';
};

export default function Desktop({ mode }: Props) {
  const isLeftMode = mode === 'left';
  const isRightMode = mode === 'right';

  const buttonRef = useRef<HTMLButtonElement>(null);
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setAttachedFiles(prev => [...prev, ...Array.from(e.target.files!)]);
  };

  const removeFile = (index: number) => {
    setAttachedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="relative flex w-full min-h-screen">
      {/* ฝั่งซ้าย */}
      <div className="relative w-1/2 flex justify-center items-start">
        <InteractiveGridPattern
          className="
            absolute top-0 left-0 w-full h-full
            [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]
            z-[-1]
          "
        />
        <div className="flex flex-col items-center text-center w-full max-w-lg">
          <FlipText className={`text-lg lg:text-xl xl:text-2xl font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
            If you are interested in getting in touch,
          </FlipText>
          <FlipText className={`text-lg lg:text-xl xl:text-2xl font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
            here is how to contact me.
          </FlipText>

          <div className="mt-5 flex gap-6">
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

          <FlipText className={`mt-4 lg:mt-5 xl:mt-6 text-lg lg:text-xl xl:text-2xl  font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
            Should you wish to download my profile,
          </FlipText>
          <FlipText className={`text-lg lg:text-xl xl:text-2xl font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
            it is available here.
          </FlipText>

          <div className="mt-5 flex gap-6">
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
        </div>
      </div>

      {/* ฝั่งขวา */}
      <div className="w-1/2 flex flex-col items-start relative">
        <Meteors number={40} />

        <ContactForm isRightMode={isRightMode} />
      </div>

      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        colorLeft={isLeftMode ? "#000000" : "#ffffff"}
        colorRight={isRightMode ? "#ffffff" : "#000000"}
        refresh
      />
    </div>
  );
}
