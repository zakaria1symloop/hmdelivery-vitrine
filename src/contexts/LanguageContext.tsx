"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Locale = "fr" | "ar";
export type Direction = "ltr" | "rtl";
export type T = { fr: string; ar: string };

interface LanguageContextValue {
  locale: Locale;
  dir: Direction;
  setLocale: (locale: Locale) => void;
  t: (text: T) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start "fr" to match server render
  const [locale, setLocaleState] = useState<Locale>("fr");
  const [ready, setReady] = useState(false);

  // After hydration, read saved locale and mark ready
  useEffect(() => {
    const saved = localStorage.getItem("locale");
    if (saved === "fr" || saved === "ar") {
      setLocaleState(saved);
    }
    setReady(true);
  }, []);

  const dir: Direction = locale === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir, ready]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("locale", l);
  };

  const t = (text: T) => text[locale];

  return (
    <LanguageContext.Provider value={{ locale, dir, setLocale, t }}>
      {/* Hide content until locale is resolved to prevent flash */}
      <div style={{ visibility: ready ? "visible" : "hidden" }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
