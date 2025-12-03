"use client";
import React from "react";
import { motion } from "framer-motion";

export const MouseAnimationBackground = ({ 
  mousePosition, 
  isMouseInSection, 
  springX, 
  springY 
}) => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Floating Grid Pattern */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(127, 255, 79, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(127, 255, 79, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: `translate(${springX.get() * 0.02}px, ${springY.get() * 0.02}px)`
        }}
        animate={{
          opacity: isMouseInSection ? 0.4 : 0.1
        }}
        transition={{ duration: 0.6 }}
      />

      {/* Dynamic Particles */}
      {[...Array(12)].map((_, idx) => (
        <motion.div
          key={idx}
          className="absolute w-1 h-1 bg-[#7FFF4F] rounded-full"
          style={{
            left: `${10 + idx * 7}%`,
            top: `${15 + (idx % 4) * 20}%`,
          }}
          animate={{
            opacity: isMouseInSection ? [0.3, 1, 0.3] : [0.1, 0.3, 0.1],
            scale: isMouseInSection ? [1, 2, 1] : [0.5, 1, 0.5],
            y: [0, -30, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 3 + idx * 0.2,
            repeat: Infinity,
            delay: idx * 0.3,
          }}
        />
      ))}

      {/* Mouse Follow Effect - Removed green glow */}
    </div>
  );
};