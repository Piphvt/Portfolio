"use client";

import { AnimatePresence, motion, Variants, MotionProps } from "motion/react";
import { cn } from "@/lib/utils";
import { ElementType } from "react";
import React from "react";

interface FlipTextProps extends MotionProps {
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
  as?: ElementType;
  children: React.ReactNode;
  variants?: Variants;
  align?: "left" | "center" | "right"; // 👈 เพิ่ม align prop
}

const defaultVariants: Variants = {
  hidden: { rotateX: -90, opacity: 0 },
  visible: { rotateX: 0, opacity: 1 },
};

export function FlipText({
  children,
  duration = 0.4,
  delayMultiple = 0.08,
  className,
  as: Component = "span",
  variants,
  align = "center", // 👈 default center
  ...props
}: FlipTextProps) {
  const MotionComponent = motion.create(Component);

  const renderChildren = (children: React.ReactNode, baseDelay = 0): React.ReactNode => {
    return React.Children.map(children, (child, i) => {
      if (typeof child === "string") {
        return child.split(" ").map((word, wi) => (
          <span key={`word-${i}-${wi}`} className="inline-flex mr-1">
            {word.split("").map((char, ci) => (
              <MotionComponent
                key={`${ci}`}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants || defaultVariants}
                transition={{ duration, delay: baseDelay + ci * delayMultiple }}
                className={cn("origin-center drop-shadow-sm", className)}
                {...props}
              >
                {char}
              </MotionComponent>
            ))}
          </span>
        ));
      } else if (React.isValidElement(child)) {
        const element = child as React.ReactElement<any>;
        return React.cloneElement(
          element,
          { key: `${i}`, className: cn(element.props.className, className) },
          renderChildren(element.props.children, baseDelay + i * delayMultiple)
        );
      }
      return null;
    });
  };

  // แก้ div หลักให้รองรับ align
  const alignmentClass = align === "left" ? "justify-start" : align === "right" ? "justify-end" : "justify-center";

  return <div className={cn("inline-flex flex-wrap", alignmentClass)}>{renderChildren(children)}</div>;
}
