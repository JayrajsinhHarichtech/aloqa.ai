"use client";
import React from "react";
import { motion } from "framer-motion";
import { transparencyData } from "../../Data/transparencyData";
import { transparencyImages } from "../../Helper/transparencyHelper";

export default function TransparencySection() {
  return (
    <section className="bg-[#0a0f0a] text-[#e0ffe0] py-16 px-4 flex flex-col items-center">

      <motion.span
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="inline-block bg-[#1a2e1a] text-[#7fff4f] px-4 py-1 rounded-full text-xs font-semibold mb-4"
      >
        {transparencyData.badge}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-4 text-center text-[#D9F5DE]"
      >
        Built for <span className="text-[#5DD149]">Transparency</span>
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 w-full max-w-5xl mb-8">
        {transparencyData.stats.map((stat, idx) => {
          const iconSrc = transparencyImages[stat.icon];

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111] border border-[#1a2e1a] rounded-xl p-6 flex flex-col items-center gap-2 shadow-lg"
            >
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={iconSrc?.src ?? iconSrc}
                alt={stat.label}
                className="w-10 h-10 mb-2"
              />

              <div className="text-2xl font-bold text-[#7fff4f]">{stat.value}</div>

              <div className="text-xs text-[#D9F5DE] text-center">{stat.label}</div>
              <div className="text-xs text-[#D9F5DE66] text-center">{stat.subLabel}</div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#111] rounded-xl p-8 w-full max-w-4xl text-center shadow-lg"
      >
        <div className="text-xl font-bold text-[#5DD149] mb-2">
          {transparencyData.highlightTitle}
        </div>
        <div className="text-base text-[#D9F5DEB2]">
          {transparencyData.highlightDesc}
        </div>
      </motion.div>
    </section>
  );
}
