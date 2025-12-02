"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../../public/Footer.svg";
import tawwiterIcon from "../../../public/footersvg/1.svg";
import telegramIcon from "../../../public/footersvg/2.svg";
import mediumIcon from "../../../public/footersvg/3.svg";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#" },
  { label: "Tokenomics", href: "#" },
  { label: "How to Buy", href: "#" },
];

const communityLinks = [
  { icon: tawwiterIcon, href: "https://twitter.com/" },
  { icon: telegramIcon, href: "https://telegram.org/" },
  { icon: mediumIcon, href: "#" },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#0a0f0a] text-[#e0ffe0] p-10 rounded-2xl m-4 shadow-lg"
    >
      <div className="grid grid-cols-3 gap-12 mb-10">

        <div className="flex flex-col gap-3">
          <Image src={logo} alt="Logo" width={360} height={48} />
          <p className="text-[14px] text-[#D9F5DE99]">
            Revolutionary AI-powered cryptocurrency built on Solana.
             <br />Join the future of decentralized finance.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="font-bold mb-3 text-[#D9F5DE]">QUICK LINKS</h3>

          <ul className="space-y-1">
            {quickLinks.map((link, idx) => (
              <motion.li
                key={link.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <a className="text-[#D9F5DE99] hover:text-[#7fff4f]">
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <div>
          <h3 className="font-bold mb-3 text-[#D9F5DE]">COMMUNITY</h3>

          <div className="flex gap-4 mb-3">
            {communityLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                whileHover={{ scale: 1.2 }}
                className="w-10 h-10 flex items-center justify-center"
              >
                <Image src={link.icon} alt="icon" width={50} height={20} />
              </motion.a>
            ))}
          </div>

          <p className="text-[13px] text-[#D9F5DE66]">
            Join our community of 50,000+ members
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex justify-between items-center border-t border-[#D9F5DE33] pt-4 text-[13px] text-[#D9F5DE66]"
      >
        <span>© 2024 Aloqa AI. All Rights Reserved.</span>

        <div className="flex gap-6">
          <a className="hover:text-[#7fff4f]">Privacy Policy</a>
          <a className="hover:text-[#7fff4f]">Terms of Service</a>
          <a className="hover:text-[#7fff4f]">Disclaimer</a>
        </div>
      </motion.div>
    </motion.footer>
  );
}
