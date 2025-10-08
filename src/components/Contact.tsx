"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 bg-white dark:bg-[#001f3f]"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12 lg:px-12 space-y-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-accent text-center mb-12">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-800 dark:text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg bg-secondary dark:bg-gray-800 text-gray-800 dark:text-gray-100"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-800 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg bg-secondary dark:bg-gray-800 text-gray-800 dark:text-gray-100"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-800 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg bg-secondary dark:bg-gray-800 text-gray-800 dark:text-gray-100 h-32"
                  placeholder="Tell me about your project or inquiry..."
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition"
              >
                Send Message
              </button>
            </form>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg"
              >
                Message sent successfully!
              </motion.div>
            )}
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-primary dark:text-accent mb-4">Get in Touch</h3>
              <p className="text-base sm:text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
                📧 emmanuelilesanmi36@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
