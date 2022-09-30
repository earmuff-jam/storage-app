import React from "react";
import styled from "styled-components";
import raindrops from "../images/raindrops.jpg";

const Landing = () => {
  return (
    <>
      <StyledDiv>
        <StyledTextDiv>
          <StyledH1>Item Locator</StyledH1>
          <StyledP>Find the items that you thought you lost ...</StyledP>
        </StyledTextDiv>
        <StyledImgDiv>
          <img src={raindrops} alt="rain drops scattered on the screen" />
        </StyledImgDiv>
      </StyledDiv>
    </>
  );
};

export const StyledDiv = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
});

export const StyledTextDiv = styled("div")({
  margin: "auto auto",
});

export const StyledImgDiv = styled("div")({
  width: "30rem",
  height: "22rem",
  overflow: "hidden",
  borderRadius: "2rem",
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
