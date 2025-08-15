'use client';

import { FaComment, FaLaptopCode } from 'react-icons/fa';
import Link from 'next/link';
import { IconCloud } from "../ui/icon/interactive-icon-cloud";
import { Meteors } from "../ui/background/meteors";
import { CardStack } from "../ui/card/card-stack-lg";
import { InteractiveGridPattern } from "../ui/background/interactive-grid-pattern";
import { Particles } from "../ui/background/particles";
import { FlipText } from "../ui/text/flip-text";
import { WordRotate } from "../ui/text/word-rotate";
import { FlipSparkleText } from "../ui/text/flip-sparkle-text";
import Image from 'next/image'

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
          <FlipText className={`text-4xl font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
            Hi, I am
          </FlipText>

          <FlipSparkleText
            className={`mt-6 text-5xl font-bold ${isLeftMode ? "text-black" : "text-white"
              }`}
            duration={0.5}
            delayMultiple={0.08}
            sparklesCount={10}
            colors={{ first: "#A07CFE", second: "#FE8FB5" }}
          >
            Piphat Upachatai
          </FlipSparkleText>

          <div
            className={`px-4 mt-6 w-auto rounded-lg border-2 flex justify-center items-center
              ${isLeftMode ? 'border-black' : 'border-white'}`}
          >
            <WordRotate
              className={`text-lg font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}
              words={["Frontend Developer", "Programmer", "Web Developer"]}
            />
          </div>

          <FlipText className={`mt-6 text-xl font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
            &quot;A developer who turns ideas into interactive
          </FlipText>
          <FlipText className={`text-xl font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
            experiences.&quot;
          </FlipText>

          <div className="w-[400px] max-w-[500px]">
            <IconCloud iconSlugs={slugs} />
          </div>


          <FlipText className={`mt-6 text-xl font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
            &quot;Clean UI, constant growth. I build, learn, and
          </FlipText>
          <FlipText className={`text-xl font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
            keep moving forward—with curiosity
          </FlipText>
          <FlipText className={`text-xl font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
            and persistence.&quot;
          </FlipText>
        </div>
      </div>

      {/* ฝั่งขวา */}
      <div className="mr-4 w-1/2 flex flex-col items-start">
        <Meteors number={40} />
        <div className="ml-10 w-auto max-w-xl space-y-8">
          <div className={`relative text-left ${isRightMode ? 'text-white' : 'text-black'}`}>
            <div className="flex items-center mb-2">
              <FaComment className="mr-2" />
              <p className="font-bold text-lg">About Me</p>
            </div>

            <div className={`border-2 rounded-lg p-4 ${isRightMode ? 'border-white' : 'border-black'}`}>
              <div className="flex">
                <Image
                  src="/image/piphat.png"
                  alt="Cat using cellphone"
                  width={200}
                  height={200}
                  className={`border-2 rounded-lg ${isRightMode ? 'border-white' : 'border-black'}`}
                />

                <div className="ml-4 flex flex-col">
                  <div className="overflow-auto" style={{ height: '180px' }}>
                    <p className="text-sm leading-relaxed">
                      Royal Scholarship recipient (100%) from the Rajaprajanugroh Foundation under Royal Patronage, Rangsit University.
                      Graduated in Computer Science with First Class Honors (GPA 3.50). Enthusiastic about applying strong technical
                      and problem-solving skills in software development to contribute to innovative projects.
                    </p>
                  </div>

                  <div className="flex items-center mt-2" style={{ height: '20px' }}>
                    <Link
                      href="/about"
                      className={`font-bold ${isRightMode ? 'text-white' : 'text-black'}`}
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className={`relative text-left ${isRightMode ? 'text-white' : 'text-black'}`}>
            <div className="flex items-center mb-6">
              <FaLaptopCode className="mr-2" />
              <p className="font-bold text-lg">Projects</p>
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
