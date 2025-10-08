"use client";

import { motion } from "framer-motion";

const Certifications = () => {
  const certifications = [
    {
      name: "Certified Information Systems Security Professional (CISSP)",
      issuer: "ISC²",
      year: "2023",
      icon: "🛡️",
      description: "Leading certification for information security professionals."
    },
    {
      name: "Certified Information Systems Auditor (CISA)",
      issuer: "ISACA",
      year: "2018",
      icon: "🧾",
      description: "Global certification for IT audit, control, and security professionals."
    },
    {
      name: "ISO 27001 Lead Auditor",
      issuer: "N/A",
      year: "2019",
      icon: "📜",
      description: "Certification for auditing information security management systems."
    },
    {
      name: "PCI Internal Security Assessor",
      issuer: "PCI SSC",
      year: "2024",
      icon: "💳",
      description: "Certification for assessing PCI DSS compliance."
    },
    {
      name: "Lean Six Sigma Yellow Belt",
      issuer: "IASSC",
      year: "2022",
      icon: "🎯",
      description: "Certification for process improvement methodologies."
    },
    {
      name: "COBIT 5 Foundation",
      issuer: "PeopleCert",
      year: "2018",
      icon: "⚙️",
      description: "Certification for IT governance and management framework."
    },
    {
      name: "ITIL Foundation",
      issuer: "N/A",
      year: "2015",
      icon: "🔧",
      description: "Certification for IT service management best practices."
    }
  ];

  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 bg-secondary dark:bg-[#001f3f]"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12 lg:px-12 space-y-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-accent text-center mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">{cert.icon}</span>
                <h3 className="text-lg font-semibold text-primary dark:text-accent">{cert.name}</h3>
              </div>
              <p className="text-accent font-medium mb-1">{cert.issuer}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{cert.year}</p>
              <p className="text-gray-800 dark:text-gray-300 text-sm leading-relaxed">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Certifications;
