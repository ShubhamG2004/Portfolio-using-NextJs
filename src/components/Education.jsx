import { motion } from 'framer-motion';

export default function Education() {
  const educationData = [
    {
      degree: "B.E. Electronic and Computer Engineering",
      score: "CGPA: 8.67",
      institution: "PES Modern College of Engineering, Pune",
      duration: "Sept 2023 – June 2026",
      location: "Pune, India",
      icon: "🎓"
    },
    {
      degree: "Diploma in Information Technology",
      score: "Percentage: 87.18%",
      institution: "Government Polytechnic, Kolhapur",
      duration: "Dec 2020 – June 2023",
      location: "Kolhapur, India",
      icon: "📚"
    },
    {
      degree: "SSC (10th)",
      score: "Percentage: 94.60%",
      institution: "Shri Shardchandraji High School, Buzavade",
      duration: "March 2020",
      location: "Kolhapur, India",
      icon: "🏫"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="education" className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-t-2 border-orange-300 bg-gradient-to-b from-yellow-50/20 via-white to-white">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-animation"></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gray-900/80"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-yellow-50/10 to-transparent opacity-30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
             Acad<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 relative">
                        <span className="relative z-10">emics</span>
                        <span className="absolute bottom-0 left-0 w-full h-3  opacity-70 -z-0 transform -rotate-1"></span>
                </span>
          </h2>
          
          <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-20 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full mb-4 origin-left"
                    />
        </motion.div>

        {/* Horizontal Timeline Rope */}
        <div className="relative px-4 py-12">
          {/* Horizontal rope line */}
          <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 transform -translate-y-1/2 shadow-lg shadow-yellow-500/50 rounded-full"></div>
          
          {/* Rope glow effect */}
          <div className="absolute top-1/2 left-0 right-0 h-4 bg-gradient-to-r from-yellow-400/20 via-yellow-500/10 to-transparent transform -translate-y-1/2 blur-lg rounded-full"></div>
          
          {/* Education cards container - horizontal scroll on mobile, grid on larger screens */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Connector line from rope to card */}
                <div className="absolute left-1/2 top-0 w-0.5 h-8 bg-gradient-to-b from-yellow-400 to-transparent transform -translate-x-1/2 -translate-y-full"></div>
                
                {/* Rope attachment knot */}
                <div className="absolute left-1/2 top-0 w-6 h-6 rounded-full bg-yellow-500 border-4 border-white transform -translate-x-1/2 -translate-y-16 z-20 shadow-lg shadow-yellow-400/50 animate-pulse"></div>
                
                {/* Inner knot for depth */}
                <div className="absolute left-1/2 top-0 w-3 h-3 rounded-full bg-yellow-400 border-2 border-yellow-300 transform -translate-x-1/2 -translate-y-16 z-20"></div>
                
                {/* Content Card */}
                <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 p-6 rounded-xl shadow-lg border-t-4 border-yellow-500 hover:border-yellow-400 transition-all duration-500 h-full transform hover:scale-105">
                  <div className="flex items-start flex-col">
                    <span className="text-4xl mb-4">{edu.icon}</span>
                    <div className="w-full">
                      <h3 className="text-lg font-bold text-white leading-tight mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-yellow-400 font-semibold text-sm mb-3">{edu.score}</p>
                      <p className="text-slate-300 text-sm mb-4">{edu.institution}</p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center text-xs text-slate-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {edu.duration}
                        </div>
                        <div className="flex items-center text-xs text-slate-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}