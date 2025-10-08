"use client";

import Image from "next/image";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-secondary dark:bg-[#001f3f]">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 py-20">
        <div className="flex flex-col md:flex-row items-start justify-center gap-12">
          <div className="text-center md:text-left flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary dark:text-accent mb-2"
            >
              IT Audit & Assurance
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary dark:text-accent mb-2"
            >
              ICFR/SOX Audit
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-primary dark:text-accent mb-6"
            >
              Risk Management & Cybersecurity
            </motion.h3>
            <p className="text-base sm:text-lg text-gray-800 dark:text-gray-300 mb-8 leading-relaxed">
              Safeguarding organizational assets through risk-based audit planning, IT controls evaluation, and cybersecurity assurance.
            </p>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
