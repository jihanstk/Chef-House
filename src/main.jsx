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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "chef/:id",
        element: <SingleChef></SingleChef>,
        loader: ({ params }) =>
          fetch(
            `https://chef-house-server-jihanstk.vercel.app/chef/${params.id}`
          ),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <LogIn></LogIn>,
      },
      {
        path: "register",
        element: <Register></Register>,
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
