import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Calendar, ExternalLink, Briefcase, TrendingUp, ChevronRight } from 'lucide-react';

const experiences = [
  {
    role: "Elliot Systems · Internship",
    company: "Hybrid",
    date: "Jan 2025 – Feb 2025 · 2 months",
    link: "https://drive.google.com/file/d/1hushO5wSZm5KbpmdJv6qx0TccyCAX9z2/view",
    companyType: "Tech Startup",
    skills: ["Next.js", "Tailwind CSS", "MongoDB", "FastAPI"],
    points: [
      "Collaborated on Financial Management System development",
      "Implemented responsive full-stack web features",
      "Integrated AI agents for smart recommendations",
      "Optimized API endpoints for performance"
    ]
  },
  {
    role: "Full Stack Web Developer | Intern [Remote]",
    company: "Rudraksha Welfare Foundation",
    date: "July 2023 – Sep 2023",
    link: "https://drive.google.com/file/d/1jsGolsbTMYO-2EgamMuyVRUEwDN3DoYi/view",
    companyType: "Non-Profit",
    skills: ["Bootstrap", "Data Visualization", "CRM"],
    points: [
      "Improved site uptime and performance by 20%",
      "Enhanced UX by 30% with responsive interfaces",
      "Accelerated CRM testing by 25%"
    ]
  },
  {
    role: "Web Developer | Intern [On-site]",
    company: "Wolfox Services Pvt. Ltd.",
    date: "Jan 2023 – Feb 2023",
    link: "https://drive.google.com/file/d/1-YFQp70SihM1s3hfyMqCblcPctY3GT-a/view",
    companyType: "Digital Solutions",
    skills: ["CodeIgniter", "MVC", "SEO"],
    points: [
      "Reduced stock tracking errors by 40%",
      "Increased traffic by 15% with SEO enhancements",
      "Achieved 99.9% uptime"
    ]
  },
  {
    role: "Web Developer | Trainee [On-site]",
    company: "Resilient Lab Pvt. Ltd.",
    date: "July 2022 – Aug 2022",
    link: "https://drive.google.com/file/d/1TI1lLyNAPNm8TYk9QRO34TuzCT5KNrYb/view",
    companyType: "Software Agency",
    skills: ["RESTful APIs", "Performance Optimization"],
    points: [
      "Improved load speed by 18%",
      "Enhanced mobile responsiveness by 25%",
      "Improved communication speed by 30%"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    x: -50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8
    }
  }
};

const ExperienceCard = ({ experience, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative group"
    >
      {/* Timeline connector */}
      <div className="hidden lg:flex absolute left-0 top-8 w-12 items-center z-20">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 0.8, delay: index * 0.15 }}
          className="w-8 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500"
        />
        <motion.div
          whileHover={{ 
            scale: 1.3, 
            rotate: 360,
            boxShadow: "0 0 15px rgba(249, 115, 22, 0.4)"
          }}
          className="w-3 h-3 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 border-2 border-white shadow-lg z-10"
        />
      </div>

      {/* Main card */}
      <motion.div
        className="lg:ml-12 relative"
        whileHover={{ 
          y: -8,
          scale: 1.02,
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        transition={{ duration: 0.3 }}
      >
        {/* Orange glow effect */}
        <motion.div
          className="absolute -inset-0.5 bg-gradient-to-r from-orange-400/20 to-orange-500/10 rounded-xl blur-md"
          animate={{
            opacity: isHovered ? 0.4 : 0,
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Card content - PURE WHITE BACKGROUND */}
        <div className="relative bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg"
                  whileHover={{ 
                    rotate: 15,
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Briefcase className="w-5 h-5 text-white" />
                </motion.div>
                <div>
                  <motion.h3
                    className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300"
                    animate={{
                      color: isHovered ? "#EA580C" : "#111827",
                    }}
                  >
                    {experience.role}
                  </motion.h3>
                  <motion.span
                    className="inline-flex items-center px-2.5 py-1 bg-orange-50 text-orange-700 text-xs font-medium rounded-full border border-orange-200"
                    whileHover={{ scale: 1.05 }}
                  >
                    {experience.companyType}
                  </motion.span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <motion.span
                className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium shadow-sm"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                }}
              >
                <Calendar className="inline w-3.5 h-3.5 mr-1.5" />
                {experience.date}
              </motion.span>
              <motion.a
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-50 text-gray-700 rounded-lg shadow-sm hover:bg-gray-100 transition-colors"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Company link */}
          <motion.a
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-4 text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors duration-300"
            whileHover={{ 
              scale: 1.02, 
              x: 4,
            }}
          >
            {experience.company}
            <ChevronRight className="inline w-4 h-4 ml-1" />
          </motion.a>

          {/* Skills */}
          <motion.div
            className="flex flex-wrap gap-2 mb-5"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            {experience.skills.slice(0, 4).map((skill, skillIndex) => (
              <motion.span
                key={skillIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.4 + (skillIndex * 0.05) }}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  backgroundColor: "rgba(249, 115, 22, 0.1)",
                  borderColor: "rgba(249, 115, 22, 0.3)",
                  color: "#EA580C"
                }}
                className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-gray-700 text-xs rounded-lg font-medium transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* Points */}
          <div className="space-y-3">
            {experience.points.map((point, pointIndex) => (
              <motion.div
                key={pointIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 + 0.5 + (pointIndex * 0.1) }}
                className="flex items-start group/item"
                whileHover={{ x: 4 }}
                // transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="flex-shrink-0 mt-1 mr-3"
                  whileHover={{ 
                    rotate: 180,
                    scale: 1.2,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                    <TrendingUp className="w-2.5 h-2.5 text-white" />
                  </div>
                </motion.div>
                <span className="text-gray-600 text-sm leading-relaxed">
                  {point}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Bottom divider */}
          <motion.div
            className="pt-4 mt-4 border-t border-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <motion.div
              className="h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent"
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

export default function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-orange-50 via-orange-50/80 to-white border-t-2 border-orange-300"
    >
      {/* Subtle orange pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #fb923c 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating orange accent circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-orange-200/40"
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${15 + (i % 3) * 25}%`,
              width: `${Math.random() * 150 + 100}px`,
              height: `${Math.random() * 150 + 100}px`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 20 + (i * 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1
            }}
          />
        ))}
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-100/20 via-transparent to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
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
                  "0 0 0px #fb923c",
                  "0 0 10px rgba(251, 146, 60, 0.3)",
                  "0 0 0px #fb923c"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="px-4 py-2 bg-white rounded-full border border-orange-200 flex items-center shadow-sm">
                <Briefcase className="inline w-4 h-4 mr-2 text-orange-600" />
                Professional Experience
              </div>
            </motion.span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            My Career{" "}
            <motion.span
              className="relative inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Journey
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
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            From internships to impactful roles - showcasing growth and measurable results
          </motion.p>
          
          {/* Animated divider */}
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="w-24 h-1 rounded-full bg-gradient-to-r from-orange-300 to-orange-400"
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

        {/* Timeline and cards */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-300 via-orange-400 to-orange-300" />
          
          {/* Experience cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                index={index}
              />
            ))}
          </motion.div>
        </div>

        {/* Stats section - Pure white background */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
      
        </motion.div>
      </div>
    </section>
  );
}