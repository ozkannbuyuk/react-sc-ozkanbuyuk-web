import {
  Container,
  Wrapper,
  Logo,
  SocialMediaIcons,
  SocialMediaIcon,
  Copyright,
} from "./Footer.styled";

import { Link } from "react-scroll";

import { bio } from "../../data";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
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

        <SocialMediaIcons>
          <SocialMediaIcon
            href={bio.github}
            target="_blank"
            title="Özkan Büyük - GitHub"
          >
            <AiFillGithub />
          </SocialMediaIcon>

          <SocialMediaIcon
            href={bio.linkedin}
            target="_blank"
            title="Özkan Büyük - LinkedIn"
          >
            <AiFillLinkedin />
          </SocialMediaIcon>
        </SocialMediaIcons>

        <Copyright>&copy; 2024 - Özkan Büyük. All rights reserved.</Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;
