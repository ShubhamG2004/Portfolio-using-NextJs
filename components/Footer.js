"use client";

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "./portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#050d1b]/80 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-300">
          © {year} Shubham Suresh Gavade. All rights reserved.
        </p>

        <div className="flex items-center gap-3 text-slate-300">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-white/20 p-2 transition hover:border-cyan-300 hover:text-cyan-300"
          >
            <Github size={16} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-white/20 p-2 transition hover:border-cyan-300 hover:text-cyan-300"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={socialLinks.email}
            aria-label="Email"
            className="rounded-full border border-white/20 p-2 transition hover:border-cyan-300 hover:text-cyan-300"
          >
            <Mail size={16} />
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            className="rounded-full border border-amber-300/40 p-2 text-amber-200 transition hover:bg-amber-300/15"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
