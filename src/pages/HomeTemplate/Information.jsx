import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { nguoiDungService } from "../../services/nguoiDung.service";

import "./information.scss";
import Nav from "./components/Nav/Nav";
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
    <div>
      <Nav />
      <div className="info bg-[#F5F5F5]">
        <div className="container">
          <div className="info_content">
            <div className="info_left">
              <div className="user_info">
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
                <div className="edit">
                  <i className="fa-solid fa-pen-to-square"></i>
                </div>
              </div>
              <div className="user_update">
                <div className="decription">
                  <h4>Decription</h4>
                  <p>Edit decription</p>
                </div>
                <div className="language">
                  <h4>Languages</h4>
                  <p>Add now</p>
                </div>
                <div className="linked">
                  <h4>Linked Account</h4>
                  <ul>
                    <li>
                      <a href="#">+ Facebook</a>
                    </li>
                    <li>
                      <a href="#">+ Dribbble</a>
                    </li>
                    <li>
                      <a href="#">+ Stack 0verflow</a>
                    </li>
                    <li>
                      <a href="#">+ Github</a>
                    </li>
                    <li>
                      <a href="#">+ Twitter</a>
                    </li>
                  </ul>
                </div>
                <div className="skill">
                  <h4>Skill</h4>
                  <p>Add now</p>
                </div>
                <div className="education">
                  <h4>Education</h4>
                  <p>Add now</p>
                </div>
                <div className="certification">
                  <h4>Certification</h4>
                  <p>Add now</p>
                </div>
              </div>
            </div>
            <div className="info_right">Chưa thuê công việc nào</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
