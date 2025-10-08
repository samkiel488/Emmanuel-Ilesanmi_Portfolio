"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences = [
    {
      title: "IT Audit Manager",
      company: "Confidential Client",
      period: "2023 - Present",
      description: "Leading comprehensive IT audit engagements, evaluating internal controls, and providing assurance on IT governance frameworks.",
      details: "Conducting risk-based audit planning, assessing IT controls effectiveness, and ensuring compliance with industry standards. Collaborating with cross-functional teams to strengthen cybersecurity posture and align IT strategies with business objectives."
    },
    {
      title: "Senior IT Auditor",
      company: "Confidential Client",
      period: "2021 - 2023",
      description: "Performed detailed IT audits, risk assessments, and control testing across various business processes.",
      details: "Executed IT general controls testing, application controls reviews, and cybersecurity assessments. Developed audit programs, identified control weaknesses, and recommended remediation strategies to enhance operational efficiency and compliance."
    },
    {
      title: "IT Audit Consultant",
      company: "Confidential Client",
      period: "2019 - 2021",
      description: "Supported IT audit projects, conducted data analytics, and assisted in regulatory compliance reviews.",
      details: "Utilized data analytics tools for audit testing, performed SOX compliance testing, and contributed to IT governance framework implementations. Collaborated with stakeholders to address audit findings and improve control environments."
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 bg-white dark:bg-[#001f3f]"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12 lg:px-12 space-y-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-accent text-center mb-12">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary dark:text-accent">{exp.title}</h3>
                  <p className="text-accent font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{exp.period}</p>
                </div>
              </div>
              <p className="text-gray-800 dark:text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">{exp.details}</p>
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                onClick={() => toggleExpanded(index)}
                className="text-accent hover:text-primary dark:hover:text-accent font-medium mt-4 transition-colors duration-300"
              >
                {expandedIndex === index ? "Read Less" : "Read More"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
