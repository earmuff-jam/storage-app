import React, { useState } from "react";
import {
  Container,
  Button,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  FormControl,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Form } from "react-router-dom";

const useHandlePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handleShowPassword = (value) => {
    setShowPassword(value);
  };

  const handleSetPassword = (value) => {
    console.log(value);
    setPassword(value);
  };

  return [showPassword, handleShowPassword, password, handleSetPassword];
};

const SignUp = () => {
  const [showPassword, handleShowPassword, password, handleSetPassword] =
    useHandlePassword();

  const [username, setUsername] = useState("");

  const handleUsername = (value) => {
    setUsername(value);
  };

  return (
    <Container maxWidth="lg">
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "50vh",
          textAlign: "center",
        }}
      >
        <Typography variant="h2"> Sign Up </Typography>
        <Form>
          <FormControl
            sx={{ marginBottom: "1vh", width: "100%" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-input">Username</InputLabel>
            <OutlinedInput
              id="outlined-adornment-username"
              type={"text"}
              value={username}
              onChange={(e) => handleUsername(e.target.value)}
              label="Username"
            />
          </FormControl>
          <FormControl
            sx={{ marginBottom: "3vh", width: "100%" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => handleSetPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => handleShowPassword(!showPassword)}
                    onMouseDown={() => handleShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Form>
        <Button variant="standard"> Continue </Button>
      </Container>
    </Container>
  );
};

export default SignUp;
