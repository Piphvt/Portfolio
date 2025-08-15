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
    name: "Cat Coding",
    image: "/image/cat-coding.gif",
    content: (
      <p>
        coding... coding... coding... coding... coding... coding... coding... coding...
      </p>
    ),
  },
  {
    id: 1,
    name: "Cat Cellphone",
    image: "/image/cat-cellphone.gif",
    content: (
      <p>
        waiting for your call.. waiting for your call.. waiting for your call.. waiting for your call.. waiting for your call..
        waiting for your call.. waiting for your call.. waiting for your call.. waiting for your call.. waiting for your call..
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
      <div className="relative w-1/2 flex justify-end">
        {/* Grid เป็น background */}
        <InteractiveGridPattern
          className="
            absolute top-0 left-0 w-full h-full
            [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]
            z-[-1]
          "
        />

        <div className="flex flex-col items-center text-center w-full max-w-lg">
          <FlipText  className={`md:text-3xl font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
            Hi, I am
          </FlipText>

          <FlipSparkleText
            className={`mt-4 md:text-4xl font-bold ${isLeftMode ? "text-black" : "text-white"
              }`}
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
              className={`md:text-base font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}
              words={["Frontend Developer", "Programmer", "Web Developer"]}
            />
          </div>

          <FlipText className={`mt-4 text-base md:text-lg font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
            "A developer who turns ideas into
          </FlipText>
          <FlipText className={`text-base md:text-lg font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
            interactive experiences."
          </FlipText>

          <div className="w-80">
            <IconCloud iconSlugs={slugs} />
          </div>

          <FlipText className={`mt-4 text-base md:text-lg font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
            "Clean UI, constant growth. I build,
          </FlipText>
          <FlipText className={`text-base md:text-lg font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
            learn, and keep moving forward—
          </FlipText>
          <FlipText className={`text-base md:text-lg font-bold ${isLeftMode ? 'text-black' : 'text-white'}`}>
            with curiosity and persistence."
          </FlipText>
        </div>
      </div>

      {/* ฝั่งขวา */}
      <div className="mr-4 w-1/2 flex flex-col items-start">
        <Meteors number={40} />
        <div className="ml-10 w-auto max-w-lg space-y-8">
          <div className={`relative text-left ${isRightMode ? 'text-white' : 'text-black'}`}>
            <div className="flex items-center mb-2">
              <FaComment className="mr-2" />
              <p className="font-bold text-lg">About Me</p>
            </div>

            <div className={`border-2 rounded-lg p-4 ${isRightMode ? 'border-white' : 'border-black'}`}>
              <div className="clearfix">
                {/* รูปภาพ float ซ้าย */}
                <Image
                  src="/image/piphat.png"
                  alt="Cat using cellphone"
                  width={150}
                  height={150}
                  className={`border-2 rounded-lg float-left mr-4 mb-2 ${isRightMode ? 'border-white' : 'border-black'}`}
                />


                {/* Text */}
                <p className="text-sm leading-relaxed">
                  Royal Scholarship recipient (100%) from the Rajaprajanugroh Foundation under Royal Patronage, Rangsit University.
                  Graduated in Computer Science with First Class Honors (GPA 3.50). Enthusiastic about applying strong technical
                  and problem-solving skills in software development to contribute to innovative projects.
                </p>
              </div>

              {/* Link */}
              <Link
                href="/about"
                className={`mt-2 inline-block font-bold hover:underline ${isRightMode ? 'text-white' : 'text-black'}`}
              >
                Read More →
              </Link>
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
            color={isRightMode ? "#ffffff" : isLeftMode ? "#000000" : "#ffffff"} // ถ้าอยากมี default สีอื่น
            refresh
          />
        </div>
      </div>
    </div>
  );
}
