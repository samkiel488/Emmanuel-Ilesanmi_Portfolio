"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Senior ICFR/SOX IT Auditor",
    company: "TD Bank, Canada",
    dates: "Jan 2025 – Present",
    details: "Leading SOX compliance audits, evaluating IT controls, and ensuring regulatory adherence."
  },
  {
    title: "Head, Information Systems Audit",
    company: "Interswitch Group",
    dates: "Oct 2023 – Nov 2024",
    details: "Managed audit teams, conducted risk assessments, and implemented governance frameworks."
  },
  {
    title: "Lead IT Auditor",
    company: "UBA",
    dates: "Jul 2021 – Sept 2022",
    details: "Performed IT audits, reviewed controls, and reported on compliance."
  },
  {
    title: "IS Auditor",
    company: "WEMA Bank",
    dates: "May 2019 – Jul 2021",
    details: "Conducted internal audits, identified risks, and recommended improvements."
  },
  {
    title: "IT Risk Analyst",
    company: "First Bank",
    dates: "Jul 2018 – May 2019",
    details: "Analyzed IT risks, supported audit processes, and ensured data security."
  },
  {
    title: "IT Compliance Officer",
    company: "GTBank",
    dates: "Jan 2015 – Jul 2018",
    details: "Ensured compliance with IT policies, conducted reviews, and trained staff."
  }
];

const Experience = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
              <p className="text-accent font-medium">{exp.company}</p>
              <p className="text-gray-600 dark:text-gray-400">{exp.dates}</p>
              <button
                onClick={() => setExpanded(expanded === index ? null : index)}
                className="mt-4 text-primary hover:underline"
              >
                {expanded === index ? "Read Less" : "Read More"}
              </button>
              {expanded === index && (
                <p className="mt-4 text-gray-700 dark:text-gray-300">{exp.details}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
