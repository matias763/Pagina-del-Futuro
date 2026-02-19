'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const crafts = [
  {
    name: 'Astra Vortex X1',
    speed: 'Warp 9.2',
    price: '€14.5M',
    image:
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Nebula Sovereign S',
    speed: 'Warp 8.8',
    price: '€11.8M',
    image:
      'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Orion Apex GT',
    speed: 'Warp 9.6',
    price: '€18.2M',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80'
  }
];

export default function ModelsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-gradient text-3xl font-black md:text-4xl">Modelos insignia</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {crafts.map((craft, i) => (
          <motion.article
            key={craft.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.12, duration: 0.7 }}
            whileHover={{ y: -8 }}
            className="glass neon-border group overflow-hidden rounded-2xl"
          >
            <div className="relative h-52">
              <Image src={craft.image} alt={craft.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="space-y-3 p-5">
              <h3 className="text-xl font-bold text-white">{craft.name}</h3>
              <p className="text-sm text-slate-300">Velocidad: {craft.speed}</p>
              <p className="text-sm text-slate-300">Precio estimado: {craft.price}</p>
              <button className="mt-2 rounded-lg border border-violet-300/30 px-4 py-2 text-sm text-violet-200 transition hover:bg-violet-400/20">
                Ver detalles
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
