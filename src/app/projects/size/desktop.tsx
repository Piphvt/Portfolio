'use client';

import { Meteors } from "@/components/ui/background/meteors";
import { InteractiveGridPattern } from "@/components/ui/background/interactive-grid-pattern";
import { Particles } from "@/components/ui/background/particles";

type Props = {
  mode: 'center' | 'left' | 'right';
};

export default function Desktop({ mode }: Props) {
  const isLeftMode = mode === 'left';
  const isRightMode = mode === 'right';

  return (
    <div className="relative flex w-full min-h-screen">
      {/* ฝั่งซ้าย */}
      <div className="relative w-1/2 flex justify-center items-start">
        <InteractiveGridPattern
          className="
            absolute top-0 left-0 w-full h-full
            [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]
            z-[-1]
          "
        />
        <div className="flex flex-col items-center text-center w-full max-w-lg">
        </div>
      </div>

      {/* ฝั่งขวา */}
      <div className="w-1/2 flex flex-col items-start relative">
        <Meteors number={40} />
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
  );
}
