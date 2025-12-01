import React from 'react';
import { processData } from '../../Data/processData';
import { processImages } from '../../Helper/processHelper';

export default function ProcessSection() {
  return (
    <section className="bg-[#0a0f0a] text-[#e0ffe0] py-16 px-4 flex flex-col items-center">
      {/* Badge */}
      <span className="inline-block bg-[#1a2e1a] text-[#7fff4f] px-4 py-1 rounded-full text-xs font-semibold mb-4">
        {processData.badge}
      </span>

      {/* Heading */}
      <h2 className="text-4xl font-bold mb-2 text-center">
        How <span className="text-[#D9F5DE]">We Work</span>
      </h2>

      {/* Description */}
      <p className="max-w-2xl text-center mb-8 text-base md:text-lg text-[#D9F5DE99]">
        {processData.description}
      </p>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-8">
        {processData.steps.map((step, idx) => {
          const iconSrc = processImages[step.icon];

          return (
            <div
              key={idx}
              className="bg-[#111] border border-[#1a2e1a] rounded-xl p-6 flex flex-col gap-2 relative"
            >
              <div className="flex items-center gap-4 mb-2">
                {/* ✅ FIXED ICON */}
                <img
                  src={iconSrc?.src ?? iconSrc}
                  alt={step.title}
                  className="w-10 h-10"
                />
                <span className="text-3xl font-bold text-[#5DD149] absolute top-6 right-6">
                  {step.number}
                </span>
              </div>

              <div className="font-bold text-lg text-[#D9F5DE]">{step.title}</div>
              <div className="text-sm text-[#D9F5DE99]">{step.description}</div>

              <div className="h-1 w-full bg-[#7fff4f] rounded-full mt-4 opacity-30"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
