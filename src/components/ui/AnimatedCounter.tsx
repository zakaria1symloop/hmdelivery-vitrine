"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  label: string;
}

export function AnimatedCounter({ target, suffix = "", label }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [started, target]);

  const formatNumber = (n: number) => {
    if (n >= 1000) return n.toLocaleString("fr-FR");
    return n.toString();
  };

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl sm:text-5xl font-extrabold text-navy-800">
        {formatNumber(count)}
        <span className="text-orange-500">{suffix}</span>
      </div>
      <p className="mt-2 text-sm font-medium text-gray-500">{label}</p>
    </div>
  );
}
