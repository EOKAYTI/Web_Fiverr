import React, { useEffect, useMemo, useState } from "react";
import "./banner.scss";
import InputSearch from "../../../../components/input/inputSearch/InputSearch";
import { congViecService } from "../../../../services/congViec.service";
import { useDebounce } from "use-debounce";
import { Dropdown } from "antd";
import useViewPort from "../../../../hooks/useViewPort";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const { width } = useViewPort();
  const [keyword, setKeyword] = useState("");
  const [value] = useDebounce(keyword, 1000);
  const [listSearch, setListSearch] = useState([]);

  const [openDropdown, setOpenDropdown] = useState(false);

  const navigate = useNavigate();

  const handleChangeKeyword = (event) => {
    setKeyword(event.target.value);
  };
  const handleClickInputSearch = () => {
    setOpenDropdown(true);
  };

  const handleSearch = (value) => {
    if (value.trim()) {
      navigate(`/search?query=${value.trim()}`); // Chuyển hướng sang trang khác
    }
  };
  useEffect(() => {
    if (value) {
      congViecService
        .getCongViecTheoTen(value)
        .then((res) => {
          console.log(res);
          setListSearch(res.data.content);
          setOpenDropdown(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [value]);

  const itemListSearch = useMemo(() => {
    return listSearch.slice(0, 4).map((item, index) => {
      return {
        key: item.id,
        label: (
          <div className="flex items-center">
            <img
              src={item.congViec.hinhAnh}
              className="w-16 h-16 mr-3"
              alt=""
            />
            <div>
              <h4 className="text-lg font-semibold">
                {item.congViec.tenCongViec}
              </h4>
              <p className="mt-2">Đánh giá:{item.congViec.danhGia}</p>
            </div>
          </div>
        ),
      };
    });
  }, [listSearch]);

  return (
    <div className="banner">
      <div className="container">
        <div className="banner_img">
          <div className="banner_content">
            <h1>
              Scale your professional workforce with <span>freelancers</span>
            </h1>
            <div className="banner_search">
              {width > 576 && (
                <Dropdown
                  overlayClassName="dropdown-suggest"
                  open={openDropdown}
                  menu={{
                    items: itemListSearch,
                    onMouseLeave: () => {
                      setOpenDropdown(false);
                    },
                  }}
                >
                  <div className="input_search w-full">
                    <InputSearch
                      handleSearch={handleSearch}
                      handleClick={handleClickInputSearch}
                      handleChange={handleChangeKeyword}
                      value={keyword}
                      placeholder={"Search for any service..."}
                    />
                  </div>
                </Dropdown>
              )}
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
