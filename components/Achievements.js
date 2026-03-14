"use client";

import { motion } from "framer-motion";
import { Award, Medal, Sparkles } from "lucide-react";
import { achievements } from "./portfolioData";

const iconByIndex = [Award, Medal, Sparkles];

export default function Achievements() {
  return (
    <section id="achievements" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
      >
        <p className="mb-3 text-sm uppercase tracking-[0.22em] text-cyan-300">Achievements</p>
        <h2 className="section-title">Milestones & Recognition</h2>
      </motion.div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {achievements.map((item, index) => {
          const Icon = iconByIndex[index] || Award;
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="mb-4 inline-flex rounded-xl bg-cyan-300/15 p-3 text-cyan-200">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-slate-100">{item.title}</h3>
              <p className="section-copy mt-2 text-sm leading-relaxed">{item.detail}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
