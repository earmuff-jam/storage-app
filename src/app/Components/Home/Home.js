import React from "react";
import { ThemeProvider, CssBaseline, Button, Box } from "@mui/material";
import { GraphUp } from "@styled-icons/bootstrap/GraphUp";
import { History } from "@styled-icons/boxicons-regular/History";
import { CalendarDay } from "styled-icons/bootstrap";
import { MagnifyingGlass } from "@styled-icons/entypo/MagnifyingGlass";
import Link from "@mui/material/Link";

const Home = ({ theme }) => {
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
          textAlign: "center",
          padding: "1rem",
        }}
      >
        {sections.map((section) => {
          return (
            <>
              <Link
                color="inherit"
                noWrap
                underline="none"
                key={section.id}
                variant="body2"
                sx={{
                  p: 1,
                  flexShrink: 0,
                  "& > svg": { marginRight: "1rem" },
                }}
              >
                <section.icon size={"2rem"} />
                {section.textLabel}
              </Link>
            </>
          );
        })}
      </Box>
      <Button variant="outlined"> Discover </Button>
      <p>
        {" "}
        Already have an account <a href="#"> sign in </a>
      </p>
    </ThemeProvider>
  );
};

export default Home;
