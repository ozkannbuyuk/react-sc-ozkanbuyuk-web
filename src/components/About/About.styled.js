import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.card_light};
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
  justify-content: space-between;
  align-items: center;
  text-align: start;
  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 1024px) {
    order: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 16px;
  }
`;

export const Title = styled.div`
  font-size: 48px;
  font-weight: 800;
  line-height: 1;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 1024px) {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 8px;
  }
`;

export const Text = styled.div`
  font-size: 36px;
  font-weight: 600;
  line-height: 1;
  margin-top: 16px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 1024px) {
    font-size: 24px;
    font-weight: 500;
    margin-top: 8px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
`;

export const SubTitle = styled.div`
  font-size: 16px;
  line-height: 30px;
  margin-top: 16px;
  margin-bottom: 48px;
  color: ${({ theme }) => theme.text_primary + 95};
  @media (max-width: 1024px) {
    margin-bottom: 24px;
    font-size: 14px;
  }
`;

export const ContactButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: ${({ theme }) => theme.primary};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
  max-width: 300px;
  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
  }
  @media (max-width: 1024px) {
    font-size: 16px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  @media (max-width: 1024px) {
    order: 1;
    justify-content: center;
    align-items: center;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.primary};
  @media (max-width: 1024px) {
    max-width: 300px;
  }
`;
