import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Cycling from "./pages/Cycling";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cycling",
    element: <Cycling />,
  },
]);
