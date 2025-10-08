"use client";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-primary text-secondary py-12"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Emmanuel Ilesanmi</h3>
            <p className="text-secondary/80 leading-relaxed">
              IT Audit & Cybersecurity Professional specializing in risk management and control assurance.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-secondary/80 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="text-secondary/80 hover:text-accent transition-colors">About</a></li>
              <li><a href="#experience" className="text-secondary/80 hover:text-accent transition-colors">Experience</a></li>
              <li><a href="#certifications" className="text-secondary/80 hover:text-accent transition-colors">Certifications</a></li>
              <li><a href="#contact" className="text-secondary/80 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="mailto:emmanuelilesanmi36@gmail.com" className="text-secondary/80 hover:text-accent transition-colors">
                📧 Email
              </a>
              <a href="https://linkedin.com/in/emmanuelilesanmi" className="text-secondary/80 hover:text-accent transition-colors">
                💼 LinkedIn
              </a>
              <a href="tel:+15067216489" className="text-secondary/80 hover:text-accent transition-colors">
                📞 Phone
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-secondary/20 mt-8 pt-8 text-center">
          <p className="text-secondary/60">
            © 2024 Emmanuel Ilesanmi. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
