import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/news",
    element: <h1 className="text-3xl">This hot news layout</h1>,
  },
  {
    path: "/auth",
    element: <h1 className="text-2xl">Login Page</h1>,
  },
  {
    path: "*",
    element: <h1 className="text-2xl">Error Page</h1>,
  },
]);

export default router;
