import React from 'react';
import { whyChooseUsData } from '../../Data/whyChooseUsData';
import { whyChooseUsImages } from '../../Helper/whyChooseUsHelper';

export default function WhyChooseUsSection() {
  return (
    <section className="bg-[#0a0f0a] text-[#e0ffe0] py-16 px-4 flex flex-col items-center">

      {/* Badge */}
      <span className="inline-block bg-[#1a2e1a] text-[#7fff4f] px-4 py-1 rounded-full text-xs font-semibold mb-4">
        {whyChooseUsData.badge}
      </span>

      {/* Heading */}
      <h2 className="text-4xl font-bold mb-2 text-center">
        Why <span className="text-[#D9F5DE]">Choose Us</span>
      </h2>

      {/* Description */}
      <p className="max-w-2xl text-center mb-8 text-base md:text-lg text-[#D9F5DE99]">
        {whyChooseUsData.description}
      </p>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl mb-8 gap-8">

        {/* LEFT — Robot Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={whyChooseUsImages.robot?.src ?? whyChooseUsImages.robot}
            alt="AI Robot"
            className="w-72 md:w-96"
          />
        </div>

        {/* RIGHT — Points */}
        <div className="flex-1 flex flex-col gap-6">
          {whyChooseUsData.points.map((point, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <span className="text-[#D9D9D9] text-lg">•</span>
              <span className="text-base text-[#D9F5DEB2]">{point}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Stats Box */}
      <div className="bg-[#113716] rounded-xl p-8 w-full max-w-4xl text-center mt-8">
        <div className="text-xl font-bold text-[#5DD149] mb-2">
          {whyChooseUsData.Title}
        </div>
        
         <div className="text-xl font-bold text-[#D9F5DEB2] mb-2">
          {whyChooseUsData.subtitle}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {whyChooseUsData.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="text-2xl font-bold text-[#D9F5DEB2]">{stat.value}</div>
              <div className="text-xs text-[#D9F5DEB2]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
