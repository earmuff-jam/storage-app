import React from "react";
import { Container, TextField, Button } from "@mui/material";

function SignIn() {
  return (
    <Container maxWidth="lg">
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          "& > div:nth-child(2)": {
            marginBottom: "2rem",
          },
        }}
      >
        <TextField
          id="standard-basic"
          label="Enter your username"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          label="Enter your password"
          variant="standard"
        />
        <Button variant="outlined"> Sign In</Button>
      </Container>
    </Container>
  );
}

export default SignIn;
