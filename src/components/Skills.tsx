"use client";

import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "ITGC", "ITAC", "SOX/ICFR", "COBIT", "ISO 27001", "Risk Management",
    "PCI DSS", "ITIL", "Vulnerability Management (Nessus | Qualys | Burp)",
    "GRC Tools (Archer | PowerBI | ACL | Alteryx)", "Cloud Security", "DevOps", "Fraud Investigation"
  ];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 bg-secondary dark:bg-gray-800"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-accent text-center mb-12">Core Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-accent hover:text-primary transition-colors duration-300"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
