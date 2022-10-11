import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./app/Pages/ErrorPage/ErrorPage";
import ItemsPage from "./app/Pages/ItemsPage/ItemsPage";
import LandingPage from "./app/Pages/LandingPage/LandingPage";
import SignInPage from "./app/Pages/User/SignInPage";
import SignUpPage from "./app/Pages/User/SignUpPage";

const x = (time) => {
  const promise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve("done!");
    }, time);
  });
  return promise;
};

const loader = async () => {
  const result = await x(5000);
  console.log(result);
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    loader: loader,
    id: 'wat',
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
