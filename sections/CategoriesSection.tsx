
import React from 'react';

export const CategoriesSection: React.FC = () => {
  const cats = [
    { name: 'Fashion', icon: 'apparel' },
    { name: 'Electronics', icon: 'devices' },
    { name: 'Restaurants', icon: 'restaurant' },
    { name: 'Toys & Hobbies', icon: 'toys' },
    { name: 'Health & Beauty', icon: 'spa' },
    { name: 'E-commerce', icon: 'shopping_bag' },
  ];

  return (
    <section className="py-24 px-6 md:px-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-3xl font-black tracking-tight mb-12 text-center uppercase tracking-[0.2em]">Sectors We Dominate</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {cats.map((c, i) => (
            <div key={i} className="flex flex-col items-center gap-6 p-10 glass-card rounded-[2.5rem] hover:bg-primary/5 transition-all group">
              <div className="size-16 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-primary/40 transition-all">
                <span className="material-symbols-outlined text-primary text-3xl">{c.icon}</span>
              </div>
              <p className="text-white text-[10px] font-black uppercase tracking-[0.2em] text-center">{c.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
