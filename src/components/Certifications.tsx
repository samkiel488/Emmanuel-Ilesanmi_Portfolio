"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Certifications = () => {
  const certifications = [
    {
      name: "Certified Information Systems Auditor (CISA)",
      issuer: "ISACA",
      year: "2018",
      logo: "isaca-cisa.png"
    },
    {
      name: "Certified in Risk and Information Systems Control (CRISC)",
      issuer: "ISACA",
      year: "2023",
      logo: "isaca-crisc.png"
    },
    {
      name: "Certified Information Systems Security Professional (CISSP)",
      issuer: "ISC²",
      year: "2023",
      logo: "isc2-cissp.png"
    },
    {
      name: "Certified Internal Auditor (CIA)",
      issuer: "The IIA",
      year: "2018",
      logo: "iia-cia.png"
    },
    {
      name: "Certified Fraud Examiner (CFE)",
      issuer: "ACFE",
      year: "2023",
      logo: "acfe-cfe.png"
    },
    {
      name: "Project Management Professional (PMP)",
      issuer: "PMI",
      year: "2023",
      logo: "pmi-pmp.png"
    },
    {
      name: "COBIT 5 Foundation",
      issuer: "ISACA",
      year: "2018",
      logo: "isaca-cobit5.png"
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
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
            >
              <Image
                src={`/logos/${cert.logo}`}
                alt={cert.name}
                width={96}
                height={96}
                className="w-24 h-24 object-contain mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-primary dark:text-accent mb-2">{cert.name}</h3>
              <p className="text-accent font-medium mb-1">{cert.issuer}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Certifications;
