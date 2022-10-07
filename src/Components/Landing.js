import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";

const Landing = () => {
  return (
    <>
      <Div>
        <img src={logo} alt="rain drops scattered on the screen" />
      </Div>
    </>
  );
};

export const Div = styled("div")({
  justifyContent: "center",
  textAlign: "center",
});

export const StyledH1 = styled("h1")({
  color: "#333333",
  fontFamily: "Bitter, serif",
  fontSize: "50px",
  fontWeight: "normal",
  lineHeight: "54px",
  margin: "0 0 24px",
});

export const StyledP = styled("p")({
  color: "#333333",
  fontFamily: "Georgia, serif",
  fontSize: "18px",
  lineHeight: "28px",
  margin: "0 0 28px",
});

export default Landing;
