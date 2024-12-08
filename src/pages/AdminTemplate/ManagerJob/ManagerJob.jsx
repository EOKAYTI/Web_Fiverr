import { Button, Modal, Table } from "antd";
import React, { useEffect, useState } from "react";
import { congViecService } from "../../../services/congViec.service";

const ManagerJob = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listJob, setListJob] = useState([]);

  const layDanhSachCongViec = () => {
    congViecService
      .getDanhSachCongviec()
      .then((res) => {
        console.log(res);
        setListJob(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    layDanhSachCongViec();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "1",
      width: 50,
    },
    {
      title: "Tên công việc",
      dataIndex: "tenCongViec",
      key: "2",
      width: 300,
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      key: "3",
      width: 150,
      render: (text, record, index) => {
        return (
          <img
            src={text}
            alt="Hình ảnh công việc"
            style={{
              width: 100,
              height: 100,
              objectFit: "cover",
              borderRadius: 8,
              display: "inline-block",
            }}
          />
        );
      },
    },
    {
      title: "Mô tả",
      dataIndex: "moTaNgan",
      key: "4",
      width: 600,
    },
    {
      title: "Giá tiền",
      dataIndex: "giaTien",
      key: "5",
      width: 100,
    },
    {
      title: "Đánh giá",
      dataIndex: "danhGia",
      key: "5",
      width: 100,
    },
    {
      title: "Hành động",
      key: "7",
      width: 200,
      render: () => {
        return (
          <div>
            <Button>Xóa</Button>
            <Button>Sứa</Button>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <h1 className="font-bold text-3xl">Danh sách công việc</h1>
      <Button
        onClick={() => {
          setIsModalOpen(true);
        }}
        variant="solid"
        className="bg-green-600 text-white"
        size="large"
      >
        Thêm công việc
      </Button>
      <Table dataSource={listJob} columns={columns} />
    </div>
  );
};

export default ManagerJob;
