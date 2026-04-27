"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HOW_IT_WORKS, UI } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="comment-ca-marche" className="section-padding bg-gray-50">
      <Container>
        <SectionHeading
          badge={t(UI.howItWorks.badge)}
          title={t(UI.howItWorks.title)}
          subtitle={t(UI.howItWorks.subtitle)}
        />

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-0.5 bg-gradient-to-r from-navy-800 via-orange-500 to-navy-800" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOW_IT_WORKS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative text-center"
              >
                {/* Step number */}
                <div className="relative mx-auto w-14 h-14 bg-navy-800 rounded-2xl flex items-center justify-center text-xl font-extrabold text-white shadow-lg z-10">
                  {step.step}
                  {i < HOW_IT_WORKS.length - 1 && (
                    <div className="absolute -right-1 -bottom-1 w-4 h-4 bg-orange-500 rounded-full" />
                  )}
                </div>
                <h3 className="mt-6 text-lg font-bold text-navy-800">{t(step.title)}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {t(step.description)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
