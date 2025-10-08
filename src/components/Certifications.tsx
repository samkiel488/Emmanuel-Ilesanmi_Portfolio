"use client";

import { motion } from "framer-motion";

const certifications = [
  { name: "CISSP", year: "2023", icon: "🔒" },
  { name: "CISA", year: "2018", icon: "🛡️" },
  { name: "ISO 27001 LA", year: "2019", icon: "📋" },
  { name: "PCI ISA", year: "2024", icon: "💳" },
  { name: "Lean Six Sigma Yellow Belt", year: "2022", icon: "📈" },
  { name: "COBIT 5 Foundation", year: "2018", icon: "🏗️" },
  { name: "ITIL Foundation", year: "2015", icon: "⚙️" }
];

const Certifications = () => {
  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 bg-secondary dark:bg-gray-800"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-accent text-center mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{cert.icon}</div>
              <h3 className="text-xl font-semibold text-primary dark:text-accent">{cert.name}</h3>
              <p className="text-accent">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Certifications;
