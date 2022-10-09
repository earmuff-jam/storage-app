import React, { useState } from "react";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import Header from "../../Components/Header/Header";
import Home from "../../Components/Home/Home";
import logo from "../../../images/logo.svg";
import SignInPage from "../User/SignInPage";
import SignUpPage from "../User/SignUpPage";
import theme from "./theme";

const useDisplayHome = () => {
  const [displayHome, setDisplayHome] = useState(true);
  const handleDisplayHome = (val) => {
    setDisplayHome(val);
  };

  return [displayHome, handleDisplayHome];
};

const useSignIn = (displayHome, handleDisplayHome) => {
  const [signIn, setSignIn] = useState(!displayHome);
  const handleSignIn = (val) => {
    setSignIn(val);
    handleDisplayHome(!val);
  };

  return [signIn, handleSignIn];
};

const useSignUp = (displayHome, signIn, handleDisplayHome, handleSignIn) => {
  const [signUp, setSignUp] = useState(!displayHome && !signIn);
  const handleSignUp = (val) => {
    setSignUp(val);
    handleSignIn(!val);
    handleDisplayHome(!val);
  };

  return [signUp, handleSignUp];
};

const LandingPage = () => {
  const sections = [
    { title: "All Items", url: "/items" },
    { title: "Containers", url: "/containers" },
    { title: "Reports", url: "/reports" },
    { title: "History", url: "/timeline" },
    { title: "Management", url: "/admin" },
  ];

  const [displayHome, handleDisplayHome] = useDisplayHome();
  const [signIn, handleSignIn] = useSignIn(displayHome, handleDisplayHome);
  const [signUp, handleSignUp] = useSignUp(
    displayHome,
    signIn,
    handleDisplayHome,
    handleSignIn
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        theme={theme}
        logo={logo}
        title="Earmuff Jam"
        sections={sections}
      />
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
          {displayHome && (
            <Home
              theme={theme}
              handleSignIn={handleSignIn}
              handleSignUp={handleSignUp}
            />
          )}
          {signIn && !displayHome && <SignInPage theme={theme} />}
          {signUp && <SignUpPage theme={theme} />}
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default LandingPage;
