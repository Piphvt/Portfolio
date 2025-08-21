'use client';

import Image from 'next/image';
import { FaEnvelope, FaGithub, FaFileDownload } from 'react-icons/fa';
import { Meteors } from "../../../components/ui/background/meteors";
import { InteractiveGridPattern } from "../../../components/ui/background/interactive-grid-pattern";
import { Particles } from "../../../components/ui/background/particles";
import { FlipText } from "../../../components/ui/text/flip-text";
import { ContactForm } from "../card/contact-form";

type Props = {
  mode: 'center' | 'left' | 'right';
};

export default function Desktop({ mode }: Props) {
  const isLeftMode = mode === 'left';
  const isRightMode = mode === 'right';

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

          <FlipText className={`mt-4 lg:mt-5 xl:mt-6 text-lg lg:text-xl xl:text-2xl  font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
            Should you wish to download my profile,
          </FlipText>
          <FlipText className={`text-lg lg:text-xl xl:text-2xl font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
            it is available here.
          </FlipText>

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
