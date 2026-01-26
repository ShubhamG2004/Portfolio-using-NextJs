import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import projects from '../utils/projects';
import { ExternalLink, Github, Sparkles, ArrowRight } from 'lucide-react';

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
      {/* Main card */}
      <motion.div 
        className="relative bg-white rounded-2xl overflow-hidden border border-orange-100 shadow-lg h-full flex flex-col hover:shadow-xl transition-all duration-300"
        whileHover={{ 
          y: -8,
        }}
      >
        {/* Project Image */}
        <div className="relative h-56 overflow-hidden">
          {/* Orange overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-orange-600/5 z-10" />
          
          {/* Image */}
          <img
            src={project.image || "https://via.placeholder.com/600x400?text=Project+Image"}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Action buttons */}
          <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center space-x-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-white/90 text-gray-800 rounded-lg font-medium shadow-md border border-gray-200 hover:shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            )}
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 space-y-4 flex-1 flex flex-col">
          {/* Title and category */}
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
              {project.title}
            </h3>
            
            {project.category && (
              <span className="inline-flex items-center px-2.5 py-1 bg-orange-50 text-orange-700 text-xs font-medium rounded-full border border-orange-200">
                {project.category}
              </span>
            )}
          </div>
          
          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed flex-1">
            {project.description}
          </p>

          {/* Tech Stack */}
          {project.tech && project.tech.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tech.slice(0, 5).map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-gray-700 text-xs rounded-lg font-medium hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Bottom divider */}
          <div className="pt-4 border-t border-gray-100">
            <div className="h-0.5 bg-gradient-to-r from-transparent via-orange-200 to-transparent group-hover:scale-x-100 scale-x-50 transition-transform duration-300" />
          </div>
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
      className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-orange-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
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
            <span className="inline-flex items-center text-orange-600 font-semibold text-sm tracking-wider uppercase">
              <Sparkles className="inline w-4 h-4 mr-2" />
              My Work
            </span>
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
                transition={{ duration: 1, delay: 0.5 }}
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
          
          {/* Simple divider */}
          <div className="flex justify-center mt-8">
            <div className="w-32 h-1 rounded-full bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
          </div>
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
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300">
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}