"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="bg-softLight p-4 flex justify-between items-center rounded-xl shadow-md"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <nav className="w-full bg-dark-bg/90 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
                <div className="text-2xl font-bold gradient-text">Adrian Fathur S</div>
                <div className="hidden md:flex space-x-8">
                    <a href="#home" className={nav_link__item}>Home</a>
                    <a href="#about" className={nav_link__item}>About</a>
                    <a href="#skills" className={nav_link__item}>Skills</a>
                    <a href="#projects" className={nav_link__item}>Projects</a>
                    <a href="#contact" className={nav_link__item}>Contact</a>
                </div>
                <button id="mobile-menu" className="md:hidden text-orange-accent">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
    </nav>
    </motion.nav>
  );
}

const nav_link__item = "nav-link hover:text-orange-accent"
