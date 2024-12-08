import React from "react";
import Banner from "./components/Banner/Banner";
import Item from "./components/Item/Item";
import Services from "./components/Services/Services";
import TryNow from "./components/TryNow/TryNow";
import Video from "./components/Video/Video";
import Goto from "./components/Goto/Goto";
import Make from "./components/Make/Make";
import Logo from "./components/Logo/Logo";
import MadeOn from "./components/MadeOn/MadeOn";
import Guides from "./components/Guides/Guides";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Item />
      <Services />
      <TryNow />
      <Video />
      <Goto />
      <Make />
      <Logo />
      {/* <MadeOn /> */}
      <Guides />
    </div>
  );
};

export default HomePage;
