import React from "react";

export const CertificatesSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
            Our Industry Certifications
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-10 md:gap-20 items-center opacity-70 hover:opacity-100 transition-opacity stagger-children">
          <div className="flex flex-col items-center gap-4">
            <div className="h-16 w-32 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center p-4">
              <span className="text-white font-bold text-xl">Meta</span>
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">
              Certified Company
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="h-16 w-32 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center p-4">
              <span className="text-white font-bold text-xl italic">
                Google
              </span>
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">
              Partner
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="h-16 w-32 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center p-4">
              <span className="text-white font-bold text-xl">TikTok</span>
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">
              Marketing Partner
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="h-16 w-32 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center p-4">
              <span className="text-white font-bold text-xl">LinkedIn</span>
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">
              Marketing Labs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
