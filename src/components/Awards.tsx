"use client";

import { motion } from "framer-motion";

const Awards = () => {
  const awards = [
    { title: "SOARS Award", organization: "Interswitch Group", year: "2023" },
    { title: "Commendation Letter", organization: "GTBank", year: "2017" }
  ];

  return (
    <motion.section
      id="awards"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 bg-secondary dark:bg-gray-800"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-accent text-center mb-12">Awards & Membership</h2>
        <div className="space-y-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-primary dark:text-accent">{award.title}</h3>
              <p className="text-accent font-medium">{award.organization}</p>
              <p className="text-gray-600 dark:text-gray-400">{award.year}</p>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: awards.length * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-primary dark:text-accent">Professional Membership</h3>
            <p className="text-gray-700 dark:text-gray-300">Member of ISC2 | ISACA | IIA (Lagos and Atlantic Canada Chapters)</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Awards;
