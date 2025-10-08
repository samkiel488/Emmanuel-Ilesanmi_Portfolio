"use client";

import { motion } from "framer-motion";

const Awards = () => {
  const awards = [
    {
      title: "SOARS Award",
      issuer: "Interswitch Group Ltd",
      year: "Dec 2023",
      description: "Recognized for outstanding leadership and achievement in IT Audit."
    },
    {
      title: "Commendation Letter",
      issuer: "Guaranty Trust Bank",
      year: "2017",
      description: "Acknowledged for successful Data Centre Migration project."
    },
    {
      title: "Memberships",
      issuer: "",
      year: "",
      description: "ISC² | ISACA | Institute of Internal Auditors (Lagos & Atlantic Canada Chapters)"
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
