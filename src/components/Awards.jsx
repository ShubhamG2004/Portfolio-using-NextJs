import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Users, Globe, Award, Star, Zap } from 'lucide-react';

export default function Awards() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const awards = [
    {
      title: "Winner",
      description: "Finserve: Where Tech Meets Finance [National Level DSA Hackathon]",
      certLink: "https://drive.google.com/file/d/1rT8nyL_fghyAavFTi16SeL64Y_o2g-TP/view",
      icon: "🥇",
      date: "2024",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      title: "Winner",
      description: "Techno-Enhance 2k23 [State Level Web Design Competition]",
      certLink: "https://drive.google.com/file/d/1Q7V9r5y7eqe53sLxP8Uh0BZnl9Jmk2oB/view",
      icon: "🏆",
      date: "2023",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600"
    },
    {
      title: "Runner-Up",
      description: "AIZureStack (AI + Azure) Hackathon [National Level Competition]",
      certLink: "https://drive.google.com/file/d/181C8X45wKkTuZwM-aov8J1xTQQLthbMe/view",
      icon: "🥈",
      date: "2025",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600"
    },
    {
      title: "Runner-Up",
      description: "Ink of Independence [National Level Poster Presentation Competition]",
      certLink: "https://drive.google.com/file/d/1EWquF_6GR1cC5FOHL9LJEbfMgek0XBSP/view",
      icon: "🎨",
      date: "2024",
      color: "from-orange-400 to-orange-500",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-500"
    },
    {
      title: "Runner-Up",
      description: "GeekGenius Challenge [National Level Quiz Competition]",
      certLink: "https://drive.google.com/file/d/1CRfbOaf7noSJixFeANptOLaCF2bbRvzQ/view",
      icon: "🧠",
      date: "2024",
      color: "from-amber-400 to-amber-500",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-500"
    },
  ];

  const activities = [
    { 
      text: "Student Coordinator", 
      icon: <Users className="w-5 h-5" />, 
      year: "2023", 
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50"
    },
    { 
      text: "Technical Coordinator - Techno-Fest 2k23", 
      icon: <Zap className="w-5 h-5" />, 
      year: "2023", 
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50"
    },
    { 
      text: "E-CESA Club Member", 
      icon: <Users className="w-5 h-5" />, 
      year: "2024-25", 
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    { 
      text: "IEEE Student Club Participant", 
      icon: <Globe className="w-5 h-5" />, 
      year: "2025", 
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    }
  ];

  const openSource = [
    { 
      text: "Contributed to 3+ open source projects via CertifyO platform", 
      icon: <Globe className="w-5 h-5" />, 
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50"
    },
    { 
      text: "Improved bug tracking and documentation", 
      icon: <Award className="w-5 h-5" />, 
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50"
    },
    { 
      text: "Developed UI components and fixed API issues", 
      icon: <Star className="w-5 h-5" />, 
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const awardItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.4,
        type: "spring",
        stiffness: 100
      }
    })
  };

  const activityVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.4,
        type: "spring",
        stiffness: 150
      }
    })
  };

  return (
    <section 
      ref={containerRef}
      id="achievements" 
      className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-orange-50 border-t-4 border-orange-300"
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-orange-200/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.cos(i) * 20, 0],
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 15 + (i * 2),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
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
            <Trophy className="w-4 h-4" />
            Awards & Recognition
          </motion.span>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Achievements
              </span>
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Celebrating milestones that showcase technical excellence and leadership
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div 
          className="grid grid-cols-1 xl:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Awards Section */}
          <motion.div
            variants={cardVariants}
            className="relative"
          >
            {/* Card Glow Effect */}
            <motion.div
              className="absolute -inset-0.5 bg-gradient-to-r from-orange-400/20 to-orange-500/10 rounded-xl blur-md"
              animate={{
                opacity: [0, 0.3, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Main Card */}
            <div className="relative bg-white rounded-xl p-6 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500">
              {/* Header */}
              <motion.div 
                className="flex items-center mb-8"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  className="mr-4"
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900">
                  Competition Awards
                </h3>
              </motion.div>

              {/* Awards List */}
              <div className="space-y-6">
                {awards.map((award, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={awardItemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    whileHover={{ 
                      scale: 1.02,
                      x: 8,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    className="relative group/item"
                  >
                    <div className={`relative ${award.bgColor} border border-gray-200 rounded-xl p-5 hover:border-orange-300 transition-all duration-300`}>
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <motion.div
                          className="flex-shrink-0"
                          whileHover={{ 
                            scale: 1.2,
                            rotate: 360
                          }}
                          transition={{ duration: 0.6 }}
                        >
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-md">
                            <span className="text-xl">{award.icon}</span>
                          </div>
                        </motion.div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <motion.span 
                              className={`inline-block px-3 py-1.5 rounded-lg text-xs font-bold ${
                                award.title === "Winner" 
                                  ? "bg-gradient-to-r from-orange-500/10 to-orange-600/10 text-orange-700 border border-orange-200" 
                                  : "bg-gray-100 text-gray-700 border border-gray-200"
                              }`}
                              whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)"
                              }}
                            >
                              {award.title}
                            </motion.span>
                            <motion.span 
                              className="text-sm text-gray-500 font-medium"
                              whileHover={{ scale: 1.05, color: "#ea580c" }}
                            >
                              {award.date}
                            </motion.span>
                          </div>
                          
                          <motion.p 
                            className="text-gray-700 mb-3 leading-relaxed"
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1 }}
                          >
                            {award.description}
                          </motion.p>
                          
                          <motion.a
                            href={award.certLink}
                            className="inline-flex items-center text-sm text-orange-600 hover:text-orange-700 transition-colors font-medium group/link"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 4 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span>View Certificate</span>
                            <motion.svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              className="h-4 w-4 ml-2" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                              whileHover={{ x: 5, y: -2 }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </motion.svg>
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Activities & Open Source */}
          <div className="space-y-8">
            {/* Open Source Section */}
            <motion.div
              variants={cardVariants}
              className="relative"
            >
              {/* Card Glow Effect */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-green-400/20 to-green-500/10 rounded-xl blur-md"
                animate={{
                  opacity: [0, 0.3, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />

              {/* Main Card */}
              <div className="relative bg-white rounded-xl p-6 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500">
                <motion.div 
                  className="flex items-center mb-6"
                  whileHover={{ x: 4 }}
                >
                  <motion.div
                    className="mr-4"
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Open Source Contributions
                  </h3>
                </motion.div>

                <div className="space-y-4">
                  {openSource.map((item, index) => (
                    <motion.div 
                      key={index}
                      custom={index}
                      variants={activityVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      whileHover={{ 
                        x: 8,
                        scale: 1.02,
                        transition: { type: "spring", stiffness: 400 }
                      }}
                      className="flex items-center p-4 rounded-xl transition-all duration-300 group/item border border-gray-200 hover:border-green-300"
                    >
                      <motion.div
                        className="flex-shrink-0 mr-4"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                      >
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md`}>
                          <div className="text-white">
                            {item.icon}
                          </div>
                        </div>
                      </motion.div>
                      <motion.span 
                        className="text-gray-700 group-hover/item:text-gray-900 transition-colors leading-relaxed flex-1"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {item.text}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Activities Section */}
            <motion.div
              variants={cardVariants}
              className="relative"
            >
              {/* Card Glow Effect */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-blue-400/20 to-blue-500/10 rounded-xl blur-md"
                animate={{
                  opacity: [0, 0.3, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />

              {/* Main Card */}
              <div className="relative bg-white rounded-xl p-6 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500">
                <motion.div 
                  className="flex items-center mb-6"
                  whileHover={{ x: 4 }}
                >
                  <motion.div
                    className="mr-4"
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Leadership & Activities
                  </h3>
                </motion.div>

                <div className="space-y-4">
                  {activities.map((item, index) => (
                    <motion.div 
                      key={index}
                      custom={index}
                      variants={activityVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      whileHover={{ 
                        x: 8,
                        scale: 1.02,
                        transition: { type: "spring", stiffness: 400 }
                      }}
                      className="flex items-center p-4 rounded-xl transition-all duration-300 group/item border border-gray-200 hover:border-blue-300"
                    >
                      <motion.div
                        className="flex-shrink-0 mr-4"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                      >
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md`}>
                          <div className="text-white">
                            {item.icon}
                          </div>
                        </div>
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <motion.span 
                            className="text-gray-700 group-hover/item:text-gray-900 transition-colors leading-relaxed"
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1 }}
                          >
                            {item.text}
                          </motion.span>
                          <motion.span 
                            className="text-sm text-gray-500 font-medium ml-4 whitespace-nowrap"
                            whileHover={{ scale: 1.05, color: "#3b82f6" }}
                          >
                            {item.year}
                          </motion.span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}