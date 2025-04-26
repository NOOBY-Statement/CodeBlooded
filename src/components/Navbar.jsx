import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo1 from "../assets/logo1.png";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const navItemVariants = {
    rest: {
      color: "#dbeafe",
      textShadow: "0px 0px 0px rgba(255,255,255,0)",
    },
    hover: {
      color: "#ffffff",
      textShadow: "0px 0px 10px rgba(255,255,255,0.8)",
    },
  };

  const underlineVariants = {
    rest: { width: 0 },
    hover: { width: "100%" },
  };

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Members", to: "/members" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header className="flex justify-between items-center px-4 sm:px-6 md:px-10 py-3 text-white z-50 sticky top-0 bg-black">
      {/* Logo and Text - Both clickable to home */}
      <Link to="/" className="flex items-center group">
        <img 
          src={logo1}
          alt="CodeBlooded Logo"
          className="h-[2em] w-auto mr-2 align-middle transition-transform duration-300 group-hover:scale-105"
        />
        <h1 className="text-2xl sm:text-[30px] font-bold bg-gradient-to-r from-blue-400 to-blue-50 bg-clip-text text-transparent inline-block hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-100 transition-all duration-300">
          CodeBlooded
        </h1>
      </Link>
      
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex text-lg space-x-6">
        {links.map((link, index) => (
          <motion.div
            key={index}
            className="relative cursor-pointer"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `font-medium relative ${
                  isActive ? "text-blue-400" : ""
                }`
              }
            >
              <motion.span
                variants={navItemVariants}
                transition={{ duration: 0.3 }}
              >
                {link.name}
              </motion.span>
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-blue-400"
                variants={underlineVariants}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </NavLink>
          </motion.div>
        ))}
      </nav>

      {/* Compact Mobile Hamburger Button */}
      <motion.div 
        className="lg:hidden fixed top-3 right-4 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-blue-300 p-2 rounded-full bg-[#0a2742]/80 backdrop-blur-sm border border-blue-400/30 shadow-lg"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <FaTimes className="text-blue-200 text-xl" />
          ) : (
            <FaBars className="text-blue-200 text-xl" />
          )}
        </button>
      </motion.div>

      {/* Mobile Menu (same as before) */}
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
                    key={link.to}
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
                    <NavLink
                      to={link.to}
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
                            {link.name}
                          </motion.span>
                        </div>
                      </motion.div>
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <motion.button
                onClick={() => setMenuOpen(false)}
                className="mt-10 px-6 py-2 rounded-full bg-blue-900/40 border border-blue-700/40 text-blue-200 font-medium flex items-center space-x-2"
                whileHover={{
                  backgroundColor: 'rgba(29, 78, 216, 0.4)',
                  scale: 1.05
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <span>Close</span>
                <FaTimes className="text-base" />
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}