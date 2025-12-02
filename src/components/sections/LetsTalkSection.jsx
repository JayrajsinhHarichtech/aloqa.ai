"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { letsTalkData } from "../../Data/letsTalkData";

export default function LetsTalkSection() {
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

  // 📌 SUBMIT FORM → Send email
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

      const data = await res.json();

      if (res.ok) {
        setSuccess("Demo booked successfully! Our team will contact you soon.");
        setForm({ name: "", number: "", email: "", company: "" });

        // 🔥 Auto-hide message after 3 seconds
        setTimeout(() => {
          setSuccess("");
        }, 3000);
      } else {
        alert("Please fill all fields properly.");
      }
    } catch (error) {
      alert("Server error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <section className="bg-[#0a0f0a] text-[#e0ffe0] py-16 px-4 flex flex-col items-center">

      <div className="flex flex-col md:flex-row w-full max-w-5xl gap-8 mb-10">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col justify-center"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#5DD149]">Let's Talk</h2>
          <p className="mb-8 text-base text-[#D9F5DEB2] max-w-md">
            {letsTalkData.description}
          </p>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex-1 bg-[#111] border border-[#5DD1494D] rounded-xl p-8 shadow-lg"
        >
          <h3 className="text-xl font-bold mb-6 text-[#FFFFFF]">Demo Call</h3>

          <div className="flex flex-col gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="bg-[#0a0f0a] border border-[#5DD1494D] rounded px-4 py-2 text-[#e0ffe0]"
            />
            <input
              name="number"
              value={form.number}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="bg-[#0a0f0a] border border-[#5DD1494D] rounded px-4 py-2 text-[#e0ffe0]"
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="bg-[#0a0f0a] border border-[#5DD1494D] rounded px-4 py-2 text-[#e0ffe0]"
            />
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Tell us about your requirements..."
              className="bg-[#0a0f0a] border border-[#5DD1494D] rounded px-4 py-2 text-[#e0ffe0]"
            />

            {/* SUBMIT BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={handleSubmit}
              disabled={loading}
              className="bg-[#80E032] text-[#FFFFFF] px-6 py-2 rounded font-bold text-lg mt-4"
            >
              {loading ? "Sending..." : "Book Demo"}
            </motion.button>

            {/* SUCCESS MESSAGE */}
            {success && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-400 mt-3 text-sm"
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
