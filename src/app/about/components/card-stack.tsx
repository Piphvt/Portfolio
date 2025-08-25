"use client";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

type Props = {
  mode: "center" | "left" | "right";
  items: Card[];
  offset?: number;
  scaleFactor?: number;
};

type Card = {
  id: number;
  name: React.ReactNode; // สำหรับแสดงชื่อ + icon
  nameAlt?: string; // สำหรับ alt ของ <Image>
  image: string;
  content: React.ReactNode;
  year?: string;
};

export const CardStack = ({ items, offset, scaleFactor, mode }: Props) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;

  const [cards, setCards] = useState<Card[]>(items);
  const [cardHeights, setCardHeights] = useState<{ [id: number]: number }>({});
  const intervalRef = useRef<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    startFlipping();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const startFlipping = () => {
    intervalRef.current = window.setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);
  };

  useLayoutEffect(() => {
    const heights: { [id: number]: number } = {};
    cardRefs.current.forEach((card, index) => {
      if (card) {
        heights[cards[index].id] = card.offsetHeight;
      }
    });
    if (Object.keys(cardHeights).length === 0) setCardHeights(heights);
  }, [cards]);

  const bgClass = mode === "right" ? "bg-black" : "bg-white";
  const borderClass = mode === "right" ? "border-white" : "border-black";
  const textClass = mode === "right" ? "text-white" : "text-black";

  const frontId = cards[0].id;
  const frontHeight = cardHeights[frontId] || "auto";

  return (
    // 👇 container จะสูงเท่ากับ front card
    <div className="relative w-auto" style={{ height: frontHeight }}>
      {cards.map((card, index) => (
        <motion.div
          key={`${card.id}-${index}`}   // 👈 ใช้ id + index แทน
          ref={(el) => {
            cardRefs.current[index] = el;
          }}
          className={`absolute rounded-lg p-4 shadow-xl ${bgClass} border-2 ${borderClass} ${textClass} overflow-hidden ${card.id === frontId ? "cursor-pointer" : ""
            }`}
          style={{ transformOrigin: "top center" }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: cards.length - index,
            height: frontHeight,
          }}
          whileHover={
            card.id === frontId
              ? { scale: 1.05, zIndex: cards.length + 1 }
              : {}
          }
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="flex">
            {/* รูปพร้อมปุ่มดูรูป */}
            <div
              className="relative flex-shrink-0 
                  w-[100px] h-[100px] 
                  sm:w-[120px] sm:h-[120px] 
                  md:w-[120px] md:h-[120px] 
                  lg:w-[150px] lg:h-[150px] 
                  xl:w-[180px] xl:h-[180px]"
            >
              <Image
                src={card.image}
                alt={card.nameAlt || "Card image"} // ใช้ nameAlt หรือ fallback
                fill
                className={`rounded-lg border-2 ${borderClass} object-cover`}
              />

              <Link href={card.image} target="_blank" rel="noopener noreferrer">
                <button
                  className={`absolute bottom-2 right-2 p-1 rounded-lg border-2 border-black bg-white text-black`}
                >
                  <FaSearch size={15} />
                </button>
              </Link>
            </div>

            <div className="ml-4 flex flex-col">
              <div className=" h-[100px] sm:h-[120px] md:h-[120px] lg:h-[150px] xl:h-[180px] overflow-auto">
                <p
                  className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold ${textClass} flex items-center`}
                >
                  {card.name}
                </p>
                <div
                  className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl ${textClass}`}
                >
                  {card.content}
                </div>
                <div className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold ${textClass}`}
                >
                  {card.year || ""}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
