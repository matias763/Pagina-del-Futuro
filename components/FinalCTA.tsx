'use client';

import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24 pt-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass neon-border rounded-3xl p-10 text-center"
      >
        <h2 className="text-3xl font-black text-white md:text-5xl">Reserva tu lugar en la nueva era espacial</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Agenda una demo privada con nuestro equipo orbital y recibe una propuesta personalizada en 24 horas.
        </p>
        <button className="mt-8 rounded-xl bg-gradient-to-r from-cyan-300 to-violet-500 px-8 py-4 font-semibold text-slate-950 shadow-violet transition hover:scale-[1.02]">
          Iniciar reserva
        </button>
      </motion.div>
    </section>
  );
}
