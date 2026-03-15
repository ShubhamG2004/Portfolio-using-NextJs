"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Database, Globe, Settings, Brain, Sparkles } from "lucide-react";

export default function Skills() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["JavaScript", "Dart", "Java", "Python", "C++", "PHP"],
      color: "from-cyan-400 to-cyan-500",
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["MERN Stack", "Next.js", "React.js", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap"],
      color: "from-amber-300 to-amber-400",
    },
    {
      title: "Databases & Backend",
      icon: Database,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "SOAP APIs", "RESTful APIs"],
      color: "from-cyan-400 to-cyan-500",
    },
    {
      title: "Tools & Platforms",
      icon: Settings,
      skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Docker"],
      color: "from-amber-300 to-amber-400",
    },
    {
      title: "Core CS Skills",
      icon: Brain,
      skills: ["Data Structures", "Algorithms", "OOP", "System Design", "Problem Solving"],
      color: "from-cyan-400 to-cyan-500",
    },
    {
      title: "Additional Skills",
      icon: Code,
      skills: ["TypeScript", "React Native", "GraphQL", "CI/CD", "AWS Basics", "Testing"],
      color: "from-amber-300 to-amber-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section ref={containerRef} id="skills" className="section-shell relative">
      <div>
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-1.5 text-xs font-medium text-cyan-200">
              <Sparkles className="h-3 w-3" />
              Technical Skills
            </span>
          </motion.div>

          <motion.h2
            className="mb-4 text-3xl font-semibold text-slate-100 sm:text-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            My{" "}
            <span className="relative inline-block">
              <span className="gradient-text">
                Skills
              </span>
              <motion.div
                className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-cyan-300 to-amber-300"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </motion.h2>

          <motion.p
            className="section-copy mx-auto max-w-2xl text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A comprehensive overview of my technical expertise and competencies
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={cardVariants} className="group">
              <div className="glass-card relative h-full rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1">
                <div className="mb-6">
                  <div
                    className={`mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br ${category.color} shadow-md`}
                  >
                    <category.icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-slate-100 transition-colors duration-300 group-hover:text-cyan-200">
                    {category.title}
                  </h3>

                  <div className="h-1 w-16 rounded-full bg-gradient-to-r from-cyan-300 to-amber-300 transition-all duration-300 group-hover:w-20" />
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={skillItemVariants}
                      className="inline-block rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium text-slate-200 transition-all duration-200 hover:scale-105 hover:border-cyan-300/60 hover:bg-cyan-300/10 hover:text-cyan-100"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1">
                  <div className="h-full bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent transition-all duration-300 group-hover:via-amber-300/90" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="section-copy inline-flex items-center gap-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            Continuously learning and expanding my technical toolkit
          </p>
        </motion.div>
      </div>
    </section>
  );
}
