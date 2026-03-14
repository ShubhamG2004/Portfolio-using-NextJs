"use client";

import { motion } from "framer-motion";

const username = "ShubhamG2004";

const statsCards = [
  {
    title: "GitHub Stats",
    src: `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=67e8f9&text_color=dbeafe&icon_color=fbbf24&bg_color=00000000`,
    alt: "GitHub stats card",
  },
  {
    title: "GitHub Streak",
    src: `https://streak-stats.demolab.com?user=${username}&theme=transparent&hide_border=true&stroke=67e8f9&ring=fbbf24&fire=fbbf24&currStreakLabel=dbeafe&currStreakNum=dbeafe&sideNums=dbeafe&dates=94a3b8&background=00000000`,
    alt: "GitHub streak card",
  },
  {
    title: "Top Languages",
    src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=67e8f9&text_color=dbeafe&bg_color=00000000`,
    alt: "Top languages card",
  },
];

export default function GithubStats() {
  return (
    <section id="github" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
      >
        <p className="mb-3 text-sm uppercase tracking-[0.22em] text-cyan-300">GitHub</p>
        <h2 className="section-title">Coding Activity Snapshot</h2>
      </motion.div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {statsCards.map((card, idx) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            className="glass-card overflow-hidden rounded-2xl p-4"
          >
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-slate-200">
              {card.title}
            </h3>
            <img src={card.src} alt={card.alt} className="h-auto w-full" loading="lazy" />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
