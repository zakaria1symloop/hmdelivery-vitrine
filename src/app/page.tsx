"use client";

import { Toaster } from "react-hot-toast";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CoverageSection } from "@/components/sections/CoverageSection";

import { ContactSection } from "@/components/sections/ContactSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            borderRadius: "12px",
            padding: "12px 16px",
          },
        }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesGrid />
        <FeatureShowcase />
        <HowItWorks />
        <CoverageSection />

        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
