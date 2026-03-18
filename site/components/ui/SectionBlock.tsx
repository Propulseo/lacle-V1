'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInUp } from '@/design-system/animations';

type SectionBlockProps = {
  children: React.ReactNode;
  className?: string;
  separator?: boolean;
};

export function SectionBlock({ children, className = '', separator = false }: SectionBlockProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' });

  return (
    <motion.section
      ref={ref}
      initial={fadeInUp.initial}
      animate={isInView ? fadeInUp.animate : fadeInUp.initial}
      transition={fadeInUp.transition}
      className={`py-[var(--space-section)] ${className}`}
    >
      {separator && (
        <div className="mb-12 md:mb-16" aria-hidden="true">
          <div
            className="h-px w-10"
            style={{ backgroundColor: 'rgba(155, 138, 110, 0.25)' }}
          />
        </div>
      )}
      {children}
    </motion.section>
  );
}
