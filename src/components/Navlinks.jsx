import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavLinks = () => {
  return (
    <div className="flex space-x-8 my-6">
      {/* Home Link */}
      <motion.div className="relative" whileHover="hover" initial="rest">
        <Link to="/" className="text-blue-300 text-lg font-medium relative">
          Home
          <motion.div 
            className="absolute bottom-0 left-0 h-0.5 bg-blue-400"
            variants={{
              rest: { width: 0 },
              hover: { width: "100%" }
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </Link>
      </motion.div>

      {/* Members Link */}
      <motion.div className="relative" whileHover="hover" initial="rest">
        <Link to="/members" className="text-blue-300 text-lg font-medium relative">
          Members
          <motion.div 
            className="absolute bottom-0 left-0 h-0.5 bg-blue-400"
            variants={{
              rest: { width: 0 },
              hover: { width: "100%" }
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </Link>
      </motion.div>

      {/* Projects Link */}
      <motion.div className="relative" whileHover="hover" initial="rest">
        <Link to="/projects" className="text-blue-300 text-lg font-medium relative">
          Projects
          <motion.div 
            className="absolute bottom-0 left-0 h-0.5 bg-blue-400"
            variants={{
              rest: { width: 0 },
              hover: { width: "100%" }
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </Link>
      </motion.div>

      {/* About Link */}
      <motion.div className="relative" whileHover="hover" initial="rest">
        <Link to="/about" className="text-blue-300 text-lg font-medium relative">
          About
          <motion.div 
            className="absolute bottom-0 left-0 h-0.5 bg-blue-400"
            variants={{
              rest: { width: 0 },
              hover: { width: "100%" }
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </Link>
      </motion.div>

      {/* Contact Link */}
      <motion.div className="relative" whileHover="hover" initial="rest">
        <Link to="/contact" className="text-blue-300 text-lg font-medium relative">
          Contact
          <motion.div 
            className="absolute bottom-0 left-0 h-0.5 bg-blue-400"
            variants={{
              rest: { width: 0 },
              hover: { width: "100%" }
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </Link>
      </motion.div>
    </div>
  );
};

export default NavLinks;