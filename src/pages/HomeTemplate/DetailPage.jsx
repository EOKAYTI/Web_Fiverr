import React, { useEffect, useMemo, useState } from "react";
import { congViecService } from "../../services/congViec.service";
import { useParams } from "react-router-dom";

import "./detailPage.scss";
import { binhLuanService } from "../../services/binhLuan.service";

const DetailPage = () => {
  const { id } = useParams(); // Lấy id từ URL
  console.log(id);

  const [listMenu, setListMenu] = useState([]);
  const [detailJob, setDetailJob] = useState([]);
  const [listComment, setListComment] = useState([]);

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
              <p>{item.tenNguoiTao}</p>
              <p>3 orders in queue</p>
              <i class="fa-solid fa-star"></i>2.0 (77 reviews)
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
              <div className="comment_rating">
                <div className="star">
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
            </div>
          </div>
        </div>
      );
    });
  });
  return (
    <div>
      <section className="sub_menu">
        <div className="container">
          <div className="menu_group flex justify-between ">{itemListMenu}</div>
        </div>
      </section>

      <section className="detail">
        <div className="container">
          <div className="detail_group flex justify-between">
            <div className="detail_left w-6/12">
              {itemDetailJob} {itemListComment}
            </div>
            <div className="detail_right w-6/12">hi</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailPage;
