"use client";

import { experienceData } from "@/lib/data";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Section
      id="experience"
      title="Work Experience"
      className="bg-slate-900/30"
    >
      <div ref={ref} className="space-y-8">
        {experienceData.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    <Briefcase
                      className="w-6 h-6 text-blue-400"
                      aria-hidden="true"
                    />
                    {exp.role}
                  </h3>
                  <p className="text-xl text-blue-400 mb-2">{exp.company}</p>
                  <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" aria-hidden="true" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>

              {exp.description && (
                <p className="text-gray-300 mb-4 italic">{exp.description}</p>
              )}

              <div className="mb-4">
                <h4 className="text-lg font-semibold text-white mb-3">
                  Key Responsibilities:
                </h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-300"
                    >
                      <span className="text-blue-400 mt-1">▹</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
