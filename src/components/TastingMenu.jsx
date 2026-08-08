import { motion } from "framer-motion";
import { restaurantConfig } from "../config/restaurantConfig";

export default function TastingMenu() {
  const handleTastingReservationClick = (e) => {
    e.preventDefault();
    const event = new CustomEvent("setTastingMenuSelect");
    window.dispatchEvent(event);

    const el = document.getElementById("reservation");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="tasting" className="min-h-screen py-24 px-6 md:px-16 max-w-6xl mx-auto flex items-center justify-center scroll-mt-10 relative">
      
      {/* Arka Plan Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--accent)]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Glassmorphic & Neomorphic Ana Kart */}
      <div className="w-full bg-[#0a0a0d]/70 backdrop-blur-3xl rounded-3xl overflow-hidden border border-[var(--accent)]/30 shadow-[20px_20px_50px_rgba(0,0,0,0.7),-10px_-10px_30px_rgba(255,255,255,0.03),0_0_40px_rgba(0,0,0,0.8)] grid lg:grid-cols-12 items-center relative z-10">
        
        {/* Sol Resim Paneli */}
        <div className="lg:col-span-5 h-72 lg:h-full relative overflow-hidden shrink-0 min-h-[380px]">
          <img src={restaurantConfig.images.tastingBg} alt="Şefin Tadım Masası Atmosferi" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-black/40 to-[#0a0a0d]" />
          
          {/* Görsel Üzerindeki Cam Bilgi Rozeti */}
          <div className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-2xl p-4 rounded-2xl border border-white/15 shadow-[6px_6px_16px_rgba(0,0,0,0.5)]">
            <span className="text-[10px] text-[var(--accent)] uppercase font-bold tracking-widest block mb-1">Özel Deneyim</span>
            <p className="text-xs text-[var(--text-main)] font-medium">Sadece 12 Kişilik Özel Mutfak Masası</p>
          </div>
        </div>

        {/* Sağ İçerik Paneli */}
        <div className="lg:col-span-7 p-8 md:p-12 text-center lg:text-left flex flex-col justify-center">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: -10 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="inline-block text-[10px] uppercase tracking-[0.35em] text-[var(--accent)] font-bold mb-4 bg-white/5 backdrop-blur-xl px-5 py-2 rounded-full border border-[var(--accent)]/30 shadow-[inset_2px_2px_4px_rgba(255,255,255,0.05),4px_4px_10px_rgba(0,0,0,0.4)]"
            >
              Özel Mutfak Deneyimi
            </motion.span>
          </div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-[var(--font-heading)] mb-4 leading-tight text-[var(--text-main)]"
          >
            Şefin Tadım Masası 2026
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2 }}
            className="text-xs md:text-sm text-[var(--text-muted)] font-light leading-relaxed mb-8"
          >
            Şef Derin Mutlu tarafından hazırlanan, Ege'nin mevsimsel mirasını Fransız moleküler teknikleriyle harmanlayan 7 aşamalı sürpriz gastronomi serüveni.
          </motion.p>

          {/* Neomorphic Fiyat Kartları */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mb-8">
            <div className="px-6 py-3.5 rounded-2xl bg-white/5 backdrop-blur-xl border border-[var(--accent)]/40 text-center lg:text-left w-full sm:w-auto shadow-[6px_6px_16px_rgba(0,0,0,0.4),-4px_-4px_12px_rgba(255,255,255,0.03)]">
              <span className="block text-2xl font-bold text-[var(--accent)] font-[var(--font-heading)]">3.400 ₺</span>
              <span className="text-[9px] uppercase tracking-widest text-[var(--text-muted)] block mt-0.5">Kişi Başı Tadım Menüsü</span>
            </div>

            <div className="px-6 py-3.5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-center lg:text-left w-full sm:w-auto shadow-[6px_6px_16px_rgba(0,0,0,0.4),-4px_-4px_12px_rgba(255,255,255,0.03)]">
              <span className="block text-lg font-bold text-[var(--text-main)] font-[var(--font-heading)]">+ 1.800 ₺</span>
              <span className="text-[9px] uppercase tracking-widest text-[var(--text-muted)] block mt-0.5">Sommelier Şarap Seçkisi</span>
            </div>
          </div>

          <div>
            <a 
              href="#reservation" 
              onClick={handleTastingReservationClick}
              className="inline-block w-full sm:w-auto px-8 py-4 rounded-full bg-[var(--accent)] text-[var(--bg-primary)] font-extrabold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-[8px_8px_20px_rgba(0,0,0,0.5),-4px_-4px_12px_rgba(255,255,255,0.2),0_0_30px_var(--accent-glow)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.6)] text-center cursor-pointer"
            >
              Tadım Masası Rezerve Et
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}