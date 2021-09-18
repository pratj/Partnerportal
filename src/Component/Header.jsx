import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../Images/logo-watermark.svg";
const Title = styled.h1`
  font-size: 3.5em;
  text-align: center;
  color: palevioletred;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: #0e101c;
  width: 100%;
  display: flex;
  justify-content: center;
`;

function Header({ pageTitle }) {
  return (
    <Wrapper>
      <Logo />
      <Title>Welcome to Axis Bank Partner Onboarding Portal</Title>
    </Wrapper>
  );
}

export default Header;
