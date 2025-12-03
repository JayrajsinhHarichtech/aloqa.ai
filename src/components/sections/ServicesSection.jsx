"use client";
import React from "react";
import { motion } from "framer-motion";
import { servicesData } from "../../Data/servicesData";
import { servicesImages } from "../../Helper/servicesHelper";
import { useMouseAnimation } from "../../hooks/useMouseAnimation";
import { MouseAnimationBackground } from "../common/MouseAnimationBackground";

export default function ServicesSection() {
  const { mousePosition, isMouseInSection, springX, springY } =
    useMouseAnimation("services-section");

  return (
    <section
      id="services-section"
      className="bg-[#0a0f0a] text-[#e0ffe0] py-16 px-4 flex flex-col items-center relative overflow-hidden"
    >
      <MouseAnimationBackground
        mousePosition={mousePosition}
        isMouseInSection={isMouseInSection}
        springX={springX}
        springY={springY}
      />

      {/* MAIN TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl font-bold mb-4 text-center"
      >
        Our <span className="text-[#5DD149]">Services</span>
      </motion.h2>

      {/* DESCRIPTION */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl text-center mb-8 text-base md:text-lg text-[#D9F5DE99]"
      >
        {servicesData.description}
      </motion.p>

      {/* SERVICE CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {servicesData.cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 25px rgba(125, 255, 79, 0.25)",
              borderColor: "rgba(125,255,79,0.8)",
              backgroundColor: "rgba(10, 20, 10, 0.9)",
            }}
            className="
              bg-[#020D0066] border border-[#1a2e1a] 
              rounded-2xl p-6 
              flex flex-col items-start gap-3 
              shadow-lg transition-all duration-300 ease-out
            "
          >
            {/* ICON */}
            <img
              src={card.icon.src ?? card.icon}
              alt={card.title}
              className="w-12 h-12 mb-2"
            />

            {/* TITLE */}
            <div className="font-bold text-lg text-[#D9F5DE]">
              {card.title}
            </div>

            {/* DESCRIPTION */}
            <div className="text-sm text-[#D9F5DE99]">
              {card.description}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
