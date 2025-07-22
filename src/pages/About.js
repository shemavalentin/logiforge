import React from "react";
import { AboutTitle, AboutWrapper, AboutContent } from "../styles/about.styles";

const About = () => {
  return (
    <AboutWrapper>
      <AboutTitle> About Me</AboutTitle>
      <AboutContent>
        I'm a passionalte Fullstack Developer and Machine Learning Enthusiast
        with deep experinced in System Design, Modern JavaScript Frameworks and
        Backend Architecture. I thrive on creating efficient, scalable, and
        user-centered solutions. From React and Node.js to Python and FastAPI —
        I build with purpose and passion.
      </AboutContent>
    </AboutWrapper>
  );
};

export default About;
