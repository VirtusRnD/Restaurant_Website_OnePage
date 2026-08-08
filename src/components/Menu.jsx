import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { restaurantConfig } from "../config/restaurantConfig.js";

export default function Menu() {
  // Tadım menüsünün otomatik açık kalmaması için varsayılan state null yapıldı
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (catId) => {
    setOpenCategory(openCategory === catId ? null : catId);
  };

  const scrollToReservation = (e) => {
    e.preventDefault();
    const event = new CustomEvent("setTastingMenuSelect");
    window.dispatchEvent(event);

    const el = document.getElementById("reservation");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="menu" className="py-32 px-6 md:px-16 max-w-5xl mx-auto relative">
      
      {/* Mistik Arka Plan Işık Efekti */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--accent)]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="text-center mb-16 relative z-10">
        <span className="text-xs uppercase tracking-[0.4em] text-[var(--accent)] font-bold block mb-3">
          Gastronomi Seçkisi
        </span>
        <h2 className="text-4xl md:text-6xl font-bold font-[var(--font-heading)]">
          A'la Carte Menümüz
        </h2>
        <p className="text-xs text-[var(--text-muted)] font-light mt-3">
          Kategorilerin üzerine tıklayarak tüm lezzetlerimizi ve 7 aşamalı tadım adımlarını inceleyebilirsiniz.
        </p>
      </div>

      <div className="space-y-5 relative z-10">
        {restaurantConfig.menuCategories.map((cat) => {
          const isOpen = openCategory === cat.id;
          const isTasting = cat.id === "tasting_menu";
          const items = restaurantConfig.menuItems.filter((item) => item.category === cat.id);

          if (items.length === 0) return null;

          return (
            <div 
              key={cat.id} 
              className={`glass-panel rounded-2xl overflow-hidden transition-all duration-500 ${
                isTasting 
                  ? "border-2 border-[var(--accent)] shadow-[0_0_25px_var(--accent-glow)] bg-gradient-to-r from-[var(--bg-card)] via-[var(--bg-card)] to-[var(--accent)]/10" 
                  : "border border-[var(--border-color)] hover:border-[var(--accent)]/50"
              }`}
            >
              {/* Kategori Başlığı */}
              <button
                onClick={() => toggleCategory(cat.id)}
                className="w-full px-8 py-6 flex items-center justify-between text-left transition-colors hover:bg-[var(--accent)]/5 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className={`text-lg md:text-xl font-bold font-[var(--font-heading)] ${isTasting ? "text-[var(--accent)]" : ""}`}>
                    {cat.name}
                  </span>
                  <span className={`text-xs px-3 py-0.5 rounded-full font-sans font-semibold ${isTasting ? "bg-[var(--accent)] text-[var(--bg-primary)]" : "glass-panel text-[var(--accent)]"}`}>
                    {isTasting ? "3.400 ₺ / Kişi" : `${items.length} Çeşit`}
                  </span>
                </div>
                <span className={`text-xl text-[var(--accent)] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                  ↓
                </span>
              </button>

              {/* Açılır / Kapanır İçerik */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 md:p-8 border-t border-[var(--border-color)]/50 grid md:grid-cols-2 gap-6">
                      {items.map((item) => (
                        <div key={item.id} className="glass-panel p-5 rounded-xl flex gap-4 items-center border border-[var(--border-color)]/30 hover:border-[var(--accent)] transition-all">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 rounded-lg object-cover shrink-0"
                            loading="lazy"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-baseline mb-1">
                              <h4 className="font-bold text-sm font-[var(--font-heading)]">{item.name}</h4>
                              <span className="text-xs font-bold text-[var(--accent)] shrink-0 ml-2">{item.price}</span>
                            </div>
                            <p className="text-[11px] text-[var(--text-muted)] font-light leading-snug mb-2">
                              {item.description}
                            </p>
                            <span className="inline-block bg-[var(--accent)]/10 text-[var(--accent)] text-[9px] px-2 py-0.5 rounded border border-[var(--accent)]/20">
                              {item.tag}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tadım Menüsü İçin Ekstra Rezervasyon Çağrısı */}
                    {isTasting && (
                      <div className="p-6 bg-[var(--accent)]/10 text-center border-t border-[var(--accent)]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-xs text-[var(--text-main)] font-light text-left">
                          ✨ 7 Aşamalı Tadım Deneyimi ve Sommelier Şarap Eşleşmesi için masanızı önceden ayırtın.
                        </p>
                        <a 
                          href="#reservation" 
                          onClick={scrollToReservation}
                          className="px-6 py-2.5 rounded-full bg-[var(--accent)] text-[var(--bg-primary)] font-bold text-xs uppercase tracking-wider shrink-0 hover:scale-105 transition-transform"
                        >
                          Tadım Masası Rezerve Et
                        </a>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}