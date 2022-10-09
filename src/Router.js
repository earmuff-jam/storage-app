import {
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "./app/Pages/ErrorPage/ErrorPage";
import ItemsPage from "./app/Pages/ItemsPage/ItemsPage";
import LandingPage from "./app/Pages/LandingPage/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/items",
    element: <ItemsPage />,
  },
]);

export default router;