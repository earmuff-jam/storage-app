import { ThemeProvider, CssBaseline, Grid, Container } from "@mui/material";
import Header from "../../../Components/Header/Header";
import theme from "./theme";
const ItemsPage = () => {
  console.log("wat");
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
          title="Item Locator"
          subtitle="Find the items that you thought you lost ..."
          sections={sections}
        />
        <main>items</main>
      </Container>
    </ThemeProvider>
  );
};

export default ItemsPage;
