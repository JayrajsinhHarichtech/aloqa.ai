"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { letsTalkData } from "../../Data/letsTalkData";
import { contractData } from "../../Data/contractData";

export default function LetsTalkSection() {
  const [form, setForm] = useState({ name: "", number: "", email: "", company: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-[#0a0f0a] text-[#e0ffe0] py-16 px-4 flex flex-col items-center">

      <div className="flex flex-col md:flex-row w-full max-w-5xl gap-8 mb-10">
        
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col justify-center"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#5DD149]">Let's Talk</h2>
          <p className="mb-8 text-base text-[#D9F5DEB2] max-w-md">{letsTalkData.description}</p>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex-1 bg-[#111] border border-[#5DD1494D] rounded-xl p-8 shadow-lg"
        >
          <h3 className="text-xl font-bold mb-6 text-[#FFFFFF]">Demo Call</h3>

          <motion.form
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="flex flex-col gap-4"
          >
            {["name", "number", "email", "company"].map((field, idx) => (
              <motion.input
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                name={field}
                value={form[field]}
                onChange={handleChange}
                placeholder={
                  field === "name"
                    ? "Enter your full name"
                    : field === "number"
                    ? "Enter your phone number"
                    : field === "email"
                    ? "Enter your email address"
                    : "Tell us about your requirements..."
                }
                className="bg-[#0a0f0a] border border-[#5DD1494D] rounded px-4 py-2 text-[#e0ffe0]"
              />
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="bg-[#80E032] text-[#FFFFFF] px-6 py-2 rounded font-bold text-lg mt-4"
            >
              Book Demo
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
