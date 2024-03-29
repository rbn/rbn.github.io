import { createHashRouter } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import Layout from "./ui/Layout";

export default createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);
