import React from "react";

import styled from "styled-components";

const CardGo = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const Card = styled.div`
  width: 330px;
  height: 500px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
  @media (max-width: 1024px) {
    height: auto;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 1024px) {
    font-weight: 500;
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

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;

const ProjectCard = ({ projects }) => {
  const { image, title, url, date } = projects;

  return (
    <CardGo href={url} title={title} target="_blank">
      <Card>
        <Image
          src={require(`../../assets/img/projects/${image}`)}
          alt={title}
        />
        <Details>
          <Title>{title}</Title>
          <Date>{date}</Date>
        </Details>
        <Tags>
          {projects.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Tags>
      </Card>
    </CardGo>
  );
};

export default ProjectCard;
