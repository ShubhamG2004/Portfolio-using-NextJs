import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Database, Globe, Settings, Brain, Sparkles } from 'lucide-react';

export default function Skills() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['JavaScript', 'Dart', 'Java', 'Python', 'C++', 'PHP'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: ['MERN Stack', 'Next.js', 'React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Bootstrap'],
      color: 'from-orange-400 to-orange-500'
    },
    {
      title: 'Databases & Backend',
      icon: Database,
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'SOAP APIs', 'RESTful APIs'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Tools & Platforms',
      icon: Settings,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Docker'],
      color: 'from-orange-400 to-orange-500'
    },
    {
      title: 'Core CS Skills',
      icon: Brain,
      skills: ['Data Structures', 'Algorithms', 'OOP', 'System Design', 'Problem Solving'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Additional Skills',
      icon: Code,
      skills: ['TypeScript', 'React Native', 'GraphQL', 'CI/CD', 'AWS Basics', 'Testing'],
      color: 'from-orange-400 to-orange-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section 
      ref={containerRef}
      id="skills" 
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-orange-50 to-white border-t-2 border-orange-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 border border-orange-200 text-orange-600 text-xs font-medium rounded-full">
              <Sparkles className="w-3 h-3" />
              Technical Skills
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            My{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Skills
              </span>
              <motion.div
                className="absolute left-0 -bottom-1 h-1 w-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A comprehensive overview of my technical expertise and competencies
          </motion.p>
        </div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="group"
            >
              {/* Main Card */}
              <div className="relative bg-white rounded-xl p-6 border border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center shadow-md mb-4`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                    {category.title}
                  </h3>
                  
                  <div className="h-1 w-16 rounded-full bg-gradient-to-r from-orange-300 to-orange-400 group-hover:w-20 transition-all duration-300" />
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      variants={skillItemVariants}
                      className="inline-block px-3 py-2 bg-orange-50 border border-orange-200 text-orange-700 text-sm rounded-lg font-medium hover:bg-orange-100 hover:border-orange-300 hover:scale-105 transition-all duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1">
                  <div className="h-full bg-gradient-to-r from-transparent via-orange-300 to-transparent group-hover:via-orange-400 transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-gray-500 text-sm inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-400" />
            Continuously learning and expanding my technical toolkit
          </p>
        </motion.div>
      </div>
    </section>
  );
}