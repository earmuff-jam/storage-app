import {
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "./app/Pages/ErrorPage/ErrorPage";
import ItemsPage from "./app/Pages/ItemsPage/ItemsPage";
import LandingPage from "./app/Pages/LandingPage/LandingPage";
import SignInPage from "./app/Pages/User/SignInPage";
import SignUpPage from "./app/Pages/User/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/items",
    element: <ItemsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signin",
    element: <SignInPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
    errorElement: <ErrorPage />,
  },
]);

export default router;