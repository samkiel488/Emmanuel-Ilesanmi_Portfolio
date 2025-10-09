"use client";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center bg-transparent px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4"
      >
        Projects
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-lg text-gray-600 dark:text-gray-400"
      >
        🚧 This page is currently under development.  
        <br />
        Check back soon to see Emmanuel Ilesanmi’s project portfolio.
      </motion.p>
    </section>
  );
}
