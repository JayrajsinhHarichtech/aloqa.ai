import React from "react";
import { servicesData, getServiceTitle } from "../../Data/servicesData";

export default function ServicesSection() {
  return (
    <section className="bg-[#0a0f0a] text-[#e0ffe0] py-16 px-4 flex flex-col items-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
        {getServiceTitle()}
      </h2>

      <p className="max-w-2xl text-center mb-8 text-base md:text-lg text-[#D9F5DE99]">
        {servicesData.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {servicesData.cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-[#111] border border-[#1a2e1a] rounded-xl p-6 flex flex-col items-start gap-2"
          >
            <img
              src={card.icon.src ?? card.icon}
              alt={card.title}
              className="w-12 h-12 mb-2"
            />
            <div className="font-bold text-lg text-[#D9F5DE]">
              {card.title}
            </div>
            <div className="text-sm text-[#D9F5DE99]">
              {card.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
