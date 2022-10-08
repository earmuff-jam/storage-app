import { ThemeProvider, CssBaseline } from "@mui/material";
import Header from "../../Components/Header/Header";
import Home from "../../Components/Home/Home";
import theme from "./theme";

const LandingPage = () => {
  const sections = [
    { title: "All Items", url: "/items" },
    { title: "Containers", url: "/containers" },
    { title: "Reports", url: "/reports" },
    { title: "History", url: "/timeline" },
    { title: "Management", url: "/admin" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        theme={theme}
        title="Earmuff Jam"
        subtitle="Why our solutions resonate with you..."
        sections={sections}
      />
      <main>
        <Home theme={theme}/>
      </main>
    </ThemeProvider>
  );
};

export default LandingPage;
