import { useState, useEffect } from "react";
import { restaurantConfig } from "../config/restaurantConfig.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Yönlendirilen bölümü ekranın tam dikey ortasına hizalayan fonksiyon
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-16 ${
        scrolled 
          ? "py-4 bg-[#0a0a0d]/80 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]" 
          : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <a 
          href="#hero" 
          onClick={(e) => scrollToSection(e, "hero")}
          className="text-2xl font-black tracking-widest text-[var(--accent)] font-[var(--font-heading)] hover:opacity-80 transition-opacity drop-shadow-md"
        >
          {restaurantConfig.info.name}
        </a>

        {/* Sağ Gezinti Bağlantıları */}
        <nav className="hidden lg:flex items-center gap-10 text-xs uppercase tracking-widest font-semibold text-[var(--text-main)]">
          <a href="#story" onClick={(e) => scrollToSection(e, "story")} className="hover:text-[var(--accent)] transition-colors">Hikayemiz</a>
          <a href="#tasting" onClick={(e) => scrollToSection(e, "tasting")} className="hover:text-[var(--accent)] transition-colors">Tadım Masası</a>
          <a href="#menu" onClick={(e) => scrollToSection(e, "menu")} className="hover:text-[var(--accent)] transition-colors">Menü</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="hover:text-[var(--accent)] transition-colors">Konum & İletişim</a>
        </nav>

        {/* Glassmorphic & Neomorphic Aksiyon Butonu */}
        <a 
          href="#reservation" 
          onClick={(e) => scrollToSection(e, "reservation")}
          className="hidden sm:inline-block px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest bg-[var(--accent)] text-[var(--bg-primary)] hover:scale-105 transition-all duration-300 shadow-[6px_6px_16px_rgba(0,0,0,0.5),-3px_-3px_10px_rgba(255,255,255,0.2),0_0_20px_var(--accent-glow)] active:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.6)] cursor-pointer"
        >
          Masa Rezerve Et
        </a>
      </div>
    </header>
  );
}