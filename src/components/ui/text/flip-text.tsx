"use client";

import { motion, Variants, MotionProps } from "motion/react";
import { cn } from "@/lib/utils";
import { ElementType } from "react";
import React from "react";

interface FlipTextProps extends MotionProps {
  duration?: number;
  delayMultiple?: number;
  className?: string;
  as?: ElementType;
  children: React.ReactNode;
  variants?: Variants;
  align?: "left" | "center" | "right"; // text alignment
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
  align = "center",
  ...props
}: FlipTextProps) {
  const MotionComponent = motion.create(Component);

  const renderChildren = (children: React.ReactNode, baseDelay = 0): React.ReactNode => {
    return React.Children.map(children, (child, i) => {
      if (typeof child === "string") {
        // แบ่งเป็นคำและตัวอักษร พร้อม key ที่ unique
        return child.split(" ").map((word, wi) => (
          <span key={`word-${i}-${wi}`} className="inline-flex mr-1">
            {word.split("").map((char, ci) => (
              <MotionComponent
                key={`char-${i}-${wi}-${ci}`}
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
        // ใช้ generic type ให้ TypeScript รู้ว่า element มี className และ children
        const element = child as React.ReactElement<{ className?: string; children?: React.ReactNode }>;

        return React.cloneElement(
          element,
          { key: `element-${i}`, className: cn(element.props.className, className) },
          renderChildren(element.props.children, baseDelay + i * delayMultiple)
        );
      }
      return null;
    });
  };

  const alignmentClass =
    align === "left" ? "justify-start text-left" :
    align === "right" ? "justify-end text-right" :
    "justify-center text-center";

  return (
    <div className={cn("inline-flex flex-wrap", alignmentClass)}>
      {renderChildren(children)}
    </div>
  );
}
