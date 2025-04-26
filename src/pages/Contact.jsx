import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { 
  faCheckCircle,
  faUser,
  faEnvelope,
  faSpinner,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="bg-gradient-to-b from-black via-[#0c1f33] to-[#0a2742] min-h-screen text-white overflow-x-hidden w-full">
      <Navbar />

      {/* Background gradient animation */}
      <motion.div 
        className="fixed inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0524] via-[#1a0a77] to-[#344AD5] opacity-90">
          <motion.div 
            className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"
            animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </motion.div>

      {/* Main content with staggered animations */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="min-h-screen text-white px-4 sm:px-8 md:px-20 py-16 flex flex-col lg:flex-row gap-12 items-center justify-center mt-10 lg:mt-0"
      >
        {/* Contact information section */}
        <motion.section 
          className="flex-1 max-w-2xl"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight font-bold mb-6">
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Contact
              </motion.span>
              <motion.span 
                className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Us!
              </motion.span>
            </h2>
            
            <motion.p 
              className="text-lg md:text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              We'd love to hear from you. Whether you have a question about our services, 
              need assistance, or just want to say hello, our team is ready to help.
            </motion.p>
            
            <motion.div
  className="space-y-4"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6 }}
>
  <div className="flex items-center gap-4">
    <FontAwesomeIcon icon={faEnvelope} className="text-sky-400 text-xl w-6" />
    <a href="mailto:codeblooded@gmail.com" className="hover:text-sky-400 transition-colors">
      codeblooded@gmail.com
    </a>
  </div>
  <div className="flex items-center gap-4">
    <FontAwesomeIcon icon={faPhoneAlt} className="text-sky-400 text-xl w-6" />
    <span>09070763588</span>
  </div>
  <div className="flex items-center gap-4">
    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-sky-400 text-xl w-6" />
    <span>Imus City, Cavite</span>
  </div>
</motion.div>
            
            <motion.div 
  className="mt-8 flex gap-4"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.7 }}
>
  {[
    { platform: 'facebook', icon: <FaFacebook className="text-white text-lg" /> },
    { platform: 'twitter', icon: <FaTwitter className="text-white text-lg" /> },
    { platform: 'instagram', icon: <FaInstagram className="text-white text-lg" /> },
    { platform: 'linkedin', icon: <FaLinkedin className="text-white text-lg" /> }
  ].map((social, i) => (
    <motion.a
      key={social.platform}
      href="#"
      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sky-500 transition-colors"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 + i * 0.1 }}
      aria-label={social.platform}
    >
      {social.icon}
    </motion.a>
  ))}
</motion.div>
          </motion.div>
        </motion.section>

        {/* Divider - only visible on larger screens */}
        <motion.div 
          className="hidden lg:block w-[1px] h-[400px] bg-gradient-to-b from-transparent via-white/40 to-transparent"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />

       {/* Contact form section */}
<motion.section 
  className="flex-1 w-full max-w-xl"
  initial={{ x: 50, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ delay: 0.3, duration: 0.8 }}
>
  <motion.div
    className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl"
    whileHover={{ scale: 1.01 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <motion.h3 
      className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      Send us a message
    </motion.h3>
    
    {submitSuccess ? (
      <motion.div
        className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 mb-6 flex items-center gap-3"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
      >
        <FontAwesomeIcon icon={faCheckCircle} className="text-green-400 text-xl" />
        <div>
          <h4 className="font-semibold">Message sent successfully!</h4>
          <p className="text-sm text-white/80">We'll get back to you soon.</p>
        </div>
      </motion.div>
    ) : (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="relative">
              <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name" 
                required 
                className="w-full p-3 pl-10 bg-white/5 border border-white/10 rounded-lg focus:border-sky-500 focus:ring-1 focus:ring-sky-500/50 transition-all outline-none"
              />
              <FontAwesomeIcon 
                icon={faUser} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" 
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="relative">
              <input 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name" 
                required 
                className="w-full p-3 pl-10 bg-white/5 border border-white/10 rounded-lg focus:border-sky-500 focus:ring-1 focus:ring-sky-500/50 transition-all outline-none"
              />
              <FontAwesomeIcon 
                icon={faUser} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" 
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="relative">
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email" 
              required 
              className="w-full p-3 pl-10 bg-white/5 border border-white/10 rounded-lg focus:border-sky-500 focus:ring-1 focus:ring-sky-500/50 transition-all outline-none"
            />
            <FontAwesomeIcon 
              icon={faEnvelope} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" 
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="How can we help you?"
            rows={5}
            className="w-full p-3 bg-white/5 border border-white/10 rounded-lg resize-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/50 transition-all outline-none"
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
              isSubmitting 
                ? 'bg-blue-700/50 cursor-not-allowed' 
                : 'bg-gradient-to-r from-[#270EAE] to-[#344AD5] hover:from-[#344AD5] hover:to-[#270EAE] shadow-lg hover:shadow-blue-500/20'
            }`}
          >
            {isSubmitting ? (
              <>
                <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message <FontAwesomeIcon icon={faPaperPlane} />
              </>
            )}
          </button>
        </motion.div>
      </form>
    )}
  </motion.div>
</motion.section>
</motion.main>
</div>
);
}