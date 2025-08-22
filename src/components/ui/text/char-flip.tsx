"use client";

import { motion, Variants, MotionProps } from "motion/react";
import { cn } from "@/lib/utils";
import { ElementType } from "react";
import React, { useMemo } from "react";

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

function CharFlipBase({
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

  // 🔹 memoize children เพื่อให้ reference คงที่
  const memoizedChildren = useMemo(() => children, [children]);

  const renderChildren = (children: React.ReactNode, baseDelay = 0): React.ReactNode => {
    return React.Children.map(children, (child, i) => {
      if (typeof child === "string") {
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
      {renderChildren(memoizedChildren)}
    </div>
  );
}

// 🔹 comparator กัน re-render ที่ไม่จำเป็น
function areEqual(prev: FlipTextProps, next: FlipTextProps) {
  return (
    prev.children === next.children && // animate เฉพาะถ้า text เปลี่ยนจริง
    prev.align === next.align &&
    prev.variants === next.variants
    // ไม่สนใจ className / duration / delayMultiple
  );
}

// 🔹 export ตัว memoized component
export const CharFlip = React.memo(CharFlipBase, areEqual);
