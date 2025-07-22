import React from "react";
import { motion } from "framer-motion";

const About = () => (
  <motion.div
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -100, opacity: 0 }}
    transition={{ duration: 0.5 }}
    style={{ padding: "4rem" }}
  >
    <h1>About Me</h1>
    <p>
      I specialize in full-stack development and system architecture, blending
      strong UI/UX design with scalable backend logic.
    </p>
  </motion.div>
);

export default About;
