import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div>
      {/* Hero */}
      <section
        id="about"
        className="flex flex-col items-center text-center mt-16"
      >
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span className="text-accentOrange">Adrian</span>
        </motion.h2>

        <motion.p
          className="max-w-xl text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Software Engineer passionate about building web applications, frontend
          systems, and digital solutions. I also enthusiasm to learn new technologies
          that are developing related to software development
        </motion.p>

        <motion.a
          href="/cv.pdf"
          className="mt-6 px-6 py-2 bg-accentOrange text-white rounded-xl shadow-lg hover:bg-orange-500"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Download CV
        </motion.a>
      </section>
    </div>
  );
};

Banner.propTypes = {};

export default Banner;
