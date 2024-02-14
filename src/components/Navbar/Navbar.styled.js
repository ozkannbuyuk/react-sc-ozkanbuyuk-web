import styled from "styled-components";

export const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0px;
  width: 100%;
  z-index: 10;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
`;

export const NavbarContainer = styled.div`
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLogo = styled.div`
  width: 30%;
`;

export const Logo = styled.img`
  width: 40px;
  cursor: pointer;
  @media (max-width: 1024px) {
    width: 28px;
  }
`;

export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;
  }
`;

export const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const GitHubButton = styled.a`
  border: 1px solid #854ce6;
  justify-content: center;
  display: flex;
  align-items: center;
  height: 50%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  color: #f2f3f4;
  cursor: pointer;
  padding: 0 20px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  &:hover {
    background-color: #854ce6;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;
  }
  @media (max-width: 1024px) {
    background-color: #854ce6;
    padding: 5px 20px;
    margin-right: 1px;
  }
`;

export const LinkedinButton = styled.a`
  border: 1px solid #854ce6;
  justify-content: center;
  display: flex;
  align-items: center;
  height: 50%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  color: #f2f3f4;
  cursor: pointer;
  padding: 0 20px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  &:hover {
    background-color: #854ce6;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;
  }
  @media (max-width: 1024px) {
    background-color: #854ce6;
    padding: 5px 20px;
    margin-left: 1px;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 24px;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 0px 0px 0px 16px;
  background: ${({ theme }) => theme.card_light + 99};
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: #854ce6;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;
  }
`;

export const ButtonContainerMobile = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
