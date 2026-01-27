import {
  Mail,
  Linkedin,
  Github,
  Code2,
  GraduationCap,
  ChefHat,
  Download,
  Code,
  Briefcase,
  Cpu
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef(null);
  const trailRefs = useRef([]);
  const trailCount = 6;
  const current = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
      target.current = { x: e.clientX, y: e.clientY };

      // Check if hovering over interactive elements with proper safety checks
      if (e.target && typeof e.target.closest === 'function') {
        const isInteractive = 
          e.target.tagName === 'A' || 
          e.target.tagName === 'BUTTON' || 
          e.target.closest('a') !== null || 
          e.target.closest('button') !== null;
        setIsHovering(isInteractive);
      } else {
        setIsHovering(false);
      }
    };

    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.12;
      current.current.y += (target.current.y - current.current.y) * 0.12;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;
      }

      // Cursor tail
      trailRefs.current.forEach((trail, index) => {
        if (!trail) return;

        const delay = (index + 1) * 0.08;
        const x =
          current.current.x -
          (current.current.x - target.current.x) * delay;
        const y =
          current.current.y -
          (current.current.y - target.current.y) * delay;

        trail.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-gray-50 relative overflow-hidden">
      {/* Custom Cursor */}
      <div className="blob-container">
        <div ref={cursorRef} className="blob-wrapper">
          <div className={`blob-ball ${isHovering ? "blob-hover" : ""}`} />
        </div>

        {Array.from({ length: trailCount }).map((_, i) => (
          <div
            key={i}
            ref={(el) => (trailRefs.current[i] = el)}
            className="blob-trail"
            style={{ opacity: 1 - i * 0.12 }}
          />
        ))}
      </div>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div 
          className="absolute top-20 right-20 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-20 animate-[float_6s_ease-in-out_infinite] transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
        ></div>
        <div 
          className="absolute bottom-20 left-20 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30 animate-[float_8s_ease-in-out_infinite] transition-transform duration-300 ease-out"
          style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-screen justify-center">
        {/* Text Content */}
        <div className="md:w-2/3 text-center md:text-left space-y-6">
          <div className="space-y-4">
            <p className="text-orange-600 font-medium text-lg opacity-0 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards]">
              Welcome to my portfolio
            </p>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards]">
              Hi, I'm <span className="text-orange-600 relative">
                Shubham Gavade
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 animate-[slideIn_0.5s_ease-out_1s_forwards]"></span>
              </span>
            </h1>
          </div>
          
          <div className="space-y-4 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.6s_forwards]">
            <div className="flex flex-wrap justify-center md:justify-start gap-3 text-base">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-orange-200 shadow-sm hover:bg-orange-50 hover:border-orange-300 hover:shadow-md transition-all duration-300 cursor-default opacity-0 animate-[fadeInUp_0.5s_ease-out_0.8s_forwards]">
                <Code className="h-5 w-5 text-orange-600" />
                <span className="text-gray-700 font-medium">Full Stack Developer</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-orange-200 shadow-sm hover:bg-orange-50 hover:border-orange-300 hover:shadow-md transition-all duration-300 cursor-default opacity-0 animate-[fadeInUp_0.5s_ease-out_1s_forwards]">
                <Briefcase className="h-5 w-5 text-orange-600" />
                <span className="text-gray-700 font-medium">MERN Stack</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-orange-200 shadow-sm hover:bg-orange-50 hover:border-orange-300 hover:shadow-md transition-all duration-300 cursor-default opacity-0 animate-[fadeInUp_0.5s_ease-out_1.2s_forwards]">
                <Cpu className="h-5 w-5 text-orange-600" />
                <span className="text-gray-700 font-medium">AI Enthusiast</span>
              </div>
            </div>
          </div>

          {/* Email and Social Links */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-8 opacity-0 animate-[fadeInUp_0.6s_ease-out_1.4s_forwards]">
            <div className="flex items-center justify-center md:justify-start bg-white px-4 py-3 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-orange-300 transition-all duration-300">
              <Mail className="h-5 w-5 mr-3 text-orange-600" />
              <a
                href="mailto:gavadeshubham2004@gmail.com"
                className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium"
              >
                gavadeshubham2004@gmail.com
              </a>
            </div>

            <div className="flex justify-center md:justify-start space-x-3">
              <a 
                href="https://www.linkedin.com/in/shubham-gavade23/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-orange-600 transition-all duration-300 flex items-center justify-center w-11 h-11 rounded-lg bg-white border border-gray-200 shadow-sm hover:border-orange-600 hover:shadow-lg hover:-translate-y-1"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/ShubhamG2004" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-orange-600 transition-all duration-300 flex items-center justify-center w-11 h-11 rounded-lg bg-white border border-gray-200 shadow-sm hover:border-orange-600 hover:shadow-lg hover:-translate-y-1"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://leetcode.com/gavadeshubham2004" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-orange-600 transition-all duration-300 flex items-center justify-center w-11 h-11 rounded-lg bg-white border border-gray-200 shadow-sm hover:border-orange-600 hover:shadow-lg hover:-translate-y-1"
              >
                <Code2 className="h-5 w-5" />
              </a>
              <a 
                href="https://www.geeksforgeeks.org/user/gavadeshubham2004/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-orange-600 transition-all duration-300 flex items-center justify-center w-11 h-11 rounded-lg bg-white border border-gray-200 shadow-sm hover:border-orange-600 hover:shadow-lg hover:-translate-y-1"
              >
                <GraduationCap className="h-5 w-5" />
              </a>
              <a 
                href="https://www.codechef.com/users/shubhamgavade" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-orange-600 transition-all duration-300 flex items-center justify-center w-11 h-11 rounded-lg bg-white border border-gray-200 shadow-sm hover:border-orange-600 hover:shadow-lg hover:-translate-y-1"
              >
                <ChefHat className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-10 opacity-0 animate-[fadeInUp_0.6s_ease-out_1.6s_forwards]">
            <a 
              href="#contact" 
              className="px-7 py-3.5 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center group"
            >
              <Mail className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              <span>Hire Me</span>
            </a>
            <a 
              href="#projects" 
              className="px-7 py-3.5 border-2 border-orange-600 text-orange-600 bg-white hover:bg-orange-600 hover:text-white font-semibold rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center group"
            >
              <Code2 className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              <span>View Projects</span>
            </a>
            <a
              href="/Resume_Shubham_Gavade.pdf"
              download
              className="px-7 py-3.5 bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-semibold rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center group"
            >
              <Download className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="md:w-1/3 flex justify-center mt-10 md:mt-0 opacity-0 animate-[fadeInRight_0.8s_ease-out_0.4s_forwards]">
          <div 
            className="relative group transition-transform duration-300 ease-out"
            style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-700 scale-90 group-hover:scale-110"></div>
            
            {/* Animated border effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[rotate_3s_linear_infinite]"></div>
            
            {/* Image container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-orange-600 shadow-xl group-hover:shadow-2xl group-hover:shadow-orange-300/60 transition-all duration-500 bg-white">
              <img 
                src="/My_Image.png" 
                alt="Shubham Gavade"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              {/* Overlay gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .blob-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 9999;
          pointer-events: none;
        }

        .blob-wrapper {
          position: fixed;
          pointer-events: none;
          transform: translate(-50%, -50%);
          will-change: transform;
        }

        .blob-ball {
          width: 60px;
          height: 60px;
          background: radial-gradient(
            circle,
            rgba(249, 115, 22, 0.6) 0%,
            rgba(249, 115, 22, 0.3) 50%,
            rgba(249, 115, 22, 0.1) 100%
          );
          border-radius: 50%;
          filter: blur(12px);
          transition: width 0.3s ease-out, height 0.3s ease-out;
        }

        .blob-hover {
          width: 80px;
          height: 80px;
        }

        .blob-trail {
          position: fixed;
          width: 50px;
          height: 50px;
          background: radial-gradient(
            circle,
            rgba(249, 115, 22, 0.35),
            rgba(249, 115, 22, 0.15),
            transparent
          );
          border-radius: 50%;
          filter: blur(14px);
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: opacity 0.2s ease;
        }
      
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            width: 0;
          }
          to {
            opacity: 1;
            width: 100%;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}