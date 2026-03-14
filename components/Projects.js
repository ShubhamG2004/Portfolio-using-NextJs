"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "./portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
      >
        <p className="mb-3 text-sm uppercase tracking-[0.22em] text-cyan-300">Projects</p>
        <h2 className="section-title">Featured Work</h2>
      </motion.div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
            whileHover={{ y: -7 }}
            className="glass-card group overflow-hidden rounded-2xl"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041126] via-transparent to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
              <p className="section-copy mt-2 text-sm leading-relaxed">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-2.5 py-1 text-xs text-cyan-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg border border-white/20 px-3 py-1.5 text-sm text-slate-100 transition hover:border-cyan-300 hover:text-cyan-300"
                >
                  <Github size={15} /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg border border-amber-300/40 px-3 py-1.5 text-sm text-amber-200 transition hover:bg-amber-300/15"
                >
                  <ExternalLink size={15} /> Live Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
