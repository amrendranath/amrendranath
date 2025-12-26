"use client";

import { certificationsData } from "@/lib/data";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Section
      id="certifications"
      title="Certifications"
      className="bg-slate-900/30"
    >
      <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificationsData.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card hover={true}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    aria-label={`View ${cert.name} details`}
                  >
                    <ExternalLink className="w-5 h-5" aria-hidden="true" />
                  </a>
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                {cert.name}
              </h3>

              <p className="text-orange-400 font-semibold mb-2">
                {cert.issuer}
              </p>

              <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                <span>{cert.date}</span>
              </div>

              {cert.description && (
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  {cert.description}
                </p>
              )}

              {cert.credentialId && (
                <div className="mt-4 pt-3 border-t border-slate-700">
                  <p className="text-xs text-gray-500">
                    Credential ID:{" "}
                    <span className="text-gray-400">{cert.credentialId}</span>
                  </p>
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600/20 to-yellow-600/20 rounded-lg border border-orange-500/30">
          <Award className="w-5 h-5 text-orange-400" aria-hidden="true" />
          <span className="text-gray-300">
            AWS Certified Professional with proven cloud expertise
          </span>
        </div>
      </motion.div>
    </Section>
  );
}
