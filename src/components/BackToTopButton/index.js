import React, { useState, useEffect } from "react";

import { animateScroll as scroll } from "react-scroll";

import { FiChevronUp } from "react-icons/fi";

import styled from "styled-components";

const Button = styled.button`
  color: white;
  background-color: #854ce6;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
  width: 48px;
  height: 48px;
  border-radius: 9999px;
  position: fixed;
  right: 80px;
  bottom: 80px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;

  &:hover {
    background-color: #650dfd;
  }

  @media (max-width: 1024px) {
    width: 40px;
    height: 40px;
    right: 40px;
    bottom: 40px;
  }
`;

const Icon = styled(FiChevronUp)`
  width: 24px;
  height: 24px;
  @media (max-width: 1024px) {
    width: 20px;
    height: 20px;
  }
`;

const BackToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    show && (
      <Button onClick={() => scrollToTop()} title="Scroll Up">
        <Icon>
          <FiChevronUp />
        </Icon>
      </Button>
    )
  );
};

export default BackToTopButton;
