import React, { useEffect, useMemo, useState } from "react";
import Results from "./components/Results/Results";
import { useDebounce } from "use-debounce";
import { useLocation, useNavigate } from "react-router-dom";
import { congViecService } from "../../services/congViec.service";
import Nav from "./components/Nav/Nav";
import "./searchPage.scss";

const SearchPage = () => {
  let count = 0;
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  const navigate = useNavigate();
  const [value] = useDebounce(query, 1000);
  const [listRelate, setListRelate] = useState([]);

  // GET: /api/cong-viec/lay-danh-sach-cong-viec-theo-ten/{TenCongViec}
  useEffect(() => {
    if (value) {
      congViecService
        .getCongViecTheoTen(value)
        .then((res) => {
          console.log(res);
          setListRelate(res.data.content);
          setOpenDropdown(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [value]);

  const itemListRelate = useMemo(() => {
    return listRelate.map((item, index) => {
      let id = item.id;
      count++;
      return (
        <div
          key={index}
          className="relate_item"
          onClick={() => {
            navigate(`/detail/${item.id}`);
          }}
        >
          <img
            className="w-full rounded-md"
            src={item.congViec.hinhAnh}
            alt=""
          />
          <div className="relate_group">
            <div className="relate_content">
              <div className="content_left">
                <img className="w-8 rounded-2xl" src={item.avatar} alt="" />
                <p className="font-bold">
                  <span>Ad by </span>
                  {item.tenNguoiTao}
                </p>
              </div>
              <div className="content_right">
                <p>Top Rated</p>
              </div>
            </div>
            <p className="tenCongViec">{item.congViec.tenCongViec}</p>
            <div className="relate_price">
              <i className="fa-solid fa-star"></i>
              <p>{item.congViec.saoCongViec}</p>
              <p>{`(${item.congViec.danhGia})`}</p>
            </div>
          </div>
        </div>
      );
    });
  });

  return (
    <div>
      <div className="hidden lg:block md:block sm:hidden">
        <Nav />
      </div>

      <div className="hidden lg:block md:block sm:hidden">
        <Results result={query} number={count} />
      </div>
      <div className="container">
        <div className="relate_group grid grid-cols-1 p-5 mt-20 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          {itemListRelate}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
