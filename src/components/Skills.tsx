import { motion } from "framer-motion";
import { skillsData } from "../data/constants";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">My technical expertise</p>
        </motion.div>

        <div className="skills-container">
          {skillsData.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="skill-category"
            >
              <h3>{skillCategory.name}</h3>
              <div className="skills-list">
                {skillCategory.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                        className="skill-progress"
                        style={{
                          backgroundColor: getProgressColor(skill.level),
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper function for progress bar colors
const getProgressColor = (level: number) => {
  if (level >= 80) return "#28a745"; // Green
  if (level >= 60) return "#17a2b8"; // Teal
  if (level >= 40) return "#ffc107"; // Yellow
  return "#dc3545"; // Red
};

export default Skills;
