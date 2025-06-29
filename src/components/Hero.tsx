import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFileDownload } from "react-icons/fa";
import { socialLinks } from "../data/constants";
import { useTheme } from "../hooks/useTheme";

const Hero = () => {
  const { darkMode } = useTheme();

  const [text] = useTypewriter({
    words: [
      "Software Engineer",
      "Full-Stack Developer",
      "Open Source Contributor",
      "Tech Enthusiast",
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <section id="home" className={`hero-section ${darkMode ? "dark" : ""}`}>
      <div className="hero-container">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-content"
        >
          <motion.h4
            className="greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I'm
          </motion.h4>

          <motion.h1
            className="name"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Amrendra Nath
          </motion.h1>

          <motion.h2
            className="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {text}
            <Cursor cursorColor={darkMode ? "#4dabf7" : "#3a86ff"} />
          </motion.h2>

          <motion.p
            className="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            I build exceptional digital experiences with modern web
            technologies. Currently focused on creating accessible,
            human-centered products at scale.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="btn btn-primary"
            >
              Get In Touch
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/pdfs/resume.pdf"
              download
              className="btn btn-secondary"
            >
              <FaFileDownload className="btn-icon" />
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="hero-image"
        >
          <div className="image-wrapper">
            <img
              src="/images/profile.jpeg"
              alt="Amrendra Nath"
              className="profile-image"
            />
            <div className={`glow-effect ${darkMode ? "dark" : ""}`} />
          </div>
        </motion.div>

        {/* Social Links */}
        <div className="hero-social">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -5, color: darkMode ? "#4dabf7" : "#3a86ff" }}
              className="social-link"
            >
              {<link.icon />}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
