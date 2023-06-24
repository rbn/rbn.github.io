import React from "react";
import ReactDOM from "react-dom/client";
import router from "./routes.tsx";
import { RouterProvider } from "react-router-dom";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "box-l": any;
      "center-l": any;
      "cluster-l": any;
      "grid-l": any;
      "stack-l": any;
    }
  }
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
