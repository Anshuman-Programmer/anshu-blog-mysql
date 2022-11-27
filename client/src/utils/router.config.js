import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Single from "../pages/Single";
import Write from "../pages/Write";
import Layout from "./Layout";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/post/:id",
          element: <Single/>,
        },
        {
          path: "/write",
          element: <Write/>,
        },
      ]
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/login",
      element: <Login/>,
    }
]);