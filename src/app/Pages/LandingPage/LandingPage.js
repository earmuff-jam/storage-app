import { ThemeProvider, CssBaseline } from "@mui/material";
import Header from "../../../Components/Header/Header";
import theme from "./theme";
const LandingPage = () => {
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
      <Header
        title="Item Locator"
        subtitle="Find the items that you thought you lost ..."
        sections={sections}
      />
      <main>landing</main>
    </ThemeProvider>
  );
};

export default LandingPage;
