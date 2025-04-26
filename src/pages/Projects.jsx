import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import  Img1 from "../assets/twitter.png";
import  Img2 from "../assets/twitter1.png";
import  Img3 from "../assets/inayawan3.png";
import  Img4 from "../assets/inayawan1.png";
import  Img5 from "../assets/sablanding.png";
import  Img6 from "../assets/sports.png";
import  Img7 from "../assets/sababout.png";
import  Img8 from "../assets/grades.png";
import  Img9 from "../assets/parkez1.png";
import  Img10 from "../assets/park2.png";
import  Img11 from "../assets/park3.png";
import  Img12 from "../assets/Alcambra1.png";
import  Img13 from "../assets/alcambra2.png";
import  Img14 from "../assets/alcambra3.png";
import  Img15 from "../assets/image.png";
import  Img16 from "../assets/sermon.png";
import  Img17 from "../assets/offers.png";

const projects = [
  {
    id: 1,
    title: "Twitter Clone",
    description: "A static mock-up of Twitter showcasing its layout and core interface features without dynamic functionality.",
    keyFeatures: [
      "Static Web-Page",
      "Mock-up layout for Twitter",
      "Easy to navigate",
    ],
    tags: ["HTML", "CSS"],
    images: [ Img1, Img2 ,
    ],
    link: "https://nooby-statement.github.io/Twitter/",
    year: "2023",
    client: " Sir Hayag",
    duration: " 1 Month",
    teamSize: " Shaira Mae Legaspi",
  },
  {
    id: 2,
    title: "Inayawan University of the Philippines",
    description: "An all-in-one platform where students can access grades, subject offerings, events, and admission guidelines using their student email.",
    keyFeatures: [
      "Centralized access to academic records and grades",

      "Course registration and schedule viewing",
      
      "Campus news and event announcements feed"
    ],
    tags: ["HTML", "CSS"],
    images: [ Img3, Img4, Img8
    ],
    link: "https://slricta.github.io/inayawan-university/login.html",
    year: "2023",
    client: " Sir Hayag",
    duration: " 2 Months",
    teamSize: " Shaira Mae Legaspi",
  },


  {
    id: 4,
    title: "St. Francis Xavier Church",
    description: "An all-in-one platform that helps parishioners stay connected and engaged. It provides mass schedules, today's sermon highlights, access to previous sermons, a daily Bible verse, live-streaming services, online donations, event reservations, and easy certification requests — all in one place.",
    tags: ["HTML", "CSS"],
    keyFeatures: [

      "Complete Old and New Testament Books",

      "Daily Bible Verses",
      
      "User-Friendly"
    ],
    images: [ Img15, Img16, Img17
    ],
    year: "2023",
    client: " Sir Hayag",
    duration: " 2 Months",
    teamSize: "  Sharla Sonaliza",
  },

  
  {
    id: 3,
    title: "Sports-A-Blaze Reservation System",
    description: "A system that allows users to reserve sports equipment for various sports easily and conveniently.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    keyFeatures: [
      "Real-time equipment availability calendar",

      "Multi-sport gear reservation interface",
      
      "Reservation confirmation and reminder system"
    ],
    images: [ Img5, Img6, Img7
    ],
    link: "https://nooby-statement.github.io/Sports-A-Blaze/",
    year: "2024",
    client: " Sir Ben",
    duration: " 4 Months",
    teamSize: " Joshua Lacambra, Shaira Mae Legaspi",
  },



  {
    id: 5,
    title: "Alcambra Scholarships",
    description: "A financial aid program designed to support deserving students in achieving their academic goals. The system streamlines the application, evaluation, and award process, making it easier for students to apply and for administrators to manage scholarships efficiently.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP"],
    keyFeatures: [
      "Online application portal with document upload capability",

      "Automated eligibility screening with customizable criteria",
      
      "Dashboard for administrators to review applications and track awards"
    ],
    images: [ Img12, Img13, Img14
    ],
    year: "2024",
    client: " Sir Ben",
    duration: " 5 Months",
    teamSize: " Joshua Lacambra, Shaira Mae Legaspi",
  },

  {
    id: 6,
    title: "Park EZ",
    description: "A simple and efficient parking management system designed to help attendants at small parking lots record vehicle and driver details quickly. It reduces manual errors and speeds up entry and exit.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    keyFeatures: [

      "Quick vehicle entry/exit logging with timestamp recording",

      "Digital receipt generation for parking fees",
      
      "Daily parking activity reports for management"
    ],
    images: [ Img9, Img10, Img11
    ],
    year: "Ongoing",
    client: " Ma'am Sherilyn",
    duration: " 2 Months",
    teamSize: " Joshua Lacambra, Shaira Mae Legaspi, Sharla Sonaliza",
  },

];

// ... (keep your existing tagColors constant)

const tagColors = {
  "HTML": "bg-gradient-to-r from-[#4299E1] to-[#3182CE] text-white",
  "CSS": "bg-gradient-to-r from-[#63B3ED] to-[#4299E1] text-white",
  "JavaScript": "bg-gradient-to-r from-[#3182CE] to-[#2B6CB0] text-white",
  "Bootstrap": "bg-gradient-to-r from-[#90CDF4] to-[#63B3ED] text-[#0a0a20]",
  "PHP": "bg-gradient-to-r from-[#2B6CB0] to-[#2C5282] text-white",
  "Redux": "bg-gradient-to-r from-[#2C5282] to-[#1A365D] text-white",
  "Next.js": "bg-gradient-to-r from-[#1A365D] to-[#234E52] text-white",
  "Tailwind CSS": "bg-gradient-to-r from-[#76E4F7] to-[#00B5D8] text-[#0a0a20]",
  "GraphQL": "bg-gradient-to-r from-[#00B5D8] to-[#0987A0] text-white",
  "Vue.js": "bg-gradient-to-r from-[#81E6D9] to-[#4FD1C5] text-[#0a0a20]",
  "Express": "bg-gradient-to-r from-[#4FD1C5] to-[#38B2AC] text-[#0a0a20]",
  "PostgreSQL": "bg-gradient-to-r from-[#38B2AC] to-[#319795] text-white",
  "Python": "bg-gradient-to-r from-[#319795] to-[#285E61] text-white",
  "TensorFlow": "bg-gradient-to-r from-[#285E61] to-[#234E52] text-white",
  "Django": "bg-gradient-to-r from-[#234E52] to-[#1A365D] text-white",
  "D3.js": "bg-gradient-to-r from-[#0BC5EA] to-[#00B5D8] text-white",
  "TypeScript": "bg-gradient-to-r from-[#0987A0] to-[#2C7A7B] text-white",
  "AWS": "bg-gradient-to-r from-[#00A3C4] to-[#0987A0] text-white",
  "Node.js": "bg-gradient-to-r from-[#2C7A7B] to-[#285E61] text-white"
};




const ProjectsPage = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  const nextImage = () => {
    setCurrentImageIndex(prev => 
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-[#0c1f33] to-[#0a2742] text-white overflow-hidden">
      {/* ... (keep your existing background and navbar code) ... */}
       {/* Animated background elements */}
       <div className="fixed inset-0 overflow-hidden z-0">
        {[...Array(15)].map((_, i) => (
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
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>




      <Navbar />

  


      <motion.main className="relative z-10 container mx-auto px-4 py-16">

         {/* Projects Header */}
         <motion.section
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Our <span className="text-blue-400">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of innovative solutions and successful collaborations that demonstrate our technical expertise.
          </p>
        </motion.section>

        {/* Filter Controls */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full border transition-all ${filter === "all" ? 'bg-blue-600 border-blue-600' : 'border-blue-400/30 hover:border-blue-400'}`}
          >
            All Projects
          </button>
          {["HTML", "CSS", "Python", "Java", "JavaScript"].map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full border transition-all ${filter === tag ? 'bg-blue-600 border-blue-600' : 'border-blue-400/30 hover:border-blue-400'}`}
            >
              {tag}
            </button>
          ))}
        </motion.div>


        {/* Projects Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-xl border border-blue-400/20 hover:border-blue-400/50 bg-gradient-to-b from-[#0a0a20]/50 to-[#0c1f33]/50 backdrop-blur-sm"
            >
              {/* Project Image */}
              <div className="aspect-video bg-blue-900/30 overflow-hidden relative">
                <img
                  src={project.images?.[0] || "/images/placeholder.jpg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-sm text-blue-300">{project.year}</span>
                </div>
                <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span 
                    key={tag}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${tagColors[tag]} shadow-md hover:brightness-110 transition-all`}
                  >
                    {tag}
                  </span>
                ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openModal(project)}
                  className="w-full py-2 bg-blue-600/50 hover:bg-blue-600 rounded-lg transition-colors"
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Project Modal with Slideshow */}
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-[#0a0a20] to-[#0c1f33] rounded-2xl max-w-6xl w-full max-h-[80vh] overflow-y-auto border border-blue-400/30 shadow-2xl"
            >
              {/* Slideshow Container */}
              <div className="relative h-96 w-full overflow-hidden">
                {selectedProject.images?.map((img, index) => (
                  <motion.img
                    key={index}
                    src={img}
                    alt={`${selectedProject.title} screenshot ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-contain bg-black"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: index === currentImageIndex ? 1 : 0,
                      zIndex: index === currentImageIndex ? 10 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
                
                {/* Navigation Arrows */}
                {selectedProject.images?.length > 1 && (
                  <>
                    <button 
                      onClick={(e) => { e.stopPropagation(); prevImage(); }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
                    >
                      &larr;
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); nextImage(); }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
                    >
                      &rarr;
                    </button>
                  </>
                )}
                
                {/* Slide Indicators */}
                {selectedProject.images?.length > 1 && (
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                    {selectedProject.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex ? 'bg-blue-400 scale-125' : 'bg-white/50'}`}
                      />
                    ))}
                  </div>
                )}
                
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/80 transition-colors z-30"
                >
                  ✕
                </button>
              </div>

             {/* Modal Content */}
             <div className="p-8">
  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
    <div>
      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
        {selectedProject.title}
      </h2>
      <span className="text-blue-300 font-medium">{selectedProject.year}</span>
    </div>
    <div className="flex gap-3">
      {selectedProject.link && (
        <motion.a
          href={selectedProject.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg font-medium flex items-center gap-2 text-sm"
        >
          Live Demo
        </motion.a>
      )}
    </div>
  </div>
  
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div className="lg:col-span-2">
      <h3 className="text-xl font-semibold mb-4 text-blue-400">Project Description</h3>
      <p className="text-gray-300 mb-6 leading-relaxed">
        {selectedProject.fullDescription || selectedProject.description || "No description available."}
      </p>
      
      <h3 className="text-xl font-semibold mb-4 text-blue-400">Key Features</h3>
      <ul className="text-gray-300 space-y-2 mb-6">
        {selectedProject.keyFeatures?.length > 0 ? (
          selectedProject.keyFeatures.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              {feature}
            </li>
          ))
        ) : (
          <li className="text-gray-400">No features listed</li>
        )}
      </ul>
    </div>
    
    <div>
      <h3 className="text-xl font-semibold mb-4 text-blue-400">Tech Stack</h3>
      <div className="flex flex-wrap gap-3 mb-6">
        {selectedProject.tags.map(tag => (
          <span 
            key={tag} 
            className={`px-3 py-1.5 rounded-full text-sm font-medium ${tagColors[tag] || 'bg-blue-600/90 text-white'}`}
          >
            {tag}
          </span>
        ))}
      </div>
      
      <h3 className="text-xl font-semibold mb-4 text-blue-400">Project Details</h3>
      <div className="space-y-3 text-gray-300">
        <div>
          <span className="font-medium text-blue-300">Client:</span> 
          {selectedProject.client || "School"}
        </div>
        <div>
          <span className="font-medium text-blue-300">Duration:</span> 
          {selectedProject.duration || selectedProject.year}
        </div>
        <div>
          <span className="font-medium text-blue-300">Developer:</span> 
          {selectedProject.teamSize || "Group Project"}
        </div>
      </div>
    </div>
  </div>
</div>
            </motion.div>
          </motion.div>
        )}

<motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have a project in mind?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's collaborate to turn your ideas into reality with our technical expertise.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg font-medium"
            >
              Get in Touch
            </motion.button>
          </Link>
        </motion.section>
      </motion.main>
    </div>
  );
};

export default ProjectsPage;