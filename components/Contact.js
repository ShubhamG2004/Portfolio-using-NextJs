"use client";

import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { socialLinks } from "./portfolioData";

const defaultForm = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(defaultForm);
  const [status, setStatus] = useState({ type: "", text: "" });
  const [isSending, setIsSending] = useState(false);

  const onChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "", text: "" });

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        text: "Email service is not configured yet. Add EmailJS environment variables.",
      });
      return;
    }

    try {
      setIsSending(true);
      await emailjs.send(serviceId, templateId, form, { publicKey });
      setStatus({ type: "success", text: "Message sent successfully. Thanks for reaching out!" });
      setForm(defaultForm);
    } catch (error) {
      setStatus({
        type: "error",
        text: "Unable to send message right now. Please try again in a moment.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
      >
        <p className="mb-3 text-sm uppercase tracking-[0.22em] text-cyan-300">Contact</p>
        <h2 className="section-title">Let&apos;s Build Something Great</h2>
      </motion.div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl p-6"
        >
          <div className="grid gap-4">
            <label className="text-sm text-slate-200">
              Name
              <input
                name="name"
                type="text"
                required
                value={form.name}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-sm text-slate-100 outline-none ring-cyan-300 transition focus:ring"
                placeholder="Your name"
              />
            </label>

            <label className="text-sm text-slate-200">
              Email
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-sm text-slate-100 outline-none ring-cyan-300 transition focus:ring"
                placeholder="you@example.com"
              />
            </label>

            <label className="text-sm text-slate-200">
              Message
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={onChange}
                className="mt-1 w-full resize-none rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-sm text-slate-100 outline-none ring-cyan-300 transition focus:ring"
                placeholder="Tell me about your project"
              />
            </label>

            <button
              type="submit"
              disabled={isSending}
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={16} />
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {status.text ? (
              <p
                className={`text-sm ${
                  status.type === "success" ? "text-emerald-300" : "text-rose-300"
                }`}
              >
                {status.text}
              </p>
            ) : null}
          </div>
        </motion.form>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card rounded-2xl p-6"
        >
          <h3 className="text-xl font-semibold text-slate-100">Social Links</h3>
          <p className="section-copy mt-2 text-sm leading-relaxed">
            Reach me directly for collaboration, freelance work, or technical discussions.
          </p>

          <div className="mt-6 space-y-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-slate-100 transition hover:border-cyan-300"
            >
              <Github size={18} className="text-cyan-300" />
              GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-slate-100 transition hover:border-cyan-300"
            >
              <Linkedin size={18} className="text-cyan-300" />
              LinkedIn
            </a>
            <a
              href={socialLinks.email}
              className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-slate-100 transition hover:border-cyan-300"
            >
              <Mail size={18} className="text-cyan-300" />
              Email
            </a>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
