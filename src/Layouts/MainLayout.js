import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import mainlayoutStyle from "./MainLayout.module.css";

function MainLayout() {
  return (
    <div className={mainlayoutStyle.container}>
      <MainHeader />
      <Outlet />
    </div>
  );
}

export default MainLayout;
