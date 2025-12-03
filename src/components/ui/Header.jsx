"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../../public/Logo.svg";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why Choose Us", href: "#whychooseus" },
  { label: "Get in Touch", href: "#letstalk" },
];

export default function Header() {
  return (
    <motion.header
      initial={{ 
        opacity: 0, 
        y: -50,
        rotateX: -45,
        scale: 0.9 
      }}
      animate={{ 
        opacity: 1, 
        y: 0,
        rotateX: 0,
        scale: 1 
      }}
      whileHover={{ 
        rotateX: 5,
        z: 30,
        boxShadow: "0 30px 80px rgba(127, 255, 79, 0.15)"
      }}
      transition={{ 
        duration: 0.8,
        type: "spring",
        stiffness: 120
      }}
      className="
        bg-[#050b05]
        border border-[#1f3c1f]
        rounded-3xl
        px-10 py-4
        m-4
        shadow-lg
        sticky top-0 z-50
        flex items-center
        group
        overflow-hidden
        backdrop-blur-sm
      "
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* 3D Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#7FFF4F]/5 to-transparent opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.6 }}
      />

      {/* 3D Enhanced Logo */}
      <motion.a 
        href="#hero" 
        className="flex items-center cursor-pointer relative z-10"
        whileHover={{ 
          scale: 1.1,
          rotateY: 10,
          filter: "drop-shadow(0 0 20px rgba(127, 255, 79, 0.6))"
        }}
        transition={{ duration: 0.3 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <Image src={logo} alt="Logo" width={130} height={90} priority />
      </motion.a>

      {/* Navigation + Button Right */}
      <div className="flex items-center gap-10 ml-auto">
        <nav className="flex gap-10">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{ scale: 1.1 }}
              className="text-[#D9F5DEB2] text-base hover:text-[#7fff4f] transition "
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* Right Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-[#5DD149] text-[#0a0f0a] px-7 py-2 font-semibold rounded-xl shadow-md "
        >
          Let's Talk
        </motion.button>
      </div>
    </motion.header>
  );
}
