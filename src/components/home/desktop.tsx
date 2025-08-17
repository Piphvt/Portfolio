'use client';

import { FaComment, FaLaptopCode } from 'react-icons/fa';
import Link from 'next/link';
import { IconCloud } from "../ui/icon/interactive-icon-cloud";
import { Meteors } from "../ui/background/meteors";
import { CardStack } from "../ui/card/card-stack";
import { InteractiveGridPattern } from "../ui/background/interactive-grid-pattern";
import { Particles } from "../ui/background/particles";
import { FlipText } from "../ui/text/flip-text";
import { WordRotate } from "../ui/text/word-rotate";
import { FlipSparkleText } from "../ui/text/flip-sparkle-text";
import Image from 'next/image'
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

export default function Home({ mode }: Props) {
  const isLeftMode = mode === 'left';
  const isRightMode = mode === 'right';

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
          <FlipText className={`text-3xl lg:text-4xl xl:text-5xl font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
            Hi, I am
          </FlipText>

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

          <FlipText className={`mt-4 lg:mt-5 xl:mt-6 text-lg lg:text-xl xl:text-2xl font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
            &quot;A developer who turns ideas
          </FlipText>
          <FlipText className={`text-lg lg:text-xl xl:text-2xl font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
            into interactive experiences.&quot;
          </FlipText>

          <div className="mr-5 w-[300px] lg:w-[350px] xl:w-[400]">
            <IconCloud iconSlugs={slugs} />
          </div>


          <FlipText className={`mt-4 lg:mt-5 xl:mt-6 text-lg lg:text-xl xl:text-2xl font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
            &quot;Clean UI, constant growth. I build,
          </FlipText>
          <FlipText className={`text-lg lg:text-xl xl:text-2xl font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
            learn, and keep moving forward—
          </FlipText>
          <FlipText className={`text-lg lg:text-xl xl:text-2xl font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
            with curiosity and persistence.&quot;
          </FlipText>
        </div>
      </div>

      {/* ฝั่งขวา */}
      <div className="w-1/2 flex flex-col items-start">
        <Meteors number={40} />
        <div className="mr-4 w-auto space-y-8">
          <div className={`ml-10 relative text-left ${isRightMode ? 'text-white' : 'text-black'}`}>
            <div className="mb-2 flex items-center">
              <FaComment className="mr-2 text-lg lg:text-xl" />
              <p className="font-bold text-lg lg:text-xl">About Me</p>
            </div>

            <motion.div
              className={`border-2 rounded-lg p-4 ${isRightMode ? 'border-white' : 'border-black'} cursor-pointer`}
              whileHover={{ scale: 1.05 }} // ขยาย 5% เวลา hover
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
                  <div className="overflow-auto h-[95px] lg:h-[120px] xl:h-[145px]">
                    <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
                      Royal Scholarship recipient (100%) from the Rajaprajanugroh Foundation under Royal Patronage, Rangsit University.
                      Graduated in Computer Science with First Class Honors (GPA 3.50). Enthusiastic about applying strong technical
                      and problem-solving skills in software development to contribute to innovative projects.
                    </p>
                  </div>

                  <div className="mt-2 h-[25px] lg:h-[30px] xl:h-[25px] flex items-center">
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
          <div className={`ml-10 relative text-left ${isRightMode ? 'text-white' : 'text-black'}`}>
            <div className="mb-6 flex items-center">
              <FaLaptopCode className="mr-2 text-lg lg:text-xl" />
              <p className="font-bold text-lg lg:text-xl">Projects</p>
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