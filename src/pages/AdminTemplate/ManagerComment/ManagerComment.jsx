import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { binhLuanService } from "../../../services/binhLuan.service";

const ManagerComment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [listBinhLuan, setListBinhLuan] = useState([]);
  const layDanhSachBinhLuan = () => {
    binhLuanService
      .getDanhSachBinhLuan()
      .then((res) => {
        console.log(res);
        setListBinhLuan(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    layDanhSachBinhLuan();
  });

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "1",
      width: 150,
    },
    {
      title: "Mã công việc",
      dataIndex: "maCongViec",
      key: "2",
      width: 200,
    },
    {
      title: "Mã người bình luận",
      dataIndex: "maNguoiBinhLuan",
      key: "3",
      width: 200,
    },
    {
      title: "Ngày bình luận",
      dataIndex: "ngayBinhLuan",
      key: "4",
      width: 300,
    },
    {
      title: "Nội dung",
      dataIndex: "noiDung",
      key: "5",
      width: 400,
    },
    {
      title: "Đánh giá bình luận",
      dataIndex: "saoBinhLuan",
      key: "5",
      width: 200,
    },
    {
      title: "Hành động",
      key: "7",
      width: 250,
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
      <h1 className="font-bold text-3xl">Danh sách bình luận</h1>
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
      <Table dataSource={listBinhLuan} columns={columns} />
    </div>
  );
};

export default ManagerComment;
