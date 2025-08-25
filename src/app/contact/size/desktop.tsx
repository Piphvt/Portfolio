'use client';

import { FaEnvelope, FaGithub, FaFileDownload } from 'react-icons/fa';
import { useMemo } from "react";

import { ContactForm } from "../components/contact-form";
import { Globe } from "../components/globe";
import { Meteors } from "@/components/ui/background/meteors";
import { InteractiveGridPattern } from "@/components/ui/background/interactive-grid-pattern";
import { Particles } from "@/components/ui/background/particles";
import { CharFlip } from "@/components/ui/text/char-flip";

type Props = {
  mode: 'center' | 'left' | 'right';
};

export default function Desktop({ mode }: Props) {
  const isLeftMode = mode === 'left';
  const isRightMode = mode === 'right';

  const ContactText = useMemo(() => (
    <p>
      If you are interested in
      <span className="font-bold">getting in touch,</span>
      here is how to <span className="font-bold">contact me.</span>
    </p>
  ), []);

  const ProfileText = useMemo(() => (
    <p>
      Should you wish to
      <span className="font-bold">download my profile,</span>
      it is
      <span className="font-bold">available here.</span></p>
  ), []);

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
          <div className={`mx-8 ${isLeftMode ? 'text-black' : 'text-white'}`}>
            <CharFlip className={`text-lg lg:text-xl xl:text-2xl`}>
              {ContactText}
            </CharFlip>
          </div>

          <div className="mt-4 lg:mt-5 xl:mt-6 gap-3 lg:gap-4 xl:gap-5 flex">
            <a
              href="mailto:Piphat.Upachatai@gmail.com"
              className={`gap-3 lg:gap-4 xl:gap-5 w-[120px] lg:w-[140px] xl:w-[160px] px-4 flex items-center justify-start h-12 rounded-md shadowtransition
                ${isLeftMode
                  ? 'bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black'
                  : 'bg-white text-black hover:bg-transparent hover:border hover:border-white hover:text-white'}`}
            >
              <FaEnvelope className="text-lg lg:text-xl xl:text-2xl font-bold" />
              <span className="text-lg lg:text-xl xl:text-2xl font-bold">Email</span>
            </a>

            <a
              href="https://github.com/Piphvt"
              target="_blank"
              rel="noopener noreferrer"
              className={`gap-3 lg:gap-4 xl:gap-5 w-[120px] lg:w-[140px] xl:w-[160px] px-4 flex items-center justify-start h-12 rounded-md shadowtransition
                ${isLeftMode
                  ? 'bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black'
                  : 'bg-white text-black hover:bg-transparent hover:border hover:border-white hover:text-white'}`}
            >
              <FaGithub className="text-lg lg:text-xl xl:text-2xl font-bold" />
              <span className="text-lg lg:text-xl xl:text-2xl font-bold">GitHub</span>
            </a>
          </div>

          <div className={`mx-8 mt-4 lg:mt-5 xl:mt-6 ${isLeftMode ? 'text-black' : 'text-white'}`}>
            <CharFlip className={`text-lg lg:text-xl xl:text-2xl`}>
              {ProfileText}
            </CharFlip>
          </div>

          <div className="mt-4 lg:mt-5 xl:mt-6 gap-3 lg:gap-4 xl:gap-5 flex">
            <a
              href="/file/Resume.pdf"
              download
              className={`gap-3 lg:gap-4 xl:gap-5 w-[120px] lg:w-[140px] xl:w-[160px] px-4 flex items-center justify-start h-12 rounded-md shadow transition
                ${isLeftMode
                  ? 'bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black'
                  : 'bg-white text-black hover:bg-transparent hover:border hover:border-white hover:text-white'}`}
            >
              <FaFileDownload className="text-lg lg:text-xl xl:text-2xl font-bold" />
              <span className="text-lg lg:text-xl xl:text-2xl font-bold">Resume</span>
            </a>

            <a
              href="/file/Curriculum Vitae.pdf"
              download
              className={`ap-3 lg:gap-4 xl:gap-5 w-[120px] lg:w-[140px] xl:w-[160px] px-4 flex items-center justify-start h-12 rounded-md shadow transition
                ${isLeftMode
                  ? 'bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black'
                  : 'bg-white text-black hover:bg-transparent hover:border hover:border-white hover:text-white'}`}
            >
              <FaFileDownload className="text-lg lg:text-xl xl:text-2xl font-bold" />
              <span className="text-lg lg:text-xl xl:text-2xl font-bold">CV</span>
            </a>
          </div>

          <div className="mx-8 relative w-full flex justify-center">
            <Globe maxSize={500}/>
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
