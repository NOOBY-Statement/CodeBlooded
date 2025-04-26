import React from 'react';
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from 'react-router-dom';
import  Img5 from "../assets/sablanding.png";
import  Img1 from "../assets/twitter.png";
import  Img3 from "../assets/inayawan3.png";
import { div } from 'framer-motion/client';
import DatuImg from "../assets/datu.png";
import DefensorImg from "../assets/defensor.png";
import LacambraImg from "../assets/lacambra.png";
import LegaspiImg from "../assets/legaspi.png";
import SonalizaImg from "../assets/sonaliza.png";


const teamMembers = [
  { 
    name: 'Datu', 
    img: DatuImg,
    role: "Backend Developer",
    bio: "Responsible for building and maintaining the server-side of our portfolio website.",
    social: {
      github: "#",
      linkedin: "#"
    }
  },
  { 
    name: 'Defensor', 
    img: DefensorImg,
    role: "UI/UX Designer",
    bio: "Focused on creating intuitive and visually appealing interfaces for our portfolio website.",
    social: {
      github: "#",
      linkedin: "#"
    }
  },
  { 
    name: 'Lacambra', 
    img: LacambraImg,
    role: "Backend Developer, Project Manager",
    bio: "Leads the development and structure of our portfolio website from the backend, while also managing the overall direction of our projects.",
    social: {
      github: "#",
      linkedin: "#"
    }
  },
  { 
    name: 'Legaspi', 
    img: LegaspiImg,
    role: "UI/UX Designer, Frontend Developer",
    bio: "Combines creative design with technical execution to bring our portfolio website to life. ",
    social: {
      github: "#",
      linkedin: "#"
    }
  },
  { 
    name: 'Sonaliza', 
    img: SonalizaImg,
    role: "Full Stack Developer",
    bio: "Handles cleaning up both the frontend and backend of our portfolio website, bridging the gap between design, functionality, and data.",
    social: {
      github: "#",
      linkedin: "#"
    }
  },
];

const AboutSection = () => {
  const [activeMember, setActiveMember] = useState(null);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-[#0c1f33] to-[#0a2742] text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-12 relative z-10"
      >
        {/* Hero section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
          <motion.div 
            className="lg:w-1/2"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-blue-400">Code Blooded</span> Team
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
Cold Blooded is a team of five developers united by a shared commitment to deliver clean, efficient, and reliable code. With diverse expertise across both frontend and backend technologies, we bring a well-rounded and collaborative approach to software development.
Each member of our team contributes a unique set of skills and experience, spanning multiple programming languages, frameworks,
and disciplines. From intuitive user interfaces to robust backend architectures, we tackle every challenge with precision, professionalism, and a results-driven mindset.
At Cold Blooded, we don't just build software—we engineer solutions with confidence and clarity.
            </p>
            <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg font-medium"
            >
              Our Projects
            </motion.button>
            </Link>
          </motion.div>
          <motion.div
              className="lg:w-1/2 relative w-full mt-8 lg:mt-0"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
 
  {/* Image Slideshow Container */}
  <div className="w-full h-[300px] sm:h-[400px] lg:h-[450px] bg-blue-900/30 rounded-xl border-2 backdrop-blur-sm overflow-hidden relative">
    {/* Project 1 */}
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 0, 0, 1] }}
      transition={{ duration: 10, repeat: Infinity, times: [0, 0.3, 0.9, 1] }}
    >
      <img 
        src= {Img5}
        alt="SPORTS-A-BLAZE"
        className="w-90% h-90% object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <p className="text-blue-300 font-medium">SPORTS-A-BLAZE</p>
        <p className="text-blue-200 text-sm">HTML, CSS, JavaScript, PHP</p>
      </div>
    </motion.div>

    {/* Project 2 */}
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0, 0] }}
      transition={{ duration: 10, repeat: Infinity, times: [0, 0.3, 0.6, 1], delay: 3.3 }}
    >
      <img 
        src={Img1} 
        alt="Task Manager"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <p className="text-blue-300 font-medium">Twitter Clone</p>
        <p className="text-blue-200 text-sm">HTML, CSS</p>
      </div>
    </motion.div>

    {/* Project 3 */}
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0, 1, 0] }}
      transition={{ duration: 10, repeat: Infinity, times: [0, 0.6, 0.9, 1], delay: 6.6 }}
    >
      <img 
        src={Img3}
        alt="Inayawan University"
        className="w-90% h-90% object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <p className="text-blue-300 font-medium">Inayawan University</p>
        <p className="text-blue-200 text-sm">HTML, CSS, JavaScript</p>
      </div>
    </motion.div>

    {/* Navigation Dots */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {[0, 1, 2].map((dot) => (
        <motion.div
          key={dot}
          className="w-2 h-2 rounded-full bg-blue-400/50"
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [0.8, 1.1, 0.8]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: dot * 3.3
          }}
        />
      ))}
    </div>
  </div>
  </motion.div>
  

        </div>

        {/* Team section */}
        <div className="mb-20">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Meet <span className="text-blue-400">The Team</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                onClick={() => setActiveMember(activeMember === index ? null : index)}
              >
                <div className={`relative overflow-hidden rounded-xl aspect-square transition-all duration-500 ${activeMember === index ? 'ring-4 ring-blue-400' : 'ring-1 ring-blue-400/30'}`}>
                  {/* Member image */}
                  {member.img && (
                    <img
                      src={member.img}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                    />
                  )}
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 ${activeMember === index ? 'opacity-90' : 'opacity-70'}`} />
                  
                  {/* Member info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-blue-300 text-sm">{member.role}</p>
                  </div>
                </div>

                {/* Expanded bio */}
                {activeMember === index && (
                  <motion.div 
                    className="mt-4 p-4 bg-blue-900/20 rounded-lg border border-blue-500/30 backdrop-blur-sm"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <p className="text-gray-300 mb-3">{member.bio}</p>
                    <div className="flex gap-3">
                      <a href={member.social.github} className="text-blue-400 hover:text-white transition-colors">
                        <i className="fab fa-github text-xl"></i>
                      </a>
                      <a href={member.social.linkedin} className="text-blue-400 hover:text-white transition-colors">
                        <i className="fab fa-linkedin text-xl"></i>
                      </a>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Values section */}
        <motion.div 
          className="bg-blue-900/20 rounded-2xl p-8 md:p-12 border border-blue-500/30 backdrop-blur-sm mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Our <span className="text-blue-400">Values</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Innovation",
                icon: "💡",
                description: "Innovation is at the core of everything we do. We embrace emerging technologies, experiment with new ideas, and challenge conventional approaches to deliver creative, forward-thinking solutions. By combining technical expertise with a fearless mindset, we push boundaries and continuously evolve in every line of code."
              },
              {
                title: "Collaboration",
                icon: "🤝",
                description: "One of the foundations of our success. We believe that great ideas are born from diverse perspectives and open dialogue. By working closely within our team and with others, we foster an environment of trust, shared knowledge, and collective problem-solving, which ensures every project benefits from the strength of unified effort."
              },
              {
                title: "Excellence",
                icon: "🏆",
                description: "This is our standard in everything we do. We are committed to delivering high-quality results by meticulously crafting every detail and striving for perfection. Our focus on precision, continuous improvement, and unwavering dedication ensures that every project we complete stands as a testament to our pursuit of the highest possible standards."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="p-6 bg-blue-800/20 rounded-xl border border-blue-500/20 hover:border-blue-400/50 transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-blue-300">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-blue-400">work with us?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you have a project in mind or just want to chat about possibilities, we'd love to hear from you.
          </p>
          <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg font-medium mr-4"
          >
            Contact Us
          </motion.button>
          </Link>

          <Link to="/projects">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-transparent border border-blue-400 rounded-lg font-medium"
          >
            View Projects
          </motion.button>
          </Link>
        </motion.div>
      </motion.div>
      
    </div>
  
    
    
  );
};

export default AboutSection;