"use client";
import React from "react";
import { motion } from "framer-motion";
import { servicesData, getServiceTitle } from "../../Data/servicesData";

export default function ServicesSection() {
  return (
    <section className="bg-[#0a0f0a] text-[#e0ffe0] py-16 px-4 flex flex-col items-center">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl font-bold mb-4 text-center"
      >
        {getServiceTitle()}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl text-center mb-8 text-base md:text-lg text-[#D9F5DE99]"
      >
        {servicesData.description}
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {servicesData.cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#111] border border-[#1a2e1a] rounded-xl p-6 flex flex-col items-start gap-2 shadow-lg"
          >
            <img
              src={card.icon.src ?? card.icon}
              alt={card.title}
              className="w-12 h-12 mb-2"
            />
            <div className="font-bold text-lg text-[#D9F5DE]">
              {card.title}
            </div>
            <div className="text-sm text-[#D9F5DE99]">
              {card.description}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
