"use client";

import { FOOTER, COMPANY, CONTACT_INFO } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { Container } from "@/components/ui/Container";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy-800 text-white">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Image
                src="/images/logo.png"
                alt={COMPANY.name}
                width={200}
                height={50}
                className="h-14 w-auto brightness-0 invert mb-4"
              />
              <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                {t(FOOTER.description)}
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Phone size={16} className="text-orange-500 flex-shrink-0" />
                  {CONTACT_INFO.phone}
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Mail size={16} className="text-orange-500 flex-shrink-0" />
                  {CONTACT_INFO.email}
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <MapPin size={16} className="text-orange-500 flex-shrink-0" />
                  {t(CONTACT_INFO.address)}
                </div>
              </div>
            </div>

            {/* Link Columns */}
            {FOOTER.columns.map((col, colIdx) => (
              <div key={colIdx}>
                <h4 className="font-semibold text-white mb-4">{t(col.title)}</h4>
                <ul className="space-y-2.5">
                  {col.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
                      >
                        {t(link.label)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">{t(FOOTER.copyright)}</p>
          <div className="flex items-center gap-4">
            {["Facebook", "Instagram"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
