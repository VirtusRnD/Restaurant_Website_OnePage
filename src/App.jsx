import { useEffect, useState } from "react";
import "./styles/themes.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import TastingMenu from "./components/TastingMenu";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";

// Optional live theme switcher: set VITE_THEME_BACKEND_URL to turn it on (see .env.example).
const BACKEND_URL = import.meta.env.VITE_THEME_BACKEND_URL;
const CURRENT_SITE_ID = "restaurant-onepage";

export default function App() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem(`${CURRENT_SITE_ID}-theme`);
    return savedTheme || "michelin-dark";
  });

  useEffect(() => {
    if (!BACKEND_URL) return;
    let socket;
    let unmounted = false;
    fetch(`${BACKEND_URL}/api/themes/${CURRENT_SITE_ID}`, { signal: AbortSignal.timeout(5000) })
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

    import("socket.io-client").then(({ io }) => {
      if (unmounted) return;
      socket = io(BACKEND_URL);
      socket.on("theme_changed", handleThemeChange);
    });

    return () => {
      unmounted = true;
      socket?.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === "THEME_CHANGE" && event.data.themeKey && event.data.siteId === CURRENT_SITE_ID) {
        setCurrentTheme(event.data.themeKey);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  useEffect(() => {
    localStorage.setItem(`${CURRENT_SITE_ID}-theme`, currentTheme);
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