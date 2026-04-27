"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-navy-800/5 group-hover:bg-orange-500 transition-colors duration-300">
        <Icon
          size={24}
          className="text-navy-800 group-hover:text-white transition-colors duration-300"
        />
      </div>
      <h3 className="mt-4 text-lg font-bold text-navy-800">{title}</h3>
      <p className="mt-2 text-sm text-gray-500 leading-relaxed">{description}</p>
    </motion.div>
  );
}
