"use client";

import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "IT Audit & Assurance", level: "Expert" },
    { name: "Risk Management", level: "Expert" },
    { name: "Cybersecurity", level: "Advanced" },
    { name: "COBIT Framework", level: "Advanced" },
    { name: "NIST Standards", level: "Advanced" },
    { name: "ISO 27001", level: "Advanced" },
    { name: "Data Analytics", level: "Intermediate" },
    { name: "Compliance Testing", level: "Expert" },
    { name: "IT Governance", level: "Advanced" },
    { name: "Control Evaluation", level: "Expert" }
  ];

  const getLevelWidth = (level: string) => {
    switch (level) {
      case "Expert": return "w-full";
      case "Advanced": return "w-4/5";
      case "Intermediate": return "w-3/5";
      case "Beginner": return "w-2/5";
      default: return "w-1/2";
    }
  };

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
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-primary dark:text-accent">{skill.name}</h3>
                <span className="text-sm text-accent font-medium">{skill.level}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: getLevelWidth(skill.level) }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-accent h-2 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
