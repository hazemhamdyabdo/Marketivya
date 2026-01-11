
import React from 'react';

export const VisionMissionSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-[#070707]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="glass-card p-12 md:p-16 rounded-[3rem] border-primary/10 hover:border-primary/30 transition-all group">
          <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary transition-all">
            <span className="material-symbols-outlined text-primary group-hover:text-background-dark text-4xl">visibility</span>
          </div>
          <h3 className="text-white text-3xl md:text-4xl font-black italic tracking-tight mb-6">Our Vision</h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            At Marketivya, our vision goes beyond running marketing campaigns — we craft success stories. We aspire to be the leading digital marketing partner for ambitious brands across the Middle East.
          </p>
          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-slate-500 text-sm italic">"True brand power is not just visibility, but authentic engagement."</p>
          </div>
        </div>

        <div className="glass-card p-12 md:p-16 rounded-[3rem] border-primary/10 hover:border-primary/30 transition-all group">
          <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary transition-all">
            <span className="material-symbols-outlined text-primary group-hover:text-background-dark text-4xl">rocket_launch</span>
          </div>
          <h3 className="text-white text-3xl md:text-4xl font-black italic tracking-tight mb-6">Our Mission</h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            To turn ideas into measurable results and transform visions into real success stories. We are committed to data-driven, creative solutions that maximize ROI and help brands achieve their objectives.
          </p>
          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-slate-500 text-sm italic">"Client success is at the heart of everything we do."</p>
          </div>
        </div>
      </div>
    </section>
  );
};
