import React, { useEffect } from "react";
import "./ListDetail.scss";
import { congViecService } from "../../../../services/congViec.service";

const ListDetail = () => {
  useEffect((keyword) => {
    congViecService
      .getCongViecTheoChiTietLoai()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="list_detail">
      <div className="container">
        <div className="list_group">
          <div className="list_item">
            <img src="" alt="" />
            <div className="item_content"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListDetail;
