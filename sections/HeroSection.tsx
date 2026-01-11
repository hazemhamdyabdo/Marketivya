import React from "react";

export const HeroSection: React.FC = () => {
  const heroImg =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCyIoK5GkY8u4-w7huwSO2M-kraoDAX3xZ4pkd8AoMOjV0EuvuGqT9BnuxqZ7Qnmr_01Lec0XEO7KRxikyE8f0GXzsfEABInaWbsdSnMOMllkqbrMRYL6WVUDkHuSYWiyTFoI7e85Kl7oQ9WEhPbLjjJyrhwt_8Urism6_RLiecL8pX5uZ4zgN9tnTDBegrhyI4-FTKm_BFrL-SJsB66yJYGdOUvtk0h096vlke5C_c6FelQTV8PyoFJsZcPHd7o-xpLpUVpOpxEhc";

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center grayscale opacity-40 parallax-slow"
        style={{
          backgroundImage: `linear-gradient(to right, #0a0a0a 20%, transparent 100%), url("${heroImg}")`,
        }}
      />
      <div className="relative z-10 max-w-4xl mt-12 md:mt-0">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-black tracking-widest uppercase mb-6 reveal">
          Performance Driven Agency
        </div>
        <h1 className="text-white text-5xl md:text-8xl font-black leading-[0.95] tracking-tighter mb-8 reveal">
          Crafting <span className="text-primary italic">Success</span> <br />{" "}
          Stories Across MENA.
        </h1>
        <p className="text-slate-400 text-lg md:text-2xl font-normal leading-relaxed max-w-2xl mb-12 reveal">
          From Riyadh to Cairo, we help ambitious brands achieve sustainable
          growth and build meaningful connections through data-led performance.
        </p>
        <div className="flex flex-col md:flex-row gap-4 reveal">
          <a
            href="#contact"
            className="px-12 py-5 bg-primary text-background-dark rounded-2xl font-black text-lg uppercase tracking-widest shadow-2xl shadow-primary/20 hover:brightness-110 active:scale-95 transition-all text-center"
          >
            Partner With Us
          </a>
          <a
            href="#services"
            className="px-12 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-2xl font-bold text-lg hover:bg-white/10 active:scale-95 transition-all text-center"
          >
            View Strategy
          </a>
        </div>
      </div>
    </section>
  );
};
