"use client";

import { NAV_LINKS, COMPANY, UI } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { X, Languages } from "lucide-react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { locale, setLocale, t } = useLanguage();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40" onClick={onClose} />

      {/* Slide-in panel */}
      <div className="fixed top-0 end-0 w-80 max-w-full h-full bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <span className="text-lg font-bold text-navy-800">{COMPANY.name}</span>
          <button onClick={onClose} className="p-2 text-gray-500 hover:text-gray-700">
            <X size={22} />
          </button>
        </div>

        <div className="flex-1 px-5 py-6 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="block px-4 py-3 text-base font-medium text-gray-700 rounded-lg hover:bg-gray-50 hover:text-navy-800 transition-colors"
            >
              {t(link.label)}
            </a>
          ))}

          {/* Language switcher */}
          <button
            onClick={() => setLocale(locale === "fr" ? "ar" : "fr")}
            className="flex items-center gap-2 w-full px-4 py-3 text-base font-medium text-gray-700 rounded-lg hover:bg-gray-50 hover:text-navy-800 transition-colors"
          >
            <Languages size={18} />
            {locale === "fr" ? "العربية" : "Français"}
          </button>
        </div>

        <div className="p-5 space-y-3 border-t border-gray-100">
          <a
            href={COMPANY.loginUrl}
            className="block w-full px-5 py-3 text-center text-sm font-semibold text-navy-800 border-2 border-navy-800 rounded-full hover:bg-navy-800 hover:text-white transition-all"
          >
            {t(UI.navbar.login)}
          </a>
          <a
            href="#contact"
            onClick={onClose}
            className="block w-full px-5 py-3 text-center text-sm font-semibold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-all"
          >
            {t(UI.navbar.becomeSeller)}
          </a>
        </div>
      </div>
    </div>
  );
}
