import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Components/Layout/Main.jsx";
import Home from "./Components/Home/Home.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import Order from "./Components/Oder/Order";
import AuthProvider from "./Components/Providers/AuthProvider";
import PrivateRoute from "./Components/Routes/PrivateRoute";
import Recipes from "./Components/Recipes/Recipes";
import Blog from "./Components/Blog/Blog";

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
        path: "/orders",
        element: <PrivateRoute><Order></Order></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/chef/:id',
        element:<PrivateRoute><Recipes></Recipes></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/chefsData/${params.id}`)
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
