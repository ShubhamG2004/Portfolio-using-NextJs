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
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["MERN Stack", "Next.js", "React.js", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap"],
      color: "from-orange-400 to-orange-500",
    },
    {
      title: "Databases & Backend",
      icon: Database,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "SOAP APIs", "RESTful APIs"],
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Tools & Platforms",
      icon: Settings,
      skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Docker"],
      color: "from-orange-400 to-orange-500",
    },
    {
      title: "Core CS Skills",
      icon: Brain,
      skills: ["Data Structures", "Algorithms", "OOP", "System Design", "Problem Solving"],
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Additional Skills",
      icon: Code,
      skills: ["TypeScript", "React Native", "GraphQL", "CI/CD", "AWS Basics", "Testing"],
      color: "from-orange-400 to-orange-500",
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
    <section
      ref={containerRef}
      id="skills"
      className="relative border-t-2 border-orange-300 bg-gradient-to-b from-white via-orange-50 to-white px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-medium text-orange-600">
              <Sparkles className="h-3 w-3" />
              Technical Skills
            </span>
          </motion.div>

          <motion.h2
            className="mb-4 text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            My{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Skills
              </span>
              <motion.div
                className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-orange-400 to-orange-500"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </motion.h2>

          <motion.p
            className="mx-auto max-w-2xl text-lg text-gray-600"
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
              <div className="relative h-full rounded-xl border border-orange-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="mb-6">
                  <div
                    className={`mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br ${category.color} shadow-md`}
                  >
                    <category.icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-orange-600">
                    {category.title}
                  </h3>

                  <div className="h-1 w-16 rounded-full bg-gradient-to-r from-orange-300 to-orange-400 transition-all duration-300 group-hover:w-20" />
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={skillItemVariants}
                      className="inline-block rounded-lg border border-orange-200 bg-orange-50 px-3 py-2 text-sm font-medium text-orange-700 transition-all duration-200 hover:scale-105 hover:border-orange-300 hover:bg-orange-100"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1">
                  <div className="h-full bg-gradient-to-r from-transparent via-orange-300 to-transparent transition-all duration-300 group-hover:via-orange-400" />
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
          <p className="inline-flex items-center gap-2 text-sm text-gray-500">
            <span className="h-2 w-2 rounded-full bg-orange-400" />
            Continuously learning and expanding my technical toolkit
          </p>
        </motion.div>
      </div>
    </section>
  );
}
