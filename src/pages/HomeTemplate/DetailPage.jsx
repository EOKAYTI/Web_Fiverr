import React, { useEffect, useMemo, useState } from "react";
import { congViecService } from "../../services/congViec.service";
import { useParams } from "react-router-dom";
import { binhLuanService } from "../../services/binhLuan.service";
import Nav from "./components/Nav/Nav";
import "./detailPage.scss";

const DetailPage = () => {
  const { id } = useParams(); // Lấy id từ URL
  const [detailJob, setDetailJob] = useState([]);
  const [listComment, setListComment] = useState([]);

  // GET: /api/cong-viec/lay-cong-viec-chi-tiet/{MaCongViec}
  useEffect(() => {
    congViecService
      .getCongViecChiTiet(id)
      .then((res) => {
        console.log("Thành công");
        console.log(res.data.content);
        setDetailJob(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemDetailJob = useMemo(() => {
    return detailJob.map((item, index) => {
      return (
        <div className="detail_item">
          <h1>{item.congViec.tenCongViec}</h1>
          <div className="detail_info">
            <img className="w-16 rounded-full" src={item.avatar} alt="" />
            <div className="info">
              <div className="info_title">
                <p className="info_name">{item.tenNguoiTao}</p>
                <p>3 orders in queue</p>
              </div>
              <div className="info_rating">
                {Array.from({ length: 5 }, (_, index) => (
                  <i
                    key={index}
                    className={
                      index < item.congViec.saoCongViec
                        ? "fa-solid fa-star " // Icon tô màu
                        : "fa-regular fa-star" // Icon không tô màu
                    }
                  ></i>
                ))}
                <p>{`${item.congViec.saoCongViec}.0`}</p>
                <p className="danhGia">{`(${item.congViec.danhGia})`}</p>
              </div>
            </div>
          </div>
          <img className="detai_img" src={item.congViec.hinhAnh} alt="" />
          <div className="detail_content">
            <p>{item.congViec.moTa}</p>
          </div>
        </div>
      );
    });
  });

  const itemMoTa = useMemo(() => {
    return detailJob.map((item, index) => {
      return (
        <div className="moTa">
          <div className="moTa_top space-y-4">
            <div className="moTa_title">Basic</div>
            <div className="moTa_price">
              <div className="price_title">✅ Basic Pack</div>
              <div className="price"> US${item.congViec.giaTien}</div>
            </div>
            <div className="moTa_content">
              <p>{item.congViec.moTaNgan}</p>
            </div>
            <div className="moTa_btn">
              <button>Continue</button>
            </div>
            <div className="moTa_compare">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // Vô hiệu hóa hành động mặc định
                }}
              >
                Compare packages
              </a>
            </div>
          </div>
          <div className="moTa_bottom">
            <div className="btn_contact">
              <button>Contact me</button>
            </div>
          </div>
        </div>
      );
    });
  });

  // GET: /api/binh-luan/lay-binh-luan-theo-cong-viec/{MaCongViec}
  useEffect(() => {
    binhLuanService
      .getBinhLuanTheoCongViec(id)
      .then((res) => {
        console.log(res);
        setListComment(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemListComment = useMemo(() => {
    return listComment.map((item, index) => {
      return (
        <div className="comment">
          <div className="container">
            <div className="comment_group">
              <div className="comment_info">
                <img className="w-10" src={item.avatar} alt="" />
                <div className="info_user">
                  <p className="infor_name">{item.tenNguoiBinhLuan}</p>
                  <p>{item.ngayBinhLuan}</p>
                </div>
              </div>
              <div className="comment_upper space-y-2">
                <div className="comment_rating">
                  <div className="star space-x-1">
                    {Array.from({ length: 5 }, (_, index) => (
                      <i
                        key={index}
                        className={
                          index < item.saoBinhLuan
                            ? "fa-solid fa-star " // Icon tô màu
                            : "fa-regular fa-star" // Icon không tô màu
                        }
                      ></i>
                    ))}
                  </div>
                  <p>{item.saoBinhLuan}</p>
                </div>
                <div className="comment_content">
                  <p>{item.noiDung}</p>
                </div>
                <div className="comment_bottom">
                  <div className="bottom_left">
                    <p className="upto">Up to US$50</p>
                    <p className="second">Price </p>
                  </div>
                  <div className="bottom_right">
                    <p className="day">3 days</p>
                    <p className="second">Duration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  });

  return (
    <div>
      <Nav />
      <section className="detail">
        <div className="container">
          <div className="detail_group flex justify-between">
            <div className="detail_left w-6/12">
              {itemDetailJob} {itemListComment}
            </div>
            <div className="detail_right w-6/12">{itemMoTa}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailPage;
