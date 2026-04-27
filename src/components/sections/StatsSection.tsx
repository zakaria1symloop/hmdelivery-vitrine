"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export function StatsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <AnimatedCounter
              key={stat.value}
              target={stat.value}
              suffix={stat.suffix}
              label={t(stat.label)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
