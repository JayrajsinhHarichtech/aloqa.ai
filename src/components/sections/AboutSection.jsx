"use client";
import React from "react";
import { motion } from "framer-motion";
import { aboutData } from "../../Data/aboutData";
import { getAboutTitle } from "../../Helper/aboutHelper";

export default function AboutSection() {
  return (
    <section className="bg-[#0a0f0a] text-[#5DD149] py-16 px-4 flex flex-col items-center">

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl font-bold mb-4 text-center"
      >
        {getAboutTitle(aboutData.title)}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl text-center mb-8 text-base md:text-lg text-[#D9F5DE99]"
      >
        {aboutData.description}
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#7fff4f] text-[#0a0f0a] px-6 py-2 rounded-full font-bold text-lg shadow-lg mb-8"
      >
        {aboutData.buttonText}
      </motion.button>
    </section>
  );
}
