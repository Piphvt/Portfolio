'use client';

import { FaComment } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "motion/react";
import { useMemo } from "react";

import { IconCloud } from "@/app/home/components/interactive-icon-cloud";
import { Meteors } from "@/components/ui/background/meteors";
import { InteractiveGridPattern } from "@/components/ui/background/interactive-grid-pattern";
import { Particles } from "@/components/ui/background/particles";
import { CharFlip } from "@/components/ui/text/char-flip";
import { WordRotate } from "@/components/ui/text/word-rotate";
import { FlipSparkleText } from "@/components/ui/text/flip-sparkle-text";

type Props = {
  mode: 'center' | 'left' | 'right';
};

const slugs = [
  "typescript", "javascript", "dart", "java", "react", "flutter", "android",
  "html5", "css3", "nodedotjs", "express", "nextdotjs", "prisma", "amazonaws",
  "postgresql", "firebase", "nginx", "vercel", "testinglibrary", "jest",
  "cypress", "docker", "git", "jira", "github", "gitlab", "visualstudiocode",
  "androidstudio", "sonarqube", "figma",
];

export default function Home({ mode }: Props) {
  const isLeftMode = mode === 'left';
  const isRightMode = mode === 'right';

  const devQuote = useMemo(() => (
    <p>
      <span className="font-bold">&quot;A developer </span>
      who turns
      <span className="font-bold"> ideas</span> into
      <span className="font-bold">interactive experiences.&quot;</span>
    </p>
  ), []);

  const devText = useMemo(() => (
    <p>
      <span className="font-bold">&quot;Clean UI, constant growth.</span>
      I build, learn, and keep moving forward—with
      <span className="font-bold">curiosity and persistence.&quot;</span>
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
        <CharFlip className="text-xl sm:text-2xl font-bold">Hi, I am</CharFlip>
        <FlipSparkleText
          className="mt-3 text-2xl sm:text-3xl font-bold"
          duration={0.5}
          delayMultiple={0.08}
          sparklesCount={10}
          colors={{ first: "#A07CFE", second: "#FE8FB5" }}
        >
          Piphat Upachatai
        </FlipSparkleText>

        <div
          className={`px-4 mt-4 w-auto rounded-lg border-2 flex justify-center items-center
              ${isLeftMode ? 'border-black' : 'border-white'}`}
        >
          <WordRotate
            className="text-sm sm:text-base font-bold"
            words={["Frontend Developer", "Programmer", "Web Developer"]}
          />
        </div>

        <div className={`mx-4 mt-4 ${isLeftMode ? "text-black" : "text-white"}`}>
          <CharFlip className="text-lg sm:text-xl">
            {devQuote}
          </CharFlip>
        </div>
      </div>

      {/* Card Section */}
      <div className={`mt-4 w-auto max-w-xs sm:max-w-sm space-y-8 relative text-left ${isRightMode ? 'text-white' : 'text-black'}`}>
        <motion.div
          className={`border-2 rounded-lg p-4 ${isRightMode ? 'border-white' : 'border-black'} cursor-pointer`}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="flex">
            <Image
              src="/image/piphat.png"
              alt="Cat using cellphone"
              width={100}
              height={100}
              className={`border-2 rounded-lg ${isRightMode ? 'border-white' : 'border-black'} 
              sm:h-[120px] sm:w-[120px]`}
            />

            <div className="ml-4 flex flex-col">
              <div className="h-[20px] sm:h-[30px] flex items-center">
                <FaComment className="mr-2 text-sm sm:text-base" />
                <p className="text-sm sm:text-base font-bold">About Me</p>
              </div>
              <div className="overflow-auto h-[60px] sm:h-[60px]">
                <p className="text-xs sm:text-sm leading-relaxed">
                  Royal Scholarship recipient (100%) from the Rajaprajanugroh Foundation under Royal Patronage, Rangsit University.
                  Graduated in Computer Science with First Class Honors (GPA 3.50). Enthusiastic about applying strong technical
                  and problem-solving skills in software development to contribute to innovative projects.
                </p>
              </div>

              <div className="mt-2 h-[20px] sm:h-[30px] flex items-center">
                <Link
                  href="/about"
                  className={`font-bold text-sm sm:text-base ${isRightMode ? 'text-white' : 'text-black'}`}
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ข้อความล่าง */}
      <div className={`mx-4 mt-4 ${isLeftMode ? 'text-black' : 'text-white'}`}>
        <CharFlip className={`text-lg sm:text-xl`}>
          {devText}
        </CharFlip>
      </div>

      {/* Icon Cloud */}
      <div className="w-[200px] sm:w-[250px]">
        <IconCloud iconSlugs={slugs} />
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
