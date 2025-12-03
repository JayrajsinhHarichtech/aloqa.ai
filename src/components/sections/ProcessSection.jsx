"use client";
import React from "react";
import { motion } from "framer-motion";
import { processData } from "../../Data/processData";
import { processImages } from "../../Helper/processHelper";
import { useMouseAnimation } from "../../hooks/useMouseAnimation";
import { MouseAnimationBackground } from "../common/MouseAnimationBackground";

export default function ProcessSection() {
  const { mousePosition, isMouseInSection, springX, springY } =
    useMouseAnimation("process-section");

  return (
    <section
      id="process-section"
      className="bg-[#0a0f0a] text-[#e0ffe0] py-16 px-4 flex flex-col items-center relative overflow-hidden"
    >
      <MouseAnimationBackground
        mousePosition={mousePosition}
        isMouseInSection={isMouseInSection}
        springX={springX}
        springY={springY}
      />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-2 text-center"
      >
        How We <span className="text-[#5DD149]">Work</span>
      </motion.h2>

      <p className="max-w-2xl text-center mb-8 text-base md:text-lg text-[#D9F5DE99]">
        {processData.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-8">
        {processData.steps.map((step, idx) => {
          const iconSrc = processImages[step.icon];

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.06,
                boxShadow: "0 0 25px rgba(125,255,79,0.25)",
                borderColor: "rgba(125,255,79,0.8)",
                backgroundColor: "rgba(10,20,10,0.9)",
              }}
              className="bg-[#111] border border-[#1a2e1a] rounded-xl p-6 
                         flex flex-col gap-3 transition-all duration-300 ease-out"
            >
              {/* ICON + NUMBER */}
              <div className="flex items-center gap-4 mb-2 relative">
                <motion.img
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src={iconSrc?.src ?? iconSrc}
                  alt={step.title}
                  className="w-10 h-10"
                />

                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="text-3xl font-bold text-[#5DD149] absolute top-6 right-6"
                >
                  {step.number}
                </motion.span>
              </div>

              {/* TITLE */}
              <div className="font-bold text-lg text-[#D9F5DE]">
                {step.title}
              </div>

              {/* DESCRIPTION */}
              <div className="text-sm text-[#D9F5DE99]">
                {step.description}
              </div>

              {/* ANIMATED LINES */}
              <div
                className={`h-1 rounded-full mt-4 opacity-30 bg-[#7fff4f] 
                  ${
                    idx === 0 ? "w-full" :
                    idx === 1 ? "w-[50%]" :
                    idx === 2 ? "w-[30%]" :
                    idx === 3 ? "w-[20%]" :
                    idx === 4 ? "w-[10%]" :
                    idx === 5 ? "w-[10%]" :
                    "w-full"
                  }
                `}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
