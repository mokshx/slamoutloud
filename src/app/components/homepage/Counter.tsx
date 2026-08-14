'use client';

import { useEffect, useRef } from 'react';
import { useInView, motion, useMotionValue, useTransform, animate } from 'framer-motion';

interface CounterProps {
  value: number;
  from?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function Counter({ value, from = 0, prefix = '', suffix = '', duration = 2, className = '' }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => {
    return Math.floor(latest).toLocaleString('en-US');
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
