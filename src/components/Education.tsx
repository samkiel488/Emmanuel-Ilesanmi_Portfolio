"use client";

import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      degree: "Master of Information Technology (MIT)",
      institution: "National Open University of Nigeria",
      year: "2024"
    },
    {
      degree: "Bachelor of Engineering, Electrical & Electronics",
      institution: "Modibbo Adama University of Technology (MAUTECH), Nigeria",
      year: "2013"
    }
  ];

  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 bg-white dark:bg-[#001f3f]"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12 lg:px-12 space-y-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-accent text-center mb-12">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-primary dark:text-accent mb-2">{edu.degree}</h3>
              <p className="text-accent font-medium mb-1">{edu.institution}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{edu.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
