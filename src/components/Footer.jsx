// src/components/Footer.js
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full py-6 bg-gradient-to-b from-[#0a0e17] to-[#0c1a2d] border-t border-blue-900/50"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <p className="text-blue-300 text-sm md:text-base font-mono tracking-wider">
            @Code Blooded 2025.
          </p>
          <div className="mt-2 flex space-x-4">
            
          </div>
        </div>
      </div>
      
      {/* Floating particles effect */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`footer-particle-${i}`}
          className="absolute bottom-0 rounded-full bg-blue-400/20"
          style={{
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 30}px`,
          }}
          animate={{
            y: [0, (Math.random() - 0.5) * 20],
            x: [0, (Math.random() - 0.5) * 30],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}
    </motion.footer>
  );
};

export default Footer;