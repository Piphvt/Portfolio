"use client";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  mode: 'center' | 'left' | 'right';
  items: Card[];
  offset?: number;
  scaleFactor?: number;
};

type Card = {
  id: number;
  name: string;
  image: string;
  content: React.ReactNode;
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
    }, 10000);
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

  const bgClass = mode === 'right' ? 'bg-black' : 'bg-white';
  const borderClass = mode === 'right' ? 'border-white' : 'border-black';
  const textClass = mode === 'right' ? 'text-white' : 'text-black';

  const frontId = cards[0].id;
  const frontHeight = cardHeights[frontId] || 'auto';

  return (
    <div className="relative w-auto">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          ref={el => { cardRefs.current[index] = el; }}
          className={`absolute rounded-lg p-4 shadow-xl ${bgClass} border-2 ${borderClass} ${textClass} overflow-hidden ${card.id === frontId ? 'cursor-pointer' : ''}`}
          style={{ transformOrigin: "top center" }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: cards.length - index,
            height: frontHeight,
          }}
          whileHover={card.id === frontId ? { scale: 1.05, zIndex: cards.length + 1 } : {}}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="flex">
            {/* รูป */}
            <Image
              src={card.image}
              alt={card.name}
              width={120}
              height={120}
              className={`border-2 rounded-lg ${borderClass} 
              md:w-[120px] md:h-[120px]
              lg:w-[150px] lg:h-[150px] 
              xl:w-[180px] xl:h-[180px]`}
            />

            <div className="ml-4 flex flex-col">
              <div className=" h-[95px] lg:h-[120px] xl:h-[145px] overflow-auto">
                <p className={`text-base lg:text-lg xl:text-xl font-bold ${textClass}`}>{card.name}</p>
                <div className={`text-sm lg:text-base xl:text-lg leading-relaxed ${textClass}`}>{card.content}</div>
              </div>

              <div className="mt-2 h-[25px] lg:h-[30px] xl:h-[25px] flex items-center">
                <Link
                  href="/projects"
                  className={`text-base lg:text-lg xl:text-xl font-bold ${textClass}`}
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
