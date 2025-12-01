import React from 'react';
import Image from "next/image";
import heroRight from "../../../public/homepage/Container.svg";

export default function HeroSection() {
  return (
    <section className="
      relative 
      flex flex-col md:flex-row 
      items-center justify-between 
      px-10 py-10
      text-[#D9F5DE]
      bg-[#0A0F0A]
      overflow-hidden
    ">

      {/* GREEN GLOW LEFT SIDE */}
      <div className="
        absolute left-0 top-0 bottom-0 
        w-[40%]
        bg-[radial-gradient(circle_at_left,#5DD1490D_0%,transparent_70%)]
        pointer-events-none
      "></div>

      {/* LEFT CONTENT */}
      <div className="relative z-10 flex-1 max-w-xl flex flex-col gap-8">

        {/* LOGO TEXT */}
        <h1 className="text-7xl font-extrabold leading-tight">
          aloqa.<span className="text-[#7FFF4F]">ai</span>
        </h1>

        {/* PARAGRAPH */}
        <p className="text-lg text-[#D9F5DE99] leading-relaxed">
          Handle every caller without limits — faster responses, zero missed 
          opportunities, and seamless conversations no matter where your 
          customers are or what language they speak.
        </p>

        {/* BUTTON */}
        <button className="
          bg-[#7FFF4F] 
          text-[#0A0F0A] 
          px-7 py-3 
          rounded-full 
          font-bold text-lg 
          shadow-xl 
          w-fit
        ">
          Learn More →
        </button>
      </div>

      {/* RIGHT SIDE BIG AI IMAGE */}
      <div className="relative z-10 flex-1 flex items-center justify-center mt-10 md:mt-0">
        <Image 
          src={heroRight}
          alt="AI Agent Visual"
          className="w-full max-w-2xl"
          priority
        />
      </div>

    </section>
  );
}
