import { ThemeProvider, CssBaseline } from "@mui/material";
import Header from "../../Components/Header/Header";
import theme from "./theme";

const LandingPage = () => {
  const sections = [
    { title: "All Items", url: "/items" },
    { title: "Containers", url: "/containers" },
    { title: "Reports", url: "/reports" },
    { title: "History", url: "/timeline" },
    { title: "Management", url: "/admin" },
  ];
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        theme={theme}
        title="Earmuff Jam"
        subtitle="Why our solutions resonate with you..."
        sections={sections}
      />
      <main>landing</main>
    </ThemeProvider>
  );
};

export default LandingPage;
