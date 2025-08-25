'use client';

import React, { useEffect, useRef, useState } from 'react';
import createGlobe, { COBEOptions } from 'cobe';
import { useMotionValue, useSpring } from 'motion/react';
import { cn } from '@/lib/utils';

const MOVEMENT_DAMPING = 1400;

const DEFAULT_GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
};

interface GlobeProps {
  className?: string;
  config?: COBEOptions;
  isLeftMode?: boolean;
  maxSize?: number; // ตัวเลือก max width/height
}

export const Globe: React.FC<GlobeProps> = React.memo(function Globe({
  className,
  config = DEFAULT_GLOBE_CONFIG,
  isLeftMode = false,
  maxSize = 600,
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);
  const pointerInteracting = useRef<number | null>(null);
  const r = useMotionValue(0);
  const rs = useSpring(r, { mass: 1, damping: 30, stiffness: 100 });
  const [size, setSize] = useState(0);
  let phi = 0;

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current)
      canvasRef.current.style.cursor = value !== null ? 'grabbing' : 'grab';
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null)
      r.set(r.get() + (clientX - pointerInteracting.current) / MOVEMENT_DAMPING);
  };

  // responsive canvas size ผ่าน ResizeObserver
  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setSize(Math.min(width, height, maxSize));
      }
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [maxSize]);

  const createGlobeInstance = () => {
    if (!canvasRef.current || size === 0) return;
    globeRef.current?.destroy();

    globeRef.current = createGlobe(canvasRef.current, {
      ...config,
      width: size * 2,
      height: size * 2,
      glowColor: isLeftMode ? [0, 0, 0] : config.glowColor,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.005;
        state.phi = phi + rs.get();
        state.width = size * 2;
        state.height = size * 2;
      },
    });

    if (canvasRef.current) canvasRef.current.style.opacity = '1';
  };

  useEffect(() => {
    createGlobeInstance();
    return () => globeRef.current?.destroy();
  }, [size, config, isLeftMode, rs]);

  return (
    <div
      ref={containerRef}
      className={cn('relative w-full h-full max-w-full max-h-full flex justify-center', className)}
      style={{ aspectRatio: '1 / 1' }} // ทำให้เป็นจตุรัส
    >
      <canvas
        ref={canvasRef}
        width={size * 2}
        height={size * 2}
        style={{ width: size, height: size }}
        className="block opacity-0 transition-opacity duration-500"
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}, (prev, next) => {
  return prev.className === next.className && prev.config === next.config;
});
