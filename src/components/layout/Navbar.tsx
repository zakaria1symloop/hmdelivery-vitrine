"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Languages } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS, COMPANY, UI } from "@/lib/constants";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useLanguage } from "@/contexts/LanguageContext";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const { isScrolled } = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg border-b border-gray-100"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between h-28 lg:h-32">
            {/* Logo */}
            <a href="#accueil" className="flex items-center gap-2 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt={COMPANY.name}
                width={360}
                height={100}
                className="h-20 lg:h-24 w-auto"
                priority
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-navy-800 transition-colors relative after:absolute after:bottom-0 after:start-0 after:w-0 after:h-0.5 after:bg-orange-500 hover:after:w-full after:transition-all"
                >
                  {t(link.label)}
                </a>
              ))}
            </div>

            {/* CTA Buttons + Language Switcher */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setLocale(locale === "fr" ? "ar" : "fr")}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-gray-600 hover:text-navy-800 border border-gray-200 rounded-full hover:border-navy-800 transition-all duration-200"
                aria-label="Switch language"
              >
                <Languages size={16} />
                {locale === "fr" ? "AR" : "FR"}
              </button>
              <a
                href={COMPANY.loginUrl}
                className="px-5 py-2.5 text-sm font-semibold text-navy-800 border-2 border-navy-800 rounded-full hover:bg-navy-800 hover:text-white transition-all duration-200"
              >
                {t(UI.navbar.login)}
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 text-sm font-semibold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-all duration-200 shadow-lg shadow-orange-500/25"
              >
                {t(UI.navbar.becomeSeller)}
              </a>
            </div>

            {/* Mobile: Language + Menu */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setLocale(locale === "fr" ? "ar" : "fr")}
                className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold text-gray-600 border border-gray-200 rounded-full hover:border-navy-800 hover:text-navy-800 transition-all"
                aria-label="Switch language"
              >
                <Languages size={14} />
                {locale === "fr" ? "AR" : "FR"}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-gray-700 hover:text-navy-800"
                aria-label="Menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </Container>
      </nav>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
