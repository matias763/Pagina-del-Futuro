'use client';

import { motion } from 'framer-motion';

const stats = [
  { label: 'Velocidad pico', value: '1.8c' },
  { label: 'Autonomía', value: '420,000 km' },
  { label: 'AI Onboard', value: 'Synapse v12' }
];

export default function InteractiveSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="glass neon-border rounded-3xl p-8 md:p-12"
      >
        <h2 className="text-3xl font-black text-white md:text-4xl">Experiencia interactiva holográfica</h2>
        <p className="mt-4 max-w-2xl text-slate-300">
          Dashboard cinemático con parallax suave, telemetría en tiempo real y asistente de ruta intergaláctica.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="rounded-xl border border-cyan-200/20 bg-slate-900/50 p-5"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">{stat.label}</p>
              <p className="mt-3 text-2xl font-bold text-white">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
