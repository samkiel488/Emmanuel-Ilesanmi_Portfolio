"use client";

import Image from "next/image";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-secondary dark:bg-[#001f3f]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-primary dark:text-accent mb-6">
              IT Audit | IT Risk Management | Cybersecurity Assurance
            </h1>
            <p className="text-base sm:text-lg text-gray-800 dark:text-gray-300 mb-8 leading-relaxed">
              Safeguarding organizational assets through risk-based audit planning, IT controls evaluation, and cybersecurity assurance.
            </p>
            <div className="flex space-x-4">
              <a
                href="/Emmanuel Ilesanmi - IT Audit - Master_Canada.docx"
                download
                className="bg-accent text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-accent transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Download Resume
              </a>
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
          <div className="flex justify-center">
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
