import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./styles/themes.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import TastingMenu from "./components/TastingMenu";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";

const BACKEND_URL = "https://theme-backend-vh34.onrender.com";
const socket = io(BACKEND_URL);
const CURRENT_SITE_ID = "restaurant-onepage";

export default function App() {
  const [currentTheme, setCurrentTheme] = useState("michelin-dark");

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/themes/${CURRENT_SITE_ID}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.activeTheme) {
          setCurrentTheme(data.activeTheme);
        }
      })
      .catch((err) => console.error(err));

    const handleThemeChange = (data) => {
      if (data.siteId === CURRENT_SITE_ID && data.activeTheme) {
        setCurrentTheme(data.activeTheme);
      }
    };

    socket.on("theme_changed", handleThemeChange);

    return () => {
      socket.off("theme_changed", handleThemeChange);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

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