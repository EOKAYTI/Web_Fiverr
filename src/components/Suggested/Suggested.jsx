import React from "react";
import "./suggested.scss";

const Suggested = () => {
  return (
    <section className="suggested">
      <div className="container">
        <div className="suggested_content">
          <p>Suggested</p>
          <ul>
            <li>
              <a href="">video editing</a>
            </li>
            <li>
              <a href="">web development</a>
            </li>
            <li>
              <a href="">copy writing</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Suggested;
