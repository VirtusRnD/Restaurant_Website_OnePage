import { restaurantConfig } from "../config/restaurantConfig";

export default function Footer() {
  return (
    <footer id="contact" className="py-20 border-t border-[var(--border-color)] bg-[var(--bg-primary)] text-sm relative">
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Marka & Slogan */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[var(--accent)] font-[var(--font-heading)]">
            {restaurantConfig.info.name}
          </h3>
          <p className="text-[var(--text-muted)] font-light text-xs leading-relaxed max-w-sm">
            {restaurantConfig.info.subtitle}
          </p>
        </div>

        {/* Çalışma Saatleri */}
        <div className="space-y-3">
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--text-main)] mb-2">
            Çalışma Saatleri
          </h4>
          <p className="text-[var(--text-muted)] font-light text-xs">
            {restaurantConfig.info.hours}
          </p>
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-[10px] font-semibold border border-[var(--accent)]/20">
            Pazartesi Günleri Kapalıyız
          </span>
        </div>

        {/* İletişim & Konum */}
        <div className="space-y-3">
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--text-main)] mb-2">
            Konum & İletişim
          </h4>
          <p className="text-[var(--text-muted)] font-light text-xs leading-relaxed">
            📍 {restaurantConfig.info.address}
          </p>
          <p className="text-xs">
            📞 <a href={`tel:${restaurantConfig.info.phone}`} className="text-[var(--accent)] font-semibold hover:underline ml-1">
              {restaurantConfig.info.phone}
            </a>
          </p>
          <div className="pt-2">
            <a 
              href={`https://maps.google.com/?q=${encodeURIComponent(restaurantConfig.info.address)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-[10px] uppercase font-bold tracking-wider text-[var(--accent)] glass-panel px-4 py-2 rounded-lg border border-[var(--border-color)] hover:bg-[var(--accent)] hover:text-[var(--bg-primary)] transition-all"
            >
              🗺️ Haritalarda Aç
            </a>
          </div>
        </div>

      </div>

      <div className="mt-16 pt-8 border-t border-[var(--border-color)]/30 text-center text-[11px] text-[var(--text-muted)] opacity-60">
        © 2026 {restaurantConfig.info.name}. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}