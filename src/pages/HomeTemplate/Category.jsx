import React, { useEffect, useState } from "react";
import { congViecService } from "../../services/congViec.service";
import { useParams } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import "./category.scss";

const Category = () => {
  const { id } = useParams(); // Lấy id từ URL
  const [listMenu, setListMenu] = useState([]);

  // GET: /api/cong-viec/lay-menu-loai-cong-viec
  useEffect(() => {
    congViecService
      .getMenuLoaiCongViec()
      .then((res) => {
        setListMenu(res.data.content);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // Hàm để render chi tiết của nhóm công việc theo `id`
  const renderDetail = () => {
    const selectedCategory = listMenu.find((item) => item.id === Number(id));
    if (!selectedCategory) return <p>Không tìm thấy dữ liệu</p>;

    const placeholderImage =
      "https://static.vecteezy.com/system/resources/thumbnails/022/059/000/small/no-image-available-icon-vector.jpg"; // Link hình ảnh mặc định

    return (
      <div className="nhom_container">
        {selectedCategory.dsNhomChiTietLoai.map((nhom) => (
          <div className="nhom_column" key={nhom.id}>
            <div className="nhom_group">
              <div className="item">
                {/* Nếu không có hình ảnh, hiển thị placeholder */}
                <img
                  src={nhom.hinhAnh || placeholderImage}
                  alt={nhom.tenNhom}
                />
                <h3 className="font-bold">{nhom.tenNhom}</h3>
                <div className="nhom_relate">
                  {nhom.dsChiTietLoai.map((chiTiet) => (
                    <p key={chiTiet.id}>{chiTiet.tenChiTiet}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Nav />
      {/* Chi tiết công việc */}
      <section className="category_detail">
        <div className="container">{renderDetail()}</div>
      </section>
    </div>
  );
};

export default Category;
