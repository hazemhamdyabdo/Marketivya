import React from "react";

export const ClientsSection: React.FC = () => {
  const clients = [
    "PORSCHE",
    "COCA-COLA",
    "NOON",
    "LIFECARE",
    "GRANITIOS",
    "SIVVI",
    "SHAHA",
    "TESLA",
    "CITIBANK",
    "AMAZON",
    "COFFEE HUB",
    "TRES JOLIE",
    "SALAMTAK LED LIGHTS",
    "VLB AUTOMOTIVE SERVICE",
    "BODY SLIM",
    "KOOLEN",
    "WANDO",
    "PANEL STATION",
    "TURBO",
    "VLCC",
    "IPSOS",
    "CASABELLA",
    "QADY KHAN",
    "SEDRA",
  ];
  return (
    <section className="py-24 bg-black overflow-hidden border-y border-white/5">
      <div className="px-6 md:px-20 mb-12 text-center">
        <h3 className="text-slate-500 text-xs font-black uppercase tracking-[0.3em]">
          Our Happy Clients
        </h3>
      </div>
      <div className="flex gap-20 whitespace-nowrap animate-marquee hover:pause cursor-default">
        <div className="flex gap-20 items-center">
          {clients.map((client) => (
            <span
              key={client}
              className="text-white/20 text-4xl md:text-5xl font-black italic tracking-tighter hover:text-primary transition-all select-none"
            >
              {client}
            </span>
          ))}
        </div>
        {/* Second set for infinite scroll */}
        <div className="flex gap-20 items-center">
          {clients.map((client) => (
            <span
              key={client + "-dup"}
              className="text-white/20 text-4xl md:text-5xl font-black italic tracking-tighter hover:text-primary transition-all select-none"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .pause {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
