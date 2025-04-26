import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavLinks = () => {
  const location = useLocation();
  const links = [
    { path: "/", label: "Home" },
    { path: "/members", label: "Members" },
    { path: "/projects", label: "Projects" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <div className="flex space-x-8 my-6">
      {links.map((link) => (
        <motion.div 
          key={link.path}
          className="relative"
          whileHover="hover"
          initial="rest"
        >
          <Link 
            to={link.path} 
            className={`text-lg font-medium relative ${
              location.pathname === link.path 
                ? 'text-blue-400' 
                : 'text-blue-300 hover:text-blue-200'
            }`}
          >
            <motion.span className="block">
              {link.label}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-blue-400"
                variants={{
                  rest: { 
                    width: location.pathname === link.path ? '100%' : 0 
                  },
                  hover: { width: "100%" }
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default NavLinks;