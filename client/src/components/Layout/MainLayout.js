import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Layout/Header";
import Menu from "../Layout/Menu";
import Footer from "../Layout/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Menu />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
