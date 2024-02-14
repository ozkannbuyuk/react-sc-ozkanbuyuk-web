import React from "react";

import { Container, Wrapper, Title, Desc } from "./Experience.styled.js";

import { experiences } from "../../data";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";

import ExperienceCard from "../Cards/ExperienceCard";

const index = () => {
  return (
    <Container id="experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc>
          I have over 10 years of experience in web and mobile development.
        </Desc>
        <Timeline>
          {experiences.map((experiences, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary" />
                {index !== experiences.length && (
                  <TimelineConnector style={{ background: "#854CE6" }} />
                )}
              </TimelineSeparator>
              <TimelineContent sx={{ px: "12px", py: "12px" }}>
                <ExperienceCard experiences={experiences} />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Wrapper>
    </Container>
  );
};

export default index;
