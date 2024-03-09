import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import DashboardDesktop from "pages/DashboardDesktop";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "dashboarddesktop",
      element: <DashboardDesktop />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
