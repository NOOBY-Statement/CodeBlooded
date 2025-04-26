import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBullseye, FaEye } from 'react-icons/fa';
import { FaBars, FaTimes } from "react-icons/fa";
import { Menu, X } from 'lucide-react';
import Lanyard from '../components/Lanyard';
import Aurora from '../components/Background';
import TeamName from "../components/TeamName";
import { Link } from 'react-router-dom';
import { div } from 'framer-motion/client';
import Footer from '../components/Footer';
import hologram from '../assets/hologram.png';


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Home", "About", "Members", "Projects", "Contact"];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Section */}
        <section className="h-auto md:h-[100vh] min-h-[480px] bg-gradient-to-b from-[#0c1f33] via-[#0a2742] to-[#12345a] flex flex-col md:flex-row items-center justify-between px-6 md:px-12 relative pt-0 mt-0 z-50">
          {/* Aurora Background */}
          <div className="absolute inset-0 z-0">
            <Aurora
              colorStops={["#00D8FF", "#4169F1", "#465891"]}
              blend={0.5}
              amplitude={1.0}
              speed={0.5}
            />
          </div>

           {/* Mobile Hamburger Button */}
        <motion.div 
          className="lg:hidden fixed top-3 right-4 z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-300 p-2.5 rounded-full bg-[#0a2742]/80 backdrop-blur-sm border border-blue-400/30 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400/50"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <FaTimes className="text-blue-200 text-xl" />
            ) : (
              <FaBars className="text-blue-200 text-xl" />
            )}
          </button>
        </motion.div>
     
          
          {/* Left Side Content */}
          <div className="flex flex-col justify-center items-center md:items-start z-10 w-full md:w-1/2 space-y-6 text-white py-10 md:py-0 text-center md:text-left mt-10">
            <TeamName
              sentence="Code Blooded"
              manualMode={false}
              blurAmount={5}
              borderColor="lightblue"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />

            <p className="text-[18px] text-white mt-4 px-4 md:px-0">
            Where code meets cold precision and a flawless execution with zero hesitation.
            </p>

            {/* Call to Action Button */}
            <Link to="/about" className="flex justify-center md:justify-start w-full">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 0 12px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-full font-medium text-sm relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={false}
                  animate={{ backgroundColor: "rgba(147, 197, 253, 0)", scale: 1 }}
                  whileHover={{
                    backgroundColor: "rgba(147, 197, 253, 0.1)",
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                />
                <span className="relative z-10 block px-2">Get Started</span>
              </motion.button>
            </Link>

            {/* Desktop Navigation Links (below CTA button) */}
            <div className="hidden md:flex flex-row space-x-8 mt-2">
              {links.map((link) => (
                <motion.div key={link} className="relative" whileHover="hover" initial="rest">
                  <motion.a
                    href={`/${link.toLowerCase()}`}
                    className="text-blue-300 text-lg font-medium relative"
                    variants={{
                      rest: { color: "#93c5fd" },
                      hover: { color: "#bfdbfe" }
                    }}
                  >
                    {link}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-blue-400"
                      variants={{
                        rest: { width: 0 },
                        hover: { width: "100%" }
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Overlay */}
          <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="overlay-bg"
              className="lg:hidden fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0c1f33]/95 via-[#0a2742]/95 to-[#12345a]/95 backdrop-blur-md" />
              
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-blue-400/20"
                  style={{
                    width: Math.random() * 8 + 2 + 'px',
                    height: Math.random() * 8 + 2 + 'px',
                    left: Math.random() * 100 + '%',
                    top: Math.random() * 100 + '%',
                  }}
                  animate={{
                    y: [0, (Math.random() - 0.5) * 60],
                    x: [0, (Math.random() - 0.5) * 40],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: Math.random() * 10 + 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>

            <motion.div
              key="nav-content"
              className="lg:hidden fixed inset-0 z-50 flex flex-col items-center justify-center p-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="space-y-6 w-full max-w-xs">
                {links.map((link, index) => (
                  <motion.div
                    key={link}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.1 + index * 0.1,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={`/${link.toLowerCase()}`}
                      onClick={() => setMenuOpen(false)}
                      className="block w-full"
                    >
                      <motion.div
                        className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-900/30 to-blue-800/20 border border-blue-700/30 backdrop-blur-sm shadow-lg"
                        whileHover={{
                          background: [
                            'linear-gradient(to right, rgba(12, 74, 110, 0.3), rgba(8, 47, 73, 0.2))',
                            'linear-gradient(to right, rgba(16, 94, 140, 0.4), rgba(10, 60, 90, 0.3))'
                          ],
                          borderColor: 'rgba(96, 165, 250, 0.5)'
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-center space-x-3">
                          <motion.div
                            className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center"
                            animate={{
                              rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              repeatType: "mirror"
                            }}
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                          </motion.div>
                          <motion.span
                            className="text-xl font-medium text-blue-100"
                            whileHover={{ color: '#bfdbfe' }}
                          >
                            {link}
                          </motion.span>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Close Button */}
              <motion.button
                onClick={() => setMenuOpen(false)}
                className="mt-10 px-6 py-2.5 rounded-full bg-blue-900/40 border border-blue-700/40 text-blue-200 font-medium flex items-center space-x-2 hover:bg-blue-900/60 transition-colors"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(29, 78, 216, 0.5)'
                }}
                whileTap={{ 
                  scale: 0.95,
                  backgroundColor: 'rgba(29, 78, 216, 0.3)'
                }}
                transition={{ duration: 0.2 }}
              >
                <span>Close</span>
                <FaTimes className="text-base" />
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

          {/* Right Side - Lanyard with adjusted positioning */}
          <div className="w-90% md:w-1/2 h-auto flex justify-center md:justify-end items-start z-10">
          {/* Mobile/Tablet: Centered with moderate spacing */}
          <div className="w-full max-w-[500px] h-auto -mt-25 md:-mt-70 lg:hidden">
            <Lanyard />
          </div>

          {/* Desktop/Laptop: Larger and flush to top */}
          <div className="hidden lg:block absolute right-0 top-0 h-full lg:-mt-35 w-[55%]">
            <div className="h-full w-full scale-[1.15] origin-top-right">
              <Lanyard />
            </div>
          </div>
        </div>
        </section>
      </motion.div>

     {/* Introduction Section - Responsive */}
<section className="relative h-auto min-h-[550px] sm:min-h-[550px] py-12 sm:py-16 text-center bg-gradient-to-b from-[#12345a] via-[#0d2b4a] to-[#0a2038]">
  {/* Text Content */}
  <div className="relative z-40 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
    <div className="text-center mb-10 sm:mb-14">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Introduction
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
    </div>
    
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 sm:p-8 lg:p-10 shadow-lg shadow-blue-900/10">
        <p className="text-lg sm:text-xl lg:text-xl text-gray-300 text-center leading-relaxed sm:leading-loose">
            This is the digital home of <span className="font-semibold text-blue-300">CodeBlooded</span>—a team of five developers with a shared passion 
            for crafting high-quality, efficient, and innovative software. Our website showcases who we are, 
            what we do, and the expertise we bring to every project.
        </p>
        
        <div className="my-6 flex justify-center">
            <div className="w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        </div>
        
        <p className="text-lg sm:text-xl lg:text-xl text-gray-300 text-center leading-relaxed sm:leading-loose">
            Explore our team profiles to learn more about each member's background, specialties, 
            and technical strengths across frontend and backend development. Visit our <span className="text-cyan-300">Projects </span> 
            section to see the solutions we've built—from solo experiments to full-scale 
            collaborative applications.
        </p>
        
        <div className="mt-8 text-center">
            <p className="text-blue-200 italic text-lg sm:text-xl">
                "Whether you're here out of curiosity, collaboration, or looking for inspiration, 
                feel free to take a look around."
            </p>
        </div>
    </div>
    

</div>

  {/* Light Effects - Adjusted for Mobile */}
  <div className="absolute -bottom-20 sm:-bottom-32 left-1/2 -translate-x-1/2 w-full h-[400px] sm:h-[600px] z-10 overflow-hidden">
    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[120px] sm:w-[180px] h-[400px] sm:h-[600px] bg-gradient-to-t from-blue-500/70 via-blue-300/20 to-transparent blur-[40px] sm:blur-[60px] z-10 animate-beam-fade"></div>
    <div className="absolute bottom-20 left-1/2 -translate-x-[60%] w-[80px] sm:w-[120px] h-[350px] sm:h-[550px] bg-gradient-to-t from-blue-400/50 via-blue-300/15 to-transparent blur-[30px] sm:blur-[40px] z-10 animate-beam-fade" 
         style={{transform: 'rotate(-12deg)', transformOrigin: 'bottom center'}}></div>
    <div className="absolute bottom-20 left-1/2 translate-x-[10%] w-[80px] sm:w-[120px] h-[350px] sm:h-[550px] bg-gradient-to-t from-blue-400/50 via-blue-300/15 to-transparent blur-[30px] sm:blur-[40px] z-10 animate-beam-fade" 
         style={{transform: 'rotate(12deg)', transformOrigin: 'bottom center'}}></div>
  </div>

<br></br>

  {/* Glow Pulse - Responsive */}
  <div className="absolute -bottom-16 sm:-bottom-20 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[60px] sm:h-[80px] bg-gradient-to-r from-blue-500/30 via-blue-400/20 to-blue-500/30 blur-[50px] sm:blur-[80px] z-20 animate-glow-pulse"></div>

  {/* Responsive Hologram */}
  <motion.img
  src= {hologram}
  alt="Hologram Projector"
  className="absolute -bottom-20 sm:-bottom-28 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-auto z-30"
  initial={{ 
    transform: 'translateX(1%) translateY(0) rotate(0deg)'
  }}
  animate={{ 
    transform: [
      'translateX(1%) translateY(0px) rotate(0deg)',
      'translateX(1%) translateY(-15px) rotate(0.5deg)',
      'translateX(1%) translateY(0px) rotate(0deg)',
      'translateX(1%) translateY(-10px) rotate(-0.5deg)',
      'translateX(1%) translateY(0px) rotate(0deg)'
    ]
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    times: [0, 0.25, 0.5, 0.75, 1]
  }}
/>
</section>


      <div className="mx-auto flex flex-col md:flex-row justify-center items-center gap-6 lg:gap-12 px-4 sm:px-6 relative z-0 h-full py-20 
      bg-gradient-to-b from-[#0a2038] via-[#093055] to-[#000000]">
  {/* Mission Card */}
  <motion.div 
    className="relative bg-[#0f172acc] backdrop-blur-sm p-6 sm:p-8 rounded-2xl w-full md:w-1/3 text-center border border-blue-500/20 shadow-2xl overflow-hidden"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    {/* Animated border */}
    <motion.div 
      className="absolute inset-0 rounded-2xl border-2 border-transparent pointer-events-none"
      animate={{
        borderColor: ['rgba(96, 165, 250, 0)', 'rgba(96, 165, 250, 0.3)', 'rgba(96, 165, 250, 0)'],
        boxShadow: ['0 0 0 rgba(96, 165, 250, 0)', '0 0 20px rgba(96, 165, 250, 0.3)', '0 0 0 rgba(96, 165, 250, 0)']
      }}
      transition={{
        duration: 6,
        repeat: Infinity
      }}
    />
    
    {/* Floating particles */}
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`mission-particle-${i}`}
          className="absolute bg-blue-400 rounded-full"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.4
          }}
          animate={{
            y: [0, (Math.random() - 0.5) * 40],
            x: [0, (Math.random() - 0.5) * 40],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}
    </div>
    
    {/* Floating icon */}
    <motion.div
      className="mb-4 sm:mb-6 relative z-10"
      animate={{
        y: [-5, 5, -5]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <FaBullseye className="text-4xl sm:text-5xl text-blue-400 mx-auto" />
    </motion.div>
    
    <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100 relative z-10">
      Mission
    </h3>
    <p className="text-blue-100 text-base sm:text-lg leading-relaxed relative z-10">
    Build purposeful, reliable, and high-performance software through collaboration, innovation, and technical excellence. 
    We aim to turn complex problems into clean, scalable solutions, one line of code at a time.
    </p>
    
    {/* Particle effect */}
    <motion.div 
      className="absolute -bottom-10 -left-10 w-20 h-20 rounded-full bg-blue-400/10 blur-xl"
      animate={{
        scale: [1, 1.5, 1],
        opacity: [0.3, 0.6, 0.3]
      }}
      transition={{
        duration: 5,
        repeat: Infinity
      }}
    />
    
    {/* Connection lines */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M20,20 L80,80"
        stroke="rgba(96, 165, 250, 0.2)"
        strokeWidth="1"
        strokeDasharray="5 5"
        animate={{
          strokeDashoffset: [0, 20],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.path
        d="M30,70 L70,30"
        stroke="rgba(96, 165, 250, 0.2)"
        strokeWidth="1"
        strokeDasharray="5 5"
        animate={{
          strokeDashoffset: [20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          delay: 1.5
        }}
      />
    </svg>
  </motion.div>

  {/* Vision Card */}
  <motion.div 
    className="relative bg-[#0f172acc] backdrop-blur-sm p-6 sm:p-8 rounded-2xl w-full md:w-1/3 text-center border border-purple-500/20 shadow-2xl overflow-hidden mt-6 md:mt-0"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    viewport={{ once: true }}
  >
    {/* Pulsing glow */}
    <motion.div 
      className="absolute inset-0 rounded-2xl pointer-events-none"
      animate={{
        boxShadow: ['0 0 0 rgba(168, 85, 247, 0)', '0 0 30px rgba(168, 85, 247, 0.3)', '0 0 0 rgba(168, 85, 247, 0)']
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        delay: 1
      }}
    />
    
    {/* Floating particles */}
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`vision-particle-${i}`}
          className="absolute bg-purple-400 rounded-full"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.4
          }}
          animate={{
            y: [0, (Math.random() - 0.5) * 40],
            x: [0, (Math.random() - 0.5) * 40],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}
    </div>
    
    {/* Floating icon */}
    <motion.div
      className="mb-4 sm:mb-6 relative z-10"
      animate={{
        y: [-5, 5, -5],
        rotate: [0, 5, 0]
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5
      }}
    >
      <FaEye className="text-4xl sm:text-5xl text-purple-400 mx-auto" />
    </motion.div>
    
    <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-200 relative z-10">
      Vision
    </h3>
    <p className="text-blue-100 text-base sm:text-lg leading-relaxed relative z-10">
    To be a versatile, future-ready development team known for our precision, creativity, and adaptability across the full tech stack. 
    We strive to create digital experiences that not only meet expectations, but exceed them.
    </p>
    
    {/* Particle effect */}
    <motion.div 
      className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-purple-400/10 blur-xl"
      animate={{
        scale: [1, 1.8, 1],
        opacity: [0.2, 0.5, 0.2]
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        delay: 1
      }}
    />
    
    {/* Connection lines */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M10,50 L90,50"
        stroke="rgba(168, 85, 247, 0.2)"
        strokeWidth="1"
        strokeDasharray="5 5"
        animate={{
          strokeDashoffset: [0, 20],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.path
        d="M50,10 L50,90"
        stroke="rgba(168, 85, 247, 0.2)"
        strokeWidth="1"
        strokeDasharray="5 5"
        animate={{
          strokeDashoffset: [20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          delay: 1.5
        }}
      />
    </svg>
  </motion.div>
</div>

{/* Robot Hand Section with Animation */}
<section className="relative h-[300px] sm:h-[400px] lg:h-[500px] bg-black flex items-end justify-end overflow-hidden">
  {/* Background grid */}
  <div className="absolute inset-0 opacity-20">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)"/>
    </svg>
  </div>
  
  {/* Floating particles in background */}
  {[...Array(15)].map((_, i) => (
    <motion.div
      key={`bg-particle-${i}`}
      className="absolute rounded-full bg-white"
      style={{
        width: `${Math.random() * 3 + 1}px`,
        height: `${Math.random() * 3 + 1}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        opacity: 0.6
      }}
      animate={{
        y: [0, (Math.random() - 0.5) * 100],
        x: [0, (Math.random() - 0.5) * 100],
        opacity: [0.2, 0.8, 0.2]
      }}
      transition={{
        duration: Math.random() * 10 + 10,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    />
  ))}
  
  <motion.div
    className="absolute bottom-0 right-0"
    initial={{ y: 0 }}
    animate={{
      y: [-10, 15, -10],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <motion.img 
      src="images/hand.png" 
      className="h-[400px] sm:h-[550px] lg:h-[650px] object-contain brightness-60"
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      alt="Robot hand"
      style={{ 
        transformOrigin: 'right bottom' 
      }}
    />
  </motion.div>
</section>
<Footer />
</div>
);
}