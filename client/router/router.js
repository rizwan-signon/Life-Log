import { createBrowserRouter } from "react-router-dom";
import Home from "../src/pages/Home";
import Signin from "../src/pages/Signin";
import Register from "../src/pages/Register";
import Form from "../src/components/Form";
import UpdatePost from "../src/components/UpdatePost";
export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Signin /> },
  { path: "/register", element: <Register /> },
  { path: "/create", element: <Form /> },
  { path: "/update", element: <UpdatePost /> },
]);
