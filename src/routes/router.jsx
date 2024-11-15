import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../components/Pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../components/Pages/Login";
import Register from "../components/Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "", // set default path
        element: <Navigate to={"/category/:01"}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news",
    element: <h1 className="text-3xl">This hot news layout</h1>,
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <h1 className="text-2xl">Error Page</h1>,
  },
  {
    feature: {
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  },
]);

export default router;
