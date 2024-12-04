import React from "react";
import "./results.scss";
import ResultsDropdown from "../../../../components/ResultsDropdown/ResultsDropdown";
import { Switch } from "antd";

import DropdownHeader from "../../../../components/dropdown/DropdownHeader";
const Results = ({ result, number }) => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <section className="results">
      <div className="container">
        <div className="results_content">
          <h1>
            Results for <span>{result}</span>
          </h1>
          <div className="results_group">
            <div className="results_dropdown">
              <ResultsDropdown title="Category" />
              <ResultsDropdown title="Service options" />
              <ResultsDropdown title="Seller details" />
              <ResultsDropdown title="Budget" />
              <ResultsDropdown title="Delivery time" />
            </div>
            <div className="results_switch">
              <Switch defaultChecked onChange={onChange} />
              <p>Pro service</p>
            </div>
          </div>
          <div className="results_number">
            <p>{number} results</p>
            <div className="results_sort">
              <p>Sort by:</p>
              <DropdownHeader buttonContent="Relevance" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
