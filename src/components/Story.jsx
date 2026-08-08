import { motion } from "framer-motion";
import { restaurantConfig } from "../config/restaurantConfig";

export default function Story() {
  return (
    <section id="story" className="py-28 px-6 md:px-16 max-w-7xl mx-auto relative overflow-hidden">
      
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Sol - Görsel Kompozisyonu */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative h-[500px] rounded-3xl overflow-hidden glass-panel p-2">
            <img 
              src={restaurantConfig.images.chefStory} 
              alt={restaurantConfig.story.chefName} 
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 glass-panel p-6 rounded-2xl hidden sm:block max-w-xs shadow-2xl backdrop-blur-2xl">
            <p className="text-xs text-[var(--accent)] uppercase font-bold tracking-widest mb-1">Başşef</p>
            <p className="text-lg font-bold font-[var(--font-heading)]">{restaurantConfig.story.chefName}</p>
          </div>
        </motion.div>

        {/* Sağ - Metin Detayları */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] font-bold block mb-3">
            Mutfak Felsefemiz
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-[var(--font-heading)] mb-6 leading-tight">
            {restaurantConfig.story.title}
          </h2>
          
          <div className="space-y-4 text-sm md:text-base text-[var(--text-muted)] font-light leading-relaxed">
            <p>
              Ege Körfezi'nin zengin deniz ürünlerini ve mikro yerel üreticilerden edindiğimiz ata tohumu sebzeleri, Klasik Fransız mutfağının moleküler teknikleriyle bir araya getiriyoruz.
            </p>
            <p>
              Mutfaktaki temel felsefemiz; tabağa gelen her bileşenin kendi lezzetini saf ve en rafine haliyle hissettirmesidir. Menümüz, doğanın mevsimsel ritmine saygı duyarak yılda 4 kez tamamen yenilenir.
            </p>
          </div>

          {/* İstatistik & Değerler Grid */}
          <div className="grid grid-cols-3 gap-4 border-t border-[var(--border-color)] pt-8 mt-8 text-center sm:text-left">
            <div>
              <span className="block text-2xl font-bold text-[var(--accent)] font-[var(--font-heading)]">%100</span>
              <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Yerel Mahsul</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-[var(--accent)] font-[var(--font-heading)]">Michelin</span>
              <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Seçkisi</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-[var(--accent)] font-[var(--font-heading)]">0-Atık</span>
              <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Mutfak İlkesi</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}