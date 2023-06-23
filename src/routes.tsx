import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Cycling from "./components/Cycling";
import Layout from "./ui/Layout";

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "cycling",
        element: <Cycling />,
      },
    ],
  },
]);
