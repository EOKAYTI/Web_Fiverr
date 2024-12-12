import { Button, Modal, Popconfirm, Table } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { binhLuanService } from "../../../services/binhLuan.service";
import FormAddComment from "./components/FormAddComment";
import { NotificationContext } from "../../../App";

const ManagerComment = () => {
  const handleNotification = useContext(NotificationContext);

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
      key: "6",
      width: 200,
    },
    {
      title: "Hành động",
      key: "7",
      width: 250,
      render: (text, record, index) => {
        return (
          <div className="space-x-3">
            <Popconfirm
              title="Thực hiện xoá bình luận"
              description="Bạn có chắc muốn xoá bình luận này không?"
              onConfirm={() => {
                binhLuanService
                  .xoaBinhLuan(record.id)
                  .then((res) => {
                    layDanhSachBinhLuan();
                    handleNotification("success", res.data.message);
                  })
                  .catch((err) => {
                    layDanhSachBinhLuan();
                    handleNotification(
                      "error",
                      err.response?.data?.content || "Error deleting comment"
                    );
                  });
              }}
              onCancel={() => {}}
              okText="Yes"
              cancelText="No"
            >
              <Button danger>Xoá</Button>
            </Popconfirm>
            <Button className="border-yellow-500 text-yellow-500">Sửa</Button>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    layDanhSachBinhLuan();
  }, []);

  return (
    <div className="space-y-3">
      <h1 className="font-bold text-3xl">Danh sách bình luận</h1>
      <Button
        onClick={() => {
          setIsModalOpen(true);
        }}
        variant="solid"
        className="bg-green-600 text-white"
        size="large"
      >
        Thêm bình luận
      </Button>

      <Table dataSource={listBinhLuan} columns={columns} />

      <Modal
        onCancel={() => {
          setIsModalOpen(false);
        }}
        footer={null}
        title="Thêm bình luận"
        open={isModalOpen}
      >
        <FormAddComment
          handleCloseModal={() => setIsModalOpen(false)}
          layDanhSachBinhLuan={layDanhSachBinhLuan}
        />
      </Modal>
    </div>
  );
};

export default ManagerComment;
