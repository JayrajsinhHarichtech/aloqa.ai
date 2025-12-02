"use client";
import React from "react";
import { motion } from "framer-motion";
import { processData } from "../../Data/processData";
import { processImages } from "../../Helper/processHelper";

export default function ProcessSection() {
  return (
    <section className="bg-[#0a0f0a] text-[#e0ffe0] py-16 px-4 flex flex-col items-center">

      <motion.span
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="inline-block bg-[#1a2e1a] text-[#7fff4f] px-4 py-1 rounded-full text-xs font-semibold mb-4"
      >
        {processData.badge}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-2 text-center"
      >
        How <span className="text-[#D9F5DE]">We Work</span>
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
              className="bg-[#111] border border-[#1a2e1a] rounded-xl p-6 flex flex-col gap-2 relative"
            >
              <div className="flex items-center gap-4 mb-2">

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

              <div className="font-bold text-lg text-[#D9F5DE]">{step.title}</div>
              <div className="text-sm text-[#D9F5DE99]">{step.description}</div>

              <div className="h-1 w-full bg-[#7fff4f] rounded-full mt-4 opacity-30"></div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
