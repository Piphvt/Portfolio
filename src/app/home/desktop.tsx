'use client';

import { FaComment, FaLaptopCode } from 'react-icons/fa';
import Link from 'next/link';
import { IconCloud } from "../../components/ui/icon/interactive-icon-cloud";
import { Meteors } from "../../components/ui/background/meteors";
import { CardStack } from "../../components/ui/card/card-stack";
import { InteractiveGridPattern } from "../../components/ui/background/interactive-grid-pattern";
import { Particles } from "../../components/ui/background/particles";
import { CharFlip } from "../../components/ui/text/char-flip";
import { WordRotate } from "../../components/ui/text/word-rotate";
import { FlipSparkleText } from "../../components/ui/text/flip-sparkle-text";
import Image from 'next/image'
import { motion } from "motion/react";
import { useMemo } from "react";

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

const CARDS = [
  {
    id: 0,
    name: "OCR Application",
    image: "/image/cat-coding.gif",
    content: (
      <p>
        An application that uses OCR (Optical Character Recognition) technology, which converts text from images into digital text that can be copied, edited, or stored. It is useful for document work, data management, and various automation systems.
      </p>
    ),
  },
  {
    id: 1,
    name: "Fix Port Web Application",
    image: "/image/cat-cellphone.gif",
    content: (
      <p>
        A web application that collects stock data to analyze and plan stock investments for customers.
      </p>
    ),
  },
];

export default function Desktop({ mode }: Props) {
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
          <div className={isLeftMode ? "text-black" : "text-white"}>
            <CharFlip className="text-3xl lg:text-4xl xl:text-5xl font-bold">
              Hi, I am
            </CharFlip>
          </div>

          <FlipSparkleText
            className={`mt-4 text-4xl lg:text-5xl xl:text-6xl font-bold ${isLeftMode ? "text-black" : "text-white"
              }`}
            duration={0.5}
            delayMultiple={0.08}
            sparklesCount={10}
            colors={{ first: "#A07CFE", second: "#FE8FB5" }}
          >
            Piphat Upachatai
          </FlipSparkleText>

          <div
            className={`px-4 mt-4 lg:mt-5 xl:mt-6 w-auto rounded-lg border-2 flex justify-center items-center
              ${isLeftMode ? 'border-black' : 'border-white'}`}
          >
            <WordRotate
              className={`text-base lg:text-lg xl:text-xl font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}
              words={["Frontend Developer", "Programmer", "Web Developer"]}
            />
          </div>

          <div className={`mx-4 mt-4 lg:mt-5 xl:mt-6 ${isLeftMode ? "text-black" : "text-white"}`}>
            <CharFlip className="text-lg lg:text-xl xl:text-2xl">
              {devQuote}
            </CharFlip>
          </div>

          <div className="mr-5 w-[300px] lg:w-[350px] xl:w-[400]">
            <IconCloud iconSlugs={slugs} />
          </div>

          <div className={`mx-4 mt-4 mb-4 lg:mt-5 xl:mt-6 ${isLeftMode ? 'text-black' : 'text-white'}`}>
            <CharFlip className={`text-lg lg:text-xl xl:text-2xl`}>
              {devText}
            </CharFlip>
          </div>
        </div>
      </div>

      {/* ฝั่งขวา */}
      <div className="w-1/2 relative flex flex-col items-center">
        <Meteors number={40} />
        <div className="mx-10 w-auto max-w-base lg:max-w-lg xl:max-w-xl space-y-8">
          <div className={`relative text-left ${isRightMode ? 'text-white' : 'text-black'}`}>
            <div className="mb-2 flex items-center">
              <FaComment className="mr-2 text-lg lg:text-xl xl:text-2xl" />
              <p className="font-bold text-lg lg:text-xl  xl:text-2xl">About Me</p>
            </div>

            <motion.div
              className={`border-2 rounded-lg p-4 ${isRightMode ? 'border-white' : 'border-black'} cursor-pointer`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex">
                <Image
                  src="/image/piphat.png"
                  alt="Cat using cellphone"
                  width={120}
                  height={120}
                  className={`border-2 rounded-lg ${isRightMode ? 'border-white' : 'border-black'} 
                              lg:w-[150px] lg:h-[150px] 
                              xl:w-[180px] xl:h-[180px]`}
                />

                <div className="ml-4 flex flex-col">
                  <div className="overflow-auto h-[105px] lg:h-[115px] xl:h-[145px]">
                    <p className="text-base lg:text-lg xl:text-xl font-bold">
                      What kind of work do you want?</p>
                    <p className="text-base lg:text-lg xl:text-xl leading-relaxed">
                      Although I am just starting out in this field, I am highly motivated to continuously learn and improve.
                      My strong interest in <span className="font-bold">UI/UX design</span> and development makes <span className="font-bold">Frontend</span> the area I am most eager to pursue.
                      That said, I am also capable of working on the <span className="font-bold">Backend</span>, and I have a growing interest in <span className="font-bold">DevOps</span> and Software Testing,
                      as I believe that understanding the full system architecture helps build better, more reliable software.
                    </p>
                  </div>

                  <div className="h-[15px] lg:h-[35px] xl:h-[35px] flex items-center">
                    <Link
                      href="/about"
                      className={`font-bold text-base lg:text-lg xl:text-xl ${isRightMode ? 'text-white' : 'text-black'}`}
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Projects */}
          <div className={`relative text-left ${isRightMode ? 'text-white' : 'text-black'}`}>
            <div className="mb-6 flex items-center">
              <FaLaptopCode className="mr-2 text-lg lg:text-xl xl:text-2xl" />
              <p className="font-bold text-lg lg:text-xl xl:text-2xl">Projects</p>
            </div>
            <CardStack items={CARDS} mode={mode} />
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