import React from "react";
import SubDropdown from "../../../../components/SubDropdown/SubDropdown";
import "./subMenu.scss";
import Slider from "react-slick";

const SubMenu = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 4,
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
    <section className="sub_menu">
      <div className="container">
        <div className="slider-container">
          <Slider {...settings}>
            <div className="sub_item inline-block">
              <SubDropdown
                title="Graphics & Design"
                item={[
                  {
                    label: "menu số 1",
                    key: "1",
                  },
                  {
                    label: "menu số 1",
                    key: "2",
                  },
                  {
                    label: "menu số 1",
                    key: "3",
                  },
                ]}
              />
            </div>
            <div className="sub_item inline-block">
              <SubDropdown title="Programming & Tech" />
            </div>
            <div className="sub_item inline-block">
              <SubDropdown title="Digital Marketing" />
            </div>
            <div className="sub_item inline-block">
              <SubDropdown title="Video & Animation" />
            </div>
            <div className="sub_item inline-block">
              <SubDropdown title="Writing & Translation" />
            </div>
            <div className="sub_item inline-block">
              <SubDropdown title="Music & Audio" />
            </div>
            <div className="sub_item inline-block">
              <SubDropdown title="Business" />
            </div>
            <div className="sub_item inline-block">
              <SubDropdown title="Finance" />
            </div>
            <div className="sub_item inline-block">
              <SubDropdown title="AI Services" />
            </div>
            <div className="sub_item inline-block">
              <SubDropdown title="Personal Growth" />
            </div>
            <div className="sub_item inline-block">
              <SubDropdown title="Consulting" />
            </div>
            <div className="sub_item inline-block">
              <SubDropdown title="Photography" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SubMenu;
