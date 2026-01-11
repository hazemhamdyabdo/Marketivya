
import React from 'react';

export const Navbar: React.FC = () => {
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#history', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#plan', label: 'Strategy' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center bg-background-dark/80 backdrop-blur-md p-4 px-6 md:px-12 justify-between border-b border-white/5">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-background-dark text-xl font-bold">trending_up</span>
        </div>
        <h2 className="text-white text-xl md:text-2xl font-black leading-tight tracking-tighter">
          MARKETIVYA
        </h2>
      </div>

      <div className="hidden lg:flex items-center gap-10">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-all"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a href="#contact" className="hidden md:flex items-center justify-center rounded-full px-8 h-11 bg-primary text-background-dark text-xs font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
          Build Your Story
        </a>
        <button className="flex cursor-pointer items-center justify-center rounded-full h-11 w-11 bg-primary/10 text-primary border border-primary/20 lg:hidden">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
};
