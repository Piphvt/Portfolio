'use client';
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { useMemo, useEffect, useState } from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // ใช้เฉพาะ client
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const meteorCount = number || 20;

  const meteors = useMemo(() => {
    if (windowWidth === 0) return []; // ยังไม่รู้ขนาดหน้าจอ

    return new Array(meteorCount).fill(true).map(() => ({
      top: -100 - Math.random() * 200,
      left: Math.random() * windowWidth,
      animationDelay: Math.random() * 5,
      animationDuration: 5 + Math.random() * 5,
    }));
  }, [meteorCount, windowWidth]);

  return (
    <motion.div
      className={cn("absolute inset-0 -z-10 overflow-hidden", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteors.map((meteor, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']"
          )}
          style={{
            top: `${meteor.top}px`,
            left: `${meteor.left}px`,
            animationDelay: `${meteor.animationDelay}s`,
            animationDuration: `${meteor.animationDuration}s`,
          }}
        />
      ))}
    </motion.div>
  );
};
