'use client';

import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { ROUTES } from '../../lib/constants';
import { easing } from '../../design-system/animations';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easing.default },
  },
};

export function HubContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero */}
      <motion.div variants={itemVariants} className="mb-16 md:mb-24">
        <h1 className="font-heading text-[length:var(--text-h1)] font-light leading-[var(--leading-h1)] mb-6">
          Nous découvrir
        </h1>
        <p className="max-w-[600px] text-[length:var(--text-body)] text-graphite leading-[var(--leading-body)]">
          L&apos;institut La Clé repose sur un cadre, une vision et des personnes.
          Choisissez par où commencer.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        className="grid gap-6 md:gap-8 md:grid-cols-3"
      >
        <motion.div variants={itemVariants}>
          <Card
            href={ROUTES.vocation}
            title="Notre vocation"
            description="Comprendre le pourquoi profond de l'institut, sa vision de l'excellence et son engagement envers la rigueur."
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Card
            href={ROUTES.concept}
            title="Le concept"
            description="La structure pédagogique, le cadre méthodologique et le positionnement qui fondent l'approche de La Clé."
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Card
            href={ROUTES.equipe}
            title="L'équipe"
            description="Les garants du cadre humain et pédagogique. Un collectif au service de la compréhension."
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
