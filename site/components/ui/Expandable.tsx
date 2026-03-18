'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { duration, easing } from '../../design-system/animations';

type ExpandableProps = {
  trigger: string;
  children: React.ReactNode;
};

export function Expandable({ trigger, children }: ExpandableProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="font-body text-[length:var(--text-body-sm)] text-bronze transition-colors duration-[var(--duration-medium)] hover:text-bronze-hover"
        aria-expanded={isOpen}
      >
        {isOpen ? 'Réduire' : trigger}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: duration.slow, ease: easing.default }}
            className="overflow-hidden"
          >
            <div className="pt-6">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
