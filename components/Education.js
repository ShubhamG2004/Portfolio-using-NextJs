"use client";

import { motion } from "framer-motion";
import { CalendarDays, GraduationCap, MapPin } from "lucide-react";

const educationData = [
  {
    degree: "B.E. Electronic and Computer Engineering",
    score: "CGPA: 8.67",
    institution: "PES Modern College of Engineering, Pune",
    duration: "Sept 2023 - June 2026",
    location: "Pune, India",
    status: "Current",
  },
  {
    degree: "Diploma in Information Technology",
    score: "Percentage: 87.18%",
    institution: "Government Polytechnic, Kolhapur",
    duration: "Dec 2020 - June 2023",
    location: "Kolhapur, India",
    status: "Completed",
  },
  {
    degree: "SSC (10th)",
    score: "Percentage: 94.60%",
    institution: "Shri Shardchandraji High School, Buzavade",
    duration: "March 2020",
    location: "Kolhapur, India",
    status: "Completed",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
      >
        <p className="mb-3 text-sm uppercase tracking-[0.22em] text-cyan-300">Academics</p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="section-title">Education Journey</h2>
          <span className="inline-flex w-fit items-center rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-200">
            3 milestones
          </span>
        </div>
      </motion.div>

      <div className="relative mt-10">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-300/70 via-amber-300/50 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

        <div className="space-y-6">
          {educationData.map((edu, index) => {
            const isRight = index % 2 !== 0;

            return (
              <motion.article
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`relative sm:grid sm:grid-cols-2 sm:gap-8 ${isRight ? "" : ""}`}
              >
                <div className={`hidden sm:block ${isRight ? "order-1" : "order-2"}`} />

                <div className={`relative pl-12 sm:pl-0 ${isRight ? "order-2" : "order-1"}`}>
                  <span className="absolute left-0 top-6 inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan-200/60 bg-slate-900 text-cyan-300 shadow-lg shadow-cyan-900/50 sm:left-1/2 sm:-translate-x-1/2">
                    <GraduationCap size={16} />
                  </span>

                  <div className="glass-card rounded-2xl border border-white/10 p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="max-w-xl text-lg font-semibold leading-tight text-slate-100">{edu.degree}</h3>
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                          edu.status === "Current"
                            ? "border border-emerald-300/40 bg-emerald-300/15 text-emerald-200"
                            : "border border-amber-300/40 bg-amber-300/10 text-amber-200"
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>

                    <p className="mt-2 text-sm font-semibold text-cyan-200">{edu.score}</p>
                    <p className="section-copy mt-1 text-sm">{edu.institution}</p>

                    <div className="mt-4 grid gap-2 text-xs text-slate-300 sm:grid-cols-2">
                      <p className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5">
                        <CalendarDays size={13} className="text-amber-200" />
                        {edu.duration}
                      </p>
                      <p className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5">
                        <MapPin size={13} className="text-cyan-200" />
                        {edu.location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
