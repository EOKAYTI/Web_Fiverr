import React from "react";
import "./guides.scss";

const Guides = () => {
  return (
    <section className="guides">
      <div className="container">
        <div className="guides_title">
          <h3>Guides to help you grow</h3>
          <a href="#">See more</a>
        </div>
        <div className="guides_group">
          <div className="guides_item">
            <img src="./gui1.webp" alt="" />
            <p>Start a side business</p>
          </div>
          <div className="guides_item">
            <img src="./gui2.webp" alt="" />
            <p>Ecommerce bussiness ideas</p>
          </div>
          <div className="guides_item">
            <img src="./gui3.webp" alt="" />
            <p>Start an online business and work form home</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guides;
