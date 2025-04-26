import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";//add another dot for when page is in a different folder
import Carousel from "../components/Carousel";
import { motion } from "framer-motion";


const members = [
  { src: "images/lacambra.png", name: "Homer 1", link: "/member1" },
  { src: "images/legaspi.png", name: "Homer 2", link: "/member2" },
  { src: "images/sonaliza.png", name: "Homer 3", link: "/member3" },
  { src: "images/datu.png", name: "Homer 4", link: "/member4" },
  { src: "images/defensor.png", name: "Homer 5", link: "/member5" },
];

export default function Members() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updatePos = (i) => {
    const offset = ((i - currentIndex + members.length) % members.length + members.length) % members.length;
    if (offset === 0) return "translate-x-0 scale-120 z-[3] opacity-100";
    if (offset === 1 || offset === -4) return "translate-x-[220px] scale-90 z-[2] opacity-60";
    if (offset === 2 || offset === -3) return "translate-x-[440px] scale-70 z-[1] opacity-30";
    if (offset === 3 || offset === -2) return "-translate-x-[440px] scale-70 z-[1] opacity-30";
    if (offset === 4 || offset === -1) return "-translate-x-[220px] scale-90 z-[2] opacity-60";
    return "opacity-0 scale-0 z-0";
  };
  return (
    
    <div className="bg-gradient-to-b from-black via-[#0c1f33] to-[#0a2742] min-h-screen h-screen text-white overflow-x-hidden w-full flex flex-col">

      <Navbar />

      {/* page animation for when entering the page */}
      <motion.div
          initial={{ opacity: 0, y: 50 }} // Fade-in 
          animate={{ opacity: 1, y: 0 }} // Fully visible
          exit={{ opacity: 0, y: -50 }} // Fade-out 
          transition={{ duration: 0.3 }} // Transition effect
        >
      <main className="relative flex flex-col items-center justify-center min-h-[500px] sm:min-h-[600px] py-10 px-4">
        {/* Glow Rings */}
        <div className="glowring1">
        <div className="spin-core"></div>
        </div>
        <div className="glowring2">
        <div className="spin-core"></div>
        </div>
        <div className="glowring3">
        <div className="spin-core"></div>
        </div>

        {/* Light Beams */}
        <div className="beam-wrapper">
          <div className="beam beam-left"></div>
          <div className="beam beam-center"></div>
          <div className="beam beam-right"></div>
        </div>
        
        {/* Carousel */}
        <motion.div
          className="w-full max-w-[1000px] px-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
        <Carousel />
</motion.div>

        
      </main>
      </motion.div>

    </div>
  );
}
