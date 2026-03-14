"use client";

import { motion } from "framer-motion";
import {
  Braces,
  BrainCircuit,
  Database,
  FileCode,
  Flame,
  Layers,
  Layout,
  Monitor,
  Server,
  Table,
  Wind,
} from "lucide-react";
import { skills } from "./portfolioData";

const iconBySkill = {
  HTML: FileCode,
  CSS: Layout,
  JavaScript: Braces,
  React: Monitor,
  "Next.js": Layers,
  Tailwind: Wind,
  "Node.js": Server,
  "Express.js": Server,
  PHP: FileCode,
  MongoDB: Database,
  Firebase: Flame,
  PostgreSQL: Table,
  TensorFlow: BrainCircuit,
  "Gemini API": BrainCircuit,
};

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
      >
        <p className="mb-3 text-sm uppercase tracking-[0.22em] text-cyan-300">Skills</p>
        <h2 className="section-title">Tech Stack</h2>
      </motion.div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {skills.map((group, idx) => (
          <motion.article
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            className="glass-card rounded-2xl p-5"
          >
            <h3 className="text-lg font-semibold text-slate-100">{group.category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => {
                const Icon = iconBySkill[skill] || Braces;
                return (
                  <motion.div
                    key={skill}
                    whileHover={{ y: -4, scale: 1.03 }}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-sm text-slate-100"
                  >
                    <Icon size={14} className="text-cyan-300" />
                    <span>{skill}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
