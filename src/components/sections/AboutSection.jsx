import React from 'react';
import { aboutData } from '../../Data/aboutData';
import { getAboutTitle } from '../../Helper/aboutHelper';

export default function AboutSection() {
  return (
    <section className="bg-[#0a0f0a] text-[#5DD149] py-16 px-4 flex flex-col items-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
        {getAboutTitle(aboutData.title)}
      </h2>
      <p className="max-w-4xl text-center mb-8 text-base md:text-lg text-[#D9F5DE99]">
        {aboutData.description}
      </p>
      <button className="bg-[#7fff4f] text-[#0a0f0a] px-6 py-2 rounded-full font-bold text-lg shadow-lg mb-8">{aboutData.buttonText}</button>
    </section>
  );
}
