import * as React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import styled from "styled-components";

function Header(props) {
  const { sections, title, subtitle, theme } = props;

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
          {" "}
          {title}
          {subtitle}
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
    </ThemeProvider>
  );
}

export default Header;
