import React, { useContext, useEffect, useState } from "react";
import InputCustom from "../../../../components/input/inputCustom/InputCustom";
import { Button, DatePicker } from "antd";
import { useFormik } from "formik";
import { binhLuanService } from "../../../../services/binhLuan.service";
import { NotificationContext } from "../../../../App";

const FormAddComment = ({ handleCloseModal, layDanhSachBinhLuan }) => {
  // const localData = JSON.parse(localStorage.getItem("userInfo"));

  // // Lấy token
  // const token = localData?.token;

  // console.log(token);

  const handleNotification = useContext(NotificationContext);

  const {
    handleChange,
    handleBlur,
    errors,
    touched,
    handleSubmit,
    values,
    setFieldValue,
  } = useFormik({
    initialValues: {
      id: 0,
      maCongViec: 0,
      maNguoiBinhLuan: 0,
      ngayBinhLuan: "",
      noiDung: "",
      saoBinhLuan: 0,
    },
    onSubmit: (values) => {
      console.log(values);
      binhLuanService
        .themBinhLuan(values)
        .then((res) => {
          console.log(res);
          handleCloseModal();
          layDanhSachBinhLuan();
          handleNotification("success", "Thêm bình luận thành công");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit} action="" className="space-y-3">
        <InputCustom
          id="id"
          name="id"
          value={values.id}
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.id}
          touched={touched.id}
          labelContent={"ID"}
          placeholder={"Vui lòng nhập ID"}
        />
        <InputCustom
          id="maCongViec"
          name="maCongViec"
          value={values.maCongViec}
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.maCongViec}
          touched={touched.maCongViec}
          labelContent={"Mã công việc"}
          placeholder={"Vui lòng nhập mã công việc"}
        />
        <InputCustom
          id="maNguoiBinhLuan"
          name="maNguoiBinhLuan"
          value={values.maNguoiBinhLuan}
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.maNguoiBinhLuan}
          touched={touched.maNguoiBinhLuan}
          labelContent={"Mã người bình luận"}
          placeholder={"Vui lòng nhập mã người bình luận"}
        />
        <div>
          <label className="font-medium mb-1 block" htmlFor="">
            Ngày bình luận
          </label>
          <DatePicker
            onChange={(date, dateString) => {
              setFieldValue("ngayBinhLuan", dateString);
            }}
            format="DD-MM-YYYY"
            className="w-full"
          />
        </div>
        <InputCustom
          id="noiDung"
          name="noiDung"
          value={values.noiDung}
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.noiDung}
          touched={touched.noiDung}
          labelContent={"Nội dung"}
          placeholder={"Vui lòng nhập nội dung"}
        />
        <InputCustom
          id="saoBinhLuan"
          name="saoBinhLuan"
          value={values.saoBinhLuan}
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.saoBinhLuan}
          touched={touched.saoBinhLuan}
          labelContent={"Đánh giá bình luận"}
          placeholder={"Vui lòng đánh giá bình luận"}
        />
        <div className="text-right">
          <Button
            htmlType="submit"
            variant="solid"
            className="bg-black text-white"
          >
            Xác nhận
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormAddComment;
