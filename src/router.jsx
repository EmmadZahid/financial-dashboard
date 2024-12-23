import { Navigate, createBrowserRouter } from "react-router-dom";
import MainPage from "./components/pages/main";
import Dashboard from "./components/templates/Dashboard";
import CreditCards from "./components/templates/CreditCards";
import Settings from "./components/templates/Settings";

const routes = [
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        index: true,
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "credit-cards",
        element: <CreditCards />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "*",
        element: <Navigate to="/dashboard" />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
