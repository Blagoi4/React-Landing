import { router } from "./routing/routing";
import { RouterProvider } from "react-router-dom";
import React from "react";

export default function App() {
  return (
    <>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </>
  );
}
