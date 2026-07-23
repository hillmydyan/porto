"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "motion/react";

interface ScrollVelocityProps {
  texts?: string[];
  velocity?: number;
  className?: string;
  numCopies?: number;
  damping?: number;
  stiffness?: number;
  // Legacy support
  children?: React.ReactNode;
  baseVelocity?: number;
}

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

function ParallaxText({
  children,
  baseVelocity = 100,
  className = "",
  numCopies = 6,
  damping = 50,
  stiffness = 400
}: {
  children: React.ReactNode;
  baseVelocity: number;
  className?: string;
  numCopies?: number;
  damping?: number;
  stiffness?: number;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping,
    stiffness
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    // Normalizing velocity=110 to behave like a standard speed
    let moveBy = directionFactor.current * (baseVelocity / 50) * (delta / 1000) * 10;

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * Math.abs(moveBy) * Math.abs(velocityFactor.get());
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={`overflow-hidden m-0 whitespace-nowrap flex flex-nowrap ${className}`}>
      <motion.div className="flex whitespace-nowrap gap-8 flex-nowrap items-center uppercase tracking-tighter" style={{ x }}>
        {Array.from({ length: numCopies }).map((_, i) => (
          <span key={i} className="block pe-8">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function ScrollVelocity({ 
  texts = [], 
  velocity = 110, 
  className = "",
  numCopies = 6,
  damping = 50,
  stiffness = 400,
  children,
  baseVelocity
}: ScrollVelocityProps) {
  
  // Legacy support for single child
  if (children) {
    return (
      <ParallaxText 
        baseVelocity={baseVelocity || (velocity / 50)} 
        className={className} 
        numCopies={numCopies} 
        damping={damping} 
        stiffness={stiffness}
      >
        {children}
      </ParallaxText>
    );
  }

  if (!texts.length) return null;
  
  return (
    <div className="flex flex-col gap-3">
      {texts.map((text, i) => {
        // First row uses standard velocity, second row uses negative velocity (opposite direction)
        const currentVelocity = i % 2 === 0 ? velocity : -velocity;
        return (
          <ParallaxText 
            key={i} 
            baseVelocity={currentVelocity} 
            className={className}
            numCopies={numCopies}
            damping={damping}
            stiffness={stiffness}
          >
            {text}
          </ParallaxText>
        );
      })}
    </div>
  );
}
