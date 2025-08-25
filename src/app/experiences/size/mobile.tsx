'use client';

import { Meteors } from "@/components/ui/background/meteors";
import { InteractiveGridPattern } from "@/components/ui/background/interactive-grid-pattern";
import { Particles } from "@/components/ui/background/particles";

type Props = {
    mode: 'center' | 'left' | 'right';
};

export default function Mobile({ mode }: Props) {
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
