import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

const Projects = () => {
  const projectList = [
    {
      image: "",
      title: "Matador Tracker",
      description:
        "Matador tracker is a website market place and rental of a vehicle, both in large and limited quantities from several organizations that are clients of the matador tracker.",
      startDate: "2021-09-01",
      dueDate: "2021-11-01",
      github: null,
      url: null,
      techStack: ["vue js", "bootraps"],
    },
    {
      image: "",
      title: "Matador Tracker",
      description:
        "Matador tracker is a website market place and rental of a vehicle, both in large and limited quantities from several organizations that are clients of the matador tracker.",
      startDate: "2021-09-01",
      dueDate: "2021-11-01",
      github: null,
      url: null,
      techStack: ["vue js", "bootraps"],
    },
  ];
  return (
    <section
      id="portfolio"
      className="mt-24 bg-[#121212] p-[1em] py-[2em] rounded"
    >
      <motion.h3
        className="text-3xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h3>

      <div className="grid md:grid-cols-3 gap-6">
        {projectList.map((project, i) => (
          <motion.div
            key={i}
            className="bg-softLight p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card data={project}/>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
