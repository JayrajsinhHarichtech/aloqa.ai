"use client";
import { useState } from 'react';
import { letsTalkData } from '../../Data/letsTalkData';
import { contractData } from '../../Data/contractData';

export default function LetsTalkSection() {
  const [form, setForm] = useState({ name: '', number: '', email: '', company: '' });
  const [copied, setCopied] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(contractData.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-[#0a0f0a] text-[#e0ffe0] py-16 px-4 flex flex-col items-center">
      <div className="flex flex-col md:flex-row w-full max-w-5xl gap-8 mb-10">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4 text-[#5DD149]">Let's Talk</h2>
          <p className="mb-8 text-base text-[#D9F5DEB2] max-w-md">{letsTalkData.description}</p>
        </div>
        <div className="flex-1 bg-[#111] border border-[#5DD1494D] rounded-xl p-8 shadow-lg">
          <h3 className="text-xl font-bold mb-6 text-[#FFFFFF]">Demo Call</h3>
          <form className="flex flex-col gap-4">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Enter your full name" className="bg-[#0a0f0a] border border-[#5DD1494D] rounded px-4 py-2 text-[#e0ffe0]" />
            <div className="flex gap-2">
              <select name="countryCode" className="bg-[#020D0099] border border-[#5DD1494D] rounded px-2 py-2 text-[#e0ffe0] w-20">
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input name="number" value={form.number} onChange={handleChange} placeholder="Enter your phone number" className="bg-[#0a0f0a] border border-[#5DD1494D] rounded px-4 py-2 text-[#e0ffe0] flex-1" />
            </div>
            <input name="email" value={form.email} onChange={handleChange} placeholder="Enter your email address" className="bg-[#0a0f0a] border border-[#5DD1494D] rounded px-4 py-2 text-[#e0ffe0]" />
            <input name="company" value={form.company} onChange={handleChange} placeholder="Tell us about your requirements..." className="bg-[#0a0f0a] border border-[#5DD1494D] rounded px-4 py-2 text-[#e0ffe0]" />
            <button type="button" className="bg-[#80E032] text-[#FFFFFF] px-6 py-2 rounded font-bold text-lg mt-4">Book Demo</button>
          </form>
        </div>
      </div>
    
    </section>
  );
}
