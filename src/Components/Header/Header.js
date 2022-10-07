import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import styled from "styled-components";

function Header(props) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <StyledDiv>
          <StyledTextDiv>
            <StyledH1>Item Locator</StyledH1>
            <StyledP>Find the items that you thought you lost ...</StyledP>
          </StyledTextDiv>
          <StyledImgDiv>
            {/* <img src={raindrops} alt="rain drops scattered on the screen" /> */}
          </StyledImgDiv>
        </StyledDiv>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );

  // return (
  //   <React.Fragment>
  //     <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
  //       <Typography
  //         component="h2"
  //         variant="h5"
  //         color="inherit"
  //         align="center"
  //         noWrap
  //         sx={{ flex: 1 }}
  //       >
  //         {title}
  //       </Typography>

  //     </Toolbar>
  //     <Toolbar
  //       component="nav"
  //       variant="dense"
  //       sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
  //     >
  //       {sections.map((section) => (
  //         <Link
  //           color="inherit"
  //           noWrap
  //           key={section.title}
  //           variant="body2"
  //           href={section.url}
  //           sx={{ p: 1, flexShrink: 0 }}
  //         >
  //           {section.title}
  //         </Link>
  //       ))}
  //     </Toolbar>
  //   </React.Fragment>
  // );
}
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
export default Header;
