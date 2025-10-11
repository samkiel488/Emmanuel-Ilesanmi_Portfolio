"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="bg-gray-100 dark:bg-[#001f3f] flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8 md:gap-16 h-screen px-6 md:px-12 lg:px-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Profile Image */}
      <div className="flex-shrink-0 mb-6 md:mb-0 mx-auto md:mx-0">
        <Image
          src="/profile_pic.jpeg"
          alt="Emmanuel Ilesanmi"
          width={300}
          height={300}
          className="w-[220px] md:w-[300px] h-[220px] md:h-[300px] rounded-full object-cover shadow-xl border-4 border-gray-300 dark:border-gray-700"
          priority
        />
      </div>

      {/* Hero Text */}
      <div className="max-w-lg">
        <p className="text-4xl md:text-5xl font-bold text-accent mt-2 leading-relaxed">
          IT Audit & Assurance<br />
          Risk Management<br />
          Cybersecurity Assurance<br />
          ICFR / SOX Audit
        </p>
      </div>
    </motion.section>
  );
}
