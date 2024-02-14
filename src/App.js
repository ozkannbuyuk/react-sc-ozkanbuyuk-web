import React from "react";

import { ThemeProvider } from "styled-components";
import { theme } from "./theme.js";

import { Helmet } from "react-helmet";

import { Body, Wrapper } from "./App.styled.js";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";

import BackToTopButton from "./components/BackToTopButton";

import CookieConsent from "react-cookie-consent";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Web and Mobile Software Developer | Özkan Büyük</title>
        <meta
          name="description"
          content="I closely follow technological trends and continuously strive to improve myself. With my problem-solving ability, teamwork skills, and project management skills, I always do my best to achieve successful results."
        />
        <meta
          name="keywords"
          content="Web Applications, Mobile Applications, Software Solutions, Özkan Büyük"
        />
        <meta name="author" content="Özkan Büyük" />
      </Helmet>

      <Navbar />

      <Body>
        <About />
        <Wrapper>
          <Skills />
        </Wrapper>
        <Wrapper>
          <Experience />
        </Wrapper>
        <Wrapper>
          <Projects />
        </Wrapper>
        <Wrapper>
          <Education />
        </Wrapper>
        <Footer />
      </Body>

      <BackToTopButton />

      <CookieConsent
        location="bottom"
        style={{
          background: "#171721",
          color: "#fff",
          textAlign: "left",
          fontFamily: "Poppins",
          fontSize: "14px",
        }}
        buttonStyle={{
          background: "#fff",
          color: "#171721",
          fontFamily: "Poppins",
          fontSize: "14px",
        }}
        buttonText="Close ❌"
        expires={365}
      >
        This website uses cookies to provide you with a better service. By using
        this site, you accept the use of cookies.
      </CookieConsent>
    </ThemeProvider>
  );
};

export default App;
