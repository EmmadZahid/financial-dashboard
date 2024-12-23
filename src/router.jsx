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
        index: true, // This will automatically load Dashboard when the path is "/"
        element: <Navigate to="/dashboard" />, // Redirect to dashboard
      },
      {
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
        element: <Navigate to="/dashboard" />, // Redirect all unknown paths to dashboard
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
