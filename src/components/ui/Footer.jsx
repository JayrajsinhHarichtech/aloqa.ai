import React from 'react';
import Image from 'next/image';
import logo from '../../../public/Footer.svg';
import tawwiterIcon from '../../../public/footersvg/1.svg';
import telegramIcon from '../../../public/footersvg/2.svg';
import mediumIcon from '../../../public/footersvg/3.svg';

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'Features', href: '#' },
  { label: 'Tokenomics', href: '#' },
  { label: 'How to Buy', href: '#' },
];

const communityLinks = [
  { icon: tawwiterIcon, href: 'https://twitter.com/' },
  { icon: telegramIcon, href: 'https://telegram.org/' },
  { icon: mediumIcon, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0f0a] text-[#e0ffe0] p-10 rounded-2xl m-4 shadow-lg">

      {/* 3 COLUMN LAYOUT */}
      <div className="grid grid-cols-3 gap-12 mb-10">

        {/* COLUMN 1 → LOGO + TEXT */}
        <div className="flex flex-col gap-3">
          <Image
            src={logo}
            alt="Aloqa AI Logo"
            width={360}
            height={48}
            priority
          />
          <p className="text-[14px] leading-5 text-[#D9F5DE99]">
            Revolutionary AI-powered cryptocurrency built on Solana.
            <br />Join the future of decentralized finance.
          </p>
        </div>

        {/* COLUMN 2 → QUICK LINKS */}
        <div>
          <h3 className="font-bold mb-3 text-[#D9F5DE]">QUICK LINKS</h3>
          <ul className="space-y-1">
            {quickLinks.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[#D9F5DE99] hover:text-[#7fff4f] text-[15px]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 3 → COMMUNITY */}
        <div>
          <h3 className="font-bold mb-3 text-[#D9F5DE]">COMMUNITY</h3>

          <div className="flex gap-4 mb-3">
            {communityLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="w-10 h-10 flex items-center justify-center hover:bg-[#7fff4f] transition"
              >
                <Image src={link.icon} alt="icon" width={50} height={20} />
              </a>
            ))}
          </div>

          <p className="text-[13px] text-[#D9F5DE66]">
            Join our community of 50,000+ members
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="flex justify-between items-center border-t border-[#D9F5DE33] pt-4 text-[13px] text-[#D9F5DE66]">
        <span>© 2024 Aloqa AI. All Rights Reserved.</span>

        <div className="flex gap-6">
          <a href="#" className="hover:text-[#7fff4f]">Privacy Policy</a>
          <a href="#" className="hover:text-[#7fff4f]">Terms of Service</a>
          <a href="#" className="hover:text-[#7fff4f]">Disclaimer</a>
        </div>
      </div>

    </footer>
  );
}
