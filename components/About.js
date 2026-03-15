"use client";

import { motion } from "framer-motion";
import { BookOpen, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-shell pt-8 sm:pt-10">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
      >
        <p className="mb-3 text-sm uppercase tracking-[0.22em] text-cyan-300">About</p>
        <h2 className="section-title">Developer Profile</h2>
        <p className="section-copy mt-4 max-w-3xl leading-relaxed">
          I design and build reliable full-stack web experiences with a strong focus on performance,
          maintainability, and user-first interactions. My recent work blends AI capabilities with
          practical product engineering to solve real-world workflows.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="glass-card rounded-2xl p-6"
        >
          <Lightbulb className="mb-4 text-cyan-300" />
          <h3 className="text-lg font-semibold text-slate-100">Short Bio</h3>
          <p className="section-copy mt-2 text-sm leading-relaxed">
            Full Stack Developer with strong exposure to modern JavaScript ecosystems and AI
            integrations, passionate about shipping high-quality products.
          </p>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="glass-card rounded-2xl p-6"
        >
          <BookOpen className="mb-4 text-amber-200" />
          <h3 className="text-lg font-semibold text-slate-100">Skills Overview</h3>
          <p className="section-copy mt-2 text-sm leading-relaxed">
            Specialized in React and Next.js front-end systems, Node.js back-end APIs, and applied AI
            features using TensorFlow and Gemini API.
          </p>
        </motion.article>

      </div>
    </section>
  );
}
