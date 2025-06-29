import { motion } from "framer-motion";
import { FaBriefcase, FaTasks } from "react-icons/fa";
import { experienceData } from "../data/constants";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My professional journey</p>
        </motion.div>

        <div className="timeline">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-dot">
                <FaBriefcase className="timeline-icon" />
              </div>

              <div className="timeline-content">
                <h3 className="timeline-role">{exp.role}</h3>
                <div className="timeline-company">
                  <span>{exp.company}</span>
                  {exp.location && (
                    <span className="location">{exp.location}</span>
                  )}
                </div>
                <span className="timeline-period">{exp.period}</span>

                {exp.description && (
                  <p className="timeline-description">{exp.description}</p>
                )}

                {exp.responsibilities && (
                  <div className="timeline-responsibilities">
                    <h4>
                      <FaTasks className="responsibilities-icon" />
                      Key Responsibilities
                    </h4>
                    <ul>
                      {exp.responsibilities.map((responsibility, i) => (
                        <li key={i}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {exp.technologies && (
                  <div className="timeline-technologies">
                    <h4>Technologies Used:</h4>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
