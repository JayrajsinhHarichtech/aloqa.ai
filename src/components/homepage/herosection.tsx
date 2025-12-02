"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import heroRight from "../../../public/homepage/Container.svg";

export default function HeroSection() {
  return (
    <section
      className="
      relative flex flex-col md:flex-row 
      items-center justify-between 
      px-10 py-10 text-[#D9F5DE] bg-[#0A0F0A]
      overflow-hidden"
    >
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
        <h1 className="text-7xl font-extrabold leading-tight">
          aloqa.<span className="text-[#7FFF4F]">ai</span>
        </h1>

        <p className="text-lg text-[#D9F5DE99] leading-relaxed">
          Handle every caller without limits — faster responses, zero missed
          opportunities, and seamless conversations no matter where your
          customers are or what language they speak.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            bg-[#7FFF4F] text-[#0A0F0A] px-7 py-3 
            rounded-full font-bold text-lg shadow-xl w-fit"
        >
          Learn More →
        </motion.button>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 flex-1 flex items-center justify-center mt-10 md:mt-0"
      >
        <Image src={heroRight} alt="AI Agent Visual" className="w-full max-w-2xl" priority />
      </motion.div>
    </section>
  );
}
