import React, { useState, useEffect, useRef } from "react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#history", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#plan", label: "Strategy" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      isMenuOpen
    ) {
      setIsMenuOpen(false);
    }
  };

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center backdrop-blur-md p-4 px-6 md:px-12 justify-between border-b transition-all duration-300 ${
          scrolled
            ? "bg-background-dark/95 border-white/10 shadow-lg"
            : "bg-background-dark/80 border-white/5"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-background-dark text-xl font-bold">
              trending_up
            </span>
          </div>
          <h2 className="text-white text-xl md:text-2xl font-black leading-tight tracking-tighter">
            MARKETIVYA
          </h2>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:flex items-center justify-center rounded-full px-8 h-11 bg-primary text-background-dark text-xs font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all"
          >
            Build Your Story
          </a>
          <button
            onClick={handleMenuToggle}
            className="flex cursor-pointer items-center justify-center rounded-full h-11 w-11 bg-primary/10 text-primary border border-primary/20 lg:hidden transition-all hover:bg-primary/20 active:scale-95"
            aria-label="Toggle menu"
          >
            <span
              className={`material-symbols-outlined transition-transform duration-300 ${
                isMenuOpen ? "rotate-90" : ""
              }`}
            >
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        onClick={handleClickOutside}
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(8px)",
        }}
      >
        {/* Mobile Menu Panel */}
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background-dark border-l border-white/10 shadow-2xl transform transition-transform duration-300 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-background-dark text-xl font-bold">
                    trending_up
                  </span>
                </div>
                <h2 className="text-white text-xl font-black leading-tight tracking-tighter">
                  MARKETIVYA
                </h2>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center rounded-full h-10 w-10 bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all active:scale-95"
                aria-label="Close menu"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Menu Links */}
            <nav className="flex-1 flex flex-col py-8 px-6 overflow-y-auto">
              {navLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="group relative py-4 px-4 text-white text-base font-black uppercase tracking-[0.15em] transition-all hover:text-primary hover:translate-x-2"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen
                      ? "translateX(0)"
                      : "translateX(20px)",
                    transition: `all 0.3s ease-out ${index * 50}ms`,
                  }}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-r-full"></span>
                </a>
              ))}

              {/* CTA Button in Menu */}
              <div
                className="mt-8 px-4"
                style={{
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.3s ease-out ${navLinks.length * 50}ms`,
                }}
              >
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="flex items-center justify-center rounded-full px-8 h-12 bg-primary text-background-dark text-xs font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all w-full"
                >
                  Build Your Story
                </a>
              </div>
            </nav>

            {/* Menu Footer */}
            <div className="p-6 border-t border-white/10">
              <p className="text-slate-500 text-xs text-center">
                © 2024 Marketivya
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
