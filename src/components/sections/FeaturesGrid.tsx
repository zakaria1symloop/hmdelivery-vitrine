"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SERVICES, UI } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export function FeaturesGrid() {
  const { t } = useLanguage();

  return (
    <section id="services" className="section-padding bg-gray-50">
      <Container>
        <SectionHeading
          badge={t(UI.services.badge)}
          title={t(UI.services.title)}
          subtitle={t(UI.services.subtitle)}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <FeatureCard
              key={i}
              icon={service.icon}
              title={t(service.title)}
              description={t(service.description)}
              index={i}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
