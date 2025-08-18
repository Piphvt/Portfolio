'use client';

import { FaComment } from 'react-icons/fa';
import Link from 'next/link';
import { IconCloud } from "../ui/icon/interactive-icon-cloud";
import { Meteors } from "../ui/background/meteors";
import { InteractiveGridPattern } from "../ui/background/interactive-grid-pattern";
import { Particles } from "../ui/background/particles";
import { FlipText } from "../ui/text/flip-text";
import { WordRotate } from "../ui/text/word-rotate";
import { FlipSparkleText } from "../ui/text/flip-sparkle-text";
import Image from 'next/image';
import { motion } from "motion/react";

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
        <FlipText className="text-xl sm:text-2xl font-bold">Hi, I am</FlipText>
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

        <FlipText className="mt-4 text-lg sm:text-xl font-bold">
          &quot;A developer who turns ideas
        </FlipText>
        <FlipText className="text-lg sm:text-xl font-bold">
          into interactive experiences.&quot;
        </FlipText>
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
              <div className="h-[15px] sm:h-[30px] flex items-center mb-2">
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
      <div className="mt-4 text-lg sm:text-xl font-bold">
        <FlipText>&quot;Clean UI, constant growth. I build,</FlipText>
      </div>
      <div className="text-lg sm:text-xl font-bold">
        <FlipText> learn, and keep moving forward—</FlipText>
      </div>
      <div className="text-lg sm:text-xl font-bold">
        <FlipText>with curiosity and persistence.&quot;</FlipText>
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
