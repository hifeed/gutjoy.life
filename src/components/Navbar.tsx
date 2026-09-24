"use client";

import { useLang } from "@/contexts/LangContext";
import ClubButton from "@/components/ClubButton";

export default function Navbar() {
  const { lang, t, toggleLang } = useLang();

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-16 py-4 bg-surface/90 backdrop-blur-md transition-all duration-300 ${
        typeof window !== "undefined" && window.scrollY > 20 ? "shadow-md py-2" : ""
      }`}
      id="main-nav"
    >
      <div className="flex items-center gap-2">
        <span className="font-[family-name:var(--font-brand)] text-2xl md:text-3xl font-bold tracking-tight">
          <span className="text-primary">Gut</span>
          <span className="text-secondary">Joy</span>
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <a
          className="font-[family-name:var(--font-label-md)] text-sm font-bold border-b-2 border-primary pb-1"
          href="#"
        >
          {t.navbar.home}
        </a>
        <a
          className="font-[family-name:var(--font-label-md)] text-sm text-on-surface-variant hover:text-primary transition-colors hover:bg-primary/5 px-3 py-2 rounded-md"
          href="#about"
        >
          {t.navbar.about}
        </a>
        <a
          className="font-[family-name:var(--font-label-md)] text-sm text-on-surface-variant hover:text-primary transition-colors hover:bg-primary/5 px-3 py-2 rounded-md"
          href="#partnership"
        >
          {t.navbar.partnership}
        </a>
        <a
          className="font-[family-name:var(--font-label-md)] text-sm text-on-surface-variant hover:text-primary transition-colors hover:bg-primary/5 px-3 py-2 rounded-md"
          href="#contact"
        >
          {t.navbar.contact}
        </a>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={toggleLang}
          aria-label={`Switch language to ${lang === "id" ? "EN" : "ID"}`}
          className="hidden md:flex items-center justify-center font-[family-name:var(--font-label-md)] text-xs font-bold tracking-wider w-9 h-9 rounded-full border border-outline-variant text-on-surface-variant hover:bg-primary/5 hover:text-primary transition-colors"
        >
          {lang === "id" ? "EN" : "ID"}
        </button>
        <ClubButton className="text-sm px-6 py-2.5 scale-95 active:scale-90 hidden md:flex" />
        <button
          className="md:hidden text-on-surface p-2"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}
