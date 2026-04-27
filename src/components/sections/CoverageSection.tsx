"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WILAYAS, UI } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin } from "lucide-react";

export function CoverageSection() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-navy-800 text-white">
      <Container>
        <SectionHeading
          badge={t(UI.coverage.badge)}
          title={t(UI.coverage.title)}
          subtitle={t(UI.coverage.subtitle)}
          light
        />

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
          {UI.coverage.stats.map((stat) => (
            <div key={stat.value} className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-orange-500">
                {stat.value}
              </div>
              <p className="mt-1 text-sm text-gray-300">{t(stat.label)}</p>
            </div>
          ))}
        </div>

        {/* Wilaya badges grid */}
        <div className="flex flex-wrap justify-center gap-2">
          {WILAYAS.map((wilaya, i) => (
            <motion.span
              key={wilaya}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.01, duration: 0.3 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white/10 text-gray-200 rounded-full border border-white/10 hover:bg-orange-500/20 hover:text-orange-300 hover:border-orange-500/30 transition-colors cursor-default"
            >
              <MapPin size={10} className="text-orange-400" />
              {wilaya}
            </motion.span>
          ))}
        </div>
      </Container>
    </section>
  );
}
