import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { FaGithub, FaLinkedin, FaFacebook, FaCode, FaServer, FaShieldAlt, FaPalette, FaRocket, FaPhp, FaPython, FaJava, FaDatabase, FaConnectdevelop, FaFileContract, FaPhone, FaReact, FaCss3  } from "react-icons/fa";
import profileImg from "../assets/lacambra.png";
import { RiJavascriptFill } from "react-icons/ri";
import { DiHtml5 } from "react-icons/di";
import { Link } from 'react-router-dom';

const skillIcons = {
  "Database Management": <FaDatabase className="inline mr-1" />,
  "Python": <FaPython className="inline mr-1" />,
  "Java": <FaJava className="inline mr-1" />,
  "PHP": <FaPhp className="inline mr-1" />,
  "React": <FaReact className="inline mr-1" />,
  "HTML": <DiHtml5  className="inline mr-1" />,
  "CSS": <FaCss3  className="inline mr-1" />,
  "Javascript": <RiJavascriptFill className="inline mr-1" />
};

const members = [
  {
    name: "Joshua S. Lacambra",
    role: "Backend Developer, Project Manager",
    skills: ["Database Management", "Python", "Java", "PHP", "React", "HTML", "CSS","Javascript"],
    socials: {
      github: "https://github.com/NOOBY-Statement",
      facebook: "https://www.facebook.com/joshxyz111",
    },
    image: profileImg
  },
];

export default function Members() {
  const [selected] = useState({
    ...members[0],
    // Add years of experience for each skill
    skillYears: {
      "Database Management": 3,
      "Python": 2,
      "Java": 2,
      "PHP": 2,
      "React": 2,
      "HTML": 3,
      "CSS": 3,
      "Javascript": 2
    }
  });
  
  const [isHoveringSocial, setIsHoveringSocial] = useState(null);
  
  // Floating animation
  const floating = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0c1f33] to-[#0a2742] text-blue-100 overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400 opacity-10"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              width: Math.random() * 10 + 2,
              height: Math.random() * 10 + 2,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              transition: {
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          />
        ))}
      </div>

      <Navbar />

       {/* Back Button */}
       <motion.div
        className="fixed top-24 left-6 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Link 
          to="/members" 
          className="flex items-center gap-2 group"
        >
          <motion.div
            className="w-10 h-10 rounded-full bg-blue-900/70 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-800/80 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-blue-300 group-hover:text-white transition-colors" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </motion.div>
          <motion.span
            className="text-blue-300 font-medium text-sm bg-blue-900/50 px-3 py-1 rounded-full backdrop-blur-sm border border-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity"
            initial={{ x: -10 }}
          >
            Back to Team
          </motion.span>
        </Link>
      </motion.div>
      
      <motion.div
        className="flex justify-center items-center py-20 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="relative w-full max-w-6xl bg-blue-900/20 rounded-2xl p-10 flex flex-col md:flex-row-reverse items-center gap-10 backdrop-blur-sm"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-blue-500 opacity-0 hover:opacity-10 transition-opacity duration-300" />
          </div>

          {/* PROFILE IMAGE */}
          <motion.div
            className="relative"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="w-72 h-72 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-lg relative"
              animate={floating}
            >
              <img
                src={selected.image}
                alt={selected.name}
                className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent pointer-events-none" />
            </motion.div>
            
            {/* Floating tech icons around image */}
            {selected.skills.map((skill, i) => (
              <motion.div
                key={i}
                className="absolute bg-blue-800/80 text-blue-100 p-3 rounded-full text-lg flex items-center justify-center shadow-lg"
                initial={{
                  x: Math.random() * 100 - 50,
                  y: Math.random() * 100 - 50,
                  scale: 0
                }}
                animate={{
                  x: Math.random() * 100 - 50,
                  y: Math.random() * 100 - 50,
                  scale: 1,
                  transition: {
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                }}
                whileHover={{ 
                  scale: 1.3,
                  zIndex: 10,
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.7)"
                }}
              >
                {skillIcons[skill]}
              </motion.div>
            ))}
          </motion.div>

          {/* TEXT CONTENT */}
          <div className="flex-1">
            <motion.h2
              className="text-4xl font-bold tracking-widest text-blue-100 mb-2 hover:text-white transition-colors duration-300"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ 
                textShadow: "0 0 10px rgba(255,255,255,0.7)",
                y: -2
              }}
            >
              {selected.name.toUpperCase()}
            </motion.h2>

            <motion.h4
              className="text-lg uppercase tracking-widest text-blue-300 mb-6 hover:text-blue-200 transition-colors duration-300"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ 
                scale: 1.05,
                x: 5
              }}
            >
              {selected.role}
            </motion.h4>

            <p className="text-sm text-blue-300 mb-2 flex items-center">
              <FaCode className="mr-2 animate-pulse" /> EXPERTISE:
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {selected.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="px-4 py-1 bg-blue-900/40 text-blue-100 rounded-full text-sm hover:bg-blue-800/60 hover:text-white cursor-default relative group"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ 
                    scale: 1.2,
                    y: -5,
                    boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {skillIcons[skill]} {skill}
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {selected.skillYears[skill]} years experience
                  </span>
                </motion.div>
              ))}
            </div>

            <p className="text-sm text-blue-300 mb-3 flex items-center top-5">
              <FaPhone className="mr-2 animate-bounce" /> CONNECT:
            </p>
            <div className="flex space-x-6 mt-2">
              {Object.entries(selected.socials).map(([platform, url]) => (
                <motion.a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                  onHoverStart={() => setIsHoveringSocial(platform)}
                  onHoverEnd={() => setIsHoveringSocial(null)}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {platform === 'github' && (
                    <motion.div
                      animate={{
                        rotate: isHoveringSocial === platform ? [0, 10, -10, 0] : 0,
                        transition: { duration: 0.5 }
                      }}
                    >
                      <FaGithub className="text-2xl text-blue-200 hover:text-white transition-colors" />
                    </motion.div>
                  )}
                  
                  {platform === 'facebook' && (
                    <motion.div
                      animate={{
                        rotate: isHoveringSocial === platform ? [0, 15, -15, 0] : 0,
                        transition: { duration: 0.5 }
                      }}
                    >
                      <FaFacebook className="text-2xl text-blue-200 hover:text-white transition-colors" />
                    </motion.div>
                  )}
                  
                  <motion.span
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-blue-800 text-white text-xs px-2 py-1 rounded mb-2 whitespace-nowrap pointer-events-none"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ 
                      opacity: isHoveringSocial === platform ? 1 : 0,
                      y: isHoveringSocial === platform ? 0 : 5
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    Visit {platform}
                  </motion.span>
                  
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white"
                    animate={{
                      width: isHoveringSocial === platform ? "100%" : "0%"
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}