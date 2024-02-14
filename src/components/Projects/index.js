import React from "react";

import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
} from "./Projects.styled";

import { projects } from "../../data";

import ProjectCard from "../Cards/ProjectCard";

const index = () => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I strive to bring digital platforms with the potential to reach a wide
          audience to life.
        </Desc>

        <CardContainer>
          {projects.map((projects, index) => (
            <ProjectCard projects={projects} key={index} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default index;
