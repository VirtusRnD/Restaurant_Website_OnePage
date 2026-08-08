import { useEffect } from "react";
import { restaurantConfig } from "./config/restaurantConfig";
import "./styles/themes.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import TastingMenu from "./components/TastingMenu";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", restaurantConfig.theme);
  }, []);

  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-main)] min-h-screen font-[var(--font-heading)] transition-colors duration-700 selection:bg-[var(--accent)] selection:text-[var(--bg-primary)]">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <TastingMenu />
        <Menu />
        <Reservation />
      </main>
      <Footer />
    </div>
  );
}