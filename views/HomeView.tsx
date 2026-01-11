
import React from 'react';

export const HomeView: React.FC = () => {
  const images = {
    hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyIoK5GkY8u4-w7huwSO2M-kraoDAX3xZ4pkd8AoMOjV0EuvuGqT9BnuxqZ7Qnmr_01Lec0XEO7KRxikyE8f0GXzsfEABInaWbsdSnMOMllkqbrMRYL6WVUDkHuSYWiyTFoI7e85Kl7oQ9WEhPbLjjJyrhwt_8Urism6_RLiecL8pX5uZ4zgN9tnTDBegrhyI4-FTKm_BFrL-SJsB66yJYGdOUvtk0h096vlke5C_c6FelQTV8PyoFJsZcPHd7o-xpLpUVpOpxEhc",
    porsche: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqfZwbzzyhOZSqBEUWqyB4Zs9BzEQO1VYbgbhcDEUtde9SX_wX1ThrfPWIa0KLI-lShhQZ7N2SsIAu2-mgef0zWYIxCLB3XscSRKeLlhiimXbFzOXFzzzhB-TD8Z9H4ZhNQNYZZoVKW063n1gGWw8DBGzDvlF5jgbhTlS1Vg0dhohtIoWs0RALg5q4odam1SRfbSoI7iSK40uB5VetSjhkiseDiF2QUs_weLES72WP7mxXmpB0ejL855HW0_s7SpJUQCRiIwQHgXk",
    amazon: "https://lh3.googleusercontent.com/aida-public/AB6AXuBR6H3id7btfMnML1G-fltdaa3eUcGh9nqLPECABElLd082K3TDoegO7lPm28kYCB402MP9RJ4IXJOqLjwaZnxzxhFKNLLXiG5kNZ6nTFt_-960WHbEnNBOwtc4xqAWPzWdLdiu5AdHQgNH1gEyGCGSIUihAO1-1HWf6pBWJ4S1okKmpyyTdetuyUOaSkt46h9aC1SQho0IEBgf05dG9a5PFlwXQUM9HNAjtdmA6OirwxFaiBhzkKySKsY8CRDqtiFYkb7vyh5mOU8",
    cocaCola: "https://lh3.googleusercontent.com/aida-public/AB6AXuBD1GtPNJYlMaOYhHvSldza9zSmijRrTqQCcWAvnipIVTweoQ373jqON_rOmcbzlI1LXy97PZ_dOceiBPl3OWYZG3Ad7dCKXNHYloGsnlvrB7GF9rJB0x_MHDcR_2rt360rxm2bW_Ijpz-xfIr8FWAdNpWSB6SkLcPdN2Fk_11P8PZkrLcxpYJLS5RvK4hojYCabJBbjK8YPsCkAq9fOBR1OK6V2mDOhRyAmJUIJqgPpfpQCMHGi1pyHSds0Dm8egynbqOSe_fD96A"
  };

  return (
    <div className="flex flex-col gap-12 md:gap-20 pb-10">
      {/* Hero Header */}
      <section className="p-4 md:px-6 md:pt-10">
        <div 
          className="flex min-h-[520px] md:min-h-[600px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-3xl items-start justify-end px-6 md:px-16 pb-12 md:pb-20 relative overflow-hidden animate-fade-in shadow-2xl"
          style={{ backgroundImage: `linear-gradient(to top, rgba(10, 10, 10, 1) 0%, rgba(10, 10, 10, 0.4) 50%, rgba(10, 10, 10, 0.1) 100%), url("${images.hero}")` }}
        >
          <div className="flex flex-col gap-4 text-left max-w-2xl relative z-10">
            <div className="inline-flex w-fit items-center px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-black tracking-widest uppercase mb-2">
              MENA Performance Agency
            </div>
            <h1 className="text-white text-4xl md:text-7xl font-black leading-[1.05] tracking-tighter">
              Transforming <span className="text-primary italic">Vision</span> <br className="hidden md:block"/> into Performance
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-normal leading-relaxed max-w-xl">
              Leading digital growth across Egypt, UAE, and Saudi Arabia through data-driven precision and local creative brilliance.
            </p>
          </div>
          <div className="w-full md:w-auto flex flex-col md:flex-row gap-4">
            <button className="px-10 flex cursor-pointer items-center justify-center rounded-2xl h-16 bg-primary text-background-dark text-lg font-black shadow-[0_8px_40px_rgba(244,202,37,0.3)] active:scale-95 transition-all hover:brightness-110">
              Partner with Us
            </button>
            <button className="px-10 flex cursor-pointer items-center justify-center rounded-2xl h-16 bg-white/10 backdrop-blur-md text-white text-lg font-bold border border-white/20 active:scale-95 transition-all hover:bg-white/20">
              Our Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Trusted Clients Section */}
      <section className="md:px-6">
        <div className="flex items-center justify-between px-4 pb-10">
          <h3 className="text-slate-500 text-xs md:text-sm font-black leading-tight tracking-[0.3em] uppercase">Partnering with Global Leaders</h3>
          <div className="h-[1px] flex-1 bg-white/10 ml-8"></div>
        </div>
        <div className="flex overflow-x-auto md:justify-center gap-12 md:gap-24 px-4 pb-4 hide-scrollbar items-center">
          <img src={images.porsche} alt="Porsche" className="h-10 md:h-14 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer object-contain shrink-0" />
          <img src={images.amazon} alt="Amazon" className="h-7 md:h-10 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer object-contain shrink-0" />
          <img src={images.cocaCola} alt="CocaCola" className="h-7 md:h-10 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer object-contain shrink-0" />
          <img src={images.porsche} alt="Porsche" className="h-10 md:h-14 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer object-contain shrink-0" />
          <img src={images.amazon} alt="Amazon" className="h-7 md:h-10 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer object-contain shrink-0" />
        </div>
      </section>

      {/* Stats / Regional Presence */}
      <section className="px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { region: 'Egypt', value: '140M+', label: 'Market Reach' },
            { region: 'UAE', value: '8.2x', label: 'Average ROAS' },
            { region: 'KSA', value: '400%', label: 'Lead Growth' },
          ].map((stat, i) => (
            <div key={stat.region} className="glass-card p-8 md:p-12 flex flex-col items-center md:items-start gap-4 rounded-3xl border-white/5 group hover:border-primary/20 transition-all">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
                <p className="text-slate-400 text-sm font-black tracking-widest uppercase">{stat.region}</p>
              </div>
              <h2 className="text-white text-5xl md:text-6xl font-black italic tracking-tighter group-hover:text-primary transition-colors">{stat.value}</h2>
              <p className="text-slate-500 font-bold uppercase tracking-wider text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Services */}
      <section className="px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <div className="max-w-xl">
            <h3 className="text-slate-500 text-sm font-black leading-tight tracking-[0.2em] uppercase mb-4">What we do</h3>
            <h2 className="text-white text-4xl md:text-5xl font-black tracking-tighter">Full-Funnel Digital <br/> Mastery.</h2>
          </div>
          <div className="hidden md:block h-[1px] flex-1 bg-white/10 mx-12 mb-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Data Strategy', desc: 'Advanced attribution modeling and insights-led planning to outsmart competition in fast-moving markets.', icon: 'insights' },
            { title: 'Performance', desc: 'Surgical scaling across search, social, and programmatic channels with localized media buying experts.', icon: 'ads_click' },
            { title: 'Creatives', desc: 'Thumb-stopping digital assets that blend performance psychology with Middle Eastern aesthetic values.', icon: 'palette', elite: true },
          ].map((service) => (
            <div key={service.title} className={`glass-card p-8 rounded-3xl flex flex-col gap-6 items-start hover:bg-white/[0.05] transition-all group ${service.elite ? 'border-t-4 border-t-primary' : ''}`}>
              <div className="size-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary transition-all">
                <span className="material-symbols-outlined text-primary group-hover:text-background-dark text-4xl transition-colors">{service.icon}</span>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <h4 className="text-white text-2xl font-bold leading-tight">{service.title}</h4>
                  {service.elite && <span className="text-[10px] font-black bg-primary text-background-dark px-2 py-0.5 rounded uppercase">Elite</span>}
                </div>
                <p className="text-slate-400 text-base leading-relaxed">{service.desc}</p>
              </div>
              <button className="mt-4 flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all">
                Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
