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
      className="py-20 bg-secondary dark:bg-[#001f3f]"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12 lg:px-12 space-y-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-accent text-center mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-base sm:text-lg text-gray-800 dark:text-gray-300 leading-relaxed mb-6">
              I am a dedicated IT Audit and Cybersecurity professional with over 5 years of experience in safeguarding organizational assets through comprehensive risk management and control evaluation.
            </p>
            <p className="text-base sm:text-lg text-gray-800 dark:text-gray-300 leading-relaxed mb-6">
              My expertise spans IT governance, risk assessment, compliance frameworks (COBIT, COSO, NIST, ISO 27001), and IIA Standards. I specialize in conducting thorough audits, implementing robust controls, and providing strategic recommendations to enhance cybersecurity posture.
            </p>
            <p className="text-base sm:text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
              Passionate about staying ahead of emerging threats, I continuously update my knowledge in cybersecurity trends, regulatory requirements, and technological advancements to deliver value-driven audit services.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-primary dark:text-accent mb-4">Key Expertise</h3>
              <ul className="space-y-2 text-gray-800 dark:text-gray-300">
                <li>• IT Risk Management & Assessment</li>
                <li>• Cybersecurity Controls Evaluation</li>
                <li>• Compliance & Regulatory Frameworks</li>
                <li>• Data Analytics & Audit Testing</li>
                <li>• IT Governance & Strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
