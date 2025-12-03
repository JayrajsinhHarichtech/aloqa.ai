"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import heroRight from "../../../public/homepage/Container.svg";
import logo from "../../../public/homepage/logo.svg";
import { useMouseAnimation } from "../../hooks/useMouseAnimation";
import { MouseAnimationBackground } from "../common/MouseAnimationBackground";

// Typing animation text
const typingTexts = [
  "Handle every caller without limits",
  "Faster responses, zero missed opportunities", 
  "Seamless conversations worldwide"
];

export default function HeroSection() {
  const { mousePosition, isMouseInSection, springX, springY } = useMouseAnimation('hero-section');

  return (
    <section
      id="hero-section"
      className="
      relative flex flex-col md:flex-row 
      items-center justify-between 
      px-10 pt-0 pb-10  /* ⬅ TOP padding removed */
      text-[#D9F5DE] bg-[#0A0F0A]
      overflow-hidden 
      mt-0 /* ⬅ NO top margin */
      "
    >
      <MouseAnimationBackground 
        mousePosition={mousePosition}
        isMouseInSection={isMouseInSection}
        springX={springX}
        springY={springY}
      />
      {/* LEFT GLOW */}
      <div
        className="
        absolute left-0 top-0 bottom-0 
        w-[40%] bg-[radial-gradient(circle_at_left,#5DD1490D_0%,transparent_70%)]
        pointer-events-none"
      ></div>

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 flex-1 max-w-xl flex flex-col gap-8"
      >
     <Image src={logo} alt="Logo" width={200} height={48} />

        <p className="text-lg text-[#D9F5DE99] leading-relaxed">
          Handle every caller without limits faster responses, zero missed
          opportunities, and seamless conversations no matter where your
          customers are or what language they speak.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            bg-[#7FFF4F] text-[#0A0F0A] px-7 py-3 
            rounded-full font-bold text-lg shadow-xl w-fit">
        
          Learn More →
        </motion.button>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 flex-1 flex items-center justify-center mt-6 md:mt-0"
      >
        <Image
          src={heroRight}
          alt="AI Agent Visual"
          className="w-full max-w-2xl"
          priority
        />
      </motion.div>
    </section>
  );
}
