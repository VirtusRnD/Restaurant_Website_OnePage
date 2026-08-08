import { useState, useEffect } from "react";
import { restaurantConfig } from "../config/restaurantConfig";

export default function ReservationSection() {
  const [tableType, setTableType] = useState("standard");

  useEffect(() => {
    const handleTastingSelection = () => {
      setTableType("tasting");
    };

    window.addEventListener("setTastingMenuSelect", handleTastingSelection);

    return () => {
      window.removeEventListener("setTastingMenuSelect", handleTastingSelection);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Rezervasyon talebiniz alındı! Tarafınıza SMS ile onay iletilecektir.");
  };

  return (
    <section id="reservation" className="min-h-screen py-24 px-6 max-w-5xl mx-auto flex items-center justify-center scroll-mt-10">
      
      {/* YUVARLATILMIŞ GLASSMORPHIC & NEOMORPHIC KART */}
      <div 
        className="w-full p-8 md:p-14 relative overflow-hidden backdrop-blur-2xl bg-[var(--bg-card)]/80 border border-[var(--border-color)] rounded-[2.5rem] shadow-[20px_20px_50px_rgba(0,0,0,0.5),-10px_-10px_30px_rgba(255,255,255,0.02)]"
      >
        
        {/* İç Ambient Parıltı Efekti */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[var(--accent)]/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Üst Rozet & Başlık */}
        <div className="text-center mb-10 relative z-10">
          <span 
            className="text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] font-bold px-6 py-2 rounded-full bg-black/30 backdrop-blur-md border border-[var(--border-color)] inline-block mb-3 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.6)]"
          >
            UNUTULMAZ BİR DENEYİM
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-[var(--font-heading)] text-[var(--text-main)] mb-3">
            Masa Rezervasyonu
          </h2>
          <p className="text-xs text-[var(--text-muted)]">
            {restaurantConfig.info.reservationNotice || "Masalarımız için en az 2 gün önceden rezervasyon yapılması rica olunur."}
          </p>
        </div>

        {/* NEOMORPHIC İNPUTLAR & REZERVASYON FORMU */}
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 relative z-10">
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-2 font-bold">
              ADINIZ SOYADINIZ
            </label>
            <input 
              required 
              type="text" 
              placeholder="Adınız Soyadınız" 
              className="w-full bg-black/40 backdrop-blur-xl border border-[var(--border-color)] px-5 py-3.5 text-sm text-[var(--text-main)] placeholder-[var(--text-muted)] placeholder:opacity-50 outline-none focus:border-[var(--accent)] transition-all shadow-[inset_4px_4px_10px_rgba(0,0,0,0.6),inset_-2px_-2px_6px_rgba(255,255,255,0.03)] rounded-2xl" 
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-2 font-bold">
              TELEFON NUMARASI
            </label>
            <input 
              required 
              type="tel" 
              placeholder="+90 (5XX) XXX XX XX" 
              className="w-full bg-black/40 backdrop-blur-xl border border-[var(--border-color)] px-5 py-3.5 text-sm text-[var(--text-main)] placeholder-[var(--text-muted)] placeholder:opacity-50 outline-none focus:border-[var(--accent)] transition-all shadow-[inset_4px_4px_10px_rgba(0,0,0,0.6),inset_-2px_-2px_6px_rgba(255,255,255,0.03)] rounded-2xl" 
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-2 font-bold">
              TARİH
            </label>
            <input 
              required 
              type="date" 
              className="w-full bg-black/40 backdrop-blur-xl border border-[var(--border-color)] px-5 py-3.5 text-sm text-[var(--text-main)] outline-none focus:border-[var(--accent)] transition-all shadow-[inset_4px_4px_10px_rgba(0,0,0,0.6),inset_-2px_-2px_6px_rgba(255,255,255,0.03)] rounded-2xl" 
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-2 font-bold">
              MASA DENEYİMİ SEÇİMİ
            </label>
            <select 
              value={tableType}
              onChange={(e) => setTableType(e.target.value)}
              className="w-full bg-black/40 backdrop-blur-xl border border-[var(--border-color)] px-5 py-3.5 text-sm text-[var(--text-main)] outline-none focus:border-[var(--accent)] transition-all cursor-pointer shadow-[inset_4px_4px_10px_rgba(0,0,0,0.6),inset_-2px_-2px_6px_rgba(255,255,255,0.03)] rounded-2xl"
            >
              <option value="standard" className="bg-[var(--bg-card)] text-[var(--text-main)]">Standart A'La Carte Masa (2-4 Kişi)</option>
              <option value="tasting" className="bg-[var(--bg-card)] text-[var(--text-main)]">⭐ Şefin Tadım Masası (7 Aşamalı Özel Deneyim)</option>
              <option value="group" className="bg-[var(--bg-card)] text-[var(--text-main)]">Grup & Özel Davet Masası (6+ Kişi)</option>
            </select>
          </div>

          {/* YUVARLATILMIŞ AKSİYON BUTONU */}
          <div className="md:col-span-2 mt-4">
            <button 
              type="submit" 
              className="w-full py-4 bg-[var(--accent)] text-[var(--bg-primary)] font-[var(--font-heading)] font-extrabold uppercase text-xs tracking-[0.2em] transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer rounded-2xl shadow-[8px_8px_20px_rgba(0,0,0,0.4),-4px_-4px_12px_rgba(255,255,255,0.1),0_0_25px_var(--accent-glow)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.6)]"
            >
              REZERVASYONU ONAYLA
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}