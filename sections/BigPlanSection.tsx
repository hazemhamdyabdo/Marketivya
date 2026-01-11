
import React from 'react';

export const BigPlanSection: React.FC = () => {
  const steps = [
    { name: 'Drive Traffic', desc: 'Attract high-quality visitors through smart SEO and targeted ads.', icon: 'traffic' },
    { name: 'Boost Sales', desc: 'Increase online sales with seamless user experience and strategic promotions.', icon: 'shopping_cart' },
    { name: 'Grow Market Share', desc: 'Expand in the Gulf by reaching new markets and audiences.', icon: 'public' },
    { name: 'Build Community', desc: 'Create a loyal social following through meaningful engagement.', icon: 'groups' },
    { name: 'Track Performance', desc: 'Measure success with KPIs and refine strategies based on data.', icon: 'monitoring' },
    { name: 'Target Smart', desc: 'Reach the right audience using insights and analytics.', icon: 'target' },
    { name: 'Build Loyalty', desc: 'Strengthen customer relationships through value and top-tier service.', icon: 'favorite' },
    { name: 'Maximize Engagement', desc: 'Spark interaction with contests and interactive campaigns.', icon: 'bolt' },
    { name: 'Improve Conversions', desc: 'Turn visitors into customers with optimized landing pages.', icon: 'rebase_edit' },
  ];

  return (
    <section className="py-24 px-6 md:px-20 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <h3 className="text-slate-500 text-xs font-black uppercase tracking-[0.3em] mb-4">The Strategy</h3>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">Our <span className="text-primary italic">Big Plan.</span></h2>
          </div>
          <p className="text-slate-500 max-w-sm text-lg">A 9-pillar approach to market dominance and brand longevity.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-[2rem] overflow-hidden border border-white/5">
          {steps.map((step, i) => (
            <div key={i} className="p-10 bg-background-dark hover:bg-white/[0.02] transition-colors flex flex-col gap-6">
              <span className="material-symbols-outlined text-primary text-4xl">{step.icon}</span>
              <h4 className="text-white text-2xl font-black italic tracking-tight">{step.name}</h4>
              <p className="text-slate-400 leading-relaxed text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
