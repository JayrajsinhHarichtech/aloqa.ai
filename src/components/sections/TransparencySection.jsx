"use client";
import React from "react";
import { motion } from "framer-motion";
import { transparencyData } from "../../Data/transparencyData";
import { transparencyImages } from "../../Helper/transparencyHelper";
import { useMouseAnimation } from "../../hooks/useMouseAnimation";
import { MouseAnimationBackground } from "../common/MouseAnimationBackground";

export default function TransparencySection() {
  const { mousePosition, isMouseInSection, springX, springY } =
    useMouseAnimation("transparency-section");

  return (
    <section
      id="transparency-section"
      className="bg-[#0a0f0a] text-[#e0ffe0] py-16 px-4 flex flex-col items-center relative overflow-hidden"
    >
      <MouseAnimationBackground
        mousePosition={mousePosition}
        isMouseInSection={isMouseInSection}
        springX={springX}
        springY={springY}
      />

      {/* CENTER TITLE */}
      <div className="w-full flex items-center justify-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-lg md:text-2xl text-white">
            Let every call turn into Opportunity
          </span>
        </motion.div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 w-full max-w-5xl justify-center mx-auto ml-55">

        {transparencyData.stats.map((stat, idx) => {
          const iconSrc = transparencyImages[stat.icon];

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.06,
                boxShadow: "0 0 22px rgba(125,255,79,0.25)",
                borderColor: "rgba(125,255,79,0.8)",
                backgroundColor: "rgba(10,20,10,0.9)",
              }}
              className="bg-[#111] border border-[#1a2e1a] rounded-xl p-6 
                         flex flex-col items-center justify-center gap-2
                         transition-all duration-300 ease-out shadow-lg "
            >
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={iconSrc?.src ?? iconSrc}
                alt={stat.label}
                className="w-10 h-10 mb-2"
              />

              <div className="text-2xl font-bold text-[#7fff4f] text-center">
                {stat.value}
              </div>

              <div className="text-xs text-[#D9F5DE] text-center">
                {stat.label}
              </div>

              <div className="text-xs text-[#D9F5DE66] text-center">
                {stat.subLabel}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
