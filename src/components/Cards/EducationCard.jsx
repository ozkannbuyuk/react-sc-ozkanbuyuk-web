import React from "react";

import styled from "styled-components";

const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  overflow: hidden;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  border: 0.1px solid #854ce6;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-10px);
  }
  @media (max-width: 1024px) {
    padding: 10px 10px;
    width: 300px;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 14px;
`;

const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 5px;
  @media (max-width: 1024px) {
    height: 40px;
    margin-top: 0px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};
  @media (max-width: 1024px) {
    font-size: 14px;
    font-weight: 500;
  }
`;

const Degree = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media (max-width: 1024px) {
    font-size: 12px;
    font-weight: 400;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media (max-width: 1024px) {
    font-size: 10px;
  }
`;

const EducationCard = ({ educations }) => {
  const { image, school, degree, date } = educations;

  return (
    <Card>
      <Top>
        <Image
          src={require(`../../assets/img/educations/${image}`)}
          alt={school}
          title={school}
        />
        <Body>
          <Name>{school}</Name>
          <Degree>{degree}</Degree>
          <Date>{date}</Date>
        </Body>
      </Top>
    </Card>
  );
};

export default EducationCard;
