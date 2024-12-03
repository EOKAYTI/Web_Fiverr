import React from "react";
import "./inputSearch.scss";
import { Input } from "antd";

const InputSearch = ({
  placeholder,
  value,
  handleChange,
  handleClick,
  handleSearch,
}) => {
  return (
    <Input.Search
      onSearch={handleSearch}
      onClick={handleClick}
      onChange={handleChange}
      className="input_search"
      placeholder={placeholder}
    />
  );
};

export default InputSearch;
