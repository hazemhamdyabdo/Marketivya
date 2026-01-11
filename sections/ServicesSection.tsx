
import React from 'react';

export const ServicesSection: React.FC = () => {
  const services = [
    { title: 'Social Media Management', icon: 'diversity_3' },
    { title: 'Paid Ads Strategies', icon: 'ads_click' },
    { title: 'Content & Creative Design', icon: 'palette' },
    { title: 'Photography & Videography', icon: 'photo_camera' },
    { title: 'Website Design & Dev', icon: 'terminal' },
    { title: 'Search Engine Optimization', icon: 'search' },
    { title: 'Email Marketing Campaigns', icon: 'mail' },
    { title: 'Analytics & Reporting', icon: 'query_stats' },
    { title: 'Performance Marketing', icon: 'trending_up' },
  ];

  return (
    <section className="py-24 px-6 md:px-20 bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h3 className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-4">Our Services</h3>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white">Mastering the <span className="italic">Digital Ecosystem.</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="glass-card p-10 rounded-3xl flex flex-col gap-6 hover:bg-white/[0.05] hover:-translate-y-2 transition-all cursor-default">
              <div className="size-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-3xl">{s.icon}</span>
              </div>
              <h4 className="text-white text-xl font-bold leading-tight">{s.title}</h4>
              <div className="h-0.5 w-12 bg-primary/30 group-hover:w-full transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
