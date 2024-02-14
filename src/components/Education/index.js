import React from "react";

import { Container, Wrapper, Title, Desc } from "./Education.styled.js";

import { educations } from "../../data";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";

import EducationCard from "../Cards/EducationCard";

const index = () => {
  return (
    <Container id="education">
      <Wrapper>
        <Title>Education</Title>
        <Desc>
          I chose the field of computer engineering and continued my software
          development journey, which I started in high school, at university.
        </Desc>
        <Timeline>
          {educations.map((educations, index) => (
            <TimelineItem key={index}>
              <TimelineContent sx={{ px: "12px", py: "12px" }}>
                <EducationCard educations={educations} />
              </TimelineContent>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary" />
                {index !== educations.length && (
                  <TimelineConnector style={{ background: "#854CE6" }} />
                )}
              </TimelineSeparator>
            </TimelineItem>
          ))}
        </Timeline>
      </Wrapper>
    </Container>
  );
};

export default index;
