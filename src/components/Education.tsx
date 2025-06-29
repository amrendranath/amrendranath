import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import { educationData } from "../data/constants";

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic journey</p>
        </motion.div>

        <div className="timeline">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-dot">
                <FaGraduationCap className="timeline-icon" />
              </div>

              <div className="timeline-content">
                <h3 className="timeline-degree">{edu.degree}</h3>
                <div className="timeline-institution">
                  <FaUniversity className="institution-icon" />
                  <span>{edu.institution}</span>
                </div>
                <span className="timeline-period">{edu.period}</span>

                {edu.gpa && (
                  <div className="timeline-gpa">
                    <strong>GPA:</strong> {edu.gpa}
                  </div>
                )}

                {edu.honors && (
                  <div className="timeline-honors">
                    <strong>Honors:</strong> {edu.honors}
                  </div>
                )}

                {edu.description && (
                  <p className="timeline-description">{edu.description}</p>
                )}

                {edu.courses && (
                  <div className="timeline-courses">
                    <h4>Key Courses:</h4>
                    <ul>
                      {edu.courses.map((course, i) => (
                        <li key={i}>{course}</li>
                      ))}
                    </ul>
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

export default Education;
