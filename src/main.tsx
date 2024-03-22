import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SigninForm from "./_auth/forms/SigninForm.tsx";
import { Home } from "./_root/pages";
import SignupForm  from "./_auth/forms/SignupForm.tsx";
import RootLayout from "./_root/RootLayout.tsx";
import AuthLayout from "./_auth/AuthLayout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
          /*Private Routes*/
        element: <AuthLayout />,
        children: [
          { path: "sign-in", element: <SigninForm /> },
          { path: "sign-up", element: <SignupForm /> },
        ],
      },
      {
          /*Public Routes*/
        element: <RootLayout />,
        children: [{ index: true, element: <Home /> }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
