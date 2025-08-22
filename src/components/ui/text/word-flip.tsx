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

function WordFlipBase({
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
        return child.split(" ").map((word, wi) => (
          <MotionComponent
            key={`word-${i}-${wi}`}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants || defaultVariants}
            transition={{ duration, delay: baseDelay + wi * delayMultiple }}
            className={cn("inline-flex mr-2 origin-center drop-shadow-sm", className)}
            {...props}
          >
            {word}
          </MotionComponent>
        ));
      } else if (React.isValidElement(child)) {
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

// ✅ comparator สำหรับ React.memo
function areEqual(prev: FlipTextProps, next: FlipTextProps) {
  return (
    prev.children === next.children && // animate เฉพาะเมื่อ text/children เปลี่ยนจริง
    prev.align === next.align &&
    prev.variants === next.variants
    // ไม่สนใจ className/duration/delayMultiple → เปลี่ยนได้แต่ไม่ re-animate
  );
}

// ✅ export memoized component
export const WordFlip = React.memo(WordFlipBase, areEqual);
