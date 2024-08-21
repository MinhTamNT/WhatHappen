import { createBrowserRouter } from "react-router-dom";
import { DeafultLayout } from "../components/DefaultLayout/DeafultLayout";
import { Home } from "../components/Pages/Home";
import { Login } from "../components/Pages/Login";
import { Register } from "../components/Pages/Register";

export const router = createBrowserRouter([
  {
    element: <DeafultLayout />,
    children: [
      { element: <Home />, path: "/" },
      { element: <Login />, path: "/login" },
      { element: <Register />, path: "/register" },
    ],
  },
]);
