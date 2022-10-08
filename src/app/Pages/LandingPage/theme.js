import { createTheme } from "@mui/material";
const theme = createTheme();

theme.typography.h1 = {
    color: "#333333",
    fontFamily: "Bitter, serif",
    fontSize: "50px",
    fontWeight: "normal",
    lineHeight: "54px",
    margin: "0 0 24px",
}

theme.typography.p = {
    color: "#333333",
    fontFamily: "Georgia, serif",
    fontSize: "18px",
    lineHeight: "28px",
    margin: "0 0 16px",
}
export default theme;

