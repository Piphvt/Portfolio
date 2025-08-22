'use client';

import { FaGraduationCap } from 'react-icons/fa';
import { FaPersonMilitaryPointing, FaAward, FaCalendarDays } from "react-icons/fa6";
import { Meteors } from "../../../components/ui/background/meteors";
import { InteractiveGridPattern } from "../../../components/ui/background/interactive-grid-pattern";
import { Particles } from "../../../components/ui/background/particles";
import { WordFlip } from "../../../components/ui/text/word-flip";
import { WordRotate } from "../../../components/ui/text/word-rotate";
import { FlipSparkleText } from "../../../components/ui/text/flip-sparkle-text";
import Image from 'next/image';
import { motion } from "motion/react";
import { useMemo } from "react";

type Props = {
    mode: 'center' | 'left' | 'right';
};

export default function Mobile({ mode }: Props) {
    const isLeftMode = mode === 'left';
    const isRightMode = mode === 'right';

    const AboutText = useMemo(() => (
    <p>
      I am a recent graduate with a strong passion for
      <span className="font-bold">web development,</span>
      both
      <span className="font-bold">Frontend</span>
      and
      <span className="font-bold">Backend.</span>
      Beyond that, I am also interested in exploring related fields such as
      <span className="font-bold">DevOps,</span>
      <span className="font-bold">UX/UI Design,</span>
      and discovering
      <span className="font-bold">new tools</span>
      to enhance my skills. I am highly
      <span className="font-bold">motivated,</span>
      <span className="font-bold">eager to learn,</span>
      and
      <span className="font-bold">adaptable,</span>
      which allows me to integrate seamlessly into any work environment while continuously
      improving myself to contribute effectively to the team and organization.
    </p>
  ), []);

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

            {/* ส่วนที่อยู่บนสุด */}
            <div className="flex flex-col items-center">
                <Image
                    src="/image/piphat.png"
                    alt="Cat using cellphone"
                    width={150}
                    height={150}
                    className={`border-2 rounded-lg ${isRightMode ? 'border-white' : 'border-black'} 
              sm:h-[150px] sm:w-[150px]`}
                />
                <FlipSparkleText
                    className="mt-3 text-xl sm:text-2xl font-bold"
                    duration={0.5}
                    delayMultiple={0.08}
                    sparklesCount={10}
                    colors={{ first: "#A07CFE", second: "#FE8FB5" }}
                >
                    Piphat Upachatai
                </FlipSparkleText>
                
                <div className="w-auto max-w-xs sm:max-w-sm mt-2 px-4">
                    <div className={`border-2 ${isLeftMode ? 'border-black' : 'border-white'} rounded-lg p-2`}>
                        <div className={`${isLeftMode ? 'text-black' : 'text-white'}`}>
                            <WordFlip className={`text-sm sm:text-base`} align="center">
                                {AboutText}
                            </WordFlip>
                        </div>
                    </div>
                </div>

                <div
                    className={`px-4 mt-4 w-auto rounded-lg border-2 flex justify-center items-center
              ${isLeftMode ? 'border-black' : 'border-white'}`}
                >
                    <WordRotate
                        className="text-sm sm:text-base font-bold"
                        words={[
                            <span key="age" className="flex items-center gap-2">
                                <FaCalendarDays className="w-4 h-4 text-blue-500" /> 23 Years
                            </span>,
                            <span key="honors" className="flex items-center gap-2">
                                <FaAward className="w-4 h-4 text-yellow-500" /> First Class Honors
                            </span>,
                            <span key="military" className="flex items-center gap-2">
                                <FaPersonMilitaryPointing className="w-4 h-4 text-green-900" /> Unenlisted
                            </span>,
                        ]}
                    />
                </div>
            </div>

            {/* Card Section */}
            <div className={`mt-4 h-auto w-auto max-w-xs sm:max-w-sm space-y-8 relative text-left ${isRightMode ? 'text-white' : 'text-black'}`}>
                <motion.div
                    className={`border-2 rounded-lg p-4 ${isRightMode ? 'border-white' : 'border-black'} cursor-pointer`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <div className="flex">
                        <Image
                            src="/image/rsu-with-name.png"
                            alt="rsu"
                            width={100}
                            height={100}
                            className={`border-2 rounded-lg ${isRightMode ? 'border-white' : 'border-black'} 
              sm:h-[120px] sm:w-[120px]`}
                        />

                        <div className="ml-4 flex flex-col">
                            <div className="h-[20px] sm:h-[30px] flex items-center">
                                <FaGraduationCap className="mr-2 text-sm sm:text-base" />
                                <p className="text-sm sm:text-base font-bold">Education</p>
                            </div>
                            <div className="overflow-auto h-[60px] sm:h-[60px]">
                                <p className="text-xs sm:text-sm leading-relaxed">
                                    Graduated with a <span className="font-bold">Bachelor&apos;s degree</span> in
                                    <span className="font-bold"> Computer Science</span> with
                                    <span className="font-bold"> GPA : 3.50</span> from the College of Digital Innovation Technology,
                                    as a <span className="font-bold">Rajaprajanugroh Scholarship recipient under the Royal Patronage</span>.
                                </p>
                            </div>


                            <div className="mt-2 h-[20px] sm:h-[30px] flex items-center">
                                <p
                                    className={`font-bold text-xs sm:text-sm ${isRightMode ? 'text-white' : 'text-black'}`}
                                >
                                    2021 - 2025
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

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
