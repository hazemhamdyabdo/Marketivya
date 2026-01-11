
import React from 'react';

export const AgencyView: React.FC = () => {
  return (
    <div className="animate-fade-in px-4 md:px-8 pt-8 md:pt-16 flex flex-col gap-16 md:gap-32 pb-20">
      {/* Methodology Section */}
      <section className="flex flex-col md:flex-row gap-16 items-start">
        <div className="md:w-1/3 sticky top-32">
          <h3 className="text-slate-500 text-sm font-black tracking-[0.3em] uppercase mb-4">The Methodology</h3>
          <h2 className="text-white text-4xl md:text-6xl font-black tracking-tighter leading-tight">Built for <br/><span className="text-primary italic">Absolute Scale.</span></h2>
          <p className="text-slate-400 mt-6 text-lg leading-relaxed">
            We don't just run ads. We architect performance ecosystems that capture attention and force conversion.
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-2 relative">
          <div className="absolute left-[27.5px] top-8 bottom-8 w-1 bg-gradient-to-b from-primary via-primary/40 to-transparent"></div>
          
          {[
            { step: 'Market Intelligence', icon: 'search', desc: 'Deep-dive regional analysis and consumer psychology mapping for Arabic-speaking markets.' },
            { step: 'Growth Blueprint', icon: 'insights', desc: 'Bespoke scaling models that focus on unit economics and sustainable growth over vanity metrics.' },
            { step: 'Aggressive Execution', icon: 'rocket_launch', desc: 'Surgical deployment across Meta, Google, TikTok, and Snapchat with high-frequency creative testing.' },
            { step: 'Hyper-Optimization', icon: 'query_stats', desc: 'AI-assisted performance tracking and manual expert scaling for maximum efficiency.' },
          ].map((item, i) => (
            <div key={item.step} className="flex gap-8 relative pb-16 last:pb-0">
              <div className="flex-none size-14 rounded-2xl bg-primary flex items-center justify-center z-10 shadow-2xl shadow-primary/30 border-4 border-background-dark">
                <span className="material-symbols-outlined text-background-dark text-2xl font-black">{item.icon}</span>
              </div>
              <div className="flex flex-col pt-2">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-primary font-black italic text-xl">0{i+1}</span>
                  <h4 className="text-white font-black text-2xl tracking-tight">{item.step}</h4>
                </div>
                <p className="text-slate-400 text-lg leading-relaxed max-w-xl">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Values Section */}
      <section>
        <div className="flex items-center gap-4 mb-12">
          <div className="h-0.5 w-12 bg-primary"></div>
          <h2 className="text-white text-2xl font-black uppercase tracking-widest">Our DNA</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-10 md:p-14 rounded-[2.5rem] flex flex-col gap-6 hover:bg-white/[0.04] transition-all group">
            <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all">
              <span className="material-symbols-outlined text-primary group-hover:text-background-dark text-4xl transition-colors">lightbulb</span>
            </div>
            <h3 className="text-white text-3xl font-black italic tracking-tight">Performance is Personal</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              We treat every client's budget like our own. Our focus is 100% on measurable impact, ensuring every campaign is a testament to our precision.
            </p>
          </div>
          <div className="glass-card p-10 md:p-14 rounded-[2.5rem] flex flex-col gap-6 hover:bg-white/[0.04] transition-all group">
            <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all">
              <span className="material-symbols-outlined text-primary group-hover:text-background-dark text-4xl transition-colors">diversity_3</span>
            </div>
            <h3 className="text-white text-3xl font-black italic tracking-tight">Regional Authority</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              With boots on the ground in Cairo, Dubai, and Riyadh, we understand the cultural nuances that bridge the gap between curiosity and purchase.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
