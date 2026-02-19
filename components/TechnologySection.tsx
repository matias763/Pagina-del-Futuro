'use client';

import { motion } from 'framer-motion';

const tech = [
  {
    title: 'Propulsión cuántica',
    detail: 'Saltos más estables con reducción del 32% en tiempo de viaje orbital.'
  },
  {
    title: 'Escudos energéticos',
    detail: 'Capas adaptativas de protección térmica y defensa de impacto de micrometeoritos.'
  },
  {
    title: 'Navegación AI',
    detail: 'Sistema cognitivo con predicción de trayectorias y corrección autónoma.'
  }
];

export default function TechnologySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-3xl font-black text-white md:text-4xl">Tecnología core</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {tech.map((item, idx) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: idx * 0.12, duration: 0.65 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-lg font-bold text-cyan-200">{item.title}</h3>
            <p className="mt-3 text-sm text-slate-300">{item.detail}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
