import React from "react";
import { transparencyData } from "../../Data/transparencyData";
import { transparencyImages } from "../../Helper/transparencyHelper";

export default function TransparencySection() {
  return (
    <section className="bg-[#0a0f0a] text-[#e0ffe0] py-16 px-4 flex flex-col items-center">
      <span className="inline-block bg-[#1a2e1a] text-[#7fff4f] px-4 py-1 rounded-full text-xs font-semibold mb-4">
        {transparencyData.badge}
      </span>

      <h2 className="text-4xl font-bold mb-4 text-center text-[#D9F5DE]">
        Built for <span className="text-[#5DD149]">Transparency</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 w-full max-w-5xl mb-8">
        {transparencyData.stats.map((stat, idx) => {
          const iconSrc = transparencyImages[stat.icon];

          return (
            <div
              key={idx}
              className="bg-[#111] border border-[#1a2e1a] rounded-xl p-6 flex flex-col items-center gap-2"
            >
              {/* 🔥 FIXED ICON */}
              <img
                src={iconSrc?.src ?? iconSrc}
                alt={stat.label}
                className="w-10 h-10 mb-2"
              />

              <div className="text-2xl font-bold text-[#7fff4f]">
                {stat.value}
              </div>

              <div className="text-xs text-[#D9F5DE] text-center">
                {stat.label}
                <br />
                
              <div className="text-xs text-[#D9F5DE66] text-center">
                {stat.subLabel}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-[#111] rounded-xl p-8 w-full max-w-4xl text-center">
        <div className="text-xl font-bold text-[#5DD149] mb-2">
          {transparencyData.highlightTitle}
        </div>
        <div className="text-base text-[#D9F5DEB2]">
          {transparencyData.highlightDesc}
        </div>
      </div>
    </section>
  );
}
