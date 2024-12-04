import React, { useEffect, useMemo, useState } from "react";
import SubMenu from "./components/SubMenu/SubMenu";
import Suggested from "../../components/Suggested/Suggested";
import Results from "./components/Results/Results";
import ListDetail from "./components/ListDetail/ListDetail";
import { useDebounce } from "use-debounce";
import { useLocation, useNavigate } from "react-router-dom";
import { congViecService } from "../../services/congViec.service";

import "./searchPage.scss";

const SearchPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  const navigate = useNavigate();

  let count = 0;

  const [value] = useDebounce(query, 1000);

  const [listRelate, setListRelate] = useState([]);

  const [listMenu, setListMenu] = useState([]);

  // const handleItemClick = (id) => {
  //   console.log("Đã click");
  //   navigate(`/detail?query=${id}`); // Chuyển hướng sang trang khác
  // };

  // GET: /api/cong-viec/lay-menu-loai-cong-viec
  useEffect(() => {
    congViecService
      .getMenuLoaiCongViec()
      .then((res) => {
        console.log(res);
        setListMenu(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemListMenu = useMemo(() => {
    return listMenu.map((item, index) => {
      return (
        <div className="menu_item">
          <p>{item.tenLoaiCongViec}</p>
        </div>
      );
    });
  });

  // GET: /api/cong-viec/lay-danh-sach-cong-viec-theo-ten/{TenCongViec}
  useEffect(() => {
    if (value) {
      congViecService
        .getCongViecTheoTen(value)
        .then((res) => {
          console.log(res);
          console.log(res.data.content);
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
              <i class="fa-solid fa-star"></i>
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
      {/* <SubMenu /> */}
      <section className="sub_menu">
        <div className="container">
          <div className="menu_group flex justify-between ">{itemListMenu}</div>
        </div>
      </section>

      <Suggested />
      <Results result={query} number={count} />
      <ListDetail />
      <div className="container">
        <div className="relate_group grid grid-cols-4 gap-5">
          {itemListRelate}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
