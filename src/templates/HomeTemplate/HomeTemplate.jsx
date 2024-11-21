import React from "react";
import HeaderTemplate from "./components/HeaderTemplate";
import { Outlet } from "react-router-dom";
import FooterTemplate from "./components/FooterTemplate";
import Services from "./components/Services/Services";
import TryNow from "./components/TryNow/TryNow";
import Banner from "./components/Banner/Banner";
import Item from "./components/Item/Item";
import Video from "./components/Video/Video";
import Goto from "./components/Goto/Goto";
import Make from "./components/Make/Make";
import Logo from "./components/Logo/Logo";
import Guides from "./components/Guides/Guides";
import Freelance from "./components/Freelance/Freelance";

const HomeTemplate = () => {
  return (
    <>
      <HeaderTemplate />
      <Banner />
      <Item />
      <Services />
      <TryNow />
      <Video />
      <Goto />
      <Make />
      <Logo />
      <Guides />
      <Freelance />
      <Outlet />
      <FooterTemplate />
    </>
  );
};

export default HomeTemplate;
