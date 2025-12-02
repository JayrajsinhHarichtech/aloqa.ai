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
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-[#0a0f0a] px-8 py-4 flex items-center justify-between rounded-2xl m-4 shadow-lg sticky top-0 z-50"
    >
      <a href="#hero" className="flex items-center gap-3 cursor-pointer">
        <Image src={logo} alt="Logo" width={150} height={100} priority />
      </a>

      <nav className="flex gap-8">
        {navLinks.map((link, idx) => (
          <motion.a
            key={link.label}
            href={link.href}
            whileHover={{ scale: 1.1 }}
            className="text-[#D9F5DEB2] no-underline text-base hover:text-[#7fff4f] transition-colors"
          >
            {link.label}
          </motion.a>
        ))}
      </nav>

      <motion.button
        whileHover={{ scale: 1.05 }}
        className="bg-[#5DD149] text-[#0a0f0a] px-6 py-2 font-bold rounded-lg shadow-md"
      >
        Let's Talk
      </motion.button>
    </motion.header>
  );
}
