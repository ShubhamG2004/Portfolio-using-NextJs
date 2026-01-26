import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Code, Loader } from 'lucide-react';

export default function Contact() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        'service_xk34nsa',
        'template_jv4jqws',
        {
          title: formData.title,
          name: formData.name,
          time: new Date().toLocaleString(),
          message: formData.message,
          email: formData.email
        },
        'CwV_Vp1w8mAYxMjwY'
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', title: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

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

  const itemVariants = {
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

  const inputVariants = {
    focused: {
      scale: 1.02,
      boxShadow: "0 0 0 3px rgba(249, 115, 22, 0.1), 0 0 15px rgba(249, 115, 22, 0.15)",
      borderColor: "#f97316"
    },
    unfocused: {
      scale: 1,
      boxShadow: "0 0 0 0px rgba(249, 115, 22, 0)",
      borderColor: "#e5e7eb"
    }
  };

  return (
    <section 
      ref={containerRef}
      id="contact" 
      className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-orange-100 via-orange-50/20 to-white  border-t-2 border-orange-200"
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
          {/* Small white badge */}
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-5
              bg-white border border-orange-200
              text-orange-600 text-xs font-medium
              rounded-full shadow-sm"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Mail className="w-4 h-4" />
            Let’s Connect
          </motion.span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Get{" "}
            <span className="relative inline-block text-orange-600">
              In Touch
              <motion.span
                className="absolute left-0 -bottom-1 h-[2px] w-full bg-orange-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              />
            </span>
          </h2>

          <motion.p
            className="text-base text-gray-600 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Ready to bring your ideas to life? Let’s discuss your next project.
          </motion.p>
        </motion.div>


        {/* Main Content */}
        <motion.div 
          className="grid grid-cols-1 xl:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Contact Form */}
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
                    <Send className="h-6 w-6 text-white" />
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900">
                  Send Message
                </h3>
              </motion.div>

              {/* Form */}
              <form onSubmit={sendEmail} className="space-y-6">
                <motion.div
                  variants={itemVariants}
                  custom={0}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <motion.input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none transition-all"
                    placeholder="What's this about?"
                    variants={inputVariants}
                    whileFocus="focused"
                    initial="unfocused"
                  />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    variants={itemVariants}
                    custom={1}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Name
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none transition-all"
                      placeholder="Your name"
                      variants={inputVariants}
                      whileFocus="focused"
                      initial="unfocused"
                    />
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    custom={2}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none transition-all"
                      placeholder="your@email.com"
                      variants={inputVariants}
                      whileFocus="focused"
                      initial="unfocused"
                    />
                  </motion.div>
                </div>

                <motion.div
                  variants={itemVariants}
                  custom={3}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none transition-all resize-none"
                    placeholder="Tell me about your project or idea..."
                    variants={inputVariants}
                    whileFocus="focused"
                    initial="unfocused"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  variants={itemVariants}
                  custom={4}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 25px rgba(249, 115, 22, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 px-8 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl overflow-hidden ${
                    isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                  }`}
                >
                  {/* Button Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-orange-500/20 blur-xl"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Button Content */}
                  <div className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="mr-3"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Loader className="w-5 h-5" />
                        </motion.div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </div>
                </motion.button>

                {/* Status Messages */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`text-center p-4 rounded-lg ${
                      submitStatus === 'success' 
                        ? 'bg-green-50 text-green-700 border border-green-200' 
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}
                  >
                    {submitStatus === 'success' 
                      ? '✅ Message sent successfully! I\'ll get back to you soon.' 
                      : '❌ Failed to send message. Please try again or contact me directly.'}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
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
              {/* Header */}
              <motion.div 
                className="flex items-center mb-8"
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
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900">
                  Contact Info
                </h3>
              </motion.div>

              {/* Contact Items */}
              <div className="space-y-6">
                {/* Email */}
                <motion.div 
                  variants={itemVariants}
                  custom={0}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ 
                    x: 8,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  className="flex items-start p-4 rounded-lg transition-all duration-300 group/item border border-gray-200 hover:border-green-300 hover:bg-green-50/50"
                >
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-md">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                  </motion.div>
                  <div className="ml-4 flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Email</h4>
                    <motion.a 
                      href="mailto:gavadeshubham2004@gmail.com" 
                      className="text-gray-600 hover:text-green-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      gavadeshubham2004@gmail.com
                    </motion.a>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div 
                  variants={itemVariants}
                  custom={1}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ 
                    x: 8,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  className="flex items-start p-4 rounded-lg transition-all duration-300 group/item border border-gray-200 hover:border-blue-300 hover:bg-blue-50/50"
                >
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                  </motion.div>
                  <div className="ml-4 flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Phone</h4>
                    <motion.a 
                      href="tel:+917057652014" 
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      +91 7057652014
                    </motion.a>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div 
                  variants={itemVariants}
                  custom={2}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ 
                    x: 8,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  className="flex items-start p-4 rounded-lg transition-all duration-300 group/item border border-gray-200 hover:border-purple-300 hover:bg-purple-50/50"
                >
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-md">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                  </motion.div>
                  <div className="ml-4 flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-600">Pune, Maharashtra, India</p>
                  </div>
                </motion.div>

                {/* Social Links */}
                <motion.div 
                  variants={itemVariants}
                  custom={3}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="pt-6 border-t border-gray-200"
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-6 text-center">Connect with me</h4>
                  <div className="flex justify-center space-x-6">
                    {/* LinkedIn */}
                    <motion.a 
                      href="https://www.linkedin.com/in/shubham-gavade23/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="relative group"
                      whileHover={{ y: -4, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:border-blue-300 group-hover:bg-blue-50 transition-all duration-300">
                        <Linkedin className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
                      </div>
                    </motion.a>

                    {/* GitHub */}
                    <motion.a 
                      href="https://github.com/ShubhamG2004" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="relative group"
                      whileHover={{ y: -4, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:border-gray-400 group-hover:bg-gray-50 transition-all duration-300">
                        <Github className="h-6 w-6 text-gray-600 group-hover:text-gray-900 transition-colors" />
                      </div>
                    </motion.a>

                    {/* LeetCode */}
                    <motion.a 
                      href="https://leetcode.com/gavadeshubham2004" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="relative group"
                      whileHover={{ y: -4, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:border-orange-300 group-hover:bg-orange-50 transition-all duration-300">
                        <Code className="h-6 w-6 text-gray-600 group-hover:text-orange-600 transition-colors" />
                      </div>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-gray-500 text-sm">
            I typically respond within 24 hours. Looking forward to hearing from you!
          </p>
        </motion.div>
      </div>
    </section>
  );
}