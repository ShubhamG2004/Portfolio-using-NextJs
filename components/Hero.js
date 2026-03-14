"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { socialLinks, typingRoles } from "./portfolioData";
import { useEffect, useState } from "react";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = typingRoles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const next = currentRole.slice(0, displayText.length + 1);
          setDisplayText(next);

          if (next === currentRole) {
            setTimeout(() => setIsDeleting(true), 900);
          }
        } else {
          const next = currentRole.slice(0, Math.max(0, displayText.length - 1));
          setDisplayText(next);
          if (!next) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % typingRoles.length);
          }
        }
      },
      isDeleting ? 50 : 90
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="section-shell relative flex min-h-screen items-center py-16 sm:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1 text-sm text-cyan-200">
            Building elegant products with code + AI
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl lg:text-6xl">
            Shubham Suresh Gavade
          </h1>
          <p className="mt-4 text-lg text-slate-200 sm:text-xl">
            Full Stack Developer & AI/ML Enthusiast
          </p>

          <p className="mt-5 h-8 font-mono text-base text-cyan-300 sm:text-lg">
            {displayText}
            <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-cyan-200 align-middle" />
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href="/Resume_Shubham_Gavade.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-amber-300/50 bg-amber-200/10 px-5 py-3 text-sm font-semibold text-amber-200 transition hover:bg-amber-200/20"
            >
              Download Resume
              <Download size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
            >
              Contact Me
              <Mail size={16} />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-slate-300">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 p-2 transition hover:border-cyan-300 hover:text-cyan-300"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 p-2 transition hover:border-cyan-300 hover:text-cyan-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={socialLinks.email}
              className="rounded-full border border-white/20 p-2 transition hover:border-cyan-300 hover:text-cyan-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="mx-auto"
        >
          <div className="glass-card relative overflow-hidden rounded-[2rem] p-2">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 via-transparent to-amber-300/20" />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/15">
              <Image
                src="/My_Profile.jpeg"
                alt="Shubham Suresh Gavade"
                width={480}
                height={540}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
