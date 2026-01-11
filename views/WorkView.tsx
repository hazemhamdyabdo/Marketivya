
import React from 'react';

export const WorkView: React.FC = () => {
  const cases = [
    {
      title: "Luxury Real Estate: $40M in Pipeline Growth",
      location: "UAE Market",
      leads: "+340%",
      cpl: "-45%",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmeWj3UbtcfOmtbDWzGy-rnCskoRwR0zvBC6mZq8Lc4BPCbBtoUjAV1o0b-gzOwtu1-Z8ScvQc0hR8muTr4KEDvkg2QT6Mro0RTNh7htjViw42gY-kyGmJNqy8x0x9t_ZV38XlCLm15BVnbgRJpLEe7DB5gZpLDRBjuvAwv5OVKUxvZAM4aiwHGHcyzWWiPuJ91yB6BKIKLZhr39OctfaaZkjoEY-upvq6cXCDWYUdnlQx_zydvGAjNM2oCzPd8mLsu0zA9h2-ohs",
      icon: "apartment"
    },
    {
      title: "E-commerce Giant: Dominating the Riyadh Market",
      location: "KSA Growth",
      leads: "8.2x ROAS",
      cpl: "120% GROWTH",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA66DPtJPcZzXO7vjCG_WCWalCHsCF1AGW8xeIXLTviK-8fYE6CJEmc6rfniNWrEK-O40D31gbc81GXnCCwExfX0IunTyl0UuOkj5iW3C28GA_wAs06xuIsLVonW2f8ulu3gZTjxxNiEVej6ohT3Saf8riK8s1-0dDrIBlmzNoYv83HOXPVB3OEg7b1rl2T6bveaQejNFIvLboE-IFaKn75qShkGX-IveBDSDFG3VFFBr5uL2qF7EfqA-sXkme4fej1i4on0Jg4BUU",
      icon: "shopping_bag"
    },
    {
      title: "Fintech Startup: Customer Acquisition at Scale",
      location: "Egypt Market",
      leads: "500k Users",
      cpl: "$0.85 CPA",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyIoK5GkY8u4-w7huwSO2M-kraoDAX3xZ4pkd8AoMOjV0EuvuGqT9BnuxqZ7Qnmr_01Lec0XEO7KRxikyE8f0GXzsfEABInaWbsdSnMOMllkqbrMRYL6WVUDkHuSYWiyTFoI7e85Kl7oQ9WEhPbLjjJyrhwt_8Urism6_RLiecL8pX5uZ4zgN9tnTDBegrhyI4-FTKm_BFrL-SJsB66yJYGdOUvtk0h096vlke5C_c6FelQTV8PyoFJsZcPHd7o-xpLpUVpOpxEhc",
      icon: "payments"
    },
    {
      title: "FMCG Brand: Multi-Channel Awareness",
      location: "Regional MENA",
      leads: "20M Reach",
      cpl: "40% VTR",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBD1GtPNJYlMaOYhHvSldza9zSmijRrTqQCcWAvnipIVTweoQ373jqON_rOmcbzlI1LXy97PZ_dOceiBPl3OWYZG3Ad7dCKXNHYloGsnlvrB7GF9rJB0x_MHDcR_2rt360rxm2bW_Ijpz-xfIr8FWAdNpWSB6SkLcPdN2Fk_11P8PZkrLcxpYJLS5RvK4hojYCabJBbjK8YPsCkAq9fOBR1OK6V2mDOhRyAmJUIJqgPpfpQCMHGi1pyHSds0Dm8egynbqOSe_fD96A",
      icon: "campaign"
    }
  ];

  return (
    <div className="animate-fade-in px-4 md:px-8 pt-8 md:pt-16 flex flex-col gap-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex flex-col gap-4 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
            Scaling Brands <br/><span className="text-primary italic">Across the Middle East.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-normal max-w-lg">
            Proven performance strategies for market leaders in the most competitive regional landscapes.
          </p>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
          {['All Projects', 'UAE', 'Saudi', 'Egypt'].map((chip, i) => (
            <button 
              key={chip} 
              className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest shrink-0 transition-all ${i === 0 ? 'bg-primary text-background-dark shadow-xl shadow-primary/20' : 'bg-white/5 text-slate-400 border border-white/5 hover:border-white/20'}`}
            >
              {chip}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 pb-20">
        {cases.map((cs) => (
          <div key={cs.title} className="relative w-full h-[450px] md:h-[550px] rounded-[2rem] overflow-hidden group bg-slate-900 border border-white/5 shadow-2xl">
            <img 
              src={cs.image} 
              alt={cs.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
              <div className="flex justify-between items-start mb-auto">
                <div className="bg-primary text-background-dark text-[10px] md:text-xs font-black px-3 py-1 rounded-full tracking-tighter uppercase shadow-lg shadow-primary/20">
                  {cs.location}
                </div>
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                  <span className="material-symbols-outlined text-white text-xl">{cs.icon}</span>
                </div>
              </div>
              
              <h4 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight max-w-md">{cs.title}</h4>
              
              <div className="flex gap-10 mb-8">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-black text-slate-400 tracking-[0.2em] mb-1">Impact</span>
                  <span className="text-3xl font-black text-primary italic">{cs.leads}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-black text-slate-400 tracking-[0.2em] mb-1">KPI</span>
                  <span className="text-3xl font-black text-primary italic">{cs.cpl}</span>
                </div>
              </div>
              
              <button className="w-full bg-white text-background-dark font-black py-4 rounded-2xl flex items-center justify-center gap-3 text-sm uppercase tracking-widest active:scale-95 transition-all hover:brightness-90">
                View Case Study
                <span className="material-symbols-outlined text-sm font-black">arrow_forward</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
