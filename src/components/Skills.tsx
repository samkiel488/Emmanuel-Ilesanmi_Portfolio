"use client";

import { motion } from "framer-motion";
import { Shield, CheckCircle, Lock, Search, BarChart, Cloud, FileText, Users, Brain, MessageSquare, TrendingUp, BookOpen } from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "IT General Controls (ITGC) & IT Application Controls (ITAC)", icon: Shield },
    { name: "SOX/ICFR Testing & Compliance", icon: CheckCircle },
    { name: "IT Risk Management & Governance (COBIT, COSO, ISO 27001, ITIL, PCI DSS)", icon: Lock },
    { name: "Vulnerability Assessment Tools (Nessus, Qualys, Acunetix, Burp Suite, OWASP Zap)", icon: Search },
    { name: "GRC Tools (Archer, PowerBI, ACL, Alteryx)", icon: BarChart },
    { name: "Cloud Security & DevOps Assurance", icon: Cloud },
    { name: "Fraud Investigation & Data Analytics", icon: FileText },
    { name: "Leadership & Team Mentoring", icon: Users },
    { name: "Critical Thinking", icon: Brain },
    { name: "Effective Communication", icon: MessageSquare },
    { name: "Analytical & Interpersonal Skills", icon: TrendingUp },
    { name: "Commitment to Continuous Learning", icon: BookOpen }
  ];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 bg-white dark:bg-[#001f3f]"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12 lg:px-12 space-y-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-accent text-center mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-3">
                <skill.icon className="w-6 h-6 text-accent mr-3" />
                <h3 className="text-lg font-semibold text-primary dark:text-accent">{skill.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
