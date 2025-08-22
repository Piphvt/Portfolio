'use client';

import { FaEnvelope, FaGithub, FaFileDownload } from 'react-icons/fa';
import { Meteors } from "../../../components/ui/background/meteors";
import { InteractiveGridPattern } from "../../../components/ui/background/interactive-grid-pattern";
import { Particles } from "../../../components/ui/background/particles";
import { FlipText } from "../../../components/ui/text/flip-text";
import { ContactForm } from "../components/contact-form";
import Image from 'next/image';

type Props = {
    mode: 'center' | 'left' | 'right';
};

export default function Home({ mode }: Props) {
    const isLeftMode = mode === 'left';
    const isRightMode = mode === 'right';

    return (
        <div
            className={`flex flex-col items-center text-center min-h-screen relative ${isLeftMode ? 'text-black' : 'text-white'}`}
        >
            {/* Background Pattern */}
            <InteractiveGridPattern
                className="
          absolute
          [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]
          inset-0
          z-[-1]
        "
            />
            <Meteors number={40} />

            <FlipText className={`text-sm sm:text-base font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
                If you are interested in getting in touch,
            </FlipText>
            <FlipText className={`text-sm sm:text-base font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
                here is how to contact me.
            </FlipText>

            <div className="mt-4 sm:mt-5 gap-3 sm:gap-4 flex">
                <a
                    href="mailto:Piphat.Upachatai@gmail.com"
                    className={`gap-3 sm:gap-4 w-[110px] sm:w-[120px] px-4 flex items-center justify-start h-10 rounded-md shadowtransition
                      ${isLeftMode
                            ? 'bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black'
                            : 'bg-white text-black hover:bg-transparent hover:border hover:border-white hover:text-white'}`}
                >
                    <FaEnvelope className="text-sm sm:text-base font-bold" />
                    <span className="text-sm sm:text-base font-bold">Email</span>
                </a>

                <a
                    href="https://github.com/Piphvt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`gap-3 sm:gap-4 w-[110px] sm:w-[120px] px-4 flex items-center justify-start h-10 rounded-md shadowtransition
                      ${isLeftMode
                            ? 'bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black'
                            : 'bg-white text-black hover:bg-transparent hover:border hover:border-white hover:text-white'}`}
                >
                    <FaGithub className="text-sm sm:text-base font-bold" />
                    <span className="text-sm sm:text-base font-bold">GitHub</span>
                </a>
            </div>

            <FlipText className={`mt-4 sm:mt-5 text-sm sm:text-base font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
                Should you wish to download my profile,
            </FlipText>
            <FlipText className={`text-sm sm:text-base font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
                it is available here.
            </FlipText>

            <div className="mb-4 sm:mb-5 mt-4 sm:mt-5 gap-3 sm:gap-4 flex">
                <a
                    href="/file/Resume.pdf"
                    download
                    className={`gap-3 sm:gap-4 w-[110px] sm:w-[120px] px-4 flex items-center justify-start h-10 rounded-md shadow transition
                      ${isLeftMode
                            ? 'bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black'
                            : 'bg-white text-black hover:bg-transparent hover:border hover:border-white hover:text-white'}`}
                >
                    <FaFileDownload className="text-sm sm:text-base font-bold" />
                    <span className="text-sm sm:text-base font-bold">Resume</span>
                </a>

                <a
                    href="/file/Curriculum Vitae.pdf"
                    download
                    className={`gap-3 sm:gap-4 w-[110px] sm:w-[120px] px-4 flex items-center justify-start h-10 rounded-md shadow transition
                      ${isLeftMode
                            ? 'bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black'
                            : 'bg-white text-black hover:bg-transparent hover:border hover:border-white hover:text-white'}`}
                >
                    <FaFileDownload className="text-sm sm:text-base font-bold" />
                    <span className="text-sm sm:text-base font-bold">CV</span>
                </a>
            </div>

            <ContactForm isRightMode={isRightMode}  />

            {/* Particles */}
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
