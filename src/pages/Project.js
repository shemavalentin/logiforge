import React from "react";

import { projectData } from "../data/ProjectData";
import { ProjectWrapper, ProjectCard } from "../styles/Projects.styles";

const Projects = () => {
  return (
    <ProjectWrapper>
      <h1>Projects </h1>
      {projectData.map((proj, index) => (
        <ProjectCard key={index}>
          <h3>{proj.title}</h3>
          <p>{proj.description}</p>
          <p>
            <strong>Tech: </strong>
            {proj.tech.join(",  ")}
          </p>
          <a href={proj.link} target="_blank" rel="noopener noreferrer">
            View Live
          </a>
        </ProjectCard>
      ))}
    </ProjectWrapper>
  );
};

export default Projects;
