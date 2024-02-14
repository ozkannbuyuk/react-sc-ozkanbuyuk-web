import styled from "styled-components";

export const Container = styled.div`
  padding-top: 48px;
  padding-bottom: 48px;
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

export const Logo = styled.img`
  width: 34px;
  height: 34px;
  cursor: pointer;
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 16px;
  @media (max-width: 1024px) {
    margin-top: 8px;
  }
`;

export const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 16px;
  font-size: 24px;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.5s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 1024px) {
    margin-top: 0 8px;
    font-size: 20px;
  }
`;

export const Copyright = styled.p`
  margin-top: 16px;
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 1024px) {
    margin-top: 8px;
  }
`;
