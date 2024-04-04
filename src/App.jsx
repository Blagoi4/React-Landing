import { router } from "./routing/routing";
import { RouterProvider } from "react-router-dom";
import React from "react";
import { store } from "./app/store";
import { Provider } from "react-redux";


export default function App() {
  return (
    <>
      <React.StrictMode>
        <Provider store={store}>
        <RouterProvider router={router} />
        </Provider>
      </React.StrictMode>
    </>
  );
}
