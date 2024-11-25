import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./guides.scss";

const Guides = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} customArrow`}
        style={{
          // ...style,
          padding: "25px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} customArrow`}
        style={{
          // ...style,
          padding: "25px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          color: "blue",
          position: "absolute",
          zIndex: "1",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="guides">
      <div className="container">
        <div className="guides_title">
          <h3>Guides to help you grow</h3>
          <a href="#">See more</a>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            <div className="guides_item">
              <img src="./guides/gui1.webp" alt="" />
              <p>Start a side business</p>
            </div>
            <div className="guides_item">
              <img src="./guides/gui2.webp" alt="" />
              <p>Ecommerce bussiness ideas</p>
            </div>
            <div className="guides_item">
              <img src="./guides/gui3.webp" alt="" />
              <p>Start an online business and work form home</p>
            </div>
            <div className="guides_item">
              <img src="./guides/gui4.webp" alt="" />
              <p>Build a website from scratch</p>
            </div>
            <div className="guides_item">
              <img src="./guides/gui5.webp" alt="" />
              <p>Grow your business with AI</p>
            </div>
            <div className="guides_item">
              <img src="./guides/gui6.jpg" alt="" />
              <p>Create a logo for your business</p>
            </div>
          </Slider>
        </div>

        {/* <div className="guides_group">
          <div className="guides_item">
            <img src="./guides/gui1.webp" alt="" />
            <p>Start a side business</p>
          </div>
          <div className="guides_item">
            <img src="./guides/gui2.webp" alt="" />
            <p>Ecommerce bussiness ideas</p>
          </div>
          <div className="guides_item">
            <img src="./guides/gui3.webp" alt="" />
            <p>Start an online business and work form home</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Guides;
