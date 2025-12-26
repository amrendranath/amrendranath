"use client";

import { educationData } from "@/lib/data";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Section id="education" title="Education">
      <div ref={ref} className="space-y-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    <GraduationCap
                      className="w-6 h-6 text-purple-400"
                      aria-hidden="true"
                    />
                    {edu.degree}
                  </h3>
                  <p className="text-xl text-purple-400 mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" aria-hidden="true" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      {edu.period}
                    </span>
                  </div>
                </div>
              </div>

              {edu.description && (
                <p className="text-gray-300 mb-4 italic">{edu.description}</p>
              )}

              {edu.achievements && edu.achievements.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-300"
                      >
                        <span className="text-purple-400 mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
