import { motion } from "framer-motion";
import { socialLinks } from "../data/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="footer-content"
        >
          <div className="footer-col">
            <h3 className="footer-heading">Amrendra Nath</h3>
            <p className="footer-text">
              Full Stack Developer creating modern, responsive web applications
              with cutting-edge technologies.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Connect</h4>
            <div className="footer-social">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="social-icon"
                >
                  {<link.icon />}
                </a>
              ))}
            </div>
            <div className="footer-contact">
              <a
                href="mailto:amrendrasrivastava26@gmail.com"
                className="footer-email"
              >
                amrendrasrivastava26@gmail.com
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="footer-bottom"
        >
          <p className="copyright">
            &copy; {currentYear} Amrendra Nath. All rights reserved.
          </p>
          <p className="credits">Built with React, TypeScript, and Vite</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
