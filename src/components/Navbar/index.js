import React, { useState } from "react";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  Logo,
  NavItems,
  NavLink,
  ButtonContainer,
  GitHubButton,
  LinkedinButton,
  MobileIcon,
  MobileMenu,
  MobileLink,
  ButtonContainerMobile,
} from "./Navbar.styled";

import { Link } from "react-scroll";

import { FaBars, FaShare } from "react-icons/fa";

import { bio } from "../../data";

import { useTheme } from "styled-components";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            title="Özkan Büyük"
          >
            <Logo
              src={require(`../../assets/img/about/ozkanbuyuk-logo.png`)}
              alt="Özkan Büyük"
            />
          </Link>
        </NavLogo>

        <NavItems>
          <NavLink>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              title="About"
            >
              About
            </Link>
          </NavLink>
          <NavLink>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              title="Skills"
            >
              Skills
            </Link>
          </NavLink>
          <NavLink>
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              title="Experience"
            >
              Experience
            </Link>
          </NavLink>
          <NavLink>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              title="Projects"
            >
              Projects
            </Link>
          </NavLink>
          <NavLink>
            <Link
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              title="Education"
            >
              Education
            </Link>
          </NavLink>
        </NavItems>

        <ButtonContainer>
          <GitHubButton
            href={bio.github}
            target="_blank"
            title="Özkan Büyük - GitHub"
          >
            GitHub Profile
          </GitHubButton>
          <LinkedinButton
            href={bio.linkedin}
            target="_blank"
            title="Özkan Büyük - LinkedIn"
          >
            LinkedIn Profile
          </LinkedinButton>
        </ButtonContainer>

        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                title="About"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                About
              </Link>
            </MobileLink>
            <MobileLink>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                title="Skills"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Skills
              </Link>
            </MobileLink>
            <MobileLink>
              <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                title="Experience"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Experience
              </Link>
            </MobileLink>
            <MobileLink>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                title="Projects"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Projects
              </Link>
            </MobileLink>
            <MobileLink>
              <Link
                activeClass="active"
                to="education"
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                title="Education"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Education
              </Link>
            </MobileLink>
            <ButtonContainerMobile>
              <GitHubButton
                href={bio.github}
                target="_blank"
                title="Özkan Büyük - GitHub"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                GitHub Profile
              </GitHubButton>
              <LinkedinButton
                href={bio.linkedin}
                target="_blank"
                title="Özkan Büyük - LinkedIn"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                LinkedIn Profile
              </LinkedinButton>
            </ButtonContainerMobile>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
