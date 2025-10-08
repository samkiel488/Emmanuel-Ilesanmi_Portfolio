"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 bg-white dark:bg-[#001f3f]"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-accent text-center mb-12">About Me</h2>
        <p className="text-base sm:text-lg text-gray-800 dark:text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
          Emmanuel is an IT Audit, IT Risk, and cybersecurity assurance specialist leveraging frameworks such as COBIT, COSO, NIST, ISO 27001, and IIA Standards to strengthen internal controls and align governance with strategic goals.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
