import React from "react";
import {
  ThemeProvider,
  Container,
  CssBaseline,
  Toolbar,
  Link,
} from "@mui/material";

const Header = ({ sections, title, subtitle, theme, logo }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
          <img src={logo} />
          <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
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
      </Container>
    </ThemeProvider>
  );
};

export default Header;
