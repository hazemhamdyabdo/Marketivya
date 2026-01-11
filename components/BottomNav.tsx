
import React from 'react';
import { AppTab } from '../App';

interface BottomNavProps {
  activeTab: AppTab;
  onTabChange: (tab: AppTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: AppTab.HOME, label: 'Home', icon: 'home' },
    { id: AppTab.WORK, label: 'Work', icon: 'cases' },
    { id: AppTab.AGENCY, label: 'Agency', icon: 'groups' },
    { id: AppTab.CONTACT, label: 'Contact', icon: 'mail' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background-dark/95 backdrop-blur-xl border-t border-white/10 pb-8 pt-3 px-6">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center gap-1 transition-colors ${
              activeTab === tab.id ? 'text-primary' : 'text-slate-500'
            }`}
          >
            <span className={`material-symbols-outlined text-2xl ${activeTab === tab.id ? 'fill-1' : ''}`}>
              {tab.icon}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
