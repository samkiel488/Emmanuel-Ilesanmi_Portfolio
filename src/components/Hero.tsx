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
              IT Audit
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary dark:text-accent mb-2"
            >
              IT Risk Management
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary dark:text-accent mb-2"
            >
              Cybersecurity Assurance
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary dark:text-accent mb-2"
            >
              ICFR/SOX Audit
            </motion.h1>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/profile_pic.jpeg"
              alt="Emmanuel Ilesanmi"
              width={300}
              height={300}
              priority
              className="rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
