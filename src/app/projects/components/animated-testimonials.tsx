"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { FaGithub, FaCaretDown } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import Image from "next/image";

export type Testimonial = {
  title: string;
  quote: string;
  images: string[]; // รองรับหลายรูป
  codeUrl?: string;
  live?: {
    label: "Live" | "Private";
    url?: string;
  };
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  isLeftMode = true,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  isLeftMode?: boolean;
}) => {
  const [activeTopic, setActiveTopic] = useState(0); // เลือกหัวข้อ
  const [activeImage, setActiveImage] = useState(0); // เลือกรูปในหัวข้อ
  const [rotates, setRotates] = useState<number[][]>([]);

  const currentTestimonial = testimonials[activeTopic];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // เปลี่ยนรูป
  const handleNextImage = () => {
    setActiveImage((prev) => (prev + 1) % currentTestimonial.images.length);
  };
  const handlePrevImage = () => {
    setActiveImage(
      (prev) => (prev - 1 + currentTestimonial.images.length) % currentTestimonial.images.length
    );
  };

  // เปลี่ยนหัวข้อ
  const handleChangeTopic = (index: number) => {
    setActiveTopic(index);
    setActiveImage(0); // reset รูปเป็นรูปแรกของหัวข้อใหม่
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNextImage, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, currentTestimonial]);

  useEffect(() => {
    setRotates(
      testimonials.map((t) =>
        t.images.map(() => Math.floor(Math.random() * 21) - 10)
      )
    );
  }, [testimonials]);

  return (
    <div className="mx-auto max-w-xs sm:max-w-sm px-3 sm:px-4 font-sans antialiased lg:px-12">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

        {/* Left side image */}
        <div className="flex flex-col items-center">
          {/* Dropdown หัวข้อ */}
          <div className="mb-6 w-full flex justify-center relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`flex items-center gap-2 px-2 py-2 rounded-lg border ${isLeftMode ? "border-black text-black" : "border-white text-white"}`}
            >
              {currentTestimonial.title}
              <FaCaretDown />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 w-48 bg-white shadow-md rounded z-50">
                {testimonials.map((t, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      handleChangeTopic(idx);
                      setIsDropdownOpen(false);
                    }}
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                  >
                    {t.title}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* รูป */}
          <div className="relative w-full aspect-video">
            <AnimatePresence>
              {currentTestimonial.images.map((src, index) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, scale: 0.9, rotate: rotates[activeTopic]?.[index] ?? 0 }}
                  animate={{
                    opacity: index === activeImage ? 1 : 0.7,
                    scale: index === activeImage ? 1 : 0.95,
                    rotate: index === activeImage ? 0 : rotates[activeTopic]?.[index] ?? 0,
                    zIndex: index === activeImage ? 40 : 0,
                  }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-lg overflow-hidden"
                >
                  <Image
                    src={src || "/image/placeholder.png"} // ใช้ placeholder ถ้า src ว่าง
                    alt={`${currentTestimonial.title}-${index}`}
                    fill
                    className="object-cover object-center rounded-lg border-2"
                    draggable={false}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* ปุ่มเปลี่ยนรูป */}
          <div className="flex gap-3 mt-2">
            <button
              onClick={handlePrevImage}
              className={`flex h-8 w-8 items-center justify-center rounded-full ${isLeftMode ? "bg-black text-white" : "bg-white text-black"}`}
            >
              <IconArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNextImage}
              className={`flex h-8 w-8 items-center justify-center rounded-full ${isLeftMode ? "bg-black text-white" : "bg-white text-black"}`}
            >
              <IconArrowRight className="h-4 w-4" />
            </button>
          </div>
          <motion.div
            key={activeTopic}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {/* Quote */}
            <motion.p className={`mt-2 text-base sm:text-lg ${isLeftMode ? "text-black" : "text-white"}`}>
              {currentTestimonial.quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut", delay: 0.02 * index }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>

            {/* Links */}
            <div className="mt-2 justify-center flex gap-6 items-center">
              {currentTestimonial.codeUrl && (
                <a href={currentTestimonial.codeUrl} target="_blank" rel="noopener noreferrer"
                  className={`${isLeftMode ? "text-black" : "text-white"} flex items-center gap-2 text-sm hover:opacity-80`}>
                  <FaGithub /> Code
                </a>
              )}
              {currentTestimonial.live?.label === "Live" && currentTestimonial.live.url ? (
                <a href={currentTestimonial.live.url} target="_blank" rel="noopener noreferrer"
                  className={`${isLeftMode ? "text-green-600" : "text-green-400"} flex items-center gap-2 text-sm hover:opacity-80`}>
                  <TbWorld /> Live
                </a>
              ) : currentTestimonial.live?.label === "Private" ? (
                <div className={`flex items-center gap-2 text-sm cursor-not-allowed ${isLeftMode ? "text-red-600" : "text-red-400"}`}>
                  <TbWorld /> Private
                </div>
              ) : null}
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};
