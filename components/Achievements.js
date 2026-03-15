"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Globe, Sparkles, Star, Users, Zap } from "lucide-react";

const awards = [
  {
    title: "Winner",
    description: "Finserve: Where Tech Meets Finance [National Level DSA Hackathon]",
    certLink: "https://drive.google.com/file/d/1rT8nyL_fghyAavFTi16SeL64Y_o2g-TP/view",
    icon: "🥇",
    date: "2024",
    accent: "from-amber-300 to-orange-400",
  },
  {
    title: "Winner",
    description: "Techno-Enhance 2k23 [State Level Web Design Competition]",
    certLink: "https://drive.google.com/file/d/1Q7V9r5y7eqe53sLxP8Uh0BZnl9Jmk2oB/view",
    icon: "🏆",
    date: "2023",
    accent: "from-cyan-300 to-cyan-500",
  },
  {
    title: "Runner-Up",
    description: "AIZureStack (AI + Azure) Hackathon [National Level Competition]",
    certLink: "https://drive.google.com/file/d/181C8X45wKkTuZwM-aov8J1xTQQLthbMe/view",
    icon: "🥈",
    date: "2025",
    accent: "from-amber-300 to-orange-400",
  },
  {
    title: "Runner-Up",
    description: "Ink of Independence [National Level Poster Presentation Competition]",
    certLink: "https://drive.google.com/file/d/1EWquF_6GR1cC5FOHL9LJEbfMgek0XBSP/view",
    icon: "🎨",
    date: "2024",
    accent: "from-cyan-300 to-cyan-500",
  },
  {
    title: "Runner-Up",
    description: "GeekGenius Challenge [National Level Quiz Competition]",
    certLink: "https://drive.google.com/file/d/1CRfbOaf7noSJixFeANptOLaCF2bbRvzQ/view",
    icon: "🧠",
    date: "2024",
    accent: "from-amber-300 to-orange-400",
  },
];

const activities = [
  {
    text: "Student Coordinator",
    icon: Users,
    year: "2023",
  },
  {
    text: "Technical Coordinator - Techno-Fest 2k23",
    icon: Zap,
    year: "2023",
  },
  {
    text: "E-CESA Club Member",
    icon: Users,
    year: "2024-25",
  },
  {
    text: "IEEE Student Club Participant",
    icon: Globe,
    year: "2025",
  },
];

const openSource = [
  {
    text: "Contributed to 3+ open source projects via CertifyO platform",
    icon: Globe,
  },
  {
    text: "Improved bug tracking and documentation",
    icon: Award,
  },
  {
    text: "Developed UI components and fixed API issues",
    icon: Star,
  },
];

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

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {awards.map((item, index) => (
          <motion.article
            key={`${item.title}-${item.description}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            whileHover={{ y: -6 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2">
                <span className="text-2xl" aria-hidden="true">
                  {item.icon}
                </span>
                <span
                  className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${item.accent}`}
                  aria-hidden="true"
                />
              </div>
              <span className="rounded-full border border-white/20 bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                {item.date}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-slate-100">{item.title}</h3>
            <p className="section-copy mt-2 text-sm leading-relaxed">{item.description}</p>

            <a
              href={item.certLink}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-cyan-300/40 bg-cyan-300/10 px-3 py-1.5 text-sm text-cyan-200 transition hover:border-cyan-200 hover:bg-cyan-300/20"
            >
              View Certificate <ExternalLink size={14} />
            </a>
          </motion.article>
        ))}
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45 }}
          className="glass-card rounded-2xl p-6"
        >
          <div className="mb-4 inline-flex rounded-xl bg-cyan-300/15 p-3 text-cyan-200">
            <Users size={20} />
          </div>
          <h3 className="text-lg font-semibold text-slate-100">Leadership & Activities</h3>
          <ul className="mt-4 space-y-3">
            {activities.map((item, index) => {
              const Icon = item.icon;
              return (
                <li
                  key={`${item.text}-${item.year}`}
                  className="flex items-start justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                >
                  <span className="inline-flex items-start gap-2 text-sm text-slate-200">
                    <Icon size={16} className="mt-0.5 text-cyan-300" />
                    {item.text}
                  </span>
                  <span className="shrink-0 text-xs text-slate-400">{item.year}</span>
                </li>
              );
            })}
          </ul>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="glass-card rounded-2xl p-6"
        >
          <div className="mb-4 inline-flex rounded-xl bg-amber-300/15 p-3 text-amber-200">
            <Sparkles size={20} />
          </div>
          <h3 className="text-lg font-semibold text-slate-100">Open Source Impact</h3>
          <ul className="mt-4 space-y-3">
            {openSource.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.text}
                  className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
                >
                  <Icon size={16} className="mt-0.5 text-amber-200" />
                  {item.text}
                </li>
              );
            })}
          </ul>
        </motion.article>
      </div>
    </section>
  );
}
