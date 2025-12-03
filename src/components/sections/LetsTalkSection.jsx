"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { letsTalkData } from "../../Data/letsTalkData";
import { useMouseAnimation } from "../../hooks/useMouseAnimation";
import { MouseAnimationBackground } from "../common/MouseAnimationBackground";

export default function LetsTalkSection() {
  const { mousePosition, isMouseInSection, springX, springY } = useMouseAnimation('letstalk-section');
  
  const [form, setForm] = useState({
    name: "",
    number: "",
    email: "",
    company: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setSuccess("");

    const payload = {
      name: form.name,
      email: form.email,
      mobile: form.number,
      message: form.company,
    };

    try {
      const res = await fetch("http://localhost:5000/api/get", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSuccess("Demo booked successfully! Our team will contact you soon.");
        setForm({ name: "", number: "", email: "", company: "" });

        setTimeout(() => setSuccess(""), 3000);
      } else {
        alert("Please fill all fields properly.");
      }
    } catch (error) {
      alert("Server error.");
    }

    setLoading(false);
  };

  return (
    <section id="letstalk-section" className="bg-[#0a0f0a] text-[#e0ffe0] py-24 px-6 flex justify-center relative overflow-hidden">
      <MouseAnimationBackground 
        mousePosition={mousePosition}
        isMouseInSection={isMouseInSection}
        springX={springX}
        springY={springY}
      />

      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-16 relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col justify-center"
        >
          <h2 className="text-5xl font-extrabold mb-6 text-white ">
            Let's Talk
          </h2>

          <p className="text-lg text-[#D9F5DE99] leading-relaxed max-w-lg ">
            {letsTalkData.description}
          </p>
        </motion.div>

        {/* RIGHT FORM CARD */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9 }}
  className="flex-1 bg-[#0b0f0b] border border-[#1b3b1b] rounded-3xl p-6 shadow-xl relative"
>
  {/* CLOSE ICON */}
  <div className="absolute top-4 right-4 text-[#aaa] text-xl cursor-pointer">
    ✕
  </div>

  <h3 className="text-2xl font-bold mb-5 text-[#5DD149] ">Demo Call</h3>

  {/* FORM FIELDS */}
  <div className="flex flex-col gap-4">

    {/* NAME */}
    <div className="flex flex-col gap-1">
      <label className="text-xs text-[#D9F5DE99] ">Name</label>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Enter your full name"
        className="bg-[#111] border border-[#1a2e1a] rounded-lg px-3 py-2 text-[#e0ffe0] "
      />
    </div>

    {/* NUMBER */}
    <div className="flex flex-col gap-1">
      <label className="text-xs text-[#D9F5DE99]">Number</label>

      <div className="flex gap-2">
        <select
          className="bg-[#111] border border-[#1a2e1a] rounded-lg px-2 py-2 text-[#e0ffe0] w-16 text-sm"
        >
          <option>+91</option>
        </select>

        <input
          name="number"
          value={form.number}
          onChange={handleChange}
          placeholder="Enter your phone number"
          className="flex-1 bg-[#111] border border-[#1a2e1a] rounded-lg px-3 py-2 text-[#e0ffe0]"
        />
      </div>
    </div>

    {/* EMAIL */}
    <div className="flex flex-col gap-1">
      <label className="text-xs text-[#D9F5DE99]">Email</label>
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Enter your email address"
        className="bg-[#111] border border-[#1a2e1a] rounded-lg px-3 py-2 text-[#e0ffe0]"
      />
    </div>

    {/* COMPANY */}
    <div className="flex flex-col gap-1">
      <label className="text-xs text-[#D9F5DE99]">Company Name</label>
      <input
        name="company"
        value={form.company}
        onChange={handleChange}
        placeholder="Tell us about your requirements..."
        className="bg-[#111] border border-[#1a2e1a] rounded-lg px-3 py-2 text-[#e0ffe0]"
      />
    </div>

    {/* BUTTON */}
    <motion.button
      whileHover={{ scale: 1.05 }}
      onClick={handleSubmit}
      disabled={loading}
      className="bg-gradient-to-r from-[#6EEB4A] to-[#48C435] text-black font-bold py-2 rounded-full text-base mt-3 shadow-lg"
    >
      {loading ? "Sending..." : "Book Demo"}
    </motion.button>

    {/* SUCCESS MESSAGE */}
    {success && (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-green-400 mt-2 text-xs"
      >
        {success}
      </motion.p>
    )}
  </div>
</motion.div>

      </div>
    </section>
  );
}
