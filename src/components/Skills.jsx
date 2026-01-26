import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Database, Globe, Settings, Brain, Cpu, Sparkles, Zap, Rocket, Target, Layers, Cpu as Chip } from 'lucide-react';

export default function Skills() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['JavaScript', 'Dart', 'Java', 'Python', 'C++', 'PHP'],
      color: 'from-orange-500 to-orange-600',
      animation: 'typewriter',
      iconAnimation: 'code'
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: ['MERN Stack', 'Next.js', 'React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Bootstrap'],
      color: 'from-amber-500 to-amber-600',
      animation: 'orbit',
      iconAnimation: 'globe'
    },
    {
      title: 'Databases & Backend',
      icon: Database,
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'SOAP APIs', 'RESTful APIs'],
      color: 'from-yellow-500 to-yellow-600',
      animation: 'database',
      iconAnimation: 'database'
    },
    {
      title: 'Tools & Platforms',
      icon: Settings,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Docker'],
      color: 'from-orange-400 to-orange-500',
      animation: 'tools',
      iconAnimation: 'gear'
    },
    {
      title: 'Core CS Skills',
      icon: Brain,
      skills: ['Data Structures', 'Algorithms', 'OOP', 'System Design', 'Problem Solving'],
      color: 'from-amber-600 to-amber-700',
      animation: 'neural',
      iconAnimation: 'brain'
    },
    {
      title: 'Additional Skills',
      icon: Chip,
      skills: ['TypeScript', 'React Native', 'GraphQL', 'CI/CD', 'AWS Basics', 'Testing'],
      color: 'from-yellow-600 to-yellow-700',
      animation: 'circuit',
      iconAnimation: 'chip'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  // Different card animations for each category
  const cardAnimations = {
    typewriter: {
      hidden: { opacity: 0, x: -100 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: {
          duration: 0.8,
          type: "spring",
          stiffness: 80,
          damping: 15
        }
      }
    },
    orbit: {
      hidden: { opacity: 0, scale: 0, rotate: -180 },
      visible: { 
        opacity: 1, 
        scale: 1,
        rotate: 0,
        transition: {
          duration: 1,
          type: "spring",
          stiffness: 70,
          damping: 20
        }
      }
    },
    database: {
      hidden: { opacity: 0, y: 100, rotateX: 90 },
      visible: { 
        opacity: 1, 
        y: 0,
        rotateX: 0,
        transition: {
          duration: 0.9,
          type: "spring",
          stiffness: 90,
          damping: 15
        }
      }
    },
    tools: {
      hidden: { opacity: 0, scale: 0.5, rotate: 360 },
      visible: { 
        opacity: 1, 
        scale: 1,
        rotate: 0,
        transition: {
          duration: 1.2,
          type: "spring",
          stiffness: 60,
          damping: 25
        }
      }
    },
    neural: {
      hidden: { opacity: 0, x: 100 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: {
          duration: 0.8,
          type: "spring",
          stiffness: 80,
          damping: 15
        }
      }
    },
    circuit: {
      hidden: { opacity: 0, y: -100 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.9,
          type: "spring",
          stiffness: 100,
          damping: 10
        }
      }
    }
  };

  // Icon animations
  const iconAnimations = {
    code: {
      animate: {
        rotate: [0, 10, -10, 0],
        scale: [1, 1.1, 1.1, 1],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    },
    globe: {
      animate: {
        rotate: 360,
        transition: {
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }
      }
    },
    database: {
      animate: {
        y: [0, -5, 0],
        scale: [1, 1.05, 1],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    },
    gear: {
      animate: {
        rotate: 360,
        transition: {
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }
      }
    },
    brain: {
      animate: {
        scale: [1, 1.2, 1],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    },
    chip: {
      animate: {
        rotate: [0, 180, 360],
        transition: {
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }
      }
    }
  };

  // Skill item animations
  const skillAnimations = {
    typewriter: (i) => ({
      hidden: { opacity: 0, x: -20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          delay: i * 0.1,
          duration: 0.3,
          type: "spring",
          stiffness: 200
        }
      }
    }),
    orbit: (i) => ({
      hidden: { opacity: 0, scale: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delay: i * 0.1,
          duration: 0.4,
          type: "spring",
          stiffness: 150
        }
      }
    }),
    database: (i) => ({
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.1,
          duration: 0.3,
          type: "spring",
          stiffness: 180
        }
      }
    }),
    tools: (i) => ({
      hidden: { opacity: 0, rotate: -90 },
      visible: {
        opacity: 1,
        rotate: 0,
        transition: {
          delay: i * 0.1,
          duration: 0.4,
          type: "spring",
          stiffness: 120
        }
      }
    }),
    neural: (i) => ({
      hidden: { opacity: 0, scale: 0.5 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delay: i * 0.1,
          duration: 0.3,
          type: "spring",
          stiffness: 200
        }
      }
    }),
    circuit: (i) => ({
      hidden: { opacity: 0, x: 20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          delay: i * 0.1,
          duration: 0.3,
          type: "spring",
          stiffness: 200
        }
      }
    })
  };

  return (
    <section 
      ref={containerRef}
      id="skills" 
       className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white via-orange-50/20 to-white border-t-2 border-orange-300"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating code snippets */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-orange-300/20 font-mono text-lg select-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.sin(i) * 20, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + (i * 2),
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          >
            {['{ }', '</>', '=>', '[]', '()', '{}', '==', '!='][i % 8]}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5
              bg-white border border-orange-200
              text-orange-600 text-xs font-medium
              rounded-full shadow-sm"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Sparkles className="w-3 h-3" />
            Technical Skills
          </motion.span>

          
          <motion.h2
            className="text-4xl font-bold text-black mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1.3, delay: 0.5 }}
          >
            My{" "}
            <span className="relative inline-block text-orange-600">
              Skills
              <motion.span
                className="absolute left-0 -bottom-1 h-[2px] w-full bg-orange-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              />
            </span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Each skill set has its own unique animation style. Hover to discover!
          </motion.p>
        </motion.div>

        {/* Skills Grid with Different Animations */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={cardAnimations[category.animation]}
              className="relative group"
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              {/* Unique background effect for each card */}
              <motion.div
                className="absolute -inset-1 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(45deg, 
                    ${category.color.includes('orange') ? '#f97316' : 
                      category.color.includes('amber') ? '#f59e0b' : '#eab308'}, 
                    ${category.color.includes('orange') ? '#ea580c' : 
                      category.color.includes('amber') ? '#d97706' : '#ca8a04'})`
                }}
              />

              {/* Main Card */}
              <div className="relative bg-white rounded-2xl p-6 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                {/* Animated icon container */}
                <motion.div
                  className="absolute top-4 right-4"
                  {...iconAnimations[category.iconAnimation]}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                {/* Category title with special animation */}
                <div className="mb-6">
                  <motion.h3
                    className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300"
                    whileHover={{ x: 4 }}
                  >
                    {category.title}
                  </motion.h3>
                  
                  {/* Animated underline */}
                  <motion.div
                    className="h-1 w-16 rounded-full bg-gradient-to-r from-orange-400 to-orange-500"
                    initial={{ scaleX: 0.5 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Skills with unique animations */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      custom={skillIndex}
                      variants={skillAnimations[category.animation](skillIndex)}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ 
                        scale: 1.1,
                        y: -2,
                        backgroundColor: category.color.includes('orange') ? 
                          "rgba(249, 115, 22, 0.1)" : 
                          category.color.includes('amber') ? 
                          "rgba(245, 158, 11, 0.1)" : 
                          "rgba(234, 179, 8, 0.1)",
                        borderColor: category.color.includes('orange') ? 
                          "rgba(249, 115, 22, 0.3)" : 
                          category.color.includes('amber') ? 
                          "rgba(245, 158, 11, 0.3)" : 
                          "rgba(234, 179, 8, 0.3)",
                        color: category.color.includes('orange') ? 
                          "#ea580c" : 
                          category.color.includes('amber') ? 
                          "#d97706" : "#ca8a04"
                      }}
                      className="relative"
                    >
                      <motion.span
                        className="px-4 py-2.5 bg-gray-50 border border-gray-200 text-gray-700 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 shadow-sm"
                        whileHover={{ 
                          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)"
                        }}
                      >
                        {/* Animated dot with category color */}
                        <motion.span 
                          className="w-2 h-2 rounded-full"
                          style={{
                            background: category.color.includes('orange') ? 
                              "linear-gradient(45deg, #f97316, #ea580c)" : 
                              category.color.includes('amber') ? 
                              "linear-gradient(45deg, #f59e0b, #d97706)" : 
                              "linear-gradient(45deg, #eab308, #ca8a04)"
                          }}
                          animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: skillIndex * 0.2
                          }}
                        />
                        {skill}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative elements based on animation type */}
                <div className="absolute bottom-0 left-0 right-0 h-1">
                  <motion.div
                    className="h-full bg-gradient-to-r from-transparent via-orange-400 to-transparent"
                    animate={{
                      scaleX: [0.3, 1, 0.3],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        

        {/* Footer note with animation */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.p
            className="text-gray-500 text-sm inline-flex items-center gap-2"
            animate={{
              scale: [1, 1.02, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Layers className="w-4 h-4 text-orange-500" />
            Always expanding my toolkit with new technologies
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}