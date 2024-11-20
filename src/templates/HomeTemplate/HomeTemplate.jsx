import React from "react";
import HeaderTemplate from "./components/HeaderTemplate";
import { Outlet } from "react-router-dom";
import FooterTemplate from "./components/FooterTemplate";
import Services from "./components/Services/Services";
import TryNow from "./components/TryNow/TryNow";
import Banner from "./components/Banner/Banner";
import Item from "./components/Item/Item";
import Video from "./components/Video/Video";

const HomeTemplate = () => {
  return (
    <>
      <HeaderTemplate />
      <Banner />
      <Item />
      <Services />
      <TryNow />
      <Video />
      <Outlet />
      <FooterTemplate />
    </>
  );
};

export default HomeTemplate;
