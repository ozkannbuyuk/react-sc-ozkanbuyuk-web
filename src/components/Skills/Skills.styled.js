import styled from "styled-components";

export const Container = styled.div`
  padding-top: 128px;
  padding-bottom: 128px;
  @media (max-width: 1024px) {
    padding-top: 48px;
    padding-bottom: 48px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 1024px) {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 8px;
  }
`;

export const Desc = styled.div`
  font-size: 16px;
  margin-bottom: 48px;
  max-width: 520px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 1024px) {
    font-size: 14px;
    margin-bottom: 24px;
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  @media (max-width: 1024px) {
    gap: 16px;
  }
`;

export const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854ce6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 10px;
  padding: 20px 20px;
  @media (max-width: 1024px) {
    max-width: 330px;
    padding: 10px 10px;
  }
`;

export const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 1024px) {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
  }
`;

export const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
`;

export const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 10px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 1024px) {
    font-size: 14px;
    padding: 8px 12px;
  }
`;

export const SkillImage = styled.img`
  width: 24px;
  height: 24px;
  @media (max-width: 1024px) {
    width: 20px;
    height: 20px;
  }
`;
