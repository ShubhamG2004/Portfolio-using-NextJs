"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "./portfolioData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const allIds = navLinks.map((item) => item.id);
      const nextActive = allIds.findLast((id) => {
        const el = document.getElementById(id);
        if (!el) {
          return false;
        }
        const top = el.getBoundingClientRect().top;
        return top <= 140;
      });
      if (nextActive) {
        setActive(nextActive);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060f20]/70 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-lg font-semibold tracking-wide text-slate-100">
          Shubham<span className="gradient-text">.dev</span>
        </a>

        <button
          className="rounded-lg border border-white/20 p-2 text-slate-100 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`text-sm transition ${
                  active === link.id ? "text-cyan-300" : "text-slate-300 hover:text-slate-100"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-[#08142a]/95 px-4 py-3 md:hidden">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-md px-3 py-2 text-sm transition ${
                    active === link.id
                      ? "bg-cyan-400/10 text-cyan-300"
                      : "text-slate-300 hover:bg-white/5 hover:text-slate-100"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
