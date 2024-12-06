import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { nguoiDungService } from "../../services/nguoiDung.service";

import "./information.scss";
const Information = () => {
  const { id } = useParams(); // Lấy id từ URL
  const [info, setInfo] = useState([]);

  //   GET: /api/users/{id}
  useEffect(() => {
    nguoiDungService
      .layNguoiDungBangId(id)
      .then((res) => {
        console.log(res);
        let item = res.data.content;
        setInfo(item);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="info bg-[#F5F5F5]">
      <div className="container">
        <div className="info_content">
          <div className="info_left">
            <div className="avatar">
              {info.name ? (
                <div className="avatar-initials bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  {info.name.charAt(0).toUpperCase()}{" "}
                  {/* Lấy chữ cái đầu và in hoa */}
                </div>
              ) : (
                <i className="fa-regular fa-user text-gray-400 text-9xl"></i>
              )}
            </div>
            <div className="name">
              <p> {info.name}</p>
            </div>
            <div className="email">
              <p>{info.email}</p>
            </div>
          </div>
          <div className="info_right">hi</div>
        </div>
      </div>
    </div>
  );
};

export default Information;
