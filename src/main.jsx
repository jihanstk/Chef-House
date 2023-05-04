import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layouts/Main/Main.jsx";
import Home from "./components/Home/Home.jsx";
import LogIn from "./components/LogIn/LogIn.jsx";
import Blog from "./components/Blog/Blog.jsx";
import Register from "./components/Register/Register.jsx";
import SingleChef from "./components/Home/Chefs/SingeChef/SingleChef.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import PrivetRoute from "./PrivetRoute/PrivetRoute.jsx";
import ForgotPass from "./components/ForgotPass/ForgotPass.jsx";
import UserLayout from "./Layouts/UserLayOut/UserLayout.jsx";
import ErrorPage from "./ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "chef/:id",
        element: (
          <PrivetRoute>
            <SingleChef></SingleChef>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chef-house-server-jihanstk.vercel.app/chef/${params.id}`
          ),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },

  {
    path: "/",
    element: <UserLayout></UserLayout>,
    children: [
      {
        path: "login",
        element: <LogIn></LogIn>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "forgot-password",
        element: <ForgotPass></ForgotPass>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
