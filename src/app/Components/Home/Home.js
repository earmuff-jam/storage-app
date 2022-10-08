import React from "react";
import { ThemeProvider, CssBaseline, Button } from "@mui/material";
import Link from "@mui/material/Link";

const Home = ({ theme }) => {
  const sections = [
    { textLabel: "Generate report of critical items" },
    { textLabel: "Discover your purchase journey" },
    { textLabel: "Find items that were long lost" },
    { textLabel: "Discover replinish lifecyles" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {sections.map((section) => (
        <Link
          color="inherit"
          noWrap
          underline="none"
          key={section.textLabel}
          variant="body2"
          sx={{ p: 1, flexShrink: 0 }}
        >
          {section.textLabel}
        </Link>
      ))}

      <Button variant="outlined"> Discover </Button>
      <p>
        {" "}
        Already have an account <a href="#"> sign in </a>
      </p>
    </ThemeProvider>
  );
};

export default Home;
