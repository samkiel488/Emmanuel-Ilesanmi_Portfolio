"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ExperienceCardProps {
  title: string;
  company: string;
  dates: string;
  details: string;
  index: number;
}

const ExperienceCard = ({ title, company, dates, details, index }: ExperienceCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-secondary dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <h3 className="text-xl font-semibold text-primary dark:text-white">{title}</h3>
      <p className="text-accent font-medium">{company}</p>
      <p className="text-gray-600 dark:text-gray-400">{dates}</p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 text-accent hover:text-primary font-medium transition-colors duration-200"
      >
        {expanded ? "Read Less" : "Read More"}
      </button>
      <motion.div
        initial={false}
        animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">{details}</p>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceCard;
