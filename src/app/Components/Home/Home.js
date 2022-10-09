import React from "react";
import {
  ThemeProvider,
  CssBaseline,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { GraphUp } from "@styled-icons/bootstrap/GraphUp";
import { History } from "@styled-icons/boxicons-regular/History";
import { CalendarDay } from "styled-icons/bootstrap";
import { MagnifyingGlass } from "@styled-icons/entypo/MagnifyingGlass";
import Link from "@mui/material/Link";

const Home = ({ theme, handleSignIn, handleSignUp }) => {
  const sections = [
    { id: 1, textLabel: "Generate report of critical items", icon: GraphUp },
    { id: 2, textLabel: "Discover your purchase journey", icon: History },
    {
      id: 3,
      textLabel: "Find items that were long lost",
      icon: MagnifyingGlass,
    },
    { id: 4, textLabel: "Discover replinish lifecyles", icon: CalendarDay },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            marginBottom: "5rem",
          }}
        >
          <Typography variant="h2">
            Why our solutions resonate with you...
          </Typography>
          {sections.map((section) => {
            return (
              <>
                <Link
                  color="inherit"
                  underline="none"
                  key={section.id}
                  variant="body2"
                  sx={{
                    p: 1,
                    flexShrink: 0,
                  }}
                >
                  <section.icon size={"2rem"} sx={{ marginRight: "1rem" }} />
                  <Typography variant="subtitle1">
                    {section.textLabel}
                  </Typography>
                </Link>
              </>
            );
          })}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          <Button
            variant="outlined"
            onClick={() => handleSignUp(true)}
            // sx={{ transition: "background-color 0.3s ease-in-out" }}
          >
            Discover
          </Button>
          <p>
            {" "}
            Already have an account{" "}
            <span onClick={handleSignIn}> Sign In </span>
          </p>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
