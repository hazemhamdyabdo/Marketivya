
import React, { useState } from 'react';

export const ContactView: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center px-4 md:px-8 pt-32 text-center animate-scale-up">
        <div className="size-32 rounded-full bg-primary/20 border border-primary/20 flex items-center justify-center mb-10 shadow-2xl shadow-primary/20">
          <span className="material-symbols-outlined text-primary text-7xl font-bold">check_circle</span>
        </div>
        <h2 className="text-5xl font-black mb-6 tracking-tighter">Growth Awaits.</h2>
        <p className="text-slate-400 text-xl mb-12 max-w-lg leading-relaxed">
          Our senior growth team has received your inquiry. We'll be in touch within 24 business hours to schedule your strategy audit.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-primary text-background-dark px-12 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:brightness-110 active:scale-95 transition-all"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in flex flex-col md:flex-row min-h-full">
      {/* Contact Info Sidebar (Desktop) / Header (Mobile) */}
      <section className="p-8 md:p-20 bg-primary text-background-dark md:w-[450px] flex flex-col justify-between shrink-0">
        <div className="flex flex-col gap-8">
          <div className="size-16 bg-background-dark rounded-2xl flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-4xl font-black">call</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black leading-[1.1] tracking-tighter">Let's build <br/>your next growth story.</h2>
          <p className="text-background-dark/80 text-xl font-medium leading-relaxed">
            Ready to scale your business across MENA? Fill out the form to request a performance audit.
          </p>
        </div>

        <div className="mt-12 md:mt-0 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined font-black">mail</span>
            <span className="font-black uppercase tracking-widest text-sm">growth@marketivya.agency</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined font-black">location_on</span>
            <span className="font-black uppercase tracking-widest text-sm">Dubai • Riyadh • Cairo</span>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="p-8 md:p-20 flex-1 bg-background-dark">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 max-w-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <label className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] px-1">Full Name</label>
              <input 
                required
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 px-6 text-white placeholder-slate-700 focus:border-primary focus:bg-white/[0.05] outline-none transition-all text-lg"
                placeholder="John Wick"
                type="text"
              />
            </div>
            
            <div className="flex flex-col gap-3">
              <label className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] px-1">Work Email</label>
              <input 
                required
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 px-6 text-white placeholder-slate-700 focus:border-primary focus:bg-white/[0.05] outline-none transition-all text-lg"
                placeholder="john@corporation.com"
                type="email"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <label className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] px-1">Industry</label>
              <select className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 px-6 text-white focus:border-primary outline-none transition-all text-lg appearance-none cursor-pointer">
                <option className="bg-background-dark">E-commerce</option>
                <option className="bg-background-dark">Real Estate</option>
                <option className="bg-background-dark">Luxury Retail</option>
                <option className="bg-background-dark">Tech & SaaS</option>
              </select>
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] px-1">Monthly Budget</label>
              <select className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 px-6 text-white focus:border-primary outline-none transition-all text-lg appearance-none cursor-pointer">
                <option className="bg-background-dark">$5,000 - $10,000</option>
                <option className="bg-background-dark">$10,000 - $50,000</option>
                <option className="bg-background-dark">$50,000 - $100,000</option>
                <option className="bg-background-dark">$100,000+</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] px-1">Project Brief</label>
            <textarea 
              required
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 px-6 text-white placeholder-slate-700 focus:border-primary focus:bg-white/[0.05] outline-none transition-all min-h-[160px] text-lg resize-none"
              placeholder="Tell us about your conversion goals..."
            />
          </div>

          <button 
            type="submit"
            className="w-full md:w-fit px-16 bg-primary text-background-dark font-black py-5 rounded-2xl text-lg shadow-2xl shadow-primary/20 active:scale-95 transition-all hover:brightness-110 uppercase tracking-widest mt-4"
          >
            Submit Brief
          </button>
        </form>

        <footer className="mt-20 pt-10 border-t border-white/5 text-slate-700 text-xs flex flex-col md:flex-row justify-between gap-4">
          <p>© 2024 Marketivya Performance Agency. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Terms</span>
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
          </div>
        </footer>
      </section>
    </div>
  );
};
