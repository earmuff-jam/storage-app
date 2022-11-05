import React from "react";
import {
  ThemeProvider,
  CssBaseline,
  Button,
  Box,
  Typography,
} from "@mui/material";
import Link from "@mui/material/Link";
import logo from "../../public/logo.svg";

interface Isection {
  id: number;
  textLabel: string;
}

const Home: React.FC = () => {
  const sections: Isection[] = [
    { id: 1, textLabel: "Generate report of critical items" },
    { id: 1, textLabel: "Discover your purchase journey" },
    { id: 1, textLabel: "Find items that were long lost" },
    { id: 1, textLabel: "Discover replinish lifecyles" },
  ];

  return (
    <ThemeProvider>
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
          <img
            src={logo.src}
            alt={"Logo of the company"}
            style={{ width: "12vh", margin: "0 auto" }}
          />
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
                  <Typography variant="subtitle1">
                    {section.textLabel}
                  </Typography>
                </Link>
              </>
            );
          })}
        </Box>
        {/* Login and Sign up here  */}
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
            // onClick={() => handleSignUp(true)}
            // sx={{ transition: "background-color 0.3s ease-in-out" }}
          >
            Discover
          </Button>
          <p>
            {" "}
            Already have an account{" "}
            <span /* onClick={handleSignIn} */> Sign In </span>
          </p>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
