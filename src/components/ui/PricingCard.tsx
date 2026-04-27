"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import type { PricingTier } from "@/lib/constants";
import { UI } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

interface PricingCardProps {
  tier: PricingTier;
}

export function PricingCard({ tier }: PricingCardProps) {
  const { t } = useLanguage();

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1",
        tier.highlighted
          ? "bg-navy-800 text-white border-navy-800 shadow-2xl shadow-navy-800/25 scale-[1.02]"
          : "bg-white text-gray-900 border-gray-200 shadow-sm hover:shadow-lg"
      )}
    >
      {tier.highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-orange-500 rounded-full shadow-lg">
            {t(UI.pricing.popular)}
          </span>
        </div>
      )}

      <div>
        <h3
          className={cn(
            "text-lg font-bold",
            tier.highlighted ? "text-white" : "text-navy-800"
          )}
        >
          {t(tier.name)}
        </h3>
        <p
          className={cn(
            "mt-1 text-sm",
            tier.highlighted ? "text-gray-300" : "text-gray-500"
          )}
        >
          {t(tier.description)}
        </p>
      </div>

      <div className="mt-6 flex items-baseline gap-1">
        <span
          className={cn(
            "text-4xl font-extrabold",
            tier.highlighted ? "text-white" : "text-navy-800"
          )}
        >
          {t(tier.price)}
        </span>
        {t(tier.period) && (
          <span
            className={cn(
              "text-sm",
              tier.highlighted ? "text-gray-300" : "text-gray-500"
            )}
          >
            {t(tier.period)}
          </span>
        )}
      </div>

      <ul className="mt-8 flex-1 space-y-3">
        {tier.features.map((f, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check
              size={18}
              className={cn(
                "flex-shrink-0 mt-0.5",
                tier.highlighted ? "text-orange-400" : "text-orange-500"
              )}
            />
            <span
              className={cn(
                "text-sm",
                tier.highlighted ? "text-gray-200" : "text-gray-600"
              )}
            >
              {t(f)}
            </span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={cn(
          "mt-8 block w-full py-3 text-center text-sm font-semibold rounded-full transition-all duration-200",
          tier.highlighted
            ? "bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/25"
            : "bg-navy-800 text-white hover:bg-navy-900"
        )}
      >
        {t(tier.cta)}
      </a>
    </div>
  );
}
