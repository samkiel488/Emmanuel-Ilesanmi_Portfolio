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
    <section id="certifications" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-4xl mb-4">{cert.icon}</div>
              <h3 className="text-xl font-semibold text-primary">{cert.name}</h3>
              <p className="text-accent">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
