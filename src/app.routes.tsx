import { RouteObject } from "react-router-dom";
import Login from "./pages/login";
import { AuthUi } from "./components/auth-ui";
import Register from "./pages/register/register";
import LandingPage from "./pages/landing";
import Home from "./pages/video";
import VideoChat from "./pages/video/video";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    element: <AuthUi />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/video-chat/:mode/:callId",
    element: <VideoChat />,
  },
  {
    path: "/video-chat/:mode",
    element: <VideoChat />,
  },
];

export default routes;
