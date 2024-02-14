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

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 32px;
  @media (max-width: 1024px) {
    gap: 32px 0px;
  }
`;
