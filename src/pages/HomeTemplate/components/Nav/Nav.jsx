import React, { useEffect, useMemo, useState } from "react";
import "./nav.scss";
import { congViecService } from "../../../../services/congViec.service";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const [listMenu, setListMenu] = useState([]);

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
        <div key={index} className="menu_item">
          <p
            className="menu_hover"
            onClick={() => {
              navigate(`/category/${item.id}`);
            }}
          >
            {item.tenLoaiCongViec}
          </p>
        </div>
      );
    });
  });

  return (
    <div>
      <section className="sub_menu mt-[70px]">
        <div className="container">
          <div className="menu_group flex justify-between ">{itemListMenu}</div>
        </div>
      </section>
    </div>
  );
};

export default Nav;
