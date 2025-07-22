import React from "react";
import { HeroContainer, HeroText } from "../styles/Home.styles";

const Home = () => {
  return (
    <HeroContainer>
      <HeroText
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          {" "}
          Hello, I'm <span style={{ color: "#00d1b2" }}> SHEMA Valentin</span>
        </h1>
        <h2>
          {" "}
          a Senior Full Stack Developer | AI/ML Enthusiast | System Architect
        </h2>
        <p style={{ marginTop: "1rem" }}>
          Dynamic and detail-oriented software engineer with a robust set
          spanning full-stack development with cutting edge technologies and
          AI/ML.
        </p>
      </HeroText>
    </HeroContainer>
  );
};

export default Home;
