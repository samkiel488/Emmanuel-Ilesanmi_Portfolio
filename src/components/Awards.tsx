"use client";

import { motion } from "framer-motion";

const Awards = () => {
  const awards = [
    {
      title: "Outstanding IT Audit Project",
      issuer: "Confidential Client",
      year: "2022",
      description: "Recognized for leading a successful IT audit project that significantly improved risk management."
    },
    {
      title: "Cybersecurity Excellence Award",
      issuer: "Confidential Client",
      year: "2021",
      description: "Awarded for exceptional contributions to cybersecurity assurance and control improvements."
    },
    {
      title: "Employee of the Year",
      issuer: "Confidential Client",
      year: "2020",
      description: "Honored for outstanding performance and dedication to IT audit and risk management."
    }
  ];

  return (
    <motion.section
      id="awards"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 bg-secondary dark:bg-[#001f3f]"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12 lg:px-12 space-y-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-accent text-center mb-12">Awards & Recognition</h2>
        <div className="space-y-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-primary dark:text-accent mb-2">{award.title}</h3>
              <p className="text-accent font-medium mb-1">{award.issuer}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{award.year}</p>
              <p className="text-gray-800 dark:text-gray-300 leading-relaxed">{award.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Awards;
