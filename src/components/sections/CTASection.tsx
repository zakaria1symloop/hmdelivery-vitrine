"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { COMPANY, UI } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-r from-navy-800 via-navy-900 to-navy-800 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 end-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 start-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            {t(UI.cta.title)}{" "}
            <span className="text-orange-500">{COMPANY.shortName}</span> ?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            {t(UI.cta.subtitle).replace("{name}", COMPANY.name)}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-navy-800 bg-orange-500 rounded-full hover:bg-orange-400 transition-colors shadow-lg shadow-orange-500/25"
            >
              {t(UI.cta.startNow)}
              <ArrowRight size={16} />
            </a>
            <a
              href="tel:+213778789784"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-colors"
            >
              <Phone size={16} />
              {t(UI.cta.callUs)}
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
