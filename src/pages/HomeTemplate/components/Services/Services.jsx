import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./services.scss";

const Services = () => {
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
    slidesToShow: 6,
    slidesToScroll: 6,
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
          autoplay: true,
          autoplaySpeed: 3000,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          dots: false,
        },
      },
    ],
  };

  return (
    <section className="services">
      <div className="container">
        <h2 className="text-5xl mb-10">Popular services</h2>
        <div className="slider-container">
          <Slider {...settings}>
            {/* 6 đầu */}
            <div className="service_group_item">
              <div className="services_item bg-[#1F8447] p-1 rounded-2xl pt-5">
                <h3 className="px-[10px] text-lg text-white font-semibold">
                  Website Development
                </h3>
                <img
                  className="rounded-2xl"
                  src="./services/s1.webp"
                  alt="s1"
                />
              </div>
            </div>
            <div className="service_group_item">
              <div className="services_item bg-[#FF7640] p-1 rounded-2xl flex flex-col justify-between pt-5">
                <h3 className="px-[10px] text-lg text-white font-semibold">
                  Logo Design
                </h3>
                <img
                  className="rounded-2xl"
                  src="./services/s2.webp"
                  alt="s1"
                />
              </div>
            </div>
            <div className="service_group_item">
              <div className="services_item bg-[#003912] p-1 rounded-2xl flex flex-col justify-between pt-5">
                <h3 className="px-[10px] text-lg text-white font-semibold">
                  SEO
                </h3>
                <img
                  className="rounded-2xl"
                  src="./services/s3.webp"
                  alt="s1"
                />
              </div>
            </div>
            <div className="service_group_item">
              <div className="services_item bg-[#633341] p-1 rounded-2xl flex flex-col justify-between pt-5">
                <h3 className="px-[10px] text-lg text-white font-semibold">
                  Architecture & Interior Design
                </h3>
                <img
                  className="rounded-2xl"
                  src="./services/s4.webp"
                  alt="s1"
                />
              </div>
            </div>
            <div className="service_group_item">
              <div className="services_item bg-[#687200] p-1 rounded-2xl flex flex-col justify-between pt-5">
                <h3 className="px-[10px] text-lg text-white font-semibold">
                  Social Media Marketing
                </h3>
                <img
                  className="rounded-2xl"
                  src="./services/s5.webp"
                  alt="s1"
                />
              </div>
            </div>
            <div className="service_group_item">
              <div className="services_item bg-[#59301F] p-1 rounded-2xl flex flex-col justify-between pt-5">
                <h3 className="px-[10px] text-lg text-white font-semibold">
                  Voice Over
                </h3>
                <img
                  className="rounded-2xl"
                  src="./services/s6.webp"
                  alt="s1"
                />
              </div>
            </div>
            {/* 6 sau */}
            <div className="service_group_item">
              <div className="services_item bg-[#BE5272] p-1 rounded-2xl pt-5">
                <h3 className="px-[10px] text-lg text-white font-semibold">
                  UGC Videos
                </h3>
                <img
                  className="rounded-2xl"
                  src="./services/s7.webp"
                  alt="s1"
                />
              </div>
            </div>
            <div className="service_group_item">
              <div className="services_item bg-[#40591F] p-1 rounded-2xl flex flex-col justify-between pt-5">
                <h3 className="px-[10px] text-lg text-white font-semibold">
                  Software Development
                </h3>
                <img
                  className="rounded-2xl"
                  src="./services/s8.webp"
                  alt="s1"
                />
              </div>
            </div>
            <div className="service_group_item">
              <div className="services_item bg-[#9D431F] p-1 rounded-2xl flex flex-col justify-between pt-5">
                <h3 className="px-[10px] text-lg text-white font-semibold">
                  Data Science & ML
                </h3>
                <img
                  className="rounded-2xl"
                  src="./services/s9.webp"
                  alt="s1"
                />
              </div>
            </div>
            <div className="service_group_item">
              <div className="services_item bg-[#7A831F] p-1 rounded-2xl flex flex-col justify-between pt-5">
                <h3 className="px-[10px] text-lg text-white font-semibold">
                  Product Photography
                </h3>
                <img
                  className="rounded-2xl"
                  src="./services/s10.webp"
                  alt="s1"
                />
              </div>
            </div>
            <div className="service_group_item">
              <div className="services_item bg-[#1F8447] p-1 rounded-2xl flex flex-col justify-between pt-5">
                <h3 className="px-[10px] text-lg text-white font-semibold">
                  E-Commerce Marketing
                </h3>
                <img
                  className="rounded-2xl"
                  src="./services/s11.webp"
                  alt="s1"
                />
              </div>
            </div>
            <div className="service_group_item">
              <div className="services_item bg-[#C66783] p-1 rounded-2xl flex flex-col justify-between pt-5">
                <h3 className="px-[10px] text-lg text-white font-semibold">
                  Video Editing
                </h3>
                <img
                  className="rounded-2xl"
                  src="./services/s12.webp"
                  alt="s1"
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Services;
