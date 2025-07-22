import React from "react";
import { motion } from "framer-motion";

const Home = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6 }}
    style={{ padding: "4rem", textAlign: "center" }}
  >
    <h1>
      Hi, I'm <span style={{ color: "#00d1b2" }}>SHEMA Valentin</span>
    </h1>
    <h2>Fullstack Developer | ML Enthusiast | System Architect</h2>
    <p>
      Dynamic and detail-oriented software engineer with a robust skill set
      spanning full-stack development and machine learning.
    </p>
  </motion.div>
);

export default Home;
