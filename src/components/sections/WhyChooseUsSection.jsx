"use client";
import React from "react";
import { motion } from "framer-motion";
import { whyChooseUsData } from "../../Data/whyChooseUsData";
import { whyChooseUsImages } from "../../Helper/whyChooseUsHelper";
import { useMouseAnimation } from "../../hooks/useMouseAnimation";
import { MouseAnimationBackground } from "../common/MouseAnimationBackground";

export default function WhyChooseUsSection() {
  const { mousePosition, isMouseInSection, springX, springY } = useMouseAnimation('whychooseus-section');

  return (
    <section id="whychooseus-section" className="bg-[#0a0f0a] text-[#e0ffe0] py-20 px-6 relative overflow-hidden">
      <MouseAnimationBackground 
        mousePosition={mousePosition}
        isMouseInSection={isMouseInSection}
        springX={springX}
        springY={springY}
      />

      {/* CENTER TITLE */}
      <div className="flex flex-col items-center text-center w-full">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-4 "
        >
          Why <span className="text-[#5DD149]">Choose Us</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-2xl mx-auto mb-8 text-base md:text-lg text-[#D9F5DE99] "
        >
          {whyChooseUsData.description}
        </motion.p>
      </div>

      {/* MAIN LAYOUT */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-12 max-w-6xl mx-auto">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex items-center justify-center"
        >
          <img
            src={whyChooseUsImages.robot?.src ?? whyChooseUsImages.robot}
            alt="AI Robot"
            className="w-72 md:w-196"
          />
        </motion.div>

        {/* RIGHT TIMELINE */}
        <div className="relative flex-1 pt-4">

          {/* VERTICAL LINE */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#2a402a]"></div>

          {/* TIMELINE ITEMS */}
          <div className="flex flex-col gap-8 pl-8">
            {whyChooseUsData.points.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* DOT - Aligned with Title */}
                <div className="absolute -left-[2.15rem] top-[0.35rem] w-3 h-3 bg-white rounded-full z-10"></div>

                {/* TITLE */}
                <h3 className="text-[#7FFF4F] font-bold text-xl mb-2">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm text-[#d9f5deaa] leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}