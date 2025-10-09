"use client";

import Image from "next/image";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-gray-100 dark:bg-[#001f3f]">
      <section id="home" className="flex flex-col md:flex-row items-center justify-center md:justify-between max-w-6xl mx-auto px-8 md:px-16 lg:px-24 py-20">
        <div className="flex-1 text-left md:pl-8 lg:pl-12 space-y-3">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-400 dark:text-accent mb-2"
          >
            IT Audit
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-400 dark:text-accent mb-2"
          >
            IT Risk Management
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-400 dark:text-accent mb-2"
          >
            Cybersecurity Assurance
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-400 dark:text-accent mb-2"
          >
            ICFR/SOX Audit
          </motion.h1>
        </div>
        <div className="flex-shrink-0 md:ml-20 lg:ml-32">
          <Image
            src="/profile_pic.jpeg"
            alt="Emmanuel Ilesanmi"
            width={250}
            height={250}
            priority
            className="rounded-full object-cover shadow-lg border-4 border-gray-300 dark:border-gray-700"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
