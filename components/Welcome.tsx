import React, { useState } from "react";
import { section } from "./Home/Constants";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import lightTheme from "../styles/theme/lightTheme";
import Home from "./Home/Home";

interface Iprops {
  companyStatement: string;
}

const Welcome: React.FC<Iprops> = (props) => {
  const { companyStatement } = props;

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        {/* <Header
          theme={theme}
          logo={logo}
          title="Earmuff Jam"
          sections={sections}
        /> */}
        <main>
          <Container
            maxWidth="lg"
            sx={{
              position: "relative",
              width: "100%",
              minHeight: "100vh",
              // background: `url(${blue})`,
              // backgroundPosition: ` calc(100% - 10rem) calc(100% - 20rem)`,
            }}
          >
            <Home />
          </Container>
        </main>
      </ThemeProvider>
    </>
  );
};

export default Welcome;
