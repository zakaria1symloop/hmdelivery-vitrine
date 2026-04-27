"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FEATURES, UI } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check } from "lucide-react";

export function FeatureShowcase() {
  const { t, dir } = useLanguage();
  const isRTL = dir === "rtl";

  // Show 6 features in alternating layout
  const showcaseFeatures = FEATURES.slice(0, 6);

  return (
    <section id="fonctionnalites" className="section-padding bg-white">
      <Container>
        <SectionHeading
          badge={t(UI.features.badge)}
          title={t(UI.features.title)}
          subtitle={t(UI.features.subtitle)}
        />

        <div className="space-y-20">
          {showcaseFeatures.map((feature, i) => {
            const Icon = feature.icon;
            // In RTL, we flip the alternation
            const isReversed = isRTL ? i % 2 === 0 : i % 2 === 1;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Visual side */}
                <div className={isReversed ? "lg:order-2" : ""}>
                  <div className="relative bg-gradient-to-br from-navy-800/5 to-orange-500/5 rounded-3xl p-10 flex items-center justify-center min-h-[280px]">
                    <div className="w-24 h-24 bg-navy-800 rounded-3xl flex items-center justify-center shadow-xl">
                      <Icon size={48} className="text-white" />
                    </div>
                    {/* Floating dots */}
                    <div className="absolute top-6 end-8 w-3 h-3 bg-orange-500 rounded-full animate-bounce-slow" />
                    <div className="absolute bottom-8 start-10 w-2 h-2 bg-navy-800 rounded-full animate-bounce-slow" style={{ animationDelay: "1s" }} />
                  </div>
                </div>

                {/* Text side */}
                <div className={isReversed ? "lg:order-1" : ""}>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-50 rounded-full mb-4">
                    <Icon size={16} className="text-orange-600" />
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      {t(feature.title)}
                    </span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-extrabold text-navy-800">
                    {t(feature.title)}
                  </h3>
                  <p className="mt-4 text-gray-500 leading-relaxed">
                    {t(feature.description)}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {UI.features.bullets.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check size={12} className="text-white" />
                        </div>
                        <span className="text-sm text-gray-600">{t(item)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
