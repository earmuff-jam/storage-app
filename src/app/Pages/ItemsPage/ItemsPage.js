import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import Header from "../../Components/Header/Header";
import logo from "../../../images/logo.svg";
import theme from "./theme";


const ItemsPage = () => {
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
      <Container maxWidth="lg">
        <Header
          theme={theme}
          logo={logo}
          title="Earmuff Jam"
          sections={sections}
        />
        <main>items</main>
      </Container>
    </ThemeProvider>
  );
};

export default ItemsPage;
