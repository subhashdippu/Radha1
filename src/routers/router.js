import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main";
import Home from "../pages/home";
import SignUp from "../pages/signUp";
import SignIn from "../pages/signIn";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);
export default router;
