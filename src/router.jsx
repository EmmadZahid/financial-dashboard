import { Navigate, createBrowserRouter } from "react-router-dom";
import MainPage from "./components/pages/main";
import Dashboard from "./components/templates/Dashboard";

const routes = [
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        index: true,
        path: "overview",
        element: <Dashboard />,
      },
      {
        path: "settinga",
        // element: <InvestPage />,
      },
      {
        path: "*",
        element: <Navigate to="/overview" />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
