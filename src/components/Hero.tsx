"use client";

import Image from "next/image";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              IT Audit | IT Risk Management | Cybersecurity Assurance
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Safeguarding organizational assets through risk-based audit planning, IT controls evaluation, and cybersecurity assurance.
            </p>
            <div className="flex space-x-4">
              <a
                href="/Emmanuel Ilesanmi - IT Audit - Master_Canada.docx"
                download
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition"
              >
                View Resume
              </a>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition cursor-pointer"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/profile_pic.jpeg"
              alt="Emmanuel Ilesanmi"
              width={300}
              height={300}
              className="rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
