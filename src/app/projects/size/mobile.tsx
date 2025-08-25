'use client';

import { Meteors } from "@/components/ui/background/meteors";
import { InteractiveGridPattern } from "@/components/ui/background/interactive-grid-pattern";
import { Particles } from "@/components/ui/background/particles";
import { AnimatedTestimonials, Testimonial } from "../components/animated-testimonials";

type Props = {
  mode: 'center' | 'left' | 'right';
};

export default function Mobile({ mode }: Props) {
  const isLeftMode = mode === 'left';
  const isRightMode = mode === 'right';

  const testimonials: Testimonial[] = [
    {
      title: "Fix Port Web Application",
      quote:
        "A web application that collects stock data to analyze and plan stock investments for customers.",
      images: [
        "/image/fix-port/main.png",
        "/image/fix-port/register.png",
        "/image/fix-port/start.png",
      ],
      codeUrl: "https://github.com/Piphvt/Fix-Port",
      live: { label: "Private" },
    },
  ];

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

      <AnimatedTestimonials
        testimonials={testimonials}
        isLeftMode={isLeftMode}
      />


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
