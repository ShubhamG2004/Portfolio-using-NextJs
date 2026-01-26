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
        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 border-2 border-white shadow-lg z-10" />
      </div>

      {/* Main card */}
      <motion.div
        className="lg:ml-12 relative"
        whileHover={{ 
          y: -8,
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        transition={{ duration: 0.3 }}
      >
        {/* Card content */}
        <div className="relative bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    {experience.role}
                  </h3>
                  <span className="inline-flex items-center px-2.5 py-1 bg-orange-50 text-orange-700 text-xs font-medium rounded-full border border-orange-200">
                    {experience.companyType}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium shadow-sm">
                <Calendar className="inline w-3.5 h-3.5 mr-1.5" />
                {experience.date}
              </span>
              <a
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-50 text-gray-700 rounded-lg shadow-sm hover:bg-gray-100 transition-colors hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company link */}
          <a
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-4 text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors duration-300"
          >
            {experience.company}
            <ChevronRight className="inline w-4 h-4 ml-1" />
          </a>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-5">
            {experience.skills.slice(0, 4).map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-gray-700 text-xs rounded-lg font-medium hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Points */}
          <div className="space-y-3">
            {experience.points.map((point, pointIndex) => (
              <div
                key={pointIndex}
                className="flex items-start group/item"
              >
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                    <TrendingUp className="w-2.5 h-2.5 text-white" />
                  </div>
                </div>
                <span className="text-gray-600 text-sm leading-relaxed">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom divider */}
          <div className="pt-4 mt-4 border-t border-gray-100">
            <div className="h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent group-hover:scale-x-100 scale-x-50 transition-transform duration-300" />
          </div>
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
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-orange-50 to-white border-t-2 border-orange-300"
    >
      <div className="max-w-6xl mx-auto">
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
            <span className="inline-flex items-center text-orange-600 font-semibold text-sm tracking-wider uppercase">
              <Briefcase className="inline w-4 h-4 mr-2" />
              Professional Experience
            </span>
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
          
          {/* Simple divider */}
          <div className="flex justify-center mt-8">
            <div className="w-24 h-1 rounded-full bg-gradient-to-r from-orange-300 to-orange-400" />
          </div>
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

        {/* Stats section */}
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