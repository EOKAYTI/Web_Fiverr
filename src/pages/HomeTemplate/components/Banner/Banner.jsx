import React from "react";
import "./banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner_img">
          <div className="banner_content">
            <h1>
              Scale your professional workforce with <span>freelancers</span>
            </h1>
            <div className="banner_search">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search for any service..."
              />
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="banner_logo">
              <p>Trusted by:</p>
              <ul>
                <li>
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta.ff37dd3.svg"
                    alt="meta"
                    width="70"
                    height="14"
                  ></img>
                </li>
                <li>
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/google.e74f4d9.svg"
                    alt="Google"
                    width="53.41"
                    height="17.87"
                  />
                </li>
                <li>
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/netflix.b310314.svg"
                    alt="NETFLIX"
                    width="53.64"
                    height="14.37"
                  />
                </li>
                <li>
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/pg.22fca85.svg"
                    alt="P&amp;G"
                    width="33.13"
                    height="13.8"
                  />
                </li>
                <li>
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/paypal.d398de5.svg"
                    alt="PayPal"
                    width="53.01"
                    height="12.69"
                  />
                </li>
                <li>
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/payoneer.7c1170d.svg"
                    alt="Payoneer"
                    width="82.42"
                    height="16"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
