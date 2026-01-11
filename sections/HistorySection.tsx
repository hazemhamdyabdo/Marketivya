
import React from 'react';

export const HistorySection: React.FC = () => {
  const cityImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuDmeWj3UbtcfOmtbDWzGy-rnCskoRwR0zvBC6mZq8Lc4BPCbBtoUjAV1o0b-gzOwtu1-Z8ScvQc0hR8muTr4KEDvkg2QT6Mro0RTNh7htjViw42gY-kyGmJNqy8x0x9t_ZV38XlCLm15BVnbgRJpLEe7DB5gZpLDRBjuvAwv5OVKUxvZAM4aiwHGHcyzWWiPuJ91yB6BKIKLZhr39OctfaaZkjoEY-upvq6cXCDWYUdnlQx_zydvGAjNM2oCzPd8mLsu0zA9h2-ohs";

  return (
    <section className="py-24 px-6 md:px-20 bg-background-dark">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-0.5 w-12 bg-primary"></div>
            <h3 className="text-slate-500 text-sm font-black uppercase tracking-widest">Our Legacy</h3>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8">
            Founded in Egypt, <br/> <span className="text-primary italic">Scaled to UAE.</span>
          </h2>
          <p className="text-slate-400 text-xl leading-relaxed mb-8">
            Marketivya was originally founded in Egypt in 2015. In 2020, we expanded to the United Arab Emirates and became officially registered under UAE law.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="glass-card p-6 rounded-2xl">
              <h4 className="text-primary text-3xl font-black italic">2015</h4>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-2">Egypt Foundation</p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <h4 className="text-primary text-3xl font-black italic">40+</h4>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-2">Team Professionals</p>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl relative">
          <img src={cityImg} className="w-full h-full object-cover" alt="Cityscape UAE" />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent" />
        </div>
      </div>
    </section>
  );
};
