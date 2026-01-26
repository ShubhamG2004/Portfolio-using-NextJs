import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import projects from '../utils/projects';
import { ExternalLink, Github, Sparkles, ArrowRight, Code } from 'lucide-react';

// Animation variants
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
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8,
    },
  },
};

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="group relative h-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Subtle glow effect */}
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-orange-400/20 via-orange-500/10 to-orange-600/10 rounded-2xl blur-lg"
        animate={{
          opacity: isHovered ? 0.4 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Main card */}
      <motion.div 
        className="relative bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden border border-orange-100 shadow-lg h-full flex flex-col"
        whileHover={{ 
          y: -8,
          scale: 1.02,
          boxShadow: "0 20px 40px -15px rgba(249, 115, 22, 0.15)"
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Project Image */}
        <div className="relative h-56 overflow-hidden">
          {/* Orange overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-orange-600/10 z-10"
            animate={{ opacity: isHovered ? 0.3 : 0.1 }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Image */}
          <motion.img
            src={project.image || "https://via.placeholder.com/600x400?text=Project+Image"}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1,
              filter: isHovered ? "brightness(1.05) saturate(1.1)" : "brightness(1)",
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          {/* Action buttons */}
          <motion.div
            className="absolute inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center space-x-3 z-20"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: isHovered ? 0 : 20,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ delay: 0.1 }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </motion.a>
            )}
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-white/90 text-gray-800 rounded-lg font-medium shadow-md border border-gray-200 hover:shadow-lg transition-all"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: isHovered ? 0 : 20,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ delay: 0.15 }}
              >
                <Github className="w-4 h-4 mr-2" />
                Code
              </motion.a>
            )}
          </motion.div>
        </div>

        {/* Project Content */}
        <div className="p-6 space-y-4 flex-1 flex flex-col">
          {/* Title and category */}
          <div className="flex items-start justify-between">
            <motion.h3
              className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300"
              animate={{
                color: isHovered ? "#EA580C" : "#111827",
              }}
            >
              {project.title}
            </motion.h3>
            
            {project.category && (
              <motion.span
                className="inline-flex items-center px-2.5 py-1 bg-gradient-to-r from-orange-50 to-orange-100 text-orange-700 text-xs font-medium rounded-full border border-orange-200"
                whileHover={{ scale: 1.05 }}
              >
                {project.category}
              </motion.span>
            )}
          </div>
          
          {/* Description */}
          <motion.p
            className="text-gray-600 text-sm leading-relaxed flex-1"
            animate={{
              color: isHovered ? "#4B5563" : "#6B7280",
            }}
          >
            {project.description}
          </motion.p>

          {/* Tech Stack */}
          {project.tech && project.tech.length > 0 && (
            <motion.div
              className="flex flex-wrap gap-2 pt-2"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              {project.tech.slice(0, 5).map((tech, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 + (i * 0.05) }}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    backgroundColor: "rgba(249, 115, 22, 0.1)",
                    borderColor: "rgba(249, 115, 22, 0.3)",
                    color: "#EA580C"
                  }}
                  className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-gray-700 text-xs rounded-lg font-medium transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          )}

          {/* Bottom divider with subtle animation */}
          <motion.div
            className="pt-4 border-t border-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-0.5 bg-gradient-to-r from-transparent via-orange-200 to-transparent"
              animate={{
                scaleX: isHovered ? 1 : 0.5,
                opacity: isHovered ? 1 : 0.5,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-white border-t-2 border-orange-300"
    >
      {/* Subtle animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orange circles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-orange-100/40"
            style={{
              left: `${10 + (i * 8)}%`,
              top: `${15 + (i % 4) * 20}%`,
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
            }}
            animate={{
              y: [0, Math.sin(i) * 30, 0],
              x: [0, Math.cos(i) * 20, 0],
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8 + (i * 0.5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          style={{ y: textY }} 
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="relative inline-block mb-6"
          >
            <motion.span
              className="inline-flex items-center text-orange-600 font-semibold text-sm tracking-wider uppercase"
              animate={{
                textShadow: [
                  "0 0 0px #EA580C",
                  "0 0 15px rgba(234, 88, 12, 0.4)",
                  "0 0 0px #EA580C"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="inline w-4 h-4 mr-2" />
              My Work
            </motion.span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
          >
            Featured{" "}
            <motion.span
              className="relative inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Projects
              </span>
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1, delay: 0.5, type: "spring" }}
              />
            </motion.span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            A collection of my recent work, built with modern technologies and attention to detail
          </motion.p>
          
          {/* Animated divider */}
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="w-32 h-1 rounded-full bg-gradient-to-r from-transparent via-orange-400 to-transparent"
              animate={{
                scaleX: [0.8, 1.2, 0.8],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id || index} project={project} index={index} />
          ))}
        </motion.div>

        {/* View more button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
            whileHover={{ 
              scale: 1.05,
              y: -2,
              boxShadow: "0 10px 25px rgba(249, 115, 22, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}