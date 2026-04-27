"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingCard } from "@/components/ui/PricingCard";
import { PRICING_TIERS, UI } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export function PricingSection() {
  const { t } = useLanguage();

  return (
    <section id="tarifs" className="section-padding bg-gray-50">
      <Container>
        <SectionHeading
          badge={t(UI.pricing.badge)}
          title={t(UI.pricing.title)}
          subtitle={t(UI.pricing.subtitle)}
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PRICING_TIERS.map((tier, i) => (
            <PricingCard key={i} tier={tier} />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-gray-400">
          {t(UI.pricing.footer)}
        </p>
      </Container>
    </section>
  );
}
