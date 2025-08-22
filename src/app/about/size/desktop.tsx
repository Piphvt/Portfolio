'use client';

import { FaGraduationCap } from 'react-icons/fa';
import { FaPersonMilitaryPointing, FaAward, FaCalendarDays } from "react-icons/fa6";
import Link from 'next/link';
import { Meteors } from "../../../components/ui/background/meteors";
import { InteractiveGridPattern } from "../../../components/ui/background/interactive-grid-pattern";
import { Particles } from "../../../components/ui/background/particles";
import { WordFlip } from "../../../components/ui/text/word-flip";
import { WordRotate } from "../../../components/ui/text/word-rotate";
import { FlipSparkleText } from "../../../components/ui/text/flip-sparkle-text";
import Image from 'next/image'
import { motion } from "motion/react";
import { useMemo } from "react";

type Props = {
  mode: 'center' | 'left' | 'right';
};

export default function Desktop({ mode }: Props) {
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
    <div className="relative flex w-full min-h-screen">
      {/* ฝั่งซ้าย */}
      <div className="relative w-1/2 flex justify-center items-start">
        {/* Grid เป็น background */}
        <InteractiveGridPattern
          className="
            absolute top-0 left-0 w-full h-full
            [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]
            z-[-1]
          "
        />

        <div className="flex flex-col items-center text-center w-full max-w-lg">
          <Image
            src="/image/piphat.png"
            alt="Cat using cellphone"
            width={150}
            height={150}
            className={`border-2 rounded-lg ${isLeftMode ? 'border-black' : 'border-white'} 
                        lg:w-[175px] lg:h-[175px] 
                        xl:w-[200px] xl:h-[200px]`}
          />

          <FlipSparkleText
            className={`mt-4 text-3xl lg:text-4xl xl:text-5xl font-bold ${isLeftMode ? "text-black" : "text-white"
              }`}
            duration={0.5}
            delayMultiple={0.08}
            sparklesCount={10}
            colors={{ first: "#A07CFE", second: "#FE8FB5" }}
          >
            Piphat Upachatai
          </FlipSparkleText>

          <div className="w-auto max-w-lg lg:max-w-xl xl:max-w-2xl mx-10 mt-4 lg:mt-5 xl:mt-6">
            <div className={`border-2 ${isLeftMode ? 'border-black' : 'border-white'} rounded-lg p-4`}>
              <div className={`${isLeftMode ? 'text-black' : 'text-white'}`}>
                <WordFlip className={`text-base lg:text-lg xl:text-xl}`} align="center">
                {AboutText}
              </WordFlip>
              </div>
            </div>
          </div>

          <div
            className={`px-4 mt-4 lg:mt-5 xl:mt-6 w-auto rounded-lg border-2 flex justify-center items-center
              ${isLeftMode ? 'border-black' : 'border-white'}`}
          >
            <WordRotate
              className={`text-base lg:text-lg xl:text-xl font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}
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
      </div>

      {/* ฝั่งขวา */}
      <div className="w-1/2 relative flex flex-col items-center">
        <Meteors number={40} />
        <div className="mx-10 w-auto max-w-base lg:max-w-lg xl:max-w-xl space-y-8">
          <div className={`relative text-left ${isRightMode ? 'text-white' : 'text-black'}`}>
            <div className="mb-2 flex items-center">
              <FaGraduationCap className="mr-2 text-lg lg:text-xl xl:text-2xl" />
              <p className="font-bold text-lg lg:text-xl  xl:text-2xl">Education</p>
            </div>

            <motion.div
              className={`border-2 rounded-lg p-4 ${isRightMode ? 'border-white' : 'border-black'} cursor-pointer`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex">
                <Image
                  src="/image/rsu.png"
                  alt="rsu"
                  width={120}
                  height={120}
                  className={`border-2 rounded-lg ${isRightMode ? 'border-white' : 'border-black'} 
                              lg:w-[150px] lg:h-[150px] 
                              xl:w-[180px] xl:h-[180px]`}
                />

                <div className="ml-4 flex flex-col">
                  <div className="overflow-auto h-[105px] lg:h-[115px] xl:h-[145px]">
                    <p className="text-base lg:text-lg xl:text-xl font-bold">
                      Rangsit University
                    </p>
                    <p className="text-base lg:text-lg xl:text-xl leading-relaxed">
                      Graduated with a <span className="font-bold">Bachelor&apos;s degree</span> in
                      <span className="font-bold"> Computer Science</span> with
                      <span className="font-bold"> GPA : 3.50</span> from the College of Digital Innovation Technology,
                      as a <span className="font-bold">Rajaprajanugroh Scholarship recipient under the Royal Patronage</span>.
                    </p>
                  </div>

                  <div className="h-[15px] lg:h-[35px] xl:h-[35px] flex items-center">
                    <Link
                      href="/about"
                      className={`font-bold text-base lg:text-lg xl:text-xl ${isRightMode ? 'text-white' : 'text-black'}`}
                    >
                      2021 - 2025
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
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
      </div>
    </div>
  );
}