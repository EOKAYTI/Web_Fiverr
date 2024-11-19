import React from "react";
import HeaderTemplate from "./components/HeaderTemplate";
import { Outlet } from "react-router-dom";
import FooterTemplate from "./components/FooterTemplate";
import Services from "./components/Services/Services";
import TryNow from "./components/TryNow/TryNow";

const HomeTemplate = () => {
  return (
    <>
      <HeaderTemplate />
      <Services />
      <TryNow />
      <Outlet />
      <FooterTemplate />
    </>
  );
};

export default HomeTemplate;
