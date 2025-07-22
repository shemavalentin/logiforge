import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

const Projects = () => {
  const [search, setSearch] = useState("");

  const filtered = projects.filter((p) =>
    (p.title || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ padding: "4rem" }}
    >
      <h1>Projects</h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "0.5rem", margin: "5rem 0" }}
      />

      {filtered.map((proj, index) => (
        <div key={index} style={{ marginBottom: "1.5rem" }}>
          <h3>{proj.title}</h3>
          <p>{proj.description}</p>
          <a href={proj.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </motion.div>
  );
};

export default Projects;
