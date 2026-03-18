'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Logo } from '../layout/Logo';
import { SITE, ROUTES, EXTERNAL } from '../../lib/constants';
import { easing } from '../../design-system/animations';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: easing.default },
  },
};

export function HomeContent() {
  return (
    <div
      className="relative flex min-h-[100dvh] flex-col items-center overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 70% 50% at 50% 42%, rgba(255,255,255,0.18) 0%, transparent 100%), var(--color-ivory)',
      }}
    >
      {/* Logo */}
      <header className="w-full max-w-[var(--max-width)] px-6 pt-10 md:px-12 md:pt-12 lg:px-20">
        <Logo />
      </header>

      {/* Center block */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-1 flex-col items-center justify-center px-6 text-center"
      >
        {/* Title — architectural anchor */}
        <motion.h1
          variants={itemVariants}
          className="font-heading text-[3.5rem] font-light leading-[1.05] tracking-[0.08em] md:text-[5.5rem] md:tracking-[0.1em] lg:text-[7rem] lg:tracking-[0.12em]"
        >
          {SITE.name}
        </motion.h1>

        {/* Baseline — hierarchically recessed */}
        <motion.p
          variants={itemVariants}
          className="mt-5 text-[length:var(--text-body-sm)] tracking-[0.03em] text-graphite md:mt-6"
        >
          {SITE.tagline}
        </motion.p>

        {/* Structural pause — single vertical line */}
        <motion.div
          variants={itemVariants}
          className="my-10 h-14 w-px md:my-12"
          style={{ backgroundColor: 'rgba(155, 138, 110, 0.2)' }}
          aria-hidden="true"
        />

        {/* Actions — three doors, same weight */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-3.5 lg:flex-row lg:gap-4"
        >
          <Button href={ROUTES.decouvrir}>Nous découvrir</Button>
          <Button href={ROUTES.formations}>Catalogue des formations</Button>
          <Button href={EXTERNAL.lms}>Espace apprenant</Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
