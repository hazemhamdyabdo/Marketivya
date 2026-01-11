
import React from 'react';

export const ContactSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-background-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 relative z-10">
        <div className="flex-1">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8">
            Ready to Build Your <span className="text-primary italic">Success Story?</span>
          </h2>
          <p className="text-slate-400 text-xl leading-relaxed mb-12 max-w-xl">
            Whether you're looking to elevate your brand, generate more leads, or create engaging content, Marketivya is here to turn your next big idea into measurable results.
          </p>
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-6">
              <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                <span className="material-symbols-outlined text-primary text-3xl">call</span>
              </div>
              <div>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Phone (UAE)</p>
                <p className="text-white text-xl font-bold">+971 56 107 3053</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                <span className="material-symbols-outlined text-primary text-3xl">mail</span>
              </div>
              <div>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Email</p>
                <p className="text-white text-xl font-bold">marketivyaagency@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 glass-card p-10 md:p-12 rounded-[3rem] border-white/5 bg-white/[0.02]">
          <h3 className="text-2xl font-black mb-8 italic">Request a Performance Audit</h3>
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <input 
              className="bg-white/5 border border-white/10 rounded-2xl p-5 outline-none focus:border-primary transition-all text-white placeholder-slate-600"
              placeholder="Name"
            />
            <input 
              className="bg-white/5 border border-white/10 rounded-2xl p-5 outline-none focus:border-primary transition-all text-white placeholder-slate-600"
              placeholder="Email Address"
              type="email"
            />
            <textarea 
              className="bg-white/5 border border-white/10 rounded-2xl p-5 outline-none focus:border-primary transition-all text-white placeholder-slate-600 min-h-[150px] resize-none"
              placeholder="How can we help you scale?"
            />
            <button className="w-full bg-primary text-background-dark font-black py-5 rounded-2xl text-lg uppercase tracking-widest shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
              Start Your Journey
            </button>
          </form>
        </div>
      </div>
      
      {/* Decorative background blur */}
      <div className="absolute -bottom-24 -right-24 size-[500px] bg-primary/10 blur-[120px] rounded-full z-0" />
    </section>
  );
};
