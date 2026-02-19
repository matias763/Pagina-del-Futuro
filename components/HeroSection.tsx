'use client';

import { motion } from 'framer-motion';
import SpacecraftCanvas from './SpacecraftCanvas';

export default function HeroSection() {
  return (
    <section className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-28 md:grid-cols-2 md:items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.26em] text-cyan-200">
          Ingeniería orbital premium
        </p>
        <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
          Explora el futuro del transporte interplanetario
        </h1>
        <p className="mt-6 max-w-xl text-base text-slate-300">
          Fleet privada con tecnología de propulsión cuántica, interiores de clase ejecutiva y AI de navegación predictiva.
        </p>
        <motion.button
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="mt-9 rounded-xl border border-cyan-300/30 bg-gradient-to-r from-cyan-400/70 to-violet-500/70 px-8 py-4 font-semibold text-slate-950 shadow-neon transition"
        >
          Reservar Nave
        </motion.button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.2 }}
        className="glass neon-border rounded-3xl p-3"
      >
        <SpacecraftCanvas />
      </motion.div>
    </section>
  );
}
