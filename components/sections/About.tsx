"use client";

import { aboutData } from "@/lib/data";
import Section from "@/components/ui/Section";
import { Award, Users, Code, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  award: Award,
  users: Users,
  code: Code,
  trophy: Trophy,
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Section id="about" title="About Me">
      <div ref={ref} className="space-y-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-lg md:text-xl text-gray-300 text-center max-w-4xl mx-auto leading-relaxed"
        >
          {aboutData.description}
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {aboutData.stats.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-slate-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="flex justify-center mb-3">
                  {Icon && (
                    <Icon
                      className="w-10 h-10 text-blue-400"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-8 border border-blue-500/30"
        >
          <h3 className="text-2xl font-semibold mb-4 text-center">
            What I Bring to the Table
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-gray-300">
            <div className="text-center">
              <h4 className="font-semibold text-lg text-white mb-2">
                Technical Excellence
              </h4>
              <p className="text-sm">
                Deep expertise in modern web technologies with focus on
                performance and scalability
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-lg text-white mb-2">
                Problem Solving
              </h4>
              <p className="text-sm">
                Strong analytical skills to tackle complex challenges with
                innovative solutions
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-lg text-white mb-2">
                Team Collaboration
              </h4>
              <p className="text-sm">
                Effective communicator who thrives in collaborative environments
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
