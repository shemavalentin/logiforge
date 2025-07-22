import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/skills";

const Skills = () => (
  <div style={{ padding: "4rem" }}>
    <h2>Skills</h2>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{
            padding: "0.5rem 1rem",
            background: "#00d1b2",
            color: "white",
            borderRadius: "5px",
          }}
        >
          {skill}
        </motion.div>
      ))}
    </div>
  </div>
);

export default Skills;
