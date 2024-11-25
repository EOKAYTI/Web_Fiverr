import React from "react";
import SubMenu from "./components/SubMenu/SubMenu";
import Suggested from "../../components/Suggested/Suggested";
import Results from "./components/Results/Results";
import ListDetail from "./components/ListDetail/ListDetail";

const SearchPage = () => {
  return (
    <div>
      <SubMenu />
      <Suggested />
      <Results />
      <ListDetail />
    </div>
  );
};

export default SearchPage;
