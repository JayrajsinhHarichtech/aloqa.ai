import React from 'react';
import Image from 'next/image';
import logo from '../../../public/Logo.svg';

const navLinks = [
  { label: 'About Us', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Process', href: '#' },
  { label: 'Why Choose Us', href: '#' },
  { label: 'Get in Touch', href: '#' },
];

export default function Header() {
  return (
    <header className="bg-[#0a0f0a] px-8 py-4 flex items-center justify-between rounded-2xl m-4 shadow-lg">
      
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <Image
          src={logo}
          alt="Aloqa AI Logo"
          width={150}
          height={100}
          className="rounded-md"
          priority
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-8">
        {navLinks.map(link => (
          <a
            key={link.label}
            href={link.href}
            className="text-[#D9F5DEB2] no-underline text-base font-Outfit hover:text-[#7fff4f] transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Button */}
      <button className="bg-[#5DD149] text-[#0a0f0a] border-none rounded-lg px-6 py-2 font-bold text-base cursor-pointer shadow-md">
        Let's Talk
      </button>
    </header>
  );
}
