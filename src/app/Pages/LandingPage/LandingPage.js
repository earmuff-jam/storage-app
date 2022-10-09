import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import Header from "../../Components/Header/Header";
import Home from "../../Components/Home/Home";
import theme from "./theme";
import logo from "../../../images/logo.svg";
import blue from "../../../images/blue.jpg";
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
        logo={logo}
        title="Earmuff Jam"
        sections={sections}
      />
      <main>
        <Container maxWidth="lg"
        sx={{
          position: "relative",
          width: '100%',
          minHeight: '100vh',
          // background: `url(${blue})`,
          // backgroundPosition: ` calc(100% - 10rem) calc(100% - 20rem)`,
        }}
        >
          <Home theme={theme} />
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default LandingPage;
