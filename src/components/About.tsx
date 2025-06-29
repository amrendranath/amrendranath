import { motion } from "framer-motion";
import { FaAward, FaUsers, FaFolderOpen } from "react-icons/fa";
import { aboutData } from "../data/constants";

const About = () => {
  return (
    <section id="about" className="about-section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me</p>

        <div className="about-content">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="about-image"
          >
            <div className="image-container">
              <img
                src="/images/profile.jpeg"
                alt="Amrendra Nath"
                className="profile-image"
              />
              <div className="image-overlay"></div>
            </div>
          </motion.div>

          <div className="about-info">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="about-cards"
            >
              {aboutData.stats.map((stat) => (
                <div key={stat.id} className="about-card">
                  {stat.icon === "award" && <FaAward className="about-icon" />}
                  {stat.icon === "users" && <FaUsers className="about-icon" />}
                  {stat.icon === "projects" && (
                    <FaFolderOpen className="about-icon" />
                  )}
                  <h3>{stat.value}+</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="about-text"
            >
              {aboutData.description}
            </motion.p>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="about-cta"
            >
              <a href="#contact" className="btn btn-primary">
                Contact Me
              </a>
              <a href="#experience" className="btn btn-outline">
                My Experience
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
