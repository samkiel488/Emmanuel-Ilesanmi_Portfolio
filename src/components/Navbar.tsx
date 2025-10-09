"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  const menuItems = ["About", "Skills", "Experience", "Projects", "Certifications", "Awards", "Contact"];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-shadow duration-300 ${
          isScrolled ? "bg-primary shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-secondary">
              Emmanuel Ilesanmi
            </div>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Experience", "Projects", "Certifications", "Education", "Awards", "Contact"].map((item) => {
                if (item === "Home") {
                  return (
                    <Link
                      key={item}
                      href="/"
                      className={`text-secondary hover:text-accent ${pathname === "/" ? "text-accent" : ""}`}
                    >
                      {item}
                    </Link>
                  );
                } else if (item === "Projects") {
                  return (
                    <Link
                      key={item}
                      href="/projects"
                      className={`text-secondary hover:text-accent ${pathname === "/projects" ? "text-accent" : ""}`}
                    >
                      {item}
                    </Link>
                  );
                } else {
                  return (
                    <ScrollLink
                      key={item}
                      to={item.toLowerCase()}
                      smooth={true}
                      duration={500}
                      className="text-secondary hover:text-accent cursor-pointer"
                    >
                      {item}
                    </ScrollLink>
                  );
                }
              })}
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <button
                onClick={toggleMenu}
                className="md:hidden text-secondary hover:text-accent"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-64 bg-primary shadow-lg z-40 md:hidden"
          >
            <div className="flex flex-col pt-20 px-6 space-y-6">
              {menuItems.map((item) => {
                if (item === "Projects") {
                  return (
                    <Link
                      key={item}
                      href="/projects"
                      onClick={closeMenu}
                      className={`text-secondary hover:text-accent text-lg ${pathname === "/projects" ? "text-accent" : ""}`}
                    >
                      {item}
                    </Link>
                  );
                } else {
                  return (
                    <ScrollLink
                      key={item}
                      to={item.toLowerCase()}
                      smooth={true}
                      duration={500}
                      onClick={closeMenu}
                      className="text-secondary hover:text-accent cursor-pointer text-lg"
                    >
                      {item}
                    </ScrollLink>
                  );
                }
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
