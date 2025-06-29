import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
import { socialLinks } from "../data/constants";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Software Engineer", "Full Stack Developer", "Tech Enthusiast"],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="greeting">Hello, I'm</h4>
            <h1 className="name">Amrendra Nath</h1>
            <h2 className="title">
              {text}
              <span className="cursor">|</span>
            </h2>
            <p className="description">
              I build exceptional digital experiences with modern web
              technologies. Currently focused on creating accessible,
              human-centered products.
            </p>

            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a href="#projects" className="btn btn-secondary">
                View My Work
              </a>
            </div>
          </motion.div>
        </div>

        <div className="hero-social">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              {<link.icon />}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
