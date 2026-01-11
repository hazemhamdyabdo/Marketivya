
import React from 'react';

export const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-background-dark flex flex-col items-center justify-center">
      <div className="relative flex flex-col items-center gap-6">
        {/* Animated Logo */}
        <div className="size-24 bg-primary rounded-2xl flex items-center justify-center animate-logo-draw shadow-[0_0_50px_rgba(244,202,37,0.3)]">
          <span className="material-symbols-outlined text-background-dark text-6xl font-black">trending_up</span>
        </div>
        
        {/* Animated Brand Name */}
        <div className="flex flex-col items-center gap-1 overflow-hidden">
          <h1 className="text-white text-4xl font-black tracking-tighter uppercase animate-slide-up [animation-delay:400ms]">
            MARKETIVYA
          </h1>
          <div className="h-0.5 w-0 bg-primary animate-[growLine_1s_ease-in-out_forwards_1s]"></div>
          <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase opacity-0 animate-fade-in [animation-delay:1.2s]">
            Performance First
          </p>
        </div>
      </div>

      <style>{`
        @keyframes growLine {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
};
