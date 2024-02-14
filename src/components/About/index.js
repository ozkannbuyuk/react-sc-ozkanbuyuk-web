import React from "react";

import {
  Container,
  Wrapper,
  HeroLeftContainer,
  Title,
  Text,
  Span,
  Img,
  HeroRightContainer,
  SubTitle,
  ContactButton,
} from "./About.styled";

import { bio } from "../../data";

const index = () => {
  return (
    <div id="about">
      <Container>
        <Wrapper>
          <HeroLeftContainer id="left">
            <Title>👋 Hi, I'm {bio.name}</Title>
            <Text>
              I'am a <Span>{bio.role}</Span>
            </Text>
            <SubTitle>{bio.description}</SubTitle>
            <ContactButton href={bio.contactUrl} title={bio.contact}>
              {bio.contact}
            </ContactButton>
          </HeroLeftContainer>

          <HeroRightContainer id="right">
            <Img
              src={require(`../../assets/img/about/ozkanbuyuk.gif`)}
              alt={bio.name}
              title={bio.name}
            />
          </HeroRightContainer>
        </Wrapper>
      </Container>
    </div>
  );
};

export default index;
