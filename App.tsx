
import React, { useState, useEffect, useRef } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { HistorySection } from './sections/HistorySection';
import { VisionMissionSection } from './sections/VisionMissionSection';
import { ServicesSection } from './sections/ServicesSection';
import { BigPlanSection } from './sections/BigPlanSection';
import { CertificatesSection } from './sections/CertificatesSection';
import { CategoriesSection } from './sections/CategoriesSection';
import { ClientsSection } from './sections/ClientsSection';
import { ContactSection } from './sections/ContactSection';

/**
 * AppTab enum used for navigation.
 * Exported to be used in components like BottomNav.tsx.
 */
export enum AppTab {
  HOME = 'HOME',
  WORK = 'WORK',
  AGENCY = 'AGENCY',
  CONTACT = 'CONTACT',
}

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showSplash) {
      const observerOptions = {
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, observerOptions);

      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
      
      return () => observer.disconnect();
    }
  }, [showSplash]);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-background-dark overflow-x-hidden animate-fade-in">
      <Navbar />
      <main className="flex-1 w-full">
        <div id="home"><HeroSection /></div>
        <div id="history" className="reveal"><HistorySection /></div>
        <div id="vision" className="reveal"><VisionMissionSection /></div>
        <div id="services" className="reveal"><ServicesSection /></div>
        <div id="plan" className="reveal"><BigPlanSection /></div>
        <div id="certificates" className="reveal"><CertificatesSection /></div>
        <div id="categories" className="reveal"><CategoriesSection /></div>
        <div id="clients" className="reveal"><ClientsSection /></div>
        <div id="contact" className="reveal"><ContactSection /></div>
      </main>
      <footer className="bg-black py-12 px-6 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-2">
            <div className="h-6 w-6 bg-primary rounded flex items-center justify-center">
              <span className="material-symbols-outlined text-background-dark text-xs font-bold">trending_up</span>
            </div>
            <h2 className="text-white text-lg font-black tracking-tighter">MARKETIVYA</h2>
          </div>
          <p className="text-slate-600 text-sm">© 2024 Marketivya Performance Agency. Dubai • Riyadh • Cairo.</p>
          <div className="flex gap-6 text-slate-400 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-primary">LinkedIn</a>
            <a href="#" className="hover:text-primary">Instagram</a>
            <a href="#" className="hover:text-primary">TikTok</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
