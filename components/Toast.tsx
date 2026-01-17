import React, { useEffect } from "react";

interface ToastProps {
  onClose: () => void;
  duration?: number;
  title?: string;
  message?: string;
}

export const Toast: React.FC<ToastProps> = ({
  onClose,
  duration = 4000,
  title = "Success!",
  message = "Your request has been sent. We'll be in touch soon.",
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div
      className="fixed bottom-6 right-6 z-[9998] max-w-sm animate-toast-in"
      role="alert"
    >
      <div className="glass-card rounded-2xl border-primary/20 p-5 shadow-2xl shadow-primary/10 overflow-hidden">
        <div className="flex items-start gap-4">
          <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
            <span className="material-symbols-outlined text-primary text-2xl">
              check_circle
            </span>
          </div>
          <div className="flex-1 min-w-0 pt-0.5">
            <p className="text-white font-black text-base tracking-tight">
              {title}
            </p>
            <p className="text-slate-400 text-sm mt-1 leading-relaxed">
              {message}
            </p>
          </div>
        </div>
        <div
          className="h-0.5 bg-primary/60 rounded-full mt-4 origin-left"
          style={{
            animation: `toastProgress ${duration}ms linear forwards`,
          }}
        />
      </div>
    </div>
  );
};

